import React from 'react'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import COLORS from '../constants/colors'

interface LoadingProps {
  percent: string
  color?: string
}
const LoadingBar = ({
  percent = '70%',
  color = COLORS.primary,
}: LoadingProps) => {
  return (
    <View style={[styles.bar, { backgroundColor: `${color}4A` }]}>
      <View
        style={[styles.progress, { width: percent, backgroundColor: color }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    height: moderateScale(6),
    borderRadius: moderateScale(10),
    width: '100%',
  },
  progress: {
    borderRadius: moderateScale(10),
    height: '100%',
    position: 'absolute',
    left: 0,
  },
})

export default LoadingBar
