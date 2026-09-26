import "./AboutBanar.css";

function AboutBanar() {
  return (
    <section className="about-banner">
      {/* Left half image container */}
      <div className="banner-split left-side"></div>
      
      {/* Right half image container */}
      <div className="banner-split right-side"></div>

      <div className="about-banner-overlay">
        <div className="container">
          <h1></h1>
        </div>
      </div>
    </section>
  );
}

export default AboutBanar;