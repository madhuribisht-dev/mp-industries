# M.P. Industries – Website

**Quality Assured Packaging Solutions**  
LLDPE / HDPE / LD Shrink Films · Liners & Bags · BOPP Tape · Custom Print & Pack  
Kichha, Uttarakhand | GSTIN: 05ABRFM2756K1ZR

---

## Pages

| File | URL |
|---|---|
| `index.html` | `/` – Home |
| `products.html` | `/products` – Product Range |
| `about.html` | `/about` – About Us |
| `contact.html` | `/contact` – Contact & Enquiry Form |

---

## Deploy to Vercel (Free Hosting)

### Step 1 – Push to GitHub
1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** → name it `mp-industries-website` → Public
3. Upload all files (drag and drop in the GitHub UI) or use Git CLI:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git remote add origin https://github.com/YOUR_USERNAME/mp-industries-website.git
   git push -u origin main
   ```

### Step 2 – Deploy on Vercel
1. Create a free account at [vercel.com](https://vercel.com) (sign in with GitHub)
2. Click **Add New Project**
3. Select your `mp-industries-website` repository
4. Leave all settings as default → Click **Deploy**
5. Your site will be live at `https://mp-industries-website.vercel.app` in ~30 seconds

---

## Set Up the Contact Form

The contact form on `/contact` uses [Formspree](https://formspree.io) — free for up to 50 submissions/month.

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form → copy the form ID (e.g. `xpwzabcd`)
3. Open `contact.html` and replace `YOUR_FORM_ID`:
   ```html
   action="https://formspree.io/f/xpwzabcd"
   ```
4. Enquiries will be emailed to `mpindustries1523@gmail.com`

---

## Add a Custom Domain (e.g. mpindustries.in)

### Buy the Domain
| Registrar | Cost (approx.) |
|---|---|
| GoDaddy (godaddy.com) | ₹800–1,200 / year for `.in` |
| Namecheap | ₹700–1,000 / year for `.in` |
| BigRock (India) | ₹700–900 / year for `.in` |
| Google Domains | ₹900–1,100 / year |

Recommended: **mpindustries.in** or **mpindustrieskichha.in**

### Connect Domain to Vercel
1. In Vercel dashboard → Your Project → **Settings → Domains**
2. Add your domain (e.g. `mpindustries.in`)
3. Vercel will show you DNS records (A record and CNAME)
4. Log in to your domain registrar → DNS settings → add those records
5. Wait 10–30 minutes for propagation → your site is live on your domain!

---

## Annual Cost Estimate

| Item | Cost |
|---|---|
| Domain name (`.in`) | ₹700–1,200 / year |
| Hosting (Vercel Free tier) | **₹0** |
| Contact form (Formspree Free) | **₹0** |
| **Total** | **₹700–1,200 / year** |

Vercel's free tier is generous — no credit card needed, SSL certificate included, unlimited bandwidth for static sites.

---

## Future Upgrades (Optional)

- Add a WhatsApp chat button (free widget from [elfsight.com](https://elfsight.com))
- Add Google Analytics (free) to track visitors
- Add product images when available
- Add a catalogue PDF download
