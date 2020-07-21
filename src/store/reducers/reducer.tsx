import { combineReducers } from 'redux';
import { priceVisible } from './PriceVisible/PriceVisible';
import { barrel } from './Barrel/Barrel';

const reducers = combineReducers({
  priceVisible,
  barrel,
})

export default reducers;