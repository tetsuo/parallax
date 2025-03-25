// A lightweight wrapper around a DOM element that supports 2D transform-based movement.
export default class DisplayObject {
  constructor(element) {
    this.element = element
    this._x = 0
    this._y = 0
    this._rotation = 0
    this._applyTransform()
  }

  // Position getters/setters (mapped to translate3d)
  get x() {
    return this._x
  }
  set x(value) {
    this._x = value
    this._applyTransform()
  }

  get y() {
    return this._y
  }
  set y(value) {
    this._y = value
    this._applyTransform()
  }

  // Size properties (read-only)
  get width() {
    return this.element.offsetWidth
  }
  get height() {
    return this.element.offsetHeight
  }

  // Applies rotation in degrees
  rotate(deg) {
    this._rotation = deg
    this._applyTransform()
  }

  // Internal method to update the DOM transform
  _applyTransform() {
    this.element.style.transform = `translate3d(${this._x}px, ${this._y}px, 0) rotate(${this._rotation}deg)`
  }
}
