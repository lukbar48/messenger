import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import ChatScreen from '../screens/ChatScreen';
import RoomsScreen from '../screens/RoomsScreen';
import * as React from 'react';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rooms"
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.background2,
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
        },
        headerTitleStyle: {
          color: Colors.plum3,
          fontSize: 30,
          fontWeight: 'bold',
        },
      })}
    >
      <Stack.Screen name="Rooms" component={RoomsScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};
export default Navigation;
