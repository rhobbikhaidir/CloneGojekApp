import React from 'react';
import {View, Text} from 'react-native';

const GopaySaldo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2c5fb8',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 14,
      }}>
      <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
        GOPAY
      </Text>
      <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
        Rp 1 M
      </Text>
    </View>
  );
};

export default GopaySaldo;
