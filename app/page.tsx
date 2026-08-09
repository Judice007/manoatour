import BookingForm from "./BookingForm";
import { FaWhatsapp } from "react-icons/fa";

const instagramUrl = "https://www.instagram.com/manoa.tour/";
const contactUrl = "https://wa.me/5524992958552";
const tourReelUrl = "https://www.instagram.com/manoa.tour/reel/DV9y_xxiggt/";

const faqs = [
  {
    question: "Como faço para agendar um passeio?",
    answer: "O agendamento é feito diretamente pelo WhatsApp. Informe a data desejada, o número de pessoas e a preferência entre passeio compartilhado ou privativo.",
  },
  {
    question: "Os valores aparecem no site?",
    answer: "Não. Valores, vagas e disponibilidade variam conforme a data e a experiência escolhida; a confirmação é feita diretamente pelo WhatsApp.",
  },
  {
    question: "Posso conversar sobre a rota antes de reservar?",
    answer: "Sim. Antes da reserva, o Manoa apresenta as possibilidades de rota para ajudar você a escolher a opção mais adequada ao perfil do grupo.",
  },
  {
    question: "O Manoa oferece hospedagem?",
    answer: "O Manoa não oferece hospedagem. Porém, pode indicar regiões e parceiros locais para você avaliar e contratar diretamente.",
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
          <p className="eyebrow"><span /> Passeios de barco em Angra dos Reis</p>
          <h1>Angra, vista do <em>mar.</em></h1>
          <p className="hero-lead">
            Passeios compartilhados ou privativos para viver praias, ilhas e águas cristalinas
            com atendimento direto do Manoa.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#passeios">
              Conhecer os passeios <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--ghost" href={contactUrl} target="_blank" rel="noreferrer">
              Consultar disponibilidade <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Diferenciais do Manoa">
            <span>Atendimento direto</span><i aria-hidden="true" />
            <span>Orientação local</span><i aria-hidden="true" />
            <span>Experiências sob consulta</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Passeio de barco em Angra dos Reis">
          <img className="hero-photo" src="/barco-manoa.jpg" alt="Barco do Manoa durante passeio em Angra dos Reis" />
          <div className="hero-shade" />
          <div className="booking-card">
            <p>Escolha como viver Angra</p>
            <a href="#passeio-compartilhado"><span><b>01</b>Passeio compartilhado</span><i aria-hidden="true">↓</i></a>
            <a href="#passeio-privativo"><span><b>02</b>Passeio privativo</span><i aria-hidden="true">↓</i></a>
            <a href="#onde-ficar"><span><b>03</b>Dicas de onde ficar</span><i aria-hidden="true">↓</i></a>
            <small>Valores, disponibilidade e reservas pelo WhatsApp.</small>
          </div>
          <div className="location-badge"><span>RJ</span><strong>Angra dos Reis</strong><small>Costa Verde</small></div>
        </div>
      </section>

      <section className="sales-strip" aria-label="Serviços do Manoa">
        <a href="#passeio-compartilhado"><span>01</span><strong>Passeio compartilhado</strong><small>Ver opção ↓</small></a>
        <a href="#passeio-privativo"><span>02</span><strong>Passeio privativo</strong><small>Ver opção ↓</small></a>
        <a href="#onde-ficar"><span>03</span><strong>Indicações de hospedagem</strong><small>Ver indicações ↓</small></a>
      </section>

      <section className="travel-intro" aria-labelledby="travel-intro-title">
        <p className="eyebrow eyebrow--dark"><span /> Viva Angra com o Manoa</p>
        <h2 id="travel-intro-title">Mais que um passeio.<br /><em>Um dia para lembrar.</em></h2>
        <p>
          O Manoa ajuda você a escolher a experiência mais adequada para o seu grupo,
          com informações claras e atendimento direto antes de embarcar.
        </p>
        <div className="travel-intro__facts" aria-label="Diferenciais da experiência">
          <span><b>01</b>Angra e Ilha Grande</span>
          <span><b>02</b>Compartilhado ou privativo</span>
          <span><b>03</b>Reserva pelo WhatsApp</span>
        </div>
      </section>

      <section className="section tours" id="passeios">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark"><span /> Escolha sua experiência</p>
            <h2>Dois jeitos de viver<br /><em>o melhor de Angra.</em></h2>
          </div>
          <p>
            Compare as opções e escolha a que melhor atende ao perfil do seu grupo.
            Rotas, valores, disponibilidade e agendamento são confirmados com o Manoa pelo WhatsApp.
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
              <p className="tour-type">Experiência em grupo</p>
              <h3>Passeio compartilhado</h3>
              <p>Uma opção para conhecer praias e ilhas ao lado de outros viajantes. Consulte as datas, o roteiro previsto e as vagas disponíveis.</p>
              <ul aria-label="Características do passeio compartilhado">
                <li>Experiência em grupo</li><li>Praias e ilhas</li><li>Vagas sob consulta</li>
              </ul>
              <div className="tour-card__footer">
                <span><small>Consulta e agendamento</small><strong>Pelo WhatsApp</strong></span>
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
              <p className="tour-type">Experiência exclusiva para o seu grupo</p>
              <h3>Passeio privativo</h3>
              <p>Passeio reservado para casal, família ou grupo de amigos, com mais privacidade e possibilidades de rota alinhadas antes da saída.</p>
              <ul aria-label="Características do passeio privativo">
                <li>Exclusivo para o grupo</li><li>Mais privacidade</li><li>Rota alinhada</li>
              </ul>
              <div className="tour-card__footer">
                <span><small>Consulta e agendamento</small><strong>Pelo WhatsApp</strong></span>
                <a className="circle-link" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Agendar passeio privativo pelo WhatsApp">↗</a>
              </div>
            </div>
          </article>

          <article className="stay-card" id="onde-ficar">
            <div className="stay-card__copy">
              <div className="stay-card__heading">
                <span className="tour-card__index">03</span>
                <p className="tour-type">Rede de parceiros locais</p>
              </div>
              <h3>Orientação para escolher onde ficar.</h3>
              <p>O Manoa não oferece hospedagem, mas pode indicar regiões e parceiros locais de acordo com o perfil e as necessidades da sua viagem.</p>
              <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">Solicitar indicações <span aria-hidden="true">↗</span></a>
            </div>
            <ol className="stay-card__steps" aria-label="Como pedir uma indicação de hospedagem">
              <li><span>01</span><div><strong>Compartilhe seu planejamento</strong><small>Informe datas, número de pessoas e preferências.</small></div></li>
              <li><span>02</span><div><strong>Receba orientações</strong><small>Conheça regiões e parceiros adequados ao seu perfil.</small></div></li>
              <li><span>03</span><div><strong>Contrate diretamente</strong><small>A escolha e a contratação são feitas com a hospedagem indicada.</small></div></li>
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
          <h2>Ilhas, praias e um mar<br /><em>que muda o ritmo do dia.</em></h2>
          <p>
            Águas transparentes, ilhas e praias cercadas pela Mata Atlântica compõem
            diferentes possibilidades de rota em Angra e Ilha Grande.
          </p>
          <a className="button button--light" href={contactUrl} target="_blank" rel="noreferrer">
            Consultar possibilidades de rota <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="destination-collage">
          <figure className="destination destination--one">
            <img src="/praia-vermelha.jpg" alt="Praia Vermelha, na Ilha Grande" />
            <figcaption><span>01</span><strong>Praia Vermelha</strong><small>Ilha Grande</small></figcaption>
          </figure>
          <figure className="destination destination--two">
            <img src="/costa-verde.jpg" alt="Águas verdes cercadas pela Mata Atlântica" />
            <figcaption><span>02</span><strong>Costa Verde</strong><small>Mar e natureza</small></figcaption>
          </figure>
          <figure className="destination destination--three">
            <img src="/angra-baia.jpg" alt="Baía e embarcações em Angra dos Reis" />
            <figcaption><span>03</span><strong>Angra dos Reis</strong><small>Praias e ilhas</small></figcaption>
          </figure>
        </div>
      </section>

      <section className="booking-section" id="reserva">
        <div className="booking-copy">
          <p className="eyebrow eyebrow--dark"><span /> Planeje seu passeio</p>
          <h2>Envie sua solicitação<br /><em>em poucos passos.</em></h2>
          <p>Informe a data, o número de pessoas e o tipo de experiência. O WhatsApp será aberto com a mensagem organizada para consultar valores e disponibilidade.</p>
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
          <p className="eyebrow"><span /> Por que escolher o Manoa</p>
          <h2>Conhecimento local.<br /><em>Mais tempo para aproveitar.</em></h2>
          <div className="why-list">
            <article><span>01</span><div><h3>Conhecimento local</h3><p>Orientação de quem conhece Angra e a região.</p></div></article>
            <article><span>02</span><div><h3>Opções para cada grupo</h3><p>Passeio compartilhado ou privativo, conforme o perfil da viagem.</p></div></article>
            <article><span>03</span><div><h3>Informações centralizadas</h3><p>Rota, disponibilidade, valores e agendamento alinhados pelo WhatsApp.</p></div></article>
          </div>

          <div className="why-amenities">
            <p className="tour-type">O que tem no barco</p>
            <div className="why-amenities__body">
              <img src="/barco-comodidades.jpg" alt="Área coberta do barco do Manoa, com coletes salva-vidas, boias e caixa térmica" />
              <ul aria-label="Itens disponíveis no barco do Manoa">
                <li>Colete salva-vidas</li>
                <li>Boias e flutuadores</li>
                <li>Caixa térmica</li>
                <li>Pia com água</li>
                <li>Som Bluetooth</li>
                <li>Banheiro a bordo</li>
                <li>Área coberta</li>
                <li>Até 13 passageiros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="duvidas">
        <div className="faq-title">
          <p className="eyebrow eyebrow--dark"><span /> Dúvidas frequentes</p>
          <h2>Informações para reservar<br /><em>com tranquilidade.</em></h2>
          <p>As condições de cada passeio são confirmadas diretamente com o Manoa pelo WhatsApp.</p>
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
          <p className="eyebrow eyebrow--dark"><span /> Planeje sua experiência em Angra</p>
          <h2>Seu próximo dia inesquecível<br /><em>pode começar agora.</em></h2>
          <p>Consulte opções de passeio, valores e disponibilidade diretamente pelo WhatsApp.</p>
          <div className="cta-actions">
            <a className="button button--dark" href={contactUrl} target="_blank" rel="noreferrer">
              Consultar disponibilidade <span aria-hidden="true">↗</span>
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
        <p>Passeios compartilhados • passeios privativos • orientação local</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={contactUrl} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </footer>

      <a className="floating-cta" href={contactUrl} target="_blank" rel="noreferrer" aria-label="Falar com o Manoa pelo WhatsApp" title="Falar no WhatsApp">
        <FaWhatsapp aria-hidden="true" focusable="false" />
      </a>
    </main>
  );
}
