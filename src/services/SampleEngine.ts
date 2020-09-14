import { SampleEnum } from '../contracts';
import { ISampleEngine } from '../services';
import * as sampleData from '../data/sample-data.json';

export class SampleEngine implements ISampleEngine {
  method1(): string {
    return 'number';
  }
  method2(): number {
    return 1;
  }
  method3(msg: string = 'default', num: number = 0): void {
    console.log(msg + num);
  }

  method4(): boolean {
    return sampleData == null;
  }
}
