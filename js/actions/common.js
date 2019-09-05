
import {GETCURRENCY} from '../constants/index';
import axios from '../common/ajax';
import {message} from 'antd'


export const getCurrency = (data) => {
  
  return {
    type:GETCURRENCY,
    data:[1,2,3]
  }
}
