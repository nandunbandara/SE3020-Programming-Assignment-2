/**
 * Created by ntban_000 on 6/22/2017.
 */
const should = require('should')
mocha  = require('mocha')
request = require('supertest')

const app = require('../server')
const agent = request.agent(app);


describe('user routes test', function(){
    it('should return all the users', function(done){
        agent.get('/users').send().expect(200)
            .end(function(err,res){
                if(err) throw err;
                done();
            })
    })

    it('should return the user with the given email', function(done){
        agent.get('/users/ntbandara3@hotmail.com').send().expect(200)
            .end(function(err,res){
                if(err) throw err;
                res.body.email.should.equal('ntbandara3@hotmail.com');
            })
    })
})