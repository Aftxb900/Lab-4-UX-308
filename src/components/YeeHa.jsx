import { yeeha } from "../yeeha";

export default function YeeHa(){
  return(
    <>
      <h3>Yee Ha</h3>
      <p>9 → {yeeha(9)}</p>
      <p>14 → {yeeha(14)}</p>
      <p>21 → {yeeha(21)}</p>
      <p>8 → {yeeha(8)}</p>
    </>
  );
}