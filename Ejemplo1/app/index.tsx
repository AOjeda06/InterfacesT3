import { Text, View, Button, Alert } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola mundo.</Text>
      <Button
        title="Mostrar alerta"
        onPress={() => Alert.alert("Alerta", "Hola mundo")}
      />
    </View>
  );
}
