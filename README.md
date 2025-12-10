# MERN Course Repository

A collection of React learning projects demonstrating various concepts and best practices in building modern web applications.

## 📁 Projects Overview

### 1. **Donation Page**
A React application featuring a donation platform with component-based architecture.

**Features:**
- Header component for navigation
- Banner section with call-to-action messaging
- Donation cards displaying various donation options
- Footer component
- Responsive design with CSS styling
- Built with Vite for fast development

**Tech Stack:**
- React 19.2.0
- Vite (with rolldown)
- CSS for styling
- ESLint for code quality

**Project Structure:**
```
donation-page/
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── DonationCards.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

### 2. **My First React App**
An introductory React application for learning fundamental React concepts.

**Tech Stack:**
- React 19.2.0
- Vite for build tooling
- ESLint for code quality

**Project Structure:**
```
my-first-react-app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd MERN-Course
   ```

2. **Navigate to a project:**
   ```bash
   cd donation-page
   # or
   cd my-first-react-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## 📝 Available Scripts

In each project directory, you can run:

### `npm run dev`
Runs the app in development mode using Vite.
- Opens [http://localhost:5173](http://localhost:5173) in your browser
- The page will reload when you make changes

### `npm run build`
Builds the app for production to the `dist` folder using Vite.
- Optimizes the build for the best performance

### `npm run lint`
Runs ESLint to check code quality and identify potential issues.

### `npm run preview`
Preview the production build locally.

## 📚 Learning Resources

### React Concepts Covered:
- Component composition and hierarchy
- JSX syntax
- Props and state management
- Component lifecycle
- Styling React components
- React best practices

### Build Tools:
- **Vite**: Fast, next-generation build tool for modern web projects
- **ESLint**: Static code analysis tool for identifying problematic patterns in JavaScript

## 🏗️ Project Architecture

Both projects follow a component-based architecture:
- **Modular components**: Each feature is broken into reusable components
- **Separation of concerns**: Components handle specific responsibilities
- **Reusability**: Components can be easily imported and used across the application

## 🎨 Styling

Projects use:
- CSS modules for scoped styling
- Global CSS for base styles
- Inline styles for component-specific styling

## 💡 Key Features

### Donation Page
- Clean, organized component structure
- Reusable UI components
- Modern styling approach
- Section-based layout (Header, Banner, Cards, Footer)

### My First React App
- Starter template for React learning
- Basic project setup
- Asset organization

## 🔧 Development Workflow

1. Make changes to components in the `src/` directory
2. Save files to trigger automatic hot reload
3. Check console for ESLint warnings/errors
4. Run `npm run lint` to fix styling issues
5. Test the application in your browser

## 📦 Dependencies

All projects use the same core dependencies:
- **react**: ^19.2.0 - React library
- **react-dom**: ^19.2.0 - React DOM renderer

### Dev Dependencies:
- **@vitejs/plugin-react**: ^5.1.1 - Vite React plugin
- **vite**: npm:rolldown-vite@7.2.5 - Build tool
- **eslint**: ^9.39.1 - Code quality tool
- **@eslint/js**: ^9.39.1 - ESLint configuration
- **eslint-plugin-react-hooks**: ^7.0.1 - React hooks linting
- **eslint-plugin-react-refresh**: ^0.4.24 - React refresh integration

## 🤝 Contributing

1. Create a new branch for your feature
2. Follow the existing code style and structure
3. Run ESLint to ensure code quality
4. Test your changes thoroughly
5. Submit a pull request

## 📋 Best Practices

- Keep components small and focused
- Use meaningful component and variable names
- Follow React naming conventions (PascalCase for components)
- Keep component logic separate from presentation
- Write reusable components
- Use proper prop validation
- Keep CSS organized and scoped when possible

## 🐛 Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies issues
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### ESLint errors
```bash
npm run lint
# or with automatic fixes
npx eslint . --fix
```

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [ESLint Documentation](https://eslint.org)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org)

## 📄 License

This repository is part of the MERN Course learning materials.

## 📞 Support

For questions or issues, please refer to the course materials or create an issue in the repository.

---

**Happy Learning! 🎓**

Last Updated: December 2025
