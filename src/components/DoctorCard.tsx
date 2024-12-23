import { Card, Text, Button, Avatar, Searchbar, } from "react-native-paper";
import { Doctor } from "../app/(drawer)/(tabs)/doctors";
import { View,FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";


export default function DoctorCard({ item }: { item: Doctor }) {
    return <Card style={{ marginBottom: 10 }}>
        <Card.Content style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Avatar.Image source={{ uri: item.image }} size={100} />
            <View style={{ display: "flex", rowGap: 5 }}>
                <View>
                    <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <View style={{ backgroundColor: "#16a34a", width: 110, borderRadius: 999, paddingVertical: 5, paddingHorizontal: 4 }}>
                        <Text variant="labelMedium" style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{item.years_of_experience} years of exp</Text>
                    </View>
                </View>

                <View >
                    <Text variant="titleMedium" style={{ color: "darkgray" }}>{item.degree}</Text>
                    <Text variant="titleMedium" style={{ color: "darkgray" }}>{item.specialization}</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="chatbox-outline" color="gray" size={18} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} />
                        <FlatList
                            data={item.languages_spoken}
                            renderItem={({ item }: { item: string }) => <Text variant="titleSmall" style={{ fontWeight: "bold", marginLeft: 5, color: "darkgray" }}>{item}</Text>}
                            keyExtractor={(_item, index) => index.toString()}
                            horizontal={true}
                        />
                    </View>
                </View>
                <Text variant="titleLarge" style={{ fontWeight: "bold", color: "gray" }}>{String.fromCodePoint(0x20B9)} {item.fees.toLocaleString('en-IN')}</Text>
            </View>
        </Card.Content>
        <Card.Actions style={{ paddingVertical: 10 }}>
            <Button mode="elevated" textColor="gray" onPress={() => router.push({ pathname: "/[id]", params: { name: item.name, id: item.id } })}>Know More</Button>
            <Button mode="contained" buttonColor="green" textColor="white" onPress={() => router.push({ pathname: "/[id]", params: { name: item.name, id: item.id } })}>Consult Now</Button>
        </Card.Actions>
    </Card>
}