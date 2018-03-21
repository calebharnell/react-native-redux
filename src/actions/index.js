export const ADD_EMAIL = 'ADD_EMAIL';

export const addEmail = (email) => {
  return {
    type: 'ADD_EMAIL',
    email: email,
  };

// export function getData() {
//   return (dispatch) => {

//     //Make API Call
//     //For this example, I will be using the sample data in the json file
//     //delay the retrieval [Sample reasons only]
//     setTimeout(() => {
//       const data = Data.instructions;
//       dispatch({ type: DATA_AVAILABLE, data: data });
//     }, 2000);

//   };
}