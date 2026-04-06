# 💼 Yaman Jr Portfolio

![Version](https://img.shields.io/badge/Version-1.0.0-blueviolet?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Platform](https://img.shields.io/badge/Platform-Web-orange?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)

> **Showcase Your Professional Journey** 🚀
> 
> A clean, modern, and fully responsive portfolio website designed to showcase your professional work, skills, projects, and achievements. Built with React, this portfolio features smooth animations, dark mode support, advanced animations, and a configuration-driven system for easy customization.

🌐 **[Live Demo](https://yamanchapagin.netlify.app/)** • 📚 **[GitHub Repo](https://github.com/yamanjr10/Protfolio.git)** • 📧 **[Contact](mailto:jryaman100@gmail.com)**

---

## ✨ Complete Feature Set

### 🏠 Hero Section - Make a Strong First Impression
- **Eye-Catching Banner** - Animated hero section with your introduction
- **Call-to-Action Buttons** - Direct links to projects and contact
- **Scroll-to-Explore Indicator** - Guide visitors deeper into your portfolio
- **Animated Text Effects** - Dynamic typography and fade-in animations
- **Responsive Background** - Beautiful gradient or image backgrounds

### 👤 About Me - Tell Your Story
- **Personal Biography** - Share your professional journey and background
- **Dynamic Content Loading** - Smooth transitions and animations
- **Profile Integration** - Integrates with profile.json data
- **Personal Achievements** - Highlight key milestones
- **Professional Summary** - Showcase your expertise and passion

### 🎯 Skills Section - Display Your Expertise
- **Organized Skill Categories** - Group skills by type or proficiency
- **Visual Skill Display** - Modern cards and badges for each skill
- **Proficiency Indicators** - Show your level of expertise
- **Hot Skills Highlighting** - Stand out in-demand technologies
- **Customizable Skill List** - Easy configuration via JSON

### 💼 Projects Showcase - Highlight Your Best Work
- **Project Grid Layout** - Beautiful card-based project display
- **Project Details**:
  - Project title and description
  - Technology stack used
  - Live demo links
  - GitHub repository links
  - Project images/featured screenshots
  - Key features highlight
- **Interactive Cards** - Hover effects and animations
- **Filter by Technology** - Sort and view projects by tech stack
- **Direct Action Buttons** - Quick links to live demos and code

### 📄 Resume Section - Professional Experience
- **Experience Timeline** - Chronological view of your career
- **Education Display** - Educational background and qualifications
- **Certifications & Awards** - Display your achievements
- **Work History** - Detailed job descriptions and responsibilities
- **Downloadable CV** - Users can download your resume as PDF
- **Professional Formatting** - Clean, print-ready design

### 📞 Contact Section - Connect With Users
- **Contact Form** - Easy-to-use message submission
- **Direct Contact Info** - Email, phone, and location
- **Social Media Links** - GitHub, Facebook, Instagram, LinkedIn, etc.
- **Modern Contact Card** - Professional contact information display
- **Call-to-Action** - Encourage visitors to reach out

### 🎨 Design & UX Features
- **Dark Mode Toggle** - Seamless light/dark theme switching
- **Smooth Scroll Navigation** - Navigate between sections smoothly
- **Responsive Design** - Perfect on desktop (1920px), tablet (768px), and mobile (320px)
- **Loading Animations** - Professional splash screen on startup
- **Scroll Reveal Animations** - Elements animate in as they come into view
- **Back to Top Button** - Quick navigation to the top of the page
- **Smooth Page Transitions** - Professional animation effects
- **Professional Navbar** - Fixed or sticky navigation with active section indicator
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices
- **High Performance** - Optimized loading and smooth 60fps interactions

### 🔘 Navigation & Accessibility
- **Fixed Sidebar Navigation** - Always accessible navigation menu
- **Active Section Indicator** - Shows which section you're currently viewing
- **Scroll Synchronization** - Navigation updates as you scroll
- **Mobile Hamburger Menu** - Responsive navigation for small screens
- **Keyboard Navigation Support** - Full keyboard accessibility
- **Smooth Scroll Behavior** - Elegant navigation between sections
- **Clear Visual Hierarchy** - Easy to understand site structure

### 📊 Configuration Management
- **JSON-Driven Content** - All content managed through data files
- **Easy Data Updates** - Modify content without touching code
- **Profile Customization** - Update via profile.json
- **Project Management** - Add/edit projects via projects.json
- **Skills Configuration** - Organize skills via skills system
- **Resume Data** - Store experience in resume.json
- **Social Links** - Manage connections via social.json
- **Theme Customization** - Adjust colors and fonts in config.json

### ⚡ Performance & Optimization
- **Fast Load Times** - Optimized bundling and asset delivery
- **Code Splitting** - Efficient component lazy loading
- **Image Optimization** - Responsive images for different devices
- **Smooth 60fps Animations** - Hardware-accelerated transitions
- **Efficient State Management** - React context for theme management
- **Auto-Dark Mode Detection** - Respects system theme preferences
- **Progressive Enhancement** - Works great even with JS disabled partially

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **React DOM 18.2.0** - DOM rendering
- **React Scripts 5.0.1** - Build tools
- **FontAwesome 7.2.0** - Icon library
- **CSS3** - Styling and animations

## 📁 Project Structure

```
Portfolio/
├── public/                          # Static files served directly
│   ├── index.html                  # Main HTML file
│   ├── _redirects                  # Redirect rules for deployment
│   ├── assets/
│   │   └── images/
│   │       ├── profile/            # Profile pictures and avatars
│   │       └── projects/           # Project preview images
│   └── data/
│       ├── config.json             # Site configuration (title, nav, theme)
│       ├── profile.json            # Personal information
│       ├── projects.json           # Projects data
│       ├── resume.json             # Resume/experience data
│       └── social.json             # Social media links
│
├── src/                            # Source code
│   ├── index.js                    # React entry point
│   ├── App.jsx                     # Main App component
│   ├── components/                 # Reusable React components
│   │   ├── About/                  # About section component
│   │   ├── BackToTop/              # Back to top button
│   │   ├── Contact/                # Contact section
│   │   ├── Footer/                 # Footer component
│   │   ├── Hero/                   # Hero banner section
│   │   ├── Loading/                # Loading/spinner screen
│   │   ├── Navbar/                 # Navigation bar
│   │   ├── Projects/               # Projects portfolio section
│   │   ├── Resume/                 # Resume/experience section
│   │   ├── ScrollToTop/            # Scroll to top handler
│   │   ├── Skills/                 # Skills section
│   │   └── ThemeToggle/            # Dark mode toggle button
│   ├── context/
│   │   └── ThemeContext.js         # Theme management context
│   ├── hooks/
│   │   └── useScrollActive.js      # Custom hook for scroll detection
│   ├── styles/                     # Global stylesheets
│   │   ├── animations.css          # Animation keyframes
│   │   ├── global.css              # Global styles
│   │   ├── utilities.css           # Utility classes
│   │   └── variables.css           # CSS variables (colors, fonts, etc.)
│   └── utils/
│       ├── helpers.js              # Utility functions
│       └── skills.js               # Skills data formatting
│
├── package.json                    # Dependencies and scripts
├── auto-deploy.ps1                 # PowerShell deployment script
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - Package manager
- **Git** (optional) - For cloning repository
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Installation

#### Option 1: Using Git (Recommended)
```bash
# Clone the repository
git clone https://github.com/yamanjr10/Protfolio.git
cd Protfolio

# Install dependencies
npm install

# Start development server
npm start
```

#### Option 2: Manual Download
1. Download the ZIP from the GitHub repository
2. Extract to your desired location
3. Open terminal in the folder
4. Run:
   ```bash
   npm install
   npm start
   ```

#### Option 3: Using Docker (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Post-Installation
- The site opens automatically at `http://localhost:3000`
- Hot reload enabled - changes reflect instantly
- Ready to customize your portfolio!

---

## 📖 Complete Usage Guide

### 🎯 First Time Setup

1. **Edit Profile Information**
   - Navigate to `public/data/profile.json`
   - Update your personal information
   - Add your bio and achievements

2. **Configure Site Settings**
   - Edit `public/data/config.json`
   - Set your portfolio title and description
   - Customize theme colors and fonts

3. **Add Your Projects**
   - Open `public/data/projects.json`
   - Add your project details
   - Include links, descriptions, and technologies

4. **Update Skills**
   - Modify `src/utils/skills.js`
   - Add your technical skills
   - Organize by category

5. **Add Social Links**
   - Edit `public/data/social.json`
   - Add your social media profiles
   - Configure contact information

6. **Upload Images**
   - Place profile picture in `public/assets/images/profile/`
   - Add project screenshots in `public/assets/images/projects/`
   - Update paths in respective JSON files

### 🔧 Customization Guide

#### Changing Colors & Theme
Edit `src/styles/variables.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --accent-color: #7c3aed;
}
```

#### Adding New Sections
1. Create new component: `src/components/YourComponent/YourComponent.jsx`
2. Create styles: `src/components/YourComponent/YourComponent.css`
3. Import in `src/App.jsx`
4. Update navigation in `config.json`
5. Add to the component render

#### Updating Navigation
Edit `public/data/config.json`:
```json
"navigation": [
  { "id": "section-id", "label": "Section Name", "href": "#section-id" }
]
```

### 📝 Configuration Files Explained

**`config.json`** - Site metadata and navigation
- Site title and description
- Navigation menu items
- Theme colors and fonts
- Meta information

**`profile.json`** - Personal information
- Name and title
- Biography
- Location
- Professional summary
- Social profiles

**`projects.json`** - Your portfolio projects
- Project title and description
- Technologies used
- Links (live demo, GitHub, etc.)
- Featured image
- Key features

**`resume.json`** - Professional experience
- Work experience
- Education history
- Certifications
- Skills summary
- Languages
- Awards

**`social.json`** - Contact and social information
- Social media links
- Email address
- Location
- Calendar/booking link

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **React DOM** | DOM Rendering | 18.2.0 |
| **React Scripts** | Build Tools | 5.0.1 |
| **FontAwesome** | Icons | 7.2.0 |
| **CSS3** | Styling & Animations | Latest |
| **JavaScript (ES6+)** | Logic & Interactivity | Latest |

### Additional Libraries Used
- **CSS Variables** - For dynamic theming
- **CSS Flexbox & Grid** - Responsive layouts
- **CSS Animations** - Smooth transitions
- **React Hooks** - State management
- **Context API** - Theme management

---

## 📁 Complete Project Structure

```
Yaman Jr Portfolio/
│
├── 📄 public/                          # Static files & assets
│   ├── index.html                      # Main HTML entry point
│   ├── _redirects                      # Netlify redirect rules
│   │
│   ├── 📁 assets/
│   │   └── 📁 images/
│   │       ├── 📁 profile/             # Profile & avatar images
│   │       └── 📁 projects/            # Project screenshots
│   │
│   └── 📁 data/                        # Configuration & content JSON
│       ├── config.json                 # Site configuration
│       ├── profile.json                # Personal information
│       ├── projects.json               # Projects data
│       ├── resume.json                 # Work experience
│       └── social.json                 # Social media links
│
├── 📁 src/                             # Source code
│   ├── index.js                        # React entry point
│   ├── App.jsx                         # Main application component
│   │
│   ├── 📁 components/                  # Reusable React components
│   │   ├── 📁 About/ (jsx + css)
│   │   ├── 📁 BackToTop/ (jsx + css)
│   │   ├── 📁 Contact/ (jsx + css)
│   │   ├── 📁 Footer/ (jsx + css)
│   │   ├── 📁 Hero/ (jsx + css)
│   │   ├── 📁 Loading/ (jsx + css)
│   │   ├── 📁 Navbar/ (jsx + css)
│   │   ├── 📁 Projects/ (jsx + css)
│   │   ├── 📁 Resume/ (jsx + css)
│   │   ├── 📁 ScrollToTop/ (jsx + css)
│   │   ├── 📁 Skills/ (jsx + css)
│   │   └── 📁 ThemeToggle/ (jsx + css)
│   │
│   ├── 📁 context/ → ThemeContext.js
│   ├── 📁 hooks/ → useScrollActive.js
│   ├── 📁 styles/ → animations.css, global.css, utilities.css, variables.css
│   └── 📁 utils/ → helpers.js, skills.js
│
├── 📄 package.json
├── 📄 auto-deploy.ps1
└── 📄 README.md
```

---

## 📖 Available Scripts

```bash
# Start development server (http://localhost:3000)
npm start

# Create production build
npm run build

# Run tests
npm test

# Eject from Create React App (WARNING: not reversible)
npm eject
```

---

## 🌐 Deployment Guide

### Deploy to Netlify (Recommended) ⭐
🎉 Perfect for React apps with free tier and auto-deployments!

**Quick Steps:**
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`
5. Click Deploy - your site is live! 🚀

**Result:** `https://your-site-name.netlify.app`

### Deploy to Vercel
Zero-config deployment optimized for React

**Steps:**
1. Import your Git repository
2. Vercel auto-detects React
3. Click Deploy
4. Done! ✨

### Deploy to GitHub Pages
```bash
"homepage": "https://yourusername.github.io/Protfolio"
npm run build
npm run deploy
```

### Other Platforms
- AWS Amplify
- Firebase Hosting
- Traditional Web Hosting (FTP/SSH)
- Azure Static Web Apps
- Render

---

## 🎨 Advanced Customization

### Complete Color Customization
Edit `src/styles/variables.css`:

```css
:root {
  /* Primary Colors */
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  --primary-light: #3b82f6;
  
  /* Secondary Colors */
  --secondary-color: #7c3aed;
  --accent-color: #ec4899;
  
  /* Text Colors */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-light: #9ca3af;
  
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-hover: #f3f4f6;
  
  /* Other */
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
}
```

### Add Custom Animations
Edit `src/styles/animations.css`:

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Create New Sections
```bash
# 1. Create component files
mkdir src/components/MySection
touch src/components/MySection/MySection.jsx
touch src/components/MySection/MySection.css

# 2. Add to App.jsx
# 3. Update config.json navigation
# 4. Add styles
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Dependencies fail | `rm -rf node_modules package-lock.json && npm install` |
| Port 3000 busy | `npm start -- --port 3001` |
| Images missing | Verify paths in JSON and CSS files |
| Theme broken | Clear browser cache & localStorage |
| Build errors | Run `npm run build` for detailed output |
| Styles wrong | Check CSS imports in components |
| Slow loading | Optimize images, use code splitting |
| Dark mode bugs | Verify ThemeContext.js setup |

---

## 📱 Browser Compatibility

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | ✅ | ✅ | Full Support |
| Firefox | ✅ | ✅ | Full Support |
| Safari | ✅ | ✅ | Full Support |
| Edge | ✅ | ✅ | Full Support |

---

## 🎯 Roadmap

- [ ] Blog/Articles section
- [ ] Project case studies
- [ ] Client testimonials
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] PWA features
- [ ] Analytics integration
- [ ] CMS integration
- [ ] Advanced animations
- [ ] Search functionality

---

## 🤝 Contributing

We'd love your contributions!

```bash
# 1. Fork the repository
# 2. Create feature branch
git checkout -b feature/YourFeature

# 3. Make your changes
git commit -m 'Add YourFeature'

# 4. Push and open PR
git push origin feature/YourFeature
```

---

## 📄 License

**MIT License** - Free to use for personal and commercial projects

---

## 👨‍💻 Author

**Yaman Chapagain** (Yaman Jr)

### 📱 Connect
- **GitHub:** [@yamanjr10](https://github.com/yamanjr10)
- **Facebook:** [yamanjr101](https://www.facebook.com/yamanjr101)
- **Instagram:** [@yamanjr101](https://instagram.com/yamanjr101)
- **Email:** jryaman100@gmail.com
- **Location:** 🇳🇵 Nepal

### 🔗 Links
- **Repository:** [github.com/yamanjr10/Protfolio](https://github.com/yamanjr10/Protfolio.git)
- **Live Site:** [yamanchapagin.netlify.app](https://yamanchapagin.netlify.app/)
- **Version:** 2.0.0

---

## 💬 Support

Questions or feedback?

- 🐛 Report bugs on GitHub Issues
- 💡 Suggest features
- 📚 Check documentation
- 📧 Email: jryaman100@gmail.com

---

## 🙏 Acknowledgments

- **React** - JavaScript library
- **FontAwesome** - Icon library
- **Netlify** - Hosting
- **Open Source** - Community tools

---

## ⭐ Support This Project

- Star ⭐ the repository
- Share with others 📢
- Report bugs 🐛
- Contribute code 💻
- Use as template 🔗

---

## 📊 Stats

- **Tech:** React 18.2.0
- **Build:** React Scripts 5.0.1
- **CSS:** CSS3 Variables
- **Icons:** FontAwesome 7.2.0
- **Responsive:** Mobile-first
- **Load:** <1s (cached)
- **Perf:** Lighthouse optimized
- **Access:** WCAG compliant

---

<div align="center">

### 🎊 Showcase Your Portfolio Today!

**[🌐 Live Demo](https://yamanchapagin.netlify.app/)** • **[⭐ GitHub](https://github.com/yamanjr10/Protfolio.git)** • **[💌 Contact](mailto:jryaman100@gmail.com)**

---

Made with ❤️ for developers and designers

**Your portfolio is your first impression—make it count!**

---

**Last Updated:** April 2026 | **v1.0.0** | **MIT License**

</div>