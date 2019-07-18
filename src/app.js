/**
 * @flow
 *  */
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Scene, Actions, Router, Tabs } from 'react-native-router-flux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import Home from './home';
import Page from './page';
import reducer from './a-reducer';

class TabIcon extends Component<{}> {
  render() {

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        {/* <Text style={{color: '#dddddd', fontSize: 12}}>what</Text> */}
      </View>
    );
  }
}

const AppNavigator = Actions.create(
  <Scene key="root">
                <Scene key="main" tabs={true} default="tab1">
                  <Scene  key="tab1"
                          title="MyTab"
                          iconName="tags"
                          icon={TabIcon}
                          hideNavBar={true}
                          component={Home}
                          initial={true}
                  />
                  <Scene  key="NewsFeed"
                          // title="MainNewssFed"
                          iconName="newspaper-o"
                          icon={TabIcon}
                          hideNavBar={true}
                          component={Page}
                   />
                   <Scene  key="c"
                   title="MyTab"
                   iconName="tags"
                   icon={TabIcon}
                   hideNavBar={true}
                   component={Home}
                   initial={true}
           />
           <Scene  key="a"
                   // title="MainNewssFed"
                   iconName="newspaper-o"
                   icon={TabIcon}
                   hideNavBar={true}
                   component={Page}
            />
            <Scene  key="b"
                   // title="MainNewssFed"
                   iconName="newspaper-o"
                   icon={TabIcon}
                   hideNavBar={true}
                   component={Page}
            />
                </Scene>
            </Scene>
);

// default nav reducer
// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('home'));
// const navReducer = (state = initialState, action) => {
//   const nextState = AppNavigator.router.getStateForAction(action, state);
//   // Simply return the original `state` if `nextState` is null or undefined.
//   return nextState || state;
// };

const appReducer = combineReducers({
  // nav: navReducer,
  reducer,
});

// const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
// const ReduxNavigator = reduxifyNavigator(AppNavigator, 'root');
// const mapStateToProps = state => ({
//   state: state.nav,
// });
// const ReduxRouter = connect(mapStateToProps)(Router);
// const store = createStore(appReducer, applyMiddleware(middleware));

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={AppNavigator} />
      </Provider>
    );
  }
}
