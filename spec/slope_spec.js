import { slope } from "../src/slope";

describe("Slope", function(){

  it("positive slope", function(){
    expect(slope(0,0,2,4)).toBe(2);
  });

  it("negative slope", function(){
    expect(slope(0,4,2,0)).toBe(-2);
  });

  it("horizontal line", function(){
    expect(slope(0,2,4,2)).toBe(0);
  });

});