# New American Economy Starter Template 
_Note: (Based off The Pudding Starter Template)_

A starter template for data visualization projects.

**If creating a brand new project from scratch:** Follow setup instructions for the [basic](#basic):bread: (plain HTML/JS/CSS) or [enhanced](#enhanced):fire: (node + gulp + awesome sauce) version. For most data visualization projects it is best to go with the enhanced version. 

**Else contributing to an existing project:** clone the repo (enhanced version: + run `npm install`). Depending on how up to date your installation is, you may need to run npm install fix and / or upgrade other specific dependencies. As of 10/4/2018 this template requires that you use gulp@3.9.1. DO NOT upgrade to gulp@4.0.0.

_Please note: do not use or reproduce New American Economy logo or fonts without written permission._

# Setup

## Enhanced

#### Dependencies

* [node](http://nodejs.org)
* [gulp](http://gulpjs.com)

#### Features

* Transpiles ES6 with [Babel](http://babeljs.io)
* [Stylus](http://stylus-lang.com/) for CSS pre-processor
* [Handlebars](http://handlebarsjs.com/) for HTML templating
* Google Docs -> JSON (with [ArchieML](http://archieml.org/)) integration for a micro CMS
* Bundles and minifies JavaScript with [Webpack](http://webpack.js.org)
* Bundles, minifies, auto-prefixes, and inlines CSS
* Async font loading (using FOUT)
* Preloaded [icon set](https://feathericons.com/)

#### Setup

To create a new project, make a new directory (eg. `mkdir project-name`), `cd` into it, and run:

```
curl -Lk https://bit.ly/2zSEnLc > Makefile; make enhanced;
```

If that doesn't work you may need to create a new directory and a new repository to go along with it. To do so, clone / download this repository move all of the files into the new directory then create a new repository with the same name and then in your git terminal run:

```
git init
```
```
git remote add origin https://github.com/krwarner/<REPOSTIORY_NAME>.git
```
```
git push -u origin master
```
```
git add .
```
```
git commit -m "Add starter code"
```
```
git push --set-upstream origin master
```


#### Documentation

See the generated [README](https://github.com/krwarner/research-blog-starter/blob/master/README.story.md#development) file in the new project directory for instructions.

## Basic

#### Setup

To create a new project, make a new directory (eg. `mkdir project-name`), `cd` into it, and run:

```
curl -Lk https://bit.ly/2J0L3MD > Makefile; make boilerplate;
```
