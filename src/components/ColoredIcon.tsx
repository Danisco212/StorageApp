import React from 'react'
import { Image, ImageProps, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import COLORS from '../constants/colors'

interface IconProps {
  icon: ImageProps
  color?: string
}
const ColoredIcon = ({ icon, color = COLORS.white }: IconProps) => {
  return (
    <View style={[styles.imageHolder, { backgroundColor: color }]}>
      <Image source={icon} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(7),
  },
  image: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(7),
  },
})

export default ColoredIcon
