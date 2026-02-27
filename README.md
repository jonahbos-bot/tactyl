# Tactyl.io - Interactive Display Solutions Website

> **Engage. Educate. Scale.**

A modern, responsive React website for Tactyl.io - a turnkey interactive display company serving healthcare, retail, corporate, and educational sectors nationwide.

![Tactyl.io](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Azure](https://img.shields.io/badge/Deploy%20to-Azure%20Static%20Web%20Apps-0078D4?style=for-the-badge&logo=microsoft-azure)

---

## 🚨 SEEING A WHITE SCREEN? → [WHITE_SCREEN_FIX.md](WHITE_SCREEN_FIX.md)

**Quick fix:**
```bash
npm install
npm run dev
```
Then open http://localhost:5173

**Don't open `index.html` directly** - React apps need a development server!

---

## 🎯 Project Overview

This is a professional, production-ready 4-page website showcasing Tactyl.io's interactive display solutions. Built with modern web technologies and optimized for Azure Static Web Apps deployment.

### ✨ Key Features

- **Modern React Architecture** - Component-based structure with React Router for seamless navigation
- **Smooth Animations** - Framer Motion for engaging page transitions and scroll animations
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Product Demo** - Embedded PandaSuite viewer showcasing the product
- **Industry-Specific Use Cases** - Filterable cards for 9+ industries
- **Contact Form** - User-friendly form with validation and submission handling
- **SEO Optimized** - Semantic HTML and meta tags for better search visibility
- **Azure Ready** - Configured for Azure Static Web Apps with proper routing

---

## 📁 Project Structure

```
tactyl-website/
├── public/                   # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   ├── Footer.jsx       # Site footer with links
│   │   └── ScrollToTop.jsx  # Auto-scroll on route change
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage with hero & features
│   │   ├── About.jsx        # About Us with mission & values
│   │   ├── UseCases.jsx     # Filterable industry use cases
│   │   └── Contact.jsx      # Contact form & info
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind customization
└── postcss.config.js        # PostCSS configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output: `dist/` folder

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## ☁️ Azure Static Web Apps Deployment

### Method 1: Azure Portal (Recommended for First-Time Setup)

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click **Create a resource** → Search "Static Web Apps"
   - Click **Create**

2. **Configure Deployment**
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `tactyl-website` (or your preferred name)
   - **Plan type**: Free (or Standard if needed)
   - **Region**: Choose closest to your users
   - **Deployment source**: GitHub (connect your repo)
   - **Organization**: Your GitHub username/org
   - **Repository**: Your repo name
   - **Branch**: `main` or `master`
   
3. **Build Configuration**
   - **Build Presets**: Select "React"
   - **App location**: `/` (root directory)
   - **Api location**: (leave empty - no backend)
   - **Output location**: `dist`

4. **Review + Create**
   - Click **Create**
   - Azure will automatically:
     - Create a GitHub Actions workflow
     - Build and deploy your site
     - Provide a public URL

5. **Custom Domain (Optional)**
   - Go to your Static Web App resource
   - Click **Custom domains**
   - Click **Add**
   - Follow instructions to add CNAME record in GoDaddy DNS

### Method 2: Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name tactyl-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name tactyl-website \
  --resource-group tactyl-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github

# Get the default hostname
az staticwebapp show \
  --name tactyl-website \
  --resource-group tactyl-rg \
  --query "defaultHostname" -o tsv
```

### Method 3: GitHub Actions (Manual Setup)

Create `.github/workflows/azure-static-web-apps.yml`:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          api_location: ""
          output_location: "dist"

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: "close"
```

---

## 🌐 Custom Domain Setup (GoDaddy → Azure)

### Step 1: Get Azure Static Web App URL

```bash
# Find your default hostname
az staticwebapp show \
  --name tactyl-website \
  --resource-group tactyl-rg \
  --query "defaultHostname" -o tsv
```

Example output: `nice-tree-123456789.azurestaticapps.net`

### Step 2: Configure GoDaddy DNS

1. Login to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns)
2. Find `tactyl.io` domain
3. Add/Update DNS Records:

   **For Root Domain (tactyl.io):**
   - Type: `ALIAS` or `ANAME` (if supported)
   - Name: `@`
   - Value: `nice-tree-123456789.azurestaticapps.net`
   - TTL: 600 seconds

   **For www Subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `nice-tree-123456789.azurestaticapps.net`
   - TTL: 600 seconds

   > ⚠️ **Note**: If GoDaddy doesn't support ALIAS records, use Azure DNS instead (see below)

### Step 3: Verify Domain in Azure

1. Go to Azure Portal → Your Static Web App
2. Click **Custom domains** → **Add**
3. Enter `tactyl.io` → Click **Next**
4. Choose **CNAME** validation method
5. Azure will provide a validation record:
   - Type: `TXT`
   - Name: `_dnsauth.tactyl.io`
   - Value: `[Azure-provided-token]`
6. Add this TXT record in GoDaddy DNS
7. Wait 5-10 minutes, then click **Validate** in Azure
8. Once validated, click **Add**

### Alternative: Use Azure DNS (Recommended)

1. **Create Azure DNS Zone**
   ```bash
   az network dns zone create \
     --resource-group tactyl-rg \
     --name tactyl.io
   ```

2. **Get Azure Nameservers**
   ```bash
   az network dns zone show \
     --resource-group tactyl-rg \
     --name tactyl.io \
     --query nameServers -o tsv
   ```

3. **Update GoDaddy Nameservers**
   - Login to GoDaddy
   - Go to Domain Settings for `tactyl.io`
   - Click **Manage DNS** → **Change Nameservers**
   - Select **Custom nameservers**
   - Enter Azure nameservers (usually 4 nameservers)
   - Save (propagation takes 24-48 hours)

4. **Add DNS Records in Azure**
   ```bash
   # Root domain
   az network dns record-set a add-record \
     --resource-group tactyl-rg \
     --zone-name tactyl.io \
     --record-set-name @ \
     --ipv4-address [Your-Static-Web-App-IP]

   # www subdomain
   az network dns record-set cname create \
     --resource-group tactyl-rg \
     --zone-name tactyl.io \
     --name www \
     --ttl 3600 \
     --cname nice-tree-123456789.azurestaticapps.net
   ```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework for component-based architecture |
| **Vite** | Fast build tool and development server |
| **React Router 6** | Client-side routing for SPA navigation |
| **Tailwind CSS 3** | Utility-first CSS framework for styling |
| **Framer Motion** | Animation library for smooth transitions |
| **PostCSS** | CSS processing with Autoprefixer |

---

## 📄 Currently Implemented Features

### ✅ Completed Pages

1. **Home Page** (`/`)
   - Hero section with animated headline
   - Embedded PandaSuite product demo in device mockup
   - Feature highlights (4 key benefits)
   - Industry tiles (9 sectors served)
   - Call-to-action sections

2. **About Us** (`/about`)
   - Company mission and founding story
   - "What Sets Us Apart" - 4 core values
   - Visual timeline of company growth
   - Statistics showcase (deployments, industries, satisfaction)
   - CTA for consultation

3. **Use Cases** (`/use-cases`)
   - Filterable industry cards (All, Healthcare, Business, Retail, Education)
   - 9 detailed use case sections:
     - Healthcare & Clinics
     - Dental Practices
     - Pediatric Offices
     - Corporate Offices
     - Retail & Showrooms
     - Hospitality & Wellness
     - Libraries & Public Spaces
     - Auto Service Centers
     - Institutions & Training Centers
   - Each with features, benefits, and real-world applications

4. **Contact** (`/contact`)
   - Contact information cards (Location, Email, Phone)
   - Full contact form with validation
   - Industry dropdown selector
   - Success message on submission
   - Service highlights section

### ✅ Shared Components

- **Header**: Sticky navigation with mobile menu, smooth scroll, active link highlighting
- **Footer**: Multi-column layout with quick links, industries, and social placeholders
- **ScrollToTop**: Automatic page scroll on route change

### ✅ Additional Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll animations using Framer Motion
- Hover effects and micro-interactions
- Gradient backgrounds and modern UI
- Semantic HTML for SEO
- Fast loading with code splitting
- Azure Static Web Apps routing configuration

---

## 🔄 Features Not Yet Implemented

These features can be added in future iterations:

1. **Backend Integration**
   - Form submission to email service (EmailJS, SendGrid, or Azure Functions)
   - Newsletter subscription
   - CRM integration (Salesforce, HubSpot)

2. **Content Management**
   - Admin panel for content updates
   - Blog section for company news
   - Case studies with detailed customer stories

3. **Enhanced Features**
   - Live chat widget
   - Calendly integration for demo scheduling
   - Video testimonials from customers
   - Interactive product configurator
   - Pricing calculator based on screens/locations

4. **Analytics & Marketing**
   - Google Analytics integration
   - Facebook Pixel / LinkedIn Insight Tag
   - A/B testing for CTA buttons
   - Heatmap tracking (Hotjar, Clarity)

5. **Accessibility**
   - ARIA labels enhancement
   - Keyboard navigation improvements
   - Screen reader optimization
   - High contrast mode

---

## 🎨 Customization Guide

### Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these hex values
    600: '#YOUR_PRIMARY_COLOR',
  },
  accent: {
    600: '#YOUR_ACCENT_COLOR',
  }
}
```

### Update Content

- **Company Info**: Edit `src/pages/About.jsx`
- **Use Cases**: Edit `src/pages/UseCases.jsx` (useCases array)
- **Contact Details**: Edit `src/pages/Contact.jsx` (contactInfo array)
- **Footer Links**: Edit `src/components/Footer.jsx`

### Add New Page

1. Create `src/pages/YourPage.jsx`
2. Import in `src/App.jsx`
3. Add route: `<Route path="/your-page" element={<YourPage />} />`
4. Add navigation link in `src/components/Header.jsx`

---

## 📊 Recommended Next Steps

### Phase 1: Pre-Launch (Week 1-2)
- [ ] Replace placeholder contact info (email, phone) with real details
- [ ] Add company logo (create `public/logo.svg`)
- [ ] Set up Google Analytics
- [ ] Test all forms and links
- [ ] Add real product screenshots/videos
- [ ] Set up Azure Static Web App

### Phase 2: Launch (Week 3-4)
- [ ] Deploy to Azure Static Web Apps
- [ ] Configure custom domain (tactyl.io)
- [ ] Set up SSL certificate (auto via Azure)
- [ ] Submit sitemap to Google Search Console
- [ ] Configure redirects (www → non-www or vice versa)

### Phase 3: Post-Launch (Month 2)
- [ ] Implement form backend (Azure Functions or EmailJS)
- [ ] Add Calendly for demo scheduling
- [ ] Set up email automation for leads
- [ ] Create blog section for content marketing
- [ ] Add customer testimonials/case studies

### Phase 4: Optimization (Month 3+)
- [ ] A/B test CTAs and headlines
- [ ] Implement live chat (Intercom, Drift)
- [ ] Add video testimonials
- [ ] Create interactive product demo
- [ ] Build customer portal for existing clients

---

## 🐛 Troubleshooting

### Build Errors

**Issue**: `Module not found` errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Tailwind styles not loading
```bash
# Verify Tailwind config includes all file paths
# Check tailwind.config.js → content array
```

### Azure Deployment Issues

**Issue**: 404 errors on page refresh
- **Solution**: Azure Static Web Apps handles this automatically with proper routing. Ensure `staticwebapp.config.json` is present (auto-generated).

**Issue**: Build fails in Azure
- **Solution**: Check GitHub Actions logs → Usually missing dependencies or Node version mismatch
- Add `.nvmrc` file with: `18` (or your Node version)

**Issue**: Custom domain not working
- **Solution**: Wait 24-48 hours for DNS propagation
- Verify DNS records with: `nslookup tactyl.io`
- Check Azure portal for validation status

### Performance Issues

**Issue**: Slow initial load
```bash
# Analyze bundle size
npm run build
# Check dist/ folder size - should be < 1MB for optimal loading
```

**Solution**: Lazy load components
```javascript
const UseCases = lazy(() => import('./pages/UseCases'));
```

---

## 📞 Support & Maintenance

### Updating Content
1. Edit relevant `.jsx` files in `src/pages/`
2. Commit changes to GitHub
3. GitHub Actions automatically builds and deploys to Azure

### Monitoring
- **Azure Portal**: View deployment history and logs
- **GitHub Actions**: Check build status
- **Google Analytics**: Track user behavior (after setup)

### Backup
- GitHub repository serves as version control
- Azure maintains deployment history (rollback available)

---

## 📝 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

---

## 🙌 Credits

**Built for**: Tactyl.io  
**Technology**: React + Vite + Tailwind CSS + Framer Motion  
**Hosting**: Azure Static Web Apps  
**Design**: Modern, responsive, accessibility-focused

---

## 🚀 Quick Deploy Checklist

- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Build production: `npm run build`
- [ ] Create Azure Static Web App
- [ ] Connect GitHub repository
- [ ] Configure custom domain in GoDaddy
- [ ] Verify deployment at Azure URL
- [ ] Test all pages and forms
- [ ] Monitor analytics and performance

---

**Ready to deploy?** Follow the Azure deployment steps above and your site will be live in minutes! 🎉
