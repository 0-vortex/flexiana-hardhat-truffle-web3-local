const Greeter = artifacts.require('Greeter');

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe('Greeter contract', () => {
  let accounts;

  before(async () => {
    accounts = await web3.eth.getAccounts();
  });

  describe('Deployment', () => {
    it('Should deploy with the right greeting', async () => {
      const greeter = await Greeter.new('Hello, world!');
      assert.equal(await greeter.greet(), 'Hello, world!');

      const greeter2 = await Greeter.new('Hola, mundo!');
      assert.equal(await greeter2.greet(), 'Hola, mundo!');
    });
  });
});
