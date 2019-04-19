process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let Task = require('../models/Task')

//Require the dev dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)
// parent block
describe('Task', ()=> {
    beforeEach(done => { // Before each test empty db
        Task.remove({}, err => {
            done()
        })
    })

    describe('/GET tasks', ()=> {
        it('it should GET all the tasks', done => {
            chai.request(server)
                .get('/api/v1/task')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(0)
                    done()
                })
        })
    })
})