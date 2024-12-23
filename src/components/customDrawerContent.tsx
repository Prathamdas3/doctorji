import { type DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { SafeAreaView, View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, router, usePathname } from "expo-router";


export default function CustomDrawerContent(props: DrawerContentComponentProps) {
    const pathName = usePathname()

    const navigate = useNavigation()

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 10, paddingHorizontal: 15, paddingVertical: 10, marginTop: 10 }}>
            <Avatar.Image size={52} source={require("../assets/images/profile.jpg")} />
            <View>
                <Text variant="titleLarge">Hi, John Doe</Text>
                <Text variant="titleSmall">john@gmail.com</Text>
            </View>
        </View>
        <DrawerContentScrollView {...props}>

            {/* <Button onPress={handleClose} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", padding: 10 }}>
                <Ionicons name="close" size={25} color="gray" />
            </Button> */}
            <DrawerItem
                icon={() => <Ionicons name="home" size={25} color={pathName === '/' ? 'blue' : 'gray'} />}
                label="Home"
                labelStyle={[{ color: pathName === '/' ? 'blue' : 'gray' }]}
                onPress={() => router.push('/(drawer)/(tabs)')} />
            <DrawerItem
                icon={() => <Ionicons name="medkit" size={25} color={pathName === '/doctors' ? 'blue' : 'gray'} />}
                label="Doctors"
                labelStyle={[{ color: pathName === '/doctors' ? 'blue' : 'gray' }]}
                onPress={() => router.push('/(drawer)/(tabs)/doctors')}
            />
            <DrawerItem
                icon={() => <Ionicons name="person-circle" size={28} color={pathName === '/profile' ? 'blue' : 'gray'} />}
                label="Profile"
                labelStyle={[{ color: pathName === '/profile' ? 'blue' : 'gray' }]}
                onPress={() => router.push('/(drawer)/(tabs)/profile')}
            />
        </DrawerContentScrollView>
        <View style={{ padding: 20 }}>
            <Button mode="contained" buttonColor="red" textColor="white">Log Out</Button>
        </View>

    </SafeAreaView>
}


