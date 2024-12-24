import { Card, Text, Button } from "react-native-paper";
import type { Doctor } from "../app/(drawer)/(tabs)/doctors";
import { View, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
    const languages = doctor.languages_spoken.slice(0, 2)

    return <Card style={{ marginBottom: 20 }}>
        <Card.Content style={{ display: "flex", gap: 10 }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
                <View style={{ rowGap: 5 }}>
                    <Image source={{ uri: doctor.image }} style={{ width: 126, height: 134, borderRadius: 10, borderWidth: 2, borderColor: "lightgray" }} />
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#1e95b6", width: 110, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 4 }}>
                            <Text variant="labelMedium" style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{doctor.years_of_experience} years of exp</Text>
                        </View>
                    </View>

                </View>

                <View style={{ display: "flex", rowGap: 5, }}>
                    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>{doctor.name}</Text>
                    <Text variant="titleSmall" style={{ color: "#6e6e6e" }}>{doctor.degree}</Text>
                    <Text variant="titleSmall" style={{ color: "black" }}>{doctor.specialization}</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <AntDesign name="message1" color="#1e95b6" size={15} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} />
                        <FlatList
                            data={doctor.languages_spoken.slice(0, 2)}
                            renderItem={({ item, index }: { item: string, index: number }) => <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><Text variant="titleSmall" style={{ fontWeight: "bold", color: "", marginLeft: 5 }}>{item}{index < 1 ? "," : ""}</Text>{doctor.languages_spoken.length > 2 && index === 1 && <View style={{ borderWidth: 2, borderColor: "#0094B5", borderRadius: 5, paddingVertical: 2,paddingHorizontal:1, marginLeft: 5 }}>
                                <Text style={{ color: "#0094B5" }}>+{doctor.languages_spoken.length - 2}</Text>
                            </View>}</View>}
                            keyExtractor={(_doctor, index) => index.toString()}
                            horizontal={true}
                        />

                    </View>
                    <Text variant="titleLarge" style={{ fontWeight: "bold", color: "" }}>{String.fromCodePoint(0x20B9)} {doctor.fees.toLocaleString('en-IN')}</Text>
                </View>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", gap: 10, paddingHorizontal: 5 }}>
                <Button mode="elevated" textColor="#1e95b6" buttonColor="#f8f8f8" style={{ borderRadius: 10, width: '50%' }} onPress={() => router.push({ pathname: "/[id]", params: { name: doctor.name, id: doctor.id } })}>Know More</Button>
                <Button mode="contained" buttonColor="#fc6b47" style={{ borderRadius: 10, width: "50%" }} textColor="white" onPress={() => router.push({ pathname: "/[id]", params: { name: doctor.name, id: doctor.id } })}>Consult Now</Button>
            </View>
        </Card.Content>

    </Card>
}