import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, Flame, Dumbbell, UtensilsCrossed, Sparkles, GraduationCap, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeUp } from '../components/FadeUp';
import { Marquee } from '../components/Marquee';

const REALISATIONS_DATA = [
    {
        id: '1',
        videoId: '7532518749199437078',
        client: 'DBC Toulouse',
        category: 'Sport & Fitness',
        categorySlug: 'sport',
        stats: { views: '380K+', engagement: '18K+' },
        title: 'DBC Toulouse - Crossfit & Force',
        description: 'Mise en avant immersive de la box d\'entraînement DBC Toulouse avec un rythme ultra-dynamique, des transitions millimétrées et une ambiance underground.',
        tags: ['Crossfit', 'Énergie', 'Montage Rythmé']
    },
    {
        id: '2',
        videoId: '7596424505250073878',
        client: 'DBC Toulouse',
        category: 'Sport & Fitness',
        categorySlug: 'sport',
        stats: { views: '240K+', engagement: '12K+' },
        title: 'DBC Toulouse - Workout Motivation',
        description: 'Vidéo focus sur le dépassement de soi et le coaching personnalisé. Impact visuel fort conçu pour capter instantanément l\'attention de l\'audience fitness.',
        tags: ['Motivation', 'Coaching', 'Impact Visuel']
    },
    {
        id: '3',
        videoId: '7632431821871009027',
        client: 'Times Square Toulouse',
        category: 'Food & Restauration',
        categorySlug: 'food',
        stats: { views: '550K+', engagement: '32K+' },
        title: 'Times Square - Diner & Burgers',
        description: 'Vidéo culinaire ultra-gourmande de type "food-porn" pour le restaurant Times Square Toulouse. Focus sur la texture des burgers et le storytelling.',
        tags: ['Food Porn', 'Burgers', 'Storytelling']
    },
    {
        id: '4',
        videoId: '7630866980035235094',
        client: 'Times Square Toulouse',
        category: 'Food & Restauration',
        categorySlug: 'food',
        stats: { views: '420K+', engagement: '25K+' },
        title: 'Times Square - Expérience Client',
        description: 'Présentation de l\'ambiance chaleureuse du restaurant. Combinaison de plans larges esthétiques et de plans serrés ultra-détaillés.',
        tags: ['Ambiance', 'Détails', 'Expérience']
    },
    {
        id: '5',
        videoId: '7583064141607472407',
        client: 'L\'Atelier White',
        category: 'Beauté & Esthétique',
        categorySlug: 'beauty',
        stats: { views: '310K+', engagement: '15K+' },
        title: 'L\'Atelier White - Esthétique Premium',
        description: 'Vidéo esthétique haut de gamme mettant en valeur les soins d\'exception de L\'Atelier White à Toulouse. Tons épurés, ambiance chic et design minimaliste.',
        tags: ['Beauté', 'Teeth Whitening', 'Premium']
    },
    {
        id: '6',
        videoId: '7582206178340408598',
        client: 'L\'Atelier White',
        category: 'Beauté & Esthétique',
        categorySlug: 'beauty',
        stats: { views: '280K+', engagement: '14K+' },
        title: 'L\'Atelier White - Routine & Bien-être',
        description: 'Focus sur l\'expérience client exclusive au sein du salon. Combinaison idéale d\'esthétique épurée et d\'efficacité commerciale (Social Selling).',
        tags: ['Routine', 'Bien-être', 'Minimaliste']
    },
    {
        id: '7',
        videoId: '7628553605062200598',
        client: 'Meta DX School',
        category: 'Formation & Éducation',
        categorySlug: 'education',
        stats: { views: '150K+', engagement: '9K+' },
        title: 'Meta DX School - Formations d\'Excellence',
        description: 'Présentation de l\'école de formation esthétique Meta DX School. Une vidéo professionnelle à visée éducative, alliant expertise médicale et clarté pédagogique.',
        tags: ['Formation', 'Esthétique Médicale', 'Pédagogie']
    }
];

const CATEGORIES = [
    { name: 'Tous', slug: 'all' },
    { name: 'Sport & Fitness', slug: 'sport' },
    { name: 'Food & Restauration', slug: 'food' },
    { name: 'Beauté & Esthétique', slug: 'beauty' },
    { name: 'Formation', slug: 'education' }
];

export const Realisations = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loadedCount, setLoadedCount] = useState(0);
    const [loading, setLoading] = useState(true);

    // Safeguard timeout to ensure preloader fades out in maximum 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5500);
        return () => clearTimeout(timer);
    }, []);

    const handleIframeLoad = () => {
        setLoadedCount(prev => {
            const next = prev + 1;
            // When all 7 videos are loaded, hide the preloader
            if (next >= REALISATIONS_DATA.length) {
                setLoading(false);
            }
            return next;
        });
    };

    const filteredRealisations = selectedCategory === 'all'
        ? REALISATIONS_DATA
        : REALISATIONS_DATA.filter(item => item.categorySlug === selectedCategory);

    // Calculate real-time loading progress percentage
    const progress = Math.min(100, Math.round((loadedCount / REALISATIONS_DATA.length) * 100));

    // Category icon helper to avoid dynamic JSX components in object variables
    const renderCategoryIcon = (slug, size) => {
        switch (slug) {
            case 'sport':
                return <Dumbbell size={size} />;
            case 'food':
                return <UtensilsCrossed size={size} />;
            case 'beauty':
                return <Sparkles size={size} />;
            case 'education':
                return <GraduationCap size={size} />;
            default:
                return <Sparkles size={size} />;
        }
    };

    return (
        <>
            <Helmet>
                <title>Nos Réalisations | Création de Contenu Social Media & Vidéos Virales | R.AGENCY</title>
                <meta name="description" content="Découvrez nos vidéos TikTok & Reels à fort impact et ultra-virales produites pour nos clients à Toulouse et à l'international : DBC Toulouse, L'Atelier White, Times Square, Meta DX School." />
            </Helmet>

            {/* HIGH-END PRELOADER OVERLAY */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        className="preloader-overlay"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="preloader-content">
                            <div className="preloader-logo-container">
                                <div className="preloader-logo-glow" />
                                <span className="preloader-logo-text text-gradient">R.A</span>
                            </div>
                            <h2 className="preloader-title">Propulsion de la Viralité</h2>
                            <div className="preloader-progress-container">
                                <div 
                                    className="preloader-progress-bar" 
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="preloader-status">
                                {progress < 100 
                                    ? `Initialisation des vidéos créatives... ${progress}%`
                                    : 'Prêt à performer !'
                                }
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background glowing orbs */}
            <div className="glow-orb" style={{ top: '5%', left: '-10%', opacity: 0.2 }} />
            <div className="glow-orb" style={{ top: '45%', right: '-15%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', opacity: 0.15 }} />
            <div className="glow-orb" style={{ bottom: '5%', left: '15%', opacity: 0.2 }} />

            {/* HERO SECTION */}
            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <span className="section-label">10 — Nos réalisations</span>
                            <h1 className="section-title">Créations <span className="text-gradient">Social Media</span> Impactantes</h1>
                            <p className="vision-text text-muted" style={{ fontSize: '1.2rem', marginTop: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                                Découvrez une sélection de nos vidéos TikTok et Reels conçues pour performer. 
                                Nous mettons notre savoir-faire au service de la notoriété de nos clients en produisant des formats courts haut de gamme, dynamiques et viraux.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* MARQUEE */}
            <Marquee text="VIRALITÉ • TIKTOK • REELS • IMPACT VISUEL • ENGAGEMENT • " />
            <Marquee text="DBC TOULOUSE • L'ATELIER WHITE • TIMES SQUARE • META DX SCHOOL • " reverse={true} />

            {/* PORTFOLIO GRID SECTION */}
            <section className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    
                    {/* Category Filter */}
                    <FadeUp delay={0.1}>
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            gap: '0.8rem', 
                            flexWrap: 'wrap', 
                            marginBottom: '4rem',
                            padding: '0.5rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '100px',
                            maxWidth: '780px',
                            margin: '0 auto 4rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem', color: 'var(--text-muted)' }} className="hide-mobile-label">
                                <Filter size={18} />
                                <span style={{ fontSize: '0.9rem', fontWeight: '600', fontFamily: 'Outfit', textTransform: 'uppercase' }}>Filtrer:</span>
                            </div>
                            {CATEGORIES.map(category => (
                                <button
                                    key={category.slug}
                                    onClick={() => setSelectedCategory(category.slug)}
                                    style={{
                                        padding: '0.8rem 1.6rem',
                                        borderRadius: '50px',
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        fontFamily: 'Outfit',
                                        cursor: 'pointer',
                                        border: 'none',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        background: selectedCategory === category.slug ? 'var(--gradient-accent)' : 'transparent',
                                        color: selectedCategory === category.slug ? '#fff' : 'var(--text-muted)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (selectedCategory !== category.slug) {
                                            e.currentTarget.style.color = 'var(--text-main)';
                                            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedCategory !== category.slug) {
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Videos Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                        gap: '3rem',
                        alignItems: 'start'
                    }}>
                        <AnimatePresence mode="popLayout">
                            {filteredRealisations.map((item, index) => {
                                return (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {/* CSS Phone Mockup containing the TikTok Embed (Loading in background) */}
                                        <div className="phone-mockup-container" style={{ position: 'relative', width: '100%', maxWidth: '320px', marginBottom: '1.5rem' }}>
                                            <div className="phone-mockup">
                                                <div className="phone-notch"></div>
                                                <div className="phone-screen">
                                                    <iframe
                                                        src={`https://www.tiktok.com/embed/v2/${item.videoId}`}
                                                        style={{ width: '100%', height: '100%', border: 'none' }}
                                                        allow="autoplay; encrypted-media; picture-in-picture"
                                                        allowFullScreen
                                                        title={item.title}
                                                        onLoad={handleIframeLoad}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Video Meta/Info card */}
                                        <div className="glass-panel" style={{ 
                                            padding: '1.8rem', 
                                            width: '100%', 
                                            maxWidth: '320px', 
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid var(--glass-border)',
                                            textAlign: 'left'
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <div style={{ 
                                                        width: '32px', 
                                                        height: '32px', 
                                                        borderRadius: '8px', 
                                                        background: 'rgba(255, 16, 79, 0.1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'var(--accent-base)'
                                                    }}>
                                                        {renderCategoryIcon(item.categorySlug, 16)}
                                                    </div>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: '700', fontFamily: 'Outfit', color: 'var(--accent-base)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                        {item.category}
                                                    </span>
                                                </div>
                                                <span style={{ 
                                                    fontSize: '0.8rem', 
                                                    color: 'var(--text-muted)', 
                                                    background: 'var(--glass-bg)', 
                                                    padding: '0.3rem 0.6rem', 
                                                    borderRadius: '20px',
                                                    border: '1px solid var(--glass-border)',
                                                    fontWeight: '600'
                                                }}>
                                                    @{item.client.toLowerCase().replace(/\s/g, '')}
                                                </span>
                                            </div>

                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: '700' }}>
                                                {item.title}
                                            </h3>
                                            
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.5', marginBottom: '1.2rem', minHeight: '65px' }}>
                                                {item.description}
                                            </p>

                                            {/* Highlight stats */}
                                            <div style={{ 
                                                display: 'flex', 
                                                gap: '1.5rem', 
                                                borderTop: '1px solid var(--glass-border)', 
                                                paddingTop: '1rem',
                                                marginBottom: '1rem'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                                                    <Eye size={16} color="var(--accent-base)" />
                                                    <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>{item.stats.views}</span>
                                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vues</span>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                                                    <Flame size={16} color="var(--accent-secondary)" />
                                                    <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>{item.stats.engagement}</span>
                                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Eng.</span>
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                                                {item.tags.map(tag => (
                                                    <span key={tag} style={{
                                                        fontSize: '0.75rem',
                                                        color: 'var(--text-muted)',
                                                        background: 'rgba(0, 0, 0, 0.03)',
                                                        padding: '0.2rem 0.5rem',
                                                        borderRadius: '4px',
                                                        fontWeight: '500'
                                                    }}>
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            {/* CALL TO ACTION SECTION */}
            <section className="section theme-dark" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeUp>
                        <div className="glass-panel" style={{ 
                            padding: '4rem 3rem', 
                            textAlign: 'center', 
                            maxWidth: '900px', 
                            margin: '0 auto',
                            background: 'rgba(255, 255, 255, 0.01)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            <span className="section-label" style={{ marginBottom: '1.5rem' }}>Lancez votre viralité</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                Vous souhaitez transformer votre image et exploser vos scores ?
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
                                Nos équipes de créateurs, cadreurs, monteurs et community managers sont prêtes à propulser vos réseaux sociaux au niveau supérieur.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Discuter de vos vidéos <ArrowRight size={20} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </>
    );
};
