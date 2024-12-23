import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, Card } from "react-native-paper";
import { Clock, Stethoscope, ActivitySquare, PillIcon as Pills, Sparkles, ScanLine, TestTubes, FileText, Phone, Calendar, Gift } from 'lucide-react-native'


export default function Index() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          rowGap: 20, justifyContent: "center",
          padding: 20
        }}>
          <View style={{ rowGap: 10 }}>
            <Text style={{ fontWeight: "bold", textAlign: "left" }} variant="titleLarge">Quick Actions</Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", gap: 10 }}>
              <Card style={{ width: '50%', backgroundColor: "#3b82f6" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Phone size={32} color="#2563eb" />
                  </View>
                  <Text variant="titleSmall" style={{ color: "white", textAlign: "center" }}>Book Free Consultation</Text>
                </Card.Content>
              </Card>
              <Card style={{ width: '50%', backgroundColor: "#22c55e" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dcfce7", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FileText size={32} color="#16a34a" />
                  </View>
                  <Text variant="titleSmall" style={{ color: "white", textAlign: "center" }}>Schedule Free Test</Text>
                </Card.Content>
              </Card>
            </View>
          </View>

          <View style={{ rowGap: 10 }}>
            <Text style={{ fontWeight: "bold", textAlign: "left" }} variant="titleLarge">Our Services</Text>
            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10 }}>
              <Card style={{ backgroundColor: "#eff6ff", width: "50%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Stethoscope size={32} color="#2563eb" />
                  </View>
                  <Text variant="titleSmall">Online Consultations</Text>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={20} color="#2563eb" />
                    <Text variant="labelMedium" style={{ color: "#2563eb" }}>10 mins</Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#f0fdf4", width: "50%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dcfce7", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ActivitySquare size={32} color="#16a34a" />
                  </View>
                  <Text variant="titleSmall">Full Body Checkup</Text>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={20} color="#16a34a" />
                    <Text variant="labelMedium" style={{ color: "#16a34a" }}>10 mins</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10 }}>
              <Card style={{ backgroundColor: "#fff7ed", width: "50%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#ffedd5", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Pills size={32} color="#ea580c" />
                  </View>
                  <Text variant="titleSmall">Order Medicines</Text>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>

                    <Text variant="labelMedium" style={{ color: "#ea580c" }}>Upto 20% OFF</Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#fff1f2", width: "50%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#ffe4e6", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Sparkles size={32} color="#e11d48" />
                  </View>
                  <Text variant="titleSmall">Skincare</Text>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>

                    <Text variant="labelMedium" style={{ color: "#e11d48" }}>30% OFF</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10 }}>
              <Card style={{ backgroundColor: "#faf5ff", width: "50%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#f3e8ff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ScanLine size={32} color="#9333ea" />
                  </View>
                  <Text variant="titleSmall">X-rays, MRIs & Scans</Text>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#eff6ff", width: "50%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TestTubes size={32} color="#2563eb" />
                  </View>
                  <Text variant="titleSmall">Lab Tests</Text>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={20} color="#2563eb" />
                    <Text variant="labelMedium" style={{ color: "#2563eb" }}>50 mins</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </View>

          <View style={{ rowGap: 10 }}>
            <Text style={{ fontWeight: "bold", textAlign: "left" }} variant="titleLarge">Special Offers</Text>
            <Card style={{ backgroundColor: "#fefce8" }}>
              <Card.Content style={{}}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Gift size={32} color="#ca8a04" />
                  <Text variant="titleSmall" style={{ color: "black", textAlign: "center" }}>First consultation 50% off!</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Calendar size={32} color="#16a34a" />
                  <Text variant="titleSmall" style={{ color: "black", textAlign: "center" }}>Book a health check-up, get a free follow-up</Text>
                </View>
              </Card.Content>
            </Card>
          </View>

          <View style={{ rowGap: 10 }}>
            <Text style={{ fontWeight: "bold", textAlign: "left" }} variant="titleLarge">Daily Health Tip</Text>
            <Card style={{ backgroundColor: "#f0fdf4" }}>
              <Card.Content style={{}}>
                <Text variant="titleSmall" style={{}}>Stay hydrated! Aim to drink at least 8 glasses of water daily for optimal health.</Text>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
