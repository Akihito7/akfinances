export abstract class Command<T> {
  protected readonly _props: T;

  constructor(props: T) {
    this._props = props;
  }

  get props(): T {
    return this._props;
  }
}

export interface CommandHandlerInterface<Class, Output = any> {
  handle: (command: Class) => Promise<void> | Promise<Output> | void | Output
}