import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import IconAssets from '../../assets/iconAssets'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import FONTS_SIZE from '../../constants/fontSize'

interface InputProps {
  type?: 'password' | 'email'
}

const AuthenticationInput = ({ type = 'password' }: InputProps) => {
  const [isPasswordEntry, setIsPasswordEntry] = useState<boolean>(true)
  const toggleEye = () => {
    setIsPasswordEntry(!isPasswordEntry)
  }
  return (
    <View style={styles.holder}>
      <TextInput
        secureTextEntry={isPasswordEntry}
        placeholderTextColor='gray'
        placeholder={type === 'email' ? 'test@email.com' : '******'}
        style={styles.field}
      />
      {type === 'password' && (
        <Pressable onPress={toggleEye} style={styles.eye}>
          <IconAssets.Eye />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  eye: {
    position: 'absolute',
    right: moderateScale(10),
    top: moderateScale(15),
  },
  holder: {
    width: '90%',
  },
  field: {
    padding: moderateScale(10),
    width: '100%',
    backgroundColor: COLORS.white,
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font14,
    color: COLORS.black,
  },
})

export default AuthenticationInput
