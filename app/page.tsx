const instagramUrl = "https://www.instagram.com/manoa.tour/";
const contactUrl = "https://linkr.bio/n2x0k";

const services = [
  {
    number: "01",
    title: "Passeios de barco",
    text: "Descubra praias, ilhas e águas transparentes em um roteiro pensado para aproveitar Angra sem pressa.",
    className: "service-card service-card--teal",
  },
  {
    number: "02",
    title: "Aluguel de barco",
    text: "Escolha viver o mar do seu jeito. Consulte a equipe para montar a rota e verificar a disponibilidade.",
    className: "service-card service-card--sand",
  },
  {
    number: "03",
    title: "Hospedagem",
    text: "Uma base perto da natureza para desacelerar, descansar e continuar explorando a Costa Verde.",
    className: "service-card service-card--coral",
  },
];

const steps = [
  ["01", "Conte como quer viajar", "Fale com a equipe, informe as datas e o tipo de experiência que procura."],
  ["02", "Receba uma rota possível", "A Manoa orienta as opções de passeio, hospedagem e o que levar para a viagem."],
  ["03", "Viva Angra de verdade", "Embarque com mais clareza e aproveite o encontro entre mar, mata e cultura caiçara."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Manoa Tour — início">
          <img src="/manoa-profile.jpg" alt="" />
          <span>
            <strong>manoa.tour</strong>
            <small>Angra dos Reis</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#experiencias">Experiências</a>
          <a href="#destinos">Destinos</a>
          <a href="#como-funciona">Como funciona</a>
        </nav>

        <a className="header-cta" href={contactUrl} target="_blank" rel="noreferrer">
          Quero planejar <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#experiencias">Experiências</a>
            <a href="#destinos">Destinos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href={contactUrl} target="_blank" rel="noreferrer">Planejar viagem ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Passeios • barco • hospedagem</p>
          <h1>Angra fica ainda melhor <em>vista do mar.</em></h1>
          <p className="hero-lead">
            Roteiros pela Costa Verde para quem quer água transparente, natureza viva
            e uma viagem feita com contato local.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href={contactUrl} target="_blank" rel="noreferrer">
              Planejar meu passeio <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#destinos">Explorar destinos <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-marker" aria-hidden="true">M</span>
            <p><strong>Rota com contexto local</strong><br />Atendimento direto para entender a sua viagem.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Paisagens de Angra dos Reis e Ilha Grande">
          <div className="hero-image-main">
            <img src="/angra-baia.jpg" alt="Mar azul e embarcações em Angra dos Reis" />
          </div>
          <div className="hero-image-small">
            <img src="/barco-manoa.jpg" alt="Barco de passeio da Manoa em águas verdes" />
          </div>
          <div className="route-card">
            <span className="route-kicker">Costa Verde</span>
            <strong>mar <i>→</i> ilha <i>→</i> pausa</strong>
          </div>
          <div className="sun-disc" aria-hidden="true"><span>feito em</span><strong>ANGRA</strong></div>
        </div>
      </section>

      <section className="marquee" aria-label="Destaques">
        <div>
          <span>Ilha Grande</span><i>✦</i><span>Angra dos Reis</span><i>✦</i>
          <span>Praias e ilhas</span><i>✦</i><span>Vida marinha</span><i>✦</i>
          <span>Ilha Grande</span><i>✦</i><span>Angra dos Reis</span><i>✦</i>
        </div>
      </section>

      <section className="section experiences" id="experiencias">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark"><span /> Escolha sua experiência</p>
          <h2>Seu tempo em Angra,<br /><em>do seu jeito.</em></h2>
          <p>Do primeiro contato ao dia da viagem, a ideia é simples: menos dúvida e mais tempo para aproveitar.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={service.className} key={service.title}>
              <span className="card-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true"><span /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={contactUrl} target="_blank" rel="noreferrer" aria-label={`Consultar ${service.title}`}>
                Consultar <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section" id="destinos">
        <div className="destination-intro">
          <p className="eyebrow"><span /> Onde o verde encontra o azul</p>
          <h2>Mais natureza.<br /><em>Menos roteiro óbvio.</em></h2>
          <p>
            Angra e Ilha Grande guardam diferentes ritmos de viagem. A Manoa ajuda você a
            entender o que combina com seu grupo, sua data e seu jeito de aproveitar.
          </p>
          <a className="button button--light" href={contactUrl} target="_blank" rel="noreferrer">
            Descobrir possibilidades <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="destination-collage">
          <figure className="destination destination--one">
            <img src="/praia-vermelha.jpg" alt="Praia Vermelha, na Ilha Grande" />
            <figcaption><span>01</span><strong>Praia Vermelha</strong><small>Ilha Grande</small></figcaption>
          </figure>
          <figure className="destination destination--two">
            <img src="/agua-cristalina.jpg" alt="Barcos em água cristalina na Costa Verde" />
            <figcaption><span>02</span><strong>Águas de Angra</strong><small>Costa Verde</small></figcaption>
          </figure>
          <figure className="destination destination--three">
            <img src="/praia-ilha-grande.jpg" alt="Praia cercada pela Mata Atlântica em Ilha Grande" />
            <figcaption><span>03</span><strong>Ilha Grande</strong><small>Mar + Mata Atlântica</small></figcaption>
          </figure>
        </div>
      </section>

      <section className="section process" id="como-funciona">
        <div className="process-title">
          <p className="eyebrow eyebrow--dark"><span /> Simples do início ao embarque</p>
          <h2>Você chega com a vontade.<br /><em>A rota ganha forma.</em></h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wildlife">
        <div className="wildlife-image">
          <img src="/costa-verde.jpg" alt="Águas verdes cercadas pela Mata Atlântica em Angra" />
          <span className="image-label">natureza em primeiro plano</span>
        </div>
        <div className="wildlife-copy">
          <p className="eyebrow"><span /> Vida marinha</p>
          <h2>O passeio também é sobre <em>olhar com mais atenção.</em></h2>
          <p>
            A região reúne Mata Atlântica, ilhas e uma biodiversidade que merece respeito.
            Cada saída é uma chance de conhecer o território sem transformar a natureza em promessa.
          </p>
          <div className="wildlife-tags" aria-label="Valores da experiência">
            <span>Contemplação</span><span>Respeito</span><span>Consciência</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-photo"><img src="/angra-baia.jpg" alt="Vista do mar de Angra dos Reis" /></div>
        <div className="cta-card">
          <p className="eyebrow eyebrow--dark"><span /> Sua próxima história começa aqui</p>
          <h2>Que tal trocar o “um dia” por <em>uma data?</em></h2>
          <p>Chame a Manoa, conte como você imagina a viagem e receba as informações para começar a planejar.</p>
          <div className="cta-actions">
            <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">
              Abrir canais de contato <span aria-hidden="true">↗</span>
            </a>
            <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">@manoa.tour</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#inicio" aria-label="Manoa Tour — voltar ao início">
          <img src="/manoa-profile.jpg" alt="" />
          <span><strong>manoa.tour</strong><small>Angra dos Reis</small></span>
        </a>
        <p>Passeios e aluguel de barco • Hospedagem</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={contactUrl} target="_blank" rel="noreferrer">Contato ↗</a></div>
      </footer>

      <a className="floating-cta" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Planejar passeio com a Manoa">
        <span>Planejar passeio</span><b aria-hidden="true">↗</b>
      </a>
    </main>
  );
}
