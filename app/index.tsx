import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(1)
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
      }}
    >
      <View style={{
        alignItems: 'center'
      }}>

        <Text style={{ fontSize: 40 }}>{count}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title="-" onPress={() => count && setCount(count - 1)}></Button>
          <Button title="+" onPress={() => setCount(count + 1)}></Button>
        </View>
      </View>

      {count != 0 && <View style={{ marginBottom: 20 }}>
        <Button title="RESET" onPress={() => setCount(0)} />
      </View>}
    </View>

  );
}
