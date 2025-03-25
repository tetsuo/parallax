# parallax

Simple, unopinionated parallax scene implementation for layering DOM elements by depth.

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
import DisplayObject from './DisplayObject.js'
import Layer from './Layer.js'
import Scene from './Scene.js'

const el1 = document.getElementById('layer1')
const el2 = document.getElementById('layer2')

const scene = new Scene(1, 0.5) // xSpeed, ySpeed

scene.addElement(el1, 1) // zDepth 1 (foreground)
scene.addElement(el2, 2.5) // zDepth 2.5 (slower background)

scene.bindToScroll()
```

## License

MIT license
