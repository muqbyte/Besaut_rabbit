import { StyleSheet, Text, View, StatusBar, Image,Dimensions,TouchableOpacity} from 'react-native';
import ScrapperMachine from '../../assets/MachineScrapper.png'
import { useFonts } from 'expo-font';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ScrapperControlling(){
    const [fontsLoaded] = useFonts({
        'ChakraPetch-Bold':require('../../assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-Regular': require('../../assets/fonts/ChakraPetch-Regular.ttf'),
        'ChakraPetch-Light': require('../../assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-SemiBold': require('../../assets/fonts/ChakraPetch-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
    return(
        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around", alignItems:"center",width:windowWidth-70}}>

        <View  style={{display:"flex", flexDirection:"row",justifyContent:"space-around",gap:10}}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Image source={ScrapperMachine} style={{width:70, height:70, tintColor:"white"}}/>
            </View>

            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontFamily:"ChakraPetch-SemiBold", color:"white", fontSize:16}}>SCRAPPER</Text>
            </View>
        </View> 

           

            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontFamily:"ChakraPetch-SemiBold",color:"white",fontSize:16}}>ON</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        paddingHorizontal:25,
        paddingVertical:2,
        backgroundColor:"#467598",
        borderRadius:8
    },
  });

