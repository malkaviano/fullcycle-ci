const hello = require('./hello');

describe('Greeting someone', () => {
  it('should say Hi', () => {
    const result = hello('Wesley');

    expect(result).toEqual('Hi Wesley, how you doing?');
  });
});
