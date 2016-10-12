'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include a h1 with message Hello World !!!', function(){
    expect(page.h1.getText()).toBe('Hello World !!!')
  });

});
