import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ValueFan from './valueFan';


export default function FanParameter(props){
const icon=props.icon
const status=props.status

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerCaption}>EXHAUST FAN</Text>
            </View>
            <View style={styles.fanInformation}>
                <ValueFan img={icon} name="FAN 1" status={status} />
                <ValueFan img={icon} name="FAN 2"/>
                <ValueFan img={icon} name="FAN 3"/>
                <ValueFan img={icon} name="FAN 4"/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    backgroundColor: '#fff',
    alignItems: 'center',
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