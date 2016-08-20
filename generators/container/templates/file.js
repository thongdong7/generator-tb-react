import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import LayoutPage from './LayoutPage';

// import <%= name %> from '../components/<%= name %>';

export default class <%= name %>Page extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <LayoutPage>
        { /*
        <<%= name %> />
        */}
      </LayoutPage>
    )
  }
}

let styles = StyleSheet.create({
});