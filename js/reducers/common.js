import { GETCURRENCY } from '../constants/index';
const init = {
  currencyList:[0]
}
export const currencyList = (state = init.currencyList, action = {}) => {
  switch (action.type) {
    case GETCURRENCY:
      return action.data;
    default:
      return state
  }
}