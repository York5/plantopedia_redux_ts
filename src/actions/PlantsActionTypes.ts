export const PLANTS_LOADING = 'PLANTS_LOADING';
export const PLANTS_FAIL = 'PLANTS_FAIL';
export const PLANTS_SUCCESS = 'PLANTS_SUCCESS';

export const PLANT_LOADING = 'PLANT_LOADING';
export const PLANT_FAIL = 'PLANT_FAIL';
export const PLANT_SUCCESS = 'PLANT_SUCCESS';

export type onePlantType = {
  id: number;
  name: string;
  description: string;
  type: string;
  image: string;
};

export type PlantsType = Array<onePlantType>;

export interface PlantsLoading {
  type: typeof PLANTS_LOADING;
}

export interface PlantsFail {
  type: typeof PLANTS_FAIL;
}

export interface PlantsSuccess {
  type: typeof PLANTS_SUCCESS;
  payload: PlantsType;
}

export interface PlantLoading {
  type: typeof PLANT_LOADING;
}

export interface PlantFail {
  type: typeof PLANT_FAIL;
}

export interface PlantSuccess {
  type: typeof PLANT_SUCCESS;
  payload: onePlantType;
}

export type PlantsDispatchTypes = PlantsLoading | PlantsFail | PlantsSuccess | PlantLoading | PlantFail | PlantSuccess;
