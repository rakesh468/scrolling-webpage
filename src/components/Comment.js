import React from "react";

function Comment({ item: { email, body } }) {
  return (
    <div className="col-sm-4 my-2 ">
      <div className="card shadow-lg w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
          <p className="card-subtitle mb-2 text-center">
            <b>Email:</b> {email}
          </p>
          <hr />
          <p className="card-text">
            <b>Comments : </b>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
