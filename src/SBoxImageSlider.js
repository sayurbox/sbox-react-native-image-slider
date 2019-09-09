import React from 'react'
import { StyleSheet, ScrollView, View, Dimensions, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { useSliderAutoScroll } from './Hooks'
import Dots from './Dots'
import { SBoxImageSliderContext } from './Context'

const { width } = Dimensions.get('window')

const SBoxImageSlider = ({ height, images, renderItem, dotInactiveColor, dotActiveColor }) => {
  
  const animatedScrollX = new Animated.Value(0)

  const [
    setScrollX, 
    setScrollRef, 
    stopScroll, 
    startScroll
  ] = useSliderAutoScroll(width, images)

  const onScroll = event => { 
    setScrollX(event.nativeEvent.contentOffset.x)
    Animated.event(
      [
        {
          nativeEvent: {contentOffset: {x: animatedScrollX}}
        }
      ]
    )(event)
  }

  return (
    <SBoxImageSliderContext.Provider
      value={{
        animatedScrollX,
        count: images.length,
        dotInactiveColor,
        dotActiveColor
      }}
    >
      <View style={styles.container}>
        <ScrollView 
          style={{ height }}
          contentContainerStyle={styles.contentContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          ref={(ref) => {  setScrollRef(ref) }}
          onTouchStart={() => { stopScroll() }}
          onTouchEnd={() => { startScroll() }}
        >
          {images.map((item, index) => renderItem(width, item, index))}
        </ScrollView>
        <Dots/>
      </View>
    </SBoxImageSliderContext.Provider>
  )
}

SBoxImageSlider.propTypes = {
  height: PropTypes.number,
  images: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  dotActiveColor: PropTypes.string,
  dotInactiveColor: PropTypes.string
}

SBoxImageSlider.defaultProps = {
  height: width / 1.8,
  images: [],
  renderItem: () => {},
  dotActiveColor: 'rgb(9, 211, 91)',
  dotInactiveColor: 'rgb(255, 255, 255)'
}

export default SBoxImageSlider

const styles = StyleSheet.create({
  container: {
    width
  },
  contentContainer: {
    alignItems: 'stretch'
  }
})