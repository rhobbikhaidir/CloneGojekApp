import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeature = (props) => {
  return (
    <View>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: '#efefef',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.source} style={{height: 40, width: 40}} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 7,
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default MainFeature;
