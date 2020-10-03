import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconBack from './IconBack';

const Button = ({title, onPress, type, name}) => {
  if (type === 'icon') {
    return <IconBack name={name} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      fontSize: 10,
      backgroundColor: '#0bbcdb',
      borderRadius: 25,
      paddingVertical: 13,
      width: 350,
    },
  },
  text: {
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};

export default Button;
