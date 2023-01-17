import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import App from '../app';
const { app } = new App();
const { expect } = chai;
import mock from './mocks/matches.mock';
import MatchesModel from '../database/models/Matches.model';

beforeEach(() => sinon.restore())

describe('Testes na rota /matches', () => {
it('retorna todas as partidas', async() => {
  sinon.stub(MatchesModel, 'findAll').resolves(mock.allMatches as any);

  const response = await (chai.request(app).get('/matches'))

  expect(response.status).to.be.equal(200);
  expect(response.body).to.be.deep.equal(mock.allMatches);
});


it('retorna apenas as partidas em progresso', async() => {
  sinon.stub(MatchesModel, 'findAll').resolves(mock.inProgress as any);

  const response = await (chai.request(app).get('/matches?inProgress=true'))

  expect(response.status).to.be.equal(200);
  expect(response.body).to.be.deep.equal(mock.inProgress);
});


it('insere partida com sucesso', async() => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3MzYzMDA3MCwiZXhwIjoxNjc0NDA3NjcwfQ.ZrXaGFHOyV_yZ66VKjmLsJFgYkWBcA35WNdh8E0wrg8"

  sinon.stub(MatchesModel, 'create').resolves(mock.insertedMatch as MatchesModel);

  const response = await (chai.request(app).post('/matches')).set('authorization', token).send(mock.insertMatch);

  expect(response.status).to.be.equal(201);
  expect(response.body).to.be.deep.equal(mock.insertedMatch);
});


it('se é possível alterar o status inProgress de uma partida', async() => {

  const response = await (chai.request(app).patch('/matches/45/finish'))

  expect(response.body).to.be.deep.equal({updateMatch: { type: 200, message: 'Finished'}});
});


it('não é possível inserir uma partida com times iguais', async() => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3MzYzMDA3MCwiZXhwIjoxNjc0NDA3NjcwfQ.ZrXaGFHOyV_yZ66VKjmLsJFgYkWBcA35WNdh8E0wrg8"

  const response = await (chai.request(app).post('/matches')).set('authorization', token).send(mock.matchesWithEqualsIds);

  expect(response.status).to.be.equal(422);
  expect(response.body).to.be.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
});


it('não é possível inserir uma partida com um time que não existe na tabela teams', async() => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY3MzYzMDA3MCwiZXhwIjoxNjc0NDA3NjcwfQ.ZrXaGFHOyV_yZ66VKjmLsJFgYkWBcA35WNdh8E0wrg8"

  const response = await (chai.request(app).post('/matches')).set('authorization', token).send(mock.matchesWithIdsInonexistent);

  expect(response.status).to.be.equal(404);
  expect(response.body).to.be.deep.equal({ message: 'There is no team with such id!' });
});


it('não é possível inserir uma partida sem um token válido', async() => {
  const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"

  sinon.stub(MatchesModel, 'create').resolves(mock.insertedMatch as MatchesModel);

  const response = await (chai.request(app).post('/matches')).set('authorization', invalidToken).send(mock.insertMatch);

  expect(response.status).to.be.equal(401);
  expect(response.body).to.be.deep.equal({ message: 'Token must be a valid token'});
});


it('não é possível inserir uma partida sem um token válido', async() => {
  const inavlidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"

  sinon.stub(MatchesModel, 'create').resolves(mock.insertedMatch as MatchesModel);

  const response = await (chai.request(app).post('/matches')).set('authorization', inavlidToken).send(mock.insertMatch);

  expect(response.status).to.be.equal(401);
  expect(response.body).to.be.deep.equal({ message: 'Token must be a valid token'});
});


it('se é possível atualizar partidas em andamento', async() => {
  sinon.stub(MatchesModel, 'findAll').resolves(undefined);

  const response = await (chai.request(app).patch('/matches/1')).send()

  expect(response.status).to.be.equal(200);
});
})