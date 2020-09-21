import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GoBanner = () => {
  return (
    <View style={{padding: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assest/dummy/FoodSection.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.1,
            borderRadius: 6,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Free GO-FOOD voucher
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
              Quick, before they run out!
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 16}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61a756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'center',
                borderRadius: 4,
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoBanner;
