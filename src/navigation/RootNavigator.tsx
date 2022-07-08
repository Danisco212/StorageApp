import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import COLORS from '../constants/colors'
import SCREEN_CONSTANTS from '../constants/screenConstants'
import CustomDrawerScreen from '../screens/customDrawer/CustomDrawerScreen'
import SignInScreen from '../screens/signIn/SignInScreen'

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_CONSTANTS.SignIn}
        screenOptions={{
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTitleStyle: { color: COLORS.white },
          headerStyle: { backgroundColor: COLORS.primary },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name={SCREEN_CONSTANTS.SignIn}
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={SCREEN_CONSTANTS.CustomDrawer}
          component={CustomDrawerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
