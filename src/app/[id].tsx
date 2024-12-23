import { FlatList, SafeAreaView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Card, Text, Avatar, Button } from 'react-native-paper'
import Doctors from '@/src/data.json'
import { Doctor } from "./(drawer)/(tabs)/doctors";
import { Clock, GraduationCap, Languages, Stethoscope } from 'lucide-react-native'

export default function DoctorScreen() {
    const { id } = useLocalSearchParams()
    const doctor: Doctor | undefined = Doctors.find((doctor: Doctor) => doctor.id.toString() == id)
    return <SafeAreaView style={{ padding: 20, flex: 1, display: "flex", rowGap: 30 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 15, alignItems: 'center' }}>
            <Avatar.Image source={{ uri: doctor?.image }} size={100} />
            <View>
                <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>{doctor?.name}</Text>
                <Text variant="titleMedium">{doctor?.specialization}</Text>
            </View>
        </View>
        <View style={{ rowGap: 10 }}>
            <View style={{ padding: 5, rowGap: 1 }}>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <GraduationCap size={24} color="black" />
                    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>Qualification</Text>
                </View>
                <Text variant="titleMedium" style={{ color: "gray", marginLeft: 30 }}>{doctor?.specialization}</Text>
            </View>
            <View style={{ padding: 5, rowGap: 1 }}>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Stethoscope size={24} color="black" />
                    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>Experience</Text>
                </View>
                <Text variant="titleMedium" style={{ color: "gray", marginLeft: 30 }}>{doctor?.years_of_experience} years of practice</Text>
            </View>
            <View style={{ padding: 5, rowGap: 7 }}>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Languages size={24} color="black" />
                    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>Languages</Text>
                </View>
                <View style={{ marginLeft: 30 }}>
                    <FlatList
                        data={doctor?.languages_spoken}
                        renderItem={({ item }: { item: string }) => <View style={{ width: 80, borderRadius: 999, backgroundColor: "lightgray", paddingVertical: 2, paddingHorizontal: 4, marginLeft: 7 }}>
                            <Text variant="titleMedium" style={{ fontWeight: "bold", color: "black", textAlign: "center" }}>{item}</Text>
                        </View>}
                        keyExtractor={(_item, index) => index.toString()}
                        horizontal={true}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: "#f3f4f6", padding: 5, rowGap: 1 }}>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={24} color="black" />
                    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>Consultation Fee</Text>
                </View>
                <Text variant="titleLarge" style={{ fontWeight: "bold", color: "#1f2937", marginLeft: 30 }}>
                    {String.fromCodePoint(0x20B9)} {doctor?.fees.toLocaleString('en-IN')}
                </Text>
            </View>
        </View>
        <View style={{ position: "absolute", bottom: 10, width: "100%", alignSelf: "center" }}>
            <Button mode="contained" textColor="white" buttonColor="#16a34a">
                Book Appointment
            </Button>
        </View>
    </SafeAreaView>
}