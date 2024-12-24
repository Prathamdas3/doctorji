import { View, Image } from "react-native";
import { Text } from "react-native-paper";


export default function DoctorSection() {
    return <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", gap: 10, padding: 10 }}>
        <View style={{ rowGap: 8, display: "flex", alignItems: "flex-start" }}>
            <View style={{ borderWidth: 2, borderColor: "gray", borderRadius: 999, paddingVertical: 3, paddingHorizontal: 8 }}>
                <Text variant="titleSmall" style={{ textAlign: "center" }}>SKIN CONCERNS?</Text>
            </View>
            <View>
                <Text variant="titleLarge">
                    Avail a <Text variant="titleLarge" style={{ fontWeight: "bold", color: "#0891b2" }}>FREE</Text>
                </Text>
                <Text variant="titleLarge" style={{ fontWeight: "bold", color: "#0891b2" }}>Cosmetologist</Text>
                <Text variant="titleLarge"><Text variant="titleLarge" style={{ fontWeight: "bold" }}>Consult</Text><Text> today!</Text></Text>
            </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Image source={require("@/src/assets/images/doctor_1.png")} style={{ width: 100, height: 150 }} />
        </View>
    </View>
}