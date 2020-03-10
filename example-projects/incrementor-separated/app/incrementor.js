const incrementor = {
  stepSize: 1,
  current: 0,
  all: [],
  increment: function () {
    debugger;
    const newCurrent = this.current + this.stepSize;
    this.current = newCurrent;
  },
  renderCurrent: function () {
    const li = document.createElement('li');
    li.innerHTML = this.current;
    return li;
  },
  renderStep: function () {
    const li = document.createElement('li');
    li.innerHTML = `... + ${this.stepSize} = ${this.current}`;
    return li;
  }
};
