import { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        paymentMethod: 'credit'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-4 mb-4">
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            <div className="row g-4 mb-4">
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="postalCode" className="form-label">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="form-label">Payment Method</label>
                <div className="d-flex flex-column gap-2">
                    <div className="form-check">
                        <input
                            type="radio"
                            id="credit"
                            name="paymentMethod"
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="credit" className="form-check-label">Credit Card</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="paypal"
                            name="paymentMethod"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleChange}
                            className="form-check-input"
                        />
                        <label htmlFor="paypal" className="form-check-label">PayPal</label>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary w-100 py-2"
            >
                Complete Order
            </button>
        </form>
    );
};

export default CheckoutForm;