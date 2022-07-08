import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../assets/imageAssets'
import COLORS from '../constants/colors'

const HeaderProfile = () => {
  return (
    <View style={styles.holder}>
      <Image style={styles.image} source={IMAGE_ASSETS.profile} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
  },
  holder: {
    marginRight: moderateScale(15),
    height: moderateScale(40),
    overflow: 'hidden',
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(2),
    borderColor: COLORS.primary,
  },
})

export default HeaderProfile
