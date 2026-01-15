# My Portfolio

A responsive, editable portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Dark/Light Theme**: Toggle between Neumorphic dark mode and light mode.
- **Editable Content**: Easy to update content via `src/config/siteData.js`.
- **Smooth Scrolling**: Navigation links scroll smoothly to sections.

## Getting Started

### Prerequisites

- Node.js installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jasva/my-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

To edit personal details, skills, projects, and social links, modify the file:
`src/config/siteData.js`

## Deployment

This project is configured for deployment to **GitHub Pages**.

1. Update the `homepage` field in `package.json` to your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>"
   ```

2. Deploy using the script:
   ```bash
   npm run deploy
   ```
   This command will build the project and push the `build` folder to the `gh-pages` branch.

## Technologies Used

- React
- Tailwind CSS
- React Scroll
- React Icons
