import React from 'react';
import {Button, Text, View} from 'react-native';

function Home({navigation}: any) {
  return (
    <View>
      <Text>Welcome to FleetProSync</Text>
      <Text>a one stop shop for all your fleet management needs.</Text>
      <Button
        title="Go to TabNavigator"
        onPress={() => navigation.navigate('TabNavigator')}
      />
    </View>
  );
}

export default Home;
