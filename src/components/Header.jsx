import React, { useState } from 'react';

function Header() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Get current path (converted to lowercase for consistency)
    const currentPath = window.location.pathname.toLowerCase();

    // Updated nav link style accepting both hover and active info
    const navLinkStyle = (isHovered, isActive) => ({
        textTransform: 'uppercase',
        fontSize: '17px',
        padding: '12px 18px',
        transition: 'transform 0.3s ease-out, color 0.3s',
        transform: isHovered ? (isActive ? 'scale(1.05)' : 'scale(1.1)') : 'scale(1)',
        color: isActive ? '#ecc731' : (isHovered ? '#ecc731' : '#222'),
        background: isHovered ? '#fffbe6' : 'transparent',
        borderRadius: '5px',
        fontWeight: 600,
        textDecoration: 'none',
        display: 'block',
        margin: '4px 0',
    });

    // Home link custom style with zero left margin
    const homeStyle = {
        ...navLinkStyle(hoveredItem === 'home', currentPath === '/'),
        marginLeft: 0,
    };

    // Hamburger button style
    const hamburgerStyle = {
        display: 'none',
        flexDirection: 'column',
        cursor: 'pointer',
        width: '32px',
        height: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '20px',
        top: '34px',
        zIndex: 1001,
        background: '#fff',
        border: '1px solid #eee',
        borderRadius: '6px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    };

    // Nav container style (desktop)
    const navContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        background: 'transparent',
        width: '100%',
        padding: 0,
        margin: 0,
    };

    // Mobile nav style (when open)
    const mobileNavStyle = {
        position: 'fixed',
        top: '90px', // below header spacer
        left: 0,
        right: 0,
        background: '#f9f9f9', // light background color
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '15px 20px',
        margin: 0,
        borderTop: '1px solid #ddd',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
        opacity: menuOpen ? 1 : 0,
    };

    // Media query for mobile
    const mediaQuery = `
        @media (max-width: 900px) {
            .desktop-nav {
                display: none !important;
            }
            .hamburger {
                display: flex !important;
            }
            .logo-header-inner img {
                min-width: 140px !important;
                height: 50px !important;
            }
        }
        @media (min-width: 901px) {
            .mobile-nav {
                display: none !important;
            }
            .hamburger {
                display: none !important;
            }
        }
    `;

    return (
        <div>
            <style>{mediaQuery}</style>
            <header className="site-header header-style-1 mobile-sider-drawer-menu" style={{
                background: '#ffffff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 1000
            }}>
                <div className="sticky-header main-bar-wraper">
                    <div className="main-bar" style={{ backgroundColor: 'transparent', padding: '0', position: 'relative', minHeight: '90px' }}>
                        <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '90px' }}>
                            <div className="logo-header" style={{ flex: '0 0 auto', zIndex: 1400 }}>
                                <div className="logo-header-inner logo-header-one" style={{ padding: '10px 0' }}>
                                    <a href="/">
                                        <img src="images/BLACK- LA-TIERRA INFRA.png" alt="" style={{ minWidth: '200px', height: '70px', objectFit: 'contain' }} />
                                    </a>
                                </div>
                            </div>
                            {/* Hamburger Icon */}
                            <div
                                className="hamburger"
                                style={hamburgerStyle}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <div style={{ width: '24px', height: '3px', background: '#333', margin: '3px 0', borderRadius: '2px' }} />
                                <div style={{ width: '24px', height: '3px', background: '#333', margin: '3px 0', borderRadius: '2px' }} />
                                <div style={{ width: '24px', height: '3px', background: '#333', margin: '3px 0', borderRadius: '2px' }} />
                            </div>
                            {/* Desktop Nav */}
                            <nav
                                className="desktop-nav"
                                style={navContainerStyle}
                            >
                                <ul className="nav navbar-nav" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none', gap: '8px' }}>
                                    <li
                                        onMouseEnter={() => setHoveredItem('home')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/" style={homeStyle}>Home</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('about')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/about" style={navLinkStyle(hoveredItem === 'about', currentPath === '/about')}>About us</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('project')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/project" style={navLinkStyle(hoveredItem === 'project', currentPath === '/project')}>Communities</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('studioz')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/studioz" style={navLinkStyle(hoveredItem === 'studioz', currentPath === '/studioz')}>Design Studioz</a>
                                    </li>
                                    <li
                                        onMouseEnter={() => setHoveredItem('contact')}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <a href="/contact" style={navLinkStyle(hoveredItem === 'contact', currentPath === '/contact')}>Contact us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* Spacer to prevent content jumping under fixed header */}
            <div style={{ height: '90px' }}></div>
            {/* Mobile Nav with smooth transition */}
            <div
                className="mobile-nav"
                style={mobileNavStyle}
            >
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', width: '100%' }}>
                    <li
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setHoveredItem('home')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <a href="/" style={homeStyle}>Home</a>
                    </li>
                    <li
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setHoveredItem('about')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <a href="/about" style={navLinkStyle(hoveredItem === 'about', currentPath === '/about')}>About us</a>
                    </li>
                    <li
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setHoveredItem('project')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <a href="/project" style={navLinkStyle(hoveredItem === 'project', currentPath === '/project')}>Communities</a>
                    </li>
                    <li
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setHoveredItem('studioz')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <a href="/studioz" style={navLinkStyle(hoveredItem === 'studioz', currentPath === '/studioz')}>Design Studioz</a>
                    </li>
                    <li
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setHoveredItem('contact')}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <a href="/contact" style={navLinkStyle(hoveredItem === 'contact', currentPath === '/contact')}>Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;