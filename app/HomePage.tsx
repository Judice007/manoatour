import BookingForm from "./BookingForm";
import { content, locales, type Lang } from "./content";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const instagramUrl = "https://www.instagram.com/manoa.tour/";
const tourReelUrl = "https://www.instagram.com/manoa.tour/reel/DV9y_xxiggt/";

function whatsappUrl(message: string) {
  return `https://wa.me/5524992958552?text=${encodeURIComponent(message)}`;
}

const destinationImages = [
  { src: "/praia-ilha-grande.jpg", width: "1440", height: "1920", className: "destination" },
  { src: "/costa-verde.jpg", width: "640", height: "1136", className: "destination" },
  { src: "/angra-baia.jpg", width: "720", height: "1280", className: "destination" },
  { src: "/agua-cristalina.jpg", width: "640", height: "1136", className: "destination" },
  { src: "/praia-vermelha.jpg", width: "640", height: "1136", className: "destination destination--upper" },
  { src: "/barco-manoa-baia.png", width: "874", height: "872", className: "destination destination--lower" },
];

export default function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];

  const generalContactUrl = whatsappUrl(t.whatsapp.general);
  const sharedContactUrl = whatsappUrl(t.whatsapp.shared);
  const privateContactUrl = whatsappUrl(t.whatsapp.private);
  const stayContactUrl = whatsappUrl(t.whatsapp.stay);
  const routeContactUrl = whatsappUrl(t.whatsapp.route);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={t.nav.homeAria}>
          <img src="/manoa-profile.jpg" width="150" height="150" alt="" />
          <span>
            <strong>manoa.tour</strong>
            <small>Angra dos Reis</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={t.nav.mainNavAria}>
          <a href="#passeios">{t.nav.tours}</a>
          <a href="#destinos">{t.nav.destinations}</a>
          <a href="#experiencia">{t.nav.experience}</a>
          <a href="#reserva">{t.nav.booking}</a>
        </nav>

        <div className="header-actions">
          <nav className="lang-switch" aria-label={t.nav.langSwitchAria}>
            <span className="lang-switch__label">{t.nav.langLabel}</span>
            {locales.map((locale) => (
              <a
                key={locale.lang}
                href={locale.path}
                className={locale.lang === lang ? "is-active" : undefined}
                aria-current={locale.lang === lang ? "page" : undefined}
                aria-label={locale.autonym}
                title={locale.autonym}
              >
                <span aria-hidden="true">{locale.flag}</span>
              </a>
            ))}
          </nav>

          <a className="header-cta" href={generalContactUrl} target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden="true" /> {t.nav.whatsapp}
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label={t.nav.openMenuAria}><span /><span /></summary>
          <nav aria-label={t.nav.mobileNavAria}>
            <a href="#passeios">{t.nav.tours}</a>
            <a href="#destinos">{t.nav.destinations}</a>
            <a href="#experiencia">{t.nav.experience}</a>
            <a href="#reserva">{t.nav.booking}</a>
            <div className="mobile-lang-switch" aria-label={t.nav.langSwitchAria}>
              <span className="mobile-lang-switch__label">{t.nav.langLabel}</span>
              {locales.map((locale) => (
                <a key={locale.lang} href={locale.path} className={locale.lang === lang ? "is-active" : undefined} aria-current={locale.lang === lang ? "page" : undefined}>
                  <span aria-hidden="true">{locale.flag}</span> {locale.autonym}
                </a>
              ))}
            </div>
            <a href={generalContactUrl} target="_blank" rel="noreferrer">{t.nav.whatsappShort}</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light"><span /> {t.hero.eyebrow}</p>
          <h1>{t.hero.titleLine1}<em>{t.hero.titleEm}</em></h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="button button--white" href="#passeios">{t.hero.ctaPrimary} <span aria-hidden="true">↓</span></a>
            <a className="text-link text-link--light" href={generalContactUrl} target="_blank" rel="noreferrer">
              {t.hero.ctaSecondary} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img
            src="/barco-manoa-lateral.png"
            width="870"
            height="843"
            alt={t.hero.imageAlt}
          />
          <div className="hero-location"><small>{t.hero.locationLabel}</small><strong>{t.hero.locationValue}</strong><span>{t.hero.locationSub}</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label={t.trustStrip.ariaLabel}>
        {t.trustStrip.items.map((item, index) => (
          <div key={item.title}><span>0{index + 1}</span><strong>{item.title}</strong><small>{item.note}</small></div>
        ))}
      </section>

      <section className="section tours" id="passeios">
        <div className="section-heading">
          <p className="eyebrow"><span /> {t.tours.eyebrow}</p>
          <h2>{t.tours.titleLine1}<br /><em>{t.tours.titleEm}</em></h2>
          <p>{t.tours.intro}</p>
        </div>

        <div className="tour-grid">
          <article className="tour-card" id="passeio-compartilhado">
            <div className="tour-card__image">
              <img src="/agua-cristalina.jpg" width="640" height="1136" alt={t.tours.shared.imageAlt} />
              <span>01</span>
            </div>
            <div className="tour-card__content">
              <p className="card-kicker">{t.tours.shared.kicker}</p>
              <h3>{t.tours.shared.title}</h3>
              <p>{t.tours.shared.description}</p>
              <ul>{t.tours.shared.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <a className="button button--blue" href={sharedContactUrl} target="_blank" rel="noreferrer">
                {t.tours.shared.cta} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="tour-card tour-card--blue" id="passeio-privativo">
            <div className="tour-card__image tour-card__image--boat">
              <img src="/barco-comodidades.jpg" width="1600" height="1200" alt={t.tours.private.imageAlt} />
              <span>02</span>
            </div>
            <div className="tour-card__content">
              <p className="card-kicker">{t.tours.private.kicker}</p>
              <h3>{t.tours.private.title}</h3>
              <p>{t.tours.private.description}</p>
              <ul>{t.tours.private.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <a className="button button--white" href={privateContactUrl} target="_blank" rel="noreferrer">
                {t.tours.private.cta} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>

        <aside className="stay-note" id="onde-ficar">
          <div className="stay-note__visual" aria-hidden="true">
            <FaMapMarkerAlt />
            <span>{t.tours.stayNote.location}</span>
            <small>{t.tours.stayNote.sublabel}</small>
          </div>
          <div className="stay-note__content">
            <p className="eyebrow"><span /> {t.tours.stayNote.eyebrow}</p>
            <h3>{t.tours.stayNote.title}</h3>
            <p>{t.tours.stayNote.description}</p>
          </div>
          <a className="button button--blue" href={stayContactUrl} target="_blank" rel="noreferrer">{t.tours.stayNote.cta} <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section className="destinations" id="destinos">
        <div className="destination-heading">
          <p className="eyebrow"><span /> {t.destinations.eyebrow}</p>
          <h2>{t.destinations.titleLine1}<br /><em>{t.destinations.titleEm}</em></h2>
          <p>{t.destinations.intro}</p>
        </div>

        <div className="destination-gallery">
          {t.destinations.items.map((item, index) => {
            const image = destinationImages[index];
            return (
              <figure className={image.className} key={item.title}>
                <img src={image.src} width={image.width} height={image.height} alt={item.alt} />
                <figcaption><FaMapMarkerAlt aria-hidden="true" /><span><strong>{item.title}</strong><small>{item.sub}</small></span></figcaption>
              </figure>
            );
          })}
        </div>

        <a className="button button--blue destination-cta" href={routeContactUrl} target="_blank" rel="noreferrer">{t.destinations.cta} <span aria-hidden="true">↗</span></a>
      </section>

      <section className="experience" id="experiencia">
        <div className="experience-reel">
          <a href={tourReelUrl} target="_blank" rel="noreferrer" aria-label={t.experience.reelAria}>
            <video autoPlay muted loop playsInline preload="metadata" poster="/costa-verde.jpg" aria-hidden="true">
              <source src="/manoa-tour-reel.mp4" type="video/mp4" />
            </video>
            <span><FaInstagram aria-hidden="true" /> {t.experience.reelCaption}</span>
          </a>
        </div>

        <div className="experience-copy">
          <p className="eyebrow"><span /> {t.experience.eyebrow}</p>
          <h2>{t.experience.titleLine1}<br /><em>{t.experience.titleEm}</em></h2>
          <div className="experience-points">
            {t.experience.points.map((point, index) => (
              <article key={point.title}><span>0{index + 1}</span><div><h3>{point.title}</h3><p>{point.description}</p></div></article>
            ))}
          </div>

          <div className="onboard-card">
            <div className="onboard-media">
              <img src="/barco-comodidades.jpg" width="1600" height="1200" alt={t.experience.onboard.imageAlt} />
              <span>{t.experience.onboard.badge}</span>
            </div>
            <div className="onboard-content">
              <p className="card-kicker">{t.experience.onboard.kicker}</p>
              <h3>{t.experience.onboard.title}</h3>
              <ul aria-label={t.experience.onboard.itemsAria}>
                {t.experience.onboard.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="avaliacoes" aria-labelledby="testimonials-title">
        <div className="testimonials-heading">
          <p className="eyebrow"><span /> {t.testimonials.eyebrow}</p>
          <h2 id="testimonials-title">{t.testimonials.titleLine1}<br /><em>{t.testimonials.titleEm}</em></h2>
          <p>{t.testimonials.intro}</p>
        </div>
        <div className="testimonial-marquee" aria-label={t.testimonials.trackAria}>
          <div className="testimonial-track">
            {[false, true].map((duplicate) => (
              <div className="testimonial-group" aria-hidden={duplicate || undefined} key={duplicate ? "duplicate" : "original"}>
                {t.testimonials.items.map((testimonial) => (
                  <article key={`${duplicate ? "copy" : "review"}-${testimonial.author}`}>
                    <span aria-hidden="true">&#8220;</span>
                    <blockquote>{testimonial.quote}</blockquote>
                    <div className="testimonial-author"><strong>{testimonial.author}</strong><small>{t.testimonials.sourceLabel}</small></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a className="text-link testimonials-link" href={instagramUrl} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /> {t.testimonials.linkText} <span aria-hidden="true">↗</span></a>
      </section>

      <section className="booking" id="reserva">
        <div className="booking-copy">
          <p className="eyebrow"><span /> {t.booking.eyebrow}</p>
          <h2>{t.booking.titleLine1}<br /><em>{t.booking.titleEm}</em></h2>
          <p>{t.booking.intro}</p>
          <div className="booking-contact"><small>{t.booking.contactLabel}</small><strong>+55 24 99295-8552</strong></div>
        </div>
        <BookingForm lang={lang} />
      </section>

      <section className="faq" id="duvidas">
        <div className="faq-heading">
          <p className="eyebrow"><span /> {t.faq.eyebrow}</p>
          <h2>{t.faq.titleLine1}<br /><em>{t.faq.titleEm}</em></h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true">+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow eyebrow--light"><span /> {t.finalCta.eyebrow}</p>
          <h2>{t.finalCta.titleLine1}<br /><em>{t.finalCta.titleEm}</em></h2>
        </div>
        <div>
          <p>{t.finalCta.description}</p>
          <a className="button button--white" href={generalContactUrl} target="_blank" rel="noreferrer">
            {t.finalCta.cta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#inicio" aria-label={t.nav.homeFooterAria}>
          <img src="/manoa-profile.jpg" width="150" height="150" alt="" />
          <span><strong>manoa.tour</strong><small>Angra dos Reis</small></span>
        </a>
        <p>{t.footer.tagline}</p>
        <div><a href={instagramUrl} target="_blank" rel="noreferrer">{t.footer.instagram}</a><a href={generalContactUrl} target="_blank" rel="noreferrer">{t.footer.whatsapp}</a></div>
      </footer>

      <a className="floating-cta" href={generalContactUrl} target="_blank" rel="noreferrer" aria-label={t.floatingCta.ariaLabel} title={t.floatingCta.title}>
        <FaWhatsapp aria-hidden="true" focusable="false" />
      </a>
    </main>
  );
}
