import "./ModernStatic.css";

const ModernStatic = ({ image }) => {
  return (
    <section className="modernStatic">
      <div
        className="modernOverlay"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Left Side Ka Diamond Box */}
        <div className="diamondBox">
          <div className="diamondContent">
            <span>Our</span>
            <h2>Photography</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
        </div>

        {/* Right Side Ke Grid Services */}
        <div className="serviceWrapper">

          <div className="serviceBox">
            <i className="bi bi-camera icon"></i>
            <div>
              <h3>Creative Photography</h3>
              <p>
                Lorem ipsum dolor sit amet adipisicing elit. Aenean ac lorem
                pretium laoreet enim at.
              </p>
            </div>
          </div>

          <div className="serviceBox">
            <i className="bi bi-magic icon"></i>
            <div>
              <h3>Professional Editing</h3>
              <p>
                Lorem ipsum dolor sit amet adipisicing elit. Aenean ac lorem
                pretium laoreet enim at.
              </p>
            </div>
          </div>

          <div className="serviceBox">
            <i className="bi bi-image icon"></i>
            <div>
              <h3>High-Quality Images</h3>
              <p>
                Lorem ipsum dolor sit amet adipisicing elit. Aenean ac lorem
                pretium laoreet enim at.
              </p>
            </div>
          </div>

          <div className="serviceBox">
            <i className="bi bi-heart icon"></i>
            <div>
              <h3>Perfect Moments</h3>
              <p>
                Lorem ipsum dolor sit amet adipisicing elit. Aenean ac lorem
                pretium laoreet enim at.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernStatic;