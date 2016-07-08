import React, {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Comments extends Component {

  propTypes : {
    comments : React.PropTypes.array
  };

  static get defaultProps() {
    return {
      comments : [{by : 'admin',text : 'No comments'},{by : 'admin',text : '.. yet'}]
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      currentComment : 0
    };
  };

  componentDidMount() {
    console.log('ok')
    setInterval(() => {
      this.nextComment()
    }, 5000)
  };

  nextComment() {
    const newComment = (this.state.currentComment + 1) % this.props.comments.length;
    this.setState({
      currentComment : newComment
    });
  };

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.commentBy}>{this.props.comments[this.state.currentComment].by} : </Text>
        <Text style={styles.commentText}>{this.props.comments[this.state.currentComment].text}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'flex-start',
    flexDirection: 'row',
    height: 70
  },
  commentBy : {
    fontWeight: '900'
  },
  commentText : {
    flex: 1
  }
});
