import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GoInfo = () => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <Text
        style={{
          fontSize: 17,
          color: '#1c1c1c',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete your profile
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../../assest/icon/laptopfb.png')}
          />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
            Connect with Facebook
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#4a4a4a',
              width: '70%',
            }}>
            Login faster without verfication code{' '}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61a756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
          CONNECT
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginBottom: 20,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoInfo;
