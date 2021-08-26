
import React from 'react';
import { NativeBaseProvider } from "native-base"
import Navigation from './app/navigation/Navigation';
export default function App() {
  return (
    <NativeBaseProvider>
        <Navigation />
    </NativeBaseProvider>
  );
}
// const config = {
//   dependencies: {
//     'linear-gradient': require('react-native-linear-gradient').default,
//   },
// };
