import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('New Release!');
  const [cartCount, setCartCount] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const hotspots = [
    { id: 1, top: '40%', left: '78%', title: 'Cushioned Heel Collar', desc: 'Provides dynamic lockdown and ankle stability.' },
    { id: 2, top: '56%', left: '48%', title: 'Off-Centre Lacing', desc: 'Creates a clean strike zone for pinpoint shots.' },
    { id: 3, top: '57%', left: '67%', title: 'TF Turf Cleat Outsole', desc: 'Engineered rubber studs for multi-directional traction.' }
  ];

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="page-wrapper">
      {/* Background Decorative Ambient Circles */}
      <div className="bg-circle top-circle"></div>
      <div className="bg-circle bottom-circle"></div>

      {/* Main Glass/Dark UI Container */}
      <div className="showcase-card">
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="brand-logo">
            {/* Nike Swoosh SVG */}
            <svg viewBox="0 0 24 24" width="46" height="24" fill="white">
              <path d="M21.707 5.293c-2.828.707-6.061 2.475-8.485 4.899-3.536 3.536-4.95 7.778-5.657 10.607-.354 1.414-.707 1.414-1.414.707-.707-.707-.707-2.121 0-3.536 1.414-2.828 4.243-7.071 8.485-9.899 2.121-1.414 4.596-2.475 7.071-2.778.354 0 .707.354 0 .707z" />
            </svg>
          </div>

          <nav className="nav-links">
            {['New Release!', 'Man', 'Woman', 'Kids', 'Sale'].map((tab) => (
              <span
                key={tab}
                className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="search-box">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Search" />
            </div>

            <button className="cart-btn" onClick={() => alert(`Items in cart: ${cartCount}`)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </header>

        {/* Hero Content Section */}
        <div className="hero-content">
          {/* Left Column: Product Information */}
          <div className="product-details">
            <span className="sub-title">Nike Phantom</span>
            <h1 className="product-title">GT2 Academy </h1>
            <p className="description">
              Building on the Phantom GT, the Nike Phantom GT2 TF has an updated design 
              and patterning that are engineered to help you place your shots with pinpoint accuracy. 
              Off-centre lacing provides a clean strike zone to help you dribble, pass and score with precision.
            </p>

            <div className="price-tag">
              <span className="old-price">$150</span>
              <span className="current-price">$120</span>
            </div>

            <button className="add-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {/* Right Column: Interactive Shoe Showcase with Hotspots */}
          <div className="shoe-showcase">
            <div className="radial-backdrop"></div>

            {/* Main Shoe Image */}
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
              alt="Nike Phantom GT2"
              className="shoe-image"
            />

            {/* Interactive Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="hotspot-wrapper"
                style={{ top: spot.top, left: spot.left }}
                onClick={() => setSelectedHotspot(selectedHotspot === spot.id ? null : spot.id)}
              >
                <div className="hotspot-pulse"></div>
                <div className="hotspot-point"></div>

                {selectedHotspot === spot.id && (
                  <div className="hotspot-tooltip">
                    <strong>{spot.title}</strong>
                    <p>{spot.desc}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Star Rating & Review Count */}
            <div className="reviews-container">
              <div className="stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
                <span className="rating-score">(4.5 of 5)</span>
              </div>
              <span className="review-count">2458 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}