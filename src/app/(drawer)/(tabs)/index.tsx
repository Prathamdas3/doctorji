import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { MoveRight } from 'lucide-react-native'
import ServiceSection from "@/src/components/home/ServiceSection";
import DoctorSection from "@/src/components/home/DoctorSection";
import FrequentSection from "@/src/components/home/FequentSection";


export default function Index() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >

      <ScrollView style={{ flex: 1 }}>
        <LinearGradient
          colors={['#db2777', '#ea580c']}
          style={{ padding: 8, }}
          start={[0, 0]}
          end={[1, 0]}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: 10 }}>
            <Text variant="titleSmall" style={{ color: "white", width: '60%' }}>Get medicine reminders and other updates on home screen.<Text variant="labelLarge" style={{ textDecorationLine: "underline", color: "white", fontWeight: "semibold" }}>Know more</Text></Text>
            <View style={{ borderRadius: 5, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 10 }}>
              <Text style={{ fontWeight: "bold", color: "#f97316" }}>Enable</Text>
              <MoveRight color="#f97316" size={20} />
            </View>
          </View>
        </LinearGradient>
        <View style={{
          flex: 1,
          rowGap: 20, justifyContent: "center",
          padding: 20
        }}>
          <ServiceSection />
          <DoctorSection />

          <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Frequently Booked Health Checks</Text>
            <View style={{ width: 80, padding: 4, borderRadius: 999, backgroundColor: '#3b82f6', display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: 'white', fontWeight: "bold" }}>View All</Text>
            </View>
          </View>
          <FrequentSection />

          <Card style={{ backgroundColor: "transparent" }}>
            <LinearGradient
              colors={['#0891b2', '#1e40af']}
              style={{ borderRadius: 10, flex: 1, paddingVertical: 10, }}
              start={[0, 0]}
              end={[1, 0]}
            >
              <Card.Content style={{ display: "flex", flexDirection: "row", backgroundColor: "transparent" }}>
                <View style={{ width: "55%", rowGap: 5 }}>
                  <Text style={{ fontWeight: 'bold', color: "#bfdbfe" }} variant="labelMedium">
                    3 Months
                  </Text>
                  <Text variant="labelLarge" style={{ fontWeight: 'bold', color: "#dbeafe" }}>
                    MFine ONE membership
                  </Text>
                  <Text variant="labelSmall" style={{ color: "#bfdbfe" }}>
                    Up to 30% OFF an Consultation, Health Checks,
                    Medicines & More
                  </Text>
                </View>
                <View style={{ width: '50%', display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}>
                  <Button mode="contained" buttonColor="#fc6b47" style={{ borderRadius: 10, }} textColor="white">
                    Explore More
                  </Button>
                </View>
              </Card.Content>
            </LinearGradient>
          </Card>

          <View style={{ borderTopColor: "#ef4444", borderBottomColor: "#ef4444", borderTopWidth: 3, borderBottomWidth: 3, padding: 10 }}>
            <Text variant="headlineMedium" style={{ fontWeight: "bold", textAlign: "center", color: "#ef4444" }}>Explore More</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}
