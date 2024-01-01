import { StyleSheet, Text, View, StatusBar, Image, useWindowDimensions, Dimensions} from 'react-native';
import Mqtt from '../components/mqtt/mqttHome';
import Exhaust from '../assets/exhaust.png'
import Rabbit from '../assets/rabbit.png'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home(){
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={{color:"#fff", fontSize:26, fontWeight:600, marginBottom:3}}>RABBIT IoT SYSTEM</Text>
                    <Text style={{color:"#fff", fontSize:14, fontWeight:600}}>Monitoring and Control System</Text>
                </View>
                <View style={styles.containerLogo}>
                    <Image source={Rabbit}/>
                </View>
            </View>
            <Mqtt imageLogo={Exhaust} rabbitLogo={Rabbit}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header:{
        // marginTop:40,
        // borderWidth:2,
        flexDirection:"row",
        alignItems:"center",
        width:'100%',
        height:130,
        backgroundColor:"#29465B"
    },
    title:{
        marginTop:50,
        marginLeft:10,
        paddingLeft:windowWidth-550,
        
    },
    containerLogo:{
        // borderWidth:1,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#467598",
        padding:6,
        borderRadius:30,
        position:'absolute',
        top:10,
        right: 30,
        // marginLeft:45,
    }
})