import "./StaticImage.css";

function StaticImage({ title, image }) {
  return (
    <section
      className="static-image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="static-overlay"></div>

      <div className="static-content" data-aos="fade-right">
        <div className="title-strip"></div>

        <div className="title-content">
          <h2>{title}</h2>
        </div>
      </div>
    </section>
  );
}

export default StaticImage;