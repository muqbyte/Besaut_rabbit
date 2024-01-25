import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeLayout(props){

    return(
        <View style={styles.container}>
                {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
        backgroundColor:"#082F49",
	},
});
