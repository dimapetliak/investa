import { ScrollView, Text, View } from "react-native";

export default function AssetsScreen() {
  return (
    <ScrollView style={{
      marginVertical: 100,
      padding: 16
    }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Assets Screen!</Text>
      </View>
    </ScrollView>
  )
}