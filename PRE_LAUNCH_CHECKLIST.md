# ✅ Pre-Launch Checklist for Tactyl.io Website

Use this checklist before deploying to production.

---

## 📋 Development Checklist

### **Local Testing**
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` - site loads at localhost:5173
- [ ] Test all 4 pages:
  - [ ] Home page loads correctly
  - [ ] About Us page loads correctly
  - [ ] Use Cases page loads correctly with filtering
  - [ ] Contact page loads correctly
- [ ] Navigation works between all pages
- [ ] Mobile menu opens/closes properly
- [ ] All animations work smoothly
- [ ] PandaSuite demo iframe loads
- [ ] Contact form accepts input and shows success message
- [ ] Footer links all work
- [ ] Run `npm run build` successfully
- [ ] Run `npm run preview` - production build works

### **Content Review**
- [ ] Replace placeholder email: `hello@tactyl.io` with real email
- [ ] Replace placeholder phone: `(555) 123-4567` with real number
- [ ] Verify all company information is accurate
- [ ] Check all use case descriptions
- [ ] Proofread all text for typos
- [ ] Ensure brand messaging is consistent

### **Visual Check**
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] Test on mobile device (real device or DevTools)
- [ ] Test on tablet size
- [ ] All images load properly
- [ ] Color scheme looks good
- [ ] Typography is readable
- [ ] Spacing and alignment looks correct

---

## ☁️ Azure Deployment Checklist

### **Pre-Deployment**
- [ ] Azure account created
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] All files committed (check with `git status`)
- [ ] `.gitignore` excludes node_modules and dist
- [ ] `staticwebapp.config.json` is in root directory
- [ ] `package.json` has correct dependencies

### **Azure Setup**
- [ ] Azure Static Web App created
- [ ] Connected to GitHub repository
- [ ] Build configuration set correctly:
  - [ ] Build preset: React
  - [ ] App location: `/`
  - [ ] Output location: `dist`
- [ ] First deployment successful
- [ ] Default Azure URL works (*.azurestaticapps.net)

### **GitHub Actions**
- [ ] Workflow file created in `.github/workflows/`
- [ ] Workflow runs successfully on push
- [ ] Check Actions tab - no errors
- [ ] Automatic deployment working

---

## 🌐 Custom Domain Checklist

### **GoDaddy DNS Configuration**
- [ ] Login to GoDaddy DNS management
- [ ] Add CNAME record for www:
  - Type: CNAME
  - Name: www
  - Value: [your-app].azurestaticapps.net
  - TTL: 600
- [ ] Add CNAME/ALIAS for root domain:
  - Type: CNAME (or ALIAS)
  - Name: @
  - Value: [your-app].azurestaticapps.net
  - TTL: 600

### **Azure Domain Verification**
- [ ] Add custom domain in Azure Portal
- [ ] Add TXT record for verification:
  - Type: TXT
  - Name: _dnsauth.www
  - Value: [Azure verification token]
- [ ] Wait 5-10 minutes
- [ ] Verify domain in Azure
- [ ] Repeat for root domain (tactyl.io)
- [ ] SSL certificate automatically provisioned
- [ ] Both www.tactyl.io and tactyl.io work
- [ ] HTTPS works (padlock icon)

### **DNS Propagation Check**
- [ ] Check DNS propagation: https://dnschecker.org
- [ ] Test from different locations
- [ ] Clear browser cache and test
- [ ] Test on mobile data (not WiFi)

---

## 🔍 SEO & Analytics Checklist

### **SEO Basics**
- [ ] Page titles are descriptive
- [ ] Meta descriptions added
- [ ] Semantic HTML used (header, main, footer, etc.)
- [ ] Images have alt text
- [ ] Heading hierarchy is correct (h1, h2, h3)
- [ ] Internal links work properly
- [ ] Sitemap generated (future: add sitemap.xml)
- [ ] Robots.txt configured (if needed)

### **Google Tools**
- [ ] Google Analytics added (optional but recommended)
- [ ] Google Search Console verified
- [ ] Submit sitemap to Search Console
- [ ] Monitor indexing status

### **Performance**
- [ ] Lighthouse score checked
- [ ] Core Web Vitals acceptable
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] JavaScript bundle < 500KB

---

## 📱 Mobile Testing Checklist

### **Responsive Design**
- [ ] All pages work on 320px width (iPhone SE)
- [ ] All pages work on 375px width (iPhone 12/13)
- [ ] All pages work on 768px width (iPad)
- [ ] All pages work on 1024px+ (Desktop)
- [ ] No horizontal scrolling
- [ ] Touch targets are at least 44px
- [ ] Forms are easy to fill on mobile

### **Mobile Features**
- [ ] Mobile menu opens and closes
- [ ] Navigation works on mobile
- [ ] Links are tappable
- [ ] Forms work on mobile
- [ ] No elements overlap
- [ ] Text is readable without zooming

---

## 🔒 Security Checklist

### **Basic Security**
- [ ] HTTPS enabled (automatic with Azure)
- [ ] No sensitive data in code
- [ ] No API keys in frontend code
- [ ] Form has basic validation
- [ ] CSP headers configured (in staticwebapp.config.json)
- [ ] Security headers set

### **Privacy**
- [ ] Privacy policy link (update Footer.jsx)
- [ ] Terms of service link (update Footer.jsx)
- [ ] Cookie consent (if using tracking)
- [ ] GDPR compliance (if EU visitors)

---

## 📧 Contact Form Checklist

### **Current State (Client-Side Only)**
- [ ] Form accepts input
- [ ] Validation works (required fields)
- [ ] Success message shows
- [ ] Form resets after submission

### **Future Enhancement (Backend)**
- [ ] Integrate with EmailJS, SendGrid, or Azure Functions
- [ ] Test email delivery
- [ ] Set up auto-responder
- [ ] Add spam protection (reCAPTCHA)
- [ ] Store submissions in database (optional)
- [ ] Set up email notifications

---

## 📊 Analytics & Monitoring Checklist

### **Monitoring Setup**
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry - optional)
- [ ] Performance monitoring (Azure Application Insights - optional)
- [ ] Set up alerts for downtime

### **Analytics Configuration**
- [ ] Google Analytics tracking code added
- [ ] GA4 property configured
- [ ] Goals/conversions set up:
  - [ ] Contact form submissions
  - [ ] Demo button clicks
  - [ ] Page views
- [ ] Test that tracking works

---

## 🎨 Brand Assets Checklist

### **Logo & Favicon**
- [ ] Replace default favicon.svg with real logo
- [ ] Add logo to Header component
- [ ] Ensure logo looks good on mobile
- [ ] Logo is high resolution
- [ ] Logo file size optimized

### **Images & Media**
- [ ] Add real product screenshots
- [ ] Optimize all images (compress)
- [ ] Use WebP format for better performance
- [ ] Add team photos to About page (optional)
- [ ] Add customer logos (optional)

---

## 📝 Legal & Compliance Checklist

### **Required Pages**
- [ ] Create Privacy Policy page (or link to existing)
- [ ] Create Terms of Service page (or link to existing)
- [ ] Add cookie notice (if using cookies)
- [ ] Update Footer with legal links

### **Compliance**
- [ ] GDPR compliance (if targeting EU)
- [ ] ADA/WCAG compliance for accessibility
- [ ] Copyright notices updated
- [ ] Business information accurate

---

## 🚀 Final Pre-Launch Review

### **Technical**
- [ ] All console errors fixed
- [ ] No broken links
- [ ] All images load
- [ ] Forms work correctly
- [ ] Site works without JavaScript (graceful degradation)
- [ ] Back button works correctly

### **Content**
- [ ] All placeholder content replaced
- [ ] Spelling and grammar checked
- [ ] Brand voice consistent
- [ ] CTAs are compelling
- [ ] Contact information correct

### **Design**
- [ ] Visual design matches brand
- [ ] Colors are accessible (contrast)
- [ ] Fonts are readable
- [ ] Animations aren't jarring
- [ ] Layout is consistent across pages

### **Performance**
- [ ] Build size is reasonable
- [ ] No unnecessary dependencies
- [ ] Images are optimized
- [ ] Lazy loading implemented (optional)
- [ ] CDN configured (Azure handles this)

---

## 🎉 Launch Day Checklist

### **Before Going Live**
- [ ] Back up current live site (if replacing existing)
- [ ] Announce maintenance window (if needed)
- [ ] Test one final time in production
- [ ] Prepare social media announcements

### **Launch**
- [ ] Point domain to Azure Static Web App
- [ ] Wait for DNS propagation
- [ ] Test from multiple devices
- [ ] Test from multiple locations
- [ ] Monitor for errors

### **After Launch**
- [ ] Announce on social media
- [ ] Send email to mailing list
- [ ] Update Google My Business
- [ ] Monitor analytics for first 24 hours
- [ ] Watch for error reports
- [ ] Celebrate! 🎉

---

## 📞 Post-Launch Monitoring (First Week)

### **Daily Checks**
- [ ] Check uptime monitoring
- [ ] Review Google Analytics
- [ ] Check for error logs in Azure
- [ ] Monitor form submissions
- [ ] Read user feedback

### **Weekly Checks**
- [ ] Review site performance
- [ ] Check search engine indexing
- [ ] Review bounce rates
- [ ] Check conversion rates
- [ ] Gather user feedback

---

## 🛠️ Ongoing Maintenance

### **Monthly**
- [ ] Review analytics
- [ ] Update content as needed
- [ ] Check for broken links
- [ ] Update dependencies (`npm outdated`)
- [ ] Review security updates

### **Quarterly**
- [ ] Major dependency updates
- [ ] Performance audit
- [ ] Content refresh
- [ ] Design tweaks based on feedback
- [ ] A/B testing new features

---

## 📚 Resources

- **README.md** - Complete documentation
- **AZURE_DEPLOYMENT.md** - Deployment guide
- **PROJECT_SUMMARY.md** - Feature overview
- **Azure Portal** - https://portal.azure.com
- **GitHub Actions** - Monitor deployments
- **DNS Checker** - https://dnschecker.org
- **Lighthouse** - Chrome DevTools → Lighthouse

---

## ✅ Final Sign-Off

Before considering the project complete:

- [ ] All items above checked
- [ ] Site tested by at least 2 people
- [ ] Stakeholders reviewed and approved
- [ ] Documentation complete
- [ ] Maintenance plan in place
- [ ] Success metrics defined
- [ ] Launch announcement ready

---

**🎉 Ready to launch!** Good luck with your Tactyl.io website!
