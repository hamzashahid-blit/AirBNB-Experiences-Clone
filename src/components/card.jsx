import React from "react";
import Star from "../assets/star.png";

function Card(props) {
  // Handle if the image could not be found.
  const data = props.data;
  const image = data.coverImg && require(`../assets/${data.coverImg}`);
  let badgeText;
  let cardClasses;

  if (data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (data.location === "Online") {
    badgeText = "Online";
  }

  if (badgeText === "Online") {
    cardClasses = "card--online-badge";
  } else if (badgeText === "SOLD OUT") {
    cardClasses = "card--sold-out-badge";
  }

  return (
    <div className="card">
      {badgeText && <div className={cardClasses}>{badgeText}</div>}
      <img className="card--picture" src={image} />
      <div className="card--stats">
        <img className="card--star" src={Star} />
        <span> {data.stats.rating.toFixed(1)}</span>
        <span className="card--reviews"> ({data.stats.reviewCount}) </span>
        <span className="card--place">· {data.location}</span>
        <div className="card--title">{data.title}</div>
        <div className="card--price">
          <span className="card--cost">From ${data.price}</span>
          <span className="card--per-person"> / person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
