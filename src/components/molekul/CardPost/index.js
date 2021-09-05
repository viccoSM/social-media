import React from "react";
import { Button } from "../../atom";

const CardPost = ({ data, onClick }) => {
  return (
    <div className="card mt-3  shadow-sm">
      <div className="card-body">
        <h5 className="card-title"> {data.title} </h5>
        <p className="card-text">{data.body}</p>
        <Button
          type="link"
          className="btn"
          href={`/user/comments/${data.id}`}
          onClick={onClick}
        >
          <i className="fas fa-comment"></i>
        </Button>
      </div>
    </div>
  );
};

export default CardPost;
