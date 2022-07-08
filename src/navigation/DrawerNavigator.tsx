/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import MenuButton from '../components/buttons/MenuButton'
import HeaderProfile from '../components/HeaderProfile'
import COLORS from '../constants/colors'
import FONTS from '../constants/fonts'
import FONTS_SIZE from '../constants/fontSize'
import SCREEN_CONSTANTS from '../constants/screenConstants'
import HomeScreen from '../screens/home/HomeScreen'

const Stack = createStackNavigator()

const DrawerNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: COLORS.black,
          fontFamily: FONTS.BOLD,
          fontSize: FONTS_SIZE.font24,
        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'manager',
          headerLeft: () => <MenuButton />,
          headerRight: () => <HeaderProfile />,
        }}
        component={HomeScreen}
        name={SCREEN_CONSTANTS.Home}
      />
    </Stack.Navigator>
  )
}

export default DrawerNavigator
