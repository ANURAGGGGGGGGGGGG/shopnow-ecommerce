import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="container px-4 py-5 text-center">
        <h2 className="fs-1 fw-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };
  
  return (
    <div className="container px-4 py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="img-fluid rounded-3 shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="fs-2 fw-bold mb-4">{product.name}</h1>
          <div className="d-flex align-items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <svg 
                key={index}
                style={{ width: '1.25rem', height: '1.25rem' }}
                className={`me-1 ${
                  index < Math.floor(product.rating) 
                    ? 'text-warning' 
                    : 'text-secondary'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-muted">({product.rating})</span>
          </div>
          <p className="fs-3 fw-bold text-primary mb-4">
            {formatCurrency(product.price)}
          </p>
          <p className="text-body mb-4">{product.description}</p>
          <div className="mb-4">
            <p className="text-muted small">Category: {product.category}</p>
            <p className="text-muted small">
              Availability: 
              <span className={product.stock > 0 ? 'text-success' : 'text-danger'}>
                {product.stock > 0 ? ' In Stock' : ' Out of Stock'}
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="d-flex align-items-center border rounded">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="btn btn-outline-secondary px-3 py-1 border-end rounded-0"
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                className="btn btn-outline-secondary px-3 py-1 border-start rounded-0"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-100 py-2"
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;