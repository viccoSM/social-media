import React from "react";
import { Button } from "../../atom";

const CardUser = ({ data }) => {
  const localStorageId = () => {
    localStorage.setItem("userId", JSON.stringify(data));
  };
  return (
    <div className="card user-card shadow-sm">
      <div className="card-block p-3">
        <div className="user-image text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt=""
            className="rounded-circle"
          />
        </div>
        <div className="card-body text-center">
          <h5>{data.name}</h5>
          <p className="text-muted">
            {data.username} | {data.address.city}
          </p>
          <div className="d-flex justify-content-around">
            <Button
              href={`/user/${data.id}/posts`}
              type="link"
              isSecondary
              className="btn"
              isSmall
              onClick={localStorageId}
            >
              Posts
            </Button>
            <Button
              href={`/user/${data.id}/album`}
              type="link"
              isSecondary
              className="btn"
              isSmall
              onClick={localStorageId}
            >
              Album
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
