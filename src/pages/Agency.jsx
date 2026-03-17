import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Award, Camera, Target, Users, TrendingUp } from 'lucide-react';
import { FadeUp } from '../components/FadeUp';

export const Agency = () => {
    return (
        <>
            <Helmet>
                <title>L'Agence | Méthode, Résultats & Équipe | R.AGENCY</title>
                <meta name="description" content="Découvrez notre méthode en 4 étapes, nos résultats (+11M de vues générées) et notre équipe de talents dédiés à la création de contenu." />
            </Helmet>
            {/* 05 - NOTRE MÉTHODE : DARK THEME */}
            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header">
                            <span className="section-label">05 — Notre méthode</span>
                            <h2 className="section-title">4 étapes clés vers le succès</h2>
                        </div>
                    </FadeUp>

                    <div className="grid-2">
                        <FadeUp delay={0.1}>
                            <div className="glass-panel method-step">
                                <div className="step-number">01</div>
                                <h3 className="step-title">Analyse</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Étude approfondie de votre marque, de votre marché et de votre audience cible.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div className="glass-panel method-step">
                                <div className="step-number">02</div>
                                <h3 className="step-title">Stratégie</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Création d'une stratégie social media sur-mesure adaptée à vos objectifs spécifiques.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <div className="glass-panel method-step">
                                <div className="step-number">03</div>
                                <h3 className="step-title">Création</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Production de contenus visuels et éditoriaux, créatifs et fortement engageants.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <div className="glass-panel method-step">
                                <div className="step-number">04</div>
                                <h3 className="step-title">Performance</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Analyse constante des résultats et optimisation continue pour maximiser le ROI.</p>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 06 - NOS RÉSULTATS : LIGHT THEME */}
            <section className="section theme-light" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeUp>
                        <div className="section-header text-center" style={{ textAlign: 'center' }}>
                            <span className="section-label">06 — Nos résultats</span>
                            <h2 className="section-title">Depuis la création de l'agence</h2>
                        </div>
                    </FadeUp>

                    <div className="grid-4">
                        <FadeUp delay={0.1}>
                            <div className="glass-panel stat-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="stat-number text-gradient">+11M</div>
                                <div className="stat-label">Vues générées</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <div className="glass-panel stat-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="stat-number text-gradient">+42K</div>
                                <div className="stat-label">Abonnés générés</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <div className="glass-panel stat-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="stat-number text-gradient">+50</div>
                                <div className="stat-label">Clients accompagnés</div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.4}>
                            <div className="glass-panel stat-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}>
                                <div className="stat-number text-gradient">+500</div>
                                <div className="stat-label">Vidéos produites</div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* 07 - NOS CLIENTS / 08 - NOTRE ÉQUIPE / 09 - POURQUOI NOUS : DARK THEME */}
            <section className="section theme-dark" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="grid-3">
                        <FadeUp delay={0.1}>
                            <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
                                <span className="section-label">07 — Nos clients</span>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Secteurs d'activité</h3>
                                <ul className="service-list">
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Esthétique</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Automobile</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Commerce & Retail</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Services</li>
                                    <li><CheckCircle2 size={16} color="var(--accent-base)" /> Marques personnelles</li>
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="glass-panel" style={{ padding: '3rem', height: '100%', background: 'var(--gradient-accent)' }}>
                                <span className="section-label" style={{ color: '#fff' }}>08 — Notre équipe</span>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>10 talents dédiés</h3>
                                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                    Sami, Nabil, Ynes, Fares, Faycel à la direction.
                                </p>
                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                                    En collaboration avec des modèles photo, des créateurs de contenu et deux influenceuses partenaires.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
                                <span className="section-label">09 — Pourquoi nous ?</span>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>L'avantage R.Agency</h3>
                                <ul className="service-list">
                                    <li><Award size={16} color="var(--accent-base)" /> Expertise social media</li>
                                    <li><Camera size={16} color="var(--accent-base)" /> Création de contenu moderne</li>
                                    <li><TrendingUp size={16} color="var(--accent-base)" /> Stratégie orientée résultats</li>
                                    <li><Users size={16} color="var(--accent-base)" /> Équipe créative et réactive</li>
                                    <li><Target size={16} color="var(--accent-base)" /> Approche personnalisée</li>
                                </ul>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </>
    );
};
