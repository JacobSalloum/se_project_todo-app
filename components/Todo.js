class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }
  _generateCheckbocEl() {
    this._todoCheckboxEl = this.todoElement.querySelector(".todo__completed");
    this._todoLabel = this.todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }
  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {});

    const todoDeleteBtn = this.todoElement.querySelector(".todo__delete-btn");
    todoDeleteBtn.addEventListener("click", () => {
      this.todoElement.remove();
    });
  }
  _generateDate() {
    this._todoDate = this.todoElement.querySelector(".todo__date");
    this._dueDate = new Date(this._data.date);
    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }
  getView() {
    this.todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this.todoElement.querySelector(".todo__name");
    todoNameEl.textContent = this._data.name;

    this._generateCheckbocEl();
    this._setEventListeners();
    this._generateDate();
    return this.todoElement;
  }
}

export default Todo;
