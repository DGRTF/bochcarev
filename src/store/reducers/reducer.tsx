import { combineReducers } from 'redux';
import { priceVisible } from './PriceVisible/PriceVisible';

const reducers = combineReducers({
  priceVisible,
})

export default reducers;