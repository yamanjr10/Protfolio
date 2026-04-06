# Yaman Jr Portfolio

A clean, modern, and fully responsive portfolio website showcasing professional work, skills, and projects. Built with React, this portfolio features smooth animations, dark mode support, and a customizable configuration system.

## 📋 About This Site

This is a professional portfolio website designed to showcase:
- **Personal Information & Bio** - An engaging introduction section
- **Skills & Expertise** - Display of technical and professional skills
- **Projects Showcase** - Featured portfolio projects with descriptions
- **Resume/CV** - Downloadable resume and professional experience
- **Contact Information** - Easy ways to get in touch
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🌐 Live Demo

**View the live portfolio:** https://yamanchapagin.netlify.app/

## ✨ Features

- ✅ **Modern & Responsive** - Fully responsive design that works on all devices
- ✅ **Dark Mode Toggle** - Built-in theme switching between light and dark modes
- ✅ **Smooth Animations** - Scroll-triggered animations and transitions
- ✅ **Loading Screen** - Professional loading animation on startup
- ✅ **Back to Top Button** - Quick navigation to top of the page
- ✅ **Configuration-Driven** - Easy customization via JSON config files
- ✅ **Navigation Sidebar** - Fixed navigation for easy section access
- ✅ **Professional Footer** - Social links and contact information
- ✅ **Optimized Performance** - Fast load times and smooth scrolling

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

## 🚀 Quick Start

### Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

### Installation Steps

1. **Clone or Download the Repository**
   ```bash
   # If using git
   git clone https://github.com/yamanjr10/Protfolio.git
   cd Protfolio
   
   # Or download and extract the ZIP file
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   - The site will open automatically at `http://localhost:3000`
   - Hot reload is enabled - changes refresh automatically

4. **Build for Production**
   ```bash
   npm run build
   ```
   - Creates optimized production build in `build/` folder
   - Ready to deploy to hosting services

## 📝 Configuration

### Customizing Content

All site content is managed through JSON configuration files in `public/data/`:

**config.json** - Main site settings
```json
{
  "site": {
    "title": "Your Portfolio Title",
    "description": "Your portfolio description",
    "author": "Your Name",
    "keywords": "portfolio, developer, designer"
  },
  "theme": {
    "primaryColor": "#2563eb",
    "fontFamily": "Inter",
    "darkMode": true
  }
}
```

**profile.json** - Personal information displayed in About section

**projects.json** - Portfolio projects showcase

**resume.json** - Experience, education, and professional details

**social.json** - Social media links and contact information

### Updating Images

Replace images in:
- `public/assets/images/profile/` - Your profile picture
- `public/assets/images/projects/` - Project preview images

## 📦 How to Copy Everything

### Option 1: Using Git

```bash
# Clone the entire repository
git clone https://github.com/yamanjr10/Protfolio.git
cd Protfolio
npm install
```

### Option 2: Manual Copy

1. **Download the Repository**
   - Download as ZIP from the repository
   - Extract to your desired location

2. **Copy All Files**
   ```bash
   # Copy all project files to your working directory
   # Make sure to include:
   # - All folders (src, public, node_modules after npm install)
   # - All configuration files (package.json, README.md, etc.)
   # - Hidden files (.gitignore, etc.)
   ```

3. **Install Dependencies**
   ```bash
   # Navigate to the project folder
   cd Portfolio
   
   # Install all required packages
   npm install
   ```

4. **Verify Installation**
   ```bash
   npm start
   ```

### Option 3: Docker (Optional)

If you want to containerize the application:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 📖 Available Scripts

- `npm start` - Start development server (port 3000)
- `npm build` - Create production-ready build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not reversible)

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

### Deploy to Vercel

1. Import project from Git
2. Vercel auto-detects React and uses optimal settings
3. Deploy with one click

### Deploy to Other Platforms

The `build/` folder after running `npm run build` can be deployed to:
- GitHub Pages
- AWS Amplify
- Firebase Hosting
- Traditional web hosting (FTP)

## 🎨 Customization Guide

### Changing Colors

Edit `src/styles/variables.css` to modify color scheme:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
}
```

### Adding New Sections

1. Create new component in `src/components/YourComponent/`
2. Add imports to `src/App.jsx`
3. Update navigation in `public/data/config.json`
4. Add styles in component folder

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm install` fails | Delete `node_modules` and `package-lock.json`, then run `npm install` again |
| Port 3000 already in use | Run `npm start -- --port 3001` to use different port |
| Images not loading | Check paths in `config.json` and ensure images exist in `public/assets/` |
| Dark mode not working | Clear browser cache and local storage |
| Build fails | Run `npm run build` to see detailed error messages |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This portfolio project is open source and available under the MIT License.

## 👤 Author

**Yaman Chapagain**

### 📱 Connect With Me

- **GitHub:** https://github.com/yamanjr10
- **Facebook:** https://www.facebook.com/yamanjr101
- **Instagram:** https://instagram.com/yamanjr101
- **Email:** jryaman100@gmail.com
- **Location:** Nepal

### 🔗 Repository

- **GitHub Repo:** https://github.com/yamanjr10/Protfolio.git
- **Live Demo:** https://yamanchapagin.netlify.app/

For more information or to customize this portfolio for your needs, please reach out through the contact section or connect with me on social media.

---

**Last Updated:** April 2026