import React from 'react';

const Footer: React.FC = () => (
  <footer style={{
    textAlign: 'center',
    padding: '1.5rem 0',
    background: '#fafafa',
    color: '#888',
    fontSize: '0.95rem',
    borderTop: '1px solid #eee',
    marginTop: '2rem'
  }}>
    &copy; {new Date().getFullYear()} TRIAXIS CONSTRU SOLUTION. All rights reserved.
  </footer>
);

export default Footer;