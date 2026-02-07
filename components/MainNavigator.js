import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Chatbot from "../screens/ChatScreen";
import Settings from "../screens/AboutScreen";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import About from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Chat" component={Chatbot} options={
            {
                tabBarIcon: ({color ,size}) => {
                
                   return (<Ionicons name="chatbox" size={size} color={color} />)
                }
            }
         }/>
         <Tab.Screen name="About" component={About} options={ 
            {
                tabBarIcon: ({color , size}) => {
                    
                    return(<MaterialCommunityIcons name="settings-helper" size={size} color={color} />)
                }
            }
         }   />
      </Tab.Navigator>
   );
}

export default MainNavigator