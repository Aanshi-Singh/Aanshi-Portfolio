# Aanshi-Portfolio

A modern, responsive portfolio website showcasing my skills, experience, projects, and achievements as a Frontend Software Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with contact information
  - Experience timeline with detailed popups
  - Projects carousel
  - Education showcase
  - Skills display
  - Awards & Honors
- **Smooth Animations**: Scroll-triggered animations for better user experience
- **Download Resume**: Direct download link for resume PDF

## 🛠️ Technologies Used

- React.js
- Vite
- CSS3 (Custom animations and responsive design)
- JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Aanshi-Singh/Aanshi-Portfolio.git
cd Aanshi-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Live Demo

Visit the live portfolio at: [Your Portfolio URL]

## 🔗 Custom Domain Setup

This project includes configuration files for easy deployment and custom domain setup on popular platforms.

### Vercel Deployment

1. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Add Custom Domain:**
   - Go to your project dashboard on Vercel
   - Navigate to **Settings** → **Domains**
   - Click **Add Domain** and enter your custom domain
   - Follow the DNS configuration instructions:
     - **For apex domain (example.com):** Add an A record pointing to Vercel's IP
     - **For subdomain (www.example.com):** Add a CNAME record pointing to `cname.vercel-dns.com`
   - Vercel will automatically configure SSL certificates

### Netlify Deployment

1. **Deploy to Netlify:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Add Custom Domain:**
   - Go to your site dashboard on Netlify
   - Navigate to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Configure DNS records:
     - **For apex domain:** Add an A record or ALIAS record
     - **For subdomain:** Add a CNAME record pointing to your Netlify site
   - Netlify will automatically provision SSL certificates via Let's Encrypt

### GitHub Pages

1. **Build and Deploy:**
   ```bash
   npm run build
   # Deploy the dist folder to gh-pages branch
   ```

2. **Add Custom Domain:**
   - Create a `CNAME` file in the `public` folder with your domain name
   - Configure DNS records with your domain provider:
     - Add a CNAME record pointing to `[username].github.io`
   - Enable custom domain in GitHub Pages settings

### General DNS Configuration

For any hosting platform, you'll typically need:

- **A Record** (for apex domain): Points to the hosting platform's IP address
- **CNAME Record** (for subdomain): Points to the hosting platform's domain
- **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

### SSL Certificate

Most modern hosting platforms (Vercel, Netlify, Cloudflare Pages) automatically provision SSL certificates for custom domains. No additional configuration needed!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aanshi Singh**
- GitHub: [@Aanshi-Singh](https://github.com/Aanshi-Singh)
- LinkedIn: [aanshisingh0402](https://linkedin.com/in/aanshisingh0402)
- Email: aanshisingh04022002@gmail.com
