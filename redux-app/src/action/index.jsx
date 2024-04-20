/** @format */



export const addData = (data) => ({
  type: "ADD_DATA",
  payload: data,
});

export const removeData = (index) => ({
  type: "REMOVE_DATA",
  payload: index,
});
