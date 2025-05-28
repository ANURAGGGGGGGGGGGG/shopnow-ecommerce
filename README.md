# ShopNow E-Commerce Platform

ShopNow is a modern, responsive e-commerce platform built with React and Bootstrap. It features a complete shopping experience with product listings, cart management, and checkout functionality.

## Features

- 🛒 **Product Catalog** with category filtering
- 🔍 **Product Details** with zoomable images
- 🛍️ **Shopping Cart** with dynamic quantity adjustments
- 💳 **Checkout Process** with form validation
- 📱 **Fully Responsive** design for all devices
- ✨ **Animations** for enhanced user experience
- 📊 **Dynamic Pricing** with real-time calculations

## Technologies Used

- **Frontend**: React, React Router
- **Styling**: Bootstrap 5, Custom CSS
- **Animations**: React Spring
- **State Management**: React Context API
- **Utility**: Currency formatting, responsive design

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/shopnow-ecommerce.git
```

2. Install dependencies:
```bash
cd shopnow-ecommerce
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser at:
```
http://localhost:3000
```

## Project Structure

```
src/
├── components/
│   ├── CartItem.jsx       # Cart item component
│   ├── CheckoutForm.jsx   # Checkout form
│   ├── Footer.jsx         # Site footer
│   ├── Navbar.jsx         # Navigation bar
│   └── ProductCard.jsx    # Product display card
├── context/
│   └── CartContext.js     # Cart state management
├── data/
│   └── products.js        # Product database
├── pages/
│   ├── CartPage.jsx       # Shopping cart page
│   ├── CheckoutPage.jsx   # Checkout page
│   ├── HomePage.jsx       # Home page
│   └── ProductDetails.jsx # Product detail page
├── utils/
│   └── formatCurrency.js  # Currency formatter
├── App.js                 # Main application
└── index.js               # Entry point
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Demo

Live demo: [https://anuragggggggggggg.github.io/shopnow-ecommerce/](https://anuragggggggggggg.github.io/shopnow-ecommerce/)