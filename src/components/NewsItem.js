import React from 'react'
import './NewsItem.css';

export default function NewsItem(props) {
  return (
    <div>
        <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..." style={{height : "10rem",width : "14rem"}}/>
            <div className="card-body">
                <h5 className="card-title text-light">{props.title}...</h5>
                <p className="card-text" style={{color : "#b3b3b3"}}>{props.description?props.description:props.title}...</p>
                <a href={props.newsUrl} target='blank' className="btn btn-sm btn-primary" cursor= "pointer">Read More</a>
            </div>
        </div>
    </div>
  )
}
