# 🛒 BazarDor — Daily Market Price Tracker

**BazarDor** is a modern, responsive web application that helps users explore daily market prices, compare product prices across different markets, and track price changes. Built with Next.js and Tailwind CSS, it provides a clean and user-friendly experience for checking everyday grocery and essential product prices.

## ✨ Features

* **📊 Daily Market Prices** — View the latest available prices of essential products.
* **🗂️ Category-Based Browsing** — Explore products organized into categories.
* **💰 Price Sorting** — Sort products from lowest to highest or highest to lowest price.
* **🏪 Market Price Comparison** — View minimum and maximum prices across different markets.
* **📈 Price Change Indicators** — Identify price increases and decreases with visual indicators.
* **📱 Responsive Design** — Enjoy a consistent experience on mobile, tablet, laptop, and desktop.
* **🔎 Product Details** — View individual product information and market price details.
* **⚡ Loading UI** — Display loading animations and skeleton cards while content loads.
* **🚫 Custom 404 Page** — Show a dedicated not-found page for unavailable routes or products.
* **🔗 Dynamic Routing** — Navigate between category pages and individual product pages using dynamic URLs.

## 🛠️ Technologies Used

| Technology        | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| Next.js           | React framework, routing, and server-side rendering |
| React.js          | Building reusable UI components                     |
| Tailwind CSS      | Responsive styling and modern UI design             |
| JavaScript (ES6+) | Application logic and data processing               |
| REST API          | Fetching product, category, and market price data   |
| Git & GitHub      | Version control and project hosting                 |

## 📁 Project Structure

```text
bazardor/
├── app/
│   ├── category/
│   │   └── [categoryslug]/
│   │       ├── page.jsx
│   │       └── loading.jsx
│   ├── product/
│   │   └── [productid]/
│   │       └── page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   ├── loading.jsx
│   └── not-found.jsx
├── components/
│   ├── Navlink.jsx
│   └── PriceCard.jsx
├── public/
├── package.json
└── README.md
```

*Note: Adjust the folder and file names above to match your actual project structure.*

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm, which comes with Node.js
* Git (optional, for version control)

### Installation

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd bazardor
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit http://localhost:3000 in your browser.

## 🔌 API Integration

BazarDor retrieves product and category information from a REST API.

Example endpoints:

```text
GET /api/bazardor/categories
GET /api/bazardor/products
GET /api/bazardor/products?category={categoryslug}
GET /api/bazardor/products/{productid}
```

The application uses the API response to display categories, product details, market prices, and price changes.

## 📱 Responsive Design

The interface uses Tailwind CSS responsive utilities to support different screen sizes:

* **Mobile:** Compact layouts and stacked product cards.
* **Tablet:** Flexible grids and navigation.
* **Desktop:** Multi-column product grids and expanded layouts.

## 🔮 Future Improvements

* Search products by name.
* Add filters for price ranges and market locations.
* Display historical price charts.
* Allow users to save favorite products.
* Add user authentication and personalized dashboards.
* Provide notifications for significant price changes.

## 👨‍💻 Author

**Your Name**

* GitHub: [Your GitHub Profile](YOUR_GITHUB_PROFILE_URL)

## 📄 License

This project is intended for learning and development. Add a license such as the MIT License if you want others to use, modify, and distribute the code under those terms.

---

⭐ If you find BazarDor useful, consider giving the repository a star on GitHub!

**BazarDor — Stay informed. Shop smarter.**
