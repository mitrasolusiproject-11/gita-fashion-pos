# 🚀 Gita Fashion PWA - Coolify Deployment Guide

## ✨ Why Coolify?

- **🎯 Super Easy**: GUI-based deployment, no command line needed
- **🔒 Auto SSL**: Automatic HTTPS with Let's Encrypt
- **🔄 Auto Deploy**: Push to GitHub = Auto deploy
- **📊 Monitoring**: Built-in logs and metrics
- **💾 Backups**: Easy backup and restore
- **🌐 Domains**: Easy domain management

---

## 📋 Prerequisites

- VPS with Ubuntu 20.04/22.04/24.04
- Minimum 2GB RAM
- Domain name (optional, can use Coolify subdomain)
- GitHub account with gita-fashion repository

---

## 🚀 Step-by-Step Deployment

### **Step 1: Install Coolify on VPS**

```bash
# SSH to your VPS
ssh root@YOUR_VPS_IP

# Install Coolify (one command)
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash

# Wait for installation (~5 minutes)
```

**Access Coolify:**
- URL: `http://YOUR_VPS_IP:8000`
- Create admin account on first access

---

### **Step 2: Setup GitHub Integration**

1. **Dashboard** → **Sources** → **Add Source**
2. Select **GitHub**
3. Click **Authorize GitHub**
4. Grant access to your repositories
5. Select `gita-fashion` repository

---

### **Step 3: Create New Project**

1. **Dashboard** → **Projects** → **New Project**
2. **Project Name**: Gita Fashion
3. **Description**: Modern POS & Inventory Management PWA
4. Click **Create**

---

### **Step 4: Add Application**

1. In your project → **Add Resource** → **Application**
2. **Source**: Select your GitHub source
3. **Repository**: gita-fashion
4. **Branch**: main
5. **Build Pack**: Dockerfile
6. **Dockerfile Location**: `Dockerfile` (or `Dockerfile.coolify` for optimized)
7. Click **Continue**

---

### **Step 5: Configure Application**

#### **General Settings:**
- **Application Name**: gita-fashion
- **Port**: 3000
- **Exposed Port**: 3000

#### **Domain Settings:**
- **Domain**: `gitafashion.yourdomain.com`
- Or use Coolify subdomain: `gita-fashion.coolify.yourdomain.com`
- **Enable SSL**: ✅ (Auto with Let's Encrypt)

#### **Environment Variables:**

Add these in **Environment** tab:

```env
NEXTAUTH_URL=https://gitafashion.yourdomain.com
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
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

Add in **Storages** tab:

1. **Database Storage:**
   - Name: `gita-fashion-database`
   - Source: `/data`
   - Destination: `/app/data`
   - Mount Path: `/app/data`

2. **Logs Storage:**
   - Name: `gita-fashion-logs`
   - Source: `/logs`
   - Destination: `/app/logs`
   - Mount Path: `/app/logs`

#### **Health Check:**
- **Path**: `/api/health`
- **Port**: 3000
- **Interval**: 30s
- **Timeout**: 10s
- **Retries**: 3

---

### **Step 6: Deploy Application**

1. Click **Deploy** button
2. Watch deployment logs in real-time
3. Wait for deployment to complete (~5-10 minutes)

**Deployment Process:**
- ✅ Clone repository from GitHub
- ✅ Build Docker image
- ✅ Start container
- ✅ Setup SSL certificate
- ✅ Configure reverse proxy
- ✅ Health check

---

### **Step 7: Initialize Database**

After first deployment:

1. Go to **Application** → **Terminal**
2. Run these commands:

```bash
# Generate database schema
npm run db:generate

# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

3. **Restart** application from Coolify dashboard

---

### **Step 8: Verify Deployment**

1. **Access Application:**
   - URL: `https://gitafashion.yourdomain.com`
   - Should show login page

2. **Test Login:**
   - Email: `admin@gitafashion.com`
   - Password: `admin123`

3. **Check PWA:**
   - Install prompt should appear
   - Offline mode should work
   - Service worker registered

---

## 🔄 Auto-Deploy Setup

### **Enable Auto-Deploy:**

1. **Application Settings** → **Git**
2. Enable **Auto Deploy on Push**
3. Select **Branch**: main
4. **Webhook**: Automatically configured

**Now every push to GitHub will auto-deploy!** 🎉

---

## 📊 Monitoring & Management

### **View Logs:**
- **Dashboard** → **Your App** → **Logs**
- Real-time logs streaming
- Filter by date/time

### **Metrics:**
- **Dashboard** → **Your App** → **Metrics**
- CPU usage
- Memory usage
- Network traffic

### **Terminal Access:**
- **Dashboard** → **Your App** → **Terminal**
- Direct shell access to container
- Run commands, check files

---

## 💾 Backup & Restore

### **Manual Backup:**

1. **Application** → **Storages** → **gita-fashion-database**
2. Click **Backup**
3. Download backup file

### **Scheduled Backups:**

1. **Application** → **Backups**
2. Enable **Scheduled Backups**
3. Set frequency: Daily/Weekly
4. Set retention: 7 days

### **Restore:**

1. **Application** → **Backups**
2. Select backup
3. Click **Restore**

---

## 🔧 Troubleshooting

### **Deployment Failed:**

1. Check **Logs** for errors
2. Verify **Environment Variables**
3. Check **Dockerfile** syntax
4. Ensure **Port 3000** is correct

### **Application Not Accessible:**

1. Check **Domain** configuration
2. Verify **SSL Certificate** status
3. Check **Firewall** rules
4. Test **Health Check** endpoint

### **Database Issues:**

1. Check **Storage** is mounted
2. Verify **Database** file exists
3. Re-run **migrations**
4. Check **permissions**

---

## 🎯 Best Practices

### **Security:**
- ✅ Use strong `NEXTAUTH_SECRET`
- ✅ Enable SSL/HTTPS
- ✅ Regular backups
- ✅ Update dependencies

### **Performance:**
- ✅ Use persistent storage for database
- ✅ Enable health checks
- ✅ Monitor resource usage
- ✅ Set proper resource limits

### **Maintenance:**
- ✅ Regular backups (daily)
- ✅ Monitor logs for errors
- ✅ Update application regularly
- ✅ Test before deploying

---

## 🆕 Update Application

### **Manual Update:**

1. Push changes to GitHub
2. **Dashboard** → **Your App** → **Deploy**
3. Click **Redeploy**

### **Auto Update:**

- Just push to GitHub
- Coolify auto-deploys
- Zero downtime deployment

---

## 📱 PWA Features

After deployment, users can:

- **Install** app from browser
- **Use offline** when no internet
- **Receive** push notifications
- **Access** via app shortcuts
- **Fast loading** with caching

---

## 🎉 Success Checklist

- [ ] Coolify installed on VPS
- [ ] GitHub repository connected
- [ ] Application deployed
- [ ] SSL certificate active
- [ ] Database initialized
- [ ] Login working
- [ ] PWA features working
- [ ] Auto-deploy enabled
- [ ] Backups configured
- [ ] Monitoring active

---

## 🌐 Access Points

- **Application**: `https://gitafashion.yourdomain.com`
- **Coolify Dashboard**: `http://YOUR_VPS_IP:8000`
- **API Health**: `https://gitafashion.yourdomain.com/api/health`
- **PWA Manifest**: `https://gitafashion.yourdomain.com/manifest.json`

---

## 📞 Support

- **Coolify Docs**: https://coolify.io/docs
- **GitHub Issues**: https://github.com/your-username/gita-fashion/issues
- **Community**: Coolify Discord

---

**🎊 Deployment with Coolify is 10x easier than manual deployment!**

**Total setup time: ~15 minutes**  
**Maintenance: Minimal**  
**Success rate: 99%**