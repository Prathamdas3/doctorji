import { useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { Avatar, Button, Text, TextInput, Switch } from 'react-native-paper';

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
                    <View>
                        <Text variant="titleMedium">Full Name</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your full name"
                            value={updateUserData.fullName}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, fullName: text })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Phone Number</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your contact number"
                            value={updateUserData.phoneNumber}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, phoneNumber: text })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Gender</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your gender"
                            value={updateUserData.gender}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, gender: text })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Age</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your age"
                            value={updateUserData.age.toString()}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, age: Number(text) })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Height(cm)</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your height"
                            value={updateUserData.height.toString()}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, height: Number(text) })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Weight(kg)</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your weight"
                            value={updateUserData.weight.toString()}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, weight: Number(text) })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Blood Group</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your blood group"
                            value={updateUserData.bloodGroup}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, bloodGroup: text })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Allergies</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter if you have any allergies"
                            value={updateUserData.allergies.join(",")}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, allergies: text.split(",") })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Current Medicines</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your current medicines"
                            value={updateUserData.currentMedicines.join(",")}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, currentMedicines: text.split(",") })}
                        />
                    </View>
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
                    <View>
                        <Text variant="titleMedium">Emergency Contact Name</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your emergency contact name"
                            value={updateUserData.emergencyContactName}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, emergencyContactName: text })}
                        />
                    </View>
                    <View>
                        <Text variant="titleMedium">Emergency Contact Number</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Enter your emergency contact number"
                            value={updateUserData.emergencyContactNumber}
                            onChangeText={(text) => setUpdateUserData({ ...updateUserData, emergencyContactNumber: text })}
                        />
                    </View>
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
