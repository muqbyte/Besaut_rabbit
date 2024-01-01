import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/home";
import About from "../screens/about";
import Analysis from "../screens/analysis";

const Tab = createBottomTabNavigator();

// const Stack=createNativeStackNavigator();

export default function HomeStack(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Analysis" component={Analysis} options={{ headerShown: false }}/>
                <Tab.Screen name="About" component={About} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}



