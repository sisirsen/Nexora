# Voynex 

A modern, fast, and responsive cryptocurrency tracking web application built with React. It provides real-time market data & detailed analytics for top cryptocurrencies.

# Overview

Voynex is a frontend-focused project designed to simulate a real-world production application. It fetches live cryptocurrency data from external APIs and displays it in an intuitive UI.

This project demonstrates strong understanding of React fundamentals, API integration, state management, and performance optimization.


#  Features

*  Real-time cryptocurrency price tracking
*  Search coins
*  Detailed coin information
*  Fast and responsive UI
*  Dark/Light mode 
*  Live API integratio
*  Fully responsive (mobile + desktop)

# Folder Structure 

Voynex-web application
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── index.html
│
├── src/
│   ├── assets/              # images, icons, logos
│   │   ├── images/
│   │   ├── icons/
│   │   └── logos/
│   │
│   ├── components/          # reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CoinCard.jsx
│   │   ├── Loader.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/               # full pages (routes)
│   │   ├── Home.jsx
│   │   ├── CoinDetails.jsx
│   │   ├── Market.jsx
│   │   └── Watchlist.jsx
│   │
│   ├── services/            # API calls
│   │   └── cryptoApi.js
│   │
│   ├── hooks/               # custom hooks
│   │   └── useFetchCoins.js
│   │
│   ├── context/             # global state (important)
│   │   └── CryptoContext.jsx
│   │
│   ├── utils/               # helper functions
│   │   ├── formatCurrency.js
│   │   └── debounce.js
│   │
│   ├── styles/              # Tailwind/global CSS
│   │   └── index.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx           # routing setup
│
├── .env                     # API keys (VERY IMPORTANT)
├── package.json
└── README.md

# Tech Stack

* *Frontend:* React.js
* *Styling:* Tailwind CSS
* *API:* CoinGecko API
* *Deployment:* Vercel




## 📡 API Used

* CoinGecko API (for real-time crypto data)


# Screenshots


# What I Learned

* Deep understanding of React Hooks
* Handling asynchronous API calls efficiently
* Managing component re-renders and performance
* Structuring scalable React applications
* Working with real-world APIs



# Live Demo


