import React from "react";
import { Link } from "react-router-dom";
import data from "./Data";

function Home() {
  return (
    <>
      {data.map(({ id, imgSrc, name, destination, description }) => {
        return (
          <div key={id} className="card" style={{ width: "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt="img" />
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h5 className="card-title">{destination}</h5>
              <p className="card-text">{description}</p>
              <Link to={`/details/${name}`} className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;
