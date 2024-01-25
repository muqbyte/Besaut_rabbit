// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Image,useWindowDimensions, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useFonts } from 'expo-font';
import ValueFan from './valueFan';

export default function FanFour(props){
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
    const [fanStatus, setFanStatus] = useState(null)

    const fetchStatus=async()=>{
        try {
            const response = await fetch('http://13.250.36.154:5000/ranch/controlstatus/RC-04');
            const result = await response.json();
            const current=result[0].STATUS
            console.log(current)
            setFanStatus(current)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(()=>{
     fetchStatus();   
     const intervalId = setInterval(fetchStatus, 10000); // 10 seconds in milliseconds

     // Clear the interval when the component is unmounted
     return () => clearInterval(intervalId);
    },[fanStatus])
    if(!fontsLoaded){
        return null
      }
    return(
        <View>
            <ValueFan name="RC-04" status={fanStatus}/>
        </View>
    )
}