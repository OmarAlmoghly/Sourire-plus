import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Booking() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: '', praticien: '', date: '', heure: '', nom: '', email: ''
  });
  const [sending, setSending] = useState(false);

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const confirmer = () => {
    if (!form.nom || !form.email) return;
    setSending(true);

    emailjs.send(
      'Dentiste service',
      'template_s2eafom',
      {
        patient_nom:   form.nom,
        patient_email: form.email,
        service:       form.service,
        praticien:     form.praticien,
        date:          form.date,
        heure:         form.heure,
      },
      'xMBpANYBCP3f5jfHm'
    )
    .then(() => {
      setSending(false);
      setStep(4);
    })
    .catch((err) => {
      console.error('Erreur EmailJS:', err);
      setSending(false);
      setStep(4);
    });
  };

  return (
    <section id="booking" className="section">
      <div className="section-divider">Réservation</div>

      {step === 1 && (
        <div className="booking-form">
          <div className="booking-step-label">Étape 1 — Choisir un service</div>

          <select
            value={form.service}
            onChange={e => upd('service', e.target.value)}
          >
            <option value="">— Choisir un service —</option>
            <option>Nettoyage</option>
            <option>Blanchiment</option>
            <option>Examen complet</option>
            <option>Traitement de canal</option>
          </select>

          <select
            value={form.praticien}
            onChange={e => upd('praticien', e.target.value)}
          >
            <option value="">— Choisir un praticien —</option>
            <option>Dr. Fontaine</option>
            <option>Dr. Chen</option>
            <option>Dr. Diallo</option>
          </select>

          <button
            onClick={() => form.service && form.praticien && setStep(2)}
            style={{ opacity: form.service && form.praticien ? 1 : 0.4 }}
          >
            Continuer →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="booking-form">
          <div className="booking-step-label">Étape 2 — Date et heure</div>

          <input
            type="date"
            min={minDate}
            value={form.date}
            onChange={e => upd('date', e.target.value)}
            style={{ colorScheme: 'dark' }}
          />

          <select
            value={form.heure}
            onChange={e => upd('heure', e.target.value)}
          >
            <option value="">— Choisir une heure —</option>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
          </select>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setStep(1)}>← Retour</button>
            <button
              onClick={() => form.date && form.heure && setStep(3)}
              style={{ opacity: form.date && form.heure ? 1 : 0.4 }}
            >
              Continuer →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="booking-form">
          <div className="booking-step-label">Étape 3 — Vos informations</div>

          <input
            type="text"
            placeholder="Prénom et nom"
            value={form.nom}
            onChange={e => upd('nom', e.target.value)}
          />

          <input
            type="email"
            placeholder="Courriel"
            value={form.email}
            onChange={e => upd('email', e.target.value)}
          />

          <div className="booking-summary">
            <p>📋 {form.service} · {form.praticien}</p>
            <p>📅 {form.date} à {form.heure}</p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setStep(2)}>← Retour</button>
            <button
              onClick={confirmer}
              style={{ opacity: form.nom && form.email ? 1 : 0.4 }}
            >
              {sending ? 'Envoi...' : 'Confirmer le rendez-vous ✓'}
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="confirmation">
          <div className="confirmation-icon">✦</div>
          <h3>Rendez-vous confirmé</h3>

          <div className="confirmation-details">
            <p><span>Patient</span><span>{form.nom}</span></p>
            <p><span>Service</span><span>{form.service}</span></p>
            <p><span>Praticien</span><span>{form.praticien}</span></p>
            <p><span>Date</span><span>{form.date}</span></p>
            <p><span>Heure</span><span>{form.heure}</span></p>
            <p><span>Courriel</span><span>{form.email}</span></p>
          </div>

          <p className="confirmation-note">
            Une confirmation a été envoyée à {form.email}.<br/>
            Veuillez arriver 10 minutes à l'avance.
          </p>

          <button onClick={() => {
            setStep(1);
            setForm({ service:'', praticien:'', date:'', heure:'', nom:'', email:'' });
          }}>
            Nouveau rendez-vous
          </button>
        </div>
      )}
    </section>
  );
}

export default Booking;