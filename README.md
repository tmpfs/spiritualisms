Table of Contents
=================

* [Spiritualisms](#spiritualisms)
  * [Design](#design)
  * [Database](#database)
  * [Services](#services)
  * [Developer](#developer)
    * [Sync](#sync)
    * [Server](#server)
    * [API Server](#api-server)
    * [Teardown](#teardown)
    * [Bootstrap](#bootstrap)
    * [CSS](#css)
    * [Standalone CSS](#standalone-css)
    * [Compile](#compile)
    * [Minify](#minify)
    * [Test](#test)
    * [Cover](#cover)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Readme](#readme)

Spiritualisms
=============

[<img src="https://travis-ci.org/tmpfs/spiritualisms.svg" alt="Build Status">](https://travis-ci.org/tmpfs/spiritualisms)
[<img src="http://img.shields.io/npm/v/spiritualisms.svg" alt="npm version">](https://npmjs.org/package/spiritualisms)
[<img src="https://coveralls.io/repos/tmpfs/spiritualisms/badge.svg?branch=master&service=github&v=1" alt="Coverage Status">](https://coveralls.io/github/tmpfs/spiritualisms?branch=master).

Spritualisms web application.

> Spiritualisms provides a list of curated quotes for daily inspiration; illumination for your path.

## Design

* Clean and elegant interface.
* Fast page load.
* Modern browsers (IE10+).
* Dynamic and static file formats.
* ECMAScript 5 - no transpiling.
* Valid HTML5/CSS3.
* Dynamic sitemap.
* No adverts.
* No signup/login.
* No cookies.
* No third-party code (analytics etc).
* No assets from other domains (google fonts etc).

## Database

Right tool for the job:

* [couchdb](http://couchdb.apache.org) for document storage.
* [redis](http://redis.io) for fast in-memory access.
* [postgres][] for indexing and search.
* [nginx][] for static file serving.

## Services

Decoupled microservices architecture:

* api.* - JSON REST API with [swagger][] v2.0 support.
* www.* - Web server.
* files.* - Static file service.

## Developer

To get started clone the repository and install dependencies, start [couchdb](http://couchdb.apache.org), [redis](http://redis.io) and a browser sync session:

```
npm i
couchdb
redis-server
npm run sync
```

### Sync

To start the services and sync with the browser:

```
npm run sync
```

### Server

To start the node web server:

```
npm start
```

### API Server

To start the node api server:

```
npm run api
```

### Teardown

Remove the database:

```
npm run teardown
```

### Bootstrap

Create the database and bootstrap the application: 

```
npm run teardown; npm run bootstrap
```

### CSS

To compile the CSS files run:

```
npm run css
```

### Standalone CSS

To compile the standalone CSS file run:

```
npm run standalone
```

This is the CSS injected into standalone downloads of quotes when appending a `.html` file extension.

### Compile

To compile the client-side javascript run:

```
npm run compile
```

### Minify

To compile and minify the client-side javascript run:

```
npm run minify
```

### Test

Beforehand ensure the database is created (see [bootstrap](#bootstrap)). Both [couchdb](http://couchdb.apache.org) and [redis](http://redis.io) must be running. Then run the test specifications:

```
npm test
```

### Cover

To generate code coverage run:

```
npm run cover
```

### Lint

Run the source tree through [jshint](http://jshint.com) and [jscs](http://jscs.info):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Readme

To build the readme file from the partial definitions:

```
npm run readme
```

Generated by [mdp(1)](https://github.com/tmpfs/mdp).

[couchdb]: http://couchdb.apache.org
[redis]: http://redis.io
[jshint]: http://jshint.com
[jscs]: http://jscs.info
