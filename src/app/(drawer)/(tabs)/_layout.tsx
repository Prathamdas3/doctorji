import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomHeader from "@/src/components/customHeader";


export default function TabLayout() {
    return <Tabs screenOptions={{  tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen name="index" options={{
            title: "Explore",
            header:()=><CustomHeader title="Explore"/>,
            tabBarIcon: ({ color }) => <Ionicons name="home" size={25} color={color} />
        }} />
        <Tabs.Screen name="doctors" options={{
            title: "Doctors",
            header:()=><CustomHeader title="Doctors"/>,
            tabBarIcon: ({ color }) => <Ionicons name="medkit" size={25} color={color} />
        }} />
        <Tabs.Screen name="profile" options={{
            title: "Profile",
            header:()=><CustomHeader title="Profile"/>,
            tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={25} color={color} />
        }} />
    </Tabs>
}