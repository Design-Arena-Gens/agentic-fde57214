export default function Home() {
  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="logo">Thompson & Associates</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#attorneys">Attorneys</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Experienced Legal Counsel You Can Trust</h1>
        <p>Dedicated to protecting your rights and achieving your legal goals</p>
        <a href="#contact" className="cta-button">Schedule Consultation</a>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Cases Won</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Available</p>
          </div>
        </div>
      </section>

      <section id="services" className="container">
        <h2 className="section-title">Our Practice Areas</h2>
        <div className="practice-areas">
          <div className="practice-card">
            <h3>Corporate Law</h3>
            <p>Comprehensive legal services for businesses including formation, contracts, mergers & acquisitions, and regulatory compliance.</p>
          </div>
          <div className="practice-card">
            <h3>Litigation</h3>
            <p>Aggressive representation in civil and commercial disputes, with a proven track record in courtroom success.</p>
          </div>
          <div className="practice-card">
            <h3>Estate Planning</h3>
            <p>Protect your legacy with expert guidance on wills, trusts, probate, and estate administration.</p>
          </div>
          <div className="practice-card">
            <h3>Real Estate</h3>
            <p>Full-service real estate law including transactions, leases, zoning, and property disputes.</p>
          </div>
          <div className="practice-card">
            <h3>Employment Law</h3>
            <p>Counsel for both employers and employees on workplace issues, contracts, and discrimination matters.</p>
          </div>
          <div className="practice-card">
            <h3>Family Law</h3>
            <p>Compassionate representation in divorce, custody, adoption, and other family legal matters.</p>
          </div>
        </div>
      </section>

      <section id="attorneys" className="attorneys container">
        <h2 className="section-title">Our Attorneys</h2>
        <div className="attorney-grid">
          <div className="attorney-card">
            <div className="attorney-photo">JT</div>
            <h3>James Thompson</h3>
            <p className="title">Senior Partner</p>
            <p>Specializing in corporate law and litigation with over 30 years of experience. Harvard Law School graduate.</p>
          </div>
          <div className="attorney-card">
            <div className="attorney-photo">SC</div>
            <h3>Sarah Chen</h3>
            <p className="title">Partner</p>
            <p>Expert in estate planning and real estate law. Yale Law School graduate with 15 years of practice.</p>
          </div>
          <div className="attorney-card">
            <div className="attorney-photo">MR</div>
            <h3>Michael Rodriguez</h3>
            <p className="title">Associate Partner</p>
            <p>Focused on employment and family law. Stanford Law School graduate dedicated to client advocacy.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us Today</h2>
        <div className="contact-info">
          <p><strong>Phone:</strong> <a href="tel:555-123-4567">(555) 123-4567</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@thompsonlaw.com">info@thompsonlaw.com</a></p>
          <p><strong>Address:</strong> 1234 Legal Avenue, Suite 500<br/>New York, NY 10001</p>
          <p style={{marginTop: '2rem'}}>Free initial consultation available</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Thompson & Associates. All rights reserved. | Attorney Advertising</p>
      </footer>
    </>
  )
}
