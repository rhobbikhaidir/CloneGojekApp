import React from 'react';
import {View, Text} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';

const HomeGopayFeature = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 14,
        backgroundColor: '#2f65bd',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
      <GopayFeature
        source={require('../../../assest/icon/pay.png')}
        title="Pay"
        onPress={props.onPress}
      />
      <GopayFeature
        source={require('../../../assest/icon/nearby.png')}
        title="Nearbly"
      />
      <GopayFeature
        source={require('../../../assest/icon/topup.png')}
        title="Top Up"
      />
      <GopayFeature
        source={require('../../../assest/icon/more.png')}
        title="More"
      />
    </View>
  );
};

export default HomeGopayFeature;
