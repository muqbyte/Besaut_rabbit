import React, { useState, useEffect } from 'react';
import { View, Text,Switch,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';
const deviceHeight=Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;

export default function ButtonNavigation({handlePress, temperature, humidity, amonia}){
    
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold': require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf')
      });
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View style={styles.directory}>
             <TouchableOpacity style={styles.button} onPress={()=>handlePress('RB-01')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:"white"}}>RB-01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>handlePress('RB-02')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:"white"}} >RB-02</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}  onPress={()=>handlePress('RB-03')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:"white"}}>RB-03</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}  onPress={()=>handlePress('RB-04')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:"white"}}>RB-04</Text>
                    </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    directory:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        // justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
        // borderWidth:2,
    },
    button:{
        paddingHorizontal:(deviceWidth<400)?10:25,
        paddingVertical:8,
        backgroundColor:"#467598",
        borderRadius:10
    },
  });