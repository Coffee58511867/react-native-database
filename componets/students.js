import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../shared/button";
import { useState } from "react";
import Card from "../shared/card";

export default function StudentScreen({ navigation }) {
  const [students, setStudents] = useState([
    { id: "1", name: "Hlalele" },
    { id: "2", name: "Hlalele" },
    { id: "3", name: "Hlalele" },
    { id: "4", name: "Hlalele" },
  ]);

  const hadleNavigation = () => {
    navigation.push("Movies");
  };

  return (
    <View style={globalStyles.container}>
      {/* <FlatList
        data={students}
        renderItem={({ items }) => (
          <Card>
            <Text>{items.name}</Text>
          </Card>
        )}
      /> */}
      <Card>
        <Text>Good Morning</Text>
      </Card>
      <Card>
        <Text>Good Morning</Text>
      </Card>
      <Card>
        <Text>Good Morning</Text>
      </Card>

      <CustomButton text="Custom Button" onPress={hadleNavigation} />
    </View>
  );
}
