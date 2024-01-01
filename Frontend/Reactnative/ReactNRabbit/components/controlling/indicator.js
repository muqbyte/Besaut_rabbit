import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Controlling from './controlling';

export default function Indicator(props){
const icon=props.icon


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.caption}>EXHAUST FAN</Text>
            </View>
            <View style={styles.controllingContainer}>
                <View style={styles.row}>
                    <Controlling icon={icon}/>
                    <Controlling icon={icon}/>
                </View>
                <View style={styles.row}>
                    <Controlling icon={icon}/>
                    <Controlling icon={icon}/>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // borderWidth:2,
        width:"auto",
        alignItems:"center",
        
    },
    header:{
        backgroundColor:"#29465B",
        paddingHorizontal:70,
        paddingVertical:5,
        borderRadius:10,
        marginTop:20,
        marginBottom:20
    },
    controllingContainer:{
        flexDirection:"column",
        gap:30
    },
    row:{
        flexDirection:"row",
        gap:50
    },
    caption:{
        fontSize:16,
        color:"#fff",
        fontWeight:"bold"
    },
})