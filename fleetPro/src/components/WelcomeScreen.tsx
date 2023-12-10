import {Box, Button, ButtonText, Text} from '@gluestack-ui/themed';

import {ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';

export default function WelcomeScreen({navigation}: any) {
  // const image =  ;
  // const image = {uri: };
  function gotoDashboard(): void {
    navigation.navigate('Dashboard');
  }
  return (
    <SafeAreaView>
      <ImageBackground source={require('../assets/car_assets/carbg.png')}>
        <Text fontSize="$4xl" color="$white">
          Today @ 9PM
        </Text>
        <Button
          action={'primary'}
          variant={'solid'}
          size={'lg'}
          isDisabled={false}
          onPress={gotoDashboard}>
          <ButtonText>Continue to the Dashboard</ButtonText>
        </Button>
      </ImageBackground>
    </SafeAreaView>
  );
}
