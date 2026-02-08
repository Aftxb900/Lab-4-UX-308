import { airquality } from "../src/airquality";

describe("Air Quality", function(){

  it("Good", function(){
    expect(airquality(25)).toBe("Good");
  });

  it("Moderate", function(){
    expect(airquality(75)).toBe("Moderate");
  });

  it("Unhealthy for Sensitive Groups", function(){
    expect(airquality(125)).toBe("Unhealthy for Sensitive Groups");
  });

  it("Unhealthy", function(){
    expect(airquality(175)).toBe("Unhealthy");
  });

  it("Very Unhealthy", function(){
    expect(airquality(250)).toBe("Very Unhealthy");
  });

  it("Hazardous", function(){
    expect(airquality(350)).toBe("Hazardous");
  });

});