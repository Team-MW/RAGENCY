import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Video } from 'lucide-react';
import { FAQ } from './FAQ';
import { FadeUp } from './FadeUp';

export const Layout = () => {
    const location = useLocation();

    return (
        <>
            <nav className="nav theme-dark">
                <Link to="/" className="logo">R.AGENCY</Link>
                <div className="nav-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                    <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                    <Link to="/l-agence" className={`nav-link ${location.pathname === '/l-agence' ? 'active' : ''}`}>L'Agence</Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
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
                    <div className="grid-2">
                        <FadeUp delay={0.1}>
                            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Prêt à développer votre <span className="text-gradient">visibilité</span> ?</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px' }}>
                                Nous accompagnons les marques qui souhaitent atteindre un nouveau niveau de visibilité digitale. Écrivez-nous pour discuter de votre projet.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://instagram.com/r.agency" target="_blank" rel="noreferrer" className="btn btn-glass" style={{ padding: '1rem', borderRadius: '50%' }}>
                                    <Instagram size={24} color="var(--text-main)" />
                                </a>
                                <a href="#" className="btn btn-glass" style={{ padding: '1rem', borderRadius: '50%' }}>
                                    <Video size={24} color="var(--text-main)" />
                                </a>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="contact-icon"><MapPin size={24} /></div>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Localisation</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>Toulouse <br />(France • Maroc • Algérie • Dubaï)</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon"><Phone size={24} /></div>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Téléphone</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>+33 7 81 34 04 83<br />+33 6 47 19 54 36</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon"><Mail size={24} /></div>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Email</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>r.agency98@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)' }}>
                        <p>© {new Date().getFullYear()} R.AGENCY. Agence de communication & création de contenu. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
