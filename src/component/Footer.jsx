import satelite2 from "../assets/logo-footer.png";
import cot from "../assets/coat-of-arm.png";
import Sona from "../assets/son.jpg"
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className="container-fluid bg-dark">
      <div className="container  py-4 py-md-5 px-4 px-md-3 text-body-secondary ">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <img src={satelite2} alt="" />
            <ul className="list-unstyled small">
              <li className="my-4 text-white">
                The desire to connect the unconnected via satellite in Africa is
                NIGCOMSATs aspiration. We provide innovation and cutting edge
                satellite solutions.
              </li>

              <li className="mb-2 btn btn-primary">Contact Us</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3  ">
            <h5 className="text-white"> Services</h5>
            <h5>Links</h5>
            <ul className="list-unstyled ">
              <li className="mb-2  ">
                <a className="text-decoration-none text-white" href="/">
                  Broadcasting
                </a>
              </li>
              <li className="mb-2">
                <a className="text-decoration-none text-white" href="#">
                  transponder
                </a>
              </li>
              <li className="mb-2">
                <a className="text-decoration-none text-white" href="#">
                  Leasing
                </a>
              </li>
              <li className="mb-2">
                <a className="text-decoration-none text-white" href="#">
                  Broadband
                </a>
              </li>
              <li className="mb-2">
                <a className="text-decoration-none text-white" href="#">
                  Navigation
                </a>
              </li>
              <li className="mb-2">
                <a className="text-decoration-none text-white" href="#">
                  value Added{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="text-decoration-none text-white"
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="text-white">EVENTS</h5>
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white">
                  Satelite Week
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white">
                  News
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-white">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="text-white">Quick Links</h5>
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="text-decoration-none text-white"
                >
                  Look Angle
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noopener"
                >
                  FMCIDE
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="text-decoration-none text-white"
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  Servicom
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="text-white">INFO</h5>
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  className="text-decoration-none text-white"
                  href="https://github.com/twbs/bootstrap/issues"
                  target="_blank"
                  rel="noopener"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="text-decoration-none text-white"
                  href="https://github.com/twbs/bootstrap/discussions"
                  target="_blank"
                  rel="noopener"
                >
                  Terms of Use{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="text-decoration-none text-white"
                  href="https://github.com/sponsors/twbs"
                  target="_blank"
                  rel="noopener"
                >
                  Privercy Policy
                </a>
              </li>
            </ul>
            <div className="d-flex">
    <img src={cot} style={{ width: "100px", height: "100px" }} />
    <img src={Sona} style={{ width: "100px", height: "100px" }} />
</div>

          </div>
        </div>
      </div>
      <div className="bg-danger container-fluid p-0 m-0  d-flex justify-content-center align-items-center " style={{height:"100px"}}>
    <p className="text-white pt-2">© {currentYear} The Official website of NIGCOMSAT LTD. All Rights Reserved</p>
</div>

    </div>
  );
}
