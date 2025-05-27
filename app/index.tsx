import GenerationsList from "@/components/GenerationsList";
import MemberDetails from "@/components/MemberDetails";
import MembersList from "@/components/MembersList";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={GenerationsList}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Memebers List" component={MembersList} />
        <Stack.Screen name="Memeber Details" component={MemberDetails} />
        <Stack.Screen name="Details" component={MembersList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



// export default function Home() {
//   return (
//     <View>
//       {/* <GenerationsList/> */}
//       {/* <MembersList/> */}
//       <MemberDetails/>
//     </View>
//   );
// }
