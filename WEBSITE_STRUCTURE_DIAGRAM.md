# Sơ Đồ Cấu Trúc Website

Dưới đây là sơ đồ cấu trúc các thư mục và file chính của website này:

```
/ (Thư mục gốc)
├── 404.html
├── ATTRIBUTIONS.md
├── Guidelines.md
├── index.html
├── package.json
├── postcss.config.mjs
├── vite.config.ts
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── HologramImage.tsx
│   │   ├── PixelRevealImage.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── Services.tsx
│   │   ├── TechStack.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       ├── use-mobile.ts
│   │       └── utils.ts
│   └── contexts/
│       └── LanguageContext.tsx
├── party/
│   └── google62c62de1f0a6e3fa.html
├── public/
│   └── google62c62de1f0a6e3fa.html
├── styles/
│   ├── index.css
│   ├── tailwind.css
│   ├── techno-projects.css
│   └── theme.css
```

*File này giúp bạn hình dung tổng quan cấu trúc các thư mục và file của website.*


---

## Gợi ý Menu Tree Điều Hướng (Navigation Tree)

Bạn có thể xây dựng một menu tree (cây thư mục) có thể click để điều hướng đến từng phần/thư mục của website. Dưới đây là ví dụ cấu trúc menu tree sử dụng HTML và React:

### Ví dụ React Menu Tree

```jsx
// TreeMenu.jsx
import React from 'react';

const treeData = [
	{
		label: 'app',
		children: [
			{ label: 'App.tsx', path: '/app/App.tsx' },
			{ label: 'main.tsx', path: '/app/main.tsx' },
			{ label: 'assets', path: '/app/assets' },
			{
				label: 'components',
				children: [
					{ label: 'About.tsx', path: '/app/components/About.tsx' },
					// ...các file khác
				],
			},
			// ...các thư mục khác
		],
	},
	// ...các thư mục gốc khác
];

function TreeNode({ node }) {
	const [open, setOpen] = React.useState(false);
	const hasChildren = node.children && node.children.length > 0;
	return (
		<div style={{ marginLeft: 16 }}>
			<div onClick={() => setOpen(!open)} style={{ cursor: hasChildren ? 'pointer' : 'default', fontWeight: hasChildren ? 'bold' : 'normal' }}>
				{hasChildren ? (open ? '▼ ' : '► ') : '• '} {node.label}
			</div>
			{open && hasChildren && (
				<div>
					{node.children.map((child, idx) => (
						<TreeNode key={idx} node={child} />
					))}
				</div>
			)}
		</div>
	);
}

export default function TreeMenu() {
	return (
		<div>
			{treeData.map((node, idx) => (
				<TreeNode key={idx} node={node} />
			))}
		</div>
	);
}
```

### Cách sử dụng
- Thay `path` bằng đường dẫn thực tế của từng file/thư mục.
- Khi click vào node, có thể dùng `navigate(path)` (React Router) để chuyển trang hoặc highlight nội dung tương ứng.
- Có thể mở rộng để hiển thị icon, context menu, v.v.

---

*Bạn có thể tham khảo ví dụ trên để xây dựng menu tree điều hướng cho website của mình.*
