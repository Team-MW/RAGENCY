import React from 'react';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

export const Contact = () => {
    return (
        <>
            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center' }}>
                            <span className="section-label">10 — Contact</span>
                            <h1 className="section-title">Discutons de votre <span className="text-gradient">projet</span></h1>
                            <p className="vision-text text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                                Que vous souhaitiez refondre votre image de marque, augmenter vos ventes ou développer votre communauté, notre équipe est à votre écoute.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid-2" style={{ marginTop: '4rem' }}>
                        {/* Contact Form Details */}
                        <FadeUp delay={0.2}>
                            <div className="glass-panel" style={{ padding: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Envoyez-nous un message</h3>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <input
                                            type="text"
                                            placeholder="Nom"
                                            style={{ flex: 1, padding: '1rem', background: 'var(--bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--text-main)' }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Prénom"
                                            style={{ flex: 1, padding: '1rem', background: 'var(--bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--text-main)' }}
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email professionnel"
                                        style={{ padding: '1rem', background: 'var(--bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--text-main)' }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Secteur d'activité"
                                        style={{ padding: '1rem', background: 'var(--bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--text-main)' }}
                                    />
                                    <textarea
                                        placeholder="Décrivez votre besoin en quelques mots..."
                                        rows="4"
                                        style={{ padding: '1rem', background: 'var(--bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'var(--text-main)', resize: 'none' }}
                                    />
                                    <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                                        Envoyer <ArrowRight size={20} />
                                    </button>
                                </form>
                            </div>
                        </FadeUp>

                        {/* Direct Contact Details */}
                        <FadeUp delay={0.4}>
                            <div style={{ padding: '3rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Contact direct</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="contact-icon" style={{ flexShrink: 0 }}><MapPin size={24} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Où nous trouver ?</h4>
                                            <p style={{ color: 'var(--text-muted)' }}>📍 Toulouse <br />🌍 France • Maroc • Algérie • Dubaï</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="contact-icon" style={{ flexShrink: 0 }}><Phone size={24} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Téléphone</h4>
                                            <p style={{ color: 'var(--text-muted)' }}>+33 7 81 34 04 83 <br /> +33 6 47 19 54 36</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <div className="contact-icon" style={{ flexShrink: 0 }}><Mail size={24} /></div>
                                        <div>
                                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email</h4>
                                            <p style={{ color: 'var(--text-muted)' }}>r.agency98@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </>
    );
};
