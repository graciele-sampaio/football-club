import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import App from '../app';
const { app } = new App();
const { expect } = chai;

beforeEach(() => sinon.restore())

describe('Testes na rota de login/validate', () => {
it('sem token retorna erro', async() => {
  const response = await (chai.request(app).get('/login/validate'))

  expect(response.status).to.be.equal(400);
  expect(response.body).to.be.deep.equal({ message: 'Invalid token' });
});

it('enviando token válido retorna o tipo do usuário', async() => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3MzYzMDA3MCwiZXhwIjoxNjc0NDA3NjcwfQ.ZrXaGFHOyV_yZ66VKjmLsJFgYkWBcA35WNdh8E0wrg8"
  const response = await chai.request(app).get('/login/validate').set('authorization', token);

  expect(response.status).to.be.equal(200);
  expect(response.body).to.haveOwnProperty('role');
  });
})