import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScanQrCode, SplashScreen, HomeScreen} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ScanQrCode"
        component={ScanQrCode}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
