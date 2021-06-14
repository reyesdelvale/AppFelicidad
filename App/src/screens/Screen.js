import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";
// automatiza!!
function Screen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.aQuienLeVasACoRow}>
        <Text style={styles.aQuienLeVasACo}>¿A quién le vas a cobrar?</Text>
        <ImageBackground
          source={require("../assets/images/f96825fef9f452d829112f5098e0858f6b0d0f81.png")}
          resizeMode="cover"
          style={styles.z2102W003N001103BP12103Convertido}
          imageStyle={styles.z2102W003N001103BP12103Convertido_imageStyle}
        >
          <View style={styles.iconSearchFiller}></View>
          <View style={styles.iconSearch}>
            <View style={styles.ovalStack}>
              <Svg viewBox="0 0 24 24" style={styles.oval}>
                <Path
                  strokeWidth={0}
                  fill="rgba(42,51,61,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
                ></Path>
              </Svg>
              <View style={styles.color2}>
                <Svg viewBox="0 0 24 24" style={styles.color3}>
                  <Defs>
                    <Mask id="DADDzH" x={0} y={0} width={24} height={24}>
                      <Path
                        d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 Z"
                        fill="white"
                      />
                    </Mask>
                  </Defs>
                  <Path
                    strokeWidth={0}
                    fill="rgba(41,94,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    mask="url(#DADDzH)"
                    d="M0.00 0.00 L25.04 0.00 L25.04 25.04 L0.00 25.04 Z"
                  ></Path>
                </Svg>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.holaStack}>
        <Text style={styles.hola}>¡Hola!</Text>
        <View style={styles.elementTabDoubleActiveCopy11}>
          <Text style={styles.buttonText}>Internacional</Text>
          <Text style={styles.details}></Text>
        </View>
      </View>
      <View style={styles.iconArrowBackRow}>
        <View style={styles.iconArrowBack}>
          <View style={styles.maskStack}>
            <Svg viewBox="0 0 10 18" style={styles.mask}>
              <Path
                strokeWidth={0}
                fill="transparent"
                fillOpacity={1}
                strokeOpacity={1}
                d="M0.82 17.71 L0.82 18.00 C0.61 18.00 0.40 17.92 0.24 17.76 C-0.08 17.45 -0.08 16.94 0.24 16.62 L8.01 9.00 L0.24 1.38 C-0.08 1.06 -0.08 0.55 0.24 0.24 C0.56 -0.08 1.08 -0.08 1.40 0.24 L9.76 8.43 C10.08 8.74 10.08 9.26 9.76 9.57 L1.40 17.76 C1.25 17.92 1.04 18.00 0.82 18.00 Z"
              ></Path>
            </Svg>
            <View style={styles.color}>
              <Svg viewBox="0 0 10 18" style={styles.color1}>
                <Defs>
                  <Mask id="efMjYj" x={0} y={0} width={10} height={18}>
                    <Path
                      d="M0.82 17.71 L0.82 18.00 C0.61 18.00 0.40 17.92 0.24 17.76 C-0.08 17.45 -0.08 16.94 0.24 16.62 L8.01 9.00 L0.24 1.38 C-0.08 1.06 -0.08 0.55 0.24 0.24 C0.56 -0.08 1.08 -0.08 1.40 0.24 L9.76 8.43 C10.08 8.74 10.08 9.26 9.76 9.57 L1.40 17.76 C1.25 17.92 1.04 18.00 0.82 18.00 Z"
                      fill="white"
                    />
                  </Mask>
                </Defs>
                <Path
                  strokeWidth={0}
                  fill="rgba(83,103,122,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  mask="url(#efMjYj)"
                  d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                ></Path>
              </Svg>
            </View>
          </View>
        </View>
        <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      </View>
      <Text style={styles.title}>
        Tu opinión es súper importante para seguir construyendo el mejor equipo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  aQuienLeVasACo: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(83,103,122,1)",
    fontSize: 16,
    marginTop: 70,
    height: 0,
    width: 0,
    opacity: 0
  },
  z2102W003N001103BP12103Convertido: {
    height: 330,
    width: 343,
    backgroundColor: "transparent",
    flexDirection: "row",
    marginLeft: 3
  },
  z2102W003N001103BP12103Convertido_imageStyle: {},
  iconSearchFiller: {
    flex: 1,
    flexDirection: "row"
  },
  iconSearch: {
    height: 24,
    width: 24,
    marginRight: 3,
    marginTop: 148
  },
  oval: {
    position: "absolute",
    height: 24,
    width: 24,
    top: 1,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  color2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 26,
    width: 26
  },
  color3: {
    height: 26,
    width: 26,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalStack: {
    width: 26,
    height: 26,
    marginTop: -1,
    marginLeft: -1
  },
  aQuienLeVasACoRow: {
    height: 330,
    flexDirection: "row",
    marginTop: 202,
    marginLeft: 16,
    marginRight: 13
  },
  hola: {
    position: "absolute",
    top: 3,
    left: 0,
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 26,
    fontFamily: "nunito-regular",
    letterSpacing: 1
  },
  elementTabDoubleActiveCopy11: {
    position: "absolute",
    top: 0,
    left: 37,
    height: 40,
    width: 196
  },
  buttonText: {
    transform: [
      {
        rotate: "360.00deg"
      }
    ],
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(83,103,122,1)",
    fontSize: 16
  },
  details: {
    height: 16,
    width: 196,
    backgroundColor: "transparent",
    lineHeight: 16,
    textAlign: "center",
    color: "rgba(83,103,122,1)",
    fontSize: 12
  },
  holaStack: {
    width: 233,
    height: 40,
    marginTop: -444,
    marginLeft: 151
  },
  iconArrowBack: {
    height: 18,
    width: 10,
    marginTop: 3
  },
  mask: {
    position: "absolute",
    height: 18,
    width: 10,
    top: 3,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  color: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24
  },
  color1: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  maskStack: {
    width: 24,
    height: 24,
    marginTop: -3,
    marginLeft: -7
  },
  loremIpsum: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(42,52,61,1)",
    fontSize: 16,
    marginLeft: 107
  },
  iconArrowBackRow: {
    height: 24,
    flexDirection: "row",
    marginTop: -96,
    marginLeft: 23,
    marginRight: 143
  },
  title: {
    height: 40,
    width: 282,
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(82,103,123,1)",
    fontSize: 14,
    marginTop: 79,
    marginLeft: 47
  }
});

export default Screen;
