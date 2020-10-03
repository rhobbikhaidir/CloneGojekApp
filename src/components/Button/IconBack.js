import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconBack from '../../assest/icon/IconBack.svg';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'kosong' && <IconBack width={25} height={25} />}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
