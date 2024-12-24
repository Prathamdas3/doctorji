import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { Bell, Wallet,Menu } from 'lucide-react-native'
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function Navbar() {
    const navigate = useNavigation()
    return <View style={{ display: "flex", backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Button onPress={() => navigate.dispatch(DrawerActions.openDrawer)} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Menu size={25} color="gray" />
            </Button>
            <View>
                <Text variant='labelMedium'>Your Location</Text>
                <Text variant='titleMedium'>Kadabesanah...</Text>
            </View>

        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Wallet size={24} color="gray" />
            <Bell size={24} color="gray" />
        </View>
    </View>
}