describe('skip in a before', () => {
  before(function() {
    this.skip();
    console.log('before A');
  });

  it('should run', () => {
    console.log('it A');
    console.assert(true);
  });
});
