# React + Vite
## Project Structure

The project follows a modular folder structure for better scalability and maintainability. Components, pages, styles, and assets are organized separately.
 in your project.

live_streaming_vite/
│
├── node_modules/                # Installed dependencies (not pushed to GitHub)
├── public/                      # Public static files
│
├── src/
│   ├── assets/                  # Images and static assets
│   │   ├── hero1.jpg            # Hero background image
│   │   └── react.svg
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   └── ProtectedRoute.jsx   # Route protection for authenticated users
│   │
│   ├── pages/                   # Application pages
│   │   ├── Home.jsx             # Landing page
│   │   ├── Login.jsx            # User login page
│   │   ├── Register.jsx         # User registration page
│   │   └── Watch.jsx            # Protected watch/playlist page
│   │
│   ├── styles/                  # Page-level CSS files
│   │   ├── Home.css
│   │   ├── Login.css
│   │   └── Watch.css
│   │
│   ├── App.jsx                  # Main app component & routes
│   └── main.jsx                 # Application entry point
│
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # Main HTML file
├── package.json                 # Project metadata & scripts
├── package-lock.json            # Dependency lock file
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
