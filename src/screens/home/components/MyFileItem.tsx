/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IMAGE_ASSETS from '../../../assets/imageAssets'
import ColoredIcon from '../../../components/ColoredIcon'
import LoadingBar from '../../../components/LoadingBar'
import SizedBox from '../../../components/SizedBox'
import RegularText from '../../../components/texts/RegularText'
import COLORS from '../../../constants/colors'
import FONTS from '../../../constants/fonts'
import FONTS_SIZE from '../../../constants/fontSize'

const MyFileItem = (props: any) => {
  return (
    <Pressable
      style={[
        styles.holder,
        {
          backgroundColor:
            props.index < 2 ? COLORS.white : COLORS.signInBackground,
          elevation: props.index < 2 ? 5 : 0,
        },
      ]}
    >
      <ColoredIcon color={COLORS.primary} icon={IMAGE_ASSETS.profile} />
      <View>
        <Text style={styles.titleText}>Google Drive</Text>
        <SizedBox height={moderateScale(30)} />
        <LoadingBar percent='70%' />
      </View>
      <View style={styles.row}>
        <RegularText color={COLORS.grey} fontSize={FONTS_SIZE.font12}>
          1244 Files
        </RegularText>
        <Text style={styles.title}>10GB</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: FONTS.BOLD,
    color: COLORS.black,
    fontSize: FONTS_SIZE.font20,
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font14,
    color: COLORS.black,
  },
  holder: {
    marginBottom: moderateScale(20),
    justifyContent: 'space-between',
    padding: moderateScale(15),
    marginTop: moderateScale(10),
    marginRight: moderateScale(5),
    marginLeft: moderateScale(20),
    height: moderateScale(180),
    width: moderateScale(180),
    borderRadius: moderateScale(35),
  },
})

export default MyFileItem
