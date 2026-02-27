# Azure Static Web Apps Deployment Guide

## Quick Start - Deploy in 5 Minutes

### Prerequisites
- Azure account (free tier available)
- GitHub account with this repository
- Code pushed to GitHub

### Step-by-Step Deployment

#### 1. Create Azure Static Web App

**Via Azure Portal:**

1. Go to https://portal.azure.com
2. Click **"Create a resource"**
3. Search for **"Static Web Apps"**
4. Click **"Create"**

#### 2. Fill in the Details

**Basics Tab:**
- **Subscription**: Select your Azure subscription
- **Resource Group**: Click "Create new" → Name it `tactyl-rg`
- **Name**: `tactyl-website` (this will be part of your URL)
- **Plan type**: Free (perfect for getting started)
- **Region**: East US 2 (or closest to your users)
- **Source**: GitHub

#### 3. Authenticate with GitHub

1. Click **"Sign in with GitHub"**
2. Authorize Azure Static Web Apps
3. Select:
   - **Organization**: Your GitHub username
   - **Repository**: Your repository name
   - **Branch**: `main` (or `master`)

#### 4. Build Configuration

**Important - Set these exactly:**
- **Build Presets**: Select **"React"** from dropdown
- **App location**: `/` (leave as is)
- **Api location**: *Leave empty* (no backend needed)
- **Output location**: `dist` (Vite's default output)

#### 5. Review and Create

1. Click **"Review + create"**
2. Review all settings
3. Click **"Create"**
4. Wait 2-3 minutes for deployment

#### 6. Get Your Live URL

Once deployment completes:
1. Click **"Go to resource"**
2. You'll see your URL: `https://nice-tree-123456789.azurestaticapps.net`
3. Click it to view your live site! 🎉

---

## GitHub Actions Automatic Deployment

Azure automatically created a GitHub Actions workflow in your repository:
- Location: `.github/workflows/azure-static-web-apps-[unique-id].yml`
- **Every push to `main` branch automatically rebuilds and deploys**
- View deployment status in GitHub → Actions tab

---

## Custom Domain Setup (tactyl.io)

### Option A: Simple CNAME (Recommended)

1. **In Azure Portal:**
   - Go to your Static Web App resource
   - Click **"Custom domains"** in the left menu
   - Click **"+ Add"**
   - Select **"Custom domain on other DNS"**

2. **In GoDaddy DNS Management:**
   
   **For www.tactyl.io:**
   ```
   Type: CNAME
   Name: www
   Value: nice-tree-123456789.azurestaticapps.net
   TTL: 600
   ```

   **For root domain (tactyl.io):**
   ```
   Type: CNAME (or ALIAS if available)
   Name: @
   Value: nice-tree-123456789.azurestaticapps.net
   TTL: 600
   ```

3. **Verify in Azure:**
   - Back in Azure, enter `www.tactyl.io`
   - Click **"Next"**
   - Azure will show you a TXT record to add:
     ```
     Type: TXT
     Name: _dnsauth.www
     Value: [Azure-provided-verification-token]
     TTL: 600
     ```
   - Add this TXT record in GoDaddy
   - Wait 5-10 minutes
   - Click **"Validate"** in Azure
   - Once validated, click **"Add"**

4. **Repeat for root domain** (tactyl.io)

### Option B: Azure DNS (Best Performance)

If GoDaddy doesn't support ALIAS records for root domain:

1. **Create Azure DNS Zone:**
   ```bash
   az network dns zone create \
     --resource-group tactyl-rg \
     --name tactyl.io
   ```

2. **Get Azure Nameservers:**
   ```bash
   az network dns zone show \
     --resource-group tactyl-rg \
     --name tactyl.io \
     --query nameServers
   ```
   
   You'll get 4 nameservers like:
   - `ns1-01.azure-dns.com.`
   - `ns2-01.azure-dns.net.`
   - `ns3-01.azure-dns.org.`
   - `ns4-01.azure-dns.info.`

3. **Update GoDaddy Nameservers:**
   - Login to GoDaddy
   - Go to your domain `tactyl.io`
   - Click **"Manage DNS"**
   - Scroll to **"Nameservers"**
   - Click **"Change"**
   - Select **"Custom"**
   - Enter all 4 Azure nameservers
   - Click **"Save"**
   - ⏰ Wait 24-48 hours for propagation

4. **Add DNS Records in Azure:**
   ```bash
   # CNAME for www
   az network dns record-set cname create \
     --resource-group tactyl-rg \
     --zone-name tactyl.io \
     --name www \
     --ttl 3600

   az network dns record-set cname set-record \
     --resource-group tactyl-rg \
     --zone-name tactyl.io \
     --record-set-name www \
     --cname nice-tree-123456789.azurestaticapps.net

   # A record for root domain
   # (Get IP from Azure Static Web App)
   az network dns record-set a add-record \
     --resource-group tactyl-rg \
     --zone-name tactyl.io \
     --record-set-name @ \
     --ipv4-address [Your-Static-Web-App-IP]
   ```

---

## SSL Certificate

**Good News**: Azure Static Web Apps provides **free, automatic SSL certificates** for:
- Default Azure domain (`*.azurestaticapps.net`)
- Custom domains (after verification)

**No action needed** - it's automatic! 🔒

---

## Environment Variables (If Needed)

To add environment variables for API keys, etc.:

1. In Azure Portal → Your Static Web App
2. Click **"Configuration"** in left menu
3. Click **"+ Add"** under Application settings
4. Add your variables (they'll be available as `import.meta.env.VITE_YOUR_VAR`)

**In your code:**
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

**In GitHub:**
- Add secrets in Repository Settings → Secrets and variables → Actions
- Reference in workflow: `${{ secrets.YOUR_SECRET }}`

---

## Monitoring & Analytics

### View Deployment Logs
1. Azure Portal → Your Static Web App
2. Click **"Deployment history"** - see all builds
3. Click any deployment to view logs

### Add Google Analytics
1. Get your GA4 Measurement ID
2. Add to `index.html` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Azure Application Insights (Optional)
```bash
az monitor app-insights component create \
  --app tactyl-insights \
  --location eastus \
  --resource-group tactyl-rg
```

---

## Troubleshooting

### ❌ Problem: Site shows 404 on refresh
**Solution**: Check `staticwebapp.config.json` exists in your root directory (already included!)

### ❌ Problem: GitHub Actions build fails
**Solution**: Check workflow file has correct paths:
```yaml
app_location: "/"
output_location: "dist"
```

### ❌ Problem: Custom domain not working
**Solution**: 
- Wait 24-48 hours for DNS propagation
- Check DNS with: `nslookup tactyl.io`
- Verify TXT record was added for validation

### ❌ Problem: PandaSuite iframe not loading
**Solution**: Check `staticwebapp.config.json` has CSP allowing iframe:
```json
"content-security-policy": "frame-src 'self' https://viewer.pandasuite.com;"
```

### ❌ Problem: Slow loading
**Solution**:
```bash
# Check bundle size
npm run build
# Output should be in dist/ folder
# Total should be < 1-2 MB
```

---

## Rollback to Previous Version

If something goes wrong:

1. **Via Azure Portal:**
   - Go to Static Web App → Deployment history
   - Find working deployment
   - Click **"Reactivate"**

2. **Via Git:**
   ```bash
   git log --oneline
   git revert [bad-commit-hash]
   git push
   ```
   GitHub Actions will auto-deploy the reverted code

---

## Cost Estimation

**Free Tier Includes:**
- 100 GB bandwidth/month
- 2 custom domains
- Free SSL certificates
- GitHub Actions CI/CD
- Global CDN

**For tactyl.io**: Should stay in free tier unless you get massive traffic!

**If you exceed free tier:**
- Standard plan: $9/month
- Includes 100 GB bandwidth + $0.20/GB overage

---

## Useful Azure CLI Commands

```bash
# View your static web app details
az staticwebapp show \
  --name tactyl-website \
  --resource-group tactyl-rg

# List all custom domains
az staticwebapp hostname list \
  --name tactyl-website \
  --resource-group tactyl-rg

# Delete a custom domain
az staticwebapp hostname delete \
  --name tactyl-website \
  --resource-group tactyl-rg \
  --hostname www.tactyl.io

# View deployment token (for manual deploys)
az staticwebapp secrets list \
  --name tactyl-website \
  --resource-group tactyl-rg
```

---

## Next Steps After Deployment

- [ ] Test all pages on live site
- [ ] Verify contact form works
- [ ] Test on mobile devices
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Set up custom domain
- [ ] Configure email forwarding for forms
- [ ] Add monitoring/uptime checks
- [ ] Share with team for feedback

---

## Support Resources

- **Azure Static Web Apps Docs**: https://learn.microsoft.com/azure/static-web-apps/
- **Azure Portal**: https://portal.azure.com
- **GitHub Actions Status**: https://github.com/[your-repo]/actions
- **DNS Checker**: https://dnschecker.org

---

**🎉 Congratulations!** Your Tactyl.io website is now live on Azure!
