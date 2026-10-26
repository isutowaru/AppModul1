import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import Profil from './Profil';
 
const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{tabBarActiveTintColor: '#1E6FD9'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarIcon: () => <Text>🏠</Text>}}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{tabBarIcon: () => <Text>ℹ️</Text>}}
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{tabBarIcon: () => <Text>👤</Text>}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
