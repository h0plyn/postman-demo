const assert = require('chai').assert;
const NotFound = require('../../client/components/NotFound');

describe('NotFound', () => {
  it('app should return Page not found.', () => {
    assert.equal(NotFound(), 'Page not found.');
  });
});
