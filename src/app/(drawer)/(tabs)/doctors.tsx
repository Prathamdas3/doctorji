import { SafeAreaView, View} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {  Text, Searchbar, } from "react-native-paper";
import Doctors from '@/src/data.json'
import { useEffect, useState } from "react";
import DoctorCard from "@/src/components/DoctorCard";

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

    return <SafeAreaView style={{  flex: 1,backgroundColor:"white",rowGap:15 }}>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} placeholder="Search for doctor" style={{backgroundColor:"white",borderColor:"#f2f2f2",borderWidth:3,marginHorizontal:10,marginTop:10}} />
        {doctors.length !== 0 ? <View style={{ flex: 1,backgroundColor:"#f2f2f2",borderRadius:20,paddingHorizontal:10 }}>
            <Text variant="titleLarge" style={{ textAlign: "left", fontWeight: "bold", padding: 15 }}>Showing all the doctors available</Text>
            <FlashList data={doctors}
                estimatedItemSize={50}
                renderItem={({ item }: { item: Doctor }) => <DoctorCard doctor={item} />}
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