import React, { useState } from 'react'
import { Animated, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import COLORS from '../../../constants/colors'
import FONTS from '../../../constants/fonts'
import FONTS_SIZE from '../../../constants/fontSize'

export type HomeTypes = 'files' | 'storage'

interface HomeTabProps {
  active: HomeTypes
  changeActive: React.Dispatch<React.SetStateAction<HomeTypes>>
}

interface SliderProps {
  style: ViewStyle
}

const Slider = ({ style }: SliderProps) => {
  return <Animated.View style={[styles.slider, style]} />
}

const HomeTab = ({ active, changeActive }: HomeTabProps) => {
  const [offsetX] = useState(new Animated.Value(0))

  const moveSlider = (type: HomeTypes) => {
    const toValue = type === 'files' ? 0 : moderateScale(125)
    Animated.timing(offsetX, {
      toValue: toValue,
      duration: 150,
      useNativeDriver: true,
    }).start()
  }
  return (
    <View style={styles.holder}>
      <Slider style={{ transform: [{ translateX: offsetX }] }} />
      <Text
        onPress={() => {
          changeActive('files')
          moveSlider('files')
        }}
        style={[
          styles.tab,
          { color: active == 'files' ? COLORS.white : COLORS.black },
        ]}
      >
        My Files
      </Text>
      <Text
        onPress={() => {
          changeActive('storage')
          moveSlider('storage')
        }}
        style={[
          styles.tab,
          { color: active == 'storage' ? COLORS.white : COLORS.black },
        ]}
      >
        My Storage
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tab: {
    width: '50%',
    height: '100%',
    textAlign: 'center',
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font14,
    textAlignVertical: 'center',
  },
  slider: {
    borderRadius: moderateScale(10),
    height: '100%',
    width: '50%',
    left: 0,
    position: 'absolute',
    backgroundColor: COLORS.primary,
  },
  holder: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    width: moderateScale(250),
    height: moderateScale(45),
    backgroundColor: `${COLORS.primary}4A`,
  },
})

export default HomeTab
