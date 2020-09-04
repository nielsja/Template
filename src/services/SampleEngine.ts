export abstract class SampleEngine {
  static test(): string {
    return 'Date Engine test method hit!';
  }

  static testBody(body: any): string {
    var bodyString = JSON.stringify(body);
    return `Body Object: ${bodyString}`;
  }

  static testQuery(query: any): string {
    let queryString = JSON.stringify(query);
    return `Query Params: ${queryString}`;
  }
}
