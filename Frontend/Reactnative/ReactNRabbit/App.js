
import * as React from 'react';

import { StyleSheet,View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParameterIndicator from './components/parameterIndicator/paramterIndicator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import HomeStack from './routes/homeStack';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";




// const Stack = createNativeStackNavigator();

function App() {

  return (
    // <HomeStack/>
    
  <HomeStack/>
  // <View style={styles.container}>
  //  <Text>HAI</Text>
  // </View>
  );
}

const styles=StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:150,
      justifyContent: 'center',
  },
 
})

export default App;