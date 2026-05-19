import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    ArrowRight, MapPin, Globe, Mail, Instagram, Smartphone, Sparkles, 
    Heart, Users, Target, TrendingUp, Zap, CheckCircle2, ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp } from '../components/FadeUp';
import { Marquee } from '../components/Marquee';

export const Home = () => {
    const { scrollYProgress } = useScroll();
    const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

    // Top 3 premium case studies from the brochure to display on Home
    const featuredCases = [
        {
            name: 'TIMES SQUARE',
            tagline: 'Vrai contenu. Vrai impact. 100% organique',
            category: 'Restauration & Food',
            image: '/images/brochure/img-004.png',
            borderColor: 'rgba(255, 107, 0, 0.2)',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #1c1815 100%)'
        },
        {
            name: 'DBC TOULOUSE',
            tagline: 'Créer l’attention. Garder l’engagement',
            category: 'High-Tech & Réparation',
            image: '/images/brochure/img-009.png',
            borderColor: 'rgba(0, 122, 255, 0.2)',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #151a24 100%)'
        },
        {
            name: 'META DX SCHOOL',
            tagline: 'Des vidéos qui attirent l’attention.',
            category: 'Formation & Esthétique',
            image: '/images/brochure/img-018.png',
            borderColor: 'rgba(0, 255, 128, 0.2)',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #141a18 100%)',
            website: 'https://metadxs.com'
        }
    ];

    // Grayscale partners/clients logo gallery from brochure Page 13
    const partnerLogos = [
        '/images/brochure/img-023.png',
        '/images/brochure/img-026.png',
        '/images/brochure/img-028.png',
        '/images/brochure/img-029.png',
        '/images/brochure/img-030.png',
        '/images/brochure/img-032.png',
        '/images/brochure/img-034.png',
        '/images/brochure/img-036.png'
    ];

    return (
        <>
            <Helmet>
                <title>R.AGENCY | Agence de communication & création de contenu Social Media</title>
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
                            <Link to="/l-agence" className="btn btn-glass">
                                Découvrir notre brochure
                            </Link>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.6}>
                        <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                            <a href="mailto:r.agency98@gmail.com" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid var(--accent-base)', borderRadius: '100px', width: 'fit-content', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => Object.assign(e.currentTarget.style, { background: 'rgba(255, 255, 255, 0.15)', transform: 'translateY(-2px)' })} onMouseLeave={(e) => Object.assign(e.currentTarget.style, { background: 'rgba(255, 255, 255, 0.08)', transform: 'translateY(0)' })}>
                                <Mail size={18} color="var(--text-main)" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '1rem', fontFamily: 'Outfit', color: 'var(--text-main)', letterSpacing: '0.5px', fontWeight: '600' }}>r.agency98@gmail.com</span>
                            </a>
                            <a href="https://www.instagram.com/r.agencyy/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid var(--accent-base)', borderRadius: '100px', width: 'fit-content', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => Object.assign(e.currentTarget.style, { background: 'rgba(255, 255, 255, 0.15)', transform: 'translateY(-2px)' })} onMouseLeave={(e) => Object.assign(e.currentTarget.style, { background: 'rgba(255, 255, 255, 0.08)', transform: 'translateY(0)' })}>
                                <Instagram size={18} color="var(--text-main)" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '1rem', fontFamily: 'Outfit', color: 'var(--text-main)', letterSpacing: '0.5px', fontWeight: '600' }}>@r.agencyy</span>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '100px', width: 'fit-content', backdropFilter: 'blur(10px)' }}>
                                <MapPin size={18} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '0.95rem', fontFamily: 'Outfit', color: 'var(--text-main)', letterSpacing: '0.5px' }}>Basée à <span style={{ fontWeight: '600' }}>Toulouse</span></span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '100px', width: 'fit-content', backdropFilter: 'blur(10px)' }}>
                                <Globe size={18} color="var(--accent-base)" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '0.95rem', fontFamily: 'Outfit', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>France • Maroc • Algérie • Dubaï</span>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <Marquee text="STRATÉGIE • CRÉATIVITÉ • PERFORMANCE • INFLUENCE • BRANDING • " />
            <Marquee text="TIKTOK • REELS • SHOOTING • SOCIAL MEDIA • " reverse={true} />

            {/* 02 - NOTRE VISION & VISUEL BROCHURE : LIGHT THEME */}
            <section className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <FadeUp>
                            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                                <span className="section-label">02 — Notre vision</span>
                                <h2 className="section-title">Les marques ne se construisent plus uniquement avec de la publicité.</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <p className="vision-text text-muted" style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.6' }}>
                                    Elles se construisent aujourd'hui avec du <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>contenu mobile fort</span>, de la <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>créativité authentique</span> et une <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>communauté engagée</span>.
                                </p>
                                <div style={{ padding: '2rem', borderLeft: '3px solid var(--accent-base)', background: 'var(--bg-secondary)', borderRadius: '0 12px 12px 0' }} className="glass-panel">
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: '800' }}>Notre mission :</h3>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1rem' }}>Transformer la présence digitale de nos clients en véritable levier de croissance organique.</p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            {/* Vision image from brochure embedded in Home page */}
                            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
                                <div style={{ 
                                    overflow: 'hidden', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 20px 45px rgba(0,0,0,0.12)', 
                                    border: '1px solid var(--glass-border)',
                                    transform: 'rotate(-2deg)',
                                    transition: 'transform 0.4s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                                leave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
                                >
                                    <img 
                                        src="/images/brochure/img-001.png" 
                                        alt="Notre Vision R.Agency" 
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 03 - NOTRE ADN : DARK THEME */}
            <section className="section theme-dark" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp delay={0.1}>
                        <div className="glass-panel" style={{ padding: '4rem 3rem' }}>
                            <span className="section-label">03 — Notre ADN</span>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'Outfit', fontWeight: '800' }}>Le contenu est le moteur de la visibilité.</h3>

                            <div className="grid-3" style={{ gap: '2rem' }}>
                                <FadeUp delay={0.2}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 16, 79, 0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                            <Zap size={20} />
                                        </div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0 }}>Créativité</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>Des contenus modernes, hautement rythmés et adaptés aux codes des réseaux sociaux.</p>
                                    </div>
                                </FadeUp>
                                <FadeUp delay={0.3}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 16, 79, 0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                            <Target size={20} />
                                        </div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0 }}>Stratégie</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>Chaque vidéo est pensée et calibrée dans une stratégie globale pour maximiser l'attention.</p>
                                    </div>
                                </FadeUp>
                                <FadeUp delay={0.4}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 16, 79, 0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                            <TrendingUp size={20} />
                                        </div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.4rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0 }}>Performance</h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>Nous analysons les KPIs et optimisons en permanence vos performances organiques.</p>
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* NEW SECTION: 04 — REALISATIONS PHARES DE LA BROCHURE (with Phone Mockups) */}
            <section className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                            <span className="section-label">04 — Réalisations Phares</span>
                            <h2 className="section-title">Contenu Social Media à Fort Impact</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '800px', margin: '1rem auto 0' }}>
                                Découvrez nos vidéos les plus virales produites pour nos clients, directement tirées de la brochure :
                            </p>
                        </div>
                    </FadeUp>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                        {featuredCases.map((study, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <FadeUp key={study.name} delay={index * 0.1}>
                                    <div style={{ 
                                        background: study.bgGradient,
                                        border: `1px solid ${study.borderColor}`,
                                        borderRadius: '28px',
                                        padding: '2.5rem',
                                        display: 'grid',
                                        gridTemplateColumns: '1.2fr 0.8fr',
                                        gap: '2.5rem',
                                        alignItems: 'center',
                                        boxShadow: '0 20px 45px rgba(0,0,0,0.3)',
                                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s',
                                    }}
                                    className="case-study-grid-card"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = 'var(--accent-base)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = study.borderColor;
                                    }}
                                    >
                                        {/* Texts */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', order: isEven ? 1 : 2 }}>
                                            <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-base)', letterSpacing: '0.1em' }}>
                                                {study.category}
                                            </span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                                <h3 style={{ fontSize: '2.2rem', fontFamily: 'Outfit', fontWeight: '900', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                                                    {study.name}
                                                </h3>
                                                {study.website && (
                                                    <a 
                                                        href={study.website} 
                                                        target="_blank" 
                                                        rel="noreferrer" 
                                                        style={{ 
                                                            fontSize: '0.8rem', 
                                                            color: 'var(--accent-base)', 
                                                            background: 'rgba(255, 16, 79, 0.1)', 
                                                            border: '1px solid var(--accent-base)',
                                                            padding: '0.3rem 0.8rem',
                                                            borderRadius: '20px',
                                                            fontWeight: '700',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '0.3rem',
                                                            textDecoration: 'none',
                                                            height: 'fit-content'
                                                        }}
                                                    >
                                                        Visiter l'école <ExternalLink size={12} />
                                                    </a>
                                                )}
                                            </div>
                                            <p style={{ 
                                                fontSize: '1.2rem', 
                                                fontFamily: 'Outfit', 
                                                fontWeight: '600', 
                                                color: 'rgba(255,255,255,0.95)', 
                                                margin: '0.5rem 0',
                                                borderLeft: '3px solid var(--accent-base)',
                                                paddingLeft: '0.8rem'
                                            }}>
                                                “ {study.tagline} ”
                                            </p>
                                            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: '1.5', margin: 0 }}>
                                                Vidéo courte ultra-dynamique conçue pour capter instantanément l'attention dès les premières secondes et optimiser l'engagement organique.
                                            </p>
                                        </div>

                                        {/* Extracted actual mockup image */}
                                        <div style={{ display: 'flex', justifyContent: 'center', order: isEven ? 2 : 1 }}>
                                            <div className="phone-mockup-container" style={{ width: '100%', maxWidth: '200px' }}>
                                                <div className="phone-mockup" style={{ height: '350px', borderRadius: '24px', border: '6px solid #16161a', boxShadow: '0 10px 25px rgba(0,0,0,0.6)' }}>
                                                    <div className="phone-notch" style={{ width: '70px', height: '10px' }}></div>
                                                    <div className="phone-screen">
                                                        <img 
                                                            src={study.image} 
                                                            alt={study.name} 
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeUp>
                            );
                        })}
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <Link to="/realisations" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Voir toutes nos réalisations <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: 05 — QUI SOMMES-NOUS / NOTRE ÉQUIPE DESSINÉE DE LA BROCHURE */}
            <section className="section theme-dark" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        
                        <FadeUp>
                            {/* Showcase team image from brochure Page 12 */}
                            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
                                <div style={{ 
                                    overflow: 'hidden', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 20px 45px rgba(0,0,0,0.6)', 
                                    border: '1px solid var(--glass-border-dark)',
                                    transform: 'rotate(2deg)',
                                    transition: 'transform 0.4s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                                leave={(e) => e.currentTarget.style.transform = 'rotate(2deg)'}
                                >
                                    <img 
                                        src="/images/brochure/img-022.png" 
                                        alt="L'Équipe R.Agency" 
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <span className="section-label">05 — Qui Sommes-Nous ?</span>
                            <h2 className="section-title">À propos de R.AGENCY</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                R.agency accompagne avec passion les entreprises dans le développement de leur notoriété en France et à l'international (Toulouse, Maroc, Algérie et Dubaï).
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                Dirigée sur le terrain par sa fondatrice **Ghita Cherradi**, notre équipe réunit des experts pluridisciplinaires (scénaristes, vidéastes, monteurs vidéo et créateurs de contenu) pour donner à votre marque l'image d'impact qu'elle mérite.
                            </p>
                            <Link to="/l-agence" className="btn btn-glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                En savoir plus sur l'agence <ArrowRight size={18} />
                            </Link>
                        </FadeUp>

                    </div>
                </div>
            </section>

            {/* PARTNERS / CLIENTS LOGO GALLERY FROM BROCHURE PAGE 13 */}
            <section className="section theme-light" style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
                <div className="container">
                    <FadeUp>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-base)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
                                Ils nous font confiance
                            </span>
                            <h3 style={{ margin: 0, fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.5rem', color: 'var(--text-main)' }}>
                                Les Marques de notre Réseau
                            </h3>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            gap: '3rem',
                            padding: '1rem 0'
                        }}>
                            {partnerLogos.map((logo, index) => (
                                <div key={index} style={{ width: '85px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img 
                                        src={logo} 
                                        alt={`Partner Logo ${index + 1}`} 
                                        style={{ 
                                            maxWidth: '100%', 
                                            maxHeight: '100%', 
                                            objectFit: 'contain',
                                            filter: 'grayscale(1) brightness(1.6)',
                                            opacity: 0.55,
                                            transition: 'all 0.3s'
                                        }} 
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
                                            e.currentTarget.style.opacity = '1';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.filter = 'grayscale(1) brightness(1.6)';
                                            e.currentTarget.style.opacity = '0.55';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </div>
            </section>
        </>
    );
};
