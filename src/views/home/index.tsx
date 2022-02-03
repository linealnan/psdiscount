import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

import Game from '../../components/Game';
import { obtainGames } from '../../network/ps4.api';

export default function Home
() {
  const [isLoading, setLoading] = useState(true);
  
  // Получение списка игр
  useEffect(() => {
    obtainGames()
    .then(r => {
      console.log(r)
    })
    .finally(() => setLoading(false))
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
      <ScrollView>
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </ScrollView>)}
      <StatusBar style="auto" />
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
});
