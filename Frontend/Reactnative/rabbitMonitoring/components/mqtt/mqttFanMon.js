// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
var mqtt = require('@taoqf/react-native-mqtt')
import FanParameter from '../fanParameter/fanParameter';

export default function MqttFanHome(props){
// const imageLogo=props.imageLogo
const [fanone, setFanOne]=useState("")
const icon=props.icon
const mqttServer='wss://zr.txio.live:8888/mqtt';
const mqttTopic='fan/RB/01';


useEffect(()=>{
    try {
        client  = mqtt.connect(mqttServer)
        client.on('connect', function () {
            client.subscribe(mqttTopic, function (err) {
              if (err) {
                console.log(err)
                client.end();
              } else{
                console.log('connected', mqttTopic)
              }
            });
            client.on('message', function (topic, message) {
               try {
                if (topic===mqttTopic){
                    const data = JSON.parse(message.toString());
                    console.log(data)
                    console.log(data.STATUS)
                    const fanStatus=data.STATUS
                    if(fanStatus=="1"){
                        setFanOne("ONLINE")
                    }
                    if(fanStatus=="0"){
                        setFanOne("OFFLINE")
                    }
                }
               } catch (error) {
                console.log('error parse');
               }
              });
          });
    } catch (error) {
        console.log('error parse');
    }

    return()=>{
        if (client){
            client.end();
        }
    }
}, [mqttTopic])
    return(
        <View style={StyleSheet.container}>
            <View style={styles.fansection}>
                <FanParameter icon={icon} status={fanone} />
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
        width:101,
    },
    firstcontainer:{
        marginTop:80
    },
    subcontainer:{
        marginTop:10,
    },
    fansection:{
        marginTop:20
    }
})