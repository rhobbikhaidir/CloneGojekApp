import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000);
  }, []);
  return (
    <View>
      <Text>ini adalah SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
