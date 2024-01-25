
import React, { useState, useEffect } from 'react';
import { View, Switch,Dimensions } from 'react-native';
import axios from 'axios';
import Controlling from './controlling';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function ControllingFanFour() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [status, setStatus] = useState(null);

  const toggleSwitch = async () => {
    const newStatus = !isEnabled ? 'ON' : 'OFF';

    // Update the local state based on the newStatus
    setIsEnabled((previousState) => !previousState);

    try {
      // Make a POST request to the respective endpoint
      const res = await axios.get(`https://nr.txio.live/ranch/control/ch4_${newStatus}`);
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
      const response = await fetch('http://13.250.36.154:5000/ranch/controlstatus/RC-04');
      const result = await response.json();
      const current = result[0].STATUS;
      console.log(current);
      setStatus(current);
      setIsEnabled(current === 'ON');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center",width:windowWidth/2}}>
        <View>
            <Controlling title={"RC-04"} status={status}/>
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

