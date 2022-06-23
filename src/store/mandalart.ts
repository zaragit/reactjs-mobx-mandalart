import { action, makeObservable, observable } from 'mobx';
import _ from 'lodash';
import { getEmptyArray, insertAtIndex } from '../utils/array';

const LIGHT_BLACK_70 = 'rgba(28, 28, 28, 0.7)';
const LIGHT_BLACK_30 = 'rgba(28, 28, 28, 0.3)';

export class Plan {
  target: Target;
  details: Target[];
  all: Target[];

  constructor() {
    this.target = new Target();
    this.details = _.map(getEmptyArray(8), () => new Target());
    this.all = insertAtIndex([...this.details], 4, this.target);

    makeObservable(this, {
      target: observable,
      details: observable,
      all: observable,
    });
  }
}

export class CorePlan extends Plan {
  detailPlans: Plan[];

  constructor() {
    super();

    this.detailPlans = _.map(getEmptyArray(8), () => new Plan());

    makeObservable(this, {
      detailPlans: observable,
    });

    this.initialize();
  }

  initialize() {
    this.target.setPlaceholder('핵심목표');
    this.target.setBackgroundColor(LIGHT_BLACK_70);

    _.forEach(this.details, (plan) => plan.setBackgroundColor(LIGHT_BLACK_30));

    _.forEach(this.detailPlans, (plan, index) => {
      const placeholder = `세부목표 #${index + 1}`;
      plan.target.setPlaceholder(placeholder);
      this.details[index].setPlaceholder(placeholder);

      plan.target.setParent(this.details[index]);
      this.details[index].setChild(plan.target);

      plan.target.setBackgroundColor(LIGHT_BLACK_30);
    });
  }
}

export class Target {
  content: string = '';
  backgroundColor: string | undefined;
  placeholder: string = '';

  parent?: Target;
  child?: Target;

  constructor() {
    makeObservable(this, {
      content: observable,
      backgroundColor: observable,
      placeholder: observable,
      parent: observable,
      child: observable,
      setParent: action,
      setChild: action,
      syncContent: action,
      setBackgroundColor: action,
    });
  }

  setParent(parent: Target) {
    this.parent = parent;
  }

  setChild(child: Target) {
    this.child = child;
  }

  setContent(content: string) {
    this.content = content;

    (this.child || this.parent)?.syncContent(content);
  }

  syncContent(content: string) {
    this.content = content;
  }

  setBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }

  setPlaceholder(placeholder: string) {
    this.placeholder = placeholder;
  }
}

export class MandalartStore {
  core: CorePlan;

  constructor() {
    this.core = new CorePlan();

    makeObservable(this, {
      core: observable,
    });
  }
}
