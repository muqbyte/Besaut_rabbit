import * as React from 'react';
import { StyleSheet, View, Text, Image,useWindowDimensions, Dimensions } from 'react-native';
import ValueFan from './valueFan';
import { useFonts } from 'expo-font';
import FanOne from './fanOne';
import FanTwo from './fanTwo';
import FanThree from './fanThree';
import FanFour from './fanFour';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function FanParameter(props){
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
const icon=props.icon
const status=props.status

if(!fontsLoaded){
    return null
  }

    return(
        
            <View style={styles.container}>
                
                <View style={styles.fanInformation}>
                    <FanOne/>
                    <FanTwo/>
                    <FanThree/>
                    <FanFour/>
                </View>
            </View>
        
    )
}

const styles=StyleSheet.create({
container:{
    display:"flex",
    flexDirection:"column",
    alignItems: 'center',
},
header:{
    // backgroundColor:"#29465B",
    borderRadius:20,
    paddingHorizontal:30,
    paddingVertical:5,
},
headerCaption:{
    fontSize:16,
    color:"#00bfff",
    fontFamily:"ChakraPetch_700Bold"
},
fanInformation:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    // borderWidth:2,
    width:windowWidth-25,
},

})