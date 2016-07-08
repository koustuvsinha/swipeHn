import React, {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Comments extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.commentBy}>Stephan : </Text>
        <Text style={styles.commentText}>What do you think about this?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'flex-start'
  },
  commentBy : {
  },
  commentText : {
  }
});
