import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../../assets/imageAssets'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import FONTS_SIZE from '../../constants/fontSize'

const Logo = () => {
  return (
    <View style={styles.holder}>
      <Image style={styles.image} source={IMAGE_ASSETS.miniLogo} />
      <Text style={styles.logoText}>
        Pro<Text style={{ color: COLORS.primary }}>Pio</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: moderateScale(120),
    width: moderateScale(190),
  },
  logoText: {
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font38,
    color: COLORS.black,
  },
  holder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(350),
    height: moderateScale(350),
    zIndex: 2,
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(200),
    alignSelf: 'center',
  },
})

export default Logo
