import app from '../index.js';
import { config } from "dotenv";
import chai from 'chai';
import chaiHttp from 'chai-http'

config();

let should = chai.should();

chai.use(chaiHttp)

describe('GET Clubs Info',() => {
    it('should return array of clubs', (done) => {
        chai.request(app).get('/get-clubs')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.clubs.should.be.a('array');
            res.body.clubs.length.should.be.eql(3);
        })
        done()
    })
})

describe('GET Events Info',() => {
    it('should return array of events', (done) => {
        chai.request(app).get('/get-events')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.events.should.be.a('array');
            res.body.events.length.should.be.eql(3);
        })
        done()
    })
})

describe('Admin Login',() => {
    it('admin should login', (done) => {
        chai.request(app).get('/admin-login/19131a0542@gvpce.ac.in/sivaChinta@123')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.status.should.be.eql(200);
            res.body.message.should.be.eql("Successfully Loggedin");
        })
        done()
    })
    it('admin should not login as admin with invalid password', (done) => {
        chai.request(app).get('/admin-login/19131a0542@gvpce.ac.in/sivaChinta@23')
        .end((err, res) => {
            res.body.status.should.be.eql(401);
            res.body.message.should.be.eql("Invalid Credentials");
        })
        done()
    })
})

describe('Manager Login',() => {
    it('manager should login', (done) => {
        chai.request(app).get('/manager-login/19131a0542@gvpce.ac.in/sivaChinta@123')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.status.should.be.eql(201);
            res.body.message.should.be.eql("Successfully Loggedin");
        })
        done()
    })
    it('manager should not login as manager login with invalid password', (done) => {
        chai.request(app).get('/manager-login/19131a0542@gvpce.ac.in/sivaChinta@3')
        .end((err, res) => {
            res.body.status.should.be.eql(401);
            res.body.message.should.be.eql("Invalid Credentials");
        })
        done()
    })
    it('manager should not login as manager does not exists', (done) => {
        chai.request(app).get('/manager-login/19131a0538@gvpce.ac.in/sivaChinta@3')
        .end((err, res) => {
            res.body.status.should.be.eql(401);
            res.body.message.should.be.eql("Login Unsuccessful");
        })
        done()
    })
})

describe('club information', () => {
    it('should return club information', (done) => {
        chai.request(app).get('/get-info/641fe1e0198d5f451936a6f5')
        .end((err, res) => {
            res.body.status.should.be.eql(201);
            res.body.club.clubName.should.be.eql('Rotaract Club');
            res.body.club.noOfMembers.should.be.eql(20);
            res.body.club.lead.should.be.eql('6419e65a801f93d18aa5edb2');
        })
        done()
    })
    it('should not return club information as invalid id is given', (done) => {
        chai.request(app).get('/get-info/641f1e0198d5f451936a6f5')
        .end((err, res) => {
            res.body.status.should.be.eql(401);
            res.body.message.should.be.eql('Club Details not found!');
        })
        done()
    })
})

describe('creating club', () => {
    it('should create a club', (done) => {
        let newClub = {
            adminId:'6419e65a801f93d18aa5edb2', 
            clubName: 'Hearts of Humanity', 
            noOfMembers: 20, 
            clubType: 'Social'
        }
        chai.request(app).post('/create-club').send(newClub)
        .end((err, res) => {
            res.body.status.should.be.eql(201);
            res.body.message.should.be.eql('Club Added Successfully');
        })
        done();
    })
    it('should not create a club as clubname is missing', (done) => {
        let newClub = {
            adminId:'6419e65a801f93d18aa5edb2',
            noOfMembers: 20, 
            clubType: 'Social'
        }
        chai.request(app).post('/create-club').send(newClub)
        .end((err, res) => {
            res.body.status.should.be.eql(424);
            res.body.message.should.be.eql('Failed to add club');
        })
        done();
    })
    it('should not create a club as no access to mentioned adminId', (done) => {
        let newClub = {
            adminId:'6419e65a801f93d18aa5db2',
            clubName: 'Hearts of Humanity', 
            noOfMembers: 20, 
            clubType: 'Social'
        }
        chai.request(app).post('/create-club').send(newClub)
        .end((err, res) => {
            res.body.status.should.be.eql(424);
            res.body.message.should.be.eql('No Access');
        })
        done();
    })
})

describe('creating an events', () => {
    it('should create a event as valid club id is given', (done) => {
        let newEvent = {
            eventName:'Test Event', 
            aboutEvent: 'Test Event About', 
            eventDate: Date.now(), 
            club_id: '641fe1f8198d5f451936a6fa',
            registerLink: "http://localhost:5000/get-info/641fe1e0198d5f451936a6f5",
            eventPageLink: "http://localhost:5000/get-info/641fe1e0198d5f451936a6f5"
        }
        chai.request(app).post('/add-event').send(newEvent)
        .end((err, res) => {
            res.body.status.should.be.eql(201);
            res.body.message.should.be.eql('Event Added Successfully');
        })
        done();
    })
    it('should not create a event as invalid club id is given', (done) => {
        let newEvent = {
            eventName:'Test Event', 
            aboutEvent: 'Test Event About', 
            eventDate: Date.now(), 
            club_id: '641fe1f8198d5f4519366fa',
            registerLink: "http://localhost:5000/get-info/641fe1e0198d5f451936a6f5",
            eventPageLink: "http://localhost:5000/get-info/641fe1e0198d5f451936a6f5"
        }
        chai.request(app).post('/add-event').send(newEvent)
        .end((err, res) => {
            res.body.status.should.be.eql(401);
            res.body.message.should.be.eql('Event Creation Failed');
        })
        done();
    })
})