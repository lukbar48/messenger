import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import ChatScreen from '../screens/ChatScreen';
import RoomsScreen from '../screens/RoomsScreen';
import * as React from 'react';
import TopBar from '../components/TopBar/TopBar';

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
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: Colors.background2,
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
          height: 90,
        },
        headerTitleStyle: {
          color: Colors.plum3,
          fontSize: 30,
          fontFamily: 'Poppins_700Bold',
        },
        headerRight: () => <TopBar screenName={route.name} />,
      })}
    >
      <Stack.Screen name="Rooms" component={RoomsScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Navigation;
