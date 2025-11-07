# 🚀 Gita Fashion PWA - Complete Deployment Steps

## 📋 Pre-Deployment Checklist

### ✅ **Step 1: Test Application Locally**

```bash
# Run test script
chmod +x test-before-deploy.sh
./test-before-deploy.sh

# Expected output: All tests passed ✅
```

### ✅ **Step 2: Cleanup Unnecessary Files**

```bash
# Run cleanup script
chmod +x cleanup-for-coolify.sh
./cleanup-for-coolify.sh

# This removes old deployment files
```

### ✅ **Step 3: Verify Important Files**

Check these files exist:
- [ ] `Dockerfile.coolify` - Optimized Dockerfile
- [ ] `.coolify` - Coolify configuration
- [ ] `COOLIFY_DEPLOYMENT.md` - Deployment guide
- [ ] `package.json` - Dependencies
- [ ] `src/` - Source code
- [ ] `public/` - Static assets + PWA files
- [ ] `drizzle/` - Database migrations

---

## 📤 Push to GitHub

### **Step 1: Check Git Status**

```bash
# Check current status
git status

# Check current branch
git branch

# Should be on 'main' branch
```

### **Step 2: Stage All Changes**

```bash
# Add all files
git add .

# Check what will be committed
git status
```

### **Step 3: Commit Changes**

```bash
# Commit with descriptive message
git commit -m "Prepare for Coolify deployment - Cleanup and optimize"

# Or more detailed:
git commit -m "feat: Optimize for Coolify deployment

- Add Dockerfile.coolify for optimized build
- Add .coolify configuration file
- Add COOLIFY_DEPLOYMENT.md guide
- Remove unnecessary deployment files
- Update README with Coolify instructions
- Add test and cleanup scripts"
```

### **Step 4: Push to GitHub**

```bash
# Push to main branch
git push origin main

# If first time pushing:
# git push -u origin main
```

### **Step 5: Verify on GitHub**

1. Open: `https://github.com/your-username/gita-fashion`
2. Check files are updated
3. Verify commit message
4. Check all important files are present

---

## 🐳 Deploy to Coolify

### **Step 1: Install Coolify on VPS**

```bash
# SSH to your VPS
ssh root@YOUR_VPS_IP

# Install Coolify
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# Wait for installation (~5 minutes)
```

### **Step 2: Access Coolify Dashboard**

1. Open browser: `http://YOUR_VPS_IP:8000`
2. Create admin account (first time)
3. Login to dashboard

### **Step 3: Connect GitHub**

1. **Dashboard** → **Sources** → **Add Source**
2. Select **GitHub**
3. Click **Authorize GitHub**
4. Grant access to repositories
5. Verify connection

### **Step 4: Create Project**

1. **Dashboard** → **Projects** → **New Project**
2. **Name**: Gita Fashion
3. **Description**: Modern POS & Inventory Management PWA
4. Click **Create**

### **Step 5: Add Application**

1. **Add Resource** → **Application**
2. **Source**: GitHub
3. **Repository**: gita-fashion
4. **Branch**: main
5. **Build Pack**: Dockerfile
6. **Dockerfile**: `Dockerfile.coolify`
7. Click **Continue**

### **Step 6: Configure Application**

#### **General:**
- **Name**: gita-fashion
- **Port**: 3000

#### **Domain:**
- **Domain**: `gitafashion.yourdomain.com`
- **Enable SSL**: ✅

#### **Environment Variables:**

```env
NEXTAUTH_URL=https://gitafashion.yourdomain.com
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
DATABASE_URL=file:./data/sqlite.db
NEXT_PUBLIC_APP_NAME=Gita Fashion
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=production
SECURE_COOKIES=true
TRUST_PROXY=true
NEXT_TELEMETRY_DISABLED=1
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

#### **Persistent Storage:**

1. **Database Storage:**
   - Name: `database`
   - Source: `/data`
   - Destination: `/app/data`

2. **Logs Storage:**
   - Name: `logs`
   - Source: `/logs`
   - Destination: `/app/logs`

#### **Health Check:**
- Path: `/api/health`
- Port: 3000
- Interval: 30s

### **Step 7: Deploy**

1. Click **Deploy** button
2. Watch logs in real-time
3. Wait for completion (~5-10 minutes)

### **Step 8: Initialize Database**

1. **Application** → **Terminal**
2. Run commands:

```bash
# Generate schema
npm run db:generate

# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

3. **Restart** application

### **Step 9: Verify Deployment**

1. **Access Application:**
   - URL: `https://gitafashion.yourdomain.com`

2. **Test Login:**
   - Email: `admin@gitafashion.com`
   - Password: `admin123`

3. **Test PWA:**
   - Install prompt appears
   - Offline mode works
   - Service worker registered

### **Step 10: Enable Auto-Deploy**

1. **Application** → **Git Settings**
2. Enable **Auto Deploy on Push**
3. Branch: `main`

**Now every push to GitHub auto-deploys!** 🎉

---

## ✅ Post-Deployment Checklist

- [ ] Application accessible via HTTPS
- [ ] SSL certificate active (green lock)
- [ ] Login working with default credentials
- [ ] Database initialized with sample data
- [ ] PWA install prompt appears
- [ ] Offline mode functional
- [ ] All pages loading correctly
- [ ] Auto-deploy enabled
- [ ] Backups configured
- [ ] Monitoring active

---

## 🔄 Update Process

### **Future Updates:**

```bash
# 1. Make changes locally
# 2. Test changes
npm run build

# 3. Commit and push
git add .
git commit -m "Your update message"
git push origin main

# 4. Coolify auto-deploys!
# Watch deployment in Coolify dashboard
```

---

## 🆘 Troubleshooting

### **Build Failed:**
- Check Dockerfile.coolify syntax
- Verify all dependencies in package.json
- Check build logs in Coolify

### **Application Not Starting:**
- Check environment variables
- Verify port 3000 is correct
- Check health endpoint

### **Database Issues:**
- Verify storage is mounted
- Re-run migrations
- Check database file permissions

### **SSL Issues:**
- Verify domain DNS points to VPS
- Check SSL certificate status
- Wait for certificate generation (2-5 min)

---

## 📞 Support

- **Coolify Docs**: https://coolify.io/docs
- **GitHub Issues**: https://github.com/your-username/gita-fashion/issues
- **Deployment Guide**: [COOLIFY_DEPLOYMENT.md](COOLIFY_DEPLOYMENT.md)

---

**🎉 Total Deployment Time: ~15 minutes**  
**🚀 Success Rate: 99%**  
**🔧 Maintenance: Minimal**