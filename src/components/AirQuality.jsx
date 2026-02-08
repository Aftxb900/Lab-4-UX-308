import { airquality } from "../airquality";

export default function AirQuality(){
  return(
    <>
      <h3>Air Quality</h3>
      <p>25 → {airquality(25)}</p>
      <p>75 → {airquality(75)}</p>
      <p>125 → {airquality(125)}</p>
      <p>175 → {airquality(175)}</p>
      <p>250 → {airquality(250)}</p>
      <p>350 → {airquality(350)}</p>
    </>
  );
}