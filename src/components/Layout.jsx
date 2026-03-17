import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Video, Menu, X, ArrowRight } from 'lucide-react';
import { FAQ } from './FAQ';
import { FadeUp } from './FadeUp';

export const Layout = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <div className="noise-bg"></div>
            <nav className="nav theme-dark">
                <Link to="/" className="logo">R.AGENCY</Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                    <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                    <Link to="/l-agence" className={`nav-link ${location.pathname === '/l-agence' ? 'active' : ''}`}>L'Agence</Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={28} color="var(--text-main)" /> : <Menu size={28} color="var(--text-main)" />}
                </button>

                {/* Mobile Nav Dropdown */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                    <Link to="/services" className={`mobile-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                    <Link to="/l-agence" className={`mobile-link ${location.pathname === '/l-agence' ? 'active' : ''}`}>L'Agence</Link>
                    <Link to="/contact" className={`mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            {/* The FAQ section at the bottom of every page (before footer) - Light Theme */}
            <FAQ />

            {/* FOOTER */}
            <footer className="footer theme-dark">
                <div className="container">
                    {/* Top Footer Call to Action */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--glass-border)' }}>
                        <FadeUp>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Prêt à développer votre <span className="text-gradient">visibilité</span> ?</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                                Nous accompagnons les marques qui souhaitent atteindre un nouveau niveau de visibilité digitale. Écrivez-nous pour discuter de votre projet.
                            </p>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                                Démarrer un projet <ArrowRight size={20} />
                            </Link>
                        </FadeUp>
                    </div>

                    <div className="footer-grid">
                        {/* Branding */}
                        <FadeUp delay={0.1}>
                            <div>
                                <Link to="/" className="logo" style={{ display: 'block', marginBottom: '1.5rem' }}>R.AGENCY</Link>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                                    Agence de communication spécialisée dans la stratégie social media et la création de contenu performant.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://instagram.com/r.agency" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                                        <Instagram size={20} color="var(--text-main)" />
                                    </a>
                                    <a href="#" className="social-btn" aria-label="TikTok">
                                        <Video size={20} color="var(--text-main)" />
                                    </a>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Navigation */}
                        <FadeUp delay={0.2}>
                            <div>
                                <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Navigation</h4>
                                <ul className="footer-links">
                                    <li><Link to="/">Accueil</Link></li>
                                    <li><Link to="/services">Nos Services</Link></li>
                                    <li><Link to="/l-agence">L'Agence</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </FadeUp>

                        {/* Services */}
                        <FadeUp delay={0.3}>
                            <div>
                                <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Expertise</h4>
                                <ul className="footer-links">
                                    <li><Link to="/services">Stratégie Social Media</Link></li>
                                    <li><Link to="/services">Création de Contenu</Link></li>
                                    <li><Link to="/services">Community Management</Link></li>
                                    <li><Link to="/services">Influence & Branding</Link></li>
                                </ul>
                            </div>
                        </FadeUp>

                        {/* Contact */}
                        <FadeUp delay={0.4}>
                            <div>
                                <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Contact</h4>
                                <ul className="footer-contact-list">
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <MapPin size={20} color="var(--accent-base)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: 'var(--text-muted)' }}>Toulouse<br />France • Maroc • Algérie • Dubaï</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <Phone size={20} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                                        <span style={{ color: 'var(--text-muted)' }}>+33 7 81 34 04 83<br />+33 6 47 19 54 36</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <Mail size={20} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                                        <span style={{ color: 'var(--text-muted)' }}>r.agency98@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeUp>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} R.AGENCY. Agence de communication & création de contenu. Tous droits réservés.</p>
                        <div className="footer-legals">
                            <Link to="/mentions-legales">Mentions Légales</Link>
                            <Link to="#">Politique de confidentialité</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
