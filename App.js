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
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: '#e8e9ed',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
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
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  READ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* internal Informaion Section
         */}
        <View style={{padding: 16, paddingBottom: 0}}>
          <Text
            style={{
              fontSize: 17,
              color: '#1c1c1c',
              marginTop: 15,
              marginBottom: 20,
            }}>
            Complete your profile
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <LaptopFb width={100} height={100} />
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
                Connect with Facebook
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  color: '#4a4a4a',
                  width: '70%',
                }}>
                Login faster without verfication code{' '}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#61a756',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
              CONNECT
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginBottom: 20,
              marginTop: 16,
            }}
          />
        </View>
        {/* GoFood Banner Section */}
        <View style={{padding: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./dummy/FoodSection.jpg')}
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
                  <Text
                    style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
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
        {/* Nearbly Go-food */}
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
                  source={require('./dummy/nasipadang.jpg')}
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
                  source={require('./dummy/ayamgeprek.jpg')}
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
                  source={require('./dummy/bakso.jpeg')}
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
                  source={require('./dummy/gadogado.jpg')}
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
                  source={require('./dummy/martabak.jpg')}
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
                  source={require('./dummy/pecelayam.jpg')}
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
                  source={require('./dummy/sateayam.jpg')}
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
              marginBottom: 20
              marginHorizontal: 16
            }}
          />
        </View>
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
