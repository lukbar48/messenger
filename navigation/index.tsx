import {
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import ChatScreen from '../screens/ChatScreen';
import RoomsScreen from '../screens/RoomsScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background2,
        },
        headerTintColor: Colors.plum3,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Rooms" component={RoomsScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}

    </Stack.Navigator>
  );
}
export default Navigation