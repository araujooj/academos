import React from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  );
};

export default App;
