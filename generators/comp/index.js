'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('name', { type: String, required: true });
  },

  writing: function () {
    var name = this.name
    var items = this.name.split('/')
    var componentName = items[items.length - 1]
    console.log('componentName', componentName)
    this.fs.copyTpl(
      this.templatePath('file.js'),
      this.destinationPath(`src/components/${this.name}.js`),
      {
        componentName,
        name: this.name
      }
    );
  },
});
