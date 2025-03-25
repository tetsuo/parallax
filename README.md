# parallax

Simple parallax scrolling using 2D transforms.

[View demo](https://tetsuo.github.io/parallax/)

## Installation

### npm

```bash
npm install @tetsuo/parallax
```

### ES Modules

Import directly in the browser using [esm.sh](https://esm.sh):

```html
<script type="module">
  import * as parallax from 'https://esm.sh/gh/tetsuo/parallax'
</script>
```

### UMD

Load via [jsDelivr](https://www.jsdelivr.com/) - the global export is `parallax`:

```html
<script src="https://cdn.jsdelivr.net/gh/tetsuo/parallax/dist/parallax.umd.min.js"></script>
```

## Usage

Structure your HTML. Each element represents a visual layer:

```html
<div id="layer1"></div>
<div id="layer2"></div>
```

Style your layers:

```css
#layer1,
#layer2 {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  will-change: transform;
}
```

Attach elements to scroll-driven layers with custom z-depth:

```js
import { DisplayObject, Layer, Scene } from 'https://esm.sh/gh/tetsuo/parallax'

const el1 = document.getElementById('layer1')
const el2 = document.getElementById('layer2')

const scene = new Scene(1, 0.5) // xSpeed, ySpeed

scene.addElement(el1, 1) // zDepth 1 (foreground)
scene.addElement(el2, 2.5) // zDepth 2.5 (background)

scene.bindToScroll()
```

## License

MIT license
