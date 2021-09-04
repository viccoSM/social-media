import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import { CardUser } from "../molekul";

const Users = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {users.map((obj, index) => {
          return (
            <div
              key={index}
              className={`col-12 col-lg-3 col-md-4 col-sm-6 mt-3 ${index}`}
            >
              <CardUser data={obj} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
