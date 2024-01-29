import React, { useState, useEffect } from 'react';
import { View, Text,Switch,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

const deviceHeight=Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;

export default function ButtonNavigation({handlePress, temperature, humidity, amonia}){
    
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold': require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf')
      });
      if (!fontsLoaded) {
        return <AppLoading/>;
    }
    return(
        <View style={styles.directory}>
             <TouchableOpacity style={styles.button} onPress={()=>handlePress('RB-01')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:(temperature>25 || humidity>70 || amonia>8)? "red" : "white"}}>RB-01</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>handlePress('RB-02')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:(temperature>25 || humidity>70 || amonia>8)? "red" : "white"}} >RB-02</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}  onPress={()=>handlePress('RB-03')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:(temperature>28 || humidity>80 || amonia>8)? "red" : "white"}}>RB-03</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}  onPress={()=>handlePress('RB-04')}>
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:(temperature>25 || humidity>70 || amonia>8)? "red" : "white"}}>RB-04</Text>
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