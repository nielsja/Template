import { SampleEnum } from '../../src/contracts';
import { SampleEndpoint } from '../../src/endpoints';

describe('sample endpoint', () => {
  it('should return stub value', () => {
    const expected = {
      property1: 'value 1',
      property2: 2,
      property3: SampleEnum.EnumValue3,
    };
    const actual = SampleEndpoint('anything');
    expect(actual).toStrictEqual(expected);
  });

  it('should throw an error', () => {
    const expected = 'Something went wrong!';
    expect(() => {
      SampleEndpoint();
    }).toThrowError(expected);
  });
});
