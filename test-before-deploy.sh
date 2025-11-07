#!/bin/bash

# Test Script - Verify application before deployment

echo "🧪 Testing Gita Fashion PWA before deployment..."

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_info() { echo -e "${YELLOW}ℹ️  $1${NC}"; }

# Test 1: Check required files
print_info "Test 1: Checking required files..."
required_files=(
    "package.json"
    "Dockerfile"
    "Dockerfile.coolify"
    ".coolify"
    "src/app/layout.tsx"
    "src/app/api/health/route.ts"
    "drizzle.config.ts"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        print_success "Found: $file"
    else
        print_error "Missing: $file"
        exit 1
    fi
done

# Test 2: Check package.json scripts
print_info "Test 2: Checking package.json scripts..."
if grep -q '"build"' package.json && \
   grep -q '"start"' package.json && \
   grep -q '"db:migrate"' package.json; then
    print_success "All required scripts present"
else
    print_error "Missing required scripts in package.json"
    exit 1
fi

# Test 3: Install dependencies
print_info "Test 3: Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    print_success "Dependencies installed"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Test 4: Build application
print_info "Test 4: Building application..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build successful"
else
    print_error "Build failed"
    exit 1
fi

# Test 5: Check Dockerfile syntax
print_info "Test 5: Checking Dockerfile..."
docker build -f Dockerfile.coolify -t gita-fashion:test . > /dev/null 2>&1
if [ $? -eq 0 ]; then
    print_success "Dockerfile.coolify is valid"
    docker rmi gita-fashion:test > /dev/null 2>&1
else
    print_error "Dockerfile.coolify has errors"
    exit 1
fi

# Test 6: Check environment template
print_info "Test 6: Checking environment template..."
if [ -f ".env.docker" ] || [ -f ".env.production.example" ]; then
    print_success "Environment template found"
else
    print_error "No environment template found"
    exit 1
fi

# Test 7: Check health endpoint
print_info "Test 7: Checking health endpoint..."
if [ -f "src/app/api/health/route.ts" ]; then
    print_success "Health endpoint exists"
else
    print_error "Health endpoint missing"
    exit 1
fi

# Test 8: Check PWA files
print_info "Test 8: Checking PWA files..."
if [ -f "public/manifest.json" ] && [ -f "public/sw.js" ]; then
    print_success "PWA files present"
else
    print_error "PWA files missing"
    exit 1
fi

echo ""
print_success "🎉 All tests passed! Application is ready for deployment."
echo ""
print_info "Next steps:"
echo "  1. Run cleanup: ./cleanup-for-coolify.sh"
echo "  2. Commit changes: git add . && git commit -m 'Prepare for Coolify deployment'"
echo "  3. Push to GitHub: git push origin main"
echo "  4. Deploy with Coolify"
echo ""
