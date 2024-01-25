import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Controlling from './controlling';
import ControllingFanOne from './controllingFanOne';
import ControllingFanTwo from './controllingFanTwo';
import ControllingFanThree from './controllingFanThree';
import ControllingFanFour from './controllingFanFour';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";


export default function Indicator(props){
    const icon=props.icon
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
}

    return(
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.caption}>EXHAUST FAN</Text>
            </View> */}
            <View style={styles.controllingContainer}>
                <View style={styles.row}>
                    <ControllingFanOne/>
                    <ControllingFanTwo/>
                    {/* <Controlling icon={icon}/> */}
                    {/* <Controlling icon={icon}/> */}
                </View>
                <View style={styles.row}>
                <ControllingFanThree/>
                <ControllingFanFour/>
                </View>
              
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // borderWidth:2,
        borderRadius:40,
        width:"auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#082F49",
       paddingBottom:20
        // paddingVertical:20
    },
    header:{
        // backgroundColor:"#29465B",
        // paddingHorizontal:70,
        // paddingVertical:5,
        borderRadius:10,
        marginTop:20,
        marginBottom:20,
        // borderWidth:2
    },
    controllingContainer:{
        flexDirection:"column",
        gap:30
    },
    row:{
        flexDirection:"row",
        
    },
    caption:{
        fontSize:20,
        color:"#00bfff",
        fontFamily:"ChakraPetch_700Bold"
    },
})