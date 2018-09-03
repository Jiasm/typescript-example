import chai from 'chai'
import chaiHttp from 'chai-http'
import { host, port } from '../conf'
import { Gender } from '../../src/config'
import UserInfo from '../../src/entity/user/user-info'

chai.use(chaiHttp)
const should = chai.should()
const { expect } = chai
const url = '/list/filter'
const gender = Gender.Female

describe(`filter list with female`, () => {
  it('request success', done => {
    chai.request(`${host}:${port}`)
      .get(`${url}/${gender}`)
      .end((err, res) => {
        should.exist(res.body)
        expect(res.body).to.have.property('code')
        expect(res.body.code).to.equal(200)
        expect(res.body.data).to.be.a('array')
        expect(res.body.data.filter((item: UserInfo) => item.gender)).to.not.include(Gender.Male)

        done()
      })
  })
})
