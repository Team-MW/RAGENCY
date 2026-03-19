import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeUp } from './FadeUp';

const faqsHome = [
    {
        q: "Qu'est-ce qui différencie R.agency des autres agences ?",
        a: "Notre ADN repose sur un mix entre stratégie analytique et créativité organique (TikTok, Reels). Nous ne sommes pas une agence traditionnelle : nous produisons du contenu pensé nativement pour les plateformes sociales, avec une équipe de talents en interne."
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

const faqsServices = [
    {
        q: "Quels réseaux sociaux gérez-vous ?",
        a: "Nous maîtrisons et activons tous les principaux leviers sociaux : TikTok, Instagram, LinkedIn, YouTube Shorts, ainsi que les stratégies de contenu qui s'y rapportent."
    },
    {
        q: "Comment définissez-vous la stratégie éditoriale ?",
        a: "Notre équipe réalise un audit en profondeur de votre image de marque, de votre concurrence et de vos cibles pour construire une ligne éditoriale impactante qui parle à votre audience."
    },
    {
        q: "Proposez-vous la gestion d'influenceurs ?",
        a: "Oui, R.agency propose un accompagnement sur les campagnes d'influence en collaborant avec des créateurs de contenu qui correspondent parfaitement à vos valeurs."
    },
    {
        q: "Pouvons-nous vous déléguer uniquement le montage ?",
        a: "Tout à fait. Nous pouvons reprendre vos propres rushs et assurer un montage dynamique, habillé et calibré aux standards actuels des vidéos virales courtes."
    }
];

const faqsAgency = [
    {
        q: "Comment se déroule le lancement d'un projet ?",
        a: "Dès validation du devis, nous organisons une réunion de lancement stratégique (kick-off) avec nos experts pour nous imprégner totalement de l'ADN de votre marque."
    },
    {
        q: "Comment mesurez-vous la performance ?",
        a: "Nous fournissons des reportings détaillés sur les KPI (couverture, engagement, conversion) afin que nos stratégies data-driven maximisent constamment votre ROI."
    },
    {
        q: "Aurez-vous un suivi personnalisé ?",
        a: "Absolument. Une équipe dédiée est assignée à votre projet, garantissant une grande réactivité et des échanges fluides au quotidien."
    },
    {
        q: "Les créateurs de contenus sont-ils internes ?",
        a: "Notre force réside dans la collaboration avec des modèles photos, créateurs UGC, et influenceurs partenaires, ce qui facilite énormément la production."
    }
];

const faqsContact = [
    {
        q: "Comment obtenir un devis ou une estimation ?",
        a: "Le plus simple est de remplir notre formulaire de contact. Nous reviendrons rapidement vers vous pour évaluer précisément vos besoins et vos objectifs."
    },
    {
        q: "Quels sont vos tarifs ?",
        a: "Nos tarifs s'adaptent au volume de contenu, aux plateformes et au niveau d'accompagnement souhaité. Chaque stratégie et devis est par définition sur-mesure."
    },
    {
        q: "Pouvons-nous vous rencontrer sur place ?",
        a: "Avec grand plaisir ! Si vous êtes dans la région toulousaine, on serait ravis d'échanger autour d'un café pour discuter de votre croissance digitale."
    },
    {
        q: "Gérez-vous des missions flash ponctuelles ?",
        a: "Bien que nous privilégions les accompagnements sur le long terme qui garantissent plus de résultats, nous restons ouverts aux prestations ponctuelles (shootings, lancements de marque)."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const location = useLocation();

    let currentFaqs = faqsHome;
    if (location.pathname === '/services') {
        currentFaqs = faqsServices;
    } else if (location.pathname === '/l-agence') {
        currentFaqs = faqsAgency;
    } else if (location.pathname === '/contact') {
        currentFaqs = faqsContact;
    }

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
                    {currentFaqs.map((faq, index) => (
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
