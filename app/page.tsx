import BookingForm from "./BookingForm";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const instagramUrl = "https://www.instagram.com/manoa.tour/";
const tourReelUrl = "https://www.instagram.com/manoa.tour/reel/DV9y_xxiggt/";

function whatsappUrl(message: string) {
  return `https://wa.me/5524992958552?text=${encodeURIComponent(message)}`;
}

const generalContactUrl = whatsappUrl(
  "Olá, Manoa! Gostaria de conhecer as opções de passeio em Angra dos Reis.",
);
const sharedContactUrl = whatsappUrl(
  "Olá, Manoa! Tenho interesse no passeio compartilhado. Poderia informar as próximas datas, valores e disponibilidade?",
);
const privateContactUrl = whatsappUrl(
  "Olá, Manoa! Tenho interesse em um passeio privativo. Poderia informar as possibilidades de rota, valores e disponibilidade?",
);
const stayContactUrl = whatsappUrl(
  "Olá, Manoa! Gostaria de receber orientações de regiões e parceiros para hospedagem em Angra dos Reis.",
);
const routeContactUrl = whatsappUrl(
  "Olá, Manoa! Gostaria de conhecer as possibilidades de rota para um passeio em Angra dos Reis.",
);

const faqs = [
  {
    question: "Como faço para agendar um passeio?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp. Informe a data desejada, o número de pessoas e a preferência entre passeio compartilhado ou privativo.",
  },
  {
    question: "Qual é a duração e o local de embarque?",
    answer:
      "O passeio tem duração aproximada de 6 horas. O embarque normalmente acontece no Clube ARMC; o ponto é confirmado com o Manoa antes da saída.",
  },
  {
    question: "Os valores aparecem no site?",
    answer:
      "Não. Valores, vagas e disponibilidade variam conforme a data e a experiência escolhida; a confirmação é feita diretamente pelo WhatsApp.",
  },
  {
    question: "Posso conversar sobre a rota antes de reservar?",
    answer:
      "Sim. O Manoa apresenta as possibilidades de rota para ajudar você a escolher a opção mais adequada ao perfil do grupo.",
  },
  {
    question: "O Manoa oferece hospedagem?",
    answer:
      "O Manoa não oferece hospedagem, mas pode indicar regiões e parceiros locais para você avaliar e contratar diretamente.",
  },
];

const testimonials = [
  {
    quote: "Passeio perfeito, @manoa.tour é o melhor passeio de Angra! Satisfação do início ao fim. Obrigada pelo dia incrível.",
    author: "@milatalyuli",
  },
  {
    quote: "Amamos o passeio, Sr. Silas! Nos sentimos muito bem acolhidos pelo senhor e pelo seu filho. Paraíso é subestimação para estas praias lindas.",
    author: "@cuorejewels",
  },
  {
    quote: "Adoramos os passeios, foram super agradáveis. O barco é excelente e confortável, nos sentimos completamente seguros com o piloto.",
    author: "@betevcota",
  },
  {
    quote: "Só penso em voltar. Indico demais seus passeios, não só pela recepção no seu barco como pela segurança na pilotagem.",
    author: "@scottyarella",
  },
  {
    quote: "Amamos o passeio e o barco. Fomos muito bem recebidos também.",
    author: "@pereirameri",
  },
  {
    quote: "Que passeio top! Obrigada pelo dia incrível que nos proporcionou.",
    author: "@katiaa_asjlva",
  },
  {
    quote: "Foi lindo. Adoramos o passeio.",
    author: "@daniellarribeirobr",
  },
  {
    quote: "Saudades deste lugar. Louco para voltar novamente, principalmente com o Silas, muito atencioso e prestativo.",
    author: "@geovani.geo.395",
  },
  {
    quote: "Ameiiii esse passeio. Top demais. Vocês são 10.",
    author: "@talita_t_silva",
  },
  {
    quote: "Foi maravilhoso! Obrigada a vocês, foi incrível.",
    author: "@nayracmiranda",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Manoa Tour — início">
          <img src="/manoa-profile.jpg" width="150" height="150" alt="" />
          <span>
            <strong>manoa.tour</strong>
            <small>Angra dos Reis</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#passeios">Passeios</a>
          <a href="#destinos">Destinos</a>
          <a href="#experiencia">O Manoa</a>
          <a href="#reserva">Reservar</a>
        </nav>

        <a className="header-cta" href={generalContactUrl} target="_blank" rel="noreferrer">
          <FaWhatsapp aria-hidden="true" /> Falar com o Manoa
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#passeios">Passeios</a>
            <a href="#destinos">Destinos</a>
            <a href="#experiencia">O Manoa</a>
            <a href="#reserva">Reservar</a>
            <a href={generalContactUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light"><span /> Passeios em Angra dos Reis</p>
          <h1>Seu dia em Angra <em>começa no mar.</em></h1>
          <p className="hero-lead">
            Passeios compartilhados ou privativos para conhecer ilhas, praias e águas
            cristalinas com orientação direta do Manoa.
          </p>
          <div className="hero-actions">
            <a className="button button--white" href="#passeios">Conhecer os passeios <span aria-hidden="true">↓</span></a>
            <a className="text-link text-link--light" href={generalContactUrl} target="_blank" rel="noreferrer">
              Consultar disponibilidade <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img
            src="/barco-manoa-lateral.png"
            width="870"
            height="843"
            alt="Barco do Manoa navegando em águas claras de Angra dos Reis"
          />
          <div className="hero-location"><small>Destino</small><strong>Angra dos Reis</strong><span>Costa Verde • RJ</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais do Manoa">
        <div><span>01</span><strong>Aproximadamente 6 horas</strong><small>Duração estimada do passeio.</small></div>
        <div><span>02</span><strong>Embarque no Clube ARMC</strong><small>Local normalmente utilizado.</small></div>
        <div><span>03</span><strong>Escolha orientada</strong><small>Compartilhado ou privativo para o seu grupo.</small></div>
        <div><span>04</span><strong>Atendimento direto</strong><small>Valores e agendamento pelo WhatsApp.</small></div>
      </section>

      <section className="section tours" id="passeios">
        <div className="section-heading">
          <p className="eyebrow"><span /> Escolha sua experiência</p>
          <h2>Dois jeitos de viver<br /><em>o melhor de Angra.</em></h2>
          <p>Valores, rotas, vagas e agendamento são confirmados diretamente com o Manoa pelo WhatsApp.</p>
        </div>

        <div className="tour-grid">
          <article className="tour-card" id="passeio-compartilhado">
            <div className="tour-card__image">
              <img src="/agua-cristalina.jpg" width="640" height="1136" alt="Águas cristalinas durante passeio em Angra" />
              <span>01</span>
            </div>
            <div className="tour-card__content">
              <p className="card-kicker">Experiência em grupo</p>
              <h3>Passeio compartilhado</h3>
              <p>Conheça praias e ilhas ao lado de outros viajantes. Consulte as datas, o roteiro previsto e as vagas disponíveis.</p>
              <ul><li>Experiência em grupo</li><li>Vagas sob consulta</li><li>Roteiro informado antes da saída</li></ul>
              <a className="button button--blue" href={sharedContactUrl} target="_blank" rel="noreferrer">
                Consultar passeio compartilhado <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="tour-card tour-card--blue" id="passeio-privativo">
            <div className="tour-card__image tour-card__image--boat">
              <img src="/barco-comodidades.jpg" width="1600" height="1200" alt="Área interna do barco utilizado nos passeios do Manoa" />
              <span>02</span>
            </div>
            <div className="tour-card__content">
              <p className="card-kicker">Experiência exclusiva</p>
              <h3>Passeio privativo</h3>
              <p>Uma experiência reservada para casal, família ou amigos, com mais privacidade e possibilidades de rota alinhadas antes da saída.</p>
              <ul><li>Exclusivo para o grupo</li><li>Mais privacidade</li><li>Rota alinhada com o Manoa</li></ul>
              <a className="button button--white" href={privateContactUrl} target="_blank" rel="noreferrer">
                Consultar passeio privativo <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>

        <aside className="stay-note" id="onde-ficar">
          <div className="stay-note__visual" aria-hidden="true">
            <FaMapMarkerAlt />
            <span>Angra dos Reis</span>
            <small>Orientação local</small>
          </div>
          <div className="stay-note__content">
            <p className="eyebrow"><span /> Parceiros locais</p>
            <h3>Precisa de orientação para escolher onde ficar?</h3>
            <p>O Manoa não oferece hospedagem, mas pode indicar regiões e parceiros conforme o perfil da sua viagem. A contratação é feita diretamente com a hospedagem escolhida.</p>
          </div>
          <a className="button button--blue" href={stayContactUrl} target="_blank" rel="noreferrer">Pedir indicações <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section className="destinations" id="destinos">
        <div className="destination-heading">
          <p className="eyebrow"><span /> Cenários da Costa Verde</p>
          <h2>Um passeio.<br /><em>Muitos tons de azul.</em></h2>
          <p>Praias, ilhas e águas transparentes entre Angra e Ilha Grande.</p>
        </div>

        <div className="destination-gallery">
          <figure className="destination">
            <img src="/praia-ilha-grande.jpg" width="1440" height="1920" alt="Praia cercada pela Mata Atlântica em Ilha Grande" />
            <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>Ilha Grande</strong><small>Praias e Mata Atlântica</small></span></figcaption>
          </figure>
          <figure className="destination">
            <img src="/costa-verde.jpg" width="640" height="1136" alt="Águas azuis e natureza na Costa Verde" />
            <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>Costa Verde</strong><small>Mar e natureza</small></span></figcaption>
          </figure>
          <figure className="destination">
            <img src="/angra-baia.jpg" width="720" height="1280" alt="Baía e embarcações em Angra dos Reis" />
            <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>Baía de Angra</strong><small>Ilhas e embarcações</small></span></figcaption>
          </figure>
          <figure className="destination">
            <img src="/agua-cristalina.jpg" width="640" height="1136" alt="Águas cristalinas entre as ilhas de Angra" />
            <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>Praias e ilhas</strong><small>Águas cristalinas</small></span></figcaption>
          </figure>
          <figure className="destination destination--upper">
            <img src="/praia-vermelha.jpg" width="640" height="1136" alt="Praia Vermelha, na Ilha Grande" />
            <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>Praia Vermelha</strong><small>Ilha Grande</small></span></figcaption>
          </figure>
          <figure className="destination destination--lower">
            <img src="/barco-manoa-baia.png" width="874" height="872" alt="Barco do Manoa na baía de Angra dos Reis" />
            <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>Angra pelo mar</strong><small>Passeio com o Manoa</small></span></figcaption>
          </figure>
        </div>

        <a className="button button--blue destination-cta" href={routeContactUrl} target="_blank" rel="noreferrer">Conversar sobre a rota <span aria-hidden="true">↗</span></a>
      </section>

      <section className="experience" id="experiencia">
        <div className="experience-reel">
          <a href={tourReelUrl} target="_blank" rel="noreferrer" aria-label="Assistir ao Reel original do Manoa no Instagram">
            <video autoPlay muted loop playsInline preload="metadata" poster="/costa-verde.jpg" aria-hidden="true">
              <source src="/manoa-tour-reel.mp4" type="video/mp4" />
            </video>
            <span><FaInstagram aria-hidden="true" /> Takes reais • @manoa.tour</span>
          </a>
        </div>

        <div className="experience-copy">
          <p className="eyebrow"><span /> Por que escolher o Manoa</p>
          <h2>Informação clara.<br /><em>Mais tempo para aproveitar.</em></h2>
          <div className="experience-points">
            <article><span>01</span><div><h3>Conhecimento local</h3><p>Orientação de quem conhece Angra e a região.</p></div></article>
            <article><span>02</span><div><h3>Opções para cada grupo</h3><p>Passeio compartilhado ou privativo, conforme o perfil da viagem.</p></div></article>
            <article><span>03</span><div><h3>Tudo alinhado antes</h3><p>Rota, valores, disponibilidade e agendamento pelo WhatsApp.</p></div></article>
          </div>

          <div className="onboard-card">
            <div className="onboard-media">
              <img src="/barco-comodidades.jpg" width="1600" height="1200" alt="Área coberta e estrutura interna do barco do Manoa" />
              <span>Estrutura para até 13 passageiros</span>
            </div>
            <div className="onboard-content">
              <p className="card-kicker">Estrutura a bordo</p>
              <h3>Conforto para aproveitar o dia.</h3>
              <ul aria-label="Itens disponíveis no barco do Manoa">
                <li>Colete salva-vidas</li><li>Boias e flutuadores</li>
                <li>Caixa térmica</li><li>Pia com água</li>
                <li>Som Bluetooth</li><li>Banheiro a bordo</li>
                <li>Área coberta</li><li>Até 13 passageiros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="avaliacoes" aria-labelledby="testimonials-title">
        <div className="testimonials-heading">
          <p className="eyebrow"><span /> Experiências reais</p>
          <h2 id="testimonials-title">Quem conhece,<br /><em>quer voltar.</em></h2>
          <p>Comentários públicos compartilhados por clientes no Instagram do Manoa.</p>
        </div>
        <div className="testimonial-marquee" aria-label="Comentários de clientes do Manoa">
          <div className="testimonial-track">
            {[false, true].map((duplicate) => (
              <div className="testimonial-group" aria-hidden={duplicate || undefined} key={duplicate ? "duplicate" : "original"}>
                {testimonials.map((testimonial) => (
                  <article key={`${duplicate ? "copy" : "review"}-${testimonial.author}`}>
                    <span aria-hidden="true">“</span>
                    <blockquote>{testimonial.quote}</blockquote>
                    <div className="testimonial-author"><strong>{testimonial.author}</strong><small>Comentário no Instagram</small></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a className="text-link testimonials-link" href={instagramUrl} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /> Ver o Instagram do Manoa <span aria-hidden="true">↗</span></a>
      </section>

      <section className="booking" id="reserva">
        <div className="booking-copy">
          <p className="eyebrow"><span /> Planeje seu passeio</p>
          <h2>Data, grupo e experiência.<br /><em>O Manoa cuida do restante.</em></h2>
          <p>Preencha os dados e abra o WhatsApp com uma mensagem organizada para consultar valores e disponibilidade.</p>
          <div className="booking-contact"><small>WhatsApp oficial</small><strong>+55 24 99295-8552</strong></div>
        </div>
        <BookingForm />
      </section>

      <section className="faq" id="duvidas">
        <div className="faq-heading">
          <p className="eyebrow"><span /> Antes de reservar</p>
          <h2>Informações para decidir<br /><em>com tranquilidade.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true">+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow eyebrow--light"><span /> Seu passeio em Angra</p>
          <h2>Pronto para viver<br /><em>um novo tom de azul?</em></h2>
        </div>
        <div>
          <p>Consulte opções, valores e disponibilidade diretamente com o Manoa.</p>
          <a className="button button--white" href={generalContactUrl} target="_blank" rel="noreferrer">
            Começar pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#inicio" aria-label="Manoa Tour — voltar ao início">
          <img src="/manoa-profile.jpg" width="150" height="150" alt="" />
          <span><strong>manoa.tour</strong><small>Angra dos Reis</small></span>
        </a>
        <p>Passeios compartilhados • passeios privativos • orientação local</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={generalContactUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </footer>

      <a className="floating-cta" href={generalContactUrl} target="_blank" rel="noreferrer" aria-label="Falar com o Manoa pelo WhatsApp" title="Falar com o Manoa">
        <FaWhatsapp aria-hidden="true" focusable="false" />
      </a>
    </main>
  );
}
