# 🎯 SOLUTION: White Screen Issue

## What Happened

You're seeing a white screen because **React applications don't work like regular HTML websites**. You cannot just open `index.html` in a browser or extract files and expect them to work immediately.

---

## Why This Happens

### **React apps require:**
1. ✅ Node.js and npm installed
2. ✅ Dependencies installed (`node_modules` folder - 60+ MB)
3. ✅ A development server running (Vite)
4. ✅ JavaScript bundling and module resolution

### **What DOESN'T work:**
- ❌ Double-clicking `index.html`
- ❌ Opening files directly in browser
- ❌ Extracting files without running `npm install`
- ❌ Publishing without building first

---

## ✅ THE SOLUTION

### **For Local Development:**

**Step 1: Open Terminal/Command Prompt**
- Mac: Open Terminal app
- Windows: Open Command Prompt or PowerShell
- Navigate to the project folder:
  ```bash
  cd path/to/tactyl-website
  ```

**Step 2: Install Dependencies** (First time only)
```bash
npm install
```
Wait 1-2 minutes. This downloads all required code (~60 MB).

**Step 3: Start Development Server**
```bash
npm run dev
```

**Step 4: Open Browser**
```
http://localhost:5173
```

**✨ You should now see the Tactyl.io website!**

---

### **For Azure Deployment:**

**Option A: Azure Portal (Easiest)**
1. Create Azure Static Web App
2. Connect GitHub repository
3. Set build configuration:
   - Build preset: **React**
   - App location: `/`
   - Output location: `dist`
4. Azure automatically builds and deploys

**See detailed guide:** `AZURE_DEPLOYMENT.md`

**Option B: Manual Build**
```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. Upload dist/ folder to Azure
```

---

## 🔍 Quick Diagnostics

**Run this to check your setup:**

**Mac/Linux:**
```bash
chmod +x diagnose.sh
./diagnose.sh
```

**Windows:**
```bash
diagnose.bat
```

This checks:
- Node.js installed?
- npm working?
- Required files present?
- Dependencies installed?
- Port available?

---

## 📋 Troubleshooting Steps

### **Problem 1: "npm: command not found"**

**Solution:** Install Node.js from https://nodejs.org (version 18+)

---

### **Problem 2: White screen after `npm run dev`**

**Check browser console:**
1. Press F12
2. Click Console tab
3. Look for red errors

**Common fixes:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### **Problem 3: Port 5173 already in use**

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000
```

---

### **Problem 4: Azure deployment shows white screen**

**Check:**
1. GitHub Actions → Look for build errors
2. Azure Portal → Configuration → Verify settings
3. Browser console on live site → Check for errors

---

## 📖 Complete Documentation

| Guide | When to Use |
|-------|-------------|
| **WHITE_SCREEN_FIX.md** | White screen troubleshooting |
| **GETTING_STARTED.md** | First time setup |
| **TROUBLESHOOTING.md** | Detailed error solutions |
| **AZURE_DEPLOYMENT.md** | Deploy to Azure |
| **README.md** | Complete documentation |

---

## ✅ Success Checklist

When working correctly:

- [ ] Terminal shows "VITE v5.0.8 ready in XXX ms"
- [ ] Browser shows "Local: http://localhost:5173/"
- [ ] Website loads with Tactyl.io branding
- [ ] No red errors in browser console (F12)
- [ ] Navigation works between pages

---

## 🎯 Key Takeaways

### **DO:**
- ✅ Run `npm install` first
- ✅ Run `npm run dev` to start server
- ✅ Open http://localhost:5173 in browser
- ✅ Use Terminal/Command Prompt
- ✅ Follow the guides

### **DON'T:**
- ❌ Open `index.html` directly
- ❌ Skip `npm install`
- ❌ Expect files to work without a server
- ❌ Use file:// URLs

---

## 💡 Understanding React Apps

**Traditional HTML websites:**
```
Open index.html → Browser renders → Works!
```

**React applications:**
```
1. Install dependencies (npm install)
2. Start dev server (npm run dev)
3. Server bundles JavaScript
4. Browser receives compiled code
5. React renders the UI
```

**For production:**
```
1. Build app (npm run build)
2. Creates optimized dist/ folder
3. Deploy dist/ to Azure
4. Azure serves files with proper headers
```

---

## 🚀 Next Steps

1. **Follow the quick fix above** ⬆️
2. **If still not working:** Run diagnostic script
3. **For deployment:** See `AZURE_DEPLOYMENT.md`
4. **For full setup:** See `GETTING_STARTED.md`

---

## 📞 Need More Help?

Provide this information:

1. **Operating System:** Windows/Mac/Linux
2. **Node version:** `node -v`
3. **npm version:** `npm -v`
4. **What you see:** Screenshot of terminal and browser
5. **Diagnostic output:** Result of running `diagnose.sh` or `diagnose.bat`
6. **Browser console:** Errors from F12 → Console

---

**Bottom line:** React apps need `npm run dev`. That's it! 🎉
