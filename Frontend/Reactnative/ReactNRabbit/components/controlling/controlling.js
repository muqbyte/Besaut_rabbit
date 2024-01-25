import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,Alert,Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Exhaust from '../../assets/exhaust.png'
var mqtt = require('@taoqf/react-native-mqtt')


export default function Controlling(props){
const icon=props.icon
const title=props.title
const status=props.status

const [fanOne, setFanOne]= useState("")

const [fontsLoaded] = useFonts({
    'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
    'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
    'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
    'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
});







const onNotification =()=>{
 Alert.alert("Alert","Are you sure you want to switch ON",[{
    text:"OKAY",
    onPress:()=>{
        client.publish("fan/RB/01",'1');
        setFanOne("On")
    }
 },
{
text: "CANCEL",
style: "cancel", // You can add a cancel button
}
]);

};

const offNotification =()=>{
    Alert.alert("Alert","Are you sure you want to switch OFF",[{
        text:"OKAY",
        onPress:()=>{
            client.publish("fan/RB/01",'0');
            setFanOne("On")
        }
     },
    {
    text: "CANCEL",
    style: "cancel", // You can add a cancel button
    }
    ]);
   }

   if (!fontsLoaded) {
    return <AppLoading/>;
    }

    return(
        <View style={styles.container}>


            <View >
                <Image source={Exhaust} style={{width:50, height:50, tintColor:"#FFFFFF"}} />
            </View>


            <View>
                <Text style={{fontSize:16, color:"#FFFFFF",fontFamily:"ChakraPetch-SemiBold"}}>{title}</Text>
                
            </View>

            

            {/* <View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.pushButton} onPress={onNotification}><Text style={styles.fontButton}>ON</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.pushButton} onPress={offNotification}><Text style={styles.fontButton}>OFF</Text></TouchableOpacity>
                </View>
            </View> */}

            {/* <View>
                <ControllingFanOne/>
            </View> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        // borderWidth:2,
        width:windowWidth/3
    },
    button:{
        flexDirection:"row",
        gap:25,
        marginTop:20,
        marginBottom:10
    },
    pushButton:{
        backgroundColor:"#29465B",
        borderRadius:10
    },
    fontButton:{
        color:"#fff",
        paddingHorizontal:20,
        paddingVertical:5
    }


})