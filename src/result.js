'use strict';

import path from 'path';

export class LineResult {
  constructor(results) {
    this.calculate(results);
    Object.freeze(this);
  }
  calculate(results) {
    this.total = 0;
    this.unused = 0;
    this.executed = 0;

    let calculator = this.append.bind(this);
    results.forEach(calculator);
  }
  append(result) {
    if (result === 0) {
      this.unused++;
      this.total++;
    } else if (result !== undefined) {
      this.executed++;
      this.total++;
    }
  }
}

export class FileResult {
  constructor(name, results) {
    this._name = name;
    this._result = new LineResult(results);
  }
  get fileName() {
    return path.relative(process.cwd(), this._name);
  }
  get executed() {
    return this._result.executed;
  }
  get unused() {
    return this._result.unused;
  }
  get total() {
    return this._result.total;
  }
  get coverage() {
    coverage = this.executed / this.total * 100;
    return parseFloat(coverage.toFixed(2));
  }
}

export class Result {
  constructor(files) {
    this._files = files;
  }
  sendTo(writer) {
    writer.writeReport(this);
  }
  get files() {
    return this._files;
  }
  get coverage() {
    let file = null;
    let total = executed = 0;

    for (file of this.files) {
      total += file.total;
      executed += file.executed;
    }
    let coverage = executed / total * 100;
    return parseFloat(coverage.toFixed(2));
  }
  static createFrom(coverages) {
    let files = [];
    for (let file of Object.keys(coverages)) {
      files.push( new FileResult(file, coverages[file]) );
    }
    return new Result(files);
  }
}
