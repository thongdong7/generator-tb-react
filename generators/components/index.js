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
    this.fs.copyTpl(
      this.templatePath('file.js'),
      this.destinationPath(`app/components/${this.name}.js`),
      { name: this.name }
    );
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  },
});
