import {
  setPriceVisibleCallForm,
  setPriceVisibleOrderForm,
  setPriceVisibleProducts,
} from '../../actions/PriceVisible/PriceVisible';

export type ActionTypes =
  ReturnType<typeof setPriceVisibleCallForm>
  | ReturnType<typeof setPriceVisibleOrderForm>
  | ReturnType<typeof setPriceVisibleProducts>
  ;

export const priceVisible = function (state: {
  visibleCallForm: boolean
  visibleOrderForm: boolean
  visibleProducts: boolean
} = {
    visibleCallForm: false,
    visibleOrderForm: false,
    visibleProducts: true,
  }, action: ActionTypes) {
  switch (action.type) {
    case 'PRICE_SET_VISIBLE_CALL_FORM':
      return { ...state, visibleCallForm: action.payload };
    case 'PRICE_SET_VISIBLE_ORDER_FORM':
      return { ...state, visibleOrderForm: action.payload };
    case 'PRICE_SET_VISIBLE_PRODUCTS':
      return { ...state, visibleProducts: action.payload };
    default:
      return state;
  }
};