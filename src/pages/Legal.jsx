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
                                    <p><strong>Nom de l'entreprise :</strong> CHERRADI GHITA (R.AGENCY)</p>
                                    <p><strong>Forme juridique :</strong> Entrepreneur individuel (Micro-entreprise)</p>
                                    <p><strong>SIREN :</strong> 919 368 910</p>
                                    <p><strong>SIRET (siège) :</strong> 919 368 910 00023</p>
                                    <p><strong>Numéro de TVA :</strong> FR12919368910</p>
                                    <p><strong>Inscription au RCS :</strong> INSCRIT (au greffe de TOULOUSE, le 14/01/2025)</p>
                                    <p><strong>Numéro RCS :</strong> 919 368 910 R.C.S. Toulouse</p>
                                    <p><strong>Inscription au RNE :</strong> INSCRIT</p>
                                    <p><strong>Activité principale déclarée :</strong> J'ai une activité d'achat revente de prêt-à-porter, maroquinerie et accessoires de mode sur internet (hors produits réglementés)</p>
                                    <p><strong>Code NAF ou APE :</strong> 47.91B (Vente à distance sur catalogue spécialisé)</p>
                                    <p><strong>Domaine d’activité :</strong> Commerce de détail, à l'exception des automobiles et des motocycles</p>
                                    <p><strong>Forme d'exercice :</strong> Commerciale</p>
                                    <p><strong>Siège social :</strong> Toulouse, France</p>
                                    <p><strong>Email :</strong> r.agency98@gmail.com</p>
                                    <p><strong>Téléphone :</strong> +33 7 81 34 04 83 / +33 6 47 19 54 36</p>
                                    <p><strong>Directeur de la publication :</strong> CHERRADI GHITA</p>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}><strong>Note :</strong> Anciennement inscrite à l'ORIAS sous le numéro 22007331 en tant que Mandataire d'Intermédiaire en Assurance (MIA) sans maniement de fonds (RADIÉ depuis le 17/02/2023).</p>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>2. Hébergement</h3>
                                <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <p>Ce site est hébergé par :</p>
                                    <p><strong>Nom de l'hébergeur :</strong> Vercel Inc.</p>
                                    <p><strong>Adresse :</strong> 440 N Barranca Ave #4133 Covina, CA 91723, USA</p>
                                    <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>vercel.com</a></p>
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
