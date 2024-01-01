import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';

export default function Emergency(){

    const emergencySwitch =()=>{
        Alert.alert("Are you sure you want to switch OFF all device?");
       };

    return(
        <View style={styles.container}>
            <View style={styles.firstSub}>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginVertical:20}}>
                    <Text style={{fontSize:28, color:"#fff", fontWeight:"bold"}}>KILL SWITCH</Text>
                </View>
                <View style={{width:190, flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{textAlign:"center", fontSize:16, color:"#fff"}}>The kill switch will { "\n"}shutdown all the system</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.pushButton} onPress={emergencySwitch}><Text style={{textAlign:"center", fontSize:16}}>SHUTDOWN</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#29465B",
    padding:10,
    borderRadius:20
},
firstSub:{
    flexDirection:"column",
    alignItems:"center",
    width:250
},
pushButton:{
    backgroundColor:"#D9D9D9",
    padding:10,
    borderRadius:10
}

})