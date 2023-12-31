import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
                    <Text>Temperature</Text>
                </View>
                <View>
                    <Text style={temp>25? {color:"red"} : {color:"black"}}>{temp}</Text>
                </View>
                <View>
                    <Text>°C</Text>
                </View>
        </View>

        <View style={styles.valueParameter}>
                <View>
                    <Text>Humidity</Text>
                </View>
                <View>
                    <Text style={hum>70? {color:"red"} : {color:"black"}}>{hum}</Text>
                </View>
                <View>
                    <Text>%</Text>
                </View>
        </View>

        <View style={styles.valueParameter}>
                <View>
                    <Text>Amonia</Text>
                </View>
                <View>
                    <Text style={amo>=20? {color:"red"} : {color:"black"}}>{amo}</Text>
                </View>
                <View>
                    <Text>mg/l</Text>
                </View>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:"row"
  },
    valueParameter:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:5,
        gap:5,
        width:101
    }
})