// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ParameterIndicator from '../parameterIndicator/paramterIndicator';
import FanParameter from '../fanParameter/fanParameter';
import MqttFanHome from './mqttFanMon';
var mqtt = require('@taoqf/react-native-mqtt')
import ValueFan from '../fanParameter/valueFan';


export default function Mqtt(props){
const imageLogo=props.imageLogo
const mqttServer='wss://zr.txio.live:8888/mqtt';
const mqttTopic= ['data/RB/01', 'data/RB/02', 'data/RB/03', 'data/RB/04','fan/RB/01','fan/RB/02','fan/RB/03','fan/RB/04'];

const [informationRba, setInformationRba]=useState({})
const [informationRbb, setInformationRbb]=useState({})
const [informationRbc, setInformationRbc]=useState({})
const [informationRbd, setInformationRbd]=useState({})
const [fanone, setFanone]=useState("")
const [fantwo, setFantwo]=useState("")
const [fanthree, setFanthree]=useState("")
const [fanfour, setFanfour]=useState("")


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
                if (topic==='data/RB/01'){
                    const data = JSON.parse(message.toString());
                    // console.log(data)
                    const rba={
                        temperatureA:data.temperature,
                        humidityA:data.humidity,
                        amoniaA:data.amonia
                    }
                    setInformationRba(rba)
                }
                    
                if (topic==='data/RB/02'){
                    const data = JSON.parse(message.toString());
                    // console.log(data)
                    console.log(data.temperature)
                    const rbb={
                        temperatureB:data.temperature,
                        humidityB:data.humidity,
                        amoniaB:data.amonia
                    }
                    setInformationRbb(rbb)
                }
                
                if (topic==='data/RB/03'){
                    const data = JSON.parse(message.toString());
                    // console.log(data)
                    const rbc={
                        temperatureC:data.temperature,
                        humidityC:data.humidity,
                        amoniaC:data.amonia
                    }
                    setInformationRbc(rbc)
                }

                if(topic==='data/RB/04'){
                    const data = JSON.parse(message.toString());
                    // console.log(data)
                    const rbd={
                        temperatureD:data.temperature,
                        humidityD:data.humidity,
                        amoniaD:data.amonia
                    }
                    setInformationRbd(rbd)
                } 
                if (topic==='fan/RB/01'){
                    const data = JSON.parse(message.toString());
                    console.log(data)
                    console.log(data.STATUS)
                    const fanStatus=data.STATUS
                    setFanone( fanStatus == "1"? "ONLINE" : "OFFLINE")
                }
                if (topic==='fan/RB/02'){
                    const data = JSON.parse(message.toString());
                    console.log(data)
                    console.log(data.STATUS)
                    const fanStatus=data.STATUS
                    setFantwo( fanStatus == "1"? "ONLINE" : "OFFLINE")
                }
                if (topic==='fan/RB/03'){
                    const data = JSON.parse(message.toString());
                    console.log(data)
                    console.log(data.STATUS)
                    const fanStatus=data.STATUS
                    setFanthree( fanStatus == "1"? "ONLINE" : "OFFLINE")
                }
                if (topic==='fan/RB/04'){
                    const data = JSON.parse(message.toString());
                    console.log(data)
                    console.log(data.STATUS)
                    const fanStatus=data.STATUS
                    setFanfour( fanStatus == "1"? "ONLINE" : "OFFLINE")
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
            <View>
                <View style={styles.firstcontainer}>
                    <ParameterIndicator headerName="RB-01" temperature={informationRba.temperatureA} humidity={informationRba.humidityA} amonia={informationRba.amoniaA} />
                </View>
                
                <View style={styles.subcontainer}>
                    <ParameterIndicator headerName="RB-02" temperature={informationRbb.temperatureB} humidity={informationRbb.humidityB} amonia={informationRbb.amoniaB}/>
                </View>

                <View style={styles.subcontainer}>
                    <ParameterIndicator headerName="RB-03" temperature={informationRbc.temperatureC} humidity={informationRbc.humidityC} amonia={informationRbc.amoniaC}/>
                </View>

                <View style={styles.subcontainer}>
                    <ParameterIndicator headerName="RB-04" temperature={informationRbd.temperatureD} humidity={informationRbd.humidityD} amonia={informationRbd.amoniaD}/>
                </View>
            </View>

            <View style={styles.fansection}>
                <View style={styles.header}>
                    <Text style={styles.headerCaption}>EXHAUST FAN</Text>
                </View>

                <View style={styles.fanInformation}>
                    <ValueFan img={imageLogo} name="FAN 1" status={fanone}/>
                    <ValueFan img={imageLogo} name="FAN 2" status={fantwo} />
                    <ValueFan img={imageLogo} name="FAN 3" status={fanthree}/>
                    <ValueFan img={imageLogo} name="FAN 4" status={fanfour }/>
                </View>

                {/* <MqttFanHome icon={imageLogo} /> */}
                {/* <FanParameter icon={imageLogo} status={fanone}/> */}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:2,
        width:101,
    },
    firstcontainer:{
        marginTop:10
    },
    subcontainer:{
        marginTop:10,
    },
    fansection:{
        flexDirection:"column",
        marginTop:20,
        alignItems:"center",
    },
    header:{
        backgroundColor:"#29465B",
        borderRadius:20,
        paddingHorizontal:30,
        paddingVertical:5,
    },
    headerCaption:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    },
    fanInformation:{
        flexDirection:"row",
        gap:15,
        marginTop:10
    },
})