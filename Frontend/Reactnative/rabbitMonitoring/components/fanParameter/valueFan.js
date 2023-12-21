import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function ValueFan(props){
const name=props.name
const img=props.img
const status=props.status
    return(
        <View style={styles.container}>
            <View>
                <Text>{name}</Text>
            </View>

            <View>
                <Image source={img} style={styles.imageContainer}/>
            </View>

            <View style={styles.statusInfo}>
                <Text>{status}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:5
    },
    imageContainer:{
        width:40,
        height:40
    },
    statusInfo:{
        alignItems:"center",
        // borderWidth:1,
        width:70
    }
})