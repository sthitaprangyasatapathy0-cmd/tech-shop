import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../main';
import { Link } from 'react-router-dom';

const OrderSuccessPage  = () => {
  const [show, setShow] = useState(false);
   const { mony } = useContext(shopContext)

  useEffect(() => {
    // Trigger animations on page load
    setTimeout(() => setShow(true), 100);
  }, []);
  const randomId = `ORD-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
// Output: ORD-2026-45782

  return (
    <div style={styles.container}>
      
      {/* Animated Checkmark Circle */}
      <div style={{
        ...styles.checkmarkWrapper,
        transform: show ? 'scale(1)' : 'scale(0)',
        opacity: show ? 1 : 0
      }}>
        <svg style={styles.checkmark} viewBox="0 0 52 52">
          <circle
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="2"
            style={{
              strokeDasharray: '166',
              strokeDashoffset: show ? '0' : '166',
              transition: 'stroke-dashoffset 0.6s ease-in-out 0.3s'
            }}
          />
          <path
            fill="none"
            stroke="#4CAF50"
            strokeWidth="3"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            style={{
              strokeDasharray: '48',
              strokeDashoffset: show ? '0' : '48',
              transition: 'stroke-dashoffset 0.4s ease-in-out 0.7s'
            }}
          />
        </svg>
      </div>

      {/* Success Title */}
      <h1 style={{
        ...styles.title,
        transform: show ? 'translateY(0)' : 'translateY(-30px)',
        opacity: show ? 1 : 0,
        transition: 'all 0.6s ease-out 0.5s'
      }}>
        Order Placed Successfully! 🎉
      </h1>

      {/* Subtitle */}
      <p style={{
        ...styles.subtitle,
        transform: show ? 'translateY(0)' : 'translateY(-20px)',
        opacity: show ? 1 : 0,
        transition: 'all 0.6s ease-out 0.7s'
      }}>
        Your order has been confirmed and will be shipped soon
      </p>

      {/* Order Details Card */}
      <div style={{
        ...styles.card,
        transform: show ? 'translateY(0)' : 'translateY(30px)',
        opacity: show ? 1 : 0,
        transition: 'all 0.6s ease-out 0.9s'
      }}>
        <div style={styles.detailRow}>
          <span style={styles.label}>Order Number</span>
          <span style={styles.value}>{randomId}</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.detailRow}>
          <span style={styles.label}>Total Amount</span>
          <span style={styles.valueGreen}>₹{mony}</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.detailRow}>
          <span style={styles.label}>Estimated Delivery</span>
          <span style={styles.value}>March 25-28, 2026</span>
        </div>
      </div>

      {/* Buttons */}
      <div style={{
        ...styles.buttonContainer,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        opacity: show ? 1 : 0,
        transition: 'all 0.6s ease-out 1.1s',
        
      }}>
        <button
          style={styles.primaryButton}
          onClick={() => console.log('Track Order')}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Track Your Order
        </button>
        <Link to="/">
        <button 
          style={styles.secondaryButton}
          
          onClick={() => console.log('Continue Shopping')}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
        >
          Continue Shopping
        </button>
        </Link>
      </div>

      {/* Email Note */}
      <p style={{
        ...styles.note,
        opacity: show ? 1 : 0,
        transition: 'opacity 0.6s ease-out 1.3s'
      }}>
        📧 A confirmation email has been sent to your email address
      </p>

    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  checkmarkWrapper: {
    marginBottom: '30px',
    transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },
  checkmark: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'block',
    strokeMiterlimit: 10,
    boxShadow: 'inset 0px 0px 0px #4CAF50',
    filter: 'drop-shadow(0 4px 15px rgba(76, 175, 80, 0.3))'
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 15px 0',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '18px',
    color: '#7f8c8d',
    margin: '0 0 40px 0',
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px 40px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    marginBottom: '30px'
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0'
  },
  divider: {
    height: '1px',
    backgroundColor: '#e9ecef',
    margin: '0'
  },
  label: {
    fontSize: '15px',
    color: '#6c757d',
    fontWeight: '500'
  },
  value: {
    fontSize: '16px',
    color: '#2c3e50',
    fontWeight: '600'
  },
  valueGreen: {
    fontSize: '18px',
    color: '#4CAF50',
    fontWeight: '700'
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '25px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
  },
  secondaryButton: {
    backgroundColor: 'white',
    color: '#2c3e50',
    border: '2px solid #dee2e6',
    borderRadius: '10px',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  note: {
    fontSize: '14px',
    color: '#95a5a6',
    textAlign: 'center',
    maxWidth: '400px'
  }
};

export default OrderSuccessPage;