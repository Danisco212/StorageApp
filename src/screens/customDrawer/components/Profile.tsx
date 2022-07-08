import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../../../assets/imageAssets'
import RegularText from '../../../components/texts/RegularText'
import COLORS from '../../../constants/colors'
import FONTS from '../../../constants/fonts'
import FONTS_SIZE from '../../../constants/fontSize'

const Profile = () => {
  return (
    <View>
      <Image style={styles.image} source={IMAGE_ASSETS.profile} />
      <RegularText
        fontFamily={FONTS.MEDIUM}
        color={COLORS.white}
        fontSize={FONTS_SIZE.font16}
      >
        Daniel Isaac
      </RegularText>
    </View>
  )
}

const styles = StyleSheet.create({
  holder: {},
  image: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    borderWidth: moderateScale(2),
    borderColor: COLORS.white,
  },
})

export default Profile
