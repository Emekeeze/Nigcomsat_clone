import satellite1 from "../assets/satelite1.webp";
import satellite2 from "../assets/satelite2.webp";
import satellite3 from "../assets/statelite3.webp";
import satellite4 from "../assets/satelite4.webp";
import satellite5 from "../assets/satelite5.webp";
import { FaCogs } from "react-icons/fa";

import serviceData from "../Service.json";

// Replace JSON image paths with imported images
const resolvedServiceData = serviceData.map((service, index) => {
  const images = [satellite1, satellite2, satellite3, satellite4, satellite5];
  return {
    ...service,
    image: images[index], // Replace the image path
  };
});

export default function ServiceList() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 mb-4 ">
          <h4 className="text-start text-dark serve mt-4 heading-line">
            {" "}
            Our Services
          </h4>
        </div>
        {resolvedServiceData.map((service, index) => (
          <div key={index} className="col-md-4 mb-4 ">
            <div className="card  border border-white rounded-0">
              <img
                src={service.image}
                className="card-img-top rounded-0"
                alt={service.title}
                style={{ height: "250px", objectFit: "cover " }}
              />
              <div className="card-body ps-0 ">
                <p className="card-text text-muted">
                  <FaCogs className="mr-2" />
                  <span className=" p-1">{service.subtitle}</span>
                </p>
                <h6 className="card-title"> {service.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
