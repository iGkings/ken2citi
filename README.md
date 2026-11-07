# Ken2citi Cool Technical Services - Modern Website

A modern, fast, mobile-responsive website built with **React**, **Vite**, and **Tailwind CSS** for **Ken2citi Cool Technical Services** — an Air Conditioning products and services company.

Designed purely for product showcases and customer inquiries (no checkout or cart clutter).

---

## 🚀 Quick Start Guide

To run this project locally on your machine:

1. **Clone or open the directory in VS Code:**
   ```bash
   cd kent2citi-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the URL displayed in the terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 100% Component-Based Project Structure

```text
kent2citi-website/
├── public/
│   ├── favicon.svg               # Modern SVG cooling snowflake favicon
│   └── images/
│       └── products/             # Real product images (product_1.png to product_34.png)
├── src/
│   ├── data/
│   │   ├── products.js           # 34 Air Conditioning products, specs, categories & company info
│   │   └── services.js           # Detailed HVAC services list, trust stats & features
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with logo placeholder, links & Call button
│   │   ├── Hero.jsx              # Hero banner with AC showcase, CTAs & trust badges
│   │   ├── Services.jsx          # Modular services preview / grid with icons
│   │   ├── Products.jsx          # Featured products section with direct inquiry
│   │   ├── ProductCard.jsx       # Reusable product card with specs modal & WhatsApp button
│   │   ├── About.jsx             # About company preview with highlights & credentials
│   │   ├── WhyChooseUs.jsx       # 4 core pillars + company stats counter
│   │   ├── Testimonials.jsx      # Client ratings & reviews with 5-star badges
│   │   ├── ContactForm.jsx       # Interactive inquiry form with dropdowns & success state
│   │   ├── Footer.jsx            # Comprehensive footer with links, contacts & hours
│   │   ├── CtaBanner.jsx         # High-converting Green-to-Yellow gradient banner
│   │   └── WhatsAppButton.jsx    # Global floating pulse WhatsApp chat button
│   ├── pages/
│   │   ├── Home.jsx              # Landing page integrating all sections
│   │   ├── ProductsPage.jsx      # Full catalogue with category filters & live search
│   │   ├── ServicesPage.jsx      # In-depth services list, technical deliverables & SOP
│   │   ├── AboutPage.jsx         # Company story, mission, vision & values
│   │   └── ContactPage.jsx       # Contact information, inquiry form & map placeholder
│   ├── App.jsx                   # React Router layout & ScrollToTop controller
│   ├── main.jsx                  # React DOM root entry
│   └── index.css                 # Tailwind directives & brand gradients
├── tailwind.config.js            # Custom color palette, fonts & shadows
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies & scripts
```

---

## 🎨 Design System

- **Backgrounds**: Clean White (`#FFFFFF`) and Light Gray (`#F8F9FA`)
- **Primary Accent**: Deep Green (`#0A7A42` / `#16A34A`)
- **Secondary Accent**: Bright Yellow (`#FFC107` / `#FACC15`)
- **Gradients**: Smooth Green-to-Yellow transitions for CTA buttons and section banners
- **Headings**: Dark Charcoal (`#1A1A1A`)
- **Body Text**: Slate Gray (`#4B5563`)
- **Typography**: Poppins and Inter via Google Fonts

---

## 🛠️ How to Customize

### 1. Update Company Phone Number & WhatsApp
Open [src/data/products.js](file:///c:/Users/Uc_iGkings/Downloads/ken2citi/kent2citi-website/src/data/products.js) and edit the `companyContactInfo` object:
```javascript
export const companyContactInfo = {
  companyName: "Ken2citi Cool Technical Services",
  phone: "+234 800 000 0000",
  whatsappNumber: "+2348000000000",
  email: "info@ken2citicool.com",
  address: "Your Physical Address, Lagos / Abuja, Nigeria",
  openingHours: "Mon - Sat: 8:00 AM - 6:00 PM | Emergency Service 24/7",
  ...
};
```
Every phone call link, WhatsApp button, prefilled inquiry text, and footer note automatically updates across the entire website!

### 2. Add or Edit AC Products
Open [src/data/products.js](file:///c:/Users/Uc_iGkings/Downloads/ken2citi/kent2citi-website/src/data/products.js) and add items to `productsData`.

### 3. Add or Edit Services
Open [src/data/services.js](file:///c:/Users/Uc_iGkings/Downloads/ken2citi/kent2citi-website/src/data/services.js) and update the services list or trust stats.

