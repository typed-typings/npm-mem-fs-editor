import memfs = require('mem-fs');

declare namespace memFSEditor {
  function create(store: memfs.Store): Editor;
  interface Editor {
    read(filepath: string, options?: { raw: boolean, defaults: string }): File;
    readJSON(filepath: string, defaults?: Object): Object;
    write(filepath: string, contents: string | Buffer): void;
    writeJSON(filepath: string, contents: Object, replacer?: any[] | ((key: string, value: any) => any), space?: string | number): void;
    extendJSON(filepath: string, contents: Object, replacer?: any[] | ((key: string, value: any) => any), space?: string | number): void;
    // `globOptions` should get from `glob`. I don't want to use the dt version
    // to create global dependency
    delete(filepath: string, options?: { globOptions: Object });
    copy(from: string, to: string, options?: CopyOptions): void;
    copyTpl(from: string, to: string, context: Object, templateOptions?: any, copyOptions?: CopyOptions): void;
    move(from: string, to: string, options?: { globOptions: Object }): void;
    exists(filepath: string): boolean;
    commit(callback: Function): void;
    // filters should be an array of TransformStream.
    // I don't know which is the TranformStream
    commit(filters: NodeJS.ReadWriteStream[], callback: Function): void;
  }

  interface CopyOptions {
    process: (content: any) => string | Buffer,
    globOptions: Object
  }
}

export = memFSEditor;
