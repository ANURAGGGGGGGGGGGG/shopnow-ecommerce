import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { useSpring, animated, config } from '@react-spring/web';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [cardStyles, cardApi] = useSpring(() => ({
        transform: 'translateY(0px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        config: { tension: 300, friction: 10 }
    }));

    const [buttonStyles, buttonApi] = useSpring(() => ({
        transform: 'scale(1)',
        config: config.wobbly
    }));

    const notificationStyles = useSpring({
        opacity: showNotification ? 1 : 0,
        transform: showNotification ? 'translateY(0px)' : 'translateY(-20px)',
        config: config.stiff
    });

    const handleAddToCart = () => {
        addToCart(product);
        buttonApi.start({
            from: { transform: 'scale(1.2)' },
            to: { transform: 'scale(1)' }
        });
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    return (
        <animated.div 
            className="h-100"
            style={cardStyles}
            onMouseEnter={() => {
                setIsHovered(true);
                cardApi.start({
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 16px rgba(0, 0, 0, 0.15)'
                });
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                cardApi.start({
                    transform: 'translateY(0px)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                });
            }}
        >
            <div className="bg-white rounded-3 overflow-hidden h-100 d-flex flex-column position-relative">
                <animated.div
                    style={{
                        ...notificationStyles,
                        top: '40px',
                        zIndex: 1000
                    }}
                    className="position-absolute start-50 translate-middle-x badge bg-success fs-6 p-2"
                >
                    Added to Cart!
                </animated.div>

                <Link 
                    to={`/product/${product.id}`} 
                    className="flex-grow-1 w-100 overflow-hidden position-relative"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-100 h-100 object-fit-contain p-2 product-image"
                        style={{ 
                            minHeight: '16rem',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease-in-out',
                            zIndex: 1
                        }}
                    />
                    <div 
                        className="position-absolute bottom-0 w-100 text-center pb-2"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                            zIndex: 2
                        }}
                    >
                        <span className="badge bg-dark bg-gradient px-3 py-2">
                            View Details →
                        </span>
                    </div>
                </Link>

                <div className="p-4 d-flex flex-column" style={{ minHeight: '140px', zIndex: 3 }}>
                    <Link to={`/product/${product.id}`} className="text-decoration-none">
                        <h2 className="fs-5 fw-semibold text-dark mb-3 product-title">
                            {product.name}
                        </h2>
                    </Link>
                    
                    <div className="mt-auto d-flex justify-content-between align-items-center gap-2">
                        <span className="text-dark fw-bold mb-0 price-tag">
                            {formatCurrency(product.price)}
                        </span>
                        
                        <animated.button
                            style={buttonStyles}
                            onClick={handleAddToCart}
                            className="btn btn-primary btn-sm py-2 px-2 px-md-3 add-to-cart-btn"
                            disabled={product.stock === 0}
                        >
                            <span className="d-none d-md-inline">Add to Cart</span>
                            <span className="d-inline d-md-none">🛒</span>
                        </animated.button>
                    </div>
                </div>

                {product.stock > 0 ? (
                    <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 10 }}>
                        <span className="badge bg-success bg-gradient">
                            In Stock ({product.stock})
                        </span>
                    </div>
                ) : (
                    <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 10 }}>
                        <span className="badge bg-danger bg-gradient">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>
        </animated.div>
    );
};

export default ProductCard;