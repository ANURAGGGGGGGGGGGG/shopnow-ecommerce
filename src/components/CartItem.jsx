import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    
    return (
        <div className="py-3 border-bottom">
            <div className="row align-items-center g-3">
                <div className="col-4 col-md-3">
                    <img 
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-3 object-fit-contain"
                        style={{ maxHeight: '100px' }}
                    />
                </div>

                <div className="col-8 col-md-5">
                    <h3 className="fs-6 fw-semibold mb-1">{item.name}</h3>
                    <p className="text-muted mb-2">{formatCurrency(item.price)} each</p>
                </div>

                <div className="col-12 col-md-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-pill">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="btn btn-outline-secondary px-3 py-1 rounded-start-pill"
                            >
                                -
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="btn btn-outline-secondary px-3 py-1 rounded-end-pill"
                            >
                                +
                            </button>
                        </div>

                        <div className="text-center text-md-end">
                            <p className="fw-bold mb-1 d-none d-md-block">
                                {formatCurrency(item.price * item.quantity)}
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="btn btn-link text-danger p-0 small"
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                    <div className="d-md-none mt-2 text-center">
                        <p className="fw-bold mb-0">
                            {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;