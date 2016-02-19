'use strict';

define(function(require) {

  var easyui = require('./../dist/easyui'),
      Link = easyui.Link,
      Button = easyui.Button,
      Select = easyui.Select,
      Checkbox = easyui.Checkbox,
      Element = easyui.Element;

  var link = new Link('#link', function(href) {
    console.log('Link click with href ' + href);
  });

  var button = new Button('#button', function() {
    console.log('Button click');
  });

  var select = new Select('#select', function(selectedOptionValue) {
    console.log('Select changed with selected option value ' + selectedOptionValue)
  });

  var checkbox = new Checkbox('#checkbox', function(checked) {
    console.log('Checkbox click with checked ' + checked);
  });

  checkbox.check();

  var br1 = Element.fromHTML('<br/>'),
      br2 = br1.clone(),
      br3 = br2.clone(),
      br4 = br3.clone();

  var clonedLink = Link.clone('#link'),
      clonedButton = button.clone(),
      selectFromHTML = Select.fromHTML('<select><option>a</option><option>b</option><option>c</option></select>'),
      checkboxFromHTML = Checkbox.fromHTML('<input type="checkbox"/>');

  clonedLink.removeAttribute('id');
  clonedLink.html('Cloned link');
  clonedLink.onClick(function(href) {
    console.log('Cloned link click with href ' + href);
  });

  clonedButton.removeAttribute('id');
  clonedButton.html('Cloned button');
  clonedButton.onClick(function() {
    console.log('Cloned button click');
  });

  selectFromHTML.setSelectedOptionByValue('c');
  selectFromHTML.onChange(function(selectedOptionValue) {
    console.log('Select from HTML changed with selected option value ' + selectedOptionValue)
  });

  checkboxFromHTML.onClick(function(checked) {
    console.log('Checkbox from HTML click with checked ' + checked);
  });

  checkbox.appendAfter(br1);
  br1.appendAfter(clonedLink);
  clonedLink.appendAfter(br2);
  br2.appendAfter(clonedButton);
  clonedButton.appendAfter(br3);
  br3.appendAfter(selectFromHTML);
  selectFromHTML.appendAfter(br4);
  br4.appendAfter(checkboxFromHTML);
});
