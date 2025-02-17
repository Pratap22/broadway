import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../reducers/transaction";
import postReducer from "../reducers/post";

export default configureStore({
  reducer: {
    transaction: transactionReducer,
    post: postReducer,
  },
});
