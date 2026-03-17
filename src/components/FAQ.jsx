import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeUp } from './FadeUp';

const faqs = [
    {
        q: "Qu'est-ce qui différencie R.agency des autres agences ?",
        a: "Notre ADN repose sur un mix entre stratégie analytique et créativité organique (TikTok, Reels). Nous ne sommes pas une agence traditionnelle : nous produisons du contenu pensé nativement pour les plateformes sociales, avec une équipe de talents et modèles en interne."
    },
    {
        q: "Combien de temps faut-il pour voir des résultats ?",
        a: "Chaque marque est unique, mais généralement, les premiers signes de croissance organique et d'engagement apparaissent dès les 3 premières semaines, grâce à une fréquence optimisée et un contenu très qualitatif."
    },
    {
        q: "Travaillez-vous à l'international ?",
        a: "Absolument. R.agency est basée à Toulouse, mais nous opérons en France, au Maroc, en Algérie et à Dubaï. Notre vision du marketing digital est résolument internationale."
    },
    {
        q: "Proposez-vous des shootings photo et vidéo ?",
        a: "Oui, la création de contenu est au cœur de notre expertise. Nous organisons des shootings photos professionnels et des tournages vidéo orientés lifestyle, branding ou format court (TikTok/Reels)."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section theme-light" style={{ padding: '6rem 0', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <FadeUp>
                    <div className="section-header text-center" style={{ textAlign: 'center' }}>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Questions fréquentes</h2>
                        <p className="vision-text text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Tout ce que vous devez savoir sur notre méthode de travail.
                        </p>
                    </div>
                </FadeUp>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <FadeUp delay={index * 0.1} key={index}>
                            <div
                                className="glass-panel"
                                style={{
                                    marginBottom: '1rem',
                                    padding: '1.5rem 2rem',
                                    cursor: 'pointer',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)'
                                }}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 600, color: 'var(--text-main)' }}>{faq.q}</h4>
                                    {openIndex === index ? <ChevronUp size={24} color="var(--accent-base)" /> : <ChevronDown size={24} color="var(--accent-base)" />}
                                </div>
                                {openIndex === index && (
                                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
};
