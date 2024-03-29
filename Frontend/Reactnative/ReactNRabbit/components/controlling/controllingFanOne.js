import React, { useState, useEffect } from 'react';
import { View, Switch,Dimensions } from 'react-native';
import axios from 'axios';
import Controlling from './controlling';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ControllingFanOne() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [status, setStatus] = useState(null)

  const toggleSwitch = async () => {
    const newStatus = !isEnabled ? 'ON' : 'OFF';

    // Update the local state based on the newStatus
    setIsEnabled((previousState) => !previousState);
    const transferValue={
      "payload":`ch12_${newStatus}`
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
      const response = await fetch('http://tx.eagleattech.com/api/ranch/command/status?id=RC-12');
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
    const intervalId = setInterval(fetchStatus, 5000); // 10 seconds in milliseconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center",width:windowWidth/2}}>
        <View>
            <Controlling title={"RC-01"} status={status}/>
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