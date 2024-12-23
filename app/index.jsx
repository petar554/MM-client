import { StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-3xl">
        Main page.
      </Text>
      <StatusBar style="auto"/>
      <Link href="../(tabs)/account" style={{color: "#000000"}}>Go to profile</Link>
    </SafeAreaView>
  );
} 
