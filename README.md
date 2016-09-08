# generator-tb-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for react with specific project structure

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tb-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-tb-react
```

Then generate your new project:

```bash
yo tb-react
```

`rn` script is alias for `yo tb-react`

```
rn component Order/OrderView/OrderPrintPreviewButton
```

will create file `app/components/Order/OrderView/OrderPrintPreviewButton.js`

```
import React, {Component} from 'react'
import {
  StyleSheet, View,
} from 'react-native'

class OrderPrintPreviewButton extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    // }
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {

  }
});

export default OrderPrintPreviewButton
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [thongdong7]()


[npm-image]: https://badge.fury.io/js/generator-tb-react.svg
[npm-url]: https://npmjs.org/package/generator-tb-react
[travis-image]: https://travis-ci.org/thongdong7/generator-tb-react.svg?branch=master
[travis-url]: https://travis-ci.org/thongdong7/generator-tb-react
[daviddm-image]: https://david-dm.org/thongdong7/generator-tb-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/thongdong7/generator-tb-react
