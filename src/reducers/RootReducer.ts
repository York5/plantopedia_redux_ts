import { combineReducers } from 'redux';
import plantsReducer from './PlantsReducer';

const RootReducer = combineReducers({
  plants: plantsReducer,
});

export default RootReducer;
