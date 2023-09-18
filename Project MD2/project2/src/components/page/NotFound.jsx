import React from "react";
import Spinner from "react-bootstrap/Spinner";

function NotFound() {
  return (
    <div className="notFound">
      {" "}
      <Spinner animation="grow" variant="danger" />
      <span>404: Page Not Found</span>
    </div>
  );
}

export default NotFound;
