import {
    Text,
    View,
} from 'react-native';
import { hello } from '../hello.js';

// input of name you are gretting 
export function Hello({ name }) {
    // no processing 
    let sHello = hello(name);

    // output jsx to be displayed


    return (
        <View>
            <Text>hello({name ? `"${name}"` : ""}) returned {sHello}</Text>
        </View>
    );
}