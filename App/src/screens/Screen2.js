import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";
// HACKING..
function Screen2(props) {
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
                        <Mask id="ejcOS4" x={0} y={0} width={10} height={18}>
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
                        mask="url(#ejcOS4)"
                        d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
            </View>
            <Text style={styles.indicanosElMotivo}>
              Indícanos el motivo de tu estado, eligiendo una de las opciones:
            </Text>
            <View style={styles.aQuienLeVasACoRow}>
              <Text style={styles.aQuienLeVasACo}>
                ¿A quién le vas a cobrar?
              </Text>
              <View style={styles.iconSearchStack}>
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
                          <Mask id="sHkZm7" x={0} y={0} width={24} height={24}>
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
                          mask="url(#sHkZm7)"
                          d="M0.00 0.00 L25.04 0.00 L25.04 25.04 L0.00 25.04 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
                <View style={styles.helperStack}>
                  <Text style={styles.helper}>Helper (in context)</Text>
                  <Text style={styles.ambienteNormalNada}>
                    Ambiente normal{"\n"}
                    {"\n"}Nada nuevo{"\n"}
                    {"\n"}Problemas en ambientes de desarrollo{"\n"}
                    {"\n"}Problemas en las herramientas de trabajo{"\n"}
                    {"\n"}Problemas en una reunión{"\n"}
                    {"\n"}Problemas encontrados en la app{"\n"}
                    {"\n"}Problemas por situación compleja del equipo{"\n"}
                    {"\n"}Problemas por un mal recibimiento{"\n"}
                    {"\n"}Problemas en credenciales{"\n"}
                    {"\n"}Satisfacción por un buen recibimiento{"\n"}
                    {"\n"}Satisfacción por apoyo del equipo{"\n"}
                    {"\n"}Satisfacción por finalizar tema en la app{"\n"}
                    {"\n"}Satisfacción por que cerramos una buena reunión{"\n"}
                    {"\n"}Satisfacción por que se solucionó un problema
                  </Text>
                  <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy7}>
                    <Path
                      strokeWidth={3}
                      fill="rgba(255,255,255,1)"
                      stroke="rgba(8,49,131,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                    ></Path>
                  </Svg>
                </View>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy6}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy8}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy9}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy10}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy11}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy12}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy13}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy14}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy15}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy16}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy17}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy18}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy19}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
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
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    flexDirection: "row"
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
    height: 1541,
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
  indicanosElMotivo: {
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
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(83,103,122,1)",
    fontSize: 16,
    marginTop: 61,
    height: 0,
    width: 0,
    opacity: 0
  },
  iconSearch: {
    position: "absolute",
    top: 139,
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
  helper: {
    position: "absolute",
    left: 0,
    bottom: 1037,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(82,103,123,1)",
    fontSize: 12,
    height: 0,
    width: 0,
    opacity: 0
  },
  ambienteNormalNada: {
    position: "absolute",
    top: 0,
    left: 46,
    height: 1120,
    width: 245,
    backgroundColor: "transparent",
    lineHeight: 28,
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693
  },
  ovalCopy7: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 55,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  helperStack: {
    top: 0,
    left: 0,
    width: 330,
    height: 1120,
    position: "absolute"
  },
  ovalCopy6: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 1,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy8: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 111,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy9: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 195,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy10: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 281,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy11: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 366,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy12: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 448,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy13: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 533,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy14: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 617,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy15: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 700,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy16: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 784,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy17: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 867,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy18: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 953,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy19: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 1064,
    left: 2,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  iconSearchStack: {
    width: 331,
    height: 1120,
    marginLeft: 12
  },
  aQuienLeVasACoRow: {
    height: 1120,
    flexDirection: "row",
    marginTop: 39,
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
    height: 1541,
    marginLeft: 103
  },
  groupRow: {
    height: 1541,
    flexDirection: "row",
    flex: 1,
    marginRight: -9,
    marginLeft: -104,
    marginTop: 11
  }
});

export default Screen2;
