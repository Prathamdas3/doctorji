import { SafeAreaView, View, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Card, Text, Button, Avatar, } from "react-native-paper";
import Doctors from '@/src/data.json'
import Ionicons from '@expo/vector-icons/Ionicons';

type Doctor = {
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
                    <View style={{ backgroundColor: "green", width: 110, borderRadius: 999, paddingVertical: 5, paddingHorizontal: 4 }}>
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
            <Button mode="elevated" textColor="gray" >Know More</Button>
            <Button mode="contained" buttonColor="green" textColor="white">Consult Now</Button>
        </Card.Actions>
    </Card>
}

export default function DoctorsListScreen() {
    return <SafeAreaView style={{ padding: 10, flex: 1 }}>
        <Text variant="titleLarge" style={{ textAlign: "left", fontWeight: "bold", padding: 15 }}>Showing all the doctors available</Text>
        <FlashList data={Doctors}
            estimatedItemSize={50}
            renderItem={({ item }: { item: Doctor }) => <DoctorCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 10 }}

        />

    </SafeAreaView>
}