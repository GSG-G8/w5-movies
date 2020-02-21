const request = require('supertest');

const app = require('../server/app');

// eslint-disable-next-line no-undef
test('Testing endpoint /movies', (done) => {
  request(app)
    .get('/movies')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

// eslint-disable-next-line no-undef
test('Testing endpoint /search', (done) => {
  request(app)
    .post('/search')
    .set({
      'Content-Type': 'application/json',
    })
    .send(JSON.stringify({ title: 'hobbit' }))
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});
