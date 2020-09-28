import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GopayFeature = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
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
      </TouchableOpacity>
    </View>
  );
};

export default GopayFeature;
