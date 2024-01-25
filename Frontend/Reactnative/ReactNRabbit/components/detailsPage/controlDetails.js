import { StyleSheet, Text, View, StatusBar, Image,Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

  const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

export default function ControlDetails(){
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
        <View style={{display:"flex", flexDirection:"column",backgroundColor:"#29465B", padding:10, borderRadius:10, width:windowWidth-30}}>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Exhaust Fan:</Text>
                    
                </View>
                <View>
                    <Text style={styles.detailsCaption}>RC-01, RC-02,RC-03,RC-04</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Scrapper:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Swtich and Emergency stop button</Text>
                </View>
            </View>
           
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Water Pump:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Switch button</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    appInformation:{
        display:"flex",
        flexDirection:"row",
        gap:5
    },
    detailsCaption:{
        fontFamily:"ChakraPetch-SemiBold",
        color:"white",
        fontSize:16
    }
})