describe('skip in an it', () => {
  before(function() {
    console.log('before C');
  });

  it('should run', function () {
    if (process.env.FOO_ENABLED === 'false') {
      this.skip();
    }

    console.log('it C');
    console.assert(true);
  });
});
