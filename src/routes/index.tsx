import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default Routes;
