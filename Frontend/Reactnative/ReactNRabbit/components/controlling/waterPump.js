import React, { useState, useEffect } from 'react';
import { Text,View, Switch,Dimensions, Image } from 'react-native';
import WaterPumpIcon from '../../assets/waterPump.png'
import axios from 'axios';
import { useFonts } from 'expo-font';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function WaterPump() {
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const [status, setStatus] = useState(null)

  const toggleSwitch = async () => {
    const newStatus = !isEnabled ? 'ON' : 'OFF';

    // Update the local state based on the newStatus
    setIsEnabled((previousState) => !previousState);
    const transferValue={
      "payload":`ch16_${newStatus}`
    }
    try {
      // Make a POST request to the respective endpoint
      const res = await axios.post(`http://tx.eagleattech.com/api/ranch/control/command`,transferValue);

      console.log(res);
    //   Alert.alert("Successful");

      // Handle response if needed
     
      
    } catch (error) {
        console.error('Error:', error);
        // Alert.alert("Unsuccessful");
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch('http://13.250.36.154:5000/ranch/controlstatus/RC-01');
      const result = await response.json();
      const current = result[0].STATUS;
      console.log("current",current);
      setStatus(current);
      setIsEnabled(current === 'ON');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center",width:windowWidth/2}}>

      <View>
        <Image source={WaterPumpIcon} style={{width:50, height:50}}/>
      </View>
        <View>
            <Text style={{fontSize:16, color:"#FFFFFF",fontFamily:"ChakraPetch-SemiBold"}}>PUMP</Text> 
        </View>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}