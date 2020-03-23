# W8D1 - Unit & Integration Testing

### To Do
- [ ] Review: Different types of testing
- [ ] Review: Test-Driven Development
- [ ] Considerations when writing tests
- [ ] Tools for testing React
- [ ] Add Features to App Following TDD

### Review of Types of Testing
- static: linter, eslint, syntax highlighting, cheap
- unit: testing the smallest functional piece of code, cheap/fast
- integration: making sure that the parts of your code work together
- end-to-end (e2e): testing the entire application (mimic how a user would interact with our site)
- a/b: you supply your users with 2 (or more) different versions of your site
- regression: write tests that replicate the bug

### Test Driven Development
- Red, green, refactor
- red: tests are failing
- green: tests are passing
- refactor: fearless refactoring

### Considerations for Testing
- setup and teardown
  - allows us to set up `state`/`context` for our tests to run in
  - allows us to teardown this `state` and return the test suite to default

- appropriate scoping
  - make sure that variables (etc) are `scoped` to the test they are needed for

- code coverage
  - How many lines of code your test suite touches
  - confidence? 100%? No! 80%+

- write good tests!
  - cover as many possibilities as we can consider

### Unit Testing
- make the computer make a choice (instead of hardcoded value)
- create a string (aka message) for the player based on the game result

### Integration Testing
- toggle the `cheating` state when user clicks on robot head icon
- render the result message for the user based on `status`








#
