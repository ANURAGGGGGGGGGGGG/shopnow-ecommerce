import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  const [category, setCategory] = useState('All');
  
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category);
    
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  return (
    <div className="container py-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Featured Products</h1>
      
      <div className="d-flex justify-content-center gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`btn btn-sm ${
              category === cat 
                ? 'btn-primary' 
                : 'btn-outline-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
     <div className="row g-3">
  {filteredProducts.map(product => (
    <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-5">
      <ProductCard product={product} />
    </div>
  ))}
</div>
    </div>
  );
};

export default HomePage;