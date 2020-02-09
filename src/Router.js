import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerMenu from './components/DrawerMenu';

import Profile from './screens/Profile';
import About from './screens/About';
import Details from './screens/Details';

import {
  Home,
  List,
  Login
} from './screens/index';

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={25} color={tintColor} />
        ),
      },
    },
    List: {
      screen: List,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-list" size={35} color={tintColor} />
        ),
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-log-in" size={25} color={tintColor} />
        ),
      },
    },
  },
  {},
);

const ModalStack = createStackNavigator(
  {
    Tabs: {
      screen: TabStack,
    }, Home: {
      screen: Home
    },
    Profile: {
      screen: Profile,
    },
    About: {
      screen: About,
    },
    Details: {
      screen: Details,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    ModalStack: {
      screen: ModalStack,
    },
  },
  {
    contentComponent: DrawerMenu,
  },
);

export default createAppContainer(DrawerNavigator);
