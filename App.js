/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TrackPlayer from 'react-native-track-player';

const track = {
  id: '1', // Must be a string, required
  url: require('./musicfile.mp3'), // Load media from the app bundle
  title: 'Tum Chalay Jao Paharon ki Qasam',
  artist: 'Ali Zafar',
  // url: 'http://example.com/avaritia.mp3', // Load media from the network
  // url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system
};

export default class App extends React.Component {
  componentDidMount() {
    this.initializeTrackPlayer();
  }
  initializeTrackPlayer = async () => {
    await TrackPlayer.setupPlayer().then(() => {
      console.log('Player is setup');
      // The player is ready to be used
    });
    TrackPlayer.registerPlaybackService(() => require('./service.js'));

    await TrackPlayer.add([track]);
    console.log('ADD');
    await TrackPlayer.play();

    // setTimeout(() => {
    //   TrackPlayer.stop();
    // }, 4000);
  };
  render() {
    return <Text>A MUSIC App Getting Started</Text>;
  }
}
const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: 'white',
  // },
});
