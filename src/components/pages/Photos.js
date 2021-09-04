import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../redux/actions";
import CardPhotos from "../molekul/CardPhoto";

const Photos = () => {
  const { photos } = useSelector((state) => state.photosReducer);
  const data = JSON.parse(localStorage.getItem("albumId"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(data.id));
    console.log(photos);
  }, [dispatch]);

  return (
    <div className="container photos">
      <h5 className="mt-3">{data.title}</h5>
      <div className="row">
        {photos.map((obj, index) => {
          return <CardPhotos key={index} data={obj} />;
        })}
      </div>
    </div>
  );
};

export default Photos;
