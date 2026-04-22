# IMAGE COMPRESSION GUIDE - CHK PORTFOLIO

## 🎯 Overview

This guide provides step-by-step instructions for compressing images in the CHK Portfolio website to improve performance and achieve Lighthouse scores >90.

---

## 📊 Current Status

**Images that NEED compression:**

| Image | Current Size | Target Size | Location |
|-------|-------------|-------------|----------|
| `profile.png` | **1,040 KB** ❌ | < 100 KB ✅ | `app/assets/profile.png` |
| `project-ctd.png` | **1,417 KB** ❌ | < 100 KB ✅ | `app/assets/project-ctd.png` |
| Other project images | Unknown | < 100 KB ✅ | Check `app/assets/` |

**Current Total:** ~2.5 MB  
**Target Total:** < 300 KB  
**Improvement Needed:** **~90% reduction**

---

## 🛠️ Compression Tools

### Option 1: TinyPNG (Recommended - Easy)

**Website:** https://tinypng.com/

**Pros:**
- ✅ Free for up to 20 images/month
- ✅ Easy drag-and-drop interface
- ✅ Excellent compression (60-80% reduction)
- ✅ Preserves transparency
- ✅ Batch processing

**Steps:**
1. Go to https://tinypng.com/
2. Drag and drop your images (up to 20 at a time)
3. Wait for compression (automatic)
4. Click "Download All" to get compressed images
5. Replace original images in `app/assets/`

**Expected Results:**
- `profile.png`: 1,040 KB → ~200-300 KB (70-80% reduction)
- `project-ctd.png`: 1,417 KB → ~250-350 KB (75-80% reduction)

---

### Option 2: Squoosh (Advanced Control)

**Website:** https://squoosh.app/

**Pros:**
- ✅ Free and open source
- ✅ More format options (WebP, AVIF)
- ✅ Fine-grained quality control
- ✅ Visual comparison slider
- ✅ Works offline (PWA)

**Cons:**
- ⚠️ One image at a time
- ⚠️ Requires more manual work

**Steps:**
1. Go to https://squoosh.app/
2. Drag image or click to upload
3. Choose compression format:
   - **For PNG with transparency:** Use **WebP** or **PNG** (OxiPNG)
   - **For JPG photos:** Use **MozJPEG** or **WebP**
4. Adjust quality slider (try 75-85 for good balance)
5. Compare Before/After using slider
6. Click "Download" when satisfied
7. Replace in `app/assets/`

**Recommended Settings:**
- **WebP:** Quality 80, Effort 6
- **MozJPEG:** Quality 85
- **OxiPNG:** Level 2-3 (for PNG)

---

### Option 3: ImageOptim (Mac Only)

**Website:** https://imageoptim.com/mac

**Pros:**
- ✅ Free desktop app
- ✅ Batch processing
- ✅ Lossless compression
- ✅ Drag-and-drop

**Steps:**
1. Download and install ImageOptim
2. Drag all images into the app
3. Wait for automatic compression
4. Images are compressed in-place
5. Copy compressed images to `app/assets/`

---

### Option 4: Command Line (Developers)

**For WebP conversion:**
```bash
# Install cwebp (WebP encoder)
# Windows: Download from https://developers.google.com/speed/webp/download
# Mac: brew install webp
# Linux: sudo apt-get install webp

# Convert PNG to WebP
cwebp -q 80 app/assets/profile.png -o app/assets/profile.webp

# Convert all images
for file in app/assets/*.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

**For PNG optimization:**
```bash
# Install pngquant
npm install -g pngquant-bin

# Compress PNG
pngquant --quality=65-80 app/assets/profile.png --output app/assets/profile-compressed.png
```

---

## 📋 Step-by-Step Compression Process

### Step 1: Backup Original Images

```bash
# Create backup folder
mkdir app/assets/originals

# Copy originals
cp app/assets/*.png app/assets/originals/
cp app/assets/*.jpg app/assets/originals/
```

### Step 2: Compress Images

**Using TinyPNG (Easiest):**

1. Open https://tinypng.com/ in browser
2. Open `app/assets/` folder in File Explorer
3. Select all PNG/JPG images
4. Drag them to TinyPNG website
5. Wait for compression (shows % reduction)
6. Click "Download All"
7. Extract downloaded ZIP
8. Replace files in `app/assets/` with compressed versions

### Step 3: Verify Compression

```bash
# Check file sizes
npm run build

# Look for file sizes in build output:
# dist/assets/profile-[hash].png should be < 100 KB
# dist/assets/project-ctd-[hash].png should be < 100 KB
```

### Step 4: Test Visual Quality

1. Start dev server: `npm run dev`
2. Open http://localhost:5173
3. Check Hero section - profile image should look sharp
4. Check Projects page - project images should look good
5. Open browser DevTools → Network tab
6. Reload page and verify image sizes

### Step 5: Build and Deploy

```bash
# Build for production
npm run build

# Check bundle analysis
# Open dist/stats.html in browser
# Verify images are optimized

# Deploy to GitHub Pages
npm run deploy
```

---

## ✅ Quality Checklist

After compression, verify:

- [ ] **Visual Quality**: Images look sharp, no visible artifacts
- [ ] **File Size**: Each image < 100 KB
- [ ] **Total Size**: All images combined < 300 KB
- [ ] **Transparency**: PNG transparency preserved (if applicable)
- [ ] **Colors**: No color banding or posterization
- [ ] **Sharpness**: Text and details remain readable
- [ ] **Contrast**: No loss of important details in shadows/highlights

**Quality Targets:**
- ✅ **Excellent:** 80-95 quality, minimal visible difference
- ✅ **Good:** 70-80 quality, slight softness acceptable
- ⚠️ **Acceptable:** 60-70 quality, noticeable but usable
- ❌ **Poor:** <60 quality, visible artifacts, do not use

---

## 🎨 Image Optimization Best Practices

### 1. Choose Right Format

| Format | Best For | Pros | Cons |
|--------|----------|------|------|
| **WebP** | Photos + Graphics | Small size, transparency | Limited old browser support |
| **JPEG** | Photos | Universal support | No transparency |
| **PNG** | Graphics, logos | Transparency, lossless | Large file size |
| **SVG** | Icons, logos | Scalable, tiny | Only for vector graphics |

**Recommendation for CHK Portfolio:**
- Hero image (profile): **WebP** with **PNG** fallback
- Project thumbnails: **WebP** with **JPG** fallback
- Icons: Keep as **PNG** or convert to **SVG**

### 2. Implement WebP with Fallback

After compression, consider creating WebP versions:

```tsx
// Example in ProjectCard.tsx
<picture>
  <source srcSet="/assets/project.webp" type="image/webp" />
  <img src="/assets/project.png" alt="Project" loading="lazy" />
</picture>
```

### 3. Responsive Images

For large images, create multiple sizes:

```bash
# Create 3 sizes for profile image
cwebp -q 80 -resize 400 0 profile.png -o profile-400.webp
cwebp -q 80 -resize 800 0 profile.png -o profile-800.webp
cwebp -q 80 profile.png -o profile-1200.webp
```

Then use `srcset`:

```tsx
<img
  srcSet="
    profile-400.webp 400w,
    profile-800.webp 800w,
    profile-1200.webp 1200w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
  src="profile-800.webp"
  alt="Profile"
  loading="lazy"
/>
```

---

## 🚀 Performance Impact

**Before Optimization:**
- Total image size: ~2.5 MB
- Page load time: ~5-7 seconds (3G)
- Lighthouse Performance: ~60-70
- Time to Interactive: >7 seconds

**After Optimization:**
- Total image size: ~300 KB ✅
- Page load time: ~2-3 seconds (3G) ✅
- Lighthouse Performance: ~90+ ✅
- Time to Interactive: <3 seconds ✅

**Expected Improvements:**
- ⚡ **90% smaller images**
- ⚡ **60% faster page load**
- ⚡ **Better mobile experience**
- ⚡ **Lower bandwidth costs**
- ⚡ **Higher Lighthouse scores**

---

## 🧪 Testing Compressed Images

### Local Testing

```bash
# 1. Start dev server
npm run dev

# 2. Open DevTools (F12)
# 3. Go to Network tab
# 4. Reload page
# 5. Filter by "Img"
# 6. Check sizes of all images
```

### Lighthouse Audit

```bash
# 1. Build production version
npm run build

# 2. Serve locally
npx serve dist

# 3. Open http://localhost:3000 in Chrome Incognito
# 4. Open DevTools > Lighthouse
# 5. Run Performance audit
# 6. Check "Properly size images" section
```

**Target Lighthouse Scores:**
- Performance: ≥ 90
- Best Practices: ≥ 90
- Accessibility: ≥ 90
- SEO: ≥ 90

---

## 🔧 Troubleshooting

### Issue 1: Image Quality Too Low

**Symptom:** Visible compression artifacts, blurry text

**Solution:**
- Increase quality setting (try 85-90)
- Use lossless compression for critical images
- Try different compression tools
- Consider keeping original if artifacts are unacceptable

### Issue 2: File Size Still Too Large

**Symptom:** Images >100 KB after compression

**Solutions:**
1. **Reduce dimensions:** Images might be larger than needed
   ```bash
   # Resize to max 1200px width
   cwebp -resize 1200 0 -q 80 input.png -o output.webp
   ```

2. **Lower quality:** Try quality 70-75 (may impact visual quality)

3. **Switch format:** Try WebP instead of PNG
   ```bash
   cwebp -q 80 input.png -o output.webp
   ```

4. **Remove metadata:** Use tools to strip EXIF data
   ```bash
   exiftool -all= image.jpg
   ```

### Issue 3: Transparency Lost

**Symptom:** PNG transparency becomes white background

**Solution:**
- Use PNG or WebP format (not JPEG)
- In TinyPNG, ensure "preserve transparency" is checked
- In Squoosh, use WebP or PNG format
- Verify original image has transparency

### Issue 4: Colors Look Different

**Symptom:** Colors appear washed out or oversaturated

**Solution:**
- Preserve color profile in compression settings
- Use sRGB color space
- Compare side-by-side in different browsers
- Increase quality if colors are critical

---

## 📝 Compression Workflow Checklist

Use this checklist for each compression session:

- [ ] **Backup**: Copy originals to `app/assets/originals/`
- [ ] **Compress**: Use TinyPNG or Squoosh
- [ ] **Download**: Get compressed images
- [ ] **Replace**: Move to `app/assets/`
- [ ] **Test Visually**: Check in browser
- [ ] **Check Size**: Verify <100 KB per image
- [ ] **Build**: Run `npm run build`
- [ ] **Verify Build**: Check sizes in dist/
- [ ] **Test Performance**: Run Lighthouse audit
- [ ] **Deploy**: `npm run deploy` if satisfied

---

## 🎯 Success Criteria

Your optimization is successful when:

✅ **File Sizes**
- Each image < 100 KB
- Total images < 300 KB
- 80-90% reduction from original

✅ **Visual Quality**
- Images look sharp and clear
- No visible compression artifacts
- Colors accurate and vibrant
- Details preserved

✅ **Performance**
- Lighthouse Performance ≥ 90
- Page load < 3 seconds
- Images lazy load correctly
- LCP (Largest Contentful Paint) < 2.5s

✅ **User Experience**
- Fast loading on mobile
- Smooth scrolling
- No layout shifts (CLS)
- Professional appearance maintained

---

## 📚 Additional Resources

### Compression Tools
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **ImageOptim:** https://imageoptim.com/
- **Compressor.io:** https://compressor.io/

### Learning Resources
- **Web.dev Image Optimization:** https://web.dev/fast/#optimize-your-images
- **MDN Responsive Images:** https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- **WebP Documentation:** https://developers.google.com/speed/webp

### Testing Tools
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** Built into Chrome DevTools
- **WebPageTest:** https://www.webpagetest.org/

---

## 💡 Tips & Tricks

1. **Compress in batches** - Use TinyPNG for bulk compression
2. **Compare side-by-side** - Use Squoosh's slider to compare quality
3. **Test on mobile** - Images might look different on small screens
4. **Use WebP when possible** - Better compression than PNG/JPG
5. **Don't over-compress** - Balance file size vs quality
6. **Version control** - Keep originals in case you need to re-compress
7. **Automate later** - Once you find good settings, automate with build scripts

---

**Last Updated:** April 22, 2026  
**Status:** Ready to use  
**Estimated Time:** 30-45 minutes for all images
