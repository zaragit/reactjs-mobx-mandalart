import { action, makeObservable, observable } from "mobx";

export class Goal {
  content: string;
  backgroundColor?: string;
  placeholder?: string;

  parent?: Goal;
  child?: Goal;

  constructor(
    content: string = "",
    backgroundColor?: string,
    placeholder?: string
  ) {
    this.content = content;
    this.backgroundColor = backgroundColor;
    this.placeholder = placeholder;

    makeObservable(this, {
      content: observable,
      backgroundColor: observable,
      parent: observable,
      child: observable,
      setContent: action,
      syncContent: action,
      setParent: action,
      setChild: action,
    });
  }

  setContent(content: string) {
    this.content = content;

    (this.parent || this.child)?.syncContent(content);
  }

  syncContent(content: string) {
    this.content = content;
  }

  setBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }

  setParent(parent: Goal) {
    this.parent = parent;

    if (this.parent.child !== this) {
      this.parent.setChild(this);
      this.parent.syncContent(this.content);
    }
  }

  setChild(child: Goal) {
    this.child = child;

    if (this.child.parent !== this) {
      this.child.setParent(this);
      this.child.syncContent(this.content);
    }
  }

  setPlaceholder(placeholder: string) {
    this.placeholder = placeholder;
  }
}
