import { ISampleEngine, SampleEngine } from '../../src/services';

const engine = new SampleEngine();

describe('method1()', () => {
  it('should return stub value', () => {
    const expected = 'number';
    const actual = engine.method1();
    expect(actual).toStrictEqual(expected);
  });
});

describe('method2()', () => {
  it('should return stub value', () => {
    const expected = 1;
    const actual = engine.method2();
    expect(actual).toStrictEqual(expected);
  });
});

describe('method3()', () => {
  it('to not return anything', () => {
    const actual = engine.method3();
    expect(actual).toStrictEqual(undefined);
  });
});

describe('method4()', () => {
  it('should return true', () => {
    const expected = false;
    const actual = engine.method4();
    expect(actual).toStrictEqual(expected);
  });
});
