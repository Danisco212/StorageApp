import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../../../assets/imageAssets'
import ColoredIcon from '../../../components/ColoredIcon'
import SizedBox from '../../../components/SizedBox'
import RegularText from '../../../components/texts/RegularText'
import COLORS from '../../../constants/colors'
import FONTS from '../../../constants/fonts'
import FONTS_SIZE from '../../../constants/fontSize'

const selectColor = (index: number) => {
  switch (index) {
    case 1:
      return COLORS.signInBackground
    case 2:
      return `${COLORS.primary}4A`
    case 3:
      return COLORS.lightYello
    case 4:
      return `${COLORS.primary}4A`
    default:
      return COLORS.signInBackground
  }
}

const RecentFileItem = (props: any) => {
  return (
    <View
      style={[styles.holder, { backgroundColor: selectColor(props.index) }]}
    >
      <ColoredIcon icon={IMAGE_ASSETS.profile} />
      <SizedBox width={moderateScale(20)} />
      <View style={styles.dataHolder}>
        <Text style={styles.title}>Xd Landing Page File</Text>
        <RegularText>July 11, 2022</RegularText>
      </View>
      <Image style={styles.menu} source={IMAGE_ASSETS.dotMenu} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font14,
    color: COLORS.black,
  },
  imageHolder: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(7),
  },
  dataHolder: {
    flex: 1,
  },
  image: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(7),
  },
  menu: {
    width: moderateScale(10),
    height: moderateScale(20),
    tintColor: 'purple',
  },
  holder: {
    marginBottom: moderateScale(20),
    backgroundColor: COLORS.signInBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(15),
    padding: moderateScale(10),
    marginHorizontal: moderateScale(20),
  },
})

export default RecentFileItem
