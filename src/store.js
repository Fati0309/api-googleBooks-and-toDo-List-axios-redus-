import { createStore } from "redux";
import { reducer } from "./components/redux/livre/reducer";

const store = createStore(reducer);

export default store;