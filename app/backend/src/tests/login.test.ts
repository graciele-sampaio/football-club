import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import App from '../app';
const { app } = new App();
const { expect } = chai;

import anyUser from './mocks/anyUser.mock';
import {loginsuccess, loginWithoutEmail, loginWithoutPassword, invalidEmail, invalidPassword} from './mocks/login.mock'
import User from '../database/models/User.model';

beforeEach(() => sinon.restore())

describe('Testes na rota de login', () => {
  it('retorna um token ao enviar dados validos', async () => {

    sinon.stub(User, 'findOne').resolves(anyUser as User);

    const response = await chai.request(app).post('/login').send(loginsuccess)

    expect(response.status).to.be.equal(200);
    expect(response.body).to.haveOwnProperty('token');
  });

  it('se o campo de email não for preenchido retorna erro', async() => {
    const response = await chai.request(app).post('/login').send(loginWithoutEmail)

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });

  it('se o campo de senha não for preenchido retorna erro', async() => {
    const response = await chai.request(app).post('/login').send(loginWithoutPassword)

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });

  it('se o campo de email tiver um email inválido', async() => {
    const response = await chai.request(app).post('/login').send(invalidEmail)

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
  });

  it('se o campo de senha tiver um senha inválida', async() => {
    const response = await chai.request(app).post('/login').send(invalidPassword)

    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
  });
})