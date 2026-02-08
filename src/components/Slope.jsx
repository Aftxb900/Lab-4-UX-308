import { slope } from "../slope";

export default function Slope(){
  return(
    <>
      <h3>Slope</h3>
      <p>(0,0) → (2,4): {slope(0,0,2,4)}</p>
      <p>(0,4) → (2,0): {slope(0,4,2,0)}</p>
      <p>(0,2) → (4,2): {slope(0,2,4,2)}</p>
    </>
  );
}