import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Top Banner */}
      {/* <div className="top-banner">
        <div className="banner-content">
          <span>
            20% Off Sitewide Holiday Sale - Use code <strong>HOLIDAY20</strong>
          </span>
        </div>
      </div> */}

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-main">
            <div className="logo-container">
              <h1 className="logo">Rejuvia Labs</h1>
            </div>
            <nav className="main-nav">
              <ul>
                <li>
                  <a href="#category">Category</a>
                </li>
                <li>
                  <a href="#type">Type</a>
                </li>
                <li>
                  <a href="#form">Form</a>
                </li>
                <li>
                  <a href="#feature">Feature</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#why-us">Why Us</a>
                </li>
                <ul className="header-actions">
                  <li>
                    <a href="#cart">🛒 Cart 0</a>
                  </li>
                  <li>
                    <a href="#login">Log In / Sign Up</a>
                  </li>
                  <li>
                    <span className="search-icon">🔍</span>
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Science</h2>
          <div className="hero-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to drive innovative research in cognitive,
              metabolic and longevity science.
            </p>
            <a href="#catalog-filter" className="cta-button">
              SEARCH CATALOG
            </a>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="categories">
        <div className="category-grid">
          <div className="category-card">
            <div className="category-image">Nootropics</div>
            <a href="#nootropics" className="category-link">
              View Nootropics
            </a>
          </div>
          <div className="category-card">
            <div className="category-image">Metabolics</div>
            <a href="#metabolics" className="category-link">
              View Metabolics
            </a>
          </div>
          <div className="category-card">
            <div className="category-image">Longevity</div>
            <a href="#longevity" className="category-link">
              View Longevity
            </a>
          </div>
          <div className="category-card">
            <div className="category-image">Natural</div>
            <a href="#natural" className="category-link">
              View Natural
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Quality & Transparency</h3>
            <p>
              Purchase with confidence. Our products are tested to meet the
              highest standard of quality by independent third party
              laboratories. Our purity and concentration lab reports are
              publicly visible on every product page and tied directly to batch
              and lot numbers on every product you purchase.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Reliable Shipping</h3>
            <p>
              We offer free and same-day shipping, ship worldwide and guarantee
              delivery. We insure packages against damage and support all major
              couriers and the fastest shipping services. Our high quality
              packaging protects your order from contamination, degradation and
              ensures safe transit.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Satisfaction Guaranteed</h3>
            <p>
              We guarantee you will be satisfied or your money-back. We provide
              risk-free purchase, secure checkout, easy returns and order
              tracking alerts. If you have any issue our world class support
              team is standing by and will answer within 24 hours. Contact us
              any time for additional assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="products-section">
        <div className="section-header">
          <h3>Best Sellers</h3>
          <span className="page-indicator">Page 1 of 5</span>
        </div>
        <div className="products-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="product-card">
              <div className="product-image">Product Image {i}</div>
              <h4>Product Name {i}</h4>
              <p className="product-category">Category</p>
              <p className="product-price">US$19.99</p>
              <button className="add-to-cart">Add to cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>
            Welcome to the very best in globally sourced reference materials.
          </h2>
          <p>
            We are a leading resource for cognitive, metabolic and longevity
            science. Our mission is to drive innovation through a commitment to
            client goals, scientific rigor, sustainable operations and public
            advocacy.
          </p>
          <a href="#learn-more" className="cta-button">
            LEARN MORE
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#email">Email Us</a>
              </li>
              <li>
                <a href="#track">Track My Order</a>
              </li>
              <li>
                <a href="#modify">Modify My Order</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#quality">Quality Control</a>
              </li>
              <li>
                <a href="#approval">Approval Program</a>
              </li>
              <li>
                <a href="#affiliate">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li>
                <a href="#shipping">Shipping & Returns</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy & Security</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get In Touch!</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#email">Email</a>
            </div>
            <h4>Get 10% Off Your Order!</h4>
            <p>
              Hear about new products, promotions and updates when you join our
              newsletter!
            </p>
            <form className="newsletter-form">
              <input type="text" placeholder="First name" />
              <input type="email" placeholder="Email" />
              <button type="submit">Join Today!</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
