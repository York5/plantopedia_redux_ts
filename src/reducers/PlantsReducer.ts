import {
  PlantsDispatchTypes,
  PlantsType,
  onePlantType,
  PLANTS_FAIL,
  PLANTS_LOADING,
  PLANTS_SUCCESS,
  PLANT_FAIL,
  PLANT_LOADING,
  PLANT_SUCCESS,
} from '../actions/PlantsActionTypes';

interface DefaultStateI {
  loading: boolean;
  plants?: PlantsType;
  plantDetails?: onePlantType;
}

const defaultState: DefaultStateI = {
  loading: false,
  plants: [],
  // plantDetails: {},
};

const plantsReducer = (state: DefaultStateI = defaultState, action: PlantsDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case PLANTS_FAIL:
      return {
        loading: false,
      };
    case PLANTS_LOADING:
      return {
        loading: true,
      };
    case PLANTS_SUCCESS:
      return {
        loading: false,
        plants: action.payload,
      };

    case PLANT_FAIL:
      return {
        loading: false,
      };
    case PLANT_LOADING:
      return {
        loading: true,
      };
    case PLANT_SUCCESS:
      return {
        loading: false,
        plantDetails: action.payload,
      };
    default:
      return state;
  }
};

export default plantsReducer;
