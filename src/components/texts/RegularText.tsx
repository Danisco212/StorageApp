import React, { ReactNode } from 'react'
import { Platform, StyleSheet, Text, TextStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import FONTS_SIZE from '../../constants/fontSize'

interface TextParams {
  color?: string | undefined
  fontSize?: number | undefined
  children: ReactNode
  marginTop?: number | undefined
  textAlign?: TextStyle['textAlign']
  fontFamily?: string
}

const RegularText = ({
  color = COLORS.black,
  fontSize = FONTS_SIZE.font13,
  children,
  marginTop = Platform.OS === 'android' ? moderateScale(3) : undefined,
  textAlign = 'auto',
  fontFamily = FONTS.REGULAR,
}: TextParams) => {
  return (
    <Text
      style={[
        styles.text,
        { fontSize, color, marginTop, textAlign, fontFamily },
      ]}
      numberOfLines={1}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONTS_SIZE.font13,
  },
})

export default RegularText
