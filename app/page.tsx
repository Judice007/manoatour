import BookingForm from "./BookingForm";

const instagramUrl = "https://www.instagram.com/manoa.tour/";
const contactUrl = "https://wa.me/5524992958552";
const tourReelUrl = "https://www.instagram.com/manoa.tour/reel/DV9y_xxiggt/";

const faqs = [
  {
    question: "Como faço para agendar um passeio?",
    answer: "Chame o Manoa pelo WhatsApp e informe a data, a quantidade de pessoas e se procura passeio compartilhado ou privativo.",
  },
  {
    question: "Os valores aparecem no site?",
    answer: "Os valores, as vagas, a disponibilidade e o agendamento são tratados diretamente com a equipe pelo WhatsApp.",
  },
  {
    question: "Posso conversar sobre a rota antes de reservar?",
    answer: "Sim. Pelo WhatsApp, você pode alinhar as possibilidades de rota e escolher uma experiência adequada ao seu grupo.",
  },
  {
    question: "O Manoa oferece hospedagem?",
    answer: "Não diretamente. O Manoa tem parceiros e pode dar dicas de lugares para ficar em Angra e na região.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Manoa Tour — início">
          <img src="/manoa-profile.jpg" alt="" />
          <span><strong>manoa.tour</strong><small>Angra dos Reis</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#passeios">Passeios</a>
          <a href="#destinos">Destinos</a>
          <a href="#reserva">Como reservar</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a className="header-cta" href={contactUrl} target="_blank" rel="noreferrer">
          Falar no WhatsApp <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#passeios">Passeios</a>
            <a href="#destinos">Destinos</a>
            <a href="#reserva">Como reservar</a>
            <a href="#duvidas">Dúvidas</a>
            <a href={contactUrl} target="_blank" rel="noreferrer">Falar no WhatsApp ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Passeios em Angra dos Reis</p>
          <h1>Seu próximo passeio começa <em>aqui.</em></h1>
          <p className="hero-lead">
            Passeios compartilhados ou privativos para você viver Angra e Ilha Grande,
            com atendimento direto e dicas de lugares para ficar através de parceiros.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#passeios">
              Ver opções de passeio <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--ghost" href={contactUrl} target="_blank" rel="noreferrer">
              Valores e agendamento <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Diferenciais do Manoa">
            <span>Atendimento local</span><i aria-hidden="true" />
            <span>Rota conversada</span><i aria-hidden="true" />
            <span>Contato direto</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Passeio de barco em Angra dos Reis">
          <img className="hero-photo" src="/angra-baia.jpg" alt="Mar azul e embarcações em Angra dos Reis" />
          <div className="hero-shade" />
          <div className="booking-card">
            <p>O que você quer reservar?</p>
            <a href="#passeio-compartilhado"><span><b>01</b>Passeio compartilhado</span><i aria-hidden="true">↓</i></a>
            <a href="#passeio-privativo"><span><b>02</b>Passeio privativo</span><i aria-hidden="true">↓</i></a>
            <a href="#onde-ficar"><span><b>03</b>Dicas de onde ficar</span><i aria-hidden="true">↓</i></a>
            <small>Valores e agendamento direto no WhatsApp.</small>
          </div>
          <div className="location-badge"><span>RJ</span><strong>Angra dos Reis</strong><small>Costa Verde</small></div>
        </div>
      </section>

      <section className="sales-strip" aria-label="Serviços do Manoa">
        <a href="#passeio-compartilhado"><span>01</span><strong>Passeio compartilhado</strong><small>Ver opção ↓</small></a>
        <a href="#passeio-privativo"><span>02</span><strong>Passeio privativo</strong><small>Ver opção ↓</small></a>
        <a href="#onde-ficar"><span>03</span><strong>Dicas de onde ficar</strong><small>Ver dicas ↓</small></a>
      </section>

      <section className="section tours" id="passeios">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark"><span /> Escolha a experiência</p>
            <h2>Como você quer<br /><em>viver o mar?</em></h2>
          </div>
          <p>
            Comece pela opção que mais combina com a sua viagem. Depois, fale com o
            Manoa pelo WhatsApp para confirmar rota, data, disponibilidade, valor e agendamento.
          </p>
        </div>

        <div className="tour-grid">
          <article className="tour-card tour-card--large" id="passeio-compartilhado">
            <div className="tour-card__image">
              <img src="/agua-cristalina.jpg" alt="Embarcações em águas cristalinas de Angra dos Reis" />
              <span className="tour-card__index">01</span>
              <span className="tour-card__label">Compartilhado</span>
            </div>
            <div className="tour-card__content">
              <p className="tour-type">Para viver o mar com outros viajantes</p>
              <h3>Passeio compartilhado</h3>
              <p>Conheça praias e ilhas dividindo a experiência do passeio com outras pessoas. Consulte a rota, a data e as vagas disponíveis.</p>
              <ul aria-label="Características do passeio compartilhado">
                <li>Compartilhado</li><li>Praias e ilhas</li><li>Consulta direta</li>
              </ul>
              <div className="tour-card__footer">
                <span><small>Valores e agendamento</small><strong>No WhatsApp</strong></span>
                <a className="circle-link" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Agendar passeio compartilhado pelo WhatsApp">↗</a>
              </div>
            </div>
          </article>

          <article className="tour-card tour-card--large tour-card--dark" id="passeio-privativo">
            <div className="tour-card__image">
              <img src="/barco-manoa.jpg" alt="Barco de passeio do Manoa em Angra" />
              <span className="tour-card__index">02</span>
              <span className="tour-card__label">Privativo</span>
            </div>
            <div className="tour-card__content">
              <p className="tour-type">Para viver o mar com o seu grupo</p>
              <h3>Passeio privativo</h3>
              <p>Uma experiência reservada para casal, família ou grupo de amigos, com mais privacidade e possibilidades de rota conversadas antes.</p>
              <ul aria-label="Características do passeio privativo">
                <li>Seu grupo</li><li>Mais privacidade</li><li>Rota conversada</li>
              </ul>
              <div className="tour-card__footer">
                <span><small>Valores e agendamento</small><strong>No WhatsApp</strong></span>
                <a className="circle-link" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Agendar passeio privativo pelo WhatsApp">↗</a>
              </div>
            </div>
          </article>

          <article className="stay-card" id="onde-ficar">
            <div className="stay-card__copy">
              <div className="stay-card__heading">
                <span className="tour-card__index">03</span>
                <p className="tour-type">Indicação de parceiros</p>
              </div>
              <h3>Dicas para escolher onde ficar.</h3>
              <p>O Manoa não oferece hospedagem, mas pode sugerir regiões e parceiros de acordo com o seu tipo de viagem.</p>
              <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">Pedir dicas no WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <ol className="stay-card__steps" aria-label="Como pedir uma indicação de hospedagem">
              <li><span>01</span><div><strong>Conte sua viagem</strong><small>Data, grupo e estilo de estadia.</small></div></li>
              <li><span>02</span><div><strong>Receba sugestões</strong><small>Regiões e parceiros que podem combinar.</small></div></li>
              <li><span>03</span><div><strong>Combine diretamente</strong><small>Você fala com a hospedagem indicada.</small></div></li>
            </ol>
            <div className="stay-card__image">
              <img src="/praia-ilha-grande.jpg" alt="Praia cercada pela Mata Atlântica em Ilha Grande" />
              <span>Angra dos Reis • Costa Verde</span>
            </div>
          </article>
        </div>
      </section>

      <section className="destination-section" id="destinos">
        <div className="destination-intro">
          <p className="eyebrow"><span /> Cenários da Costa Verde</p>
          <h2>Um passeio.<br /><em>Muitos Angras.</em></h2>
          <p>
            Mar transparente, ilhas, praias cercadas pela Mata Atlântica e diferentes
            possibilidades de rota. A escolha começa pelo tipo de dia que você quer viver.
          </p>
          <a className="button button--light" href={contactUrl} target="_blank" rel="noreferrer">
            Falar sobre a rota <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="destination-collage">
          <figure className="destination destination--one">
            <img src="/praia-vermelha.jpg" alt="Praia Vermelha, na Ilha Grande" />
            <figcaption><span>01</span><strong>Praia Vermelha</strong><small>Ilha Grande</small></figcaption>
          </figure>
          <figure className="destination destination--two">
            <img src="/costa-verde.jpg" alt="Águas verdes cercadas pela Mata Atlântica" />
            <figcaption><span>02</span><strong>Costa Verde</strong><small>Mar + natureza</small></figcaption>
          </figure>
          <figure className="destination destination--three">
            <img src="/angra-baia.jpg" alt="Baía e embarcações em Angra dos Reis" />
            <figcaption><span>03</span><strong>Angra dos Reis</strong><small>Praias e ilhas</small></figcaption>
          </figure>
        </div>
      </section>

      <section className="booking-section" id="reserva">
        <div className="booking-copy">
          <p className="eyebrow eyebrow--dark"><span /> Agendamento pelo WhatsApp</p>
          <h2>Monte a mensagem.<br /><em>O WhatsApp abre pronto.</em></h2>
          <p>Informe a data, quantas pessoas vão e o tipo de passeio. O site organiza tudo em uma mensagem para o Manoa confirmar valores e disponibilidade.</p>
          <div className="booking-contact">
            <small>WhatsApp oficial</small>
            <strong>+55 24 99295-8552</strong>
          </div>
        </div>
        <BookingForm />
      </section>

      <section className="why-section">
        <a className="why-image" href={tourReelUrl} target="_blank" rel="noreferrer" aria-label="Assistir ao Reel original do Manoa no Instagram">
          <video autoPlay muted loop playsInline preload="metadata" poster="/praia-vermelha.jpg" aria-hidden="true">
            <source src="/manoa-tour-reel.mp4" type="video/mp4" />
          </video>
          <span>Takes reais • @manoa.tour</span>
        </a>
        <div className="why-copy">
          <p className="eyebrow"><span /> Por que falar com o Manoa</p>
          <h2>Planeje rápido.<br /><em>Viva mais o mar.</em></h2>
          <div className="why-list">
            <article><span>01</span><div><h3>Contato local</h3><p>Fale direto com quem conhece Angra.</p></div></article>
            <article><span>02</span><div><h3>Escolha orientada</h3><p>Compartilhado ou privativo, conforme seu grupo.</p></div></article>
            <article><span>03</span><div><h3>Tudo alinhado</h3><p>Rota, valores e agendamento pelo WhatsApp.</p></div></article>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="duvidas">
        <div className="faq-title">
          <p className="eyebrow eyebrow--dark"><span /> Dúvidas frequentes</p>
          <h2>Reserve com<br /><em>mais segurança.</em></h2>
          <p>Valores, disponibilidade e agendamento são sempre confirmados pelo WhatsApp do Manoa.</p>
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

      <section className="cta-section">
        <div className="cta-photo"><img src="/agua-cristalina.jpg" alt="Água cristalina e embarcações em Angra" /></div>
        <div className="cta-card">
          <p className="eyebrow eyebrow--dark"><span /> Angra está te esperando</p>
          <h2>Escolha a data.<br /><em>O Manoa ajuda no resto.</em></h2>
          <p>Valores e agendamento de passeios compartilhados ou privativos são tratados diretamente pelo WhatsApp.</p>
          <div className="cta-actions">
            <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">Ver @manoa.tour</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#inicio" aria-label="Manoa Tour — voltar ao início">
          <img src="/manoa-profile.jpg" alt="" />
          <span><strong>manoa.tour</strong><small>Angra dos Reis</small></span>
        </a>
        <p>Passeios compartilhados • passeios privativos • dicas de parceiros</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={contactUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </footer>

      <a className="floating-cta" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Agendar passeio com o Manoa pelo WhatsApp">
        <span>Agendar no WhatsApp</span><b aria-hidden="true">↗</b>
      </a>
    </main>
  );
}
