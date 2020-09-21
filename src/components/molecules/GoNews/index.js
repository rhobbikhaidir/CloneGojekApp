import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoNews = () => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View>
        <Image
          source={require('../../../assest/dummy/basket.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7a7a7a',
            marginBottom: 11,
          }}>
          Pembasket Epoy Mengalahkan, Pembasket NBA di USA
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61a756',
            paddingHorizontal: 12,
            paddingVertical: 11,
            alignSelf: 'flex-end',
            borderRadius: 4,
          }}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNews;
