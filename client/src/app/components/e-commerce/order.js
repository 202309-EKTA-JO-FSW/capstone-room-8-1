import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <div className="/images/Logo.jpeg">Logo</div>
      <ul>
        <li>Home</li>
        <li>Dishes</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="cart-icon">Cart</div>
    </header>
  )
}

function MainSection() {
  return (
    <div className="main-section" style={{ backgroundImage: `url(your_image_url)` }}>
      <div className="content">
        <h1>Explore Our Delicious Dishes!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>
    </div>
  )
}

function Card({ dish }) {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${dish.img})` }}></div>
      <div className="card-content">
        <h2 style={{ color: 'black' }}>{dish.name}</h2> {/* Font color is black */}
        <p style={{ color: 'black', background: 'white' }}>{dish.description}</p> {/* Font color is black and background is white */}
      </div>
    </div>
  )
}

import Image from 'next/image';

function SpecialDishesSection({ dishes }) {
    return (
        <div className="special-dishes-section">
            {dishes.map((dish, index) => (
                <div key={index} className="special-dish">
                    {/* Replace img with Image from next/image */}
                    <Image
                        src={dish.img}
                        alt={dish.name}
                        style={{ borderRadius: '50%' }}
                    />
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                </div>
            ))}
        </div>
    );
}

export { Header, MainSection, Card, SpecialDishesSection };
