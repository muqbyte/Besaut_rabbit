import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Indicator from '../controlling/indicator';
import Emergency from '../emergency/emergency';

export default function MqttControl(props){
const imageLogo=props.imageLogo
    return(
        <View>
            <Indicator icon={imageLogo} />
            <View style={{marginTop:50}}>
                <Emergency/>
            </View>
        </View>
    )
}