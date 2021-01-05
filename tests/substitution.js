const expect = require("chai").expect
const substitution = require("../src/substitution")
describe("substitution()", () => {
    it("Should return false if !== 26", () => {
       const actual = substitution("Thinkful",'short')
       expect(actual).to.be.false
    }) 
  it('It correctly translates the given phrase, based on the alphabet given to the function ',()=>{
    const actual  = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw'
    expect(actual).to.equal(expected)
  } )
      it('each characters must be unique', () => {
        const actual = substitution("thinkful",'abdebagghipw')
       expect(actual).to.be.false
   }) 
     it('Space shoul be maintend',()=> {
    const actual  = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.equal(expected)
  
  })
  it('Capital letter can be ignore',()=> {
    const actual  = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne'
    expect(actual).to.equal(expected)
  })  
})

    