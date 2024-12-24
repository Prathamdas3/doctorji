import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomHeader from "@/src/components/customHeader";
import { useSegments } from "expo-router";
import Navbar from "@/src/components/IndexHeader";

export default function TabLayout() {
    const segments = useSegments()

    return <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarHideOnKeyboard: true }} >
        <Tabs.Screen name="index" options={{
            title: "Home",
            header: () => <Navbar/>,
            tabBarIcon: ({ color }) => <Ionicons name="home" size={25} color={color} />
        }} />
        <Tabs.Screen name="doctors" options={{
            title: "Choose Your Doctor",
            header: () => <CustomHeader title="Doctors" />,
            tabBarIcon: ({ color }) => <Ionicons name="medkit" size={25} color={color} />,
            tabBarStyle: { display: segments[2] === "doctors" ? 'none' : 'flex' }

        }} />
        <Tabs.Screen name="profile" options={{
            title: "Profile",
            header: () => <CustomHeader title="Profile" />,
            tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={25} color={color}
            />
        }} />
    </Tabs>
}