# Yeni — Landing Page

> Daily gut + hydration reset in a simple sachet.

Built with **Next.js 14 (App Router)** · **Tailwind CSS** · **Google Sheets** integration

---

## 🗂 Project Structure

```
yeni/
├── app/
│   ├── layout.js          # Root layout + SEO meta tags
│   ├── page.js            # Main landing page (assembles all sections)
│   ├── globals.css        # Global styles, fonts, animations
│   └── api/
│       └── waitlist/
│           └── route.js   # POST handler → Google Sheets webhook
├── components/
│   ├── Navbar.js           # Sticky nav with mobile hamburger
│   ├── Hero.js             # Hero section with floating flavour cards
│   ├── Problem.js          # Problem → Solution bridge
│   ├── Benefits.js         # 4 benefit cards + differentiator bar
│   ├── Flavours.js         # 3 flavour cards
│   ├── HowItWorks.js       # Tear → Mix → Sip steps
│   ├── Ingredients.js      # Ingredient transparency grid
│   ├── Testimonials.js     # Social proof + trust bar
│   ├── Waitlist.js         # Mobile input form + success state
│   ├── Footer.js           # Simple footer
│   ├── StickyMobileCTA.js  # Sticky bottom CTA (mobile only)
│   └── useReveal.js        # IntersectionObserver scroll animation hook
├── google-apps-script.js   # Paste this into Google Apps Script
├── .env.local.example      # Environment variable template
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your GOOGLE_SCRIPT_URL

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔗 Google Sheets Integration

### Step 1 — Create the Apps Script

1. Open [script.google.com](https://script.google.com)
2. Click **New Project**
3. Delete the default code and paste the contents of `google-apps-script.js`
4. Click **Save** (name it "Yeni Waitlist")

### Step 2 — Deploy as Web App

1. Click **Deploy** → **New Deployment**
2. Click the gear icon ⚙️ next to "Type" → select **Web App**
3. Configure:
   - **Description**: Yeni Waitlist v1
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize the permissions when prompted
6. **Copy the Web App URL** — looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### Step 3 — Add URL to environment

```bash
# .env.local
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Step 4 — Link to a Google Sheet (optional but recommended)

In Apps Script: **File** → **Settings** → Set a Google Sheet as the bound spreadsheet, OR the script will auto-create a sheet named "Waitlist" in a new spreadsheet.

---

## ☁️ Deploy on Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No → create new
# - Framework: Next.js (auto-detected)
# - Build command: next build (default)
# - Output dir: .next (default)
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "feat: Yeni landing page"
   git remote add origin https://github.com/YOUR_USERNAME/yeni.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

### Adding Environment Variables on Vercel

1. Go to your project on **vercel.com**
2. **Settings** → **Environment Variables**
3. Add:
   | Name | Value | Environment |
   |------|-------|-------------|
   | `GOOGLE_SCRIPT_URL` | `https://script.google.com/macros/s/YOUR_ID/exec` | Production, Preview, Development |
4. Click **Save**
5. **Redeploy** from the Deployments tab for changes to take effect

---

## 🎨 Design Decisions

| Token | Value | Notes |
|-------|-------|-------|
| **Primary font** | Cormorant Garamond | Editorial serif for headlines |
| **Body font** | DM Sans | Clean, modern, readable |
| **Mono font** | DM Mono | Labels, eyebrows, tags |
| **Background** | `#FAF8F4` (cream) | Warm off-white, premium feel |
| **Charcoal** | `#1A1A18` | Near-black for text/CTAs |
| **Sage** | `#8AAB7E` | Brand green, nature/health |
| **Clay** | `#C8956E` | Warm accent for contrast |

Animations use pure CSS (`IntersectionObserver` + class toggles) — no heavy animation libraries.

---

## 📱 Mobile Experience

- Fully responsive, mobile-first layout
- Sticky bottom CTA appears after scrolling past the hero
- Mobile hamburger navigation
- Touch-friendly tap targets (min 44px)
- Numeric keyboard auto-triggers for mobile number input

---

## ✅ Checklist Before Go-Live

- [ ] Replace placeholder testimonials with real ones
- [ ] Add real product photography (replace emoji placeholders)
- [ ] Set up `GOOGLE_SCRIPT_URL` in Vercel
- [ ] Test form submission end-to-end
- [ ] Add `/og-image.jpg` (1200×630px) for social sharing
- [ ] Add `/favicon.ico`
- [ ] Update `metadataBase` URL in `layout.js` to your real domain
- [ ] Add Google Analytics / Meta Pixel if needed
- [ ] Connect custom domain in Vercel settings

---

## 📞 Support

For setup help, WhatsApp your developer or raise an issue in the repo.
