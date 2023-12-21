
import * as React from 'react';
import { StyleSheet,View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParameterIndicator from './components/parameterIndicator/paramterIndicator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import HomeStack from './routes/homeStack';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    // <HomeStack/>
    
  <HomeStack/>
  // <View style={styles.container}>
  //  <Home/>
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