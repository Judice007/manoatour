"use client";

import { FormEvent, useMemo, useState } from "react";

const whatsappNumber = "5524992958552";
const messageIcons = {
  date: "\u{1F4C5}\uFE0F",
  people: "\u{1F465}",
  experience: "\u{1F6A4}",
};

function buildWhatsAppUrl(message: string) {
  const params = new URLSearchParams({
    phone: whatsappNumber,
    text: message.normalize("NFC"),
  });

  return `https://api.whatsapp.com/send?${params.toString()}`;
}

function formatDate(date: string) {
  if (!date) return "data a definir";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [experience, setExperience] = useState("");

  const message = useMemo(() => {
    const peopleText = people ? `${people} ${Number(people) === 1 ? "pessoa" : "pessoas"}` : "quantidade a informar";
    const experienceText = experience || "tipo de experiência a definir";

    return `Olá, Manoa! Gostaria de consultar um passeio.\n\n${messageIcons.date} Data: ${formatDate(date)}\n${messageIcons.people} Pessoas: ${peopleText}\n${messageIcons.experience} Experiência: ${experienceText}\n\nPode me informar os valores e a disponibilidade?`;
  }, [date, people, experience]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__intro">
        <span>01 — Preencha</span>
        <strong>Conte como será o passeio</strong>
      </div>

      <div className="booking-form__fields">
        <label className="booking-field">
          <span>Data desejada</span>
          <input name="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
        </label>

        <label className="booking-field">
          <span>Quantidade de pessoas</span>
          <input name="people" type="number" min="1" inputMode="numeric" placeholder="Ex.: 4" value={people} onChange={(event) => setPeople(event.target.value)} required />
        </label>

        <label className="booking-field booking-field--wide">
          <span>Tipo de experiência</span>
          <select name="experience" value={experience} onChange={(event) => setExperience(event.target.value)} required>
            <option value="" disabled>Selecione uma opção</option>
            <option value="Passeio compartilhado">Passeio compartilhado</option>
            <option value="Passeio privativo">Passeio privativo</option>
            <option value="Ainda não sei — quero orientação">Ainda não sei — quero orientação</option>
          </select>
        </label>
      </div>

      <div className="booking-form__preview" aria-live="polite">
        <span>02 — Mensagem pronta</span>
        <p>{message}</p>
      </div>

      <button className="button button--primary booking-form__submit" type="submit">
        Abrir mensagem no WhatsApp <span aria-hidden="true">↗</span>
      </button>
      <small className="booking-form__note">Você poderá revisar a mensagem antes de enviar.</small>
    </form>
  );
}
