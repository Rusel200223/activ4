import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PolicytabScreen from './Policypage';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import LastpageScreen from './Lastpage';
import ForgotpageScreen from './Forgotpage';
import Settab from './settingtab';
import imagebackScreen from './imageback';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
  <NavigationContainer>
        <Stack.Navigator>
       
        <Stack.Screen name="Home" component={HomeScreen}options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={TabNavigator } options={{headerShown:false}}/>
        <Stack.Screen name="Lastpage" component={LastpageScreen} />
        <Stack.Screen name="Forgotpage" component={ForgotpageScreen} />
        <Stack.Screen name="imageback" component={imagebackScreen} />
      
      </Stack.Navigator>
   
  </NavigationContainer>
  );
}


function   TabNavigator  () {
  return (
    
    <Tab.Navigator  screenOptions={{tabBarActiveBackgroundColor:'gray', tabBarInactiveBackgroundColor:'black', tabBarActiveTintColor:'yellow'}}>
      <Tab.Screen name="Register" component={DetailsScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Policy" component={PolicytabScreen}/>
      <Tab.Screen name="Ratings" component={Settab} />
    </Tab.Navigator>
   
    );
  }
  export default StackNavigator;
