import CustomDrawerContent from "@/src/components/customDrawerContent";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
    return <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ headerShown: false,drawerStyle:{borderRadius:0} }} drawerContent={CustomDrawerContent} />
    </GestureHandlerRootView>
}