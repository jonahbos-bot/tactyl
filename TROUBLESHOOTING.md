# 🔧 White Screen Troubleshooting Guide

## Common Causes & Solutions

### **Issue 1: Dependencies Not Installed**

**Symptom:** White screen, console shows "Module not found" errors

**Solution:**
```bash
# Make sure you're in the project directory
cd tactyl-website

# Install all dependencies
npm install

# Wait for installation to complete (may take 1-2 minutes)

# Start dev server
npm run dev
```

---

### **Issue 2: Build Not Generated**

**Symptom:** Extracted files but no `dist` folder or empty `dist` folder

**Solution:**
```bash
# Install dependencies first
npm install

# Build the project
npm run build

# This creates the dist/ folder with all compiled files

# Preview the build
npm run preview
```

---

### **Issue 3: Opening index.html Directly**

**Symptom:** Opening `index.html` in browser shows white screen

**Why:** React apps need a development server, you can't just open the HTML file directly.

**Solution:**
```bash
# Always use the dev server
npm run dev

# Or build and preview
npm run build
npm run preview
```

---

### **Issue 4: Node.js Not Installed**

**Symptom:** `npm: command not found`

**Solution:**
1. Install Node.js from https://nodejs.org
2. Download version 18.x or higher
3. Restart your terminal
4. Try `node -v` to verify installation

---

### **Issue 5: Wrong Directory**

**Symptom:** `package.json not found`

**Solution:**
```bash
# Make sure you're in the right directory
pwd  # Should show /path/to/tactyl-website

# List files - you should see package.json
ls

# If not, navigate to the correct folder
cd /path/to/tactyl-website
```

---

## 🔍 Step-by-Step Debugging

### **Step 1: Verify Files Exist**

```bash
# Check if these files exist:
ls package.json          # Should exist
ls src/App.jsx          # Should exist
ls src/main.jsx         # Should exist
ls index.html           # Should exist
```

### **Step 2: Install Dependencies**

```bash
npm install
```

**Expected output:**
```
added XXX packages in XXs
```

**If you see errors:** Copy the error message and check below.

### **Step 3: Start Development Server**

```bash
npm run dev
```

**Expected output:**
```
VITE v5.0.8  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**If you see this:** Open http://localhost:5173 in your browser.

### **Step 4: Check Browser Console**

1. Open browser (Chrome/Firefox/Edge)
2. Go to http://localhost:5173
3. Press **F12** to open Developer Tools
4. Click **Console** tab
5. Look for red error messages

**Common errors and fixes below** ⬇️

---

## 🚨 Common Error Messages

### **Error: "Cannot find module 'react'"**

**Fix:**
```bash
npm install
```

### **Error: "Unexpected token '<'"**

**Fix:** Don't open `index.html` directly. Use:
```bash
npm run dev
```

### **Error: "Failed to resolve import"**

**Fix:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **Error: Port 5173 already in use**

**Fix:**
```bash
# Kill the existing process
# Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or just use a different port:
npm run dev -- --port 3000
```

---

## 📱 For Azure Deployment

### **If white screen after deploying to Azure:**

1. **Check GitHub Actions build log:**
   - Go to your GitHub repository
   - Click **Actions** tab
   - Click on latest workflow run
   - Check for errors in the log

2. **Verify build configuration:**
   - Azure Portal → Your Static Web App
   - Click **Configuration**
   - Verify:
     - App location: `/`
     - Output location: `dist`
     - Build preset: React

3. **Check browser console on live site:**
   - Open your Azure URL
   - Press F12
   - Look for errors in Console tab

4. **Common Azure issues:**
   - **404 on refresh:** Check `staticwebapp.config.json` exists
   - **Blank page:** Check build logs for errors
   - **CSS not loading:** Verify dist folder contains CSS files

---

## 🛠️ Complete Fresh Start

If nothing works, start completely fresh:

```bash
# 1. Remove everything
rm -rf node_modules package-lock.json dist

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser to http://localhost:5173
```

---

## 💻 Platform-Specific Instructions

### **Windows Users:**

```bash
# Use these commands in Command Prompt or PowerShell:

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

### **Mac/Linux Users:**

```bash
# Use these commands in Terminal:

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📋 Verification Checklist

Before asking for help, verify:

- [ ] Node.js 18+ is installed (`node -v`)
- [ ] npm is working (`npm -v`)
- [ ] You're in the project directory (`pwd`)
- [ ] `package.json` exists (`ls package.json`)
- [ ] Dependencies installed (`ls node_modules`)
- [ ] Dev server is running (`npm run dev`)
- [ ] Browser console checked (F12 → Console)
- [ ] No firewall blocking localhost:5173

---

## 🎯 Quick Test

Run this complete sequence:

```bash
# 1. Check location
pwd

# 2. List files
ls

# 3. Install
npm install

# 4. Start server
npm run dev
```

**Expected result:** Browser opens to http://localhost:5173 showing the Tactyl.io homepage.

---

## 📞 Still Having Issues?

### **Provide this information:**

1. **Operating System:** Windows/Mac/Linux
2. **Node Version:** Run `node -v`
3. **npm Version:** Run `npm -v`
4. **Error Message:** Copy the exact error from terminal
5. **Console Errors:** Copy errors from browser console (F12)
6. **What you tried:** List the commands you ran

### **Screenshots to share:**
1. Terminal showing the error
2. Browser console (F12) showing errors
3. File list (`ls` or `dir` output)

---

## 🔥 Emergency Solution - Test HTML

If you want to quickly test if files are working, create a simple test:

Create `test.html` in the root:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>If you see this, HTML files work!</h1>
    <p>Now try: npm run dev</p>
</body>
</html>
```

Open `test.html` in browser. If you see the message, your browser works fine. The issue is with the build setup.

---

**Bottom Line:** 
- ✅ **DO:** Run `npm install` then `npm run dev`
- ❌ **DON'T:** Open `index.html` directly in browser

React apps need a development server to work!
