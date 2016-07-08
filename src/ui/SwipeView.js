import React , {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';

import CardView from './CardView';
import Swiper from 'react-native-swiper';

export default class SwipeView extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      {[,...Array(10)].map((x, i) =>
        <CardView key={i} />
      )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1
  }
});
