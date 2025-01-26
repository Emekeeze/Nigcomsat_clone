import satelite from "../assets/satelite1.webp";
import { FaCogs } from "react-icons/fa";

export default function Service() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 mb-4">
          <h4 className="text-start text-dark serve mb-2">Our Services</h4>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column align-items-start">
          {/* Satellite Image */}
          <div className="mb-3">
            <img
              src={satelite}
              alt="Satellite providing services"
              style={{ width: "300px", height: "300px" }}
              className="img-fluid rounded shadow-lg"
            />
          </div>
          {/* Icon and Text */}
          <div className="text-center text-secondary mb-1">
            <FaCogs className="mr-2" />
            <span className=" p-1">Services</span>
          </div>
          {/* Service Link */}
          <div>
            <h3 className="text-center man">
              <a
                href="#"
                className="text-decoration-none text-dark service-link"
              >
                Broadcasting
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
