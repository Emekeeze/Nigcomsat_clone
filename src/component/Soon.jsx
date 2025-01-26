import so from "../assets/Coming-soon.png"

export default function Soon() {
  return (
    <div
      className="junior container-fluid p-5 m-6 d-flex justify-content-around align-items-center"
      
    >
      <div className="row w-100">
        <div className="col-md-5 d-flex flex-column justify-content-center align-content-center mr-4">
          <h2 className="display-1">ACCELERATOR 2025</h2>
          <p className="text-start">
            Upcoming Event{" "}
            <span>
              <a href="#" className="text-primary text-decoration-none">
                Register Now
              </a>
            </span>
          </p>
        </div>
        <div className="col-md-7 d-flex justify-content-center">
          <img src={so} alt="Coming Soon" style={{ width: '300px' }} />
        </div>
      </div>
    </div>
  );
}
