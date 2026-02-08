import { snowremoval } from "../snowremoval.js";
import { Text } from "react-native";
// input cm of snowfall
export function SnowRemoval({cm}){
    return(
        <text>
            Snow removal of {cm} requires {snowremoval(cm)}
        </text>
    )
}