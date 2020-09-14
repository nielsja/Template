import { ISampleEngine, SampleEngine } from '../services';
import { ISample, SampleEnum } from '../contracts';

export const SampleEndpoint = (error?: any): ISample => {
  const engine: ISampleEngine = new SampleEngine();

  const result1 = engine.method1();
  const result2 = engine.method2();
  engine.method3(result1, result2);

  if (error == null) {
    throw new Error('Something went wrong!');
  }

  return {
    property1: 'value 1',
    property2: 2,
    property3: SampleEnum.EnumValue3,
  };
};
