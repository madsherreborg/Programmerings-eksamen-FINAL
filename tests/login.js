const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server')
let should = chai.should()
chai.use(chaiHttp);

describe('login', () => {
    describe('Post /login', () => {
        it('should login the user', (done) => {
            chai
                .request(app)
                .post('/login').set('content-type', 'application/json').send({ "name": "knud", "password": "123" })
                .end((err, res) => {
                    res.should.have.status(200)
                    done();
                });

        });
    });
});