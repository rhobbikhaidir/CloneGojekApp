import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Helmet from '../../assest/dummy/Helmet.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 5000);
  }, []);
  return (
    <View style={{justifyContent: 'center', backgroundColor: '#ffff', flex: 1}}>
      <View style={{alignItems: 'center', marginBottom: 60}}>
        <Helmet width={150} height={150} />
        <Text style={{color: '#0BBCDB', fontSize: 30, fontWeight: 'bold'}}>
          CloneGojekApp
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
