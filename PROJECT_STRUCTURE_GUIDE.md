# Hướng Dẫn Cấu Trúc Dự Án Website

Dưới đây là mô tả cấu trúc thư mục và các thành phần chính của dự án website này:

## 1. Thư mục gốc
- `index.html`: Trang HTML chính của website.
- `404.html`: Trang báo lỗi khi không tìm thấy trang.
- `package.json`: Quản lý các package và script cho dự án (npm/yarn).
- `vite.config.ts`: Cấu hình cho Vite (công cụ build).
- `postcss.config.mjs`: Cấu hình cho PostCSS.
- `Guidelines.md`, `ATTRIBUTIONS.md`: Tài liệu hướng dẫn và ghi nhận đóng góp.

## 2. Thư mục `app/`
Chứa mã nguồn chính của ứng dụng React:
- `App.tsx`: Thành phần gốc của ứng dụng React.
- `main.tsx`: Điểm khởi tạo ứng dụng React.
- `assets/`: Chứa hình ảnh, icon, font, v.v.
- `components/`: Chứa các component React tái sử dụng.
  - `About.tsx`, `Contact.tsx`, `Education.tsx`, `Experience.tsx`, `Footer.tsx`, `Header.tsx`, `Hero.tsx`, `HologramImage.tsx`, `PixelRevealImage.tsx`, `ProjectCard.tsx`, `Projects.tsx`, `ProjectsSection.tsx`, `Services.tsx`, `TechStack.tsx`: Các component giao diện cho từng phần của website.
  - `figma/`: Các component liên quan đến Figma hoặc thiết kế.
    - `ImageWithFallback.tsx`: Component hình ảnh có fallback.
  - `ui/`: Các component UI nhỏ, tiện ích (accordion, button, card, dialog, form, input, table, ...).
  - `contexts/`: Chứa các context React để quản lý state toàn cục (ví dụ: `LanguageContext.tsx`).

## 3. Thư mục `party/` và `public/`
- Chứa các file xác thực, tài nguyên tĩnh, hoặc tích hợp bên ngoài (ví dụ: xác minh Google).

## 4. Thư mục `styles/`
- `index.css`, `tailwind.css`, `techno-projects.css`, `theme.css`: Các file CSS tổng hợp, cấu hình Tailwind, chủ đề, và style riêng cho từng phần.

## 5. Một số lưu ý
- **Component**: Được tổ chức rõ ràng theo từng chức năng, dễ mở rộng.
- **UI Components**: Được tách riêng trong `app/components/ui/` để tái sử dụng và dễ bảo trì.
- **Context**: Sử dụng React Context để quản lý các trạng thái dùng chung.
- **Cấu hình**: Sử dụng Vite để build và phát triển nhanh.

---

## Sơ đồ tổng quan
```
/ (gốc)
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── ...
│   │   ├── figma/
│   │   └── ui/
│   └── contexts/
├── party/
├── public/
├── styles/
├── index.html
├── 404.html
├── package.json
├── vite.config.ts
└── ...
```

## Hướng dẫn phát triển
- Thêm component mới vào đúng thư mục chức năng.
- Style ưu tiên dùng Tailwind hoặc các file CSS trong `styles/`.
- Sử dụng context cho các trạng thái dùng chung.
- Cấu hình, script build nằm ở thư mục gốc.

---

*File này giúp bạn nhanh chóng nắm được cấu trúc và quy tắc tổ chức của dự án.*