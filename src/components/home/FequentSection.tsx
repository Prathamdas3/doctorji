import { View, } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

export default function FrequentSection() {
    return <View style={{ display: "flex", gap: 10, flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ backgroundColor: "transparent", width: "50%", borderRadius: 30 }}>
            <LinearGradient
                colors={['#bfdbfe', '#93c5fd']}
                style={{ borderRadius: 10, padding: 8, }}
                start={[0, 0]}
                end={[1, 0]}
            >

                <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#3b82f6" }}>76+ Tests</Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Ayushman Basic
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Health Check
                </Text>
                <LinearGradient colors={['#0891b2', '#1e40af']}
                    style={{ borderRadius: 10, flex: 1, padding: 8, }}
                    start={[0, 0]}
                    end={[1, 0]}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                        <View style={{ borderRightWidth: 1, borderRightColor: "black", display: "flex", flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "flex-start", paddingHorizontal: 5 }}>
                            <Text variant="titleSmall" style={{ color: "#dbeafe", fontWeight: "bold" }}>{String.fromCodePoint(0x20B9)}999</Text>
                            <Text variant="labelMedium" style={{ textDecorationLine: "line-through", color: '#dbeafe' }}>{String.fromCodePoint(0x20B9)}2400</Text>
                        </View>
                        <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#dbeafe", marginLeft: 10 }}>60% OFF</Text>
                    </View>
                </LinearGradient>

            </LinearGradient>
        </View>
        <View style={{ backgroundColor: "transparent", width: "50%" }}>
            <LinearGradient
                colors={['#fefce8', '#fef9c3']}
                style={{ borderRadius: 10, padding: 8, }}
                start={[0, 0]}
                end={[1, 0]}
            >
                <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#3b82f6" }}>83+ Tests</Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Ayushman Vital
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Health Check
                </Text>
                <LinearGradient colors={['#0891b2', '#1e40af']}
                    style={{ borderRadius: 10, flex: 1, padding: 8, }}
                    start={[0, 0]}
                    end={[1, 0]}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                        <View style={{ borderRightWidth: 1, borderRightColor: "black", display: "flex", flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "flex-start", paddingHorizontal: 5 }}>
                            <Text variant="titleSmall" style={{ color: "#dbeafe", fontWeight: "bold" }}>{String.fromCodePoint(0x20B9)}1899</Text>
                            <Text variant="labelMedium" style={{ textDecorationLine: "line-through", color: '#dbeafe' }}>{String.fromCodePoint(0x20B9)}4200</Text>
                        </View>
                        <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#dbeafe", marginLeft: 10 }}>60% OFF</Text>
                    </View>
                </LinearGradient>
            </LinearGradient>
        </View>
    </View>
}