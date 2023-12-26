import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Services from '../screens/Services';
import Help from '../screens/Help';
import Login from '../screens/Login';

// interface QrCodeButtonProps {
//   children: React.ReactNode;
//   onpress: () => void;
// }

const Tab = createBottomTabNavigator();

// const QrCodeButton: React.FC<QrCodeButtonProps> = ({children, onpress}) => (
//   <TouchableOpacity
//     onPress={onpress}
//     activeOpacity={1}
//     style={{top: -30, justifyContent: 'center', alignItems: 'center'}}>
//     <View
//       style={{
//         width: 60,
//         height: 60,
//         borderRadius: 35,
//         backgroundColor: '#03A803',
//         borderWidth: 1,
//         borderColor: '#03A803',
//         elevation: 10,
//       }}>
//       {children}
//     </View>
//   </TouchableOpacity>
// );

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          backgroundColor: '#FFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabBarItem}>
                <Image
                  source={require('../assets/icons/home.png')}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    focused ? styles.iconFocused : styles.iconInactive,
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    focused ? styles.labelFocused : styles.labelInactive,
                    {fontWeight: 'bold'},
                  ]}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabBarItem}>
                <Image
                  source={require('../assets/icons/grid.png')}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    focused ? styles.iconFocused : styles.iconInactive,
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    focused ? styles.labelFocused : styles.labelInactive,
                    {fontWeight: 'bold'},
                  ]}>
                  Services
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabBarItem}>
                <Image
                  source={require('../assets/icons/help.png')}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    focused ? styles.iconFocused : styles.iconInactive,
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    focused ? styles.labelFocused : styles.labelInactive,
                    {fontWeight: 'bold'},
                  ]}>
                  Help
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tabBarItem}>
                <Image
                  source={require('../assets/icons/login.png')}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    focused ? styles.iconFocused : styles.iconInactive,
                  ]}
                />
                <Text
                  style={[
                    styles.label,
                    focused ? styles.labelFocused : styles.labelInactive,
                    {fontWeight: 'bold'},
                  ]}>
                  Login
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconFocused: {
    tintColor: '#03A803',
  },
  iconInactive: {
    tintColor: '#7f7f7f',
  },
  label: {
    fontSize: 12,
  },
  labelFocused: {
    color: '#03A803',
  },
  labelInactive: {
    color: '#7f7f7f',
  },
});
