function Treatment() {
  return (
    <section id="treatment" className="section">
      <div className="section-divider">Traitement de Canal</div>

      <p className="content-text">
        Le traitement de canal (endodontie) permet de sauver une dent dont la pulpe
        est infectée ou endommagée, tout en éliminant complètement la douleur.
        La procédure est réalisée sous anesthésie locale et est généralement indolore.
      </p>

      <div className="treatment-steps">
        <div className="treatment-step">
          <div className="step-num">1</div>
          <div><strong>Radiographie diagnostique</strong><p>Évaluation de l'infection et de l'étendue des dommages.</p></div>
        </div>
        <div className="treatment-step">
          <div className="step-num">2</div>
          <div><strong>Anesthésie locale</strong><p>La zone est complètement endormie, vous ne sentez rien.</p></div>
        </div>
        <div className="treatment-step">
          <div className="step-num">3</div>
          <div><strong>Nettoyage des canaux</strong><p>Retrait du tissu pulpaire infecté et désinfection complète.</p></div>
        </div>
        <div className="treatment-step">
          <div className="step-num">4</div>
          <div><strong>Obturation et couronne</strong><p>Scellement des canaux et pose d'une couronne de protection.</p></div>
        </div>
      </div>

      <div className="price-box">
        <div className="price-main">Prix estimé : <strong>600$ – 1 200$</strong></div>
        <div className="price-note">
          💡 Une partie peut être couverte par votre assurance dentaire.
          Nous vérifions votre couverture avant le traitement.
        </div>
      </div>

      <a href="#booking" className="gold-btn" style={{ marginTop: '30px', display: 'inline-block' }}>
        Prendre rendez-vous
      </a>
    </section>
  );
}

export default Treatment;