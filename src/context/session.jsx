import { createStore, combineReducers, applyMiddleware } from "redux";
import { sessionService, sessionReducer } from "redux-react-session";

const rootReducer = combineReducers({
    session: sessionReducer,
    // reducers อื่นๆ ที่คุณมี
});

const store = createStore(rootReducer, applyMiddleware(sessionService));

sessionService.initSessionService(store);
