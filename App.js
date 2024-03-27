import { useState } from 'react';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import { StatusBar } from 'expo-status-bar';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import Detail from './components/Detail/Detail';
import MealList from './components/Main/MealList';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold } from '@expo-google-fonts/dev';

const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();

function MainScreen() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Main' component={MealList} />
      <Drawer.Screen name='Cart' component={Cart} />
    </Drawer.Navigator>
  )
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [fontsLoaded] = useFonts({ Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold });
  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor="white" style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
          {!loggedIn && <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='LogIn' component={LogIn} />
          </>}
          {loggedIn && <>
            <Stack.Screen name='MainDrawer' component={MainScreen} />
            <Stack.Screen name='Detail' component={Detail} sharedElements={(route) => { return [{ id: route.params.key }] }} />
          </>}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}