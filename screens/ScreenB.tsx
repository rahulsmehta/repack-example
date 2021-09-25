import React from 'react';
import {Button, Text, View} from 'react-native';

export type ScreenBProps = {
  title: string;
  subtitle?: string;
  body: string;
  onClose: () => void;
};

const ScreenB = (props: ScreenBProps) => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: 'pink',
        alignItems: 'center',
      }}>
      <Text>Title: {props.title}</Text>
      <Text>Body: {props.body}</Text>
      <Button title="Close" onPress={props.onClose} />
    </View>
  );
};

export default ScreenB;
