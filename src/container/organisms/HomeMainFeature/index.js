import React from 'react';
import {View, Text} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

const HomeMainFeature = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 16,
        marginTop: 18,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          marginBottom: 18,
        }}>
        <MainFeature
          source={require('../../../assest/icon/goride.png')}
          name="GO-RIDE"
        />
        <MainFeature
          source={require('../../../assest/icon/gocar.png')}
          name="GO-CARS"
        />
        <MainFeature
          source={require('../../../assest/icon/gobluebird.png')}
          name="GO-BLUEBIRD"
        />
        <MainFeature
          source={require('../../../assest/icon/gosend.png')}
          name="GO-SEND"
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <MainFeature
          source={require('../../../assest/icon/godeals.png')}
          name="GO-DEALS"
        />
        <MainFeature
          source={require('../../../assest/icon/gopulsa.png')}
          name="GO-PULSA"
        />
        <MainFeature
          source={require('../../../assest/icon/gofood.png')}
          name="GO-FOOD"
        />
        <MainFeature
          source={require('../../../assest/icon/gomore.png')}
          name="MORE"
        />
      </View>
    </View>
  );
};

export default HomeMainFeature;
