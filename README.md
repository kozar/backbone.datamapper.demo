Backbone.DataMapper Demo Application
====================================

About
-----

This is a demo single-page JS web application, that is intended to show
advantages of usage of the **Backbone.DataMapper** plugin, that is ***yet to be implemented***.

Plugin should provide [DataMapper](http://martinfowler.com/eaaCatalog/dataMapper.html) pattern
interface for synchronizing Backbone.js Models' data with a server side, instead of built-in
[ActiveRecord](http://www.martinfowler.com/eaaCatalog/activeRecord.html) interface.

This should be especially useful for JS applications, that have to deal
with non-RESTful data sources and legacy systems.

Dependencies
------------

Application uses the following tools:

* [Backbone.js](http://backbonejs.org/) as a core framework
  (it includes [Underscore.js](http://underscorejs.org/) and [jQuery](http://jquery.com/))
* [Marionette.js](http://marionettejs.com/) as a Backbone application framework
* [RequireJS](http://requirejs.org/) for asynchronous loading of the modules
* [Bootstrap](http://getbootstrap.com/) as a styles framework
* [bower](http://bower.io/) for maintaining of dependencies
* [JSONPlaceholder](http://jsonplaceholder.typicode.com/) as a free RESTful source of test data


Usage
-----

Project uses [bower](http://bower.io/) for maintaining of dependencies,
so first install it using [npm](https://www.npmjs.com/):

`$ sudo npm install -g bower`

Then use bower to install all needed components locally:

`$ bower install`

After that just open `index.html` in your web browser as a main page


Licence
-------

Code is distributed under MIT Licence


Authors
-------
(c) 2016 Nikita Kozar <nikita.kozar@gmail.com>