import { legacy_createStore as createStore} from 'redux';
import reducers from '../core-files/reducers/index';
import enhancer from './middleware';

const store = createStore(reducers,enhancer);

export default store;