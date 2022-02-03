import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Game
() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b2733fa0c84b9bf86a128de45cf1'}} style={{width: 400, height: 400}} />
      <Text>Game item</Text>
      <Text>Discount</Text>
      <Text>Link</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 100,
  },
});