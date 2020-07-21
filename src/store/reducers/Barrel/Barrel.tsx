import {
  setIdBarrel,
} from '../../actions/Barrel/Barrel';

export type ActionTypes =
  ReturnType<typeof setIdBarrel>
  ;

export const barrel = function (state: {
  id: number
} = {
    id: 0,
  }, action: ActionTypes) {
  switch (action.type) {
    case 'BARREL_SET_ID':
      return { ...state, id: action.payload };
    default:
      return state;
  }
};