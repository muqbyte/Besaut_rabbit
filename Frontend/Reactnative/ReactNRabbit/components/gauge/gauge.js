import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import { ECharts } from 'react-native-echarts-wrapper';
import { useFonts } from 'expo-font';


const deviceHeight=Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;

export default function Gauge(props) {
  const chart = React.useRef(null);
  const [gaugeTemp, setGaugeTemp]= useState("0")
  const [fontsLoaded] = useFonts({
    'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
    'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
    'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
    'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
});
  

  const dew = 10;
  const temperature = props.temperature;
  const fonttype=props.fonttype;

  var option
  useEffect(() => {
    // chart.current.setBackgroundColor('#eff0dd')
    chart.current.setBackgroundColor('#082F49');
    chart.current.setOption(option);
    
    // console.log(props.sensor)
  }, [temperature]);

  // Define the option before the useEffect hook
  option = {
    backgroundColor: 'transparent',
    series: [
      {
        name: "TMP",
        type: "gauge",
        max:40,
        splitNumber: 2,
        
        axisLine: {
          lineStyle: {
            color: [
              // [0.29, "rgb(15,164,100)"],
              [0.29, "#6dcff2"],
              // [0.7, "rgb(235,137,52)"],
              [0.7, "#22c55e"],
              [1, "#ed0919"],
            ],
            shadowColor: "rgba(255, 255, 255, 0.7)",
            shadowBlur: 10,
            width: 8,
          },
        },
        axisTick: {
          splitNumber: 5,
          length: 10, 
          lineStyle: {
            color: "auto",
          },
        },
        title: {
          show:false,
          offsetCenter: ["0", "0"],
          color: temperature < 20 ? '#83cef4' : temperature > 28 ? '#ff5252' : '#c6ff00',
        },
        axisLabel: {
          borderRadius: 2,
          color: "auto",
          padding: 3,
          
        },
        splitLine: {
          length: 15,
          lineStyle: {
            color: "auto",
          },
        },
        pointer: {
          width: 4,
        },
        detail: {
          show: false,
          offsetCenter: [0, '-25%'],
          
        
        },
        data: [{ value: temperature, name: "TMP (°C)"}],
      },
    
    ],
  };

  
  
  // if(!fontsLoaded){
  //   return null
  // }

  return (
    <View style={styles.chartContainer}>
     
      <ECharts
      option={option}
      backgroundColor="#082F49"
      height="50%"
      ref={chart}
    />
      
   
    
    <View style={styles.caption}>
      <View>
        <Text style={{fontFamily:"ChakraPetch-SemiBold", fontSize:20,color: temperature < 20 ? '#83cef4' : temperature > 28 ? '#ff5252' : '#c6ff00'}}>{temperature}</Text>
      </View>

      <View>
        <Text style={{fontFamily:"ChakraPetch-SemiBold",fontSize:20, color: temperature < 20 ? '#83cef4' : temperature > 28 ? '#ff5252' : '#c6ff00'}}>°C</Text>
      </View>
        
    </View>
    
    
  </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    
    width:(deviceWidth<400)?280:380,
    height:(deviceHeight<800)?280:380,
    borderRadius:30,
    // borderWidth:2,

    overflow: 'hidden',
    backgroundColor:"#082F49"
    // backgroundColor:"transparent",
    
  },
  caption:{
    position:"absolute",
    top:"80%",
    right:"35%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    width:"30%",
    alignItems:"center",
    backgroundColor:"transparent",
    // borderWidth:2,
    gap:30
    
  },
  
});