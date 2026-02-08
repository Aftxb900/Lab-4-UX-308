import {Hello} from './Hello.jsx';
import {SnowRemoval} from './SnowRemoval.jsx';
import {
  View,
} from 'react-native';

import Acres from './Acres.jsx';
import Lawn from './Lawn.jsx';
import AirQuality from './AirQuality.jsx';
import YeeHa from './YeeHa.jsx';
import Slope from './Slope.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />

      <SnowRemoval cm={0.5} />
      <SnowRemoval cm={1.5} />

      <Acres />
      <Lawn />
      <AirQuality />
      <YeeHa />
      <Slope />
    </View>
  );
}

