import { StateType } from '../../store';

export function setPriceVisibleCallForm(visibleCallForm: boolean) {
  return {
    type: GetLiteralInString('PRICE_SET_VISIBLE_CALL_FORM'),
    payload: visibleCallForm,
  };
}

export function setPriceVisibleOrderForm(visibleOrderForm: boolean) {
  return {
    type: GetLiteralInString('PRICE_SET_VISIBLE_ORDER_FORM'),
    payload: visibleOrderForm,
  };
}

export function setPriceVisibleProducts(visibleProducts: boolean) {
  return {
    type: GetLiteralInString('PRICE_SET_VISIBLE_PRODUCTS'),
    payload: visibleProducts,
  };
}

export function openOrderForm() {
  return function (dispatch: any, setState: () => StateType) {
    dispatch(setPriceVisibleProducts(false));
    dispatch(setPriceVisibleOrderForm(true));
  };
}

export function closeOrderForm() {
  return function (dispatch: any, setState: () => StateType) {
    dispatch(setPriceVisibleProducts(true));
    dispatch(setPriceVisibleOrderForm(false));
  };
}

export function openCallForm() {
  return function (dispatch: any, setState: () => StateType) {
    dispatch(setPriceVisibleProducts(false));
    dispatch(setPriceVisibleCallForm(true));
  };
}

export function closeCallForm() {
  return function (dispatch: any, setState: () => StateType) {
    dispatch(setPriceVisibleProducts(true));
    dispatch(setPriceVisibleCallForm(false));
  };
}



function GetLiteralInString<T extends string>(str: T): T {
  return str;
}