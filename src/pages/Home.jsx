import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp } from '../components/FadeUp';
import { Marquee } from '../components/Marquee';

export const Home = () => {
    const { scrollYProgress } = useScroll();
    const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

    return (
        <>
            <Helmet>
                <title>R.AGENCY | Agence de communication & création de contenu</title>
                <meta name="description" content="Développez la visibilité de votre marque grâce à nos stratégies de contenu performantes et notre approche moderne des réseaux sociaux." />
            </Helmet>
            <motion.div style={{ y: yBg1, top: '5%', left: '-10%' }} className="glow-orb" />
            <motion.div style={{ y: yBg2, top: '40%', right: '-10%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)' }} className="glow-orb" />
            <motion.div style={{ y: yBg1, bottom: '10%', left: '20%' }} className="glow-orb" />

            {/* 01 - HERO : DARK THEME */}
            <section className="hero container theme-dark">
                <div className="hero-content">
                    <FadeUp delay={0.1}>
                        <span className="section-label">Agence de communication & création de contenu</span>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <h1 className="hero-title">
                            <span className="text-gradient">Nous développons</span> la visibilité des marques.
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.3}>
                        <p className="hero-subtitle">
                            Grâce à des stratégies de contenu performantes et une approche moderne des réseaux sociaux.
                            Depuis plus de 4 ans, nous combinons stratégie, créativité et performance pour transformer votre présence digitale.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.4}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary">
                                Démarrer un projet <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="btn btn-glass">
                                Découvrir nos services
                            </Link>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.6} style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '100px', width: 'fit-content', backdropFilter: 'blur(10px)' }}>
                            <MapPin size={18} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem', fontFamily: 'Outfit', color: 'var(--text-main)', letterSpacing: '0.5px' }}>Basée à <span style={{ fontWeight: '600' }}>Toulouse</span></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '100px', width: 'fit-content', backdropFilter: 'blur(10px)' }}>
                            <Globe size={18} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem', fontFamily: 'Outfit', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>France • Maroc • Algérie • Dubaï</span>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <Marquee text="STRATÉGIE • CRÉATIVITÉ • PERFORMANCE • INFLUENCE • BRANDING • " />
            <Marquee text="TIKTOK • REELS • SHOOTING • SOCIAL MEDIA • " reverse={true} />

            {/* 02 - NOTRE VISION : LIGHT THEME */}
            <section className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header">
                            <span className="section-label">02 — Notre vision</span>
                            <h2 className="section-title">Aujourd'hui, les marques ne se construisent plus uniquement avec de la publicité.</h2>
                        </div>
                    </FadeUp>

                    <div className="grid-2">
                        <FadeUp delay={0.2}>
                            <p className="vision-text text-muted">
                                Elles se construisent avec <span style={{ color: 'var(--text-main)' }}>du contenu</span>, de la <span style={{ color: 'var(--text-main)' }}>créativité</span>, de <span style={{ color: 'var(--text-main)' }}>l'authenticité</span> et une <span style={{ color: 'var(--text-main)' }}>communauté engagée</span>.
                            </p>
                            <div style={{ marginTop: '2rem', padding: '2rem', borderLeft: '3px solid var(--accent-base)' }} className="glass-panel">
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Notre mission est simple :</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Transformer la présence digitale de nos clients en véritable levier de croissance.</p>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 03 - NOTRE ADN : DARK THEME */}
            <section className="section theme-dark">
                <div className="container">
                    <FadeUp delay={0.1}>
                        <div className="glass-panel" style={{ padding: '4rem' }}>
                            <span className="section-label">03 — Notre ADN</span>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Le contenu est le moteur de la visibilité digitale.</h3>

                            <div className="grid-3">
                                <FadeUp delay={0.2}>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '1rem' }}>Créativité</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Des contenus modernes, dynamiques et adaptés aux codes des réseaux sociaux.</p>
                                    </div>
                                </FadeUp>
                                <FadeUp delay={0.3}>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '1rem' }}>Stratégie</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Chaque contenu est pensé dans une stratégie globale pour maximiser la visibilité.</p>
                                    </div>
                                </FadeUp>
                                <FadeUp delay={0.4}>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '1rem' }}>Performance</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Nous analysons les résultats afin d'optimiser en permanence vos performances.</p>
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

        </>
    );
};
