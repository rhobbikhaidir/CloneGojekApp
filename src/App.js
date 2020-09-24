import React from 'react';
import {ScrollView, View} from 'react-native';
import GoNews from './components/molecules/GoNews';
import GoInfo from './components/molecules/GoInfo';
import GoBanner from './components/molecules/GoBanner';
import ScrollableProduct from './container/organisms/ScrollableProduct';
import GopaySaldo from './components/molecules/GopaySaldo';
import HomeGopayFeature from './container/organisms/HomeGopayFeature';
import HomeNavBar from './container/organisms/HomeNavBar';
import HomeMainFeature from './container/organisms/HomeMainFeature';
import SearchFeature from './components/molecules/SearchFeature';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
