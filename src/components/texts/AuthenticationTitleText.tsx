import React, { ReactNode } from 'react'
import { StyleSheet, Text } from 'react-native'

import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import FONTS_SIZE from '../../constants/fontSize'

export interface CustomTextProps {
  children: ReactNode
}

const AuthenticationTitleText = ({ children }: CustomTextProps) => {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font25,
    color: COLORS.black,
  },
})

export default AuthenticationTitleText
