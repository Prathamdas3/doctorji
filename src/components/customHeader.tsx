import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";


export default function CustomHeader({ title }: { title: string }) {
    const navigate = useNavigation()
    return <View style={{
        display: "flex", flexDirection: "row", paddingVertical: 10, alignItems: "center", backgroundColor: "white",borderBottomWidth:2,borderColor:"#f2f2f2"
    }}>
        <Button onPress={() => navigate.dispatch(DrawerActions.openDrawer)} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Ionicons name="menu" size={25} color="black" />
        </Button>
        <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text variant="headlineMedium" style={{ color: "black" }}>{title}</Text>
        </View>
    </View>
}