"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-dark text-white">
      <footer className="py-5">
        <div className="container">
          <div className="row">
            {/* Section 1 */}
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-uppercase mb-3 font-weight-bold">Section 1</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-uppercase mb-3 font-weight-bold">Section 2</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-uppercase mb-3 font-weight-bold">Section 3</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-white hover:text-primary transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className="text-uppercase mb-3 font-weight-bold">Subscribe to our newsletter</h5>
                <p className="text-white-50">Stay updated with our latest news and offers.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="text-white">© 2025 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#" aria-label="Instagram">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#" aria-label="Facebook">
                  <svg className="bi" width="24" height="24" aria-hidden="true">
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
