import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import {DrawerContent} from '../components/DrawerContent';
import DrawerScreens from '../screens/DrawerScreens';
import Help from '../screens/Help';

const Drawer = createDrawerNavigator();
const DrawerScreensComponent = ({route}: {route: any}) => (
  <DrawerScreens uri={route.params?.uri || 'default_uri'} />
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomTabNavigator"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="DrawerScreens" component={DrawerScreensComponent} />
      <Drawer.Screen name="Contact" component={Help} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
