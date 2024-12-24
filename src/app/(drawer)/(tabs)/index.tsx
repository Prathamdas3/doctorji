import { SafeAreaView, ScrollView, View, Image } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { Clock, Stethoscope, ActivitySquare, PillIcon as Pills, Sparkles, ScanLine, TestTubes, FileText, Phone } from 'lucide-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { MoveRight } from 'lucide-react-native'


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

              <Text style={{ fontWeight: "bold", color: "#f97316" }}>Enable</Text> <MoveRight color="#f97316" size={20} />
            </View>
          </View>
        </LinearGradient>
        <View style={{
          flex: 1,
          rowGap: 20, justifyContent: "center",
          padding: 20
        }}>

          <View style={{ rowGap: 10 }}>
            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10, alignSelf: "center" }}>
              <Card style={{ backgroundColor: "#eff6ff", width: "33%", height: "90%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Online Consultations</Text>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('@/src/assets/images/image_1.png')} style={{ width: 65, height: 65 }} />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={20} color="#2563eb" />
                    <Text variant="labelMedium" style={{ color: "#2563eb" }}>10 mins</Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#f0fdf4", width: "33%", height: "90%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Full Body Checkup</Text>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dcfce7", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('@/src/assets/images/image_2.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={20} color="#16a34a" />
                    <Text variant="labelMedium" style={{ color: "#16a34a" }}>10 mins</Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#fff7ed", width: "33%", height: "90%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Order Medicines</Text>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#ffedd5", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('@/src/assets/images/image_4.png')} style={{ width: 65, height: 65 }} />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>

                    <Text variant="labelMedium" style={{ color: "#ea580c" }}>Upto 20% OFF</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
            <View style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", gap: 10, alignSelf: "center" }}>
              <Card style={{ backgroundColor: "#fff1f2", width: "33%", height: "99.8%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Skincare</Text>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#ffe4e6", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('@/src/assets/images/image_5.png')} style={{ width: 40, height: 60 }} />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>

                    <Text variant="labelMedium" style={{ color: "#e11d48" }}>30% OFF</Text>
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#faf5ff", width: "33%", height: "99.8%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>X-rays, MRIs & Scans</Text>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#f3e8ff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('@/src/assets/images/image_3.png')} style={{ width: 65, height: 65 }} />
                  </View>
                </Card.Content>
              </Card>
              <Card style={{ backgroundColor: "#eff6ff", width: "33%", height: "99.8%" }}>
                <Card.Content style={{ display: "flex", alignItems: "center", justifyContent: "center", rowGap: 5 }}>
                  <Text variant="labelLarge" style={{ textAlign: "center", color: "#536474", fontWeight: "semibold" }}>Lab Tests</Text>
                  <View style={{ width: 60, height: 60, borderRadius: 999, backgroundColor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('@/src/assets/images/image_6.png')} style={{ width: 50, height: 50 }} />
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Clock size={20} color="#2563eb" />
                    <Text variant="labelMedium" style={{ color: "#2563eb" }}>50 mins</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>

          </View>

          <View style={{ display: "flex", flexDirection: "row", justifyContent:"space-around",alignItems:"center",gap: 10, padding: 10 }}>
            <View style={{ rowGap: 8, display: "flex", alignItems: "flex-start" }}>
              <View style={{ borderWidth: 2, borderColor: "gray", borderRadius: 999, paddingVertical: 3, paddingHorizontal: 8 }}>
                <Text variant="titleSmall" style={{ textAlign: "center" }}>SKIN CONCERNS?</Text>
              </View>
              <View>
                <Text variant="titleLarge">
                  Avail a <Text variant="titleLarge" style={{ fontWeight: "bold", color: "#0891b2" }}>FREE</Text>
                </Text>
                <Text variant="titleLarge" style={{ fontWeight: "bold", color: "#0891b2" }}>Cosmetologist</Text>
                <Text variant="titleLarge"><Text variant="titleLarge" style={{ fontWeight: "bold" }}>Consult</Text><Text> today!</Text></Text>
              </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <Image source={require("@/src/assets/images/doctor_1.png")} style={{width:100,height:150}}/>
            </View>

          </View>


          <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Frequently Booked Health Checks</Text>
            <View style={{ width: 80, padding: 4, borderRadius: 999, backgroundColor: '#3b82f6', display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: 'white', fontWeight: "bold" }}>View All</Text>
            </View>
          </View>

          <View style={{ display: "flex", gap: 10, flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ backgroundColor: "transparent", width: "50%", borderRadius: 30 }}>
              <LinearGradient
                colors={['#bfdbfe', '#93c5fd']}
                style={{ borderRadius: 10, padding: 8, }}
                start={[0, 0]}
                end={[1, 0]}
              >

                <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#3b82f6" }}>76+ Tests</Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Ayushman Basic
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Health Check
                </Text>
                <LinearGradient colors={['#0891b2', '#1e40af']}
                  style={{ borderRadius: 10, flex: 1, padding: 8, }}
                  start={[0, 0]}
                  end={[1, 0]}>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                    <View style={{ borderRightWidth: 1, borderRightColor: "black", display: "flex", flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "flex-start", paddingHorizontal: 5 }}>
                      <Text variant="titleSmall" style={{ color: "#dbeafe", fontWeight: "bold" }}>{String.fromCodePoint(0x20B9)}999</Text>
                      <Text variant="labelMedium" style={{ textDecorationLine: "line-through", color: '#dbeafe' }}>{String.fromCodePoint(0x20B9)}2400</Text>
                    </View>
                    <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#dbeafe", marginLeft: 10 }}>60% OFF</Text>
                  </View>
                </LinearGradient>

              </LinearGradient>
            </View>
            <View style={{ backgroundColor: "transparent", width: "50%" }}>
              <LinearGradient
                colors={['#fefce8', '#fef9c3']}
                style={{ borderRadius: 10, padding: 8, }}
                start={[0, 0]}
                end={[1, 0]}
              >
                <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#3b82f6" }}>83+ Tests</Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Ayushman Vital
                </Text>
                <Text variant="titleMedium" style={{ fontWeight: "bold" }}>Health Check
                </Text>
                <LinearGradient colors={['#0891b2', '#1e40af']}
                  style={{ borderRadius: 10, flex: 1, padding: 8, }}
                  start={[0, 0]}
                  end={[1, 0]}>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                    <View style={{ borderRightWidth: 1, borderRightColor: "black", display: "flex", flexDirection: "row", alignItems: "center", gap: 5, justifyContent: "flex-start", paddingHorizontal: 5 }}>
                      <Text variant="titleSmall" style={{ color: "#dbeafe", fontWeight: "bold" }}>{String.fromCodePoint(0x20B9)}1899</Text>
                      <Text variant="labelMedium" style={{ textDecorationLine: "line-through", color: '#dbeafe' }}>{String.fromCodePoint(0x20B9)}4200</Text>
                    </View>
                    <Text variant="titleSmall" style={{ fontWeight: "bold", color: "#dbeafe", marginLeft: 10 }}>60% OFF</Text>
                  </View>
                </LinearGradient>
              </LinearGradient>
            </View>
          </View>

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
