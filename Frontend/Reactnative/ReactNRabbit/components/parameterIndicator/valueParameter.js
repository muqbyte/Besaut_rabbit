import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Waterpercent from '../icon/waterpercent.png'
import Icon from 'react-native-ico-material-design';
import Waterpercent from '../icon/waterpercent.png';
import Thermometer from '../icon/thermometer.png';
import Amonia from '../icon/amonia.png';


const deviceHeight=Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;
export default function ValueParameter(props){
// const name=props.name
const temp=props.temp
const hum=props.hum
const amo=props.amo
const value=props.value
const unit=props.unit
    return(
    <View style={styles.container}>
        
            <View style={styles.valueParameter}>
                    <View>
                    <Image source={Thermometer} style={{tintColor: "#D22B2B"}}/>
                    </View>
                    <View style={styles.indicator}>
                        <View>
                            <Text style={temp>25? {color:"red"} : {color:"black"}}>25</Text>
                        </View>
                        <View>
                            <Text>°C</Text>
                        </View>
                    </View>
            </View>

            <View style={styles.valueParameter}>
                    <View>
                        <Image source={Waterpercent} style={{tintColor: "#89CFF0"}}/>
                       
                    </View>
                    <View style={styles.indicator}>
                        <View>
                            <Text style={hum>70? {color:"red"} : {color:"black"}}>70</Text>
                        </View>
                        <View>
                            <Text>%</Text>
                        </View>
                    </View>
                    
            </View>

            <View style={styles.valueParameter}>
                    <View>
                        <Image source={Amonia} style={{tintColor: "#FFBF00"}}/>
                    </View>
                    <View style={styles.indicator}>
                        <View>
                            <Text style={amo>=20? {color:"red"} : {color:"black"}}>6</Text>
                        </View>
                        <View>
                            <Text>ppm</Text>
                        </View>
                    </View>
                    
            </View>
    </View>
    )
}

const styles=StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:deviceWidth,
    // borderWidth:1,
  },
    valueParameter:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:5,
       
        // width:101,
        // borderWidth:1,
        flex: 1
    },
    caption:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        // borderWidth:1,
        width:109,
        flex: 1
    },
    indicator:{
        display:"flex",
        flexDirection:"row",
        gap:10
    }
})