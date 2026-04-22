# 🔧 FIX: VERCEL BLANK PAGE ISSUE

## ❌ Vấn Đề

Website deploy trên Vercel bị **trống trơn** (blank page).

**Nguyên nhân**:
1. ❌ `vite.config.ts` có `base: '/CHK/'` (cho GitHub Pages)
2. ❌ Vercel deploy ở root domain, cần `base: '/'`
3. ❌ Thiếu `vercel.json` để handle SPA routing
4. ❌ Khi user truy cập `/projects` hoặc route khác → 404

---

## ✅ Giải Pháp

### 1. Fix Base Path trong `vite.config.ts`

**Trước** (GitHub Pages):
```typescript
export default defineConfig({
  base: '/CHK/', // ❌ Sai cho Vercel
  plugins: [...]
})
```

**Sau** (Vercel):
```typescript
export default defineConfig({
  base: '/', // ✅ Đúng cho Vercel
  plugins: [...]
})
```

### 2. Tạo `vercel.json` cho SPA Routing

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Giải thích**:
- `rewrites`: Tất cả routes (`/`, `/projects`, `/about`, etc.) đều trỏ về `index.html`
- React Router sẽ handle routing ở client-side
- `headers`: Cache static assets 1 năm (performance optimization)

---

## 🎯 Cách Hoạt Động

### Trước (Lỗi):
```
User truy cập: https://your-site.vercel.app/projects
↓
Vercel tìm file: /projects/index.html
↓
Không tìm thấy → 404 blank page
```

### Sau (Fixed):
```
User truy cập: https://your-site.vercel.app/projects
↓
vercel.json rewrite → /index.html
↓
React app loads
↓
React Router render /projects component ✅
```

---

## 📊 Test Results

**Local Build**: ✅ Success
```
✓ built in 5.97s
✅ Copied 404.html to dist/
```

**Git Push**: ✅ Success
```
Commit: 223fe94
To https://github.com/KayceChung/CHK.git
   8ae0faf..223fe94  main -> main
```

**Vercel**: 🔄 Auto-deploying now
- Detected new commit
- Building with correct config
- Should be live in 1-2 minutes

---

## 🚀 Verification Steps

### After Vercel finishes deploying:

1. **Test Homepage**:
   - Visit: `https://your-site.vercel.app/`
   - Should see: Homepage content ✅

2. **Test Projects Page**:
   - Visit: `https://your-site.vercel.app/projects`
   - Should see: Projects list ✅

3. **Test Direct URL**:
   - Visit: `https://your-site.vercel.app/projects/project-slug`
   - Should see: Project detail page ✅

4. **Test 404**:
   - Visit: `https://your-site.vercel.app/random-page`
   - Should see: Custom 404 page ✅

5. **Test Language Switch**:
   - Switch languages (EN/VI/ZH)
   - Should work smoothly ✅

---

## 📝 Important Notes

### For Dual Deployment (GitHub Pages + Vercel):

**If you want to deploy to BOTH**:

1. **GitHub Pages**: Use `base: '/CHK/'`
2. **Vercel**: Use `base: '/'`

**Solution**: Create separate branches or use environment variables:

```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/CHK/',
  plugins: [...]
})
```

### Current Configuration:

✅ **Optimized for Vercel** (recommended)
- `base: '/'` in vite.config.ts
- `vercel.json` for SPA routing

If you need GitHub Pages later, change back to `base: '/CHK/'`

---

## 🔍 Common Issues & Solutions

### Issue: Images not loading
**Solution**: Check image paths use relative URLs without base prefix

### Issue: CSS not applied
**Solution**: Verify `base: '/'` is set correctly

### Issue: API calls fail
**Solution**: Add environment variables in Vercel Dashboard

### Issue: 404 on refresh
**Solution**: Verify `vercel.json` exists and is committed

---

## 📚 Files Changed

| File | Change | Purpose |
|------|--------|---------|
| `vite.config.ts` | `base: '/CHK/'` → `base: '/'` | Fix asset paths |
| `vercel.json` | Created | SPA routing + caching |

---

## 🎉 Expected Result

After deployment completes:

✅ Homepage loads correctly  
✅ All routes work (no blank pages)  
✅ Direct URL access works  
✅ Browser refresh works on any page  
✅ Images and assets load correctly  
✅ Language switching works  
✅ Smooth navigation between pages  

---

## 🔗 Resources

- **Vercel SPA Configuration**: https://vercel.com/docs/configuration#rewrites
- **Vite Base Option**: https://vitejs.dev/config/shared-options.html#base
- **React Router**: https://reactrouter.com/en/main

---

**Date**: April 23, 2026  
**Status**: ✅ Fixed and deploying  
**Commit**: `223fe94`  
**GitHub**: https://github.com/KayceChung/CHK/commit/223fe94

**Check Vercel Dashboard** to monitor deployment progress! 🚀
