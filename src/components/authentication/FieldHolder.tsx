import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import COLORS from '../../constants/colors'
import AuthenticationInput from '../inputs/AuthenticationInput'
import SizedBox from '../SizedBox'
import AuthenticationTitleText from '../texts/AuthenticationTitleText'
import RegularText from '../texts/RegularText'

const FieldHolder = () => {
  return (
    <View style={styles.holder}>
      <SizedBox height={moderateScale(40)} />
      <AuthenticationTitleText>Sign in</AuthenticationTitleText>
      <SizedBox height={moderateScale(30)} />
      <AuthenticationInput type='email' />
      <SizedBox height={moderateScale(20)} />
      <AuthenticationInput />
      <SizedBox height={moderateScale(5)} />
      <RegularText color='gray' textAlign='center'>
        FORGET PASSWORD?
      </RegularText>
    </View>
  )
}

const styles = StyleSheet.create({
  holder: {
    width: '95%',
    marginTop: moderateScale(-70),
    alignSelf: 'center',
    backgroundColor: COLORS.signInBackground,
    borderRadius: moderateScale(15),
    height: Dimensions.get('screen').height * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FieldHolder
