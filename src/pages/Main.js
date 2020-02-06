import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "react-navigation-hooks";

//components
import Navbar from "../components/Navbar";
import NavigationButtons from "../components/NavigationButtons";
import CardNoticias from "../components/CardNoticias";

function Main() {
  const imgs = {
    img1: require("../../assets/ifce.jpg"),
    img2: require("../../assets/brasildefato.jpg"),
    img3: require("../../assets/casatransformar.jpg")
  };

  const { navigate } = useNavigation();

  return (
    <View style={{ backgroundColor: "#EEEEEE", flexGrow: 1 }}>
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 10 }}>
          <Navbar />
          <NavigationButtons />
          <Text style={styles.title}>Noticias</Text>

          <CardNoticias
            link="https://ifce.edu.br/crato/noticias/projeto-de-estudantes-e-selecionado-para-programa-campus-mobile"
            imageUri={imgs.img1}
          />
          <CardNoticias
            link="https://www.brasildefato.com.br/2020/01/21/estudantes-cearenses-apresentam-aplicativo-lgbt-na-campus-mobile-em-sp/"
            imageUri={imgs.img2}
          />

          <CardNoticias
            link="https://www.brasildefato.com.br/2020/01/29/casa-transformar-oferece-acolhimento-a-pessoas-trans-em-fortaleza/"
            imageUri={imgs.img3}
          />

          {/* <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <Button
          title="Quero ajudar!"
          buttonStyle={{ backgroundColor: "#781e7a", borderRadius: 6 }}
          titleStyle={styles.titleButton}
          onPress={() => {
            navigate("Ajuda");
          }}
        />
      </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleButton: {
    fontSize: 20,
    fontFamily: "PoetsenOne-Regular"
  },
  title: {
    fontSize: 28,
    fontFamily: "PoetsenOne-Regular",
    alignSelf: "center",
    marginTop: 10
  }
});

export default Main;
