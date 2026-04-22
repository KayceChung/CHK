# 🎯 WEBSITE PORTFOLIO - CHUNG HIẾN KHANG - FULL IMPLEMENTATION PROMPT

> **Prompt hoàn chỉnh, chi tiết, sẵn sàng thực hiện. Copy toàn bộ vào Visual Code hoặc IDE.**

---

## 📖 MỤC LỤC

- [Tổng Quan](#-tổng-quan)
- [CRITICAL: Performance & Data Management](#-critical-performance--data-management)
- [Design & UI/UX](#-design--uiux-requirements)
- [Content & Features](#-content--features-requirements)
- [Functionality & Implementation](#-functionality--implementation)
- [Accessibility (WCAG 2.1 AA)](#-accessibility-wcag-21-aa-mandatory)
- [Testing & QA](#-testing--qa-complete-checklist)
- [Deployment](#-deployment)
- [Timeline & Execution](#-timeline--execution)
- [Success Criteria](#-success-criteria)

---

## 🎯 TỔNG QUAN

**Project:** Portfolio Website - Chung Hiến Khang  
**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion  
**Deployment:** GitHub Pages (base path: `/CHK/`)  
**Languages:** English / Vietnamese / Chinese (EN/VI/ZH)  

**Key Requirements:**
- ✅ Chỉnh chu, hiện đại, chuyên nghiệp
- ✅ Load nhanh (< 3s), smooth animations (60fps)
- ✅ Dữ liệu không mất khi refresh (localStorage)
- ✅ Responsive (Mobile/Tablet/Desktop)
- ✅ Accessible (WCAG 2.1 AA) & SEO optimized

---

---

## 🔴 CRITICAL: PERFORMANCE & DATA MANAGEMENT

### **💾 DATA PERSISTENCE - KHÔNG MẤT DỮ LIỆU**

**Core Principle:** User data NEVER lost. All state persisted locally. Graceful fallbacks.

#### localStorage Implementation

```javascript
// 1. User Preferences (Persist across sessions)
{
  "key": "user_preferences",
  "value": {
    "v": 1,
    "language": "en", // "en" | "vi" | "zh"
    "theme": "light",
    "accessibility": {
      "reducedMotion": false,
      "highContrast": false,
      "largeFonts": false
    },
    "lastUpdated": "2024-04-22T10:30:00Z"
  }
}

// 2. Contact Form Draft (Auto-save)
{
  "key": "contact_form_draft",
  "value": {
    "v": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "",
    "message": "Message content here...",
    "savedAt": "2024-04-22T10:25:00Z"
  }
}

// 3. Session State (Track user journey)
{
  "key": "session_state",
  "value": {
    "v": 1,
    "sessionId": "unique-uuid",
    "startTime": "2024-04-22T10:00:00Z",
    "visitedSections": ["hero", "about", "services"],
    "scrollPosition": 2500,
    "interactions": {
      "clicks": 12,
      "formStarted": false,
      "projectsViewed": ["project-1", "project-2"]
    }
  }
}

// 4. Project Filters (sessionStorage - cleared on tab close)
{
  "key": "projects_filters",
  "value": {
    "v": 1,
    "activeTags": ["AppSheet", "SQL"],
    "sortBy": "date",
    "sortOrder": "desc"
  }
}
```

#### Auto-Save Rules (CRITICAL)

| Data | Trigger | Debounce | Storage | Notes |
|------|---------|----------|---------|-------|
| Language | Immediate | - | localStorage | Save on change |
| Form Draft | On blur | 500ms | localStorage | User can recover |
| Scroll Position | On scroll | 1000ms | sessionStorage | Restore on refresh |
| Filters | Immediate | - | sessionStorage | Clear on tab close |
| Preferences | On change | 300ms | localStorage | Persist forever |

#### Error Handling (MUST IMPLEMENT)

```javascript
// QuotaExceededError - Storage Full
try {
  localStorage.setItem(key, value);
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    // 1. Clear non-essential data (filters, scroll pos)
    // 2. Clear old session data
    // 3. Retry save
    // 4. If still full: Fallback to sessionStorage
    // 5. Show message: "Storage is full, not saved in local storage"
  }
}

// CorruptedData - Invalid JSON
try {
  const data = JSON.parse(localStorage.getItem(key));
} catch (e) {
  // 1. Log error (console only in dev)
  // 2. Reset to default values
  // 3. No user notification (silent fix)
}

// BrowserStorageDisabled - Private mode / No permission
try {
  localStorage.setItem('test', 'test');
} catch (e) {
  // 1. Fall back to memory-only state
  // 2. App still works (no features disabled)
  // 3. Warn in console (dev only)
}
```

#### User Experience

- ✅ "Saving..." indicator (show then fade)
- ✅ No blocking/lag on save
- ✅ Silent auto-save (no notification needed)
- ✅ On form load: "Restore draft?" dialog if data exists
- ✅ After submit: Clear saved draft
- ✅ No page flicker on language/data restore

---

### ⚡ PERFORMANCE TARGETS (CRITICAL)

#### Core Web Vitals - MUST HIT THESE

```
✅ First Contentful Paint (FCP): < 2.0 seconds
✅ Largest Contentful Paint (LCP): < 2.5 seconds
✅ Cumulative Layout Shift (CLS): < 0.1
✅ Lighthouse Score: > 90 (Performance, Accessibility, Best Practices, SEO)
✅ Page Load Time: < 3 seconds
✅ Time to Interactive (TTI): < 3.5 seconds
```

**If not met, FIX BEFORE SHIPPING. Non-negotiable.**

#### Bundle Size Budget

```
JavaScript: < 200KB (gzipped)
CSS: < 50KB (gzipped)
Images: < 2MB total
  ├─ Hero image: < 150KB (WebP)
  ├─ Project images: < 100KB each (WebP)
  └─ Icons: < 50KB (SVG spritesheet)
Fonts: < 100KB (use system fonts)
Total: < 1MB gzipped
```

#### Optimizations - MUST IMPLEMENT ALL

1. **Code Splitting**
   - Routes lazy loaded with Suspense
   - Separate vendor + app bundles
   - Dynamic imports for heavy components

2. **Image Optimization**
   - Use WebP with JPG fallback
   - Responsive images (srcset)
   - Lazy load images below fold
   - Max width: 1920px
   - Compression: < 100KB per image

3. **CSS Optimization**
   - Tailwind purging unused classes
   - Critical CSS inline (above fold)
   - Async load non-critical CSS

4. **JavaScript Optimization**
   - Tree-shaking unused code
   - Minify + gzip
   - Defer non-critical JS
   - Remove console.log in production

5. **Caching Strategy**
   - Browser cache: 1 year for assets
   - HTML: No-cache (always fresh)
   - Service Worker: Cache-first for assets

---

---

## 🎨 DESIGN & UI/UX REQUIREMENTS

### COLOR PALETTE

```
Primary:
- Cyan: #06B6D4 (cyan-500)
- Cyan Light: #22D3EE (cyan-400)
- Blue: #0EA5E9 (blue-500)
- Blue Light: #0284C7 (blue-600)

Accent:
- Purple: #A855F7 (purple-500)
- Pink: #EC4899 (pink-600)

Neutral:
- Dark: #0F172A (slate-950)
- Darker: #020617 (black)
- Light: #F8FAFC (slate-50)
- Gray: #64748B (slate-500)
- Text: #1E293B (slate-800)

WCAG AA Compliance:
- Text on white: min 4.5:1 contrast
- Large text (18pt+): min 3:1 contrast
- UI components: min 3:1 contrast
```

### TYPOGRAPHY

```
Heading 1 (H1): 48px / 60px (hero, page title)
Heading 2 (H2): 36px / 44px (section title)
Heading 3 (H3): 28px / 36px (subsection)
Heading 4 (H4): 22px / 28px (card title)

Body Text: 16px / 1.6 line-height
Body Small: 14px
Mono: System mono (code/technical)

Font Family: System fonts (no Google Fonts unless critical)
Font Weight: 400 (regular), 600 (semibold), 700 (bold)
```

### SPACING SYSTEM

```
Base Unit: 4px

Use: 8px, 12px, 16px, 24px, 32px, 48px, 64px

Examples:
- Button padding: px-6 py-3 (24px × 12px)
- Card padding: p-8 (32px)
- Section gap: gap-8, gap-12
- Margin: m-4, m-6, m-8
```

### ANIMATION SPECS

```
Duration:
- Quick interactions: 300ms (button, hover)
- Section reveals: 600ms (fade in on scroll)
- Page transitions: 300ms (fade/slide)
- Auto-animations: 1-2s (infinite)

Easing: ease-in-out (smooth natural feel)

Avoid:
- > 600ms for user interactions (feels slow)
- Flash animations (jarring)
- Complex animations on mobile (battery drain)

MUST: Respect prefers-reduced-motion
```

### RESPONSIVE LAYOUT STRUCTURE

#### Mobile (< 640px)
```
├─ Single column layout
├─ Hamburger menu (3-line icon)
├─ Full-width content
├─ Stacked buttons (not side-by-side)
├─ Touch targets ≥ 48px
├─ Images: 100% width, optimize file size
└─ Font size: No smaller than 14px
```

#### Tablet (640px - 1024px)
```
├─ 2-column layout (where applicable)
├─ Larger fonts for readability
├─ Hero image visible
├─ Sidebar visible (if applicable)
└─ Touch-friendly spacing
```

#### Desktop (> 1024px)
```
├─ Multi-column layout
├─ Hover effects enabled
├─ Desktop-specific features
├─ 2-3 column grids
└─ Max content width: 1280px (xl)
```

---

## 📝 CONTENT & FEATURES REQUIREMENTS

### HERO SECTION CONTENT

```
Greeting: "Hello, I'm" (fade-in, 16px)
Name: "Chung Hiến Khang" (large, bold, 60px, animated)
Title: "Solutions Consultant & E-Commerce Specialist" (28px, animated)
Subtitle: "Transforming Businesses with Technology & Strategy" (20px, fade-in)
Description: "I help companies optimize operations, scale e-commerce, and solve 
             complex problems with technology. 5+ successful projects across 
             different industries." (max 150 chars)

CTA 1 (Primary):
  ├─ Text: "Schedule Free Consultation"
  ├─ Action: Scroll to contact form
  └─ Style: Cyan gradient button

CTA 2 (Secondary):
  ├─ Text: "View Case Studies"
  ├─ Action: Navigate to /projects
  └─ Style: Transparent border button

Background: Animated grid + glowing orbs + scan lines
Profile Image: Hologram effect, animated border
```

### SERVICES SECTION CONTENT

**Service 1: Business Interpretation**
```
For: Small-medium businesses needing translation
Price Range: $50-100/hour
Availability: 24/7 emergency support
Timeline: Flexible, on-demand

Features:
  ├─ C1-C2 English proficiency
  ├─ Real-time interpretation
  ├─ Cross-cultural communication coaching
  └─ Document translation

CTA: "Get Started"
```

**Service 2: E-Commerce Solutions**
```
For: Online sellers, brands, SMEs
Price Range: $2,000-10,000 per project
Timeline: 4-8 weeks
Deliverables: Strategy, implementation, optimization

Features:
  ├─ Market analysis & strategy
  ├─ Platform optimization (Shopify, WooCommerce, etc.)
  ├─ Sales funnel optimization
  └─ Digital marketing integration

CTA: "Let's Build Together"
```

**Service 3: Technology & Automation**
```
For: Corporations, startups needing automation
Price Range: $1,500-15,000 per project
Timeline: 1-12 weeks
Deliverables: Automated workflows, data systems, custom solutions

Features:
  ├─ No-code app development (AppSheet)
  ├─ Workflow automation (Google Workspace)
  ├─ Data analysis & visualization
  └─ Custom API integration

CTA: "Start Your Project"
```

### CONTACT FORM SPEC

**Form Fields:**
```
1. Full Name
   ├─ Type: Text input
   ├─ Required: Yes
   ├─ Validation: min 2 chars, no special chars
   ├─ Placeholder: "Your full name"
   └─ Error: "Please enter a valid name"

2. Email
   ├─ Type: Email input
   ├─ Required: Yes
   ├─ Validation: Valid email format
   ├─ Placeholder: "your.email@example.com"
   └─ Error: "Please enter a valid email address"

3. Subject (Optional)
   ├─ Type: Text input
   ├─ Required: No
   ├─ Placeholder: "What is this about?"
   ├─ Max length: 100 chars
   └─ Hint: "(Optional)"

4. Message
   ├─ Type: Textarea
   ├─ Required: Yes
   ├─ Validation: min 10 chars
   ├─ Placeholder: "Tell me about your project or inquiry..."
   ├─ Min height: 150px
   ├─ Auto-resize: Yes
   └─ Error: "Message must be at least 10 characters"

5. Subscribe to Newsletter (Optional)
   ├─ Type: Checkbox
   ├─ Label: "Send me updates about new projects & insights"
   └─ Default: Unchecked

Submit Button:
  ├─ Text: "Send Message"
  ├─ Disabled: While form invalid
  ├─ Show loading: While submitting (2-3 seconds)
  └─ Animation: Pulse on hover
```

**Form Behavior:**
```
1. Real-time Validation
   ├─ Validate on blur (not keystroke)
   ├─ Show error message below field
   ├─ Red border on error
   ├─ Clear error when user corrects
   └─ Green checkmark on valid

2. Auto-Save (localStorage)
   ├─ Save on blur
   ├─ Debounce: 500ms
   ├─ Save to: contact_form_draft
   ├─ On form load: Show "Restore draft?" dialog
   └─ After submit: Clear saved draft

3. Submit Handling
   ├─ Disable submit button (prevent double-submit)
   ├─ Show "Sending..." spinner
   ├─ Submit to backend (or web3forms)
   ├─ Wait 2-3 seconds
   ├─ Show success toast: "Thanks! I'll get back soon."
   ├─ Clear form fields
   ├─ Clear localStorage draft
   ├─ Optional: Show "Book a free consultation" link
   └─ Optional: Redirect after 3 seconds

4. Error Handling
   ├─ Network error: Toast "Something went wrong. Please try again."
   ├─ Validation error: Show specific field errors
   ├─ Server error: "We're having trouble. Please email me directly."
   └─ Always: Show helpful message (never "Error 500")

5. Contact Info
   ├─ Email: chunghienkhang@gmail.com (clickable)
   ├─ Response time: "Typically within 24 hours"
   ├─ Available: "Monday - Friday, 9AM - 6PM (UTC+7)"
   ├─ Social links:
   │   ├─ LinkedIn: https://www.linkedin.com/in/hien-khang-chung-677105284/
   │   ├─ GitHub: https://github.com/kaycechung
   │   ├─ DataCamp: https://www.datacamp.com/portfolio/chunghienkhang
   │   └─ Email: chunghienkhang@gmail.com
   └─ Link open same tab (not new)
```

---

## ⚙️ FUNCTIONALITY & IMPLEMENTATION

### PROJECT FILTERING

**Filter Sidebar:**
```
Display: Checkboxes for each tag
├─ AppSheet
├─ SQL
├─ Data Analysis
├─ Process Optimization
├─ Portfolio
├─ Personal Brand
├─ Design
└─ Development

Features:
├─ Multi-select (can select multiple)
├─ AND logic (show projects with ALL selected tags)
├─ Live update (no submit button needed)
├─ Show tag count: "SQL (2)"
├─ Clear filters button
├─ Mobile: Collapse to accordion above grid
└─ Save to sessionStorage

Logic Example:
If tags = [AppSheet, SQL]
  Show projects where: tags.includes(AppSheet) AND tags.includes(SQL)
```

### FORM AUTO-SAVE

**Implementation:**
```javascript
const handleFormChange = (field, value) => {
  // 1. Update React state immediately
  setFormData(prev => ({ ...prev, [field]: value }));
  
  // 2. Debounce save to localStorage (500ms)
  clearTimeout(saveTimeout);
  const timeout = setTimeout(() => {
    const draft = {
      v: 1,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      savedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem('contact_form_draft', JSON.stringify(draft));
      // Show "Saved" indicator (fade out after 1s)
      setSavedIndicator(true);
      setTimeout(() => setSavedIndicator(false), 1000);
    } catch (e) {
      console.error('Failed to save draft', e);
      // Fallback: Use sessionStorage or just memory
    }
  }, 500);
  
  setSaveTimeout(timeout);
};

// On form load
useEffect(() => {
  const saved = localStorage.getItem('contact_form_draft');
  if (saved) {
    const draft = JSON.parse(saved);
    // Show dialog: "Restore draft from [time]?"
    if (confirm('Restore your previous message?')) {
      setFormData(draft);
    } else {
      localStorage.removeItem('contact_form_draft');
    }
  }
}, []);

// On submit success
const handleSubmitSuccess = () => {
  // Clear draft
  localStorage.removeItem('contact_form_draft');
  // Clear form
  setFormData({ name: '', email: '', subject: '', message: '' });
  // Show success message
  showToast('Thanks! I\'ll get back soon.');
};
```

### SCROLL-TO-SECTION

```javascript
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Sticky header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
```

---

## ♿ ACCESSIBILITY (WCAG 2.1 AA) - MANDATORY

### COLOR CONTRAST

**Test with:** WebAIM Contrast Checker

```
✅ WCAG AA Requirements:
├─ Normal text: ≥ 4.5:1 contrast ratio
├─ Large text (18pt+): ≥ 3:1 contrast ratio
├─ UI components: ≥ 3:1 contrast ratio
├─ Graphical elements: ≥ 3:1 contrast ratio
└─ Never use color alone (always add icon/text)

Example (FAIL):
├─ Error: Red background only (no text)
│
Example (PASS):
├─ Error: Red background + error icon + red text "Error: ..."
```

### KEYBOARD NAVIGATION

```
✅ WCAG AA Requirements:
├─ All interactive elements: Tab, Enter, Space
├─ Tab order: Logical (top→bottom, left→right)
├─ No keyboard trap (can always escape)
├─ Shift+Tab: Reverse navigation works
├─ Skip navigation: Link to main content
├─ Focus visible: Outline ≥ 3px
└─ Focus indicator color: Cyan or high contrast

Implementation:
├─ Button: <button> element (not <div onclick>)
├─ Link: <a href=""> (not <button> with style)
├─ Form label: <label htmlFor="id">
├─ Fieldset: For radio/checkbox groups
├─ Focus-visible: Custom outline with 2px offset
└─ Tab index: Only use if necessary (semantic HTML preferred)
```

### SEMANTIC HTML

```
✅ Use semantic HTML (not <div> for everything)

Navigation:
├─ <nav> for navigation regions
├─ <header> for page header
├─ <footer> for page footer
└─ <main> for main content

Content:
├─ <article> for articles/blog posts
├─ <section> for sections with heading
├─ <aside> for sidebar content
└─ <figure>/<figcaption> for images with captions

Forms:
├─ <form> for forms
├─ <label htmlFor="id"> for field labels
├─ <input>, <textarea>, <select> for inputs
├─ <button type="button"> for buttons
└─ <fieldset>/<legend> for grouped inputs

Lists:
├─ <ul> for unordered lists
├─ <ol> for ordered lists
├─ <li> for list items
└─ NOT: <div> as list items
```

### PREFERS-REDUCED-MOTION

```css
/* Respect user's motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```javascript
// In JavaScript (if needed)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable animations
  // Use instant transitions instead
}
```

---

## 🧪 TESTING & QA - COMPLETE CHECKLIST

### PHASE 1: FUNCTIONALITY TESTING

**Navigation & Routing**
- [ ] All internal links work (no 404s)
- [ ] Smooth scroll navigation works
- [ ] Header nav items link to correct sections
- [ ] Mobile hamburger menu opens/closes
- [ ] Deep linking works (direct URLs load correctly)
- [ ] Browser back button works
- [ ] Page transitions are smooth

**Language Switching**
- [ ] All 3 languages load correctly
- [ ] Language persists on page refresh
- [ ] No untranslated content
- [ ] Dropdowns/modals translate correctly
- [ ] Numbers/dates format by language (if applicable)
- [ ] Switching languages updates entire page

**Contact Form**
- [ ] Form validation works in real-time
- [ ] Submit button disabled until form valid
- [ ] Form submission works
- [ ] Success message appears
- [ ] Data saves to localStorage (draft)
- [ ] Form clears after success
- [ ] Error messages show for invalid fields

**Project Filtering**
- [ ] Single tag filter works
- [ ] Multi-tag filtering works (AND logic)
- [ ] Clear filters button works
- [ ] Project count updates correctly
- [ ] "No projects found" shows when appropriate
- [ ] Filter state persists (sessionStorage)
- [ ] Mobile accordion filter works

**Images**
- [ ] All images load correctly
- [ ] Responsive images load appropriate size
- [ ] Lazy loading works (images below fold)
- [ ] Fallback image shows if broken
- [ ] No console errors for missing images

---

### PHASE 2: RESPONSIVE DESIGN TESTING

**Mobile (< 640px)**
- [ ] Single column layout
- [ ] Text readable (min 16px)
- [ ] Touch targets ≥ 48px
- [ ] Hamburger menu works
- [ ] Forms stack vertically
- [ ] Images scale properly
- [ ] No horizontal scroll
- [ ] Footer visible without scroll

**Tablet (640px - 1024px)**
- [ ] 2-column layout works
- [ ] Sidebar visible (if applicable)
- [ ] Readable text size
- [ ] Form fields touch-friendly
- [ ] Navigation visible
- [ ] Images display properly

**Desktop (> 1024px)**
- [ ] Multi-column layout correct
- [ ] Hover effects work
- [ ] Full layout visible
- [ ] Max content width respected
- [ ] Spacing looks balanced

**Orientation Changes**
- [ ] Portrait to landscape: Layout adapts
- [ ] Landscape to portrait: Layout adapts
- [ ] No content hidden
- [ ] Text still readable

**Device Testing**
- [ ] iPhone 12/13/14/15
- [ ] iPhone SE (small screen)
- [ ] iPad (tablet)
- [ ] Samsung Galaxy S21/S22
- [ ] Pixel 6/7
- [ ] Desktop (1920×1080, 2560×1440)

---

### PHASE 3: PERFORMANCE TESTING

**Page Load Time**
- [ ] Home page loads < 3 seconds
- [ ] Projects page loads < 3 seconds
- [ ] Project detail loads < 3 seconds
- [ ] Lighthouse FCP: < 2.0s
- [ ] Lighthouse LCP: < 2.5s
- [ ] Lighthouse CLS: < 0.1

**Lighthouse Audit**
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90
- [ ] All greens (no yellows)

**Images & Assets**
- [ ] Images load without placeholder jumps
- [ ] Lazy load works correctly
- [ ] WebP loads first, JPG fallback works
- [ ] Image sizes optimized (< 100KB each)
- [ ] No oversized images

**Animations**
- [ ] Smooth 60fps (no janky)
- [ ] No layout shifts during animation
- [ ] CSS animations (not JS-based)
- [ ] Mobile: Heavy animations disabled

**Network Throttling**
- [ ] Works on 4G (slow network)
- [ ] Form still usable (not blocked by slow load)
- [ ] Images appear eventually (not missing forever)
- [ ] Fallbacks work if network fails

---

### PHASE 4: ACCESSIBILITY TESTING

**Keyboard Navigation**
- [ ] Tab through all interactive elements
- [ ] Shift+Tab (reverse) works
- [ ] No keyboard trap
- [ ] Focus indicators visible (3px+ outline)
- [ ] Focus order logical (top→bottom)
- [ ] Enter/Space triggers buttons
- [ ] Escape closes modals

**Screen Reader Testing** (NVDA/JAWS/VoiceOver)
- [ ] Page title announced
- [ ] Headings announced with level (h1, h2, etc.)
- [ ] Navigation links read correctly
- [ ] Form labels associated & announced
- [ ] Error messages announced
- [ ] Success messages announced
- [ ] Images have descriptive alt text
- [ ] Buttons have clear purpose

**Color Contrast** (WebAIM Contrast Checker)
- [ ] Text: ≥ 4.5:1 contrast
- [ ] Large text: ≥ 3:1 contrast
- [ ] UI components: ≥ 3:1 contrast
- [ ] No color-only information

**Zoom & Resize**
- [ ] Page readable at 200% zoom
- [ ] No horizontal scroll at 200% zoom
- [ ] Text size changes don't break layout
- [ ] Mobile zoom works (pinch to zoom)

**High Contrast Mode**
- [ ] Text still readable
- [ ] Focus indicators still visible
- [ ] No color-only information
- [ ] Icons have text labels

**Form Accessibility**
- [ ] Labels associated with inputs
- [ ] Required fields marked (*)
- [ ] Error messages linked to fields
- [ ] Placeholder not substitute for label
- [ ] Form validation clear

---

### PHASE 5: CROSS-BROWSER TESTING

**Desktop Browsers**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile Browsers**
- [ ] Mobile Safari (iOS)
- [ ] Chrome (Android)
- [ ] Firefox (Android)

**Browser Features**
- [ ] CSS Grid/Flexbox
- [ ] CSS Custom Properties
- [ ] Local Storage
- [ ] Intersection Observer
- [ ] Lazy loading attribute

---

### PHASE 6: FINAL SMOKE TEST (Pre-Deployment)

**Critical Path**
- [ ] Home page loads without errors
- [ ] All 3 languages load
- [ ] Navigation works
- [ ] Contact form works
- [ ] Project filtering works
- [ ] No console errors
- [ ] Lighthouse > 90 (all)

**Visual Check**
- [ ] Colors correct
- [ ] Typography correct
- [ ] Spacing balanced
- [ ] Animations smooth
- [ ] No broken layouts
- [ ] No missing images

**Functional Check**
- [ ] All buttons clickable
- [ ] All links working
- [ ] Forms submit
- [ ] Data persists (localStorage)
- [ ] Mobile responsive

**Performance Check**
- [ ] Page load < 3s
- [ ] 60fps animations
- [ ] No console warnings
- [ ] No memory leaks

---

## 🚀 DEPLOYMENT

### PRE-DEPLOYMENT CHECKLIST

**Code Quality**
- [ ] No TypeScript errors: `npm run build` succeeds
- [ ] No console.log statements
- [ ] No hardcoded API keys
- [ ] No commented-out code
- [ ] Code peer-reviewed

**Performance**
- [ ] Lighthouse > 90 (all categories)
- [ ] Bundle size within budget
- [ ] Images optimized
- [ ] No unused CSS/JS

**Functionality**
- [ ] All tests passing
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] No console errors

**Accessibility**
- [ ] Lighthouse accessibility > 90
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation works
- [ ] Color contrast ≥ 4.5:1
- [ ] Focus indicators visible

**SEO**
- [ ] Meta tags present
- [ ] OG tags for social share
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Canonical tags present

**Security**
- [ ] HTTPS enabled
- [ ] No sensitive data in code
- [ ] npm audit clean
- [ ] No vulnerabilities

---

### DEPLOYMENT PROCESS

**Step 1: Build**
```bash
npm run build
# Generates /dist folder with optimized files
```

**Step 2: Verify Build**
```bash
# Check dist/ folder contents
# Check file sizes
# Run Lighthouse on dist/ build
```

**Step 3: Copy 404.html**
```bash
# Copy 404.html to dist/ (for SPA routing on GitHub Pages)
# PostBuild script should do this automatically
```

**Step 4: Deploy to GitHub Pages**
```bash
npm run deploy
# Deploys dist/ to gh-pages branch
# GitHub Pages automatically serves it
```

**Step 5: Verify Live Site**
```
1. Open https://kaycechung.github.io/CHK/
2. Check all pages load
3. Test all functionality
4. Verify no console errors
5. Check performance metrics
```

---

### POST-DEPLOYMENT VERIFICATION

**Immediately (Hour 0-1)**
- [ ] Site loads at live URL
- [ ] All pages accessible
- [ ] Forms work
- [ ] No console errors
- [ ] Mobile responsive

**First 6 Hours**
- [ ] Monitor error tracking
- [ ] Check analytics firing
- [ ] Verify all assets loading
- [ ] Check performance metrics

**First 24 Hours**
- [ ] Review user feedback
- [ ] Monitor error logs
- [ ] Check traffic metrics
- [ ] Verify search indexing

---

### ROLLBACK PLAN

If critical issue found:
```bash
1. Identify issue scope
2. Fix code locally
3. Run: npm run build
4. Run: npm run deploy (redeploy fixed version)
5. Verify: Site working
6. Document issue
7. Review: Prevent future issues
```

---

## 📅 TIMELINE & EXECUTION

### WEEK 1-2: FOUNDATION (40 hours)

**Tasks:**
1. Project setup & dependencies
2. Design system (colors, typography, spacing)
3. Responsive grid/layout foundation
4. Header & Footer components
5. Home page structure

**Deliverables:**
- Project structure complete
- Design system documented
- Header navigation working
- Mobile responsive foundation

**Verification:**
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Header nav works

---

### WEEK 3-4: CONTENT & SECTIONS (40 hours)

**Tasks:**
1. Hero section + animations
2. About section
3. Services section (3 cards)
4. Tech Stack section
5. Education & Experience sections
6. Footer with links
7. Smooth scroll navigation

**Deliverables:**
- Full home page complete
- All sections styled
- Smooth scroll working
- Mobile responsive

**Verification:**
- [ ] All sections visible
- [ ] Animations smooth
- [ ] Responsive on all devices
- [ ] No layout shifts

---

### WEEK 5-6: FEATURES & FORMS (40 hours)

**Tasks:**
1. Projects page (listing)
2. Project filtering (sidebar + logic)
3. Project cards
4. Project detail page
5. Contact form + validation
6. Form success/error handling
7. Toast notifications

**Deliverables:**
- Projects page functional
- Filtering works
- Contact form submits
- Success messages show

**Verification:**
- [ ] Filtering works
- [ ] Form validation works
- [ ] Form submits without errors
- [ ] Mobile responsive

---

### WEEK 7-8: POLISH & OPTIMIZATION (40 hours)

**Tasks:**
1. i18n implementation (EN/VI/ZH)
2. Language persistence (localStorage)
3. Form auto-save (localStorage)
4. Framer Motion animations
5. Image optimization
6. Code splitting
7. Performance optimization
8. Accessibility audit & fixes
9. Remove console logs
10. Meta tags & SEO

**Deliverables:**
- Multi-language support
- Form data saved locally
- Smooth animations
- Optimized images
- WCAG 2.1 AA compliant
- Lighthouse > 90

**Verification:**
- [ ] All 3 languages work
- [ ] Form data persists
- [ ] Accessibility audit pass
- [ ] Lighthouse > 90 all scores
- [ ] Page load < 3s

---

### WEEK 9: TESTING & DEPLOYMENT (40 hours)

**Tasks:**
1. Cross-browser testing
2. Mobile device testing
3. Accessibility full audit
4. Performance testing
5. SEO optimization
6. Analytics setup
7. 404 page testing
8. Pre-deployment checklist
9. GitHub Pages deployment
10. Post-deployment verification
11. Monitoring setup

**Deliverables:**
- Site live on GitHub Pages
- Analytics tracking active
- Error monitoring active
- Monitoring dashboard setup

**Verification:**
- [ ] All browsers tested
- [ ] All devices tested
- [ ] No console errors
- [ ] Lighthouse > 90
- [ ] All tests passing

---

## ✅ SUCCESS CRITERIA

### FINAL SUCCESS - LAUNCH READY

**Essential (Blockers)**
```
□ Zero console errors on production
□ Lighthouse > 90 (Performance, Accessibility, Best Practices, SEO)
□ Mobile responsive (all breakpoints work)
□ All CTAs functional
□ Contact form submits successfully
□ Forms don't lose data (localStorage works)
□ Language switching works (EN/VI/ZH)
□ No broken links/images
□ HTTPS enabled
□ Accessibility score > 90
```

**Important**
```
□ Load time < 3 seconds
□ All animations smooth (60fps)
□ Keyboard navigation fully works
□ Screen reader compatible
□ SEO tags all present
□ Google Search Console setup
□ Google Analytics tracking
□ Custom 404 page works
□ Sitemap present
```

**Nice to Have**
```
□ PWA features (optional)
□ Dark mode (optional)
□ Blog section (optional)
□ Advanced animations (optional)
□ A/B testing (optional)
```

---

---

# 🚀 READY TO START?

**Next Steps:**

1. **Copy this entire prompt** into your IDE/code editor
2. **Read the CRITICAL section first** (Performance & Data Management)
3. **Follow the timeline** (Week 1-2 → Week 9)
4. **Test against each phase's verification checklist**
5. **Deploy when all FINAL CHECKLIST items are ✓**

---

**Version:** 1.0  
**Last Updated:** April 22, 2026  
**Status:** Ready for Implementation

**Good luck! 🚀**
