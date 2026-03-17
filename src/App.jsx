import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Camera, 
  CheckCircle2,
  MapPin,
  Globe,
  Phone,
  Mail,
  Instagram,
  Search,
  PenTool,
  TrendingUp,
  Award,
  Users,
  Video,
  Target
} from 'lucide-react';
import './App.css';

const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <>
      <nav className="nav">
        <div className="logo">R.AGENCY</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">À Propos</a>
          <a href="#services" className="nav-link">Expertise</a>
          <a href="#method" className="nav-link">Méthode</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <motion.div style={{ y: yBg1 }} className="glow-orb" style={{ top: '5%', left: '-10%' }} />
      <motion.div style={{ y: yBg2 }} className="glow-orb" style={{ top: '40%', right: '-10%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)' }} />
      <motion.div style={{ y: yBg1 }} className="glow-orb" style={{ bottom: '10%', left: '20%' }} />

      {/* 01 - HERO / QUI SOMMES-NOUS */}
      <section className="hero container">
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
              <a href="#contact" className="btn btn-primary">
                Démarrer un projet <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn btn-glass">
                Découvrir nos services
              </a>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.6} className="mt-12" style={{ marginTop: '4rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', opacity: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="var(--accent-base)" />
              <span style={{ fontSize: '0.9rem', fontFamily: 'Outfit' }}>Basée à Toulouse</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={18} color="var(--accent-base)" />
              <span style={{ fontSize: '0.9rem', fontFamily: 'Outfit' }}>France • Maroc • Algérie • Dubaï</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 02 - NOTRE VISION */}
      <section id="about" className="section container">
        <FadeUp>
          <div className="section-header">
            <span className="section-label">02 — Notre vision</span>
            <h2 className="section-title">Aujourd'hui, les marques ne se construisent plus uniquement avec de la publicité.</h2>
          </div>
        </FadeUp>
        
        <div className="grid-2">
          <FadeUp delay={0.2}>
            <p className="vision-text text-muted">
              Elles se construisent avec <span>du contenu</span>, de la <span>créativité</span>, de <span>l'authenticité</span> et une <span>communauté engagée</span>.
            </p>
            <div style={{ marginTop: '2rem', padding: '2rem', borderLeft: '3px solid var(--accent-base)' }} className="glass-panel">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Notre mission est simple :</h3>
              <p style={{ color: 'var(--text-muted)' }}>Transformer la présence digitale de nos clients en véritable levier de croissance.</p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            {/* 03 - NOTRE ADN */}
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <span className="section-label">03 — Notre ADN</span>
              <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Le contenu est le moteur de la visibilité digitale.</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Créativité</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Des contenus modernes, dynamiques et adaptés aux codes des réseaux sociaux.</p>
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Stratégie</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Chaque contenu est pensé dans une stratégie globale pour maximiser la visibilité.</p>
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Performance</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Nous analysons les résultats afin d'optimiser en permanence vos performances.</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 04 - NOS SERVICES */}
      <section id="services" className="section container">
        <FadeUp>
          <div className="section-header text-center" style={{ textAlign: 'center' }}>
            <span className="section-label">04 — Nos services</span>
            <h2 className="section-title">Notre Expertise Digitale</h2>
          </div>
        </FadeUp>

        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <FadeUp delay={0.1}>
            <div className="glass-panel service-card">
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
            <div className="glass-panel service-card">
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
            <div className="glass-panel service-card">
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
            <div className="glass-panel service-card">
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
            <div className="glass-panel service-card">
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
      </section>

      {/* 05 - NOTRE MÉTHODE */}
      <section id="method" className="section container">
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
      </section>

      {/* 06 - NOS RÉSULTATS */}
      <section className="section container">
        <FadeUp>
          <div className="section-header text-center" style={{ textAlign: 'center' }}>
            <span className="section-label">06 — Nos résultats</span>
            <h2 className="section-title">Depuis la création de l'agence</h2>
          </div>
        </FadeUp>

        <div className="grid-4">
          <FadeUp delay={0.1}>
            <div className="glass-panel stat-card">
              <div className="stat-number text-gradient">+11M</div>
              <div className="stat-label">Vues générées</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="glass-panel stat-card">
              <div className="stat-number text-gradient">+42K</div>
              <div className="stat-label">Abonnés générés</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="glass-panel stat-card">
              <div className="stat-number text-gradient">+50</div>
              <div className="stat-label">Clients accompagnés</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="glass-panel stat-card">
              <div className="stat-number text-gradient">+500</div>
              <div className="stat-label">Vidéos produites</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 07 - NOS CLIENTS / 08 - NOTRE ÉQUIPE / 09 - POURQUOI NOUS */}
      <section className="section container">
        <div className="grid-3">
          <FadeUp delay={0.1}>
            <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
              <span className="section-label">07 — Nos clients</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Secteurs d'activité</h3>
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
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                Sami, Nabil, Ynes, Fares, Faycel à la direction.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                En collaboration avec des modèles photo, des créateurs de contenu et deux influenceuses partenaires.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
             <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
              <span className="section-label">09 — Pourquoi nous ?</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>L'avantage R.Agency</h3>
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
      </section>

      {/* 10 - CONTACT / FOOTER */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="grid-2">
            <FadeUp delay={0.1}>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Prêt à développer votre <span className="text-gradient">visibilité</span> ?</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px' }}>
                Nous accompagnons les marques qui souhaitent atteindre un nouveau niveau de visibilité digitale. Écrivez-nous pour discuter de votre projet.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://instagram.com/r.agency" target="_blank" rel="noreferrer" className="btn btn-glass" style={{ padding: '1rem', borderRadius: '50%' }}>
                  <Instagram size={24} />
                </a>
                <a href="#" className="btn btn-glass" style={{ padding: '1rem', borderRadius: '50%' }}>
                  <Video size={24} /> {/* Assuming TikTok Icon placeholder */}
                </a>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={24} /></div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Localisation</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Toulouse <br/>(France • Maroc • Algérie • Dubaï)</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={24} /></div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Téléphone</h4>
                    <p style={{ color: 'var(--text-muted)' }}>+33 7 81 34 04 83<br/>+33 6 47 19 54 36</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Mail size={24} /></div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-muted)' }}>r.agency98@gmail.com</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
          
          <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>© {new Date().getFullYear()} R.AGENCY. Agence de communication & création de contenu. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
