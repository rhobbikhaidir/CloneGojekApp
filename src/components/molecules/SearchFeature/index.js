import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchFeature = () => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        flexDirection: 'row',
        paddingTop: 15,
      }}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={{
            borderWidth: 1,
            borderRadius: 25,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            top: 10,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={require('../../../assest/dummy/Search.png')}
          style={{position: 'absolute', top: 23, left: 10}}
        />
      </View>
      <View
        style={{
          width: 35,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Image
          source={require('../../../assest/icon/qrcode.png')}
          style={{width: 25, height: 25}}
        />
      </View>
    </View>
  );
};

export default SearchFeature;
