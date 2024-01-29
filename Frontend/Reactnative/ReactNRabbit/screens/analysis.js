import { StyleSheet, Text, View, StatusBar, Image,Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import Rabbit from '../assets/rabbit.png'
import HomeLayout from '../components/layout/homeLayout';
import AppDetails from '../components/detailsPage/appDetails';
import HomeDetails from '../components/detailsPage/homeDetails';
import ControlDetails from '../components/detailsPage/controlDetails';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Analysis(){
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
                    <PulseIndicator color='red' />
                    </View>
                        <View>
                            <Text style={{color:"#00BFFF", fontSize:24,fontFamily:"ChakraPetch-Bold"}}>RABBIT IoT SYSTEM</Text>
                        </View>
                    
                        <View >
                        <Image source={Rabbit} />
                        </View>
                    </View>

                    

                    <View>
                    <View >
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:24,color:"#00BFFF"}}>App Details</Text>
                    </View>
                        <View>
                            <AppDetails/>
                        </View>
                    </View>

                    <View>
                    <View >
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:24,color:"#00BFFF"}}>Home Page Details</Text>
                    </View>
                        <View>
                            <HomeDetails/>
                        </View>
                    </View>
                    <View>
                    <View >
                        <Text style={{fontFamily:"ChakraPetch-Bold", fontSize:24,color:"#00BFFF"}}>Control Page Details</Text>
                    </View>
                        <View>
                            <ControlDetails/>
                        </View>
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