# Most important thing
NEVER MAKE CHANGES TO PUBLIC_HTMl. Any changes to the site should be done on the src folder. The compilation process clears public_html every time it runs.

## Prerequisites
* [Install node using nvm or brew](https://github.com/creationix/nvm#installation)
* [install yarn](https://yarnpkg.com/lang/en/docs/install/)
* Clone the repo `git clone git@bitbucket.org:granddevelopers/grand2017.git`
* In the clone repo directory execute `yarn install`
* Craft will need to run on a local LAMP stack e.g. MAMP

## Running the development server
* Fire up your MAMP or LAMP server.
* On a separate console, run `yarn run blendid`. - This starts the development server at port 3000.

## CSS Framework
Check out [bulma](http://bulma.io/).

## Updating packages
```
yarn update
```

## Building for production
When building, file revisions are output and are referenced by the generated manifest.json file in the public_html folder.
* yarn run blendid -- build
* use git to push to master

## What is Blendid?
Blendid (formerly known as Gulp Starter) is a delicious stand-alone blend of tasks and build tools poured into Gulp to form a full-featured modern asset pipeline. It can be used as-is as a static site builder, or can be configured and integrated into your own development environment and site or app structure.

## Configuring blendid tasks
[Blendid](https://github.com/vigetlabs/blendid) configs can be found in the ~/config folder.
* path-config.json: src and dest configs for compilation
* task-config.js: blendid config. Accepts webpack-style configurations

## How to develop using Craft + Blendid
### Styling
The project follows a very simple modular stucture.

### Scripting
Vendor scripts are either loaded as modules or imported as a whole (e.g. Slick). jQuery is provided on a global scope via the task-config file.

#### Custom scripts
Custom scripts can be written following the modular approach in place:
1. Create a module and export the class
2. Add a js-replaceWithModuleame class to any selectors that the modules should execute on!

Refer to `src/javascripts/modules/slick.js` for a working example. Because the scripts are written in es6 syntax, this may be a cause of confusion. Feel free to write in es5 and export them as es6 classes or functions.

#### Turbolinks
Turbolinks has been added to the app via app.js.

Turbolinks makes navigating your web application faster. Get the performance benefits of a single-page application without the added complexity of a client-side JavaScript framework. Use HTML to render your views on the server side and link to pages as usual. When you follow a link, Turbolinks automatically fetches the page, swaps in its <body>, and merges its <head>, all without incurring the cost of a full page load.

### Images
Drop them in the src/images folder. They will get automatically optimised.

### Svgs
Drop them in the src/svgs folder. They will get compiled to a single icons.svg file. A helper has been setup with craft and can be used in normal templates like so:

```
{% include 'partials/svg' with { 'svgName': 'grand-logo', 'class': 'navbar-logo', 'viewBox': '0 0 120 42' } %}
```

### Static files
For any files that should only be copied directly, they can be dropped off in the `src/static` folder.

### Src folder structure
```
.
├── fonts
├── icons - any svgs dropped here will get compiled to icons.svg
├── images - any images dropped here will be preprocessed and copied over to public_html/assets/images
├── javascripts
    ├── app.js - main entry point for custom scripts and dependencies
│   └── modules - scripts that are automatically picked up and run based on js-selectors
├── static
│   │   └── images
│   │       └── favicons - favicons to be statically copied to the public_html folder
│   └── web.config
└── stylesheets
    ├── app.sass - main entry point for sass styles
    ├── modules
    ├── pages - page-specific styles
    └── vendor.sass - main entry point for vendor styles

```

### Craft
A plugin has been added (gulp_rev) to point to the compiled files.
