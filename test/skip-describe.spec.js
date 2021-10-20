describe.skip('skip in a describe', function () {
  // this.skip(); // TypeError: this.skip is not a function

  before(function() {
    console.log('before B');
  });

  it('should run', () => {
    console.log('it B');
    console.assert(true);
  });
});
