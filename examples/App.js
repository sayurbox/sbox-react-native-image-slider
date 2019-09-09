/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

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

const App = () => {
  const renderItem = (width, item, index) => (
    <TouchableWithoutFeedback key={index.toString()}>
      <Image
        source={{ uri: item.url }}
        style={{ width, height: 250 }}
      />
    </TouchableWithoutFeedback>
  )
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SBoxImageSlider
          images={images}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
