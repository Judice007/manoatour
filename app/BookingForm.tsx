"use client";

import { FormEvent, useMemo, useState } from "react";
import { content, type Lang } from "./content";

const whatsappNumber = "5524992958552";
const messageIcons = {
  date: "\u{1F4C5}️",
  people: "\u{1F465}",
  experience: "\u{1F6A4}",
};

const dateLocale: Record<Lang, string | null> = {
  pt: null,
  en: "en-US",
  es: "es-ES",
};

function buildWhatsAppUrl(message: string) {
  const params = new URLSearchParams({
    phone: whatsappNumber,
    text: message.normalize("NFC"),
  });

  return `https://api.whatsapp.com/send?${params.toString()}`;
}

function formatDate(date: string, lang: Lang) {
  const f = content[lang].booking.form;
  if (!date) return f.dateFallback;

  const [year, month, day] = date.split("-").map(Number);
  const locale = dateLocale[lang];
  if (!locale) return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;

  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BookingForm({ lang }: { lang: Lang }) {
  const f = content[lang].booking.form;
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [experience, setExperience] = useState("");

  const message = useMemo(() => {
    const peopleText = people ? `${people} ${Number(people) === 1 ? f.peopleSingular : f.peoplePlural}` : f.peopleFallback;
    const experienceText = experience || f.experienceFallback;

    return `${f.greeting}\n\n${messageIcons.date} ${f.dateIconLabel}: ${formatDate(date, lang)}\n${messageIcons.people} ${f.peopleIconLabel}: ${peopleText}\n${messageIcons.experience} ${f.experienceIconLabel}: ${experienceText}\n\n${f.closing}`;
  }, [date, people, experience, f, lang]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__intro">
        <span>{f.step1}</span>
        <strong>{f.step1Title}</strong>
      </div>

      <div className="booking-form__fields">
        <label className="booking-field">
          <span>{f.dateLabel}</span>
          <input name="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
        </label>

        <label className="booking-field">
          <span>{f.peopleLabel}</span>
          <input name="people" type="number" min="1" inputMode="numeric" placeholder={f.peoplePlaceholder} value={people} onChange={(event) => setPeople(event.target.value)} required />
        </label>

        <label className="booking-field booking-field--wide">
          <span>{f.experienceLabel}</span>
          <select name="experience" value={experience} onChange={(event) => setExperience(event.target.value)} required>
            <option value="" disabled>{f.experiencePlaceholder}</option>
            <option value={f.experienceOptions.shared}>{f.experienceOptions.shared}</option>
            <option value={f.experienceOptions.private}>{f.experienceOptions.private}</option>
            <option value={f.experienceOptions.unsure}>{f.experienceOptions.unsure}</option>
          </select>
        </label>
      </div>

      <div className="booking-form__preview" aria-live="polite">
        <span>{f.step2}</span>
        <p>{message}</p>
      </div>

      <button className="button button--blue booking-form__submit" type="submit">
        {f.submit} <span aria-hidden="true">↗</span>
      </button>
      <small className="booking-form__note">{f.note}</small>
    </form>
  );
}
