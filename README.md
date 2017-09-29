# scroll-saver

A simple browser scroll management tool which can save and restore scroll value.

[![npm](https://img.shields.io/npm/v/scroll-saver.svg)](https://www.npmjs.com/package/scroll-saver)
[![npm](https://img.shields.io/npm/l/scroll-saver.svg)]()
[![npm](https://img.shields.io/npm/dt/scroll-saver.svg)]()
[![GitHub stars](https://img.shields.io/github/stars/sergei-zelinsky/scroll-saver.svg?style=social&label=Stars)]()

## Installation

```
npm i --save scroll-saver
```
or
```
yarn add scroll-saver
```
## API

#### save()

Save window current scroll position. 

#### restore()

Restore previously saved window scroll position.

## Example
```js
import ScrollSaver from 'scroll-saver';

// ...

const scrollSaver = new ScrollSaver();

// ...

scrollSaver.save();

// ...

scrollSaver.restore()
```

