import chai from 'chai'
import numberComma from './number-comma'

const { expect } = chai

describe('number-comma', () => {
  it('`1234567` should transform to `1,234,567`', done => {
    expect(numberComma(1234567)).to.equal('1,234,567')
    done()
  })

  it('`123` should never transform', done => {
    const num = 123
    expect(numberComma(num)).to.equal(String(num))
    done()
  })
})
