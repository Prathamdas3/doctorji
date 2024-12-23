import { SafeAreaView, View, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Card, Text, Button, Avatar, Searchbar, } from "react-native-paper";
import Doctors from '@/src/data.json'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import { useEffect, useState } from "react";

export type Doctor = {
    id: number;
    name: string;
    image: string;
    degree: string;
    specialization: string;
    years_of_experience: number;
    languages_spoken: string[];
    fees: number;
}


function DoctorCard({ item }: { item: Doctor }) {
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

export default function DoctorsListScreen() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [doctors, setDoctors] = useState<Doctor[]>(Doctors)

    useEffect(() => {
        const filtered = Doctors.filter((doctor) =>
            doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.languages_spoken.some((language) =>
                language.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setDoctors(filtered);
    }, [searchQuery]);

    return <SafeAreaView style={{ padding: 10, flex: 1 }}>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} placeholder="Search for doctor" />
        {doctors.length !== 0 ? <View style={{ flex: 1 }}>
            <Text variant="titleLarge" style={{ textAlign: "left", fontWeight: "bold", padding: 15 }}>Showing all the doctors available</Text>
            <FlashList data={doctors}
                estimatedItemSize={50}
                renderItem={({ item }: { item: Doctor }) => <DoctorCard item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 10 }}

            />
        </View> : <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
                No Doctor available
            </Text>
        </View>}
    </SafeAreaView>
}