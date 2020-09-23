import React from 'react';
import {Image, Text, View} from 'react-native';

const NavBarIcon = () => {
  return (
    <View style={{height: 53, flexDirection: 'row'}}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
        <Image
          source={require('../../../assest/icon/rumah-aktif.png')}
          style={{width: 26, height: 26}}
        />
        <Text
          style={{
            fontSize: 10,
            color: '#545454',
            marginTop: 4,
            color: '#43ab4a',
          }}>
          Home
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
        <Image
          source={require('../../../assest/icon/zone.png')}
          style={{width: 26, height: 26}}
        />
        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
          Orders
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
        <Image
          source={require('../../../assest/icon/bantu.png')}
          style={{width: 26, height: 26}}
        />
        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
        <Image
          source={require('../../../assest/icon/chating.png')}
          style={{width: 26, height: 26}}
        />
        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
          Inbox
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
        <Image
          source={require('../../../assest/icon/account.png')}
          style={{width: 26, height: 26}}
        />
        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
          Account
        </Text>
      </View>
    </View>
  );
};

export default NavBarIcon;
