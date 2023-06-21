import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./componets/HomeScreen";
import LoginScreen from "./componets/LoginScreen";
import DetailsScreen from "./componets/DetailsScreen";
import MoviesScreen from "./componets/MoviesScreen";
import Splashcreen from "./componets/Splash";
import AddTaskScreen from "./componets/AddTask";
import TaskListScreen from "./componets/TaskList";
import AddScreen from "./componets/AddScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0080ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="My Tasks" component={TaskListScreen} />
        <Stack.Screen name="Add Task" component={AddTaskScreen} />
        <Stack.Screen name="Task" component={AddScreen} />
        <Stack.Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={Splashcreen}
        />
        <Stack.Screen name="Movies" component={MoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
