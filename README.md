# Jasvanth's Portfolio

A modern, responsive portfolio website showcasing my expertise in AI/ML, Generative AI, and Full-Stack Development.

## 🚀 Live Demo

Visit: [https://Jasvanth-S.github.io](https://Jasvanth-S.github.io)

## ✨ Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Theme**: Toggle between dark mode and light mode
- **Typing Animation**: Dynamic role display with smooth transitions
- **Multiple Roles**: Showcasing expertise in 6 different domains
- **Skills Showcase**: 29+ technical skills with original brand logos
- **CV Downloads**: Role-specific CV downloads
- **Contact Form**: Easy ways to get in touch

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Type Animation** - Typing effects
- **React Scroll** - Smooth scrolling
- **GitHub Pages** - Hosting

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Jasvanth-S/Jasvanth-S.github.io.git
   cd Jasvanth-S.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run locally:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

All content is centralized in `src/config/siteData.js` for easy updates:

- **Personal Info**: Name, bio, email
- **Roles**: Job titles and descriptions
- **Skills**: Technical skills with icon URLs
- **Social Links**: GitHub, LinkedIn, Email
- **Profile Photo**: Path to your photo
- **CV Files**: Paths to role-specific CVs

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.png
│   │   └── cv/
│   │       └── (CV files)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── config/
│   │   └── siteData.js
│   ├── App.js
│   └── index.css
└── package.json
```

## 🚀 Deployment to GitHub Pages

This portfolio is configured for GitHub Pages user site deployment (`username.github.io`).

### Initial Setup:

1. Create a repository named `Jasvanth-S.github.io` on GitHub

2. Add remote and push:
   ```bash
   git remote add origin https://github.com/Jasvanth-S/Jasvanth-S.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Subsequent Deployments:

After making changes:
```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

The site will be live at: **https://Jasvanth-S.github.io**

## 📝 Adding Your Content

1. **Profile Photo**: Add to `public/assets/profile.png`
2. **CV Files**: Add to `public/assets/cv/` with these names:
   - `Jasvanth_CV_Generative_AI_Engineer.pdf`
   - `Jasvanth_CV_AI_ML_Engineer.pdf`
   - `Jasvanth_CV_Agentic_AI_Engineer.pdf`
   - `Jasvanth_CV_FARM_Stack_Developer.pdf`
   - `Jasvanth_CV_Prompt_Engineer.pdf`
   - `Jasvanth_CV_Data_Business_Analyst.pdf`

3. **Update Content**: Edit `src/config/siteData.js`

## 🎯 Roles Featured

- Generative AI Engineer
- AI/ML Engineer
- Agentic AI Engineer
- FARM Stack Developer
- Prompt Engineer
- Data/Business Analyst

## 📧 Contact

- **Email**: jasvanth1010@gmail.com
- **GitHub**: [@Jasvanth-S](https://github.com/Jasvanth-S)
- **LinkedIn**: [jasvanth1010](https://linkedin.com/in/jasvanth1010)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Jasvanth. S**
