/**
 * @format
 * @flow
 */

import {AppRegistry} from 'react-native';
import Masonry from './src/Components/Masonry';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Masonry);
