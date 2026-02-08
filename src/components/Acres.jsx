import { acres } from "../acres";

export default function Acres(){
  return(
    <>
      <h3>Square Feet to Acres</h3>
      <p>43560 sq ft → {acres(43560)}</p>
      <p>21780 sq ft → {acres(21780)}</p>
      <p>87120 sq ft → {acres(87120)}</p>
    </>
  );
}