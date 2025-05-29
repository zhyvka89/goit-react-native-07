import MemberDetails from "@/components/MemberDetails";
import MembersList from "@/components/MembersList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function NativeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Generations List"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Memebers List" component={MembersList} />
      <Stack.Screen name="Memeber Details" component={MemberDetails} />
      <Stack.Screen name="Details" component={MembersList} />
    </Stack.Navigator>
  )
}