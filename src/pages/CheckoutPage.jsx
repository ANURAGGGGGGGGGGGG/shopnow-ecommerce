import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import { formatCurrency } from '../utils/formatCurrency';

const CheckoutPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');

    const shippingCharge = useMemo(() => {
        const baseShipping = 5;
        const perItemShipping = 2;
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        return baseShipping + (perItemShipping * totalItems);
    }, [cart]);

    const taxRate = 0.07;
    const cartTotal = getCartTotal();
    const taxAmount = cartTotal * taxRate;
    const totalAmount = cartTotal + shippingCharge + taxAmount;

    if (cart.length === 0 && !orderPlaced) {
        return (
            <div className="container px-4 py-5 text-center">
                <h2 className="fs-1 fw-bold mb-4">Your cart is empty</h2>
                <p className="mb-4 lead">You need to add products to your cart before checking out.</p>
                <Link to="/" className="btn btn-primary px-5 py-2">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    const handleSubmitOrder = (formData) => {
        const randomOrderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        setOrderNumber(randomOrderNumber);
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return (
            <div className="container px-4 py-5 text-center">
                <div className="alert alert-success mb-4">
                    <h2 className="fs-1 fw-bold mb-3">Thank you for your order!</h2>
                    <p className="mb-2">Your order has been placed successfully.</p>
                    <p className="fw-semibold mb-0">Order Number: #{orderNumber}</p>
                </div>
                <p className="lead mb-4">We'll send you an email with the order details and tracking information.</p>
                <Link to="/" className="btn btn-primary px-5 py-2">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container px-4 py-4">
            <h1 className="fs-2 fw-bold mb-4">Checkout</h1>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="bg-white rounded-3 shadow p-4 mb-4">
                        <h2 className="fs-4 fw-semibold mb-4">Shipping & Payment Information</h2>
                        <CheckoutForm onSubmit={handleSubmitOrder} />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="bg-white rounded-3 shadow p-4 mb-4">
                        <h2 className="fs-4 fw-semibold mb-4">Order Summary</h2>

                        <div className="border-top border-bottom py-3">
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between py-2">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>{formatCurrency(item.price * item.quantity)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="py-3">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span>{formatCurrency(cartTotal)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>{formatCurrency(shippingCharge)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Tax ({taxRate * 100}%)</span>
                                <span>{formatCurrency(taxAmount)}</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between fw-bold fs-5 pt-3 border-top">
                            <span>Total</span>
                            <span>{formatCurrency(totalAmount)}</span>
                        </div>
                    </div>

                    <div className="mt-3 text-end">
                        <Link to="/cart" className="btn btn-link text-decoration-none">
                            ← Back to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
