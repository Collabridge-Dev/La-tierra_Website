import React from 'react';

const Nav = () => {
  // Scroll handler to navigate to the desired section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  // Inline styles for the navigation bar
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Black background
    padding: '10px 0',
    position: 'sticky', // Sticks the navbar at the top
    top: '115px', // Adjust this value based on your header's height
    zIndex: 999, // Ensures it's below the header but above other content
  };

  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '30px', // Space between the buttons
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: '#fff', // White text
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'transparent', // No background for buttons
    border: 'none',
    fontWeight: 'bold',
    padding: '5px 10px',
    transition: 'color 0.3s ease', // Smooth hover effect
  };

  const hoverStyle = {
    color: '#ff6a00', // Orange color on hover
  };

  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li>
          <button
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
            onClick={() => handleScroll('details')}
          >
            Details
          </button>
        </li>
        <li>
          <button
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
            onClick={() => handleScroll('floor-plans')}
          >
            Floor Plans
          </button>
        </li>
        <li>
          <button
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
            onClick={() => handleScroll('sitemap')}
          >
            Sitemap
          </button>
        </li>
        <li>
          <button
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = '#fff')}
            onClick={() => handleScroll('amenities')}
          >
            Amenities
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
