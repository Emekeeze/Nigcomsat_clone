import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Header() {
  return (
    <div >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-6 p-0 m-0 bg-secondary px-4">
            <nav className="nav">
              <a
                className="nav-link active  "
                style={{ color: "#3c4043" }}
                href="#"
              >
                FOI portal
              </a>
              <a className="nav-link" href="#" style={{ color: "#3c4043" }}>
                {" "}
                National Policy on 5G
              </a>
            </nav>
          </div>
          <div className="col-6 bg-secondary d-flex justify-content-end p-0 align-items-center px-4">
            <a href="#" className="nav-link mx-2 p-2 facebook icon facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="nav-link mx-2 p-2 icon instagram">
              <IoLogoInstagram />
            </a>
            <a href="#" className="nav-link  mx-2 p-2 icon linkedin ">
              {" "}
              <FaLinkedin />
            </a>
            <a href="#" className="nav-link mx-2 p-2 icon twitter">
              {" "}
              <FaTwitter />
            </a>
            <a href="#" className="nav-link mx-2 p-2 icon youtube">
              {" "}
              <FaYoutube />
            </a>
          </div>
          
        </div>
      </div>
     
    </div>
  );
}
