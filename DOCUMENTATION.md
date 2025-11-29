# LiveHindustan Clone - Complete Project Documentation

## Table of Contents

1. [Part A - Design Document](#part-a---design-document)
2. [Part B - Code Explanation](#part-b---code-explanation)
3. [Part C - Testing & Edge Cases](#part-c---testing--edge-cases)
4. [Part D - AI Use & Reflection](#part-d---ai-use--reflection)

---

# Part A - Design Document

## 1. Wireframe / Layout Sketch

```
┌──────────────────────────────────────────────────────────────────────────┐
│                              HEADER                                       │
│  ☰  [हि] हिन्दुस्तान    | फोटो | वीडियो | शहर चुनें | ई-पेपर | [🔍]     │
├──────────────────────────────────────────────────────────────────────────┤
│  होम | राज्य | देश | क्रिकेट | लाइव स्कोर | मनोरंजन | बिजनेस | ...  → │
├──────────────────────────────────────────────────────────────────────────┤
│                         [ADVERTISEMENT BANNER]                            │
├────────────────────────────────────────────┬─────────────────────────────┤
│                                            │                             │
│           HERO SECTION                     │     SIDE STORIES            │
│    ┌──────────────────────────┐           │  ┌───┐ Title           Time │
│    │                          │           │  ├───┤ Title           Time │
│    │     Main Featured        │           │  ├───┤ Title           Time │
│    │         Image            │           │  └───┘ Title           Time │
│    │                          │           │                             │
│    │  [राष्ट्रीय]              │           │                             │
│    │  Main Headline           │           │                             │
│    └──────────────────────────┘           │                             │
├────────────────────────────────────────────┴─────────────────────────────┤
│  [Filter Chips: सबसे पहले | LIVE | बड़ी खबर | राजनीति | क्राइम | ...]   │
├──────────────────────────────────────────────┬───────────────────────────┤
│                                              │                           │
│         MAIN CONTENT (2/3)                   │    SIDEBAR (1/3)          │
│  ┌──────────────────────────────────────┐   │  ┌─────────────────────┐  │
│  │ CATEGORY SECTION: देश               │   │  │ ट्रेंडिंग न्यूज़    │  │
│  │  ┌────────────┐  ┌─────────────────┐ │   │  │ 1. Article Title    │  │
│  │  │            │  │ ताज़ा खबरें    │ │   │  │ 2. Article Title    │  │
│  │  │   MAIN     │  │ ┌───┐ Title    │ │   │  │ 3. Article Title    │  │
│  │  │   CARD     │  │ ├───┤ Title    │ │   │  │ 4. Article Title    │  │
│  │  │            │  │ ├───┤ Title    │ │   │  │ 5. Article Title    │  │
│  │  │            │  │ ├───┤ Title    │ │   │  └─────────────────────┘  │
│  │  └────────────┘  │ └───┘ Title    │ │   │                           │
│  │  ┌─────┐ ┌─────┐ └─────────────────┘ │   │  ┌─────────────────────┐  │
│  │  │     │ │     │ (2 bottom cards)    │   │  │   STOCK WIDGET      │  │
│  │  └─────┘ └─────┘                     │   │  │   ट्रेडिंग स्टॉक    │  │
│  └──────────────────────────────────────┘   │  │   Stock prices...   │  │
│                                              │  └─────────────────────┘  │
│  ┌──────────────────────────────────────┐   │                           │
│  │ CATEGORY SECTION: खेल                │   │  ┌─────────────────────┐  │
│  │ (Same layout as above)               │   │  │   HOROSCOPE MINI    │  │
│  └──────────────────────────────────────┘   │  │   राशिफल            │  │
│                                              │  │   ♈ ♉ ♊ ♋          │  │
│  ┌──────────────────────────────────────┐   │  │   ♌ ♍ ♎ ♏          │  │
│  │ CATEGORY SECTION: मनोरंजन            │   │  │   ♐ ♑ ♒ ♓          │  │
│  │ (Same layout as above)               │   │  └─────────────────────┘  │
│  └──────────────────────────────────────┘   │                           │
│                                              │  ┌─────────────────────┐  │
│  ┌──────────────────────────────────────┐   │  │   ई-पेपर            │  │
│  │ HOROSCOPE SECTION                    │   │  │   Subscribe CTA     │  │
│  │ आज का राशिफल पढ़ने के लिए राशि चुनें │   │  └─────────────────────┘  │
│  │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │   │                           │
│  │ │ ♈ │ │ ♉ │ │ ♊ │ │ ♋ │ │ ♌ │ │ ♍ │ │   │                           │
│  │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ │   │                           │
│  └──────────────────────────────────────┘   │                           │
│                                              │                           │
│  ┌──────────────────────────────────────┐   │                           │
│  │ WEB STORIES SECTION                  │   │                           │
│  │ [Tab: सभी | मनोरंजन | ट्रेंडिंग |...] │   │                           │
│  │ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐  │   │                           │
│  │ │    │ │    │ │    │ │    │ │    │  │   │                           │
│  │ │9:16│ │9:16│ │9:16│ │9:16│ │9:16│  │   │                           │
│  │ │    │ │    │ │    │ │    │ │    │  │   │                           │
│  │ └────┘ └────┘ └────┘ └────┘ └────┘  │   │                           │
│  └──────────────────────────────────────┘   │                           │
├──────────────────────────────────────────────┴───────────────────────────┤
│                              FOOTER                                       │
│   About | Contact | Privacy Policy | Terms                               │
│   Copyright © 2025 Hindustan                                             │
└──────────────────────────────────────────────────────────────────────────┘
```

## 2. Screenshots - Actual Implementation

Below are screenshots from different views of the implemented LiveHindustan clone:

### Full Page Layout

The complete page layout showing header, hero section, category sections, and sidebar.

![Full Layout](./screenshots/layout.png)

### Hero Section

The main featured story with large image, headline, and side stories list.

![Hero Section](./screenshots/hero.png)

### Breaking News Section

Horizontal scrolling breaking news ticker with latest headlines.

![Breaking News](./screenshots/breaking-news.png)

### More News Section

Grid layout for additional news articles with cards.

![More News](./screenshots/more-news.png)

---

## 3. Layout Decisions

### Column Structure: 3-Column Grid System

| Element              | Desktop                   | Tablet     | Mobile     |
| -------------------- | ------------------------- | ---------- | ---------- |
| **Main Content**     | 2/3 width (lg:col-span-2) | Full width | Full width |
| **Sidebar**          | 1/3 width (lg:col-span-1) | Full width | Full width |
| **Category Section** | 3:2 ratio (main:side)     | 1:1        | Stacked    |

#### Why This Layout?

1. **2/3 + 1/3 Split**:

   - Follows the LiveHindustan original design
   - Main content gets visual priority (F-pattern reading)
   - Sidebar provides supplementary info without overwhelming

2. **Category Section (1 Main + 5 Side + 2 Bottom)**:

   - **Main Card (Left - 3 cols)**: Draws attention to featured story
   - **Side List (Right - 2 cols)**: Quick scannable headlines with thumbnails
   - **Bottom Row (2 cards)**: Additional stories without cluttering
   - Uses `justify-between` to evenly distribute side articles vertically

3. **Highlighting Top Stories**:

   - Red category badge on main image
   - Larger image with gradient overlay
   - Bold typography with red accent colors
   - Time/date stamps for freshness

4. **Mobile-First Responsive**:
   ```
   Mobile (< 768px):  Single column, stacked layout
   Tablet (768-1024): 2 columns for cards, sidebar below
   Desktop (> 1024):  Full 3-column layout
   ```

## 4. Data-Fetching Strategy

### Current Implementation: Static JSON + Client-Side Fetching

```javascript
// Strategy 1: Static Import (Used for homepage)
import articles from "../data/articles.json";

// Strategy 2: API Route for Dynamic Data
// app/api/news/route.js - Proxy to NewsAPI
export async function GET() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?...`);
  return Response.json(data);
}

// Strategy 3: Client-Side Fetching with Loading States
const ClientArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news").then(...);
  }, []);
};
```

### Why This Approach?

| Method                | Pros                                    | Cons                  | When to Use              |
| --------------------- | --------------------------------------- | --------------------- | ------------------------ |
| **Static JSON**       | Fast, no network latency, works offline | Stale data            | Development, fallback    |
| **API Route (Proxy)** | Hides API keys, CORS handling           | Server dependency     | Production with real API |
| **Client-Side Fetch** | Dynamic updates, user interactions      | Loading states needed | Real-time sections       |

### Tradeoffs Considered:

1. **SSR vs CSR**:

   - Chose **hybrid**: Static shell with client-side dynamic sections
   - Better SEO (JSON-LD schema included)
   - Faster initial paint

2. **API Proxy Pattern**:

   - NewsAPI doesn't allow client-side calls (CORS)
   - API key stays secure on server
   - Can add caching layer later

3. **Fallback Data**:
   - 20 mock articles in `articles.json`
   - Graceful degradation if API fails
   - Hindi content matching LiveHindustan

---

# Part B - Code Explanation

## 1. Component Architecture

```
components/
├── Nav.js              # Main header with logo, categories, search
├── Hero.js             # Featured story with side stories list
├── Card.js             # Reusable article card (3 variants)
├── CategorySection.js  # Section with main + side + bottom layout
├── FilterChips.js      # Horizontal scrolling filter tags
├── Sidebar.js          # Trending, stocks, horoscope widgets
├── Horoscope.js        # Full horoscope section with zodiac
├── StockWidget.js      # Live stock ticker widget
├── WebStories.js       # Instagram-style web stories
├── SkeletonCard.js     # Loading placeholder
├── ClientArticles.js   # Dynamic article fetching
├── Footer.js           # Site footer
└── Layout.js           # Page wrapper (deprecated - using App Router)
```

### Component Details:

#### 1. **Nav.js** (Navigation Header)

```javascript
// Key Features:
- Sticky header with shadow
- Hamburger menu for mobile
- Hindi logo "हि हिन्दुस्तान"
- Horizontal scrolling category tabs with arrows
- Quick links: फोटो, वीडियो, शहर चुनें, ई-पेपर, साइन इन
- Search input with rounded design
```

#### 2. **Hero.js** (Featured Section)

```javascript
// Props: { article, sideArticles }
// Layout: 2/3 main story + 1/3 side list
// Features:
- Full-width image with gradient overlay
- Red category badge
- Side articles with thumbnails and timestamps
```

#### 3. **Card.js** (Article Cards)

```javascript
// Variants: "default" | "horizontal" | "small"
// Default: Full card with image, title, summary, date
// Horizontal: Thumbnail + title side by side
// Small: Compact image + title only

// Fallback handling:
const img = article.image || "/placeholder.svg";
```

#### 4. **CategorySection.js** (Category Layout)

```javascript
// Layout: lg:grid-cols-5
// - Main article: lg:col-span-3 (60%)
// - Side list: lg:col-span-2 (40%) with justify-between
// - Bottom row: 2 cards in separate grid

// Key Code:
<div className="lg:col-span-2 flex flex-col justify-between">
  {sideArticles.map((a) => (...))}
</div>
```

#### 5. **Sidebar.js** (Right Sidebar)

```javascript
// Widgets included:
1. Trending News (numbered list)
2. Stock Widget (live prices)
3. Mini Horoscope (12 zodiac signs grid)
4. Advertisement placeholder
5. E-Paper CTA button
```

#### 6. **Horoscope.js** (Zodiac Section)

```javascript
// Data:
const zodiacSigns = [
  { name: "मेष", nameEn: "Aries", icon: "♈", dates: "..." },
  // ... 12 signs
];

// Layout: 6-column grid for first row, 4-column for mini widget
```

#### 7. **WebStories.js** (Stories Carousel)

```javascript
// Features:
- Category tabs (सभी वेब स्टोरी, मनोरंजन, etc.)
- 9:16 aspect ratio cards (Instagram style)
- Horizontal scroll with arrows
- Gradient overlay with title
- Play icon on hover
```

## 2. Data Model

### Article Object Schema:

```typescript
interface Article {
  id: string; // Unique identifier "1", "2", etc.
  title: string; // Hindi headline
  summary: string; // Short description (2-3 lines)
  image: string; // Image URL (picsum.photos or real)
  publishedAt: string; // ISO 8601 timestamp
  content: string; // Full article body
  source: string; // Source label (राष्ट्रीय, खेल, etc.)
  category: string; // Category (देश, मनोरंजन, खेल, बिज़नेस)
}
```

### Sample Article:

```json
{
  "id": "1",
  "title": "प्रधानमंत्री ने किसानों के लिए नई योजना का ऐलान किया",
  "summary": "प्रधानमंत्री ने आज एक नई योजना की घोषणा की जो देश भर के किसानों को लाभ पहुंचाएगी।",
  "image": "https://picsum.photos/seed/news1/800/500",
  "publishedAt": "2025-11-28T09:30:00Z",
  "content": "Full article content here...",
  "source": "राष्ट्रीय",
  "category": "देश"
}
```

### Category Distribution:

- **देश (National)**: 5 articles
- **मनोरंजन (Entertainment)**: 6 articles
- **खेल (Sports)**: 6 articles
- **बिज़नेस (Business)**: 3 articles

## 3. Challenges Faced & Solutions

### Challenge 1: Pages vs App Router Conflict

**Problem**: Next.js threw error when both `pages/` and `app/` directories existed.

```
Conflicting app and page file was found, please remove one:
  pages/index.js
  app/page.js
```

**Solution**: Removed `pages/` directory completely, migrated to App Router.

### Challenge 2: Image Domain Configuration

**Problem**: External images from `picsum.photos` blocked by Next.js.

```
Error: Invalid src prop on `next/image`, hostname not configured
```

**Solution**: Added domain to `next.config.js`:

```javascript
images: {
  domains: ["picsum.photos", "via.placeholder.com"],
}
```

### Challenge 3: Hindi Date Formatting

**Problem**: Displaying dates in Hindi locale format.
**Solution**: Used `toLocaleDateString` with `hi-IN` locale:

```javascript
new Date(publishedAt).toLocaleDateString("hi-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
```

### Challenge 4: Horizontal Scroll Without Visible Scrollbar

**Problem**: Category tabs needed horizontal scroll but scrollbar looked ugly.
**Solution**: Added custom Tailwind utility:

```css
/* globals.css */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

### Challenge 5: Matching LiveHindustan Layout Exactly

**Problem**: Side articles had uneven spacing, didn't fill height.
**Solution**: Used Flexbox with `justify-between`:

```javascript
<div className="flex flex-col justify-between h-full">
  {sideArticles.map(...)}
</div>
```

## 4. Potential Improvements (Given More Time)

1. **Real-Time Updates**: WebSocket for breaking news
2. **Search Functionality**: Full-text search with Algolia/Elasticsearch
3. **User Authentication**: Login for personalized news feed
4. **Dark Mode**: Theme toggle with system preference detection
5. **PWA Support**: Offline reading, push notifications
6. **Infinite Scroll**: Load more articles on scroll
7. **Comments System**: User engagement features
8. **Share Functionality**: Social media sharing buttons
9. **Reading Progress**: Progress bar for long articles
10. **Bookmark Feature**: Save articles for later

---

# Part C - Testing & Edge Cases

## 1. Test Cases Overview

### File: `__tests__/ClientArticles.test.js`

```javascript
test("shows skeletons while loading and then renders articles", async () => {
  const mock = [
    {
      id: "t1",
      title: "Test article",
      summary: "sum",
      image: null, // Testing missing image
      publishedAt: new Date().toISOString(),
      content: "c",
    },
  ];
  global.fetch.mockResolvedValueOnce({ json: async () => mock });

  render(<ClientArticles />);

  // Verify loading state
  expect(document.querySelectorAll(".animate-pulse").length).toBeGreaterThan(0);

  // Verify content appears
  await waitFor(() =>
    expect(screen.getByText("Test article")).toBeInTheDocument()
  );
});
```

## 2. Edge Case Handling

### Case 1: Article Without Image

**Scenario**: API returns article with `image: null` or missing image field.

**Implementation**:

```javascript
// Card.js
const img = article.image || "/placeholder.svg";

// Hero.js
<Image
  src={article.image || "/placeholder.svg"}
  alt={article.title}
  ...
/>
```

**Visual Result**: Falls back to a placeholder image, no broken image icons.

### Case 2: API Returns No Articles

**Scenario**: Empty articles array from API or data source.

**Implementation**:

```javascript
// CategorySection.js
if (!articles || articles.length === 0) return null;

// Home page (page.js)
{
  top ? (
    <Hero article={top} sideArticles={sideArticles} />
  ) : (
    <div className="text-center py-12 bg-white rounded-lg">
      <p className="text-gray-500">कोई खबर उपलब्ध नहीं है।</p>
    </div>
  );
}
```

**Visual Result**: Shows "कोई खबर उपलब्ध नहीं है" (No news available) message.

### Case 3: Long Article Titles

**Scenario**: Extremely long headlines that could break layout.

**Implementation**:

```javascript
// Using Tailwind's line-clamp utility
<h3 className="line-clamp-2 font-bold">{article.title}</h3>

// CSS behavior:
// - Truncates text after 2 lines
// - Adds ellipsis (...)
// - Prevents layout overflow
```

**Visual Result**: Text truncated with "..." after 2 lines.

### Case 4: Loading State (Data Fetching)

**Scenario**: User sees loading state while data is being fetched.

**Implementation**:

```javascript
// SkeletonCard.js - Loading placeholder
export default function SkeletonCard() {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-3 bg-gray-200 rounded w-full mb-2" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
}

// ClientArticles.js - Using skeleton while loading
{loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : (
  // Render actual articles
)}
```

**Visual Result**: Animated gray placeholder cards during loading.

### Case 5: API Fetch Error

**Scenario**: Network error or API returns error response.

**Implementation**:

```javascript
// ClientArticles.js
const [error, setError] = useState(null);

useEffect(() => {
  fetch("/api/news")
    .then((res) => res.json())
    .then((data) => setArticles(data))
    .catch((err) => {
      console.error("Failed to fetch:", err);
      setError("समाचार लोड करने में विफल। कृपया पुनः प्रयास करें।");
    })
    .finally(() => setLoading(false));
}, []);

// Render error state
{
  error && (
    <div className="text-center py-8 bg-red-50 rounded-lg">
      <p className="text-red-600">{error}</p>
      <button onClick={refetch} className="mt-2 text-blue-600">
        पुनः प्रयास करें
      </button>
    </div>
  );
}
```

### Case 6: Invalid Date Format

**Scenario**: `publishedAt` field has invalid or missing date.

**Implementation**:

```javascript
// Safe date formatting
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "अभी";
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "short",
    });
  } catch {
    return "अभी"; // Fallback: "Just now"
  }
};
```

## 3. Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test ClientArticles.test.js
```

---

# Part D - AI Use & Reflection

## 1. Parts Done Using AI (GitHub Copilot)

### A. Component Boilerplate Generation

**Used AI For**:

- Initial component structure and imports
- JSX skeleton with Tailwind classes
- Common patterns (Card variants, Sidebar widgets)

**Example AI-Generated**:

```javascript
// AI generated the base structure
export default function Card({ article, variant = "default" }) {
  const img = article.image || "/placeholder.svg";

  if (variant === "horizontal") {
    return (/* JSX */);
  }
  // ...
}
```

### B. Styling & Tailwind Classes

**Used AI For**:

- Complex Tailwind class combinations
- Responsive breakpoint patterns
- Hover/focus state styling

**Example**:

```javascript
// AI suggested this gradient overlay pattern
className =
  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent";
```

### C. Data Fetching Logic

**Used AI For**:

- API route structure
- useEffect patterns for client-side fetching
- Loading state management

**Example**:

```javascript
// AI generated the fetch pattern
useEffect(() => {
  fetch("/api/news")
    .then((res) => res.json())
    .then((data) => setArticles(data))
    .finally(() => setLoading(false));
}, []);
```

### D. Mock Data Generation

**Used AI For**:

- Hindi article content
- Realistic news headlines
- Category distribution

### E. Jest Test Setup

**Used AI For**:

- Jest configuration
- Mock fetch setup
- Basic test patterns

## 2. Where AI Suggestions Were Wrong/Suboptimal

### Issue 1: Pages Router vs App Router Confusion

**AI Suggested**: Creating files in both `pages/` and `app/` directories.
**Problem**: Caused route conflicts in Next.js 13+.
**Correction**: Removed `pages/` entirely, used only App Router.

### Issue 2: Image Component Configuration

**AI Suggested**: Using `<img>` tag directly.
**Problem**: Missing Next.js Image optimization.
**Correction**: Switched to `next/image` with proper domain config:

```javascript
// Corrected:
import Image from "next/image";
<Image src={img} alt={title} fill className="object-cover" />;
```

### Issue 3: Import Path Errors

**AI Suggested**: Relative paths like `./data/articles.json` from app/ directory.
**Problem**: Path resolution failed in Next.js App Router.
**Correction**: Used `../data/articles.json` (going up to root level).

### Issue 4: Client Component Marking

**AI Suggested**: Not including "use client" directive.
**Problem**: useState/useEffect failed in Server Components.
**Correction**: Added `"use client"` at top of interactive components.

### Issue 5: Hardcoded Zodiac Unicode

**AI Suggested**: Using emoji zodiac symbols (🐏, 🐂).
**Problem**: Inconsistent rendering across devices.
**Correction**: Used Unicode symbols (♈, ♉) for reliability.

## 3. How AI Suggestions Were Verified/Corrected

### Verification Process:

1. **Manual Testing**: Ran `npm run dev` after each AI suggestion
2. **Error Reading**: Carefully read Next.js error messages
3. **Documentation Check**: Verified against Next.js 13 docs
4. **Visual Comparison**: Compared output with LiveHindustan screenshots
5. **Console Inspection**: Checked browser devtools for warnings

### Correction Examples:

```javascript
// AI Original (Wrong):
// pages/index.js
export default function Home() { ... }

// Corrected by me:
// app/page.js (App Router)
export default function Home() { ... }
```

```javascript
// AI Original (Missing directive):
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  ...
}

// Corrected by me:
"use client";  // Added this line
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  ...
}
```

## 4. Custom Modifications Beyond AI

### A. LiveHindustan-Specific Styling

- Matched exact red color (#dc2626)
- Replicated Hindi logo design with bordered "हि"
- Category tabs with scroll arrows

### B. Layout Fine-Tuning

- `justify-between` for even article distribution
- Custom `scrollbar-hide` utility
- Exact grid ratios (3:2 for category sections)

### C. Hindi Localization

- Date formatting with `hi-IN` locale
- All UI text in Hindi
- RTL-aware spacing considerations

### D. Component Variants

- Created 3 Card variants (default, horizontal, small)
- Multiple skeleton loading states
- Responsive breakpoint customization

### E. SEO Implementation

- JSON-LD schema for homepage
- Semantic HTML structure
- Meta tags in layout.js

### F. Edge Case Handling

- Comprehensive null checks
- Fallback UI for empty states
- Error boundary patterns

---

## Summary Statistics

| Metric                 | Value                    |
| ---------------------- | ------------------------ |
| Total Components       | 14                       |
| Lines of Code          | ~2000+                   |
| Test Files             | 1                        |
| Data Articles          | 20                       |
| Responsive Breakpoints | 3 (sm, md, lg)           |
| AI-Assisted Parts      | ~60% initial, ~40% final |
| Manual Corrections     | ~15 significant changes  |

---

_Documentation created on November 29, 2025_
_Project: LiveHindustan Clone - Next.js Implementation_
