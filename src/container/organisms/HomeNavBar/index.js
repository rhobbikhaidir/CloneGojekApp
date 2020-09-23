import React from 'react';
import {View, Text} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

const HomeNavBar = () => {
  return (
    <View style={{height: 53, flexDirection: 'row'}}>
      <NavBarIcon
        source={require('../../../assest/icon/rumah-aktif.png')}
        title="Home"
        active
      />
      <NavBarIcon
        source={require('../../../assest/icon/zone.png')}
        title="Orders"
      />
      <NavBarIcon
        source={require('../../../assest/icon/bantu.png')}
        title="Help"
      />
      <NavBarIcon
        source={require('../../../assest/icon/chating.png')}
        title="inbox"
      />
      <NavBarIcon
        source={require('../../../assest/icon/account.png')}
        title="account"
      />
    </View>
  );
};

export default HomeNavBar;
