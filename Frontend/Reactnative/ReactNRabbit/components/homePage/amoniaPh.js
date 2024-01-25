import React, { useState, useEffect } from 'react';
import { View, Text,Switch,StyleSheet,Dimensions, TouchableOpacity,Image } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';
import Waterpercent from '../../assets/waterpercent.png';
import Amonia from '../../assets/amonia.png'

export default function AmoniaPh(props){
    const humidity=props.humidity;
    const amonia=props.amonia;
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold': require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf')
      });
    return(
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:10}}>
                   <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:170,gap:5}}>

                                <View>
                                <Image source={Waterpercent} style={{width:40,height:40,tintColor: humidity < 50 ? '#83cef4' : humidity > 90 ? '#ff5252' : '#c6ff00'}}/>
                                </View>


                              <View>
                                  <Text style={{fontFamily:"ChakraPetch-SemiBold", fontSize:20, color: humidity < 50 ? '#83cef4' : humidity > 90 ? '#ff5252' : '#c6ff00'}}>{humidity}</Text>
                              </View>
                              
                              <View>
                                  <Text style={{fontFamily:"ChakraPetch-SemiBold", fontSize:20, color: humidity < 50 ? '#83cef4' : humidity > 90 ? '#ff5252' : '#c6ff00'}}>%</Text>
                              </View>
                          </View>

                          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:170,gap:2}}>

                            <View>
                                <Image source={Amonia} style={{width:40,height:40,tintColor: amonia < 3 ? '#83cef4' : amonia > 8 ? '#ff5252' : '#c6ff00'}}/>
                            </View>
                              <View>
                                  <Text style={{fontFamily:"ChakraPetch-SemiBold", fontSize:20,color: amonia < 3 ? '#83cef4' : amonia > 8 ? '#ff5252' : '#c6ff00'}}>{amonia}</Text>
                              </View>
                              
                              <View>
                                  <Text style={{fontFamily:"ChakraPetch-SemiBold", fontSize:20,color: amonia < 3 ? '#83cef4' : amonia > 8 ? '#ff5252' : '#c6ff00'}}>ppm</Text>
                              </View>
                          </View>
        </View>
    )
}