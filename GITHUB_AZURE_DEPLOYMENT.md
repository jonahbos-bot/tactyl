# 🚀 Complete Guide: GitHub Setup + Azure Deployment

## Overview

This guide walks you through:
1. Creating a GitHub repository
2. Uploading your code
3. Deploying to Azure Static Web Apps
4. Connecting your custom domain

**Time required:** 15-20 minutes

---

# Part 1: Create GitHub Repository

## Step 1: Create GitHub Account (if needed)

1. Go to https://github.com
2. Click **Sign up**
3. Follow the registration process
4. Verify your email

---

## Step 2: Create New Repository

### **Option A: Through GitHub Website** (Easiest)

1. **Login to GitHub**
   - Go to https://github.com
   - Click **Sign in**

2. **Create Repository**
   - Click the **+** icon (top right)
   - Select **New repository**

3. **Repository Settings:**
   - **Repository name:** `tactyl-website` (or your preferred name)
   - **Description:** `Tactyl.io - Interactive Display Solutions Website`
   - **Visibility:** 
     - ✅ **Public** (recommended for free Azure deployment)
     - OR Private (works but may have limitations)
   - **Initialize repository:**
     - ❌ **DO NOT** check "Add a README file"
     - ❌ **DO NOT** add .gitignore
     - ❌ **DO NOT** choose a license
     - (We already have these files)

4. **Click "Create repository"**

5. **Copy the repository URL**
   - You'll see: `https://github.com/YOUR_USERNAME/tactyl-website.git`
   - **Keep this page open** - we'll use it in the next step

---

### **Option B: Through GitHub Desktop** (Alternative)

1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in
3. File → New Repository
4. Fill in details and create

---

## Step 3: Upload Your Code to GitHub

### **Using Command Line** (Recommended)

Open Command Prompt/Terminal in your project folder:

```cmd
# 1. Initialize Git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit - Tactyl.io website"

# 4. Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/tactyl-website.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

**If asked for credentials:**
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (see below)

---

### **Creating GitHub Personal Access Token** (if needed)

If you get authentication errors:

1. Go to https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. **Note:** `Tactyl.io deployment`
4. **Expiration:** 90 days (or your preference)
5. **Scopes:** Check `repo` (Full control of private repositories)
6. Click **Generate token**
7. **Copy the token** (you won't see it again!)
8. **Use this token as your password** when pushing to Git

---

### **Using GitHub Desktop** (Alternative)

1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose your project folder
4. Click "Publish repository"
5. Uncheck "Keep this code private" (for free Azure)
6. Click "Publish"

---

## Step 4: Verify Upload

1. Go to your repository on GitHub
2. URL: `https://github.com/YOUR_USERNAME/tactyl-website`
3. You should see all your files:
   - `src/` folder
   - `package.json`
   - `index.html`
   - `README.md`
   - etc.

✅ **Success!** Your code is now on GitHub.

---

# Part 2: Deploy to Azure Static Web Apps

## Step 1: Sign in to Azure

1. Go to https://portal.azure.com
2. Sign in with your Microsoft account
3. If you don't have an account:
   - Click "Create one"
   - Follow registration
   - You get **$200 free credit** for 30 days

---

## Step 2: Create Static Web App

1. **In Azure Portal:**
   - Click **Create a resource** (top left)
   - Search for: `Static Web Apps`
   - Click **Static Web Apps**
   - Click **Create**

---

## Step 3: Configure Basic Settings

### **Basics Tab:**

| Field | Value |
|-------|-------|
| **Subscription** | Select your subscription |
| **Resource Group** | Click "Create new" → Name: `tactyl-rg` |
| **Name** | `tactyl-website` (will be part of URL) |
| **Plan type** | **Free** (perfect for this site) |
| **Region** | Choose closest to your users (e.g., East US 2) |
| **Deployment source** | **GitHub** |

---

## Step 4: Connect to GitHub

1. Click **Sign in with GitHub**
2. **Authorize Azure Static Web Apps**
   - Click "Authorize Azure-App-Service-Static-Web-Apps"
   - Enter your GitHub password if prompted

3. **Select Repository:**
   - **Organization:** YOUR_USERNAME
   - **Repository:** tactyl-website
   - **Branch:** main

---

## Step 5: Build Configuration ⚠️ **IMPORTANT**

### **Build Details:**

| Field | Value |
|-------|-------|
| **Build Presets** | Select **React** from dropdown |
| **App location** | `/` (leave as default) |
| **Api location** | (leave empty) |
| **Output location** | `dist` |

**CRITICAL:** Make sure "Output location" is exactly `dist` (lowercase)

---

## Step 6: Review and Create

1. Click **Review + create**
2. Verify all settings:
   - ✓ Plan type: Free
   - ✓ Build preset: React
   - ✓ Output location: dist
3. Click **Create**

**Wait 1-2 minutes** for deployment to initialize.

---

## Step 7: Monitor Deployment

### **Check GitHub Actions:**

1. Go to your GitHub repository
2. Click the **Actions** tab
3. You'll see a workflow running:
   - Name: "Azure Static Web Apps CI/CD"
   - Status: Yellow circle (in progress) or Green check (success)

4. **Click on the workflow** to see progress
5. **Wait 3-5 minutes** for first deployment

### **Expected Workflow Steps:**
```
✓ Build and Deploy Job
  ✓ Checkout
  ✓ Build And Deploy
    - Installing dependencies (npm install)
    - Building project (npm run build)
    - Uploading to Azure
✓ Complete
```

---

## Step 8: Get Your Live URL

### **In Azure Portal:**

1. Click **Go to resource** (after creation completes)
2. Look for **URL** on the overview page
3. It looks like: `https://nice-tree-abc123456.azurestaticapps.net`
4. **Click the URL** to view your live site! 🎉

---

## Step 9: Test Your Website

Visit your Azure URL and verify:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Product demo displays (no more PandaSuite branding!)
- [ ] All 4 pages work (Home, About, Use Cases, Contact)
- [ ] Mobile menu works
- [ ] No console errors (F12 → Console)

---

# Part 3: Configure Custom Domain (tactyl.io)

## Step 1: Prepare Custom Domain

### **In Azure Portal:**

1. Go to your Static Web App resource
2. Click **Custom domains** (left menu)
3. Click **+ Add**
4. Select **Custom domain on other DNS**

---

## Step 2: Add Domain

1. **Domain name:** Enter `www.tactyl.io`
2. Click **Next**

3. Azure shows validation requirements:
   ```
   Add this TXT record to your DNS:
   
   Type: TXT
   Name: _dnsauth.www
   Value: abc123...xyz (long token)
   TTL: 3600
   ```

**Keep this window open!** We'll add these records next.

---

## Step 3: Configure GoDaddy DNS

### **Login to GoDaddy:**

1. Go to https://dcc.godaddy.com
2. Login to your account
3. Find **tactyl.io** domain
4. Click **DNS** or **Manage DNS**

---

### **Add Validation TXT Record:**

1. Click **Add** (or **Add Record**)
2. **Type:** TXT
3. **Name:** `_dnsauth.www`
4. **Value:** Paste the token from Azure (starts with `abc123...`)
5. **TTL:** 600 seconds
6. Click **Save**

---

### **Add CNAME Record for www:**

1. Click **Add** again
2. **Type:** CNAME
3. **Name:** `www`
4. **Value:** Your Azure URL (e.g., `nice-tree-abc123456.azurestaticapps.net`)
5. **TTL:** 600 seconds
6. Click **Save**

---

## Step 4: Verify in Azure

1. **Wait 5-10 minutes** for DNS propagation
2. Back in Azure validation window, click **Validate**
3. If successful, click **Add**

**Status will change from "Validating" to "Ready"**

---

## Step 5: Add Root Domain (tactyl.io)

Repeat the process for the root domain:

1. In Azure, click **+ Add** again
2. Enter `tactyl.io` (without www)
3. Add the TXT record to GoDaddy
4. Add CNAME or ALIAS record:
   - **Name:** `@`
   - **Value:** Your Azure URL

**Note:** If GoDaddy doesn't support ALIAS for root domain, see "Azure DNS" section below.

---

## Step 6: SSL Certificate

**Good news:** Azure automatically provisions **free SSL certificates**!

- ✓ Happens automatically after domain validation
- ✓ Auto-renews before expiration
- ✓ No action needed from you

**Wait 15-30 minutes**, then visit:
- https://www.tactyl.io ✅
- https://tactyl.io ✅

Both should work with HTTPS!

---

# Part 4: Automatic Deployments

## How It Works

**Every time you push to GitHub:**
1. GitHub Actions automatically triggers
2. Builds your React app
3. Deploys to Azure
4. Your live site updates in 2-3 minutes

---

## Making Updates

```cmd
# 1. Make changes to your code
# (Edit files in VS Code or your editor)

# 2. Commit changes
git add .
git commit -m "Update homepage content"

# 3. Push to GitHub
git push

# 4. Wait 2-3 minutes
# GitHub Actions builds and deploys automatically

# 5. Refresh your live site
# Changes are live!
```

---

## Check Deployment Status

**GitHub Actions:**
- Repository → Actions tab
- See all deployments
- Green ✓ = Success
- Red ✗ = Failed (click to see logs)

**Azure Portal:**
- Your Static Web App → Deployments
- See deployment history
- Can roll back if needed

---

# Part 5: Troubleshooting

## GitHub Issues

### **"Failed to push"**
- Use Personal Access Token instead of password
- See "Creating GitHub Personal Access Token" section above

### **"Repository not found"**
- Check repository URL is correct
- Verify you have permissions

---

## Azure Issues

### **Build fails in GitHub Actions**

1. Go to Actions tab
2. Click failed workflow
3. Expand "Build and Deploy" step
4. Look for errors

**Common fixes:**
```yaml
# Workflow file location:
# .github/workflows/azure-static-web-apps-*.yml

# Verify these settings:
app_location: "/"
api_location: ""
output_location: "dist"
```

---

### **Site shows 404 or white screen**

1. Check `staticwebapp.config.json` exists in root
2. Verify GitHub Actions completed successfully
3. Check browser console for errors (F12)

---

### **Custom domain not working**

1. Wait 24-48 hours for DNS propagation
2. Check DNS with: https://dnschecker.org
3. Verify CNAME records in GoDaddy
4. Check validation status in Azure

---

## Testing DNS Propagation

```cmd
# Check if DNS is propagating
nslookup www.tactyl.io

# Should show your Azure IP or CNAME
```

---

# Part 6: Alternative - Azure DNS (Recommended for Root Domain)

If GoDaddy doesn't support ALIAS records for root domain:

## Step 1: Create Azure DNS Zone

```bash
az network dns zone create \
  --resource-group tactyl-rg \
  --name tactyl.io
```

---

## Step 2: Get Azure Nameservers

```bash
az network dns zone show \
  --resource-group tactyl-rg \
  --name tactyl.io \
  --query nameServers
```

You'll get 4 nameservers:
- `ns1-01.azure-dns.com.`
- `ns2-01.azure-dns.net.`
- `ns3-01.azure-dns.org.`
- `ns4-01.azure-dns.info.`

---

## Step 3: Update GoDaddy Nameservers

1. Login to GoDaddy
2. Go to domain settings for tactyl.io
3. Click **Manage DNS**
4. Scroll to **Nameservers**
5. Click **Change**
6. Select **Custom**
7. Enter all 4 Azure nameservers
8. Click **Save**

**Warning:** Takes 24-48 hours to propagate

---

## Step 4: Add DNS Records in Azure

```bash
# CNAME for www
az network dns record-set cname set-record \
  --resource-group tactyl-rg \
  --zone-name tactyl.io \
  --record-set-name www \
  --cname nice-tree-abc123456.azurestaticapps.net

# ALIAS for root (using Azure CLI)
# This requires the Static Web App's IP address
```

---

# Summary Checklist

## ✅ GitHub Setup
- [ ] GitHub account created
- [ ] Repository created
- [ ] Code pushed to GitHub
- [ ] Repository is public (or private with proper plan)

## ✅ Azure Deployment
- [ ] Azure account created
- [ ] Static Web App created
- [ ] GitHub connected
- [ ] Build configuration set correctly
- [ ] First deployment successful
- [ ] Live site accessible

## ✅ Custom Domain
- [ ] TXT validation records added
- [ ] CNAME records added for www
- [ ] Root domain configured
- [ ] SSL certificate active
- [ ] Both www and non-www work

## ✅ Testing
- [ ] All pages load correctly
- [ ] Product demo works (no PandaSuite)
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Forms work
- [ ] Navigation works

---

# Quick Reference

## Important URLs

| Resource | URL |
|----------|-----|
| **GitHub Repo** | https://github.com/YOUR_USERNAME/tactyl-website |
| **Azure Portal** | https://portal.azure.com |
| **Live Site (Azure)** | https://nice-tree-*.azurestaticapps.net |
| **Live Site (Custom)** | https://tactyl.io |
| **GitHub Actions** | https://github.com/YOUR_USERNAME/tactyl-website/actions |

---

## Important Commands

```bash
# Push changes
git add .
git commit -m "Your message"
git push

# Check Git status
git status

# View commit history
git log --oneline

# Check deployment
# Visit: GitHub → Actions tab
```

---

**🎉 Congratulations!** Your website is now live on Azure with automatic deployments from GitHub!

Any changes you push to GitHub will automatically deploy to your live site in 2-3 minutes.
