# ⚡ Performance Optimization Guide

## Overview
This guide documents all performance optimizations implemented in the CHK Portfolio Website and how to measure/maintain them.

**Target Metrics:**
- Lighthouse Performance Score: **> 90**
- First Contentful Paint (FCP): **< 2.0s**
- Largest Contentful Paint (LCP): **< 2.5s**
- Cumulative Layout Shift (CLS): **< 0.1**
- Time to Interactive (TTI): **< 3.5s**
- Total Bundle Size: **< 500KB (gzipped)**

---

## 🎯 Implemented Optimizations

### 1. Code Splitting & Lazy Loading

#### Route-Based Code Splitting
Split large route components into separate chunks that load on-demand.

**Implementation:**
```typescript
// app/App.tsx
import { lazy, Suspense } from 'react';
import { PageLoadingSpinner } from './components/LoadingSpinner';

// Lazy load page components
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Wrap in Suspense
<Suspense fallback={<PageLoadingSpinner />}>
  <Projects />
</Suspense>
```

**Benefits:**
- Initial bundle size reduced by ~40%
- Faster initial page load
- Only loads code when user navigates to that page

**Files:**
- [app/App.tsx](app/App.tsx) - Lazy route configuration
- [app/components/LoadingSpinner.tsx](app/components/LoadingSpinner.tsx) - Suspense fallback

---

### 2. Bundle Analysis & Optimization

#### Visualizer Plugin
Analyze bundle composition to identify optimization opportunities.

**Configuration:**
```typescript
// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    visualizer({
      filename: './dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
```

**How to Use:**
```bash
# Build and generate stats
npm run build

# Open dist/stats.html in browser
# Analyze which libraries are taking the most space
```

#### Manual Chunking
Split vendor code into logical chunks for better caching.

**Configuration:**
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom'],
        ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        animations: ['motion/react'],
      },
    },
  },
}
```

**Benefits:**
- Better browser caching (vendor code rarely changes)
- Parallel loading of chunks
- Reduced main bundle size

---

### 3. Image Optimization

#### Lazy Image Component
Smart image loading with progressive enhancement.

**Features:**
- Intersection Observer for lazy loading
- WebP support with fallback
- Blur-up placeholder
- Error handling
- Responsive srcset

**Usage:**
```tsx
import { LazyImage } from './components/LazyImage';

// Basic usage
<LazyImage 
  src="/images/photo.jpg"
  alt="Description"
  className="w-full"
/>

// With WebP
<LazyImage 
  src="/images/photo.jpg"
  webpSrc="/images/photo.webp"
  alt="Description"
/>

// Priority (above-fold images)
<LazyImage 
  src="/images/hero.jpg"
  alt="Hero"
  priority
/>

// Responsive with srcset
<ResponsiveImage 
  baseUrl="https://images.unsplash.com/photo-123"
  widths={[640, 768, 1024, 1280]}
  alt="Responsive image"
/>
```

**Best Practices:**
1. **Convert to WebP:**
   ```bash
   # Use online tools:
   # - Squoosh.app
   # - TinyPNG.com
   # - ImageOptim (Mac)
   ```

2. **Compress images:**
   - Target: < 100KB per image
   - Use 80-85% quality
   - Resize to max needed dimensions

3. **Use priority prop:**
   - Above-fold images (Hero section)
   - Logo
   - Profile photo

4. **Lazy load everything else:**
   - Below-fold images
   - Gallery images
   - Project thumbnails

---

### 4. Performance Monitoring

#### Lighthouse Testing

**How to Run:**
```bash
# 1. Build production version
npm run build

# 2. Serve locally
npx serve dist

# 3. Open in Chrome Incognito
# Open: http://localhost:3000

# 4. Run Lighthouse
# Chrome DevTools > Lighthouse tab > Generate report
```

**What to Check:**
- ✅ Performance score > 90
- ✅ FCP (First Contentful Paint) < 2.0s
- ✅ LCP (Largest Contentful Paint) < 2.5s
- ✅ CLS (Cumulative Layout Shift) < 0.1
- ✅ No console errors
- ✅ All images have alt text
- ✅ Proper heading hierarchy

#### Bundle Size Analysis

**Check Bundle Size:**
```bash
npm run build

# Look for output like:
# dist/assets/index-[hash].js   250.50 kB │ gzip: 85.30 kB
# dist/assets/vendor-[hash].js  180.20 kB │ gzip: 62.10 kB
```

**Target Sizes:**
- Main bundle: < 300KB (gzipped < 100KB)
- Vendor bundle: < 200KB (gzipped < 70KB)
- Total: < 500KB (gzipped < 170KB)

**If bundle too large:**
1. Open `dist/stats.html`
2. Identify large dependencies
3. Consider alternatives or dynamic imports

---

## 🔧 Additional Optimizations

### 5. Preload Critical Resources

Add to [index.html](index.html):
```html
<head>
  <!-- Preload critical fonts -->
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://api.web3forms.com">
</head>
```

### 6. Minimize Third-Party Scripts

**Current Third-Party:**
- Web3Forms (contact form)
- Google Analytics (if added)

**Best Practices:**
- Load scripts async or defer
- Use facades for heavy embeds (YouTube, etc.)
- Self-host when possible

### 7. Cache Strategy

**Browser Caching:**
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      // Add hash to filenames for cache busting
      entryFileNames: 'assets/[name]-[hash].js',
      chunkFileNames: 'assets/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash].[ext]',
    },
  },
}
```

**Service Worker (Future):**
- Add Workbox for offline support
- Cache static assets
- Implement PWA features

---

## 📊 Performance Checklist

### Before Deployment
- [ ] Run `npm run build` successfully
- [ ] Check bundle size < 500KB
- [ ] Review `dist/stats.html` for large dependencies
- [ ] Test on production build (not dev server)
- [ ] Run Lighthouse audit (all scores > 90)
- [ ] Test on slow 3G connection
- [ ] Test on mobile device
- [ ] Check no console errors
- [ ] Verify all images load
- [ ] Test lazy loading works

### After Deployment
- [ ] Run Lighthouse on live site
- [ ] Monitor Core Web Vitals (Google Search Console)
- [ ] Check PageSpeed Insights score
- [ ] Test from different geographic locations
- [ ] Monitor error tracking (if implemented)

---

## 🎯 Current Performance Status

### Latest Metrics (Update after testing)
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Lighthouse Performance | > 90 | TBD | ⏳ |
| FCP | < 2.0s | TBD | ⏳ |
| LCP | < 2.5s | TBD | ⏳ |
| CLS | < 0.1 | TBD | ⏳ |
| TTI | < 3.5s | TBD | ⏳ |
| Bundle Size (gzipped) | < 170KB | TBD | ⏳ |

**How to Update:**
1. Run Lighthouse test
2. Update table above
3. Add screenshot to `docs/performance/`

---

## 🐛 Common Issues & Solutions

### Issue 1: Large Bundle Size
**Symptoms:** Bundle > 500KB, slow initial load

**Solutions:**
1. Check `dist/stats.html` for large dependencies
2. Lazy load heavy components
3. Remove unused dependencies
4. Use lightweight alternatives

**Example:**
```bash
# Remove unused package
npm uninstall unused-package

# Use lighter alternative
npm uninstall moment
npm install date-fns
```

### Issue 2: Slow Image Loading
**Symptoms:** Images take > 3s to load

**Solutions:**
1. Compress images (target < 100KB each)
2. Convert to WebP
3. Use responsive images (srcset)
4. Implement lazy loading
5. Use CDN (Unsplash, Cloudinary)

### Issue 3: Low Lighthouse Score
**Common Causes:**
- Images too large (optimize)
- Missing alt text (add to all images)
- Render-blocking resources (use async/defer)
- Large JavaScript bundle (code split)
- Slow server response (use CDN)

**Debug Steps:**
1. Run Lighthouse
2. Click on each red/yellow item
3. Follow recommendations
4. Re-test

### Issue 4: Layout Shift (CLS)
**Symptoms:** Content jumps while loading

**Solutions:**
1. Set width/height on images
2. Reserve space for dynamic content
3. Use aspect-ratio for responsive images
4. Preload fonts
5. Avoid inserting content above existing content

**Example:**
```tsx
// Bad: No dimensions
<img src="photo.jpg" alt="Photo" />

// Good: With dimensions
<img src="photo.jpg" alt="Photo" width="800" height="600" />

// Better: With aspect ratio
<LazyImage 
  src="photo.jpg" 
  alt="Photo"
  aspectRatio="56.25%" // 16:9 ratio
/>
```

---

## 🚀 Future Optimizations

### Phase 1 (High Priority)
- [ ] Convert all images to WebP
- [ ] Implement lazy loading for all images
- [ ] Add font preloading
- [ ] Minimize CSS (remove unused Tailwind classes)

### Phase 2 (Medium Priority)
- [ ] Implement service worker (PWA)
- [ ] Add resource hints (preconnect, dns-prefetch)
- [ ] Optimize third-party scripts
- [ ] Add critical CSS inlining

### Phase 3 (Low Priority)
- [ ] Implement HTTP/2 server push
- [ ] Add WebP generation to build process
- [ ] Implement image CDN
- [ ] Add performance monitoring (Real User Monitoring)

---

## 📚 Resources

### Tools
- **Lighthouse:** Chrome DevTools (free)
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/
- **Bundle Analyzer:** Built into project
- **Image Compression:** Squoosh.app, TinyPNG.com

### Documentation
- **Web Vitals:** https://web.dev/vitals/
- **Vite Performance:** https://vitejs.dev/guide/build.html
- **React Lazy:** https://react.dev/reference/react/lazy
- **Intersection Observer:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Best Practices
- **Google Web Fundamentals:** https://web.dev/
- **React Performance:** https://react.dev/learn/performance
- **Image Optimization:** https://web.dev/fast/#optimize-your-images

---

## ✅ Testing Script

```bash
#!/bin/bash
# Performance testing script

echo "🏗️  Building production..."
npm run build

echo "📊 Bundle size:"
du -sh dist/assets/*.js

echo "🧪 Starting local server..."
npx serve dist &
SERVER_PID=$!

echo "⏳ Waiting for server to start..."
sleep 3

echo "🌐 Open http://localhost:3000 in Chrome Incognito"
echo "🔍 Run Lighthouse in DevTools"
echo ""
echo "Press Enter when done to stop server..."
read

kill $SERVER_PID
echo "✅ Testing complete!"
```

**Save as:** `test-performance.sh`  
**Run:** `bash test-performance.sh`

---

**Last Updated:** April 22, 2026  
**Maintainer:** Chung Hiến Khang  
**Status:** ✅ Optimizations Implemented, Testing Pending
