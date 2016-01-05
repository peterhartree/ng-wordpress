# ng-wordpress

An Angular application skeleton for building dynamic websites on top of the [WordPress REST API v2](http://wp-api.org).

*Pre-alpha!* Use at your own risk.

## Get started

### Prerequisites

Until the REST API makes it into core, you'll need the latest stable version of the [WordPress REST API v2 plugin](https://en-gb.wordpress.org/plugins/rest-api/).

### Installation

`git clone https://github.com/peterhartree/ng-wordpress.git . -o upstream`

`npm install`

`bower install`

You'll also want the companion WordPress plugin. From your WordPress plugin directory, run:

`git clone https://github.com/peterhartree/ng-wordpress-plugin.git ngwp`

Then activate the plugin via the WordPress dashboard.

To learn about what this plugin does, see [here](https://github.com/peterhartree/ng-wordpress-plugin).

### Configuration

Open app/settings.js and set your baseURL.

## Development

Run `sh dev`

## Build

Run `sh build`

## Testing

Running `grunt test` will run the unit tests with karma.

## Get updates

`git pull upstream master`