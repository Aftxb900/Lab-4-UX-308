import { lawn } from "../lawn";

export default function Lawn(){
  return(
    <>
      <h3>Lawn Mowing Time</h3>
      <p>10x10 @ 5 → {lawn(10,10,5)} minutes</p>
      <p>20x15 @ 10 → {lawn(20,15,10)} minutes</p>
      <p>5x5 @ 2.5 → {lawn(5,5,2.5)} minutes</p>
    </>
  );
}
