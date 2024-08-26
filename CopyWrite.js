import React, { useState } from 'react';

function ShopiesCoppywritePage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Copyright</h1>     
      <p>
        At Shopies, we're committed to bringing you the best shopping experience. Our online store offers a wide range of products from
        fashion, electronics, home decor, and more. We believe shopping should be fun, easy, and accessible to everyone.
      </p>

      <h2 style={{ color: '#4682b4' }}>Why Shop with Us?</h2>
      <ul>
        <li><strong>Vast Selection:</strong> Discover thousands of products across various categories, all in one place.</li>
        <li><strong>Best Prices:</strong> Get the best deals and discounts on your favorite items.</li>
        <li><strong>Fast Delivery:</strong> Enjoy quick and reliable delivery to your doorstep.</li>
        <li><strong>Secure Shopping:</strong> Your security is our priority. Shop with confidence using our secure payment options.</li>
        <li><strong>Customer Support:</strong> We're here for you 24/7. Our dedicated team is ready to assist you with any questions or concerns.</li>
      </ul>

      <h2 style={{ color: '#4682b4' }}>Join the Shopies Community!</h2>
      <p>
        Sign up today and start exploring endless possibilities. Don’t miss out on our exclusive offers and new arrivals.
      </p>
      
      <div style={{ margin: '20px 0' }}>
        <input 
          type="checkbox" 
          id="coppywriteAgreement" 
          checked={isChecked} 
          onChange={handleCheckboxChange}
        />
        <label htmlFor="coppywriteAgreement" style={{ marginLeft: '10px' }}>
          I agree to the copyright terms and conditions.
        </label>
      </div>

      <button 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#ff6347', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          opacity: isChecked ? 1 : 0.5,
          pointerEvents: isChecked ? 'auto' : 'none'
        }}
        disabled={!isChecked}
      >
        Shop Now
      </button>
    </div>
  );
}

export default ShopiesCoppywritePage;
