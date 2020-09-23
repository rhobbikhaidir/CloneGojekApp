import React from 'react';
import {Image, Text, View} from 'react-native';

const NavBarIcon = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
      <Image source={props.source} style={{width: 26, height: 26}} />
      <Text
        style={{
          fontSize: 10,
          color: '#545454',
          marginTop: 4,
          color: props.active ? '#43ab4a' : '#545454',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavBarIcon;
