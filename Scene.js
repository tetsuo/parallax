import Layer from './Layer.js'
import DisplayObject from './DisplayObject.js'

// Manages layers, updates them on scroll, and calculates movement rates.
export default class Scene {
  constructor(xSpeed = 1, ySpeed = 0.5) {
    this.layers = []
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed
    this._ticking = false
    this._boundScrollHandler = null
  }

  // Adds a Layer instance
  addLayer(layer) {
    this.layers.push(layer)
  }

  // Creates and adds a new Layer from a DOM element
  addElement(element, zDepth) {
    const displayObject = new DisplayObject(element)
    const layer = new Layer(displayObject, zDepth)
    this.addLayer(layer)
  }

  removeAllLayers() {
    this.layers.length = 0
  }

  // Compute scroll rate based on zDepth
  getHorizontalScrollRate(layer) {
    return this.xSpeed / layer.zDepth
  }

  getVerticalScrollRate(layer) {
    return this.ySpeed / layer.zDepth
  }

  // Applies calculated positions to all layers
  updateByPosition(x, y) {
    this.layers.forEach(layer => {
      layer.moveHorizontalTo(x * this.getHorizontalScrollRate(layer))
      layer.moveVerticalTo(y * this.getVerticalScrollRate(layer))
    })
  }

  // Hook into scroll event using requestAnimationFrame for smoothness
  bindToScroll() {
    if (this._boundScrollHandler) return

    this._boundScrollHandler = () => {
      if (!this._ticking) {
        this._ticking = true
        requestAnimationFrame(() => {
          this.updateByPosition(window.scrollX, window.scrollY)
          this._ticking = false
        })
      }
    }

    window.addEventListener('scroll', this._boundScrollHandler)
  }

  // Unbind scroll event listener
  unbindFromScroll() {
    if (this._boundScrollHandler) {
      window.removeEventListener('scroll', this._boundScrollHandler)
      this._boundScrollHandler = null
    }
  }
}
