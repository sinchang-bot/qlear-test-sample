const w = 22
const h = 22

class Go {
  constructor() {
    this.rows = document.querySelectorAll('.row')
    this.x = 418
    this.y = 418
    this.w = 22
    this.h = 22
    this.setPos(this.x, this.y)
    this.keyboard()
  }

  findCell(rowIndex, cellIndex) {
    return this.rows[rowIndex] && this.rows[rowIndex].querySelectorAll('.cell')[cellIndex]
  }

  isInclude(el, dir) {
    if (el.classList.contains(dir)) {
      return true
    }

    return false
  }

  disToIndex(x, y) {
    if (x === 0 && y === 0) {
      return [0, 0]
    }

    return [x / this.w, y / this.h]
  }

  setPos(x, y) {
    this.rat = document.getElementById('rat')
    rat.style.left = x + 'px'
    rat.style.top = y + 'px'
  }

  getPos() {
    return [parseInt(this.rat.style.left), parseInt(this.rat.style.top)]
  }

  keyboard() {
    document.addEventListener('keydown', e => {
      const pos = this.getPos()
      const index = this.disToIndex(pos[0], pos[1])
      const xIndex = index[0]
      const yIndex = index[1]
      const code = e.keyCode
      switch (code) {
        case 38:
          if (this.canMove(xIndex, yIndex, 'top')) return
          this.setPos(pos[0], pos[1] - this.h)
          break
        case 40:
          if (this.canMove(xIndex, yIndex, 'bottom')) return
          this.setPos(pos[0], pos[1] + this.h)
          break
        case 37:
          if (this.canMove(xIndex, yIndex, 'left')) return
          this.setPos(pos[0] - this.w, pos[1])
          break
        case 39:
          if (this.canMove(xIndex, yIndex, 'right')) return
          this.setPos(pos[0] + this.w, pos[1])
      }
    })
  }

  canMove(xIndex, yIndex, dir) {
    const ele = this.findCell(yIndex, xIndex)
    if (!ele) return false
    return this.isInclude(ele, dir)
  }
}

new Go()
