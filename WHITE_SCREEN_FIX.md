# 🚨 WHITE SCREEN FIX - START HERE

**Seeing a white screen?** Follow these steps in order:

---

## ⚡ QUICK FIX (90% of cases)

### **Step 1: Install Dependencies**

Open your terminal/command prompt in the project folder and run:

```bash
npm install
```

Wait for it to complete (1-2 minutes).

### **Step 2: Start Development Server**

```bash
npm run dev
```

### **Step 3: Open Browser**

The terminal will show:
```
➜  Local:   http://localhost:5173/
```

Click the link or open your browser to: **http://localhost:5173**

---

## ❌ Common Mistakes

### **Mistake #1: Opening index.html Directly**

**DON'T DO THIS:**
- Double-clicking `index.html`
- Opening `index.html` in your browser
- Using "Open with" → Browser

**WHY:** React apps need a development server. They don't work as static HTML files.

**DO THIS INSTEAD:**
```bash
npm run dev
```
Then open http://localhost:5173

---

### **Mistake #2: Not Installing Dependencies**

**DON'T SKIP:**
```bash
npm install
```

**WHY:** The `node_modules` folder (60+ MB) contains all the code React needs to run. Without it, you get a white screen.

**VERIFY IT WORKED:**
- Check if `node_modules` folder exists
- Should be very large (60+ MB, 1000+ folders)

---

### **Mistake #3: Wrong Directory**

**VERIFY YOU'RE IN THE RIGHT PLACE:**

```bash
# Check current directory
pwd            # Mac/Linux
cd             # Windows

# List files - you should see:
ls             # Mac/Linux
dir            # Windows

# Should show:
# - package.json
# - src/
# - index.html
```

**NOT IN THE RIGHT PLACE?**
```bash
cd /path/to/tactyl-website
```

---

## 🔍 Run Diagnostics

**Mac/Linux:**
```bash
chmod +x diagnose.sh
./diagnose.sh
```

**Windows:**
```bash
diagnose.bat
```

This will check:
- ✓ Node.js installed
- ✓ npm installed  
- ✓ Required files exist
- ✓ Dependencies installed
- ✓ Port available

---

## 🌐 For Azure Deployment

### **White screen on Azure URL?**

1. **Check GitHub Actions:**
   - Go to your GitHub repo
   - Click **Actions** tab
   - Look for red X (failed) or green ✓ (success)

2. **Check build configuration in Azure Portal:**
   - App location: `/`
   - Output location: `dist`
   - Build preset: React

3. **Check browser console on live site:**
   - Open your Azure URL
   - Press **F12**
   - Click **Console** tab
   - Look for red errors

---

## 🐛 Advanced Troubleshooting

### **Clear Everything and Start Fresh:**

```bash
# Delete old files
rm -rf node_modules package-lock.json dist

# Reinstall
npm install

# Start server
npm run dev
```

### **Check for Port Conflicts:**

If port 5173 is in use:

**Mac/Linux:**
```bash
lsof -ti:5173 | xargs kill -9
npm run dev
```

**Windows:**
```bash
netstat -ano | findstr :5173
# Find the PID number
taskkill /PID <PID> /F
npm run dev
```

**Or use different port:**
```bash
npm run dev -- --port 3000
```

---

## 📋 Checklist

Before asking for help, verify:

- [ ] Node.js 18+ installed (`node -v`)
- [ ] In correct directory (`ls package.json` works)
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Opened http://localhost:5173 (not file://)
- [ ] Checked browser console (F12 → Console)

---

## 📞 Still Not Working?

### **Collect This Information:**

1. **Operating System:** Windows 10/11, macOS, Linux?

2. **Node Version:**
   ```bash
   node -v
   ```

3. **npm Version:**
   ```bash
   npm -v
   ```

4. **Run diagnostic:**
   ```bash
   ./diagnose.sh    # Mac/Linux
   diagnose.bat     # Windows
   ```
   Copy the output.

5. **Check browser console:**
   - Press F12
   - Click Console tab
   - Copy any red error messages

6. **Terminal output:**
   - Copy what happens when you run `npm run dev`

---

## 💡 Visual Guide

### **What You Should See:**

**✅ CORRECT - Development Server:**
```
Terminal:
$ npm run dev
VITE v5.0.8  ready in 500 ms
➜  Local:   http://localhost:5173/

Browser:
[Beautiful Tactyl.io website with blue/purple gradients]
```

**❌ WRONG - Opened HTML Directly:**
```
Browser URL bar:
file:///C:/Users/.../tactyl-website/index.html

Browser:
[White screen or basic HTML without styles]
```

---

## 🎯 The Golden Rule

### **ALWAYS use the development server:**

```bash
npm run dev
```

### **NEVER open files directly in browser**

React apps are NOT static HTML. They need:
- A development server (Vite)
- JavaScript bundling
- Module resolution
- Hot reloading

This is why `npm run dev` exists!

---

## 📚 More Help

- **Complete troubleshooting:** See `TROUBLESHOOTING.md`
- **Getting started:** See `GETTING_STARTED.md`
- **Full documentation:** See `README.md`

---

## ✅ Success Looks Like This

When working correctly, you should see:

1. **Terminal shows:**
   ```
   VITE v5.0.8  ready in 500 ms
   ➜  Local:   http://localhost:5173/
   ```

2. **Browser shows:**
   - Tactyl.io logo in header
   - "Engage. Educate. Scale." headline
   - Blue/purple gradient colors
   - Navigation menu (Home, About Us, Use Cases, Contact)
   - Animated elements

3. **Browser console shows:**
   - No red errors
   - Maybe some warnings (those are okay)

---

**Still having issues?** Follow the diagnostic script and provide the output when asking for help!

Run:
```bash
./diagnose.sh      # Mac/Linux
diagnose.bat       # Windows
```
