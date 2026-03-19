import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FadeUp } from '../components/FadeUp';

export const Legal = () => {
    return (
        <>
            <Helmet>
                <title>Mentions Légales | R.AGENCY</title>
                <meta name="description" content="Consultez les mentions légales de R.AGENCY, agence de communication et création de contenu basée à Toulouse." />
            </Helmet>

            <section className="section theme-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '100vh' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <FadeUp>
                        <div className="section-header">
                            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
                                Mentions <span className="text-gradient">Légales</span>
                            </h1>
                            <p className="vision-text text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                                Informations légales concernant le site web R.agency.
                            </p>
                        </div>
                    </FadeUp>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <FadeUp delay={0.1}>
                            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>1. Éditeur du site</h3>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <p><strong>Nom de l'agence :</strong> R.agency</p>
                                    <p><strong>Forme juridique :</strong> [À compléter (ex: SAS, Auto-entreprise, etc.)]</p>
                                    <p><strong>Siège social :</strong> Toulouse, France</p>
                                    <p><strong>Email :</strong> r.agency98@gmail.com</p>
                                    <p><strong>Téléphone :</strong> +33 7 81 34 04 83 / +33 6 47 19 54 36</p>
                                    <p><strong>Directeur de la publication :</strong> L'équipe de direction R.agency</p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>2. Hébergement</h3>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <p>Ce site est hébergé par :</p>
                                    <p><strong>Nom de l'hébergeur :</strong> [À compléter (ex: Vercel, Netlify, OVH...)]</p>
                                    <p><strong>Adresse de l'hébergeur :</strong> [Site de l'hébergeur]</p>
                                    <p><strong>Contact de l'hébergeur :</strong> [Contact de l'hébergeur]</p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3}>
                            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>3. Propriété intellectuelle</h3>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <p>
                                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                    </p>
                                    <p style={{ marginTop: '1rem' }}>
                                        La reproduction de tout ou partie de ce site sur quel que support que ce soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>4. Données personnelles (RGPD)</h3>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <p>
                                        D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations. Par exemple, pour traiter une demande de contact.
                                    </p>
                                    <p style={{ marginTop: '1rem' }}>
                                        Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen (RGPD), vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
                                    </p>
                                    <p style={{ marginTop: '1rem' }}>
                                        Pour exercer ces droits, veuillez nous contacter par email à l'adresse suivante : r.agency98@gmail.com
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>
        </>
    );
};
