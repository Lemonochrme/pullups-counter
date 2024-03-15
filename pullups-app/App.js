import React from 'react';
import { View, Text } from 'react-native';
import { Button, PaperProvider  } from 'react-native-paper';

const App = () => {
    return (
      <PaperProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Boilerplate</Text>
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
      </PaperProvider>
    );
};

export default App;