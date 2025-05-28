import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSpring, animated, config } from '@react-spring/web';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [cartItems, setCartItems] = useState(getCartCount());
  const [changeAmount, setChangeAmount] = useState(0);

  const [countStyles, countApi] = useSpring(() => ({
    from: { transform: 'scale(1)' },
    config: config.wobbly
  }));

  const [badgeStyles, badgeApi] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { duration: 1000 }
  }));

  const [iconStyles, iconApi] = useSpring(() => ({
    from: { transform: 'translateY(0px)' },
    config: config.wobbly
  }));

  useEffect(() => {
    const newCount = getCartCount();
    const difference = newCount - cartItems;
    
    if (difference !== 0) {
      setChangeAmount(difference);
      
      countApi.start({
        from: { transform: 'scale(1.2)' },
        to: { transform: 'scale(1)' }
      });

      iconApi.start({
        from: { transform: difference > 0 ? 'translateY(-3px)' : 'translateY(3px)' },
        to: { transform: 'translateY(0px)' }
      });

      badgeApi.start({
        from: { opacity: 1, transform: 'translateY(0px)' },
        to: [
          { opacity: 1, transform: 'translateY(0px)' },
          { opacity: 0, transform: 'translateY(-20px)' }
        ],
        config: { 
          duration: 1500,
          tension: 120,
          friction: 14
        },
        delay: 300,
        onRest: () => setChangeAmount(0)
      });

      setCartItems(newCount);
    }
  }, [getCartCount()]);

  return (
    <nav className="bg-dark text-white p-3 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <Link 
          to="/" 
          className="text-decoration-none fs-3 fw-bold text-white brand-hover"
        >
          ShopNow
        </Link>

        <div className="d-flex align-items-center gap-4">
          <Link 
            to="/" 
            className="text-decoration-none link-light position-relative nav-link-hover"
          >
            Home
          </Link>

          <Link 
            to="/cart" 
            className="text-decoration-none link-light d-flex align-items-center position-relative"
          >
            {changeAmount !== 0 && (
              <animated.div
                style={badgeStyles}
                className={`position-absolute top-0 start-100 translate-middle badge ${
                  changeAmount > 0 ? 'bg-success' : 'bg-danger'
                } p-2`}
              >
                {changeAmount > 0 ? '+' : ''}{changeAmount}
              </animated.div>
            )}

            <animated.div style={iconStyles}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="cart-icon"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </animated.div>

            <animated.span 
              style={countStyles}
              className="ms-2 fw-bold"
            >
              {cartItems}
            </animated.span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;