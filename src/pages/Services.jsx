function Services() {
  return (
    <section id="services" className="section">
      <div className="section-divider">Nos Services</div>

      <div className="cards">
        <div className="card-box">
          <h3>Nettoyage</h3>
          <p>Détartrage professionnel et polissage. Recommandé tous les 6 mois pour maintenir une bonne santé bucco-dentaire.</p>
          <div className="card-price">70$ – 150$</div>
          <div className="card-duration">⏱ 60 min</div>
        </div>

        <div className="card-box">
          <h3>Blanchiment</h3>
          <p>Éclaircissement professionnel en cabinet. Jusqu'à 8 teintes plus blanc en une seule séance.</p>
          <div className="card-price">300$ – 450$</div>
          <div className="card-duration">⏱ 90 min</div>
        </div>

        <div className="card-box">
          <h3>Examen complet</h3>
          <p>Évaluation complète de votre santé buccale incluant radiographies et bilan parodontal.</p>
          <div className="card-price">100$ – 200$</div>
          <div className="card-duration">⏱ 45 min</div>
        </div>
      </div>
    </section>
  );
}

export default Services;