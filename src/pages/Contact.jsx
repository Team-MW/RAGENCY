import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';
import { Marquee } from '../components/Marquee';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Contact = () => {
    const { scrollYProgress } = useScroll();
    const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existingScript && document.body.contains(existingScript)) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Contactez-Nous | R.AGENCY à Toulouse & International</title>
                <meta name="description" content="Discutons de votre projet de développement digital. Basée à Toulouse et présente à Dubaï, Maroc, Algérie. Contactez R.agency pour une stratégie de visibilité." />
            </Helmet>

            <motion.div style={{ y: yBg1, top: '20%', left: '-5%' }} className="glow-orb" />
            <motion.div style={{ y: yBg2, top: '70%', right: '-10%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)' }} className="glow-orb" />

            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center' }}>
                            <span className="section-label">10 — Contact</span>
                            <h1 className="section-title">Discutons de votre <span className="text-gradient">projet</span></h1>
                            <p className="vision-text text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '750px', margin: '0 auto' }}>
                                Que vous souhaitiez refondre votre image de marque, booster vos ventes ou fédérer une communauté engagée, nos experts sont à votre écoute pour vous accompagner sur mesure.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <Marquee text="PARLONS PROJET • COLLABORATION • CROISSANCE • CONSEIL • " />
            <Marquee text="DEVIS SUR MESURE • ACCOMPAGNEMENT • STRATÉGIE • SUCCÈS • " reverse={true} />

            <section className="section theme-dark" style={{ paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="grid-2" style={{ marginTop: '0' }}>
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
            <section className="section theme-dark" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <FadeUp>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                                Planifiez un <span className="text-gradient">Rendez-vous</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                                Choisissez un créneau de 30 minutes directement dans notre calendrier pour échanger sur vos objectifs.
                            </p>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '1rem', overflow: 'hidden' }}>
                            <div 
                                className="calendly-inline-widget" 
                                data-url="https://calendly.com/desosocalendly/30min" 
                                style={{ minWidth: '320px', height: '700px', width: '100%' }}
                            ></div>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </>
    );
};
