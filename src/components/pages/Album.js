import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../../redux/actions";
import { Button } from "../atom";
import { CardUser } from "../molekul";

const Album = () => {
  const { albums } = useSelector((state) => state.albumReducer);
  const data = JSON.parse(localStorage.getItem("userId"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums(data.id));
    console.log(albums);
  }, [dispatch]);

  return (
    <div className="container albums">
      <div className="row">
        <div className="col-md-3 pt-3">
          <CardUser data={data} />
        </div>
        <div className="col-md-9">
          <h3 className="mt-3">album</h3>
          <div className="row">
            {albums.map((obj, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-lg-3 col-md-4 col-sm-6 mt-3"
                >
                  <div className="card" style={{ height: "100%" }}>
                    <Button
                      type="link"
                      className="text-decoration-none"
                      href={`/user/${data.id}/album/${obj.id}`}
                      onClick={() =>
                        localStorage.setItem("albumId", JSON.stringify(obj))
                      }
                    >
                      <div className="card-body text-left">{obj.title}</div>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
