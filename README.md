# mocha-skip-demo

## Without skips

```bash
npm test
> mocha

  skip in a before
before A
it A
    ✔ should run

  skip in a describe
before B
it B
    ✔ should run

  skip in an it
before C
it C
    ✔ should run


  3 passing (6ms)
```

## With conditional skips

````bash
> npm run test:skip
> FOO_ENABLED=false mocha

  skip in a before
    - should run

  skip in a describe
    TypeError: this.skip is not a function

  skip in an it
before C
    - should run


  1 passing (7ms)
  2 pending
```
