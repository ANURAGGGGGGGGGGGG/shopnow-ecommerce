const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 mt-auto border-top border-secondary">
      <div className="container px-4">
        <div className="row g-4 g-lg-5">
          <div className="col-md-6 col-lg-4">
            <div className="mb-4">
              <h3 className="h4 fw-bold mb-3 text-primary">ShopNow</h3>
              <p className="text-secondary mb-3">
                Your premier destination for quality products and exceptional service.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-secondary hover-primary text-decoration-none">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="text-secondary hover-primary text-decoration-none">
                  <i className="bi bi-twitter-x fs-5"></i>
                </a>
                <a href="#" className="text-secondary hover-primary text-decoration-none">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="text-secondary hover-primary text-decoration-none">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <h4 className="h5 fw-bold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary hover-primary text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary hover-primary text-decoration-none">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary hover-primary text-decoration-none">Support</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary hover-primary text-decoration-none">Careers</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h4 className="h5 fw-bold mb-3">Contact Us</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="mailto:info@shopnow.com" className="text-secondary hover-primary text-decoration-none d-flex align-items-center gap-2">
                  <i className="bi bi-envelope fs-5"></i>
                  info@shopnow.com
                </a>
              </li>
              <li className="mb-3">
                <a href="tel:1234567890" className="text-secondary hover-primary text-decoration-none d-flex align-items-center gap-2">
                  <i className="bi bi-telephone fs-5"></i>
                  (123) 456-7890
                </a>
              </li>
              <li className="d-flex align-items-center gap-2 text-secondary">
                <i className="bi bi-geo-alt fs-5"></i>
                123 Shopping Street, Retail City, RC 4567
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h4 className="h5 fw-bold mb-3">Newsletter</h4>
            <p className="text-secondary mb-3">Subscribe for updates and offers</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control bg-transparent text-white border-secondary" 
                placeholder="Enter your email"
              />
              <button className="btn btn-primary" type="button">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-5 pt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-secondary mb-0">
                &copy; {new Date().getFullYear()} ShopNow. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                <a href="#" className="text-secondary hover-primary text-decoration-none">Privacy Policy</a>
                <a href="#" className="text-secondary hover-primary text-decoration-none">Terms of Service</a>
                <a href="#" className="text-secondary hover-primary text-decoration-none">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;