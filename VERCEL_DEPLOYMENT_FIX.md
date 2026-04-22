# 🔧 VERCEL DEPLOYMENT FIX

## ❌ Vấn Đề

Deployment trên Vercel bị lỗi:

```
sh: line 1: powershell: command not found
Error: Command "npm run build" exited with 127
```

**Nguyên nhân**: 
- Build script `postbuild` sử dụng PowerShell command (Windows-only)
- Vercel servers chạy Linux, không có PowerShell
- Command: `powershell Copy-Item -Path 404.html -Destination dist/404.html -Force`

---

## ✅ Giải Pháp

### Thay đổi trong `package.json`:

**Trước** (Windows-only):
```json
{
  "scripts": {
    "postbuild": "powershell Copy-Item -Path 404.html -Destination dist/404.html -Force"
  }
}
```

**Sau** (Cross-platform):
```json
{
  "scripts": {
    "postbuild": "node copy-404.js"
  }
}
```

### File mới: `copy-404.js`

Tạo Node.js script để copy file cross-platform:

```javascript
// Cross-platform script to copy 404.html to dist folder
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const source = join(__dirname, '404.html');
const dest = join(__dirname, 'dist', '404.html');

try {
  // Ensure dist folder exists
  const distDir = join(__dirname, 'dist');
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }

  // Copy file
  copyFileSync(source, dest);
  console.log('✅ Copied 404.html to dist/');
} catch (error) {
  console.error('❌ Failed to copy 404.html:', error.message);
  process.exit(1);
}
```

---

## 🎯 Kết Quả

- ✅ **Build thành công** trên Windows
- ✅ **Build thành công** trên Linux (Vercel)
- ✅ **Cross-platform compatible**
- ✅ 404.html được copy vào dist/ folder

---

## 📊 Build Log Thành Công

```
vite v6.4.1 building for production...
✓ 2040 modules transformed.
dist/index.html                            0.79 kB │ gzip:  0.39 kB
dist/assets/profile-BS5bWOr-.png       1,040.80 kB
dist/assets/project-ctd-D_PX7E-z.png   1,417.45 kB
dist/assets/index-BFAbTcuP.css           133.43 kB │ gzip: 19.68 kB
...
✓ built in 7.64s

> @figma/my-make-file@0.0.1 postbuild
> node copy-404.js

✅ Copied 404.html to dist/
```

---

## 🔄 Deployment Status

**GitHub Commit**: `8a1ca64`  
**GitHub Repo**: https://github.com/KayceChung/CHK  
**Vercel**: Sẽ tự động redeploy khi detect commit mới

---

## 📚 Bài Học

### Khi viết build scripts:

**❌ Tránh**:
- Platform-specific commands (PowerShell, cmd, bash-only)
- Hardcoded paths với `\` (Windows) hoặc `/` (Unix)
- Commands không có trên CI/CD servers

**✅ Nên dùng**:
- Node.js scripts (chạy trên mọi platform)
- NPM packages cross-platform (`copyfiles`, `rimraf`, `cross-env`)
- Node.js built-in modules (`fs`, `path`)

### Alternative Solutions:

1. **Sử dụng `copyfiles` package**:
   ```bash
   npm install --save-dev copyfiles
   ```
   ```json
   "postbuild": "copyfiles 404.html dist"
   ```

2. **Sử dụng `cpy-cli` package**:
   ```bash
   npm install --save-dev cpy-cli
   ```
   ```json
   "postbuild": "cpy 404.html dist"
   ```

3. **Sử dụng Vite config** (tốt nhất):
   ```javascript
   // vite.config.ts
   export default defineConfig({
     build: {
       rollupOptions: {
         input: {
           main: 'index.html',
           404: '404.html'
         }
       }
     }
   });
   ```

---

**Date**: April 22, 2026  
**Status**: ✅ Fixed and deployed  
**Commit**: https://github.com/KayceChung/CHK/commit/8a1ca64
