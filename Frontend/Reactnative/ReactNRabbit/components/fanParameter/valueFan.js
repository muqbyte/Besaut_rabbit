// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image,useWindowDimensions, Dimensions } from 'react-native';
import ExhaustFan from '../../assets/exhaust.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useFonts } from 'expo-font';


export default function ValueFan(props){
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });


const [statusFan, setStatusFan] = useState(null)

const name=props.name
const img=props.img
const status=props.status

useEffect(() => {
    if (status === "OFF") {
        setStatusFan("OFFLINE");
    } else {
        setStatusFan("RUNNING");
    }
}, [status]); 
    

if(!fontsLoaded){
    return null
  }

    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontFamily:"ChakraPetch-SemiBold", fontSize:16,color: statusFan==="RUNNING" ? "#c6ff00" : "#ff5252"}}>{name}</Text>
            </View>

            <View>
                <Image source={ExhaustFan} style={{width:40,height:40,tintColor: statusFan==="RUNNING" ? "#c6ff00" : "#ff5252"}}/>
            </View>

            <View style={styles.statusInfo}>
                <Text style={{fontFamily:"ChakraPetch-SemiBold",color: statusFan==="RUNNING" ? "#c6ff00" : "#ff5252"}}>{statusFan}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        // borderWidth:2,
        
    },
    imageContainer:{
        width:40,
        height:40,
        tintColor:"#008000"
    },
    statusInfo:{
        alignItems:"center",
        // borderWidth:1,
        width:90
    }
})