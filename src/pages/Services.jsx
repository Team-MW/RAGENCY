import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, MessageSquare, PenTool, Target, Users, Video } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

export const Services = () => {
    return (
        <>
            <Helmet>
                <title>Nos Services | Stratégie, Création & Social Media | R.AGENCY</title>
                <meta name="description" content="Découvrez nos services d'agence de communication : stratégie social media, création de contenu TikTok / Reels, influence, community management et branding." />
            </Helmet>
            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center' }}>
                            <span className="section-label">04 — Nos services</span>
                            <h1 className="section-title">Notre <span className="text-gradient">Expertise Digitale</span></h1>
                            <p className="vision-text text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                                Nous construisons des stratégies digitales adaptées à votre marque et à vos objectifs pour maximiser votre visibilité.
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            <section className="section theme-light" style={{ padding: '4rem 0 8rem 0' }}>
                <div className="container">
                    <div className="grid-3" style={{ marginBottom: '2rem' }}>
                        <FadeUp delay={0.1}>
                            <div className="glass-panel service-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="service-icon"><Target size={30} /></div>
                                <h3 className="service-title">Stratégie Social Media</h3>
                                <ul className="service-list">
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Audit des réseaux sociaux</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Stratégie de contenu</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Planning éditorial</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Analyse des performances</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="glass-panel service-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="service-icon"><Video size={30} /></div>
                                <h3 className="service-title">Création de Contenu</h3>
                                <ul className="service-list">
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Vidéos TikTok / Reels</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Shootings photo pro</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Lifestyle & branding</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Storytelling de marque</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="glass-panel service-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="service-icon"><MessageSquare size={30} /></div>
                                <h3 className="service-title">Community Management</h3>
                                <ul className="service-list">
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Publication des contenus</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Gestion de la communauté</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Interaction audience</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Analyse des performances</li>
                                </ul>
                            </div>
                        </FadeUp>
                    </div>

                    <div className="grid-2">
                        <FadeUp delay={0.4}>
                            <div className="glass-panel service-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="service-icon"><Users size={30} /></div>
                                <h3 className="service-title">Influence</h3>
                                <ul className="service-list">
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Créateurs de contenu</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Placement de produits</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Stratégie d'influence</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.5}>
                            <div className="glass-panel service-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="service-icon"><PenTool size={30} /></div>
                                <h3 className="service-title">Branding</h3>
                                <ul className="service-list">
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Identité visuelle</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Direction artistique</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Stratégie de marque</li>
                                </ul>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </>
    );
};
