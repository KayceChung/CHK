# TỔNG HỢP DỰ ÁN - CHUNG HIẾN KHANG PORTFOLIO WEBSITE

## 📋 MỤC LỤC
1. [Tổng Quan Dự Án](#tổng-quan-dự-án)
2. [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
3. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
4. [Tính Năng Chính](#tính-năng-chính)
5. [Phân Tích Components](#phân-tích-components)
6. [Cấu Trúc Dữ Liệu](#cấu-trúc-dữ-liệu)
7. [Routing & Navigation](#routing--navigation)
8. [Styling & Design System](#styling--design-system)
9. [Đa Ngôn Ngữ (i18n)](#đa-ngôn-ngữ-i18n)
10. [Build & Deployment](#build--deployment)
11. [Hướng Dẫn Phát Triển](#hướng-dẫn-phát-triển)

---

## 🎯 TỔNG QUAN DỰ ÁN

### Mục Đích
Website portfolio cá nhân của **Chung Hiến Khang** - một Solutions Consultant và E-Commerce Specialist. Website được thiết kế để:
- Giới thiệu năng lực chuyên môn và kinh nghiệm làm việc
- Trưng bày các dự án đã thực hiện
- Tạo điểm tiếp xúc chuyên nghiệp với khách hàng tiềm năng
- Hỗ trợ đa ngôn ngữ (Tiếng Anh, Tiếng Việt, Tiếng Trung)

### Thông Tin Dự Án
- **Tên dự án**: CHK Portfolio Website
- **Version**: 0.0.1
- **Loại**: Single Page Application (SPA) với multi-page routing
- **License**: Private
- **Repository**: GitHub Pages deployment tại `/CHK/`

### Đặc Điểm Nổi Bật
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Đa ngôn ngữ (EN/VI/ZH)
- ✅ Hiệu ứng animation mượt mà (motion/react)
- ✅ Giao diện hiện đại với theme techno/hologram
- ✅ SEO optimization
- ✅ Fast loading với Vite
- ✅ Component-based architecture
- ✅ Type-safe với TypeScript

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | ESNext | Type Safety |
| **Vite** | 6.4.1 | Build Tool & Dev Server |
| **React Router DOM** | 7.12.0 | Client-side Routing |

### UI & Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.1.12 | Utility-first CSS Framework |
| **@tailwindcss/vite** | 4.1.12 | Vite plugin for Tailwind |
| **Radix UI** | Multiple | Unstyled accessible components |
| **shadcn/ui** | - | Pre-built component library |
| **Motion** | 12.23.24 | Animation library (Framer Motion fork) |
| **Lucide React** | 0.487.0 | Icon library |

### Material-UI Integration
| Technology | Version | Purpose |
|------------|---------|---------|
| **@mui/material** | 7.3.5 | Material Design components |
| **@mui/icons-material** | 7.3.5 | Material icons |
| **@emotion/react** | 11.14.0 | CSS-in-JS for MUI |
| **@emotion/styled** | 11.14.1 | Styled components for MUI |

### Additional Libraries
| Library | Purpose |
|---------|---------|
| **react-markdown** | Render markdown content |
| **react-slick** | Carousel/slider components |
| **react-responsive-masonry** | Masonry layout |
| **react-dnd** | Drag and drop functionality |
| **date-fns** | Date manipulation |
| **recharts** | Chart/data visualization |
| **sonner** | Toast notifications |
| **cmdk** | Command menu |
| **vaul** | Drawer component |

### Development Tools
| Tool | Purpose |
|------|---------|
| **gh-pages** | GitHub Pages deployment |
| **PostCSS** | CSS processing |
| **TypeScript Config** | Type checking configuration |

---

## 📁 CẤU TRÚC DỰ ÁN

### Cấu Trúc Thư Mục Chính
```
b:\CHUNG HIẾN KHANG\
├── 📄 index.html                    # HTML entry point
├── 📄 404.html                      # Custom 404 page for GitHub Pages
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.ts               # Vite configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 postcss.config.mjs           # PostCSS configuration
├── 📄 Guidelines.md                # Development guidelines
├── 📄 ATTRIBUTIONS.md              # Third-party attributions
├── 📄 PROJECT_STRUCTURE_GUIDE.md   # Structure documentation
├── 📄 WEBSITE_STRUCTURE_DIAGRAM.md # Visual structure diagram
│
├── 📁 app/                         # Main application code
│   ├── 📄 App.tsx                  # Root component
│   ├── 📄 main.tsx                 # Application entry point
│   ├── 📄 declarations.d.ts        # TypeScript declarations
│   │
│   ├── 📁 assets/                  # Static assets
│   │   ├── profile.png
│   │   ├── project-ctd.png
│   │   ├── project-rachel.png
│   │   └── declarations.d.ts
│   │
│   ├── 📁 components/              # React components
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # About section
│   │   ├── Services.tsx            # Services section
│   │   ├── TechStack.tsx           # Tech stack section
│   │   ├── Education.tsx           # Education section
│   │   ├── Experience.tsx          # Experience section
│   │   ├── Contact.tsx             # Contact form
│   │   ├── Footer.tsx              # Footer section
│   │   ├── HologramImage.tsx       # Hologram effect component
│   │   ├── PixelRevealImage.tsx    # Pixel reveal effect
│   │   │
│   │   ├── 📁 cta/                 # Call-to-action components
│   │   │   ├── HomeCTA.tsx
│   │   │   └── ConversionCTA.tsx
│   │   │
│   │   ├── 📁 figma/               # Figma-related components
│   │   │   └── ImageWithFallback.tsx
│   │   │
│   │   ├── 📁 projects/            # Project-related components
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectDetailContent.tsx
│   │   │   ├── ProjectFilterSidebar.tsx
│   │   │   └── ProjectList.tsx
│   │   │
│   │   └── 📁 ui/                  # Shadcn/ui components (40+ files)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       └── ... (37+ more components)
│   │
│   ├── 📁 contexts/                # React Context providers
│   │   └── LanguageContext.tsx     # i18n context
│   │
│   ├── 📁 data/                    # Data files
│   │   ├── projects.ts             # Project data
│   │   └── projects.json           # Project data (JSON)
│   │
│   └── 📁 pages/                   # Page components
│       ├── Home.tsx                # Home page
│       ├── Projects.tsx            # Projects listing page
│       ├── ProjectsPage.tsx        # Projects page wrapper
│       ├── ProjectDetail.tsx       # Project detail page
│       └── ConsultingLandingPage.tsx # Consulting landing
│
├── 📁 styles/                      # Global styles
│   ├── index.css                   # Main CSS entry
│   ├── tailwind.css               # Tailwind imports
│   ├── theme.css                  # Theme variables
│   └── techno-projects.css        # Project-specific styles
│
├── 📁 public/                      # Public static files
│   └── google62c62de1f0a6e3fa.html # Google verification
│
└── 📁 party/                       # Additional static files
    └── google62c62de1f0a6e3fa.html # Google verification (backup)
```

---

## ✨ TÍNH NĂNG CHÍNH

### 1. Landing Page (Home)
**Các Section:**
- **Hero Section**: Giới thiệu tên, chức danh, mô tả ngắn với hiệu ứng hologram
- **About Section**: Thông tin chi tiết về bản thân, GPA, số dự án
- **Services Section**: 3 dịch vụ chính (Interpretation, E-Commerce, Technology)
- **Tech Stack Section**: Hiển thị kỹ năng kỹ thuật với progress bars
- **Education Section**: Học vấn tại Hoa Sen University
- **Experience Section**: Kinh nghiệm làm việc tại HK Buslines và các vị trí khác
- **Contact Section**: Form liên hệ và thông tin social links

### 2. Projects Page
**Tính năng:**
- Danh sách tất cả dự án với filtering sidebar
- Filter theo tags (AppSheet, SQL, Data Analysis, etc.)
- Grid layout responsive
- Click vào project để xem chi tiết

### 3. Project Detail Page
**Tính năng:**
- Hiển thị thông tin chi tiết dự án
- Sections: Context, Problem, Solution, Result
- Call-to-action để liên hệ
- Breadcrumb navigation
- Related projects suggestion

### 4. Đa Ngôn Ngữ (i18n)
**Ngôn ngữ hỗ trợ:**
- 🇬🇧 English (EN)
- 🇻🇳 Tiếng Việt (VI)
- 🇨🇳 中文 (ZH)

**Cách hoạt động:**
- Language switcher ở header
- Toàn bộ content được translate
- Persisted language selection

### 5. Responsive Design
**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

### 6. Animations & Effects
- **Framer Motion**: Scroll animations, hover effects, page transitions
- **Hologram Effect**: Hiệu ứng hologram cho profile image
- **Pixel Reveal**: Hiệu ứng reveal cho images
- **Grid Background**: Animated techno grid background
- **Glowing Orbs**: Animated background decorations
- **Scan Lines**: Retro scan line effects

### 7. SEO Optimization
- Dynamic meta tags
- Open Graph tags
- Structured data
- Semantic HTML
- Proper heading hierarchy
- Image alt texts

---

## 🧩 PHÂN TÍCH COMPONENTS

### Core Layout Components

#### 1. **App.tsx**
**Mục đích**: Root component của ứng dụng  
**Chức năng chính**:
- Wrap ứng dụng trong LanguageProvider
- Setup React Router với Routes
- Cấu hình SEO meta tags
- Render Header, Footer, và Toaster
- Define tất cả routes

**Routes được định nghĩa**:
```tsx
/ hoặc /CHK hoặc /CHK/     → Home page (tất cả sections)
/projects hoặc /CHK/projects → Projects listing page
/projects/:slug             → Project detail page
/contact hoặc /CHK/contact  → Contact section (scroll)
```

#### 2. **Header.tsx**
**Mục đích**: Navigation bar cố định ở top  
**Chức năng chính**:
- Smooth scroll to sections
- Language switcher (EN/VI/ZH)
- Mobile responsive menu
- Active route highlighting
- Logo link to home

**Navigation items**:
- About
- Services
- Tech Stack
- Experience
- Projects (Link to /projects)
- Contact

#### 3. **Footer.tsx**
**Mục đích**: Footer với thông tin liên hệ  
**Chức năng chính**:
- Social media links
- Copyright information
- Quick navigation links
- Newsletter signup (if implemented)

### Hero & Introduction Components

#### 4. **Hero.tsx**
**Mục đích**: Hero section với giới thiệu chính  
**Đặc điểm**:
- Full-screen height
- 2-column grid layout (text + image)
- Animated profile image với hologram effect
- CTA buttons (View Case Studies, Contact)
- Social links (GitHub, LinkedIn, Email, DataCamp)
- Techno background với grid và glowing orbs

**Hiệu ứng đặc biệt**:
- Animated scan lines
- Pulsing neon circles
- Floating data point badges
- Motion animations cho text

#### 5. **HologramImage.tsx**
**Mục đích**: Component tạo hiệu ứng hologram cho ảnh  
**Kỹ thuật**:
- Multiple layered divs
- CSS blend modes
- Animated borders
- Glitch effect
- Projection effect

#### 6. **PixelRevealImage.tsx**
**Mục đích**: Hiệu ứng reveal ảnh theo kiểu pixel art  
**Kỹ thuật**:
- Canvas-based animation
- Gradual pixel reveal
- Smooth transition

### Content Sections

#### 7. **About.tsx**
**Mục đích**: Giới thiệu chi tiết về bản thân  
**Nội dung**:
- Background và education
- Specialization
- Key statistics (GPA: 3.65, Projects: 5+, Awards)
- Professional photo

#### 8. **Services.tsx**
**Mục đích**: Giới thiệu các dịch vụ cung cấp  
**3 Dịch vụ chính**:
1. **Business Interpretation** (Languages icon)
   - English-Vietnamese interpretation
   - C1-C2 proficiency
   - Real-time translation
   - Cross-cultural communication

2. **E-Commerce Solutions** (ShoppingCart icon)
   - Strategy & market analysis
   - Platform optimization
   - Sales funnel optimization
   - Digital marketing

3. **Technology & Automation** (Workflow icon)
   - No-code app development (AppSheet)
   - Workflow automation
   - SQL & data analysis
   - API integration

**Design pattern**:
- 3-column grid
- Icon + title + description
- Feature checklist
- Gradient colored cards
- Hover effects

#### 9. **TechStack.tsx**
**Mục đích**: Hiển thị kỹ năng kỹ thuật  
**Cấu trúc**:
- Techno dark theme background
- 2-column grid
- 4 categories:
  - **Technical**: SQL, AppSheet, Google Apps Script, Python
  - **Tools & Platforms**: Google Workspace, GitHub, Figma
  - **Soft Skills**: Problem Solving, Communication, Leadership
  - **Languages**: Vietnamese (Native), English (C1), Chinese (HSK4)

**Visualization**:
- Progress bars cho mỗi skill
- Color-coded categories
- Icon representation
- Percentage display

#### 10. **Education.tsx**
**Mục đích**: Thông tin học vấn  
**Nội dung**:
- University name: Hoa Sen University
- Degree: Bachelor of International Business
- Major: E-commerce
- Period: 2020 - 2024
- GPA: 3.65/4.0
- Graduation cap icon

#### 11. **Experience.tsx**
**Mục đích**: Kinh nghiệm làm việc  
**3 Positions**:
1. **Solutions Consultant** - HK Buslines (Current)
   - Operational bottleneck analysis
   - Process optimization
   - Real-time data systems

2. **Faculty Assistant & Intern** - Hoa Sen University
   - Faculty of Logistics
   - April 2022 - August 2022

3. **Telesales Consultant** - Student Experience Room
   - April 2022 - Present
   - Student recruitment and consultation

**Design pattern**:
- Timeline layout
- Company logo
- Duration
- Responsibilities

#### 12. **Contact.tsx**
**Mục đích**: Form liên hệ và thông tin contact  
**Elements**:
- Contact form (Name, Email, Message)
- Social media links
- Email: chunghienkhang@gmail.com
- LinkedIn profile
- DataCamp portfolio
- Form validation
- Toast notification on submit

### Project Components

#### 13. **Projects.tsx** (Page)
**Mục đích**: Trang listing tất cả dự án  
**Layout**:
- Sidebar filter (tags)
- Main content area (project grid)
- Project count display
- Responsive masonry/grid layout

**Filtering logic**:
```tsx
const filtered = activeTags.length
  ? projects.filter(p => activeTags.every(tag => p.tags.includes(tag)))
  : projects;
```

#### 14. **ProjectFilterSidebar.tsx**
**Mục đích**: Sidebar để filter projects theo tags  
**Chức năng**:
- Hiển thị tất cả tags có sẵn
- Multi-select filters
- Active state indication
- Clear filters button
- Tag count display

**Tags có sẵn**:
- AppSheet
- SQL
- Data Analysis
- Process Optimization
- Portfolio
- Personal Brand
- Design
- Development

#### 15. **ProjectList.tsx**
**Mục đích**: Grid hiển thị danh sách projects  
**Chức năng**:
- Responsive grid layout
- Render ProjectCard components
- Empty state handling
- Lazy loading (if implemented)

#### 16. **ProjectCard.tsx**
**Mục đích**: Card component cho mỗi project  
**Nội dung**:
- Project thumbnail image
- Project title
- Short description
- Tags badges
- "Learn More" CTA button
- Link to project detail page

**Hover effects**:
- Scale transform
- Shadow increase
- Image zoom

#### 17. **ProjectDetail.tsx** (Page)
**Mục đích**: Trang chi tiết một dự án  
**Layout**:
- Hero image
- Breadcrumb navigation
- Project metadata (date, client, tags)
- Content sections (Context, Problem, Solution, Result)
- CTA section
- Related projects

#### 18. **ProjectDetailContent.tsx**
**Mục đích**: Render nội dung chi tiết dự án  
**Content structure**:
```tsx
{
  title: string
  context: string
  problem: string
  solution: string
  result: string
  cta: string
}
```
- Multi-language support
- Markdown rendering
- Section separators
- Responsive typography

### CTA Components

#### 19. **ConversionCTA.tsx**
**Mục đích**: Call-to-action section để tăng conversion  
**Content**:
- Compelling headline
- Value proposition
- Primary CTA button
- Secondary CTA button
- Trust indicators

#### 20. **HomeCTA.tsx**
**Mục đích**: CTA section cho home page  
**Similar to ConversionCTA but optimized for home page placement**

### UI Components (Shadcn/UI)

Dự án sử dụng 40+ UI components từ **shadcn/ui**, một component library dựa trên Radix UI và Tailwind CSS:

**Form Components**:
- `button.tsx` - Button với nhiều variants
- `input.tsx` - Text input
- `textarea.tsx` - Multi-line text input
- `checkbox.tsx` - Checkbox input
- `radio-group.tsx` - Radio button group
- `select.tsx` - Dropdown select
- `switch.tsx` - Toggle switch
- `slider.tsx` - Range slider
- `input-otp.tsx` - OTP input
- `form.tsx` - Form wrapper với validation

**Layout Components**:
- `card.tsx` - Card container
- `separator.tsx` - Divider line
- `aspect-ratio.tsx` - Aspect ratio container
- `scroll-area.tsx` - Custom scrollbar
- `resizable.tsx` - Resizable panels
- `sheet.tsx` - Side sheet/drawer
- `sidebar.tsx` - Sidebar layout
- `tabs.tsx` - Tab navigation
- `accordion.tsx` - Collapsible content
- `collapsible.tsx` - Expandable section

**Overlay Components**:
- `dialog.tsx` - Modal dialog
- `alert-dialog.tsx` - Alert/confirmation dialog
- `drawer.tsx` - Bottom drawer (mobile)
- `popover.tsx` - Popover overlay
- `tooltip.tsx` - Tooltip
- `hover-card.tsx` - Hover card
- `dropdown-menu.tsx` - Dropdown menu
- `context-menu.tsx` - Right-click menu
- `menubar.tsx` - Menu bar
- `navigation-menu.tsx` - Navigation mega menu
- `command.tsx` - Command palette (⌘K)

**Feedback Components**:
- `alert.tsx` - Alert banner
- `sonner.tsx` - Toast notifications
- `progress.tsx` - Progress bar
- `skeleton.tsx` - Loading skeleton

**Data Display**:
- `table.tsx` - Data table
- `badge.tsx` - Badge/tag
- `avatar.tsx` - User avatar
- `calendar.tsx` - Date picker calendar
- `carousel.tsx` - Image carousel
- `chart.tsx` - Chart wrapper (recharts)

**Navigation**:
- `breadcrumb.tsx` - Breadcrumb trail
- `pagination.tsx` - Pagination controls
- `toggle.tsx` - Toggle button
- `toggle-group.tsx` - Toggle button group

**Utilities**:
- `label.tsx` - Form label
- `utils.ts` - Utility functions (cn, etc.)
- `use-mobile.ts` - Mobile detection hook

---

## 📊 CẤU TRÚC DỮ LIỆU

### Projects Data Structure

File: `app/data/projects.ts`

```typescript
interface Project {
  slug: string;                    // URL-friendly identifier
  image: string;                   // Image URL or imported asset
  tags: string[];                  // Filter tags
  content: {
    en: ProjectContent;
    vi: ProjectContent;
    zh: ProjectContent;
  };
}

interface ProjectContent {
  title: string;
  context: string;               // Background info
  problem: string;               // Problem statement
  solution: string;              // Solution approach
  result: string;                // Measurable results
  cta: string;                   // Call-to-action text
}
```

### Current Projects

#### 1. Real-Time Data Collection System
**Slug**: `real-time-data-collection-system`  
**Tags**: AppSheet, SQL, Data Analysis, Process Optimization  
**Client**: HK Buslines (mid-sized bus company)

**Highlights**:
- **Problem**: 5-10 minute delays due to slow data collection
- **Solution**: Real-time data collection workflow (AppSheet + SQL)
- **Result**: Reduced delays to under 5 minutes on all routes
- **Impact**: Improved on-time performance significantly

#### 2. Chung Tiểu Đình Portfolio
**Slug**: `chung-tieu-dinh-portfolio`  
**Tags**: Portfolio, Personal Brand, Professional Showcase, Design, Development  
**Live URL**: https://kaycechung.github.io/CTD/

**Highlights**:
- **Problem**: Lack of professional online presence
- **Solution**: Beautiful, high-converting portfolio website
- **Result**: 
  - +40% potential clients through portfolio
  - +30% conversion from viewers to contacts
  - Increased recognition on professional platforms
- **Features**: Case studies, testimonials, clear CTA

---

## 🛣️ ROUTING & NAVIGATION

### React Router Configuration

**Router Type**: BrowserRouter  
**Base Path**: `/CHK/` (for GitHub Pages)

### Route Structure

```tsx
<Routes>
  {/* Home routes */}
  <Route path="/" element={<HomePage />} />
  <Route path="/CHK" element={<HomePage />} />
  <Route path="/CHK/" element={<HomePage />} />
  
  {/* Projects routes */}
  <Route path="/projects" element={<Projects />} />
  <Route path="/CHK/projects" element={<Projects />} />
  <Route path="/projects/:slug" element={<ProjectDetail />} />
  <Route path="/CHK/projects/:slug" element={<ProjectDetail />} />
  
  {/* Contact route */}
  <Route path="/contact" element={<Contact />} />
  <Route path="/CHK/contact" element={<Contact />} />
</Routes>
```

### Navigation Logic

#### Smooth Scroll to Section
```tsx
const scrollToSection = (id: string) => {
  // If on home page, scroll directly
  if (location.pathname === '/' || location.pathname === '/CHK' || location.pathname === '/CHK/') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // If on other page, navigate to home then scroll
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};
```

### Section IDs
- `#about` - About section
- `#services` - Services section
- `#techstack` - Tech Stack section
- `#education` - Education section
- `#experience` - Experience section
- `#projects` - Projects section
- `#contact` - Contact section

---

## 🎨 STYLING & DESIGN SYSTEM

### CSS Architecture

**Structure**:
```
styles/
├── index.css              # Main entry, imports all styles
├── tailwind.css           # Tailwind directives
├── theme.css              # CSS variables and theme
└── techno-projects.css    # Project-specific techno theme
```

### Tailwind Configuration

**Version**: 4.1.12  
**Plugin**: `@tailwindcss/vite` for Vite integration

**Custom Configuration**:
```js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/vite': {},
  },
};
```

### Design Tokens

#### Color Palette
**Primary Colors**:
- Cyan: `cyan-400`, `cyan-500`, `cyan-600`
- Blue: `blue-400`, `blue-500`, `blue-600`, `blue-900`, `blue-950`
- Purple: `purple-400`, `purple-500`
- Pink: `pink-500`, `pink-600`

**Neutral Colors**:
- Slate: `slate-50`, `slate-800`, `slate-900`, `slate-950`
- Gray: `gray-300`, `gray-400`, `gray-700`, `gray-900`

**Semantic Colors**:
- Success: `emerald-500`, `teal-500`
- Error: `red-500`
- Warning: `yellow-500`

#### Typography
**Font Families**:
- Sans: Default system font stack
- Mono: For code and technical text

**Font Sizes**:
- `text-sm`: 14px
- `text-base`: 16px
- `text-lg`: 18px
- `text-xl`: 20px
- `text-2xl`: 24px
- `text-4xl`: 36px
- `text-5xl`: 48px
- `text-6xl`: 60px

#### Spacing
Tailwind default scale (4px increment):
- `gap-4`, `gap-6`, `gap-8`, `gap-12`
- `p-4`, `p-6`, `p-8`, `p-12`, `p-20`
- `m-4`, `m-6`, `m-8`, `m-12`

#### Shadows
- `shadow-lg`: Large shadow
- `shadow-xl`: Extra large shadow
- `shadow-2xl`: 2X large shadow
- Custom: `shadow-cyan-500/50`, `shadow-blue-500/20`

### Design Patterns

#### Gradient Backgrounds
```css
bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50
bg-gradient-to-r from-cyan-500 to-blue-500
bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900
```

#### Backdrop Effects
```css
backdrop-blur-sm
backdrop-blur-md
bg-white/80
bg-slate-900/50
```

#### Glassmorphism
```css
bg-white/10
backdrop-blur-lg
border border-white/20
```

#### Techno/Hologram Theme
**Key Elements**:
- Grid backgrounds with subtle opacity
- Glowing neon borders (`border-cyan-400`)
- Pulsing animations (`animate-pulse`)
- Scan line effects
- Floating geometric shapes
- Gradient text effects (`bg-clip-text text-transparent`)

**Grid Pattern**:
```css
backgroundImage: `
  linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
`,
backgroundSize: '50px 50px'
```

### Responsive Design

#### Breakpoints
```css
sm: 640px    /* Tablet portrait */
md: 768px    /* Tablet landscape */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

#### Mobile-First Approach
```tsx
className="text-center lg:text-left"
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
className="flex flex-col sm:flex-row gap-4"
```

### Animation System

#### Framer Motion Variants

**Fade In Up**:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Fade In Left**:
```tsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
```

**Scale In**:
```tsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
```

**Scroll Reveal**:
```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

**Repeating Animations**:
```tsx
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

#### CSS Animations
- `animate-pulse`: Pulsing effect (Tailwind built-in)
- `animate-spin`: Spinning effect
- Custom animations in CSS files

---

## 🌍 ĐA NGÔN NGỮ (i18n)

### Language System Architecture

**Context Provider**: `LanguageContext.tsx`

**Supported Languages**:
- 🇬🇧 English (`en`) - Default
- 🇻🇳 Tiếng Việt (`vi`)
- 🇨🇳 中文 (`zh`)

### Implementation

#### Context Structure
```typescript
type Language = 'en' | 'vi' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
```

#### Translation Object Structure
```typescript
const translations = {
  en: {
    'nav.about': 'About',
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Technology Solutions Consultant',
    // ... 100+ translation keys
  },
  vi: {
    'nav.about': 'Giới Thiệu',
    'hero.greeting': 'Xin chào, tôi là',
    'hero.title': 'Chuyên Viên Tư Vấn Giải Pháp Công Nghệ',
    // ...
  },
  zh: {
    'nav.about': '关于',
    'hero.greeting': '你好，我是',
    'hero.title': '技术解决方案顾问',
    // ...
  }
};
```

### Translation Key Categories

#### Navigation (`nav.*`)
- `nav.about`, `nav.services`, `nav.techstack`
- `nav.education`, `nav.experience`, `nav.projects`, `nav.contact`

#### Hero Section (`hero.*`)
- `hero.greeting`, `hero.title`, `hero.subtitle`
- `hero.description`, `hero.cta`, `hero.contact`

#### About Section (`about.*`)
- `about.title`, `about.subtitle`, `about.description`
- `about.gpa`, `about.projects`, `about.clients`

#### Services Section (`services.*`)
- `services.title`, `services.subtitle`, `services.cta`
- `services.analysis.*`, `services.software.*`, `services.data.*`
- `services.viewProfile`, `services.availability`

#### Tech Stack (`skills.*`)
- `skills.title`, `skills.technical`, `skills.tools`
- `skills.soft`, `skills.languages`

#### Education (`education.*`)
- `education.title`, `education.degree`, `education.major`
- `education.university`, `education.period`, `education.gpa`

#### Experience (`experience.*`)
- `experience.title`, `experience.subtitle`
- `experience.hk.*`, `experience.intern.*`, `experience.telesale.*`

#### Projects (`projects.*`)
- `projects.title`, `projects.subtitle`, `projects.view`
- `projects.hk.*`, `projects.club.*`, `projects.best.*`

#### Contact (`contact.*`)
- `contact.title`, `contact.subtitle`, `contact.description`
- `contact.name`, `contact.email`, `contact.message`, `contact.send`
- `contact.datacamp`

#### Footer (`footer.*`)
- `footer.rights`, `footer.connect`

### Usage in Components

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
      
      {/* Conditional rendering based on language */}
      {language === 'en' && <EnglishOnlyContent />}
    </div>
  );
}
```

### Language Switcher UI

**Desktop**:
```tsx
<Button onClick={() => setLanguage('en')}>
  <Languages /> EN <ChevronDown />
</Button>
```

**Dropdown Menu**:
- English
- Tiếng Việt
- 中文

**Mobile**: 
- Separate language button in mobile menu
- Full-screen language selection

### Project Content Translation

Projects có structure đặc biệt cho multi-language:

```typescript
{
  slug: 'project-slug',
  image: 'url',
  tags: ['tag1', 'tag2'],
  content: {
    en: {
      title: 'English Title',
      context: 'English context...',
      problem: 'English problem...',
      solution: 'English solution...',
      result: 'English result...',
      cta: 'English CTA'
    },
    vi: { /* Vietnamese content */ },
    zh: { /* Chinese content */ }
  }
}
```

---

## 🚀 BUILD & DEPLOYMENT

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Runs Vite dev server at http://localhost:5173

# Build for production
npm run build
# → Outputs to dist/ folder

# Deploy to GitHub Pages
npm run deploy
# → Runs predeploy (build) + gh-pages deploy
```

### Build Configuration

#### Vite Config (`vite.config.ts`)
```typescript
export default defineConfig({
  base: '/CHK/',              // Base path for GitHub Pages
  plugins: [
    react(),                  // React support
    tailwindcss(),           // Tailwind CSS
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

#### TypeScript Config (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["app/*"]
    }
  }
}
```

### Deployment Process

#### GitHub Pages Setup
1. **Repository**: Deploy to `/CHK/` path
2. **Branch**: Deploy from `gh-pages` branch
3. **Custom Domain**: Optional (currently using default)

#### Build Pipeline
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  "postbuild": "powershell Copy-Item -Path 404.html -Destination dist/404.html -Force"
}
```

**Steps**:
1. Run `npm run build` → Generate production build in `dist/`
2. Copy `404.html` to `dist/` for client-side routing support
3. Deploy `dist/` folder to `gh-pages` branch
4. GitHub Pages serves the site at `username.github.io/CHK/`

#### 404 Handling for SPA

**Purpose**: Handle client-side routing on GitHub Pages

**Technique**: 
- `404.html` redirects to `index.html` with route info
- React Router handles the actual routing
- Preserves deep linking capability

### Build Output

**Folder**: `dist/`

**Contents**:
```
dist/
├── index.html
├── 404.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── profile-[hash].png
│   └── ...
└── google62c62de1f0a6e3fa.html
```

**Optimizations**:
- Code splitting
- Minification
- Tree shaking
- Asset hashing
- Image optimization

### Performance Considerations

**Vite Build Features**:
- Fast HMR (Hot Module Replacement)
- Optimized production build
- Automatic vendor chunk splitting
- CSS code splitting
- Legacy browser support (if configured)

**Bundle Size**:
- Main bundle: ~200KB (gzipped)
- Vendor bundle: ~150KB (React, Router, etc.)
- Styles: ~50KB

---

## 🛠️ HƯỚNG DẪN PHÁT TRIỂN

### Prerequisites

**Required**:
- Node.js 18+ 
- npm hoặc yarn hoặc pnpm
- Git

**Recommended**:
- VS Code
- ESLint extension
- Prettier extension

### Setup Project

```bash
# Clone repository
git clone [repository-url]
cd "CHUNG HIẾN KHANG"

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Development Workflow

#### 1. Thêm Component Mới

**Location**: `app/components/`

```tsx
// app/components/NewComponent.tsx
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export function NewComponent() {
  const { t } = useLanguage();
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <h2>{t('newComponent.title')}</h2>
      {/* Your content */}
    </motion.section>
  );
}
```

#### 2. Thêm Translations

**File**: `app/contexts/LanguageContext.tsx`

```tsx
const translations = {
  en: {
    'newComponent.title': 'English Title',
    'newComponent.description': 'English Description',
  },
  vi: {
    'newComponent.title': 'Tiêu Đề Tiếng Việt',
    'newComponent.description': 'Mô Tả Tiếng Việt',
  },
  zh: {
    'newComponent.title': '中文标题',
    'newComponent.description': '中文描述',
  }
};
```

#### 3. Thêm Route Mới

**File**: `app/App.tsx`

```tsx
<Routes>
  {/* Existing routes */}
  <Route path="/new-page" element={<NewPage />} />
  <Route path="/CHK/new-page" element={<NewPage />} />
</Routes>
```

#### 4. Thêm Project Mới

**File**: `app/data/projects.ts`

```typescript
const newProject = {
  slug: 'new-project-slug',
  image: 'https://images.unsplash.com/...',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  content: {
    en: {
      title: 'English Project Title',
      context: 'Background and context...',
      problem: 'Problem statement...',
      solution: 'Solution approach...',
      result: 'Measurable results...',
      cta: 'Call to action...'
    },
    vi: { /* Vietnamese */ },
    zh: { /* Chinese */ }
  }
};

const projects = [
  // Existing projects
  newProject,
];
```

#### 5. Styling Best Practices

**Use Tailwind Utility Classes**:
```tsx
<div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg">
  {/* Content */}
</div>
```

**Responsive Design**:
```tsx
<div className="text-center lg:text-left">
  <h1 className="text-4xl lg:text-6xl">Title</h1>
</div>
```

**Dark Sections**:
```tsx
<section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950">
  <h2 className="text-white">Title</h2>
  <p className="text-gray-300">Description</p>
</section>
```

**Hover Effects**:
```tsx
<div className="transition-all duration-300 hover:scale-105 hover:shadow-xl">
  {/* Content */}
</div>
```

#### 6. Animation Guidelines

**Section Reveal**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

**Stagger Children**:
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

### Code Organization

#### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `Hero.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Styles: `kebab-case.css` (e.g., `techno-projects.css`)
- Pages: `PascalCase.tsx` (e.g., `ProjectDetail.tsx`)

#### Import Order
1. External dependencies
2. Internal components
3. Contexts and hooks
4. Utils and helpers
5. Types and interfaces
6. Styles and assets

```tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

import { Header } from './components/Header';
import { Button } from './components/ui/button';

import { useLanguage } from './contexts/LanguageContext';

import { cn } from './utils';

import type { ProjectType } from './types';

import './styles/component.css';
```

### Testing

**Manual Testing Checklist**:
- [ ] All pages load correctly
- [ ] Navigation works (both scroll and routing)
- [ ] Language switching works
- [ ] Forms submit correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images load with fallbacks
- [ ] Animations play smoothly
- [ ] Links open in correct target
- [ ] 404 page works
- [ ] SEO meta tags present

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes
git add .
git commit -m "Add new component with translations"

# Push to remote
git push origin feature/new-component

# Create pull request for review

# After merge, deploy
npm run deploy
```

### Common Issues & Solutions

#### Issue 1: Routes not working on GitHub Pages
**Solution**: Ensure `404.html` is copied to `dist/` in postbuild script

#### Issue 2: Images not loading
**Solution**: Use proper import or public folder reference
```tsx
// Import method
import image from '../assets/image.png';
<img src={image} />

// Public folder method (not recommended for Vite)
<img src="/CHK/image.png" />
```

#### Issue 3: Tailwind classes not working
**Solution**: 
- Check `@tailwindcss/vite` plugin is installed
- Restart dev server after config changes
- Check class names for typos

#### Issue 4: Language not persisting
**Solution**: Add localStorage to LanguageContext
```tsx
useEffect(() => {
  const saved = localStorage.getItem('language');
  if (saved) setLanguage(saved as Language);
}, []);

const setLanguageWithPersist = (lang: Language) => {
  setLanguage(lang);
  localStorage.setItem('language', lang);
};
```

### Performance Optimization

**Code Splitting**:
```tsx
import { lazy, Suspense } from 'react';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

<Suspense fallback={<LoadingSpinner />}>
  <ProjectDetail />
</Suspense>
```

**Image Optimization**:
- Use WebP format when possible
- Compress images before adding
- Use responsive images with srcset
- Lazy load images below the fold

**Bundle Size**:
- Use `npm run build` to check bundle size
- Analyze with `vite-bundle-visualizer`
- Remove unused dependencies
- Use tree-shaking friendly imports

---

## 📈 TƯƠNG LAI & ROADMAP

### Planned Features

#### Phase 1: Enhanced Content
- [ ] Blog section
- [ ] More project case studies
- [ ] Testimonials section
- [ ] Resume/CV download
- [ ] Video introductions

#### Phase 2: Interactive Features
- [ ] Contact form backend integration
- [ ] Newsletter subscription
- [ ] Live chat widget
- [ ] Booking/scheduling system
- [ ] Portfolio filtering enhancements

#### Phase 3: Technical Improvements
- [ ] Implement testing (Jest, React Testing Library)
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Improve SEO with structured data
- [ ] Add sitemap generation
- [ ] Implement PWA features
- [ ] Add dark mode toggle

#### Phase 4: Advanced Features
- [ ] Admin dashboard for content management
- [ ] Dynamic project loading from CMS
- [ ] Search functionality
- [ ] Comment system for blog
- [ ] Social media integration
- [ ] Advanced animations and micro-interactions

### Known Issues / Tech Debt
- [ ] Add proper error boundaries
- [ ] Implement loading states for async operations
- [ ] Add form validation library (react-hook-form + zod)
- [ ] Extract hardcoded content to data files
- [ ] Add E2E testing with Playwright
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add proper TypeScript types for all components
- [ ] Optimize bundle size (currently ~400KB total)

---

## 📚 TÀI LIỆU THAM KHẢO

### Thư Viện Chính
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/)

### UI Components
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Primitives
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Material-UI](https://mui.com/) - Material Design

### Animation
- [Motion (Framer Motion)](https://motion.dev/) - Animation library

### Deployment
- [GitHub Pages](https://pages.github.com/) - Hosting
- [gh-pages](https://github.com/tschaub/gh-pages) - Deployment tool

---

## 👤 THÔNG TIN LIÊN HỆ

**Chung Hiến Khang**  
Solutions Consultant & E-Commerce Specialist

- 📧 Email: chunghienkhang@gmail.com
- 💼 LinkedIn: [hien-khang-chung-677105284](https://www.linkedin.com/in/hien-khang-chung-677105284/)
- 🐙 GitHub: [kaycechung](https://github.com/kaycechung)
- 📊 DataCamp: [chunghienkhang](https://www.datacamp.com/portfolio/chunghienkhang)
- 🌐 Website: [GitHub Pages](https://kaycechung.github.io/CHK/)

---

## 📄 LICENSE & ATTRIBUTION

**Project License**: Private

**Third-Party Attributions**:
- UI Components from [shadcn/ui](https://ui.shadcn.com/) under [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- Photos from [Unsplash](https://unsplash.com) under [Unsplash License](https://unsplash.com/license)

---

**Generated**: April 22, 2026  
**Version**: 1.0.0  
**Last Updated**: April 22, 2026

---

*File này là tổng hợp chi tiết về dự án Portfolio Website của Chung Hiến Khang. Tài liệu này giúp bạn hiểu rõ về cấu trúc, công nghệ, và cách thức hoạt động của website.*
