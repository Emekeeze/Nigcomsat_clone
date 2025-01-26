import image from "../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-white navbar-danger">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand" href="http://nigcomsat.gov.ng">
            <img
              src={image}
              alt="Logo"
              style={{ height: "40px" }} // Adjust height as needed
            />
          </a>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  REPORTS/POLICIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PARTNERSHIP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EVENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ADVERTS/TENDERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ACCELERATOR
                </a>
              </li>
              {/* CONTACT US Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  CONTACT US
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Contacts
                    </a>
                  </li>
                  <li className="dropdown-submenu dropstart">
                    <a className="dropdown-item dropdown-toggle" href="#">
                      FAQs
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          General FAQs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Broadband FAQs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          DTH FAQs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Career
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Servicom
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
