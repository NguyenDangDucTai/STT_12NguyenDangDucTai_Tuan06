import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from "./Screens/Screen_01";
import Screen_02 from "./Screens/Screen_02";

export default function App() {
  return (
    <View style={{flex:1}}>
      {/*<Screen_01></Screen_01>*/}
        <Screen_02></Screen_02>
    </View>
  );
}
