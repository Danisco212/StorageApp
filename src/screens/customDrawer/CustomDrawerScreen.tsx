import React, { useEffect, useState } from 'react'
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { connect } from 'react-redux'

import COLORS from '../../constants/colors'
import DrawerNavigator from '../../navigation/DrawerNavigator'
import Drawer from './components/Drawer'

const CustomDrawerScreen = (props: any) => {
  const [offsetX] = useState(new Animated.Value(0))
  const [offsetY] = useState(new Animated.Value(0))
  const [scaleY] = useState(new Animated.Value(1))
  const [rotation] = useState(new Animated.Value(0))

  const openDrawer = () => {
    Animated.timing(offsetX, {
      toValue: moderateScale(250),
      duration: 250,
      useNativeDriver: true,
    }).start()
    Animated.timing(offsetY, {
      toValue: moderateScale(-30),
      duration: 250,
      useNativeDriver: true,
    }).start()
    Animated.timing(scaleY, {
      toValue: 0.8,
      duration: 250,
      useNativeDriver: true,
    }).start()
    Animated.timing(rotation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }

  const closeDrawer = () => {
    Animated.timing(offsetX, {
      toValue: moderateScale(0),
      duration: 250,
      useNativeDriver: true,
    }).start()
    Animated.timing(offsetY, {
      toValue: moderateScale(0),
      duration: 250,
      useNativeDriver: true,
    }).start()
    Animated.timing(scaleY, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0)
    })
  }

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg'],
  })

  useEffect(() => {
    if (props.status === 'open') {
      openDrawer()
    } else {
      closeDrawer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.status])
  return (
    <SafeAreaView>
      <Drawer />
      <Animated.View
        style={[
          styles.screenHolder,
          {
            transform: [
              { translateX: offsetX },
              { translateY: offsetY },
              { scaleY: scaleY },
              { rotate: rotate },
            ],
          },
        ]}
      >
        <View style={styles.shadow} />
        <View style={styles.navHolder}>
          <DrawerNavigator />
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navHolder: {
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    flex: 1,
  },
  shadow: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    right: moderateScale(20),
    top: moderateScale(20),
    borderRadius: moderateScale(20),
    backgroundColor: `${COLORS.black}1A`,
  },
  screenHolder: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
})

const mapStateToProps = (state: any) => {
  const { status } = state.drawer
  return {
    status,
  }
}

export default connect(mapStateToProps)(CustomDrawerScreen)
