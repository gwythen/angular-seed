# augmented-angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The project is based on [angular-seed](https://github.com/angular/angular-seed). 

As to adapt it to my typical workflow, it was augmented with Grunt, Bootstrap, Compass, AngularUI-Bootstrap and AngularUI-router.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone this repository and install the dependencies:

### Clone augmented-angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/gwythen/angular-seed.git
cd angular-seed
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

Angular-seed comes with a preconfigured `npm` that automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

Angular-seed comes with a simple development web server.  The simplest way to start
this server is:

```
npm start
```


### Run Grunt

In order to compile the sass files, you need to run the Grunt build process. In order to do so, simply type:

```
grunt
```

### Grunt Watch

We have preconfigured Grunt to watch sass, javascript and html files and trigger a live reload. In order to activate it,
just type

```
grunt watch
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      scss/             --> sass files
        app.scss        --> default stylesheet
      img/              --> image files
      fonts/            --> font files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    test/               --> test config and source files
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/                  --> end-to-end specs
        scenarios.js
      karma.conf.js         --> config file for running unit tests with Karma
      unit/                 --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular-seed please check out https://github.com/angular/angular-seed

[git]: http://git-scm.com/
[bower]: http://bower.io
[grunt]: http://gruntjs.com/
[bootstrap]: http://getbootstrap.com/
[angular-ui-bootstrap]: http://angular-ui.github.io/bootstrap/
[angular-ui-router]: https://github.com/angular-ui/ui-router
[sass]: http://sass-lang.com/
[compass]: http://compass-style.org/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server