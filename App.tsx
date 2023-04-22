// modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// components
import Nav from './screens/Nav';

// utils
import { navigationRef } from './utils/RootNav';

// nativewind
import { NativeWindStyleSheet } from "nativewind";

// configs
NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Nav />
        </NavigationContainer>
    );
}
