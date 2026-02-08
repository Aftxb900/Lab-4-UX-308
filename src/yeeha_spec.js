import { yeeha } from "../src/yeeha";

describe("Yee Ha", function(){

  it("Yee", function(){
    expect(yeeha(9)).toBe("Yee");
  });

  it("Ha", function(){
    expect(yeeha(14)).toBe("Ha");
  });

  it("Yee Ha", function(){
    expect(yeeha(21)).toBe("Yee Ha");
  });

  it("Nada", function(){
    expect(yeeha(8)).toBe("Nada");
  });

});