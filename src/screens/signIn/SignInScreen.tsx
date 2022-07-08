import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import FieldHolder from '../../components/authentication/FieldHolder'
import Logo from '../../components/authentication/Logo'
import CircleButton from '../../components/buttons/CircleButton'
import SizedBox from '../../components/SizedBox'
import COLORS from '../../constants/colors'
import SCREEN_CONSTANTS from '../../constants/screenConstants'

interface NavigationProps {
  navigation: NavigationProp<ParamListBase>
}
const SignInScreen = ({ navigation }: NavigationProps) => {
  const toNextScreen = () => {
    // perform action here
    navigation.navigate(SCREEN_CONSTANTS.CustomDrawer)
  }
  return (
    <SafeAreaView style={styles.holder}>
      <SizedBox height={moderateScale(10)} />
      <Logo />
      <FieldHolder />
      <CircleButton onPress={toNextScreen} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  holder: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})

export default SignInScreen
