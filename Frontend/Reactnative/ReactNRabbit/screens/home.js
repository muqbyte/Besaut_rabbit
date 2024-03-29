import * as React from 'react';
import { useCallback,useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, useWindowDimensions, Dimensions,TouchableOpacity} from 'react-native';
import Mqtt from '../components/mqtt/mqttHome';
import Exhaust from '../assets/exhaust.png'
import Rabbit from '../assets/rabbit.png'
import FanParameter from '../components/fanParameter/fanParameter';
import { useFonts } from 'expo-font';
import HomeLayout from '../components/layout/homeLayout';
import HomePage from '../components/homePage/homePage';
import * as SplashScreen from 'expo-splash-screen';
import {PulseIndicator} from 'react-native-indicators';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Home({ navigation }){
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
 
  if (!fontsLoaded) {
    return null;
  }

    return(
        <HomeLayout>
            <View style={styles.mainContainer}>
                <View style={styles.title}>

                    <View>
                    <PulseIndicator color='red' />
                    </View>
                    <View>
                        <Text style={{color:"#00BFFF", fontSize:24,fontFamily:"ChakraPetch-Bold"}}>RABBIT IoT SYSTEM</Text>
                    </View>
                    
                    <View >
                       <Image source={Rabbit} />
                    </View>
                </View>

                <View style={{backgroundColor:"#29465B",width:"100%"}}>
                    <Text style={{color:"#F6EEE6", fontSize:18,fontFamily:"ChakraPetch-Bold",textAlign:"center"}}>REAL TIME MONITORING DATA</Text>
                </View>


                <View style={{width:"100%"}}>
                <HomePage/>
                </View>

                <View style={{backgroundColor:"#29465B",width:"100%"}}>
                    <Text style={{color:"#F6EEE6", fontSize:18,fontFamily:"ChakraPetch-Bold",textAlign:"center"}}>EXHAUST FAN STATUS</Text>
                </View>

                <View style={{width:"100%",backgroundColor:"#082F49", padding:(windowHeight<800)?20:10}}>
                         <FanParameter/>
                </View> 
                
            </View>
        </HomeLayout>
    )
}

const styles=StyleSheet.create({
    
    mainContainer:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignContent:"center",
        alignItems:"center",
        // marginTop:45,
        marginTop:(windowWidth>400)?30:45,
        marginBottom:95,
        // marginHorizontal:20,
        // borderWidth:2,
        
    },
    title:{
        
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        gap:(windowWidth>400)?45:20,
        // borderWidth:2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // borderColor:"#f59e0b",
        backgroundColor:"#082F49",
    },
    
  
   
})