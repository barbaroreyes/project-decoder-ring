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
  it('return  false is alphabet includes special charaters ',()=>{
   const actual = substitution("You are an excellent spy", "!@#$%^&*rukswaflnthdjpzibev");
   expect(actual).to.be.false ;
  })
  it('if dencode sholud be a correct answer ',()=> {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected)

  })
  it("should be true that the alphabet contains all characters in the input, return false otherwise", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgruks!!waflnthdjpzibev");
    expect(actual).to.be.false;
  });
})

    