import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import { SBoxImageSliderContext } from './Context'

const { width } = Dimensions.get('window')

const Dot = ({ index }) => {  
  const { animatedScrollX, count, dotInactiveColor, dotActiveColor } = useContext(SBoxImageSliderContext)  
  const dimens = (width / 5) / (Math.pow(count, 2))
  const middle = width * index
  const start = middle - width
  const end = middle + width

  let backgroundColor = animatedScrollX.interpolate({
    inputRange: [start, middle, end],
    outputRange: [dotInactiveColor, dotActiveColor, dotInactiveColor],
    extrapolate: 'clamp'
  })

  let animatedWidth = animatedScrollX.interpolate({
    inputRange: [start, middle, end],
    outputRange: [dimens, (dimens * 3), dimens],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View 
      style={{
        width: animatedWidth,
        height: dimens,
        borderRadius: dimens / 2,
        margin: 5,
        backgroundColor
      }}
    />
  )
}

export default () => {
  const { count } = useContext(SBoxImageSliderContext)  
  return (
    <View style={styles.container}>
      {[...Array(count).keys()].map(( _, index ) => (
        <Dot 
          index={index}
          key={index.toString()}          
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width / 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 10,
    left: 10
  },
})