import { StyleSheet, Text, View, StatusBar, Image,Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";


  const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

export default function AppDetails(){

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
                    <Text style={styles.detailsCaption}>App Name:</Text>
                    
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Rabbit Ranch Monitoring System</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Version:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>1.0.0</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Location:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Besaut</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Developer:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Eagle Attch Sdn. Bhd</Text>
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