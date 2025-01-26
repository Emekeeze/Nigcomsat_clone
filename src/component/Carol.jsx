import first from "../assets/first.webp";
import second from "../assets/2nd.webp";
import third from "../assets/3rd.webp";
import fourth from "../assets/4th.webp";

export default function Carol() {
  return (
    <div className="container-fluid p-0" style={{ maxHeight: '500px', overflow: 'hidden' }}>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
          ></button>
        </div>

        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src={first}
              alt="Slide 1"
              className="d-block w-100"
              style={{
                height: '500px',
                objectFit: 'cover', // Crop the image
                objectPosition: '60% 8%', // Cut from the bottom
              }}
            />
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src={second}
              alt="Slide 2"
              className="d-block w-100"
              style={{
                height: '500px',
                objectFit: 'cover', // Crop the image
                objectPosition: '50% 20%', // Cut from the bottom
              }}
            />
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src={third}
              alt="Slide 3"
              className="d-block w-100"
              style={{
                height: '500px',
                objectFit: 'cover', // Crop the image
                objectPosition: '50% 20%', // Cut from the bottom
              }}
            />
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <img
              src={fourth}
              alt="Slide 4"
              className="d-block w-100"
              style={{
                height: '500px',
                objectFit: 'cover', // Crop the image
                objectPosition: '50% 20%', // Cut from the bottom
              }}
            />
          </div>
        </div>

        {/* Left and right controls/icons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
