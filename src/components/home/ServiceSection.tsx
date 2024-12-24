import { View, Image } from "react-native";
import { Text, Card } from "react-native-paper";
import { Clock } from 'lucide-react-native'


export default function ServiceSection() {
    return <View style={{ rowGap: 10 }}>
        <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10, alignSelf: "center" }}>
            <Card style={{ backgroundColor: "#eff6ff", width: "33%", height: "90%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                    <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Online Consultations</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('@/src/assets/images/image_1.png')} style={{ width: 65, height: 65 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <Clock size={20} color="#2563eb" />
                        <Text variant="labelMedium" style={{ color: "#2563eb" }}>10 mins</Text>
                    </View>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: "#f0fdf4", width: "33%", height: "90%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                    <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Full Body Checkup</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dcfce7", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('@/src/assets/images/image_2.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <Clock size={20} color="#16a34a" />
                        <Text variant="labelMedium" style={{ color: "#16a34a" }}>10 mins</Text>
                    </View>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: "#fff7ed", width: "33%", height: "90%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                    <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Order Medicines</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#ffedd5", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('@/src/assets/images/image_4.png')} style={{ width: 65, height: 65 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>

                        <Text variant="labelMedium" style={{ color: "#ea580c" }}>Upto 20% OFF</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
        <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10, alignSelf: "center" }}>
            <Card style={{ backgroundColor: "#fff1f2", width: "33%", height: "99.8%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                    <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Skincare</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#ffe4e6", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('@/src/assets/images/image_5.png')} style={{ width: 40, height: 60 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>

                        <Text variant="labelMedium" style={{ color: "#e11d48" }}>30% OFF</Text>
                    </View>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: "#faf5ff", width: "33%", height: "99.8%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                    <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>X-rays, MRIs & Scans</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#f3e8ff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('@/src/assets/images/image_3.png')} style={{ width: 65, height: 65 }} />
                    </View>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: "#eff6ff", width: "33%", height: "99.8%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                    <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Lab Tests</Text>
                    <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('@/src/assets/images/image_6.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <Clock size={20} color="#2563eb" />
                        <Text variant="labelMedium" style={{ color: "#2563eb" }}>50 mins</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>

    </View>
}