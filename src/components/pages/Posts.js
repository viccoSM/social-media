import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions";
import { CardPost, CardUser } from "../molekul";

const Posts = () => {
  const { posts } = useSelector((state) => state.postsReducer);
  const data = JSON.parse(localStorage.getItem("userId"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(data.id));
  }, [dispatch]);
  return (
    <div className="container home">
      <div className="row">
        <div className="col-md-3 pt-3">
          <CardUser data={data} />
        </div>
        <div className="col-md-9">
          {posts.map((obj, index) => {
            return (
              <CardPost
                key={index}
                data={obj}
                onClick={() =>
                  localStorage.setItem("postId", JSON.stringify(obj))
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
