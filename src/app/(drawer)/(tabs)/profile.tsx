import InputField from "@/src/components/inputFormFields";
import { useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { Avatar, Button, Text, Switch } from 'react-native-paper';

const user = {
    fullName: "John Doe",
    phoneNumber: "+1234567890",
    gender: "Male",
    age: 30,
    height: 175,
    weight: 70,
    bloodGroup: "O+",
    allergies: ["Peanuts"],
    currentMedicines: ["Ibuprofen"],
    allowEmergencyContactAccess: false,
    emergencyContactName: "Jane Smith",
    emergencyContactNumber: "+9876543210"
};

type User = typeof user;

export default function ProfileScreen() {
    const [_userData, setUserData] = useState<User>(user); 
    const [updateUserData, setUpdateUserData] = useState<User>(user); 

   
    const handleSaveProfile = () => {
        setUserData(updateUserData); 
    };

    return (
        <SafeAreaView style={{ padding: 20, flex: 1, display: "flex", gap: 20 }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 15, alignItems: 'center' }}>
                <Avatar.Image source={require('@/src/assets/images/profile.jpg')} size={100} />
                <View>
                    <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>Medical Profile</Text>
                    <Text variant="titleMedium">Keep your health info up-to-date</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ display: "flex", rowGap: 10 }}>
                <InputField
                        label="Full Name"
                        value={updateUserData.fullName}
                        placeholder="Enter your full name"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, fullName: text })}
                    />
                    <InputField
                        label="Phone Number"
                        value={updateUserData.phoneNumber}
                        placeholder="Enter your contact number"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, phoneNumber: text })}
                        keyboardType="numeric"
                    />
                    <InputField
                        label="Gender"
                        value={updateUserData.gender}
                        placeholder="Enter your gender"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, gender: text })}
                    />
                    <InputField
                        label="Age"
                        value={updateUserData.age.toString()}
                        placeholder="Enter your age"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, age: Number(text) })}
                        keyboardType="numeric"
                    />
                    <InputField
                        label="Height(cm)"
                        value={updateUserData.height.toString()}
                        placeholder="Enter your height"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, height: Number(text) })}
                        keyboardType="numeric"
                    />
                    <InputField
                        label="Weight(kg)"
                        value={updateUserData.weight.toString()}
                        placeholder="Enter your weight"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, weight: Number(text) })}
                        keyboardType="numeric"
                    />
                    <InputField
                        label="Blood Group"
                        value={updateUserData.bloodGroup}
                        placeholder="Enter your blood group"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, bloodGroup: text })}
                    />
                    <InputField
                        label="Allergies"
                        value={updateUserData.allergies.join(",")}
                        placeholder="Enter if you have any allergies"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, allergies: text.split(",") })}
                    />
                    <InputField
                        label="Current Medicines"
                        value={updateUserData.currentMedicines.join(",")}
                        placeholder="Enter your current medicines"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, currentMedicines: text.split(",") })}
                    />
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Switch
                            value={updateUserData.allowEmergencyContactAccess}
                            onChange={() =>
                                setUpdateUserData((prev) => ({
                                    ...prev,
                                    allowEmergencyContactAccess: !prev.allowEmergencyContactAccess
                                }))
                            }
                        />
                        <Text variant="titleMedium">Allow Emergency Contact Access</Text>
                    </View>
                    <InputField
                        label="Emergency Contact Name"
                        value={updateUserData.emergencyContactName}
                        placeholder="Enter your emergency contact name"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, emergencyContactName: text })}
                    />
                    <InputField
                        label="Emergency Contact Number"
                        value={updateUserData.emergencyContactNumber}
                        placeholder="Enter your emergency contact number"
                        onChange={(text) => setUpdateUserData({ ...updateUserData, emergencyContactNumber: text })}
                        keyboardType="numeric"
                    />
                    <View style={{ width: "100%" }}>
                        <Button
                            mode="contained"
                            textColor="white"
                            buttonColor="blue"
                            onPress={handleSaveProfile}
                        >
                            Save Medical Profile
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
