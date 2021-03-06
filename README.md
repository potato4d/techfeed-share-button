# TechFeed Share Button

![test](https://github.com/potato4d/techfeed-share-button/workflows/test/badge.svg) [![codecov](https://codecov.io/gh/potato4d/techfeed-share-button/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/techfeed-share-button) ![Version](https://img.shields.io/npm/v/techfeed-share-button.svg?sanitize=true)

The social share button for TechFeed.

## Live Demo

[here](https://codesandbox.io/s/vibrant-wozniak-ddfjk)

## Usage

### Using the CDN version

The CDN version of the TechFeed Button runs as an IIFE and allows you to put a button on your website in seconds by simply loading it.

```html
<techfeed-button url="https://github.com/potato4d/techfeed-share-button"></techfeed-button>

<script src="https://unpkg.com/techfeed-share-button@0.2.0/dist/web/widget.js"></script>
```

### Using the NPM package

```bash
$ yarn add techfeed-share-button
```

```ts
import defineComponent from 'techfeed-share-button'

defineComponent() // The `window.customElements.register('techfeed-button', TechFeedButton)` wrapper
```

## Tutorial

- [Guide(Japanese)](https://d.potato4d.me/entry/20201208-techfeed-button/)

## LICENCE

MIT
