import React from "react";

function Loader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="spinner-grow text-dark m-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark m-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark m-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
