import { StyleSheet, Text, View, StatusBar, Image,Dimensions} from 'react-native';
import { useFonts } from 'expo-font';



  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeDetails(){
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
        <View style={{display:"flex", flexDirection:"column",backgroundColor:"#29465B", padding:10, borderRadius:10, width:windowWidth-30}}>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Ranch:</Text>
                    
                </View>
                <View>
                    <Text style={styles.detailsCaption}>RB-01, RB-02,RB-03,RB-04</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Temperature:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Optimal value between 23 to 25</Text>
                </View>
            </View>
           
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Humidity:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Optimal value between 60% to 80%</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Amonia:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Optimal value between 5 to 7</Text>
                </View>
            </View>
            <View style={styles.appInformation}>
                <View>
                    <Text style={styles.detailsCaption}>Exhaust Fan:</Text>
                </View>
                <View>
                    <Text style={styles.detailsCaption}>Monitor status of the fan</Text>
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