import React from 'react'
import { Image, ImageProps, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../../../assets/imageAssets'
import SizedBox from '../../../components/SizedBox'
import RegularText from '../../../components/texts/RegularText'
import COLORS from '../../../constants/colors'
import FONTS_SIZE from '../../../constants/fontSize'

interface MenuProps {
  label: string
  active?: boolean
  icon?: ImageProps
}
const MenuItem = ({
  label,
  active = false,
  icon = IMAGE_ASSETS.home,
}: MenuProps) => {
  return (
    <View
      style={[
        styles.holder,
        // eslint-disable-next-line react-native/no-inline-styles
        { backgroundColor: active ? `${COLORS.white}2A` : 'transparent' },
      ]}
    >
      <Image source={icon} style={styles.image} />
      <SizedBox width={moderateScale(10)} />
      <RegularText color={COLORS.white} fontSize={FONTS_SIZE.font12}>
        {label}
      </RegularText>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    tintColor: COLORS.white,
    height: moderateScale(20),
    width: moderateScale(20),
  },
  holder: {
    height: moderateScale(45),
    width: moderateScale(150),
    marginBottom: moderateScale(5),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default MenuItem
