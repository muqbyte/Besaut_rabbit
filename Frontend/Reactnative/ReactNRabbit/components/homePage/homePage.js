import React, { useState, useEffect } from 'react';
import { View, Text,Switch,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Gauge from '../gauge/gauge';
import { useFonts } from 'expo-font';
import FanParameter from '../fanParameter/fanParameter';
import ButtonNavigation from './buttonNavigation';
import AmoniaPh from './amoniaPh';

const deviceHeight=Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;

export default function HomePage({ navigation }){
    const chart = React.useRef(null);
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        // 'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
 
    const [ranch,setRanch]=useState("RB-01")
    const [data, setData] = useState(null)
    const [temperature,setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [amonia, setAmonia] = useState(null);
    const [time, setTime] = useState(null);
    const [timeHours, setTimeHours] = useState(null);
    const [timeMinutes, setTimeMinutes]= useState(null);


const fetchData = async (id) => {
  console.log("this is", id)
    try {
      const response = await fetch(`http://tx.eagleattech.com/api/ranch/now?id=${id}`);
      const result = await response.json();
      setData(result)

      const dataTemp= result[0].TYPE;
      const dataHum=result[1].TYPE;
      var temperatureResult;
      var humidityResult;

      if (dataTemp === "TMP"){
          temperatureResult=result[0].VALUE;
          humidityResult=result[1].VALUE
          setTemperature(temperatureResult)
          setHumidity(humidityResult);
      }else{
        humidityResult=result[0].VALUE
        temperatureResult=result[1].VALUE;
        setTemperature(temperatureResult)
        setHumidity(humidityResult);
      }

      // const humidityResult=result[1].VALUE;
      const amoniaResult=result[2].VALUE;
      const timeResult=result[0].timestamp;
      console.log("time", timeResult)
      const dateObject= new Date(timeResult);
    

      const formattedTime = dateObject.toLocaleString('en-Gb',{ timeZone: 'UTC' });
      console.log("formatted", formattedTime)

    //   setData(result);
      console.log(result);
      setTemperature(temperatureResult);
      setHumidity(humidityResult);
      setAmonia(amoniaResult);
      setTime(formattedTime);
      // setTimeHours(hours);
      // setTimeMinutes(minutes);
      console.log("temperature ::", temperature)
      console.log("humidity ::", humidity)
      console.log("amonia ::",amonia)
      console.log("time ::", time)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 

const handlePress=async(id)=>{
  setRanch(id)
  await fetchData(id)
}

  useEffect(()=>{
    fetchData(ranch);
  },[])
  if (!fontsLoaded) {
    return null;
  }
    return(
       
            
                <View style={styles.chartPages}>

                <View style={{marginTop:15}}>
                   
                   <ButtonNavigation handlePress={handlePress} temperature={temperature} humidity={humidity} amonia={amonia}/>
               </View>


                          <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:20,color:"#00BFFF"}}>{ranch}</Text>
                          <View >
                            <Gauge temperature={temperature} />
                          </View>
                          
                      
                      <View >
                          <AmoniaPh humidity={humidity} amonia={amonia}/>
                    </View>

                    <View style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",gap:15}}>
                      <Text style={{fontFamily:"ChakraPetch-Regular", fontSize:16,color:"white"}}>Updated at</Text>
                      <Text style={{fontFamily:"ChakraPetch-Regular", fontSize:16,color:"white"}}>{time}</Text>
                    </View>

                {/* <View >
                   
                    <ButtonNavigation handlePress={handlePress}/>
                </View>
                 */}
                </View>            
        

        
    )
}


const styles = StyleSheet.create({
    chartPages: {
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#082F49",
      // gap:20
      // flexGrow:1, 
          
    },
    directory:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
        // borderWidth:2,
    },
    button:{
        // borderWidth:2,
        borderColor:"#f59e0b",
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:"#082F49",
        // borderRadius:20
    },
  });