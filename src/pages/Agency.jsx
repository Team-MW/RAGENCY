import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    CheckCircle2, Award, Camera, Target, Users, TrendingUp, Compass, 
    Layers, Zap, Sparkles, Heart, Smartphone, ArrowRight, ArrowDown, MapPin, ExternalLink 
} from 'lucide-react';
import { FadeUp } from '../components/FadeUp';
import { Marquee } from '../components/Marquee';
import { motion } from 'framer-motion';

export const Agency = () => {
    const [activeSection, setActiveSection] = useState('qui-sommes-nous');

    const brochureSections = [
        { id: 'qui-sommes-nous', title: 'Qui Sommes-Nous ?' },
        { id: 'vision-adn', title: 'Vision & ADN' },
        { id: 'methode', title: 'Notre Méthode' },
        { id: 'cas-clients', title: 'Nos Cas Clients' },
        { id: 'equipe', title: 'Notre Équipe' },
        { id: 'choisir', title: 'Pourquoi R.AGENCY ?' }
    ];

    // Details for Case Studies from PDF brochure with extracted actual images
    const caseStudies = [
        {
            name: 'TIMES SQUARE',
            tagline: 'VRAI CONTENU. VRAI IMPACT. 100% ORGANIQUE',
            category: 'Restauration & Food',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #1e1b18 100%)',
            borderColor: 'rgba(255, 107, 0, 0.2)',
            image: '/images/brochure/img-004.png'
        },
        {
            name: 'DBC TOULOUSE',
            tagline: 'CRÉER L’ATTENTION. GARDER L’ENGAGEMENT',
            category: 'High-Tech & Réparation',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #171d2c 100%)',
            borderColor: 'rgba(0, 122, 255, 0.2)',
            image: '/images/brochure/img-009.png'
        },
        {
            name: 'MARCHÉ DE MO’',
            tagline: 'DU CONTENU PENSÉ POUR ENGAGER',
            category: 'Food & Gourmet',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #1c1822 100%)',
            borderColor: 'rgba(163, 0, 255, 0.2)',
            image: '/images/brochure/img-011.png'
        },
        {
            name: 'CHAADI FOOD',
            tagline: 'VISIBILITÉ. ENGAGEMENT. IMPACT',
            category: 'Restauration & Food',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #1f1719 100%)',
            borderColor: 'rgba(255, 16, 79, 0.2)',
            image: '/images/brochure/img-015.png'
        },
        {
            name: 'META DX SCHOOL',
            tagline: 'DES VIDÉOS QUI ATTIRENT L’ATTENTION.',
            category: 'Formation & Esthétique',
            bgGradient: 'linear-gradient(135deg, #111115 0%, #161e1b 100%)',
            borderColor: 'rgba(0, 255, 128, 0.2)',
            image: '/images/brochure/img-018.png',
            website: 'https://metadxs.com'
        }
    ];

    // Client logos extracted from Page 13 of the PDF
    const clientLogos = [
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
                <title>L'Agence | Brochure interactive R.AGENCY | Communication & Création de Contenu</title>
                <meta name="description" content="Explorez la brochure complète de R.AGENCY : Qui nous sommes, notre vision, notre ADN, notre méthode en 4 étapes et nos études de cas avec images réelles." />
            </Helmet>

            {/* BACKGROUND GLOW ORBS */}
            <div className="glow-orb" style={{ top: '5%', left: '-10%', opacity: 0.15 }} />
            <div className="glow-orb" style={{ top: '45%', right: '-15%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', opacity: 0.12 }} />
            <div className="glow-orb" style={{ bottom: '5%', left: '15%', opacity: 0.15 }} />

            {/* BROCHURE HERO COVER */}
            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '4rem', position: 'relative' }}>
                <div className="container">
                    <FadeUp>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span className="section-label" style={{ letterSpacing: '0.3em' }}>Brochure Institutionnelle</span>
                            
                            <h1 style={{ 
                                fontSize: 'clamp(3rem, 7vw, 6.5rem)', 
                                fontWeight: '900', 
                                lineHeight: '0.9', 
                                fontFamily: 'Outfit',
                                textTransform: 'uppercase',
                                letterSpacing: '-0.03em',
                                margin: '1rem 0 1.5rem'
                            }}>
                                <span className="text-gradient">R.AGENCY</span>
                                <br />
                                <span style={{ fontSize: '0.45em', fontWeight: '400', letterSpacing: '0.25em', opacity: 0.8, color: '#fff' }}>CREATIVE COM</span>
                            </h1>

                            <p className="vision-text text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                                Découvrez la présentation complète de notre agence, enrichie des visuels réels extraits de notre brochure officielle. Stratégie social media, créativité et performance.
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="#sommaire" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Entrer dans la brochure <ArrowDown size={18} />
                                </a>
                                <a href="/contact" className="btn btn-glass">
                                    Discuter d'un projet
                                </a>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* SOMMAIRE DIRECTORY & INTERACTIVE ROUTING */}
            <section id="sommaire" className="section theme-light" style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                <div className="container">
                    <FadeUp>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1rem', color: 'var(--accent-base)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                                    Sommaire de la Brochure
                                </span>
                            </div>
                            
                            {/* Interactive Quick-Link Tabs */}
                            <div style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                justifyContent: 'center', 
                                gap: '0.8rem',
                                maxWidth: '1000px'
                            }}>
                                {brochureSections.map((section, idx) => (
                                    <button
                                        key={section.id}
                                        onClick={() => {
                                            setActiveSection(section.id);
                                            const element = document.getElementById(section.id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }
                                        }}
                                        style={{
                                            padding: '0.8rem 1.4rem',
                                            borderRadius: '50px',
                                            fontSize: '0.9rem',
                                            fontWeight: '700',
                                            fontFamily: 'Outfit',
                                            cursor: 'pointer',
                                            border: '1px solid var(--glass-border)',
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            background: activeSection === section.id ? 'var(--gradient-accent)' : 'var(--glass-bg)',
                                            color: activeSection === section.id ? '#fff' : 'var(--text-muted)'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeSection !== section.id) {
                                                e.currentTarget.style.color = 'var(--text-main)';
                                                e.currentTarget.style.borderColor = 'var(--accent-base)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeSection !== section.id) {
                                                e.currentTarget.style.color = 'var(--text-muted)';
                                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                            }
                                        }}
                                    >
                                        <span style={{ marginRight: '0.5rem', opacity: 0.6 }}>0{idx + 1}.</span>
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* 01 - QUI NOUS SOMMES */}
            <section id="qui-sommes-nous" className="section theme-dark" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <FadeUp>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span className="section-label">01 — Qui Nous Sommes ?</span>
                                <h2 className="section-title" style={{ marginBottom: '1.5rem', fontFamily: 'Outfit', fontWeight: '800' }}>
                                    R.AGENCY <span className="text-gradient">Social Media & Création</span>
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    R.agency est une agence de communication spécialisée dans la stratégie social media et la création de contenu.
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    Depuis plus de 4 ans, nous accompagnons des entreprises dans le développement de leur visibilité digitale à travers des contenus créatifs, authentiques et adaptés aux nouvelles tendances des réseaux sociaux.
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7' }}>
                                    Basée à Toulouse, notre agence intervient également en France, au Maroc, en Algérie et à Dubaï, avec une vision résolument internationale du marketing digital. Nous combinons stratégie, créativité et performance pour aider les marques à développer leur notoriété et à atteindre leurs objectifs de croissance.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            {/* Showcase image from Page 3 of PDF styled elegantly */}
                            <div style={{ position: 'relative', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    inset: '-10px', 
                                    background: 'var(--gradient-accent)', 
                                    opacity: 0.15, 
                                    filter: 'blur(30px)', 
                                    borderRadius: '30px', 
                                    zIndex: 0 
                                }} />
                                <div style={{ 
                                    position: 'relative', 
                                    zIndex: 1, 
                                    overflow: 'hidden', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 20px 45px rgba(0,0,0,0.6)', 
                                    border: '1px solid var(--glass-border-dark)' 
                                }}>
                                    <img 
                                        src="/images/brochure/img-000.png" 
                                        alt="R.Agency Présentation" 
                                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                    />
                                    <div style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.4) 30%, transparent 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '2.5rem'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--accent-base)' }}>
                                            <MapPin size={18} />
                                            <span style={{ fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>R.AGENCY TOULOUSE</span>
                                        </div>
                                        <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Création de contenu vidéo haut de gamme & stratégie de croissance organique.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 02 - NOTRE VISION & NOTRE ADN */}
            <section id="vision-adn" className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    
                    {/* Vision Presentation */}
                    <div style={{ marginBottom: '6rem' }}>
                        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                            <FadeUp>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className="section-label">02 — Notre Vision</span>
                                    <h2 className="section-title" style={{ fontFamily: 'Outfit', fontWeight: '800', marginBottom: '1.5rem' }}>
                                        Les marques ne se construisent plus uniquement avec de la publicité.
                                    </h2>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                        Elles se construisent aujourd'hui par l'engagement, l'authenticité et des contenus forts créés pour capter et fidéliser une communauté fidèle.
                                    </p>
                                    
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,16,79,0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Smartphone size={16} />
                                            </div>
                                            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>DU CONTENU</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,16,79,0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Sparkles size={16} />
                                            </div>
                                            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>DE LA CRÉATIVITÉ</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,16,79,0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Heart size={16} />
                                            </div>
                                            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>DE L'AUTHENTICITÉ</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,16,79,0.1)', color: 'var(--accent-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Users size={16} />
                                            </div>
                                            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>UNE COMMUNAUTÉ</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.2}>
                                {/* Page 4 brochure vision extracted image */}
                                <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
                                    <div style={{ 
                                        overflow: 'hidden', 
                                        borderRadius: '24px', 
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)', 
                                        border: '1px solid var(--glass-border)',
                                        transform: 'rotate(2deg)',
                                        transition: 'transform 0.4s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(2deg)'}
                                    >
                                        <img 
                                            src="/images/brochure/img-001.png" 
                                            alt="Brochure Vision" 
                                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </FadeUp>
                        </div>

                        <FadeUp delay={0.3}>
                            <div className="glass-panel" style={{ 
                                marginTop: '4rem', 
                                padding: '2.5rem', 
                                background: 'var(--bg-secondary)', 
                                borderLeft: '4px solid var(--accent-base)',
                                textAlign: 'center',
                                maxWidth: '850px',
                                margin: '4rem auto 0'
                            }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-base)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Notre Mission</span>
                                <p style={{ fontSize: '1.35rem', fontFamily: 'Outfit', fontWeight: '600', color: 'var(--text-main)', margin: 0 }}>
                                    “ Transformer la présence digitale de nos clients en véritable levier de croissance. ”
                                </p>
                            </div>
                        </FadeUp>
                    </div>

                    {/* ADN 3 Pillars Section */}
                    <div style={{ paddingTop: '4rem', borderTop: '1px solid var(--glass-border)' }}>
                        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                            <FadeUp>
                                {/* Page 5 brochure ADN extracted image */}
                                <div style={{ position: 'relative', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
                                    <div style={{ 
                                        overflow: 'hidden', 
                                        borderRadius: '24px', 
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)', 
                                        border: '1px solid var(--glass-border)',
                                        transform: 'rotate(-2deg)',
                                        transition: 'transform 0.4s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
                                    >
                                        <img 
                                            src="/images/brochure/img-002.png" 
                                            alt="Brochure ADN" 
                                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.2}>
                                <div>
                                    <span className="section-label">03 — Notre ADN</span>
                                    <h3 style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                                        Le contenu est le moteur principal de la visibilité digitale.
                                    </h3>
                                    
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', flexShrink: 0 }}>
                                                <Zap size={18} />
                                            </div>
                                            <div>
                                                <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: '700' }}>01. Créativité</h4>
                                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Nous produisons des contenus modernes, dynamiques et adaptés aux codes des réseaux sociaux.</p>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', flexShrink: 0 }}>
                                                <Target size={18} />
                                            </div>
                                            <div>
                                                <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: '700' }}>02. Stratégie</h4>
                                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Chaque contenu est pensé dans une stratégie globale pour maximiser la visibilité de la marque.</p>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)', flexShrink: 0 }}>
                                                <TrendingUp size={18} />
                                            </div>
                                            <div>
                                                <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: '700' }}>03. Performance</h4>
                                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Nous analysons les résultats afin d'optimiser en permanence les performances de nos vidéos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>

                </div>
            </section>

            {/* 03 - NOTRE MÉTHODE */}
            <section id="methode" className="section theme-dark" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header">
                            <span className="section-label">04 — Notre Méthode</span>
                            <h2 className="section-title" style={{ fontFamily: 'Outfit', fontWeight: '800' }}>
                                Un Workflow de Travail Structuré en 4 Étapes
                            </h2>
                            <p className="vision-text text-muted" style={{ fontSize: '1.15rem' }}>
                                Une méthodologie rigoureuse, éprouvée pour garantir une qualité constante et un alignement total sur vos objectifs.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid-2" style={{ gap: '3rem', marginTop: '4rem' }}>
                        
                        <FadeUp delay={0.1}>
                            <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ 
                                    position: 'absolute', top: '1.5rem', right: '2rem', 
                                    fontFamily: 'Outfit', fontSize: '4.5rem', fontWeight: '900', 
                                    color: 'rgba(255, 16, 79, 0.08)' 
                                }}>01</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)' }}>
                                        <Compass size={22} />
                                    </div>
                                    <h3 style={{ fontSize: '1.6rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0, color: 'var(--text-main)' }}>KICK-OFF</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Brief client approfondi</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> État des lieux de votre présence actuelle</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Veille concurrentielle & tendances</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ 
                                    position: 'absolute', top: '1.5rem', right: '2rem', 
                                    fontFamily: 'Outfit', fontSize: '4.5rem', fontWeight: '900', 
                                    color: 'rgba(255, 16, 79, 0.08)' 
                                }}>02</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)' }}>
                                        <Layers size={22} />
                                    </div>
                                    <h3 style={{ fontSize: '1.6rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0, color: 'var(--text-main)' }}>STRATÉGIE</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Définition précise des objectifs social media</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Création de la ligne éditoriale & thématiques</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Stratégie de hashtags (#) & SEO social</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Stratégies complémentaires (Ads* & Influence*)</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ 
                                    position: 'absolute', top: '1.5rem', right: '2rem', 
                                    fontFamily: 'Outfit', fontSize: '4.5rem', fontWeight: '900', 
                                    color: 'rgba(255, 16, 79, 0.08)' 
                                }}>03</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)' }}>
                                        <Camera size={22} />
                                    </div>
                                    <h3 style={{ fontSize: '1.6rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0, color: 'var(--text-main)' }}>WORKFLOW</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Production de contenu haut de gamme (photos, tournages Reels/TikTok)</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Montage rythmé & écriture de scripts accrocheurs</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Community Management (publications, modération, animation)</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ 
                                    position: 'absolute', top: '1.5rem', right: '2rem', 
                                    fontFamily: 'Outfit', fontSize: '4.5rem', fontWeight: '900', 
                                    color: 'rgba(255, 16, 79, 0.08)' 
                                }}>04</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255, 16, 79, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-base)' }}>
                                        <Award size={22} />
                                    </div>
                                    <h3 style={{ fontSize: '1.6rem', fontFamily: 'Outfit', fontWeight: '800', margin: 0, color: 'var(--text-main)' }}>SUIVI & SUCCÈS</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Mesure des performances & audiences</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Analyse fine des KPIs et ROI</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 size={16} color="var(--accent-base)" /> Recommandations stratégiques mensuelles</li>
                                </ul>
                            </div>
                        </FadeUp>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem', opacity: 0.6 }}>
                        <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>* Les stratégies publicitaires (Ads) et d'influence sont activées en fonction des besoins spécifiques et du plan validé avec le client.</span>
                    </div>
                </div>
            </section>

            {/* 04 — NOS CAS CLIENTS PHARES AVEC IMAGES */}
            <section id="cas-clients" className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                            <span className="section-label">05 — Nos Cas Clients de la Brochure</span>
                            <h2 className="section-title" style={{ fontFamily: 'Outfit', fontWeight: '800' }}>
                                Vrai Contenu. Vrai Impact. <span className="text-gradient">100% Organique</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '800px', margin: '1rem auto 0' }}>
                                Retrouvez ci-dessous les captures réelles issues de notre brochure. Pour chaque client, nous concevons des vidéos optimisées pour les réseaux sociaux.
                            </p>
                        </div>
                    </FadeUp>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {caseStudies.map((study, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <FadeUp key={study.name} delay={index * 0.1}>
                                    <div style={{ 
                                        background: study.bgGradient,
                                        border: `1px solid ${study.borderColor}`,
                                        borderRadius: '32px',
                                        padding: '3rem',
                                        display: 'grid',
                                        gridTemplateColumns: '1.2fr 0.8fr',
                                        gap: '3rem',
                                        alignItems: 'center',
                                        boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
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
                                        {/* Info Block */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', order: isEven ? 1 : 2 }}>
                                            <span style={{ 
                                                fontSize: '0.85rem', 
                                                fontWeight: '700', 
                                                textTransform: 'uppercase', 
                                                letterSpacing: '0.15em', 
                                                color: 'var(--accent-base)' 
                                            }}>
                                                {study.category}
                                            </span>
                                            
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
                                                <h3 style={{ 
                                                    fontSize: '2.6rem', 
                                                    fontFamily: 'Outfit', 
                                                    fontWeight: '900', 
                                                    margin: 0, 
                                                    color: '#fff',
                                                    letterSpacing: '-0.03em'
                                                }}>
                                                    {study.name}
                                                </h3>
                                                {study.website && (
                                                    <a 
                                                        href={study.website} 
                                                        target="_blank" 
                                                        rel="noreferrer" 
                                                        style={{ 
                                                            fontSize: '0.85rem', 
                                                            color: 'var(--accent-base)', 
                                                            background: 'rgba(255, 16, 79, 0.15)', 
                                                            border: '1px solid var(--accent-base)',
                                                            padding: '0.4rem 1rem',
                                                            borderRadius: '20px',
                                                            fontWeight: '700',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '0.35rem',
                                                            textDecoration: 'none',
                                                            height: 'fit-content'
                                                        }}
                                                    >
                                                        Visiter l'école <ExternalLink size={14} />
                                                    </a>
                                                )}
                                            </div>
                                            
                                            <p style={{ 
                                                fontSize: '1.35rem', 
                                                fontFamily: 'Outfit', 
                                                fontWeight: '600', 
                                                color: 'rgba(255,255,255,0.95)', 
                                                margin: '0.5rem 0',
                                                lineHeight: '1.4',
                                                borderLeft: '3px solid var(--accent-base)',
                                                paddingLeft: '1rem'
                                            }}>
                                                “ {study.tagline} ”
                                            </p>
                                            
                                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.98rem', lineHeight: '1.6', margin: '0.5rem 0 1rem' }}>
                                                Stratégie de contenu social media organique hautement virale. Captation professionnelle in-situ, montage dynamique et modélisation de l'attention pour capturer l'audience dès les premières secondes.
                                            </p>

                                            <div>
                                                <a href="/realisations" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}>
                                                    Voir les vidéos <ArrowRight size={16} />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Extracted Phone Mockup Visual */}
                                        <div style={{ display: 'flex', justifyContent: 'center', order: isEven ? 2 : 1 }}>
                                            <div className="phone-mockup-container" style={{ width: '100%', maxWidth: '240px' }}>
                                                <div className="phone-mockup" style={{ height: '420px', borderRadius: '30px', border: '8px solid #16161a', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
                                                    <div className="phone-notch" style={{ width: '80px', height: '12px' }}></div>
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
                </div>
            </section>

            {/* 05 — NOTRE ÉQUIPE */}
            <section id="equipe" className="section theme-dark" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <FadeUp>
                            <div>
                                <span className="section-label">06 — Notre Équipe</span>
                                <h2 className="section-title" style={{ fontFamily: 'Outfit', fontWeight: '800', marginBottom: '1.5rem' }}>
                                    Une Équipe <span className="text-gradient">Créative & Expérimentée</span>
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    Notre agence réunit des compétences pointues et complémentaires, spécialement formées à la réalisation de contenus vidéo modernes, dynamiques et qualitatifs.
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                    À la tête de l'agence, **Ghita Cherradi**, fondatrice et présente directement sur le terrain à chaque projet pour coordonner la vision créative. Elle est accompagnée d'une scénariste vidéaste pour structurer le storytelling et d'un expert en montage vidéo pour donner du rythme aux rendus.
                                </p>
                                <div className="glass-panel" style={{ 
                                    padding: '2rem', 
                                    background: 'rgba(255, 16, 79, 0.03)', 
                                    border: '1px solid rgba(255, 16, 79, 0.1)',
                                    borderRadius: '16px' 
                                }}>
                                    <h4 style={{ margin: '0 0 0.8rem', fontFamily: 'Outfit', fontWeight: '800', color: '#fff', fontSize: '1.2rem' }}>
                                        Créativité Terrain & Mobilité
                                    </h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>
                                        Nous nous déplaçons directement au sein de vos locaux avec notre matériel professionnel pour capturer l'essence de votre marque. Des figurants et modèles au choix sont également disponibles pour humaniser vos contenus.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            {/* Showcase Team Image from Page 12 of PDF */}
                            <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    inset: '-10px', 
                                    background: 'var(--gradient-accent)', 
                                    opacity: 0.15, 
                                    filter: 'blur(30px)', 
                                    borderRadius: '30px', 
                                    zIndex: 0 
                                }} />
                                <div style={{ 
                                    position: 'relative', 
                                    zIndex: 1, 
                                    overflow: 'hidden', 
                                    borderRadius: '24px', 
                                    boxShadow: '0 20px 45px rgba(0,0,0,0.6)', 
                                    border: '1px solid var(--glass-border-dark)' 
                                }}>
                                    <img 
                                        src="/images/brochure/img-022.png" 
                                        alt="R.Agency Équipe Ghita Cherradi" 
                                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                    />
                                    <div style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.2) 40%, transparent 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '2rem'
                                    }}>
                                        <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>NOTRE ÉQUIPE</h4>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-base)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ghita Cherradi & Talents créatifs</span>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    {/* CLIENT LOGOS GALLERIES FROM PAGE 13 */}
                    <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--glass-border-dark)' }}>
                        <FadeUp>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <span className="section-label">Nos Partenaires & Clients</span>
                                <h3 style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.8rem', color: 'var(--text-main)', margin: '0.5rem 0' }}>
                                    Ils nous font confiance
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
                                padding: '1.5rem',
                                background: 'rgba(255,255,255,0.01)',
                                border: '1px solid var(--glass-border-dark)',
                                borderRadius: '24px'
                            }}>
                                {clientLogos.map((logo, index) => (
                                    <div key={index} style={{ width: '100px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img 
                                            src={logo} 
                                            alt={`Client Logo ${index + 1}`} 
                                            style={{ 
                                                maxWidth: '100%', 
                                                maxHeight: '100%', 
                                                objectFit: 'contain',
                                                filter: 'grayscale(1) brightness(1.8)',
                                                opacity: 0.6,
                                                transition: 'all 0.3s'
                                            }} 
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.filter = 'grayscale(0) brightness(1)';
                                                e.currentTarget.style.opacity = '1';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.filter = 'grayscale(1) brightness(1.8)';
                                                e.currentTarget.style.opacity = '0.6';
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </FadeUp>
                    </div>

                </div>
            </section>

            {/* 06 — POURQUOI NOUS CHOISIR */}
            <section id="choisir" className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp>
                        <div className="glass-panel" style={{ 
                            padding: '5rem 3rem', 
                            background: 'var(--bg-secondary)', 
                            border: '1px solid var(--glass-border)',
                            borderRadius: '32px',
                            textAlign: 'center',
                            maxWidth: '950px',
                            margin: '0 auto',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)'
                        }}>
                            <span className="section-label" style={{ marginBottom: '1.5rem' }}>07 — Pourquoi nous choisir ?</span>
                            
                            <h2 style={{ 
                                fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
                                fontFamily: 'Outfit', 
                                fontWeight: '900', 
                                marginBottom: '2rem', 
                                lineHeight: '1.2',
                                letterSpacing: '-0.02em',
                                color: 'var(--text-main)'
                            }}>
                                Parce qu'aujourd'hui, une image forte <span className="text-gradient">fait toute la différence.</span>
                            </h2>
                            
                            <p style={{ 
                                color: 'var(--text-muted)', 
                                fontSize: '1.2rem', 
                                lineHeight: '1.7', 
                                maxWidth: '750px', 
                                margin: '0 auto 2.5rem' 
                            }}>
                                Notre agence ne crée pas simplement des vidéos : nous façonnons du contenu à haute valeur ajoutée conçu pour attirer, engager et valoriser durablement votre marque auprès de votre audience.
                            </p>

                            <div style={{ 
                                padding: '2rem', 
                                background: 'var(--glass-bg)', 
                                border: '1px solid var(--glass-border)', 
                                borderRadius: '16px',
                                display: 'inline-block',
                                maxWidth: '700px',
                                marginBottom: '3rem'
                            }}>
                                <span style={{ 
                                    fontSize: '1.45rem', 
                                    fontFamily: 'Outfit', 
                                    fontWeight: '800', 
                                    color: 'var(--accent-base)', 
                                    letterSpacing: '0.02em'
                                }}>
                                    “ Votre image mérite plus qu'une simple vidéo : elle mérite un vrai impact. ”
                                </span>
                            </div>

                            <div>
                                <a href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.2rem', fontSize: '1.05rem', fontWeight: '700' }}>
                                    Prendre Contact avec R.AGENCY <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* MARQUEE FOOTER */}
            <Marquee text="TIKTOK • REELS • SOCIAL MEDIA • IMPACT VISUEL • ENGAGEMENT • " />
            <Marquee text="R.AGENCY • STRATÉGIE • CRÉATIVITÉ • PERFORMANCE • SUCCESS • " reverse={true} />
        </>
    );
};
