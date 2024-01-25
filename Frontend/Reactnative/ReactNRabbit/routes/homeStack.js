import React from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Home from "../screens/home";
import About from "../screens/about";
import Analysis from "../screens/analysis";

const Tab = createBottomTabNavigator();

// const Stack=createNativeStackNavigator();

export default function HomeStack(){
    return(
        <NavigationContainer>
            <Tab.Navigator  
     screenOptions={{
                tabBarActiveBackgroundColor:"#082F49",
                tabBarInactiveBackgroundColor:"#29465B",
                tabBarShowLabel: false,
                tabBarStyle:{
                    height:65,
                    borderTopWidth:0
                }
            }}
    
  >
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ color,size }) => (
                    <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <View>
                            <Ionicons name="home" color="white" size={22} />    
                        </View>
                        <View>
                            <Text style={{color:"white"}}>Home</Text>
                        </View>
                        
                    </View>
            
          )}} /> 
                <Tab.Screen name="About" component={About} options={{ headerShown: false, tabBarIcon: ({ color,size }) => (
                    <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <View>
                        <Entypo name="sound-mix" size={24} color="white" />    
                        </View>
                        <View>
                            <Text style={{color:"white"}}>Control</Text>
                        </View>
                        
                    </View>
            
          )}}/>
                <Tab.Screen name="Analysis" component={Analysis} options={{ headerShown: false, tabBarIcon: ({ color,size }) => (
                    <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <View>
                        <Ionicons name="bulb-outline" size={24} color="white" /> 
                        </View>
                        <View>
                            <Text style={{color:"white"}}>About</Text>
                        </View>
                        
                    </View>
            
          )}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}




