import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import Total from './Total';

const Stack = createNativeStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Expense Manager' }} />
            <Stack.Screen name="Add" component={Add} options={{ title: 'Add Transaction' }} />
            <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Transaction' }} />
            <Stack.Screen name="Total" component={Total} options={{ title: 'Summary' }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
