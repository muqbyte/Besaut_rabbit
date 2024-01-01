import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image,Alert } from 'react-native';
var mqtt = require('@taoqf/react-native-mqtt')


export default function Controlling(props){
const icon=props.icon
const [fanOne, setFanOne]= useState("")






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

    return(
        <View style={styles.container}>
            <View>
                <Text style={{fontSize:16, fontWeight:'bold'}}>FAN 1</Text>
            </View>

            <View>
                <Image source={icon} style={{width:50, height:50}} />
            </View>

            <View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.pushButton} onPress={onNotification}><Text style={styles.fontButton}>ON</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.pushButton} onPress={offNotification}><Text style={styles.fontButton}>OFF</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center",
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