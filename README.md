# scroll-saver

A simple browser scroll management tool which can save and restore scroll value.

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

