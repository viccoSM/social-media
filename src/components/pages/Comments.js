import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/actions";

const Commants = () => {
  const { comments } = useSelector((state) => state.commentsReducer);
  const data = JSON.parse(localStorage.getItem("postId"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(data.id));
    console.log(comments);
  }, [dispatch]);

  return (
    <div className="container">
      <div className="card mt-3  shadow-sm">
        <div className="card-body">
          <h5 className="card-title"> {data.title} </h5>
          <p className="card-text mb-4">{data.body}</p>

          {comments.map((obj, index) => {
            return (
              <div className="card mt-3  shadow-sm" key={index}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i class="fas fa-user-circle"></i> {obj.name}
                  </h5>
                  <p className="card-text">{obj.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Commants;
