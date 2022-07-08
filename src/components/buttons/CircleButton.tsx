import React from 'react'
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../../assets/imageAssets'
import COLORS from '../../constants/colors'

interface CircleButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined
}
const CircleButton = ({ onPress }: CircleButtonProps) => {
  return (
    <View style={styles.holder}>
      <TouchableOpacity
        style={styles.buttonHolder}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Image style={styles.image} source={IMAGE_ASSETS.rightArrow} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  holder: {
    marginTop: moderateScale(-30),
    alignSelf: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(55),
    width: moderateScale(110),
    height: moderateScale(110),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(40),
    height: moderateScale(40),
    tintColor: COLORS.white,
  },
  buttonHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
  },
})

export default CircleButton
