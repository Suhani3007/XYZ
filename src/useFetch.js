import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "api-request":
      return { ...state, data: [], loading: true };
    case "fetch-data":
      return { ...state, data: payload.data, loading: false };
    case "error":
      return { ...state, data: [], error: payload };
    default:
      return state;
  }
};

export const useFetch = (BASE_URL) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "api-request" });
    axios
      .get(BASE_URL)
      .then((response) => {
        dispatch({ type: "fetch-data", payload: response });
      })
      .catch((error) => dispatch({ type: "error", payload: error }));
  }, [BASE_URL]);
  return state;
};
