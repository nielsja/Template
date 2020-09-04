import { SampleEngine } from '../../src/services';

describe('test()', () => {
  it('should return boilerplate message', () => {
    const expected = 'Date Engine test method hit!';

    const actual = SampleEngine.test();

    expect(actual).toStrictEqual(expected);
  });
});

describe('Test Body', () => {
  it('should return body as string concatenated with a default message', () => {
    const body = {
      Message: 'test body input message',
    };

    const expected = `Body Object: ${JSON.stringify(body)}`;

    const actual = SampleEngine.testBody(body);

    expect(actual).toStrictEqual(expected);
  });
});

describe('Test Query', () => {
  it('should return query params as string concatenated with a default message', () => {
    const query = {
      Key1: 'Value 1',
      Key2: 'Value 2',
    };

    const expected = `Query Params: ${JSON.stringify(query)}`;

    const actual = SampleEngine.testQuery(query);

    expect(actual).toStrictEqual(expected);
  });
});
