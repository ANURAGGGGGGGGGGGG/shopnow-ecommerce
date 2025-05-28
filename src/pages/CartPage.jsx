import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const CartPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();

    const baseShipping = 5;
    const perItemShipping = 2;
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const shippingCharge = cart.length > 0 ? baseShipping + perItemShipping * totalItems : 0;

    const subtotal = getCartTotal();
    const taxRate = 0.07;
    const taxAmount = subtotal * taxRate;
    const totalAmount = subtotal + shippingCharge + taxAmount;

    if (cart.length === 0) {
        return (
            <div className="container px-4 py-5 text-center">
                <h2 className="fs-1 fw-bold mb-4">Your cart is empty</h2>
                <p className="mb-4 lead">Looks like you haven't added any products to your cart yet.</p>
                <Link
                    to="/"
                    className="btn btn-primary px-5 py-2"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container px-4 py-4">
            <h1 className="fs-2 fw-bold mb-4">Your Shopping Cart</h1>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="bg-white rounded-3 shadow p-4 mb-4">
                        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                            <h2 className="fs-4 fw-semibold mb-0">Cart Items</h2>
                            <button
                                onClick={clearCart}
                                className="btn btn-link text-danger p-0"
                            >
                                Clear Cart
                            </button>
                        </div>

                        <div className="divide-y">
                            {cart.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="bg-white rounded-3 shadow p-4">
                        <h2 className="fs-4 fw-semibold mb-4">Order Summary</h2>

                        <div className="mb-4 border-bottom pb-4">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>{formatCurrency(shippingCharge)}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Tax</span>
                                <span>{formatCurrency(taxAmount)}</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                            <span>Total</span>
                            <span>{formatCurrency(totalAmount)}</span>
                        </div>

                        <Link
                            to="/checkout"
                            className="btn btn-primary w-100 py-2 mb-3"
                        >
                            Proceed to Checkout
                        </Link>

                        <Link
                            to="/"
                            className="btn btn-link w-100 text-decoration-none"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;