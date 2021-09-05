import Axios from "axios";

export const getUsers = () => {
  return (dispatch) => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: "GET_USERS", payload: responseAPI });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};

export const getPosts = (id) => {
  return (dispatch) => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: "GET_POSTS", payload: responseAPI });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};

export const getAlbums = (id) => {
  return (dispatch) => {
    Axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: "GET_ALBUMS", payload: responseAPI });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};

export const getPhotos = (id) => {
  return (dispatch) => {
    Axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: "GET_PHOTOS", payload: responseAPI });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};

export const getComments = (id) => {
  return (dispatch) => {
    Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: "GET_COMMENTS", payload: responseAPI });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
};

export const setFormData = (formType, formValue) => {
  return { type: "SET_COMMENT", formType, formValue };
};

export const addComment = (form) => {
  const data = new FormData();
  data.append("postId", form.postId);
  data.append("body", form.body);
  data.append("name", form.name);
  data.append("email", form.email);
  Axios.get(`https://jsonplaceholder.typicode.com/comments`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
