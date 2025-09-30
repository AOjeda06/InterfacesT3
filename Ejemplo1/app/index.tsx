import { Text, View, Button, Alert } from "react-native";

function alerta(title: string, message: string) {
  alert(title + message);
}

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
        onPress={() => alerta("Alerta", ", Hola mundo")}
      />
    </View>
  );
}
