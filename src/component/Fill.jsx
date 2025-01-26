const Fill = () => {
  return (
    <div>
      <div className="container bg-light">
        <div className="row">
          {/* Left Section */}
          <div className="col-6 bg-secondary text-white d-flex  justify-content-center align-items-center">
            <h1>Joy is coming</h1>
            <p>Make haste to attend, as we are waiting for you!</p>
            <button className="btn btn-light mx-3">Click</button>
          </div>

          {/* Remaining Columns */}
          <div className="col bg-primary d-flex justify-content-center align-items-center text-white">
            <p>Column 2</p>
          </div>
          <div className="col bg-primary d-flex justify-content-center align-items-center text-white">
            <p>Column 3</p>
          </div>
          <div className="col bg-primary d-flex justify-content-center align-items-center text-white">
            <p>Column 4</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fill;
