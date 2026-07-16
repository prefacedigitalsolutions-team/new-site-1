import "./StaticImage.css";

function StaticImage({ title, image }) {
  return (
    <section
      className="static-image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
    </section>
  );
}

export default StaticImage;