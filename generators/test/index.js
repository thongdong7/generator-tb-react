'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('group', { type: String, required: true });
    this.argument('name', { type: String, required: true });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('file.js'),
      this.destinationPath(`test/${this.group}/${this.name}.spec.js`),
      { name: this.name, group: this.group }
    );
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  },
});
