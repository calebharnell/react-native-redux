import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addEmail } from '../actions'; //Import your actions
import store from '../store'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailFromState: null
    };
  }

  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 50 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <Button
            onPress={ () => store.dispatch(addEmail(this.state.email))}
            title="Submit Email"
            color="#841584"
          />
          <Text>{ this.props.email || 'No email entered' }</Text>
        </View>
      );
  }
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    email: state.AuthReducer.email
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addEmail }, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({

});
