import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const ScrollableProduct = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1c1c1c',
            marginLeft: 16,
          }}>
          GO-FOOD
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
          Nearbly Restaurants
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
          See All
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row', paddingLeft: 16}}>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/nasipadang.jpg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Nasi Padang
          </Text>
        </View>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/ayamgeprek.jpg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Ayam Geprek
          </Text>
        </View>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/bakso.jpeg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Bakso
          </Text>
        </View>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/gadogado.jpg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Gado-Gado
          </Text>
        </View>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/martabak.jpg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Martabak Spesial
          </Text>
        </View>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/pecelayam.jpg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Pecel Ayam
          </Text>
        </View>
        <View style={{marginRight: 16}}>
          <View style={{width: 150, height: 150}}>
            <Image
              source={require('../../../assest/dummy/sateayam.jpg')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'cover',
                flex: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 12,
            }}>
            Sate ayam
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginTop: 16,
          marginBottom: 20,
          marginHorizontal: 16,
        }}
      />
    </View>
  );
};

export default ScrollableProduct;
