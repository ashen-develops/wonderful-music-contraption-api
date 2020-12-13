const knex = require('knex');
const app = require('../src/app');
const AuthService = require('../src/auth/auth-service');


describe('Auth Endpoints', function () {
  let db;
  let testUser = [
    {
      id: 1,
      user_name: 'email@email.com',
      password: 'Password1',
    }
  ];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.DATABASE_URL,
    });
    app.set('db', db);
  });

  before('clean the tables before', () => db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE'));
  afterEach('cleanup', () => db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE;'));
  after('disconnect from db', () => db.destroy());

  context('Given \'users\' has data', () => {
    before(() => {
      return db
        .into('users')
        .insert(testUser);
    });
    it('get user', () => {
      return AuthService.getUserWithUserName(db, 'email@email.com')
        .then(actual => {
          expect(actual).to.eql({
            id: 1,
            user_name: 'email@email.com',
            password: 'Password1'
          });
        });
    });
  });
});