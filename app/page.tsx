const instagramUrl = "https://www.instagram.com/manoa.tour/";
const contactUrl = "https://linkr.bio/n2x0k";

const bookingSteps = [
  { number: "01", title: "Data desejada", text: "Diga quando pretende ir para a equipe consultar a disponibilidade." },
  { number: "02", title: "Quantidade de pessoas", text: "Informe o tamanho do grupo para receber uma opção compatível." },
  { number: "03", title: "Tipo de experiência", text: "Passeio, aluguel de barco ou hospedagem: conte o que você procura." },
];

const faqs = [
  {
    question: "Como faço para consultar um passeio?",
    answer: "Abra o canal oficial de contato, informe a data, a quantidade de pessoas e se procura passeio, aluguel de barco ou hospedagem.",
  },
  {
    question: "Os valores aparecem no site?",
    answer: "Os valores e a disponibilidade são confirmados diretamente pela equipe, de acordo com a data e a experiência desejada.",
  },
  {
    question: "Posso conversar sobre a rota antes de reservar?",
    answer: "Sim. O contato serve justamente para alinhar as possibilidades de rota e escolher uma experiência adequada ao seu grupo.",
  },
  {
    question: "A Manoa também trabalha com hospedagem?",
    answer: "Sim. Você pode consultar opções de hospedagem pelo mesmo canal oficial de atendimento.",
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
          Consultar agora <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#passeios">Passeios</a>
            <a href="#destinos">Destinos</a>
            <a href="#reserva">Como reservar</a>
            <a href="#duvidas">Dúvidas</a>
            <a href={contactUrl} target="_blank" rel="noreferrer">Consultar passeio ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Passeios em Angra dos Reis</p>
          <h1>Seu próximo passeio começa <em>aqui.</em></h1>
          <p className="hero-lead">
            Passeios de barco, aluguel de embarcação e hospedagem para você viver
            Angra e Ilha Grande com atendimento direto e uma rota bem planejada.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#passeios">
              Ver opções de passeio <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--ghost" href={contactUrl} target="_blank" rel="noreferrer">
              Consultar disponibilidade <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Diferenciais da Manoa">
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
            <a href="#passeio-barco"><span><b>01</b>Passeio de barco</span><i aria-hidden="true">↓</i></a>
            <a href="#aluguel-barco"><span><b>02</b>Barco para seu grupo</span><i aria-hidden="true">↓</i></a>
            <a href="#hospedagem"><span><b>03</b>Hospedagem</span><i aria-hidden="true">↓</i></a>
            <small>Valores e disponibilidade sob consulta.</small>
          </div>
          <div className="location-badge"><span>RJ</span><strong>Angra dos Reis</strong><small>Costa Verde</small></div>
        </div>
      </section>

      <section className="sales-strip" aria-label="Serviços da Manoa">
        <a href="#passeio-barco"><span>01</span><strong>Passeio de barco</strong><small>Ver opção ↓</small></a>
        <a href="#aluguel-barco"><span>02</span><strong>Aluguel de barco</strong><small>Ver opção ↓</small></a>
        <a href="#hospedagem"><span>03</span><strong>Hospedagem</strong><small>Ver opção ↓</small></a>
      </section>

      <section className="section tours" id="passeios">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark"><span /> Escolha a experiência</p>
            <h2>Como você quer<br /><em>viver o mar?</em></h2>
          </div>
          <p>
            Comece pela opção que mais combina com a sua viagem. Depois, fale com a
            Manoa para confirmar rota, data, disponibilidade e valor.
          </p>
        </div>

        <div className="tour-grid">
          <article className="tour-card tour-card--large" id="passeio-barco">
            <div className="tour-card__image">
              <img src="/agua-cristalina.jpg" alt="Embarcações em águas cristalinas de Angra dos Reis" />
              <span className="tour-card__index">01</span>
              <span className="tour-card__label">Passeio</span>
            </div>
            <div className="tour-card__content">
              <p className="tour-type">Para conhecer praias e ilhas</p>
              <h3>Passeio de barco por Angra</h3>
              <p>Uma opção para quem quer aproveitar o dia no mar, conhecer novos pontos e receber orientação local antes de embarcar.</p>
              <ul aria-label="Características do passeio">
                <li>Praias e ilhas</li><li>Rota alinhada</li><li>Consulta direta</li>
              </ul>
              <div className="tour-card__footer">
                <span><small>Valor</small><strong>Sob consulta</strong></span>
                <a className="circle-link" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Consultar passeio de barco">↗</a>
              </div>
            </div>
          </article>

          <article className="tour-card tour-card--large tour-card--dark" id="aluguel-barco">
            <div className="tour-card__image">
              <img src="/barco-manoa.jpg" alt="Barco de passeio da Manoa em Angra" />
              <span className="tour-card__index">02</span>
              <span className="tour-card__label">Aluguel</span>
            </div>
            <div className="tour-card__content">
              <p className="tour-type">Para viajar no ritmo do seu grupo</p>
              <h3>Barco para o seu grupo</h3>
              <p>Converse sobre uma rota para casal, família ou grupo de amigos e consulte as embarcações disponíveis para a sua data.</p>
              <ul aria-label="Características do aluguel de barco">
                <li>Mais liberdade</li><li>Rota conversada</li><li>Seu grupo</li>
              </ul>
              <div className="tour-card__footer">
                <span><small>Disponibilidade</small><strong>Sob consulta</strong></span>
                <a className="circle-link" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Consultar aluguel de barco">↗</a>
              </div>
            </div>
          </article>

          <article className="stay-card" id="hospedagem">
            <div className="stay-card__copy">
              <span className="tour-card__index">03</span>
              <p className="tour-type">Fique mais perto da natureza</p>
              <h3>Hospedagem em Angra</h3>
              <p>Quer estender a experiência? Consulte as opções de hospedagem e planeje mais dias para descobrir a região com calma.</p>
              <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">Consultar hospedagem <span aria-hidden="true">↗</span></a>
            </div>
            <div className="stay-card__image"><img src="/praia-ilha-grande.jpg" alt="Praia cercada pela Mata Atlântica em Ilha Grande" /></div>
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
          <p className="eyebrow eyebrow--dark"><span /> Consulta rápida</p>
          <h2>Para começar, envie <em>só o essencial.</em></h2>
          <p>Com três informações, a conversa já começa mais objetiva e a equipe consegue orientar melhor a sua escolha.</p>
          <a className="button button--primary" href={contactUrl} target="_blank" rel="noreferrer">
            Consultar meu passeio <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="booking-steps">
          {bookingSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </article>
          ))}
          <div className="booking-summary">
            <span className="summary-mark" aria-hidden="true">M</span>
            <div><small>Pronto para consultar?</small><strong>Data + pessoas + experiência</strong></div>
            <a href={contactUrl} target="_blank" rel="noreferrer" aria-label="Abrir canal oficial da Manoa">↗</a>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-image">
          <img src="/praia-vermelha.jpg" alt="Praia Vermelha e barco em Ilha Grande" />
          <span>Ilha Grande • RJ</span>
        </div>
        <div className="why-copy">
          <p className="eyebrow"><span /> Por que falar com a Manoa</p>
          <h2>Mais clareza antes.<br /><em>Mais mar depois.</em></h2>
          <div className="why-list">
            <article><span>01</span><div><h3>Contato local</h3><p>Converse diretamente com quem conhece a região e as possibilidades de passeio.</p></div></article>
            <article><span>02</span><div><h3>Escolha orientada</h3><p>Entenda qual opção combina melhor com a data, o grupo e o ritmo da sua viagem.</p></div></article>
            <article><span>03</span><div><h3>Informação antes de ir</h3><p>Alinhe rota, disponibilidade e o que precisa saber antes de confirmar.</p></div></article>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="duvidas">
        <div className="faq-title">
          <p className="eyebrow eyebrow--dark"><span /> Dúvidas frequentes</p>
          <h2>Reserve com<br /><em>mais segurança.</em></h2>
          <p>As condições finais são sempre confirmadas pelo canal oficial da Manoa.</p>
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
          <h2>Escolha a data.<br /><em>A Manoa ajuda no resto.</em></h2>
          <p>Consulte passeio, aluguel de barco ou hospedagem pelo canal oficial.</p>
          <div className="cta-actions">
            <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">
              Consultar agora <span aria-hidden="true">↗</span>
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
        <p>Passeios • aluguel de barco • hospedagem</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={contactUrl} target="_blank" rel="noreferrer">Contato ↗</a></div>
      </footer>

      <a className="floating-cta" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Consultar passeio com a Manoa">
        <span>Consultar passeio</span><b aria-hidden="true">↗</b>
      </a>
    </main>
  );
}
