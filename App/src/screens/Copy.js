import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";

function Copy(props) {
  return (
    <View style={styles.container}>
      <View style={styles.groupRow}>
        <View style={styles.group}></View>
        <View style={styles.rectangleStack}>
          <View style={styles.rectangle}>
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
                        <Mask id="ji930G" x={0} y={0} width={10} height={18}>
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
                        mask="url(#ji930G)"
                        d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
            </View>
            <Text style={styles.hayAlgunaSugerenc}>
              ¿Hay alguna sugerencia o comentario que nos ayude a mejorar?
            </Text>
            <View style={styles.aQuienLeVasACoStackStack}>
              <View style={styles.aQuienLeVasACoStack}>
                <Text style={styles.aQuienLeVasACo}>
                  ¿A quién le vas a cobrar?
                </Text>
                <View style={styles.container}>
                  <Text style={styles.label}>Cuéntanos tu opinión</Text>
                  <View style={styles.labelFiller}></View>
                  <Text style={styles.helper}>Helper (in context)</Text>
                </View>
              </View>
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
                        <Mask id="Blt5RI" x={0} y={0} width={24} height={24}>
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
                        mask="url(#Blt5RI)"
                        d="M0.00 0.00 L25.04 0.00 L25.04 25.04 L0.00 25.04 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.elementTabDoubleActiveCopy11}>
            <Text style={styles.buttonText}>Internacional</Text>
            <Text style={styles.details}></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 311,
    right: 0,
    borderWidth: 1,
    borderColor: "rgba(131,147,163,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group: {
    height: 2,
    width: 2,
    marginTop: 299
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 717,
    width: 375,
    backgroundColor: "rgba(245,249,255,1)"
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
    marginTop: 21,
    marginLeft: 22,
    marginRight: 144
  },
  hayAlgunaSugerenc: {
    height: 78,
    width: 245,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693,
    marginTop: 38,
    marginLeft: 64
  },
  aQuienLeVasACo: {
    position: "absolute",
    top: 58,
    left: 0,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(83,103,122,1)",
    fontSize: 16,
    height: 0,
    width: 0,
    opacity: 0
  },
  label: {
    height: 24,
    width: 311,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(82,103,123,1)",
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16
  },
  labelFiller: {
    flex: 1
  },
  helper: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(82,103,123,1)",
    fontSize: 12,
    marginBottom: 231,
    marginLeft: 12,
    height: 0,
    width: 0,
    opacity: 0
  },
  aQuienLeVasACoStack: {
    top: 0,
    left: 0,
    height: 311,
    position: "absolute",
    right: 0
  },
  iconSearch: {
    position: "absolute",
    top: 136,
    height: 24,
    width: 24,
    right: 0
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
  aQuienLeVasACoStackStack: {
    height: 311,
    marginTop: 42,
    marginLeft: 15,
    marginRight: 17
  },
  elementTabDoubleActiveCopy11: {
    position: "absolute",
    top: 77,
    left: 187,
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
  rectangleStack: {
    width: 383,
    height: 717,
    marginLeft: 103
  },
  groupRow: {
    height: 717,
    flexDirection: "row",
    flex: 1,
    marginRight: -9,
    marginLeft: -104,
    marginTop: 11
  }
});

export default Copy;
