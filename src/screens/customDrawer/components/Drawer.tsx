import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { connect } from 'react-redux'

import IMAGE_ASSETS from '../../../assets/imageAssets'
import SizedBox from '../../../components/SizedBox'
import COLORS from '../../../constants/colors'
import { toggleDrawer } from '../../../redux/Drawer/actions'
import MenuItem from './MenuItem'
import Profile from './Profile'

const Drawer = (props: any) => {
  return (
    <View
      style={[
        styles.holder,
        {
          backgroundColor:
            props.status === 'open' ? COLORS.primary : COLORS.white,
        },
      ]}
    >
      <SizedBox height={moderateScale(40)} />
      <Pressable onPress={props.toggleDrawer.bind(this, 'closed')}>
        <Image source={IMAGE_ASSETS.cross} style={styles.image} />
      </Pressable>
      <View style={styles.dataHolder}>
        <SizedBox height={moderateScale(60)} />
        <Profile />
        <SizedBox height={moderateScale(60)} />
        <View>
          <MenuItem label='Home' icon={IMAGE_ASSETS.home} active />
          <MenuItem label='Settings' icon={IMAGE_ASSETS.settings} />
          <MenuItem label='Manager' icon={IMAGE_ASSETS.manager} />
          <MenuItem label='Storages' icon={IMAGE_ASSETS.storage} />
          <MenuItem label='Logout' icon={IMAGE_ASSETS.logout} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dataHolder: {
    marginLeft: moderateScale(10),
  },
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    tintColor: COLORS.white,
  },
  holder: {
    paddingHorizontal: moderateScale(20),
    // justifyContent: 'center',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
})

const mapDispatchToProps = {
  toggleDrawer,
}

const mapStateToProps = (state: any) => {
  const { status } = state.drawer
  return {
    status,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
