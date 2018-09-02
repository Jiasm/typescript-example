/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai'
import chaiHttp from 'chai-http'
import { host, port } from '../conf'
import { Gender } from '../../src/config'

chai.use(chaiHttp)
const should = chai.should()
const { expect } = chai
const url = '/add'
const name = 'Niko'
const age = 18
const gender = Gender.Female

describe(`add new user`, () => {
  it('request success', done => {
    chai.request(`${host}:${port}`)
      .get(`${url}/${name}/${age}/${gender}`)
      .end((err, res) => {
        should.exist(res.body)
        expect(res.body).to.have.property('code')
        expect(res.body.code).to.equal(200)

        done()
      })
  })
})
