# 🚀 Getting Started with Tactyl.io Website

**Welcome!** This guide will get you up and running in 5 minutes.

---

## 📌 Quick Navigation

- **First time here?** → Start below
- **Ready to deploy?** → See [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md)
- **Need full docs?** → See [README.md](README.md)
- **Pre-launch checks?** → See [PRE_LAUNCH_CHECKLIST.md](PRE_LAUNCH_CHECKLIST.md)

---

## ⚡ Quick Start (3 Steps)

### Step 1: Install Dependencies

**Mac/Linux:**
```bash
chmod +x quick-start.sh
./quick-start.sh
```

**Windows:**
```bash
quick-start.bat
```

**Or manually:**
```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Step 3: Explore the Site

Navigate through all 4 pages:
- **Home** - Hero, demo, features, industries
- **About Us** - Mission, values, timeline
- **Use Cases** - 9 filterable industry cards
- **Contact** - Form and contact info

---

## 📂 What's Inside?

```
tactyl-website/
├── 📄 README.md                  ← Full documentation
├── 📄 AZURE_DEPLOYMENT.md        ← Deploy to Azure guide
├── 📄 PROJECT_SUMMARY.md         ← Features overview
├── 📄 PRE_LAUNCH_CHECKLIST.md    ← Pre-launch tasks
├── 📄 package.json               ← Dependencies
├── 📄 index.html                 ← Entry point
├── 📂 src/
│   ├── 📂 components/            ← Header, Footer, etc.
│   ├── 📂 pages/                 ← Home, About, etc.
│   ├── App.jsx                   ← Main routing
│   └── index.css                 ← Global styles
└── 📂 public/
    └── favicon.svg               ← Logo
```

---

## 🎨 Customization Quick Start

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    600: '#YOUR_PRIMARY_COLOR',  // Default: #0ea5e9 (blue)
  },
  accent: {
    600: '#YOUR_ACCENT_COLOR',   // Default: #d946ef (purple)
  }
}
```

### Update Content

| What | Where |
|------|-------|
| Home page content | `src/pages/Home.jsx` |
| About page content | `src/pages/About.jsx` |
| Use cases | `src/pages/UseCases.jsx` |
| Contact info | `src/pages/Contact.jsx` |
| Navigation links | `src/components/Header.jsx` |
| Footer content | `src/components/Footer.jsx` |

### Add Your Logo

Replace `public/favicon.svg` with your logo file.

Update `src/components/Header.jsx` to use your logo image.

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (localhost:5173)

# Production
npm run build        # Build for production (creates dist/)
npm run preview      # Preview production build

# Testing
# Open http://localhost:5173 and test all pages
```

---

## ☁️ Deploy to Azure (Simple)

### Quick Deploy (5 Minutes)

1. **Create Azure Static Web App**
   - Go to https://portal.azure.com
   - Click "Create a resource" → Search "Static Web Apps"
   - Connect your GitHub repository

2. **Configure Build**
   - Build Preset: **React**
   - App location: `/`
   - Output location: `dist`

3. **Deploy**
   - Azure automatically builds and deploys
   - You get a live URL instantly!

**Full guide:** [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md)

---

## 🌐 Custom Domain Setup

After deploying to Azure:

1. **In GoDaddy DNS:**
   - Add CNAME record: `www` → `[your-app].azurestaticapps.net`

2. **In Azure Portal:**
   - Go to your Static Web App
   - Click "Custom domains" → Add `www.tactyl.io`
   - Add verification TXT record
   - Wait 5-10 minutes

**Full guide:** [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) → Custom Domain Section

---

## ✅ Before You Deploy

### Quick Checklist

- [ ] Test all 4 pages locally
- [ ] Update contact info (email, phone in `Contact.jsx`)
- [ ] Add your logo
- [ ] Proofread all content
- [ ] Test on mobile (browser DevTools)
- [ ] Run `npm run build` successfully

**Full checklist:** [PRE_LAUNCH_CHECKLIST.md](PRE_LAUNCH_CHECKLIST.md)

---

## 🆘 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not loading
Check that `tailwind.config.js` content includes all `.jsx` files.

### Site works locally but not in production
Ensure `staticwebapp.config.json` is in root directory.

### PandaSuite iframe not loading
Check browser console for CSP errors. Update `staticwebapp.config.json`.

---

## 📚 Documentation Guide

### Read First
1. **This file** - Quick start
2. **README.md** - Full documentation
3. **PROJECT_SUMMARY.md** - What's built

### When Deploying
4. **AZURE_DEPLOYMENT.md** - Step-by-step Azure guide
5. **PRE_LAUNCH_CHECKLIST.md** - Pre-launch tasks

### Reference
6. **FILE_INVENTORY.md** - Complete file list

---

## 🎯 Common Tasks

### Add a New Page

1. **Create page file:**
   ```bash
   # Create src/pages/NewPage.jsx
   ```

2. **Add route in App.jsx:**
   ```javascript
   import NewPage from './pages/NewPage';
   
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Add navigation link in Header.jsx:**
   ```javascript
   { name: 'New Page', path: '/new-page' }
   ```

### Update Contact Email

Edit `src/pages/Contact.jsx`:
```javascript
details: 'YOUR_EMAIL@tactyl.io',
```

### Change Hero Headline

Edit `src/pages/Home.jsx`:
```javascript
<h1>Your New Headline</h1>
```

---

## 🔥 Hot Tips

1. **Keep dev server running** - Changes auto-reload
2. **Use browser DevTools** - Test responsive design
3. **Check console for errors** - Fix issues early
4. **Git commit often** - Easy to revert mistakes
5. **Test before deploying** - Run `npm run build` first

---

## 📞 Need Help?

### Documentation
- **General help:** README.md
- **Deployment:** AZURE_DEPLOYMENT.md
- **Features:** PROJECT_SUMMARY.md
- **Pre-launch:** PRE_LAUNCH_CHECKLIST.md

### Common Issues
- Build errors → README.md → Troubleshooting
- Deployment issues → AZURE_DEPLOYMENT.md → Troubleshooting
- Style issues → Check Tailwind config

---

## 🎉 You're Ready!

### Your Next Steps:

1. ✅ Install dependencies (`npm install`)
2. ✅ Start dev server (`npm run dev`)
3. ✅ Explore the site (http://localhost:5173)
4. ✅ Customize content (see "Customization" above)
5. ✅ Test locally
6. ✅ Deploy to Azure (see AZURE_DEPLOYMENT.md)
7. ✅ Configure custom domain
8. ✅ Launch! 🚀

---

## 💡 Pro Tips

- **Start with README.md** for full understanding
- **Use quick-start scripts** for automated setup
- **Follow PRE_LAUNCH_CHECKLIST.md** before going live
- **Keep documentation open** while working
- **Test on real mobile devices** when possible

---

**🚀 Happy building!**

Your Tactyl.io website is production-ready and waiting to go live.

*Built with React + Vite + Tailwind CSS + Framer Motion*
