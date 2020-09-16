/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
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
} from './icons';
import search from './icons/Search.png';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  borderWidth: 1,
                  borderRadius: 25,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  top: 10,
                  backgroundColor: 'white',
                  marginRight: 18,
                }}
              />
              <Image
                source={search}
                style={{position: 'absolute', top: 23, left: 10}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <QrCode width={25} height={25} />
            </View>
          </View>
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
              <View style={{flex: 1, alignItems: 'center'}}>
                <PayFeatures width={40} height={40} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Pay
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Nearbly width={40} height={40} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Nearbly
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TopUp width={40} height={40} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Top Up
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <More width={40} height={40} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  More
                </Text>
              </View>
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
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoRide width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-RIDE{' '}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoCar width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoBlueBird width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoSend width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoDeals width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoPulsa width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoFood width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <GoMore width={40} height={40} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 7,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}
          />
          {/* News Section */}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View>
              <Image
                source={require('./dummy/basket.jpg')}
                style={{height: 170, width: '100%', borderRadius: 6}}
              />
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a'}}>Pembasket Epoy Mengalahkan, Pembaset NBA di USA</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View></View>
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
