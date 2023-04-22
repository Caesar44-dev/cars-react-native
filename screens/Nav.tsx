// modules
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Screen01 from './Screen01';
import Screen02 from './Screen02';
import Screen03 from './Screen03';

// configs
const Stack = createNativeStackNavigator()

const Nav = () => {
    return (
        <Stack.Navigator initialRouteName="Screen01" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Screen01" component={Screen01} />
            <Stack.Screen name="Screen02" component={Screen02} />
            <Stack.Screen name="Screen03" component={Screen03} />
        </Stack.Navigator>
    )
}

export default Nav;