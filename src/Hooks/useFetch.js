import axios from "axios";
import { useEffect, useState, useReducer } from "react";

const actions = {
  fetchRequest: "FETCH_DATA_REQUEST",
  fetchSuccess: "FETCH_DATA_SUCCESS",
  fetchFailure: "FETCH_DATA_FAILURE",
};

const initialState = {
  loading: true,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchRequest: {
      return { ...state, loading: true, data: null, error: null };
    }
    case actions.fetchSuccess: {
      return { ...state, loading: false, data: action.payload, error: null };
    }
    case actions.fetchFailure: {
      return { ...state, loading: false, error: action.payload, data: null };
    }
    default:
      return state;
  }
};

const useFetch = (url) => {
  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // setLoading(true);
    // setError(null);
    // setData(null);
    dispatch({ type: actions.fetchRequest });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: actions.fetchSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actions.fetchFailure, payload: err.message });
      });
  }, [url]);

  return data;
};

export default useFetch;
