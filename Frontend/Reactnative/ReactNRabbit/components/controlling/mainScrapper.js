import { StyleSheet, Text, View, StatusBar, Image,Dimensions,TouchableOpacity} from 'react-native';
import ScrapperControlling from './scrapperControlling';
import EmergencyScrapper from './emergencyScrapper';
import { useFonts } from 'expo-font';
import axios from 'axios';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainScrapper(){
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
        <View style={{display:"flex", flexDirection:"column", justifyContent:"space-around",alignItems:"center", gap:10}}>
            
            <View style={{borderRadius:20}}>
                <ScrapperControlling/>   
            </View>
            <View style={{borderRadius:20,width:"100%"}}>
                 <EmergencyScrapper/>
            </View>
            
            
           

        </View>
    )
}