import {addition , mul, sub} from './MyFunction'


describe("testing the calculator", ()=>{
    it("testing only addition", ()=>{
        expect(addition(100,200)).toBe(300)
    })

    it("testing only sub", ()=>{
        expect(sub(100,50)).toBe(50)
    })
    it("testing only mul", ()=>{
        expect(mul(20,20)).toBe(400)
    })
    
})


