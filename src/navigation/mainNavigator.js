import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import main from "../screens/main";

import Noter from "../screens/noter";
import ChatBot from "../screens/chatBot";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">

            {/* The Main Menu */}
            <Stack.Screen
                name="Home"
                component={main}
                options={{ title: 'Welcome' }}
            />

            {/* The Editor Screen */}
            <Stack.Screen
                name="Editor"
                component={Noter}
                options={{ title: 'My Notes' }} // "Back" button will appear automatically
            />

            {/* The Chat Screen */}
            <Stack.Screen
                name="Chat"
                component={ChatBot}
                options={{ title: 'AI Assistant' }} // "Back" button will appear automatically
            />

        </Stack.Navigator>
    );
}

export default MainNavigator;