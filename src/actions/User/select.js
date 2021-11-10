export const SELECT_USER = "SELECT_USER";
export const SELECT_YEAR = "SELECT_YEAR";

export const selectUser = (payload) => {
  return {
    type: SELECT_USER,
    payload,
  };
};

export const selectYear = (year) => {
  return {
    type: SELECT_YEAR,
    payload: year,
  };
};
