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

import SearchFeature from './components/molecules/SearhFeature';
import GoNews from './components/molecules/GoNews';
import GoInfo from './components/molecules/GoInfo';
import GoBanner from './components/molecules/GoBanner';
import ScrollableProduct from './container/organisms/ScrollableProduct';
import GopaySaldo from './components/molecules/GopaySaldo';
import HomeGopayFeature from './container/organisms/HomeGopayFeature';
import HomeNavBar from './container/organisms/HomeNavBar';
import HomeMainFeature from './container/organisms/HomeMainFeature';

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

export default App;
