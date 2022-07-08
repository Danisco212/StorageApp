import React from 'react'
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { connect } from 'react-redux'

import COLORS from '../../constants/colors'
import { toggleDrawer } from '../../redux/Drawer/actions'
import SizedBox from '../SizedBox'

interface MenuProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  toggleDrawer: any
}
const MenuButton = ({
  toggleDrawer,
  onPress = () => toggleDrawer('open'),
}: MenuProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.bar} />
      <SizedBox height={moderateScale(4)} />
      <View style={styles.bar} />
      <SizedBox height={moderateScale(4)} />
      <View style={styles.bar} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bar: {
    marginLeft: moderateScale(15),
    height: moderateScale(5),
    width: moderateScale(27),
    backgroundColor: COLORS.black,
    borderRadius: moderateScale(7),
  },
})

const mapDispatchToProps = {
  toggleDrawer,
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton)
