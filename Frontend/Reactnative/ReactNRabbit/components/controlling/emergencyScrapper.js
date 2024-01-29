import { StyleSheet, Text, View, StatusBar, Image,Dimensions,TouchableOpacity} from 'react-native';
import EmergencySwitch from '../../assets/emergencySwitch.png'
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EmergencyScrapper(){

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
        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>

        <View>
            <Text style={{fontFamily:"ChakraPetch-Bold", color:"red", fontSize:17}}>EMERGENCY BUTTON</Text>
        </View>

        <View >
                 <TouchableOpacity style={styles.button}>
                 {/* <Text style={{fontFamily:"ChakraPetch_500Medium",color:"white",fontSize:15}}>EMERGENCY STOP</Text>
                 <Text style={{fontFamily:"ChakraPetch_500Medium",color:"white",fontSize:12}}>STOP</Text> */}
                 <Image source={EmergencySwitch} style={{width:60, height:60}} />
                 </TouchableOpacity>
             </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:25,
        paddingVertical:2,
        // backgroundColor:"#DC143C",
        borderRadius:20
    },
  });