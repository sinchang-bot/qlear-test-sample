class Go {
  constructor() {
    this.rows = document.querySelectorAll('.row')
    this.rowIndex = 0
    this.cellIndex = 0
    this.findCell(this.cellIndex, this.rowIndex).classList.add('rat')
    this.keyboard()
  }

  findCell(rowIndex, cellIndex) {
    return this.rows[rowIndex] && this.rows[rowIndex].querySelectorAll('.cell')[cellIndex]
  }

  addClass(el) {
    document.querySelector('#cells .rat').classList.remove('rat')
    el.classList.add('rat')
  }

  isInclude(el, dir) {
    if (el.classList.contains(dir)) {
      return true
    }

    return false
  }

  keyboard() {
    document.addEventListener('keydown', e => {
      const rowIndex = this.rowIndex
      const cellIndex = this.cellIndex
      const code = e.keyCode
      switch (code) {
        case 38:
          if (this.canMove(rowIndex, cellIndex, 'top')) return
          this.rowIndex = rowIndex - 1
          break
        case 40:
          if (this.canMove(rowIndex, cellIndex, 'bottom')) return
          this.rowIndex = rowIndex + 1
          break
        case 37:
          if (this.canMove(rowIndex, cellIndex, 'left') || cellIndex === 0) return
          this.cellIndex = cellIndex - 1
          break
        case 39:
          if (this.canMove(rowIndex, cellIndex, 'right') || cellIndex === 19) return
          this.cellIndex = cellIndex + 1
        default:
          break
      }
      this.ele = this.findCell(this.rowIndex, this.cellIndex)
      this.addClass(this.ele)
    })
  }

  canMove(rowIndex, cellIndex, dir) {
    this.ele = this.findCell(rowIndex, cellIndex)
    if (!this.ele) return false
    return this.isInclude(this.ele, dir)
  }
}

new Go()
