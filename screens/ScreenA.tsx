import React from 'react';
import {Button, Text, View} from 'react-native';

export type ScreenAProps = {
  title: string;
  subtitle?: string;
  body: string;
  onClose: () => void;
};

const ScreenA = (props: ScreenAProps) => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
      }}>
      <Text>Title: {props.title}</Text>
      <Text>Body: {props.body}</Text>
      <Button title="Close" onPress={props.onClose} />
    </View>
  );
};

export default ScreenA;
