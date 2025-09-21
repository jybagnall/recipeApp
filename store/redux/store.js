import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./favs";

const store = configureStore({
  reducer: {
    favMeals: favReducer,
  },
});

export default store;

// favMeals는 **(reducer)의 "이름(key). 즉,
// "./favs"에서 관리하는 상태를 store에 등록할 때
// favMeals 라는 이름으로 등록.
