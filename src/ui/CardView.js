import React, {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Linking
} from 'react-native';

import { Card, Button, COLOR, TYPO } from 'react-native-material-design';
import Comments from './Comments';

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
          <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>81 points by SanderMark 2 hours ago</Text>
          </Card.Media>
          <Card.Body>
              <Comments/>
          </Card.Body>
          <Card.Actions position="right">
              <Button primary='googleBlue' text="Open Article" onPress={() => Linking.openURL('https://github.com/react-native-material-design/react-native-material-design').catch(err => console.error('An error occurred', err))} />
              <Button primary='googleGreen' text="View Comments" onPress={() => Linking.openURL('https://github.com/react-native-material-design/react-native-material-design').catch(err => console.error('An error occurred', err))} />
          </Card.Actions>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
});
