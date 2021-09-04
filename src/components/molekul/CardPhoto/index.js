import React from "react";

const CardPhotos = ({ data }) => {
  return (
    <div className="card m-1" style={{ width: "16rem" }}>
      <img src={data.url} alt={data.thumbnailUrl} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{data.title}</p>
      </div>
    </div>
  );
};

export default CardPhotos;
