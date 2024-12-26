import React from 'react'
import './NewsItem.css';

export default function NewsItem(props) {
  return (
    <div>
        <div className="card text-light">
            <img src={props.imageUrl} className="card-img-top rounded" alt="..." style={{height : "10rem",width : "14rem",objectFit: "cover",marginTop: "1rem"}}/>
            <div className="card-body  d-flex flex-column">
                <h5 className="card-title text-light">{props.title}...</h5>
                <p className="card-text" style={{color : "#b3b3b3"}}>{props.description?props.description:props.title}...</p>
                <a href={props.newsUrl} target='blank' className="btn btn-xs btn-success mt-auto" cursor= "pointer">Read More...</a>
            </div>
        </div>
    </div>
  )
}
