import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import GoBanner from '../../components/molecules/GoBanner';
import GoInfo from '../../components/molecules/GoInfo';
import GoNews from '../../components/molecules/GoNews';
import GopaySaldo from '../../components/molecules/GopaySaldo';
import SearchFeature from '../../components/molecules/SearchFeature';
import HomeGopayFeature from '../../container/organisms/HomeGopayFeature';
import HomeMainFeature from '../../container/organisms/HomeMainFeature';
import HomeNavBar from '../../container/organisms/HomeNavBar';
import ScrollableProduct from '../../container/organisms/ScrollableProduct';

const HomeScreen = ({navigation}) => {
  const HandleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <SearchFeature />
          {/*Gopay*/}
          <View style={{marginHorizontal: 17, marginTop: 20}}>
            <GopaySaldo />
            <HomeGopayFeature onPress={() => HandleGoTo('ScanQrCode')} />
          </View>
          {/* main features */}
          <HomeMainFeature />
          <View
            style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}
          />
          {/* News Section */}
          <GoNews />
        </View>
        {/* internal Informaion Section
         */}
        <GoInfo />
        {/* GoFood Banner Section */}
        <GoBanner />
        {/* Nearbly Go-food */}
        <ScrollableProduct />
      </ScrollView>
      {/* Navbar */}
      <View style={{borderWidth: 0.2, borderTopColor: 'white'}} />
      <HomeNavBar />
    </View>
  );
};

export default HomeScreen;
