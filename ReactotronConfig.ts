import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({name: 'It Crowd Challenge'}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  //.use(networking())
  .use(reactotronRedux())
  .connect(); // let's connect!

export default reactotron;
