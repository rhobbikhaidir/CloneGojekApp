import React from 'react';
import {View, Text, Image} from 'react-native';

const GopayFeature = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={props.source} style={{width: 40, height: 40}} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GopayFeature;
