import React from 'react'
import "./NewsItem.css";

export default function NewsItem(props) {
  return (
    <div>
      <span className="badge bg-danger" style={{marginLeft : "80%"}}>{props.tag}</span>
        <div className="card text-light">
            <img src={props.imageUrl} className="card-img-top rounded" alt="..." style={{height : "10rem",width : "14rem",objectFit: "cover",marginTop: "1rem"}}/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-light">{props.title}...</h5>
                <p className="card-text desc" style={{color : "#b3b3b3"}}>{props.description?props.description:props.title}...<span className="badge bg-danger">New</span></p>
                <p className="card-text text-light"><small>By : {props.author} on {props.publishedAt}</small></p>
                <a href={props.newsUrl} target='blank' className="btn btn-xs btn-success mt-auto" cursor= "pointer">Read More...</a>
            </div>
        </div>
    </div>
  )
}
