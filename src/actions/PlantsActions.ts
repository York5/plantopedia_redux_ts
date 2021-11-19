import axios from 'axios';
import { Dispatch } from 'redux';
import {
  PlantsDispatchTypes,
  PLANTS_LOADING,
  PLANTS_SUCCESS,
  PLANTS_FAIL,
  PLANT_LOADING,
  PLANT_SUCCESS,
  onePlantType,
} from './PlantsActionTypes';

export const GetPlants = () => async (dispatch: Dispatch<PlantsDispatchTypes>) => {
  try {
    dispatch({
      type: PLANTS_LOADING,
    });

    const res = await axios.get('http://localhost:8000/plants');

    dispatch({
      type: PLANTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PLANTS_FAIL,
    });
  }
};

export const GetOneProduct = (id: any) => async (dispatch: Dispatch<PlantsDispatchTypes>) => {
  console.log('Get One');
  try {
    dispatch({
      type: PLANT_LOADING,
    });

    const res = await axios.get(`http://localhost:8000/plants/${id}`);
    console.log(res, 'Response');
    dispatch({
      type: PLANT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {}
};

export const AddNewPlant = (plant: any) => async (dispatch: Dispatch<PlantsDispatchTypes>) => {
  const data = await axios.post('http://localhost:8000/plants/', plant);
};

export const EditNewPlant = (id: any, plant: any) => async (dispatch: Dispatch<PlantsDispatchTypes>) => {
  const data = await axios.patch(`http://localhost:8000/plants/${id}`, plant);
  GetPlants();
};

export const DeletePlant = (id: any) => async (dispatch: Dispatch<PlantsDispatchTypes>) => {
  const data = await axios.delete(`http://localhost:8000/plants/${id}`);
  GetPlants();
};
