import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MainFeature from './components/molecules/MainFeature';
import GopayFeature from './components/molecules/GopayFeature';
import SearchFeature from './components/molecules/SearhFeature';
import GoNews from './components/molecules/GoNews';
import GoInfo from './components/molecules/GoInfo';
import GoBanner from './components/molecules/GoBanner';
import ScrollableProduct from './container/organisms/ScrollableProduct';
import NavBarIcon from './components/molecules/NavBarIcon';
import GopaySaldo from './components/molecules/GopaySaldo';
import HomeGopayFeature from './container/organisms/HomeGopayFeature';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <SearchFeature />
          {/*Gopay*/}
          <View style={{marginHorizontal: 17, marginTop: 20}}>
            <GopaySaldo />
            <HomeGopayFeature />
          </View>
          {/* main features */}
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
                source={require('./assest/icon/goride.png')}
                name="GO-RIDE"
              />
              <MainFeature
                source={require('./assest/icon/gocar.png')}
                name="GO-CARS"
              />
              <MainFeature
                source={require('./assest/icon/gobluebird.png')}
                name="GO-BLUEBIRD"
              />
              <MainFeature
                source={require('./assest/icon/gosend.png')}
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
                source={require('./assest/icon/godeals.png')}
                name="GO-DEALS"
              />
              <MainFeature
                source={require('./assest/icon/gopulsa.png')}
                name="GO-PULSA"
              />
              <MainFeature
                source={require('./assest/icon/gofood.png')}
                name="GO-FOOD"
              />
              <MainFeature
                source={require('./assest/icon/gomore.png')}
                name="MORE"
              />
            </View>
          </View>
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
      <NavBarIcon />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
