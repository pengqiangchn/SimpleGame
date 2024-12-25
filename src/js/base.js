class Equip {
  constructor() {
    var xx = 123
    this.XX = () => {
      return xx
    }
  }
  get Price() {
    return this._price
  }
  _price = 0
  def = 0
  atk = 0
  name = ''
  rank = 0
}

export { Equip }
