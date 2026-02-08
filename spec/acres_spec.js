import { acres } from "../src/acres";

describe("Acres conversion", function(){

  it("43560 sq ft = 1 acre", function(){
    expect(acres(43560)).toBeCloseTo(1);
  });

  it("21780 sq ft = 0.5 acres", function(){
    expect(acres(21780)).toBeCloseTo(0.5);
  });

  it("87120 sq ft = 2 acres", function(){
    expect(acres(87120)).toBeCloseTo(2);
  });

});
