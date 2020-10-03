import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LoginAuth from '../../assest/dummy/WelcomeAuth.svg';
import {ScrollView} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  const HandleToGo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <LoginAuth width={300} height={300} marginLeft={40} />
      <ScrollView showsVerticScrollIndicator={false}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#0bbcdb',
            marginTop: 2,
            maxWidth: 200,
            marginLeft: 30,
          }}>
          Mohon mengisi beberapa data untuk proses Login anda
        </Text>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Input placeholder="email" />
          <View style={{marginTop: 50}} />
          <Input placeholder="password" secureTextEntry={true} />
        </View>
        <View style={{alignItems: 'center', marginTop: 150}}>
          <Button title="Login" onPress={() => HandleToGo('HomeScreen')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
