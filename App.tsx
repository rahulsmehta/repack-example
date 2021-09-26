/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ChunkManager } from '@callstack/repack/dist/client/chunks-api/ChunkManager';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
// import ScreenA from './screens/ScreenA';
// import ScreenB from './screens/ScreenB';

const ScreenA = React.lazy(() => import('./screens/ScreenA'));
const ScreenB = React.lazy(() => import('./screens/ScreenB'));

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [showA, setShowA] = React.useState(false);
  const [showB, setShowB] = React.useState(false);
  
  return (
    <SafeAreaView style={{height: '100%'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {!showA && !showB && (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Repack Enabled">
              This app uses Webpack as the bundler instead of Metro (via
              @callstack/repack).
            </Section>
            <Section title="Lazy Loading">
              <View>
                <Button onPress={() => setShowA(true)} title="Screen A" />
                <Button onPress={() => setShowB(true)} title="Screen B" />
              </View>
            </Section>
          </View>
        </ScrollView>
      )}
      {showA && (
        <React.Suspense fallback={<ActivityIndicator />}>
          <ScreenA
            title="Screen A"
            body="This is variant A of a screen"
            onClose={() => setShowA(false)}
          />
        </React.Suspense>
      )}
      {showB && (
        <React.Suspense fallback={<ActivityIndicator />}>
          <ScreenB
            title="Screen B"
            body="This is variant B of a screen"
            onClose={() => setShowB(false)}
          />
        </React.Suspense>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
