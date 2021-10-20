describe('skip in a before', () => {
  before(function() {
    if (process.env.FOO_ENABLED === 'false') {
      this.skip();
    }
    console.log('before A');
  });

  it('should run', () => {
    console.log('it A');
    console.assert(true);
  });
});
