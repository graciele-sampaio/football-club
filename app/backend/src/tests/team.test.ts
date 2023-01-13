import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import App from '../app';
const { app } = new App();
const { expect } = chai;
import teams from './mocks/teams.mock';
import Team from '../database/models/Team.model';

beforeEach(() => sinon.restore())

describe('Testes na rota /teams', () => {
it('retorna todos os times', async() => {

  const response = await (chai.request(app).get('/teams'))

  expect(response.status).to.be.equal(200);
  expect(response.body).to.be.deep.equal(teams);
});

it('enviando id válido retorna o time', async() => {
  const response = await chai.request(app).get('/teams/1').send(teams[1]);

  expect(response.status).to.be.equal(200);
  expect(response.body).to.be.deep.equal(teams[0]);
  });

  it('enviando id inválido retorna erro', async() => {
    sinon.stub(Team, 'findOne').resolves(null);

    const response = await chai.request(app).get('/teams/100');
  
    expect(response.status).to.be.equal(404);
    expect(response.body).to.be.deep.equal({ message: 'Id not found'});
    });
})