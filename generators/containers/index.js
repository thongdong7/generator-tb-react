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
      this.destinationPath(`app/containers/${this.name}Page.js`),
      { name: this.name }
    );

    console.log('Add following lines to app/index.js');
    console.log(`import ${this.name}Page from './containers/${this.name}Page';`);
    console.log(`<Scene key="${this.name}" component={${this.name}} title="${this.name}" initial={true} {...pageStyle} />`);
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  },
});
