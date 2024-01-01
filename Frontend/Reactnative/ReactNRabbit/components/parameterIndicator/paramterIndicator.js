import * as React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import ValueParameter from './valueParameter';



export default function ParameterIndicator(props){
    const headerName=props.headerName
    const temperature=props.temperature
    const humidity=props.humidity
    const amonia=props.amonia
    const rabbitLogo=props.rabbitLogo
    
    return(
        <View style={styles.containerone}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerFont}>{headerName}</Text>
                    </View>
                </View>
            {/* parametet and value */}
            <View style={styles.parameter}>
                <ValueParameter name="Temperature" temp={temperature} hum={humidity} amo={amonia} />
            </View>
         
        </View>
    )
}

const styles=StyleSheet.create({
    containerone:{
        flexDirection:'column',
        backgroundColor: '#fff',
        alignItems:"center",
    },
    header:{
        backgroundColor:"#29465B",
        paddingHorizontal:30,
        paddingVertical:5,
        borderRadius:20,
    },
    headerFont:{
        fontSize:16,
        fontWeight:"bold",
        color:"#FFF"
    },
    parameter:{
        flexDirection:"row",
        gap:10
    },
    imageContainer:{
        width:40,
        height:40
    },
})