import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Chatbot from "../screens/ChatScreen";
import Settings from "../screens/textEditor";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TextEditor from "../screens/textEditor";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="noter" component={TextEditor} options={ 
            {
                tabBarIcon: ({color , size}) => {
                    
                    return(<MaterialCommunityIcons name="settings-helper" size={size} color={color} />)
                }
            }
         }   />
         <Tab.Screen name="Chat" component={Chatbot} options={
            {
                tabBarIcon: ({color ,size}) => {
                
                   return (<Ionicons name="chatbox" size={size} color={color} />)
                }
            }
         }/>



      </Tab.Navigator>
   );
}

export default MainNavigator