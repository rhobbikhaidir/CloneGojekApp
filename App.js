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
  StatusBar,
  Image,
} from 'react-native';

import {Account, Rumah, Order, Help, Chatting} from './icons';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>CloneGojek</Text> */}
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View style={{height: 53, flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Rumah width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Home
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Order width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Help width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Chatting width={26} height={26} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
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
