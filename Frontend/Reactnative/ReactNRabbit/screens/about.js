import { StyleSheet, Text, View, StatusBar, Image,Dimensions} from 'react-native';
import Indicator from '../components/controlling/indicator';
import Exhaust from '../assets/exhaust.png'
import MqttControl from '../components/mqtt/mqttControl';
import Rabbit from '../assets/rabbit.png'
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import HomeLayout from '../components/layout/homeLayout';
import MainScrapper from '../components/controlling/mainScrapper';
import WaterPump from '../components/controlling/waterPump';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function About(){
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
}
    return(
        <HomeLayout>
                <View style={styles.container}>

                    <View style={styles.title}>
                        <View>
                            <Text style={{color:"#00BFFF", fontSize:24,fontFamily:"ChakraPetch-Bold"}}>RABBIT IoT SYSTEM</Text>
                        </View>
                    
                        <View >
                        <Image source={Rabbit} />
                        </View>
                </View>
                <View style={{backgroundColor:"#29465B",width:"100%", padding:10, marginTop:20}}>
                    <Text style={{color:"white", fontSize:16,fontFamily:"ChakraPetch-Bold",textAlign:"center"}}>EXHAUST FAN</Text>
                </View>
                <View style={{marginTop:10}}>
                    <MqttControl  imageLogo={Exhaust}/>
                </View>

                <View style={{backgroundColor:"#29465B",width:"100%", padding:10, marginTop:20}}>
                    <Text style={{color:"white", fontSize:16,fontFamily:"ChakraPetch-Bold",textAlign:"center"}}>SCRAPPER</Text>
                </View>

                <View style={{marginTop:20}}>
                    <MainScrapper/>
                </View>

                <View style={{backgroundColor:"#29465B",width:"100%", padding:10, marginTop:20}}>
                    <Text style={{color:"white", fontSize:16,fontFamily:"ChakraPetch-Bold",textAlign:"center"}}>WATER PUMP</Text>
                </View>

                <View style={{height:100,display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <WaterPump/>
                </View>
            
            </View>
        </HomeLayout>
        
    )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignContent:"center",
        alignItems:"center",
        marginTop:45,
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
        gap:45,
        // borderWidth:2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // borderColor:"#f59e0b",
        backgroundColor:"#082F49",
    },
    header:{
        // marginTop:40,
       
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        // height:130,
        // backgroundColor:"#29465B",
        width:windowWidth,
        // borderWidth:2,
        // borderColor:"red",
        marginTop:60
    },
   
    containerLogo:{
        // borderWidth:2,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#467598",
        padding:6,
        borderRadius:30,
        
    },
})