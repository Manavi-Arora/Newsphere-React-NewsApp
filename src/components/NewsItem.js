import React from "react";
import "./NewsItem.css";

export default function NewsItem(props) {
  return (
    <div>
      <div
        className="card text-light"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          className="badge bg-danger"
          style={{
            zIndex: 1,
            position: "absolute",
            right: 0,
            top: 0,
            padding: "0.4rem",
          }}
        >
          {props.tag}
        </span>
        <img
          src={props.imageUrl}
          className="card-img-top rounded"
          alt="..."
          style={{
            height: "10rem",
            width: "16rem",
            objectFit: "cover",
            marginTop: "1rem",
          }}
        />
        <div
          className="card-body d-flex flex-column container"
          style={{justifyContent: "center" }}
        >
          <h5 className="card-title text-light">{props.title}...</h5>
          <p className="card-text desc" style={{ color: "#b3b3b3" }}>
            {props.description ? props.description : props.title}...
            {props.newBadge && <span className="badge bg-danger">New</span>}
          </p>
          <p className="card-text text-light">
            <small>
              By : {props.author} on {props.publishedAt}
            </small>
          </p>
          <a
            href={props.newsUrl}
            target="blank"
            className="btn btn-xs btn-success mt-auto"
            cursor="pointer"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}
