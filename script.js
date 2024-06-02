const translations = {
    "pt": {
        "hero-title": "Os Melhores Tratamentos",
        "hero-subtitle": "Neuza Prado, Massoterapeuta",
        "hero-btn1": "Saiba Mais",
        "hero-btn2": "Agende Sua Sessão",
        "services-title": "Serviços",
        "service1": "Quiropraxia",
        "service2": "Drenagem",
        "service3": "Reflexologia",
        "portfolio-title": "Portfólio",
        "portfolio-desc": "Veja algumas das técnicas que utilizo:",
        "portfolio-item1": "Quiropraxia",
        "portfolio-item2": "Drenagem",
        "portfolio-item3": "Reflexologia",
        "portfolio-item4": "Shiatsu",
        "portfolio-item5": "Drenagem pós-cirurgia",
        "portfolio-item6": "Relaxamento Total",
        "blog-title": "Blog",
        "blog-desc": "Atualmente não utilizo o blog, mas em breve estarei publicando conteúdos interessantes sobre massoterapia e bem-estar.",
        "contact-title": "Contato",
        "contact-desc": "Se você quiser entrar em contato, clique no botão abaixo para me enviar uma mensagem no WhatsApp ou me encontre nas redes sociais.",
        "contact-btn": "Fale comigo no WhatsApp",
        "contact-hours": "Horários de atendimento: 8h às 22h (agende conforme disponibilidade)",
        "contact-address": "Endereço: Rua da Lua 311, Sitio Cercado, Curitiba"
    },
    "en": {
        "hero-title": "The Best Treatments",
        "hero-subtitle": "Neuza Prado, Massage Therapist",
        "hero-btn1": "Learn More",
        "hero-btn2": "Book Your Session",
        "services-title": "Services",
        "service1": "Chiropractic",
        "service2": "Lymphatic Drainage",
        "service3": "Reflexology",
        "portfolio-title": "Portfolio",
        "portfolio-desc": "See some of the techniques I use:",
        "portfolio-item1": "Chiropractic",
        "portfolio-item2": "Lymphatic Drainage",
        "portfolio-item3": "Reflexology",
        "portfolio-item4": "Shiatsu",
        "portfolio-item5": "Post-Surgery Drainage",
        "portfolio-item6": "Total Relaxation",
        "blog-title": "Blog",
        "blog-desc": "Currently not using the blog, but soon I will be posting interesting content about massage therapy and well-being.",
        "contact-title": "Contact",
        "contact-desc": "If you want to get in touch, click the button below to send me a message on WhatsApp or find me on social media.",
        "contact-btn": "Talk to me on WhatsApp",
        "contact-hours": "Service hours: 8am to 10pm (schedule according to availability)",
        "contact-address": "Address: Rua da Lua 311, Sitio Cercado, Curitiba"
    }
};

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
}

// Chamada de exemplo para alternar para o idioma inglês
switchLanguage('en');
