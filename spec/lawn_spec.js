import { lawn } from "../src/lawn";

describe("Lawn mowing time", function(){

  it("10x10 lawn", function(){
    expect(lawn(10,10,5)).toBe(20);
  });

  it("20x15 lawn", function(){
    expect(lawn(20,15,10)).toBe(30);
  });

  it("5x5 lawn", function(){
    expect(lawn(5,5,2.5)).toBe(10);
  });

});