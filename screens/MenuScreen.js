import * as React from 'react';
import { Text, View,Button, StyleSheet } from 'react-native';

export default function MenuScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Detalle')}
        />
      </View>
    )
}
