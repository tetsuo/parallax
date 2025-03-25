// Layer: Wrapper around a DisplayObject that applies movement scaled by zDepth.
export default class Layer {
  constructor(model, zDepth) {
    this.model = model
    this.zDepth = zDepth
    this.originalX = model.x
    this.originalY = model.y
  }

  moveHorizontal(distance) {
    this.model.x += distance
  }
  moveHorizontalTo(position) {
    this.model.x = position
  }
  moveHorizontalBy(offset) {
    this.model.x = this.originalX + offset
  }

  moveVertical(distance) {
    this.model.y += distance
  }
  moveVerticalTo(position) {
    this.model.y = position
  }
  moveVerticalBy(offset) {
    this.model.y = this.originalY + offset
  }
}
