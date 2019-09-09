# sbox-react-native-image-slider
Beatifully simple react native image slider.

<p align="center">
    <img src="sbox-react-native-image-slider-preview.gif" />
</p>

# Getting started
## Install
To install, as usual you just need to install it via npm with this command :
> npm i sbox-react-native-image-slider --save

## How to use it
It's a pretty easy to use this library. This is the usage example :
```javascript
import React from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'
import { SBoxImageSlider } from 'sbox-react-native-image-slider'

const images = [
  {
    url: 'https://i.ytimg.com/vi/cislZ9S0ocA/maxresdefault.jpg'
  },
  {
    url: 'https://akamai-platform.foxfilm.com/s3/production/201901/5bf0b05c3cc2553fda6dff24458741c29ab0b13e.jpg'
  },
  {
    url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F01%2Fdownload-1-1200x675.jpg'
  }
]

const Preview = () => {
  const renderItem = (width, item, index) => (
    <TouchableWithoutFeedback key={index.toString()}>
      <Image
        source={{ uri: item.url }}
        style={{ width, height: 250 }}
      />
    </TouchableWithoutFeedback>
  )
  return (
    <View>
      <SBoxImageSlider
        images={images}
        renderItem={renderItem}
      />
    </View>
  )
}
```
You can see the full code example in the example folder of this repository.

# Props
| propsName | propsType | isRequired | defaultProps |
| --------- | :-------: | :--------: | :----------: |
| images | `number` | `true` | [] |
| renderItem | `function` | `true` | `() => {}` |
| dotActiveColor | `string` | `false` | `rgb(9, 211, 91)` |
| dotInactiveColor | `string` | `false` | `rgb(255, 255, 255` |

