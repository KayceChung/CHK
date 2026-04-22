# 🖼️ Image Optimization Quick Guide

## Current Status

### ❌ Issues Found (from build output)
```
dist/assets/profile-BS5bWOr-.png       1,040.80 kB  ❌ TOO LARGE
dist/assets/project-ctd-D_PX7E-z.png   1,417.45 kB  ❌ TOO LARGE
```

**Target:** < 100KB per image  
**Current:** 1-1.4 MB per image (10-14x too large!)

---

## 🚨 Priority Actions

### 1. Compress Existing Images

#### Option A: Online Tools (Easiest)
1. **TinyPNG** - https://tinypng.com/
   - Drag and drop PNG/JPG
   - Automatically compresses
   - Download compressed version
   - Usually 70-80% size reduction

2. **Squoosh** - https://squoosh.app/
   - More control over compression
   - Compare before/after
   - Convert to WebP
   - Download optimized image

#### Option B: CLI Tools
```bash
# Install ImageMagick (Windows)
# Download from: https://imagemagick.org/script/download.php

# Compress PNG
magick convert profile.png -quality 85 -strip profile-optimized.png

# Convert to WebP
magick convert profile.png -quality 80 profile.webp
```

### 2. Replace Images in Project

**Files to optimize:**
```
app/assets/profile.png          → Target: < 100KB
app/assets/project-ctd.png      → Target: < 100KB  
app/assets/project-rachel.png   → Target: < 100KB
```

**Steps:**
1. Compress each image using TinyPNG or Squoosh
2. Save with same filename or add `-optimized` suffix
3. Replace original files
4. Create WebP versions (optional but recommended)
5. Run `npm run build` to verify

---

## 📋 Image Optimization Checklist

### Before Upload
- [ ] Resize to actual display size (don't upload 4000x3000 for 800x600 display)
- [ ] Compress to 80-85% quality
- [ ] Target < 100KB per image
- [ ] Create WebP version
- [ ] Add descriptive alt text

### Image Specs by Type

| Type | Max Size | Format | Quality | Dimensions |
|------|----------|--------|---------|------------|
| **Hero Image** | 150KB | WebP + JPG | 80% | 1920x1080 |
| **Profile Photo** | 50KB | WebP + PNG | 85% | 800x800 |
| **Project Thumbnail** | 75KB | WebP + JPG | 80% | 1200x800 |
| **Icon/Logo** | 10KB | SVG/PNG | - | 200x200 |
| **Background** | 100KB | WebP + JPG | 75% | 1920x1080 |

---

## 🔧 Implementation Guide

### Using LazyImage Component

**Basic Usage:**
```tsx
import { LazyImage } from './components/LazyImage';

// Replace regular <img> tags with <LazyImage>
<LazyImage 
  src="/assets/profile.png"
  alt="Profile photo of Chung Hiến Khang"
  className="w-full rounded-lg"
/>
```

**With WebP Support:**
```tsx
<LazyImage 
  src="/assets/profile.png"
  webpSrc="/assets/profile.webp"
  alt="Profile photo"
  className="w-full"
/>
```

**Priority (Above-fold):**
```tsx
// For images visible on initial page load
<LazyImage 
  src="/assets/hero.jpg"
  alt="Hero background"
  priority
  className="w-full h-screen object-cover"
/>
```

### Where to Apply

**Priority Images (Load immediately):**
- [ ] Hero section background/image
- [ ] Profile photo in Hero
- [ ] Logo in Header
- [ ] First project card

**Lazy Load (Load when in view):**
- [ ] All other project cards
- [ ] Experience section images
- [ ] Education section images
- [ ] Footer images

---

## 🎯 Recommended Image CDN

For production, consider using an image CDN:

### 1. Unsplash (Free)
- Already used for some images
- Automatic optimization
- Responsive images via URL parameters

**Example:**
```tsx
const imageUrl = "https://images.unsplash.com/photo-xxx";

// Add optimization parameters
<LazyImage 
  src={`${imageUrl}?w=800&q=80&fm=webp&fit=crop`}
  alt="Photo"
/>
```

### 2. Cloudinary (Free tier: 25GB)
```tsx
// Original URL
src="https://res.cloudinary.com/demo/image/upload/sample.jpg"

// Optimized
src="https://res.cloudinary.com/demo/image/upload/w_800,q_auto,f_auto/sample.jpg"
```

### 3. ImgIX (Paid)
- Best for high-traffic sites
- Advanced optimization

---

## 📊 Expected Results

### Before Optimization
```
Total Images: 2.5 MB
Page Load: 5-7 seconds
Lighthouse: 60-70
```

### After Optimization
```
Total Images: 250 KB (10x smaller!)
Page Load: 2-3 seconds
Lighthouse: 90+
```

**Impact:**
- ⚡ 60% faster page load
- 💾 90% less bandwidth
- 📱 Better mobile experience
- 🎯 Higher Lighthouse score
- 💰 Lower hosting costs

---

## 🛠️ Tools & Resources

### Online Tools
- **TinyPNG:** https://tinypng.com/ (PNG/JPG compression)
- **Squoosh:** https://squoosh.app/ (Advanced optimization)
- **ImageOptim:** https://imageoptim.com/ (Mac app)
- **RIOT:** https://riot-optimizer.com/ (Windows app)

### CLI Tools
- **ImageMagick:** https://imagemagick.org/
- **sharp:** `npm install sharp` (Node.js library)
- **cwebp:** WebP encoder from Google

### Browser Extensions
- **Image Size Info:** View image dimensions
- **Lighthouse:** Performance testing
- **Web Vitals:** Real-time metrics

### Learning Resources
- **Web.dev Images Guide:** https://web.dev/fast/#optimize-your-images
- **MDN Responsive Images:** https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

---

## ⚠️ Common Mistakes

### ❌ Don't Do This:
```tsx
// Loading massive image without optimization
<img src="photo-4000x3000-5MB.png" style="width: 200px" />

// No alt text (bad for SEO and a11y)
<img src="photo.jpg" />

// All images load at once (slow initial load)
{images.map(img => <img src={img} />)}
```

### ✅ Do This:
```tsx
// Properly sized and optimized image
<LazyImage 
  src="photo-800x600-50KB.webp"
  alt="Descriptive text for accessibility"
  className="w-[200px]"
/>

// Lazy load images below fold
{images.map((img, i) => (
  <LazyImage 
    key={i}
    src={img.url}
    alt={img.description}
    priority={i === 0} // Only first image priority
  />
))}
```

---

## 🎬 Quick Start Script

```bash
#!/bin/bash
# Quick image optimization script

echo "📸 Image Optimization Script"
echo ""

# Find large images
echo "🔍 Finding images > 100KB..."
find app/assets -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +100k -exec ls -lh {} \;

echo ""
echo "💡 Recommendations:"
echo "1. Upload these images to https://tinypng.com/"
echo "2. Download compressed versions"
echo "3. Replace original files"
echo "4. Run 'npm run build' to verify"
echo ""
echo "🎯 Target: All images < 100KB"
```

**Save as:** `optimize-images.sh`

---

## ✅ Final Checklist

Before deploying:
- [ ] All images < 100KB
- [ ] WebP versions created (optional but recommended)
- [ ] Alt text added to all images
- [ ] LazyImage component used everywhere except above-fold
- [ ] Run `npm run build` and check sizes
- [ ] Test on slow 3G network
- [ ] Run Lighthouse audit (score > 90)

---

**Last Updated:** April 22, 2026  
**Priority:** 🔴 HIGH - Images currently 10x too large!  
**Estimated Time:** 30 minutes with online tools
