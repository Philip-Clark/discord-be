const request = require('supertest');
const app = require('../tests/testApp');

test('index route works', (done) => {
  request(app).get('/').expect('Content-Type', /json/).expect(200, done);
});
