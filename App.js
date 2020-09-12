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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      {/* <Text>CloneGojek</Text> */}
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View
        style={{height: 53, backgroundColor: 'yellow', flexDirection: 'row'}}>
        <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center'}}>
          <Text>Home</Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 1, alignItems: 'center'}}>
          <Text>Orders</Text>
        </View>
        <View
          style={{backgroundColor: 'salmon', flex: 1, alignItems: 'center'}}>
          <Text>Help</Text>
        </View>
        <View
          style={{backgroundColor: 'orange', flex: 1, alignItems: 'center'}}>
          <Text>Help</Text>
        </View>
        <View
          style={{backgroundColor: 'purple', flex: 1, alignItems: 'center'}}>
          <Text>Inbox</Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 1, alignItems: 'center'}}>
          <Text>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
