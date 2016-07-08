import React, {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { Card, Button, COLOR, TYPO } from 'react-native-material-design';

const cardImage = 'https://raw.githubusercontent.com/react-native-material-design/demo-app/master/src/img/welcome.jpg';

export default class CardView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Media
            image={<Image source={{uri:cardImage}}/>}
            overlay
          >
          <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Oracle gets sued big time</Text>
          </Card.Media>
          <Card.Body>
              <Text>Space for comments</Text>
          </Card.Body>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10
  }
});
