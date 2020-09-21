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

import {
  Account,
  Rumah,
  Order,
  Help,
  Chatting,
  RumahActive,
  Nearbly,
  TopUp,
  More,
  PayFeatures,
  QrCode,
  GoRide,
  GoCar,
  GoBlueBird,
  GoSend,
  GoDeals,
  GoPulsa,
  GoFood,
  GoMore,
  LaptopFb,
} from './assest/icons';
// import GopayFeature from './components/molecules/gopayFeature/index';
import MainFeature from './components/molecules/MainFeature';
import GopayFeature from './components/molecules/GopayFeature';
import SearchFeature from './components/molecules/SearhFeature';
import GoNews from './components/molecules/GoNews';
import GoInfo from './components/molecules/GoInfo';
import GoBanner from './components/molecules/GoBanner';
import ScrollableProduct from './container/organisms/ScrollableProduct';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <SearchFeature />
          {/*Gopay*/}
          <View style={{marginHorizontal: 17, marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: 14,
              }}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                GOPAY
              </Text>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Rp 50.000
              </Text>
            </View>
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
                source={require('./assest/icon/pay.png')}
                title="Pay"
              />
              <GopayFeature
                source={require('./assest/icon/nearbly.png')}
                title="Nearbly"
              />
              <GopayFeature
                source={require('./assest/icon/topup.png')}
                title="Top Up"
              />
              <GopayFeature
                source={require('./assest/icon/more.png')}
                title="More"
              />
            </View>
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
      <View style={{height: 53, flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
          <RumahActive width={26} height={26} />
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
          <Order width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
          <Help />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
          <Chatting width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 5}}>
          <Account width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
