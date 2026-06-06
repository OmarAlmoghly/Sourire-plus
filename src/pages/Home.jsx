function Home() {
  return (
    <>
      <nav className="portfolio-navbar">
        <a href="/" className="navbar-brand-custom">SOURIRE PLUS</a>
        <div className="nav-links-custom">
          <a href="#services" className="nav-link-custom">Services</a>
          <a href="#treatment" className="nav-link-custom">Traitement</a>
          <a href="#booking" className="nav-link-custom">Réservation</a>
          <a href="#contact" className="nav-link-custom">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="tag">CLINIQUE DENTAIRE • SOURIRE PLUS</p>
        <i className="bi bi-heart-pulse tooth-icon"></i>
        <h1>Sourire<span>Plus</span></h1>
        <p className="hero-text">Des soins dentaires modernes pour toute la famille.</p>
        <a href="#booking" className="gold-btn">PRENDRE RENDEZ-VOUS</a>
      </section>
    </>
  );
}

export default Home;