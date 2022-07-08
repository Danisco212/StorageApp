import React from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { connect } from 'react-redux'

import IMAGE_ASSETS from '../../assets/imageAssets'
import SizedBox from '../../components/SizedBox'
import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'
import FONTS_SIZE from '../../constants/fontSize'
import { toggleDrawer } from '../../redux/Drawer/actions'
import MyFileItem from './components/MyFileItem'
import RecentFileItem from './components/RecentFileItem'

const HomeScreen = () => {
  const renderHeader = () => {
    return (
      <View>
        <SizedBox height={moderateScale(20)} />
        <View style={styles.row}>
          <Text style={styles.titleText}>My Files</Text>
          <Image style={styles.sort} source={IMAGE_ASSETS.filter} />
        </View>
        <SizedBox height={moderateScale(10)} />
        <ScrollView
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {[1, 2, 3].map((item) => (
            <MyFileItem index={item} />
          ))}
        </ScrollView>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.row}>
          <Text style={styles.titleText}>Recent Added Files</Text>
        </View>
        <SizedBox height={moderateScale(15)} />
      </View>
    )
  }
  return (
    <View style={styles.holder}>
      <FlatList
        ListHeaderComponent={renderHeader()}
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => <RecentFileItem index={item} />}
      />
      <SizedBox height={moderateScale(15)} />
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    // paddingBottom: moderateScale(20),
    // maxHeight: moderateScale(210),
  },
  row: {
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sort: {
    tintColor: COLORS.primary,
    height: moderateScale(20),
    width: moderateScale(20),
  },
  titleText: {
    fontFamily: FONTS.BOLD,
    color: COLORS.black,
    fontSize: FONTS_SIZE.font20,
  },
  holder: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})

const mapDispatchToProps = {
  toggleDrawer,
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
