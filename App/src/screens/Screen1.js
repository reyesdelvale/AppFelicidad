import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Svg, { Path, Stop, Defs, LinearGradient, Mask } from "react-native-svg";

function Screen1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.groupRow}>
        <View style={styles.group}></View>
        <View style={styles.rectangleStack}>
          <ImageBackground
            style={styles.rectangle}
            imageStyle={styles.rectangle_imageStyle}
            source={require("../assets/images/Gradient_vG6wvYU.png")}
          >
            <Text style={styles.queTanMotivadoTe}>
              ¿Qué tan motivado{"\n"}te sentiste hoy?
            </Text>
            <View style={styles.oval1Row}>
              <Svg viewBox="-1.5 -1.5 32 32" style={styles.oval1}>
                <Path
                  strokeWidth={3}
                  fill="rgba(255,255,255,1)"
                  stroke="rgba(8,49,131,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                ></Path>
              </Svg>
              <Text style={styles.muyDesmotivado}>Muy desmotivado</Text>
              <View style={styles.group7}>
                <View style={styles.group3Stack}>
                  <View style={styles.group3}>
                    <View style={styles.clip2Stack}>
                      <Svg viewBox="0 0 57 57" style={styles.clip2}>
                        <Path
                          strokeWidth={0}
                          fill="transparent"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 28.50 C0.00 44.24 12.76 57.00 28.50 57.00 L28.50 57.00 C44.24 57.00 57.00 44.24 57.00 28.50 L57.00 28.50 C57.00 12.76 44.24 0.00 28.50 0.00 L28.50 0.00 C12.76 0.00 0.00 12.76 0.00 28.50 "
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 57 57" style={styles.fill1}>
                        <Defs>
                          <LinearGradient
                            id="u51EqT"
                            x1="15%"
                            x2="85%"
                            y1="85%"
                            y2="15%"
                          >
                            <Stop offset="0.00" stopColor="rgba(255,31,61,1)" />
                            <Stop offset="1.00" stopColor="rgba(251,65,51,1)" />
                          </LinearGradient>
                          <Mask id="VpH2Ai" x={0} y={0} width={57} height={57}>
                            <Path
                              d="M0.00 28.50 C0.00 44.24 12.76 57.00 28.50 57.00 L28.50 57.00 C44.24 57.00 57.00 44.24 57.00 28.50 L57.00 28.50 C57.00 12.76 44.24 0.00 28.50 0.00 L28.50 0.00 C12.76 0.00 0.00 12.76 0.00 28.50 Z"
                              fill="white"
                            />
                          </Mask>
                        </Defs>
                        <Path
                          strokeWidth={0}
                          fill="url(#u51EqT)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          mask="url(#VpH2Ai)"
                          d="M0.00 28.50 C0.00 44.24 12.76 57.00 28.50 57.00 L28.50 57.00 C44.24 57.00 57.00 44.24 57.00 28.50 L57.00 28.50 C57.00 12.76 44.24 0.00 28.50 0.00 L28.50 0.00 C12.76 0.00 0.00 12.76 0.00 28.50 "
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                  <Svg viewBox="0 0 31.93 13.25" style={styles.fill38Copy}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M15.89 0.00 C23.04 -0.03 29.46 4.47 31.84 11.21 C32.12 11.99 31.71 12.85 30.93 13.13 C30.15 13.40 29.29 12.99 29.02 12.21 C27.05 6.67 21.78 2.97 15.90 3.00 C10.07 3.03 4.85 6.75 2.92 12.25 C2.64 13.03 1.79 13.44 1.00 13.17 C0.22 12.89 -0.19 12.04 0.08 11.26 C2.44 4.56 8.79 0.04 15.89 0.00 "
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 6.67 6.67" style={styles.fill40Copy}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M6.67 3.32 C6.68 5.16 5.19 6.66 3.35 6.67 C1.51 6.67 0.01 5.19 0.00 3.35 C-0.01 1.51 1.48 0.01 3.32 0.00 C5.16 -0.01 6.66 1.48 6.67 3.32 "
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 6.67 6.67" style={styles.fill42Copy}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.00 3.35 C0.01 5.19 1.51 6.68 3.35 6.67 C5.19 6.66 6.68 5.16 6.67 3.32 C6.66 1.48 5.16 -0.01 3.32 0.00 C1.48 0.01 -0.01 1.51 0.00 3.35 "
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
            <Text style={styles.aQuienLeVasACo}>¿A quién le vas a cobrar?</Text>
            <View style={styles.ovalCopyRow}>
              <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy}>
                <Path
                  strokeWidth={3}
                  fill="rgba(255,255,255,1)"
                  stroke="rgba(8,49,131,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                ></Path>
              </Svg>
              <Text style={styles.desmotivado}>Desmotivado</Text>
              <View style={styles.group8}>
                <View style={styles.group6Stack}>
                  <View style={styles.group6}>
                    <View style={styles.clip5Stack}>
                      <Svg viewBox="0 0 56 57" style={styles.clip5}>
                        <Path
                          strokeWidth={0}
                          fill="transparent"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 L0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 Z"
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 56 57" style={styles.fill4}>
                        <Defs>
                          <LinearGradient
                            id="CN0BIL"
                            x1="15%"
                            x2="85%"
                            y1="85%"
                            y2="15%"
                          >
                            <Stop
                              offset="0.00"
                              stopColor="rgba(246,117,33,1)"
                            />
                            <Stop
                              offset="1.00"
                              stopColor="rgba(255,179,43,1)"
                            />
                          </LinearGradient>
                          <Mask id="MocPqp" x={0} y={0} width={56} height={57}>
                            <Path
                              d="M28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 L0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 Z"
                              fill="white"
                            />
                          </Mask>
                        </Defs>
                        <Path
                          strokeWidth={0}
                          fill="url(#CN0BIL)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          mask="url(#MocPqp)"
                          d="M28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 L0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.group26Copy}>
                    <View style={styles.fill22Row}>
                      <Svg viewBox="0 0 6.67 6.67" style={styles.fill22}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M6.67 3.33 C6.67 5.17 5.17 6.67 3.33 6.67 C1.49 6.67 0.00 5.17 0.00 3.33 C0.00 1.49 1.49 0.00 3.33 0.00 C5.17 0.00 6.67 1.49 6.67 3.33 "
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 6.67 6.67" style={styles.fill24}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 3.33 C0.00 5.17 1.49 6.67 3.33 6.67 C5.17 6.67 6.67 5.17 6.67 3.33 C6.67 1.49 5.17 0.00 3.33 0.00 C1.49 0.00 0.00 1.49 0.00 3.33 "
                        ></Path>
                      </Svg>
                    </View>
                    <Svg viewBox="0 0 25.61 7.98" style={styles.fill20}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(29,38,45,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.53 7.98 C1.96 7.98 2.36 7.79 2.65 7.47 C5.22 4.69 8.87 3.00 12.80 3.00 C16.74 3.00 20.39 4.69 22.95 7.47 C23.24 7.79 23.65 7.98 24.08 7.98 L24.08 7.98 C25.38 7.98 26.10 6.44 25.23 5.48 C22.10 2.06 17.63 0.00 12.80 0.00 C7.99 0.00 3.51 2.07 0.38 5.48 C-0.49 6.43 0.23 7.98 1.53 7.98 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.ovalCopy2Row}>
              <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy2}>
                <Path
                  strokeWidth={3}
                  fill="rgba(255,255,255,1)"
                  stroke="rgba(8,49,131,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                ></Path>
              </Svg>
              <Text style={styles.neutral}>Neutral</Text>
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
                          <Mask id="wqwEvv" x={0} y={0} width={24} height={24}>
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
                          mask="url(#wqwEvv)"
                          d="M0.00 0.00 L25.04 0.00 L25.04 25.04 L0.00 25.04 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
                <View style={styles.group10}>
                  <View style={styles.group9Stack}>
                    <View style={styles.group9}>
                      <View style={styles.clip8Stack}>
                        <Svg viewBox="0 0 56 57" style={styles.clip8}>
                          <Path
                            strokeWidth={0}
                            fill="transparent"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 L28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 56 57" style={styles.fill7}>
                          <Defs>
                            <LinearGradient
                              id="SiKA0W"
                              x1="15%"
                              x2="85%"
                              y1="85%"
                              y2="15%"
                            >
                              <Stop
                                offset="0.00"
                                stopColor="rgba(253,174,52,1)"
                              />
                              <Stop
                                offset="1.00"
                                stopColor="rgba(255,242,93,1)"
                              />
                            </LinearGradient>
                            <Mask
                              id="IRaesj"
                              x={0}
                              y={0}
                              width={56}
                              height={57}
                            >
                              <Path
                                d="M0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 L28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 Z"
                                fill="white"
                              />
                            </Mask>
                          </Defs>
                          <Path
                            strokeWidth={0}
                            fill="url(#SiKA0W)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            mask="url(#IRaesj)"
                            d="M0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 L28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <Svg viewBox="0 0 6.67 6.67" style={styles.fill3Copy}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M6.67 3.33 C6.67 5.17 5.17 6.67 3.33 6.67 C1.49 6.67 0.00 5.17 0.00 3.33 C0.00 1.49 1.49 0.00 3.33 0.00 C5.17 0.00 6.67 1.49 6.67 3.33 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 6.67 6.67" style={styles.fill5Copy}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 3.33 C0.00 5.17 1.49 6.67 3.33 6.67 C5.17 6.67 6.67 5.17 6.67 3.33 C6.67 1.49 5.17 0.00 3.33 0.00 C1.49 0.00 0.00 1.49 0.00 3.33 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 33 3" style={styles.fill7Copy}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M31.50 3.00 L1.50 3.00 C0.67 3.00 0.00 2.33 0.00 1.50 C0.00 0.67 0.67 0.00 1.50 0.00 L31.50 0.00 C32.33 0.00 33.00 0.67 33.00 1.50 C33.00 2.33 32.33 3.00 31.50 3.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.ovalCopy3StackRow}>
              <View style={styles.ovalCopy3Stack}>
                <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy3}>
                  <Path
                    strokeWidth={3}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 14 14" style={styles.ovalCopy5}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(8,49,131,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                  ></Path>
                </Svg>
              </View>
              <Text style={styles.motivado}>Motivado</Text>
              <View style={styles.group11}>
                <View style={styles.group12Stack}>
                  <View style={styles.group12}>
                    <View style={styles.clip11Stack}>
                      <Svg viewBox="0 0 56 57" style={styles.clip11}>
                        <Path
                          strokeWidth={0}
                          fill="transparent"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 L28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 "
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 56 57" style={styles.fill10}>
                        <Defs>
                          <LinearGradient
                            id="FM0Jbd"
                            x1="15%"
                            x2="85%"
                            y1="85%"
                            y2="15%"
                          >
                            <Stop offset="0.00" stopColor="rgba(86,196,42,1)" />
                            <Stop offset="1.00" stopColor="rgba(82,244,77,1)" />
                          </LinearGradient>
                          <Mask id="hI9ksD" x={0} y={0} width={56} height={57}>
                            <Path
                              d="M0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 L28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 Z"
                              fill="white"
                            />
                          </Mask>
                        </Defs>
                        <Path
                          strokeWidth={0}
                          fill="url(#FM0Jbd)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          mask="url(#hI9ksD)"
                          d="M0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 L28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 "
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.group35Copy}>
                    <View style={styles.fill31Row}>
                      <Svg viewBox="0 0 6.67 6.67" style={styles.fill31}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M6.67 3.33 C6.67 5.17 5.17 6.67 3.33 6.67 C1.49 6.67 0.00 5.17 0.00 3.33 C0.00 1.49 1.49 0.00 3.33 0.00 C5.17 0.00 6.67 1.49 6.67 3.33 "
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 6.67 6.67" style={styles.fill33}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 3.33 C0.00 5.17 1.49 6.67 3.33 6.67 C5.17 6.67 6.67 5.17 6.67 3.33 C6.67 1.49 5.17 0.00 3.33 0.00 C1.49 0.00 0.00 1.49 0.00 3.33 "
                        ></Path>
                      </Svg>
                    </View>
                    <Svg viewBox="0 0 25.61 7.98" style={styles.fill29}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(29,38,45,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M24.08 0.00 C23.65 0.00 23.25 0.19 22.96 0.51 C20.39 3.29 16.74 4.98 12.81 4.98 C8.87 4.98 5.22 3.29 2.66 0.51 C2.37 0.19 1.96 0.00 1.53 0.00 L1.53 0.00 C0.23 0.00 -0.49 1.55 0.38 2.50 C3.51 5.92 7.98 7.98 12.81 7.98 C17.62 7.98 22.10 5.92 25.23 2.50 C26.10 1.55 25.38 0.00 24.08 0.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.ovalCopy4Row}>
              <Svg viewBox="-1.5 -1.5 32 32" style={styles.ovalCopy4}>
                <Path
                  strokeWidth={3}
                  fill="rgba(255,255,255,1)"
                  stroke="rgba(8,49,131,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M14.50 27.50 C21.68 27.50 27.50 21.68 27.50 14.50 C27.50 7.32 21.68 1.50 14.50 1.50 C7.32 1.50 1.50 7.32 1.50 14.50 C1.50 21.68 7.32 27.50 14.50 27.50 Z"
                ></Path>
              </Svg>
              <Text style={styles.muyMotivado}>¡Muy motivado!</Text>
              <View style={styles.group13}>
                <View style={styles.group15Stack}>
                  <View style={styles.group15}>
                    <View style={styles.clip14Stack}>
                      <Svg viewBox="0 0 56 57" style={styles.clip14}>
                        <Path
                          strokeWidth={0}
                          fill="transparent"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 L0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 Z"
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 56 57" style={styles.fill13}>
                        <Defs>
                          <LinearGradient
                            id="P4lha6"
                            x1="15%"
                            x2="85%"
                            y1="85%"
                            y2="15%"
                          >
                            <Stop offset="0.00" stopColor="rgba(51,170,43,1)" />
                            <Stop offset="1.00" stopColor="rgba(82,205,33,1)" />
                          </LinearGradient>
                          <Mask id="zBjL8w" x={0} y={0} width={56} height={57}>
                            <Path
                              d="M28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 L0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 Z"
                              fill="white"
                            />
                          </Mask>
                        </Defs>
                        <Path
                          strokeWidth={0}
                          fill="url(#P4lha6)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          mask="url(#zBjL8w)"
                          d="M28.00 0.00 C12.54 0.00 0.00 12.76 0.00 28.50 L0.00 28.50 C0.00 44.24 12.54 57.00 28.00 57.00 L28.00 57.00 C43.46 57.00 56.00 44.24 56.00 28.50 L56.00 28.50 C56.00 12.76 43.46 0.00 28.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                  <View style={styles.group17Copy}>
                    <View style={styles.fill131Row}>
                      <Svg viewBox="0 0 6.67 6.67" style={styles.fill131}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M6.67 3.33 C6.67 5.17 5.17 6.67 3.33 6.67 C1.49 6.67 0.00 5.17 0.00 3.33 C0.00 1.49 1.49 0.00 3.33 0.00 C5.17 0.00 6.67 1.49 6.67 3.33 "
                        ></Path>
                      </Svg>
                      <Svg viewBox="0 0 6.67 6.67" style={styles.fill15}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 3.33 C0.00 5.17 1.49 6.67 3.33 6.67 C5.17 6.67 6.67 5.17 6.67 3.33 C6.67 1.49 5.17 0.00 3.33 0.00 C1.49 0.00 0.00 1.49 0.00 3.33 "
                        ></Path>
                      </Svg>
                    </View>
                    <Svg viewBox="0 0 31.93 13.28" style={styles.fill11}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(29,38,45,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M15.98 13.28 C8.83 13.28 2.44 8.75 0.08 1.99 C-0.19 1.21 0.22 0.36 1.01 0.08 C1.79 -0.19 2.64 0.23 2.92 1.01 C4.85 6.55 10.10 10.28 15.98 10.28 C21.82 10.28 27.06 6.59 29.02 1.10 C29.29 0.32 30.15 -0.09 30.93 0.19 C31.71 0.47 32.12 1.32 31.84 2.10 C29.46 8.79 23.08 13.28 15.98 13.28 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.elementTabDoubleActiveCopy11}>
            <Text style={styles.buttonText}>Internacional</Text>
            <Text style={styles.details}></Text>
          </View>
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
                  <Mask id="izBqRc" x={0} y={0} width={10} height={18}>
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
                  mask="url(#izBqRc)"
                  d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                ></Path>
              </Svg>
            </View>
          </View>
        </View>
        <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  group: {
    height: 2,
    width: 2,
    marginTop: 246
  },
  rectangle: {
    position: "absolute",
    top: 0,
    height: 700,
    backgroundColor: "transparent",
    left: 0,
    right: 9
  },
  rectangle_imageStyle: {},
  queTanMotivadoTe: {
    backgroundColor: "transparent",
    lineHeight: 30,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 24,
    fontFamily: "nunito-regular",
    letterSpacing: 0.9230769230769231,
    marginTop: 36,
    marginLeft: 79
  },
  oval1: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 15
  },
  muyDesmotivado: {
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693,
    marginLeft: 15,
    marginTop: 13
  },
  group7: {
    height: 57,
    width: 57,
    marginLeft: 33
  },
  group3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 57,
    width: 57
  },
  clip2: {
    position: "absolute",
    height: 57,
    width: 57,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill1: {
    position: "absolute",
    height: 57,
    width: 57,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip2Stack: {
    width: 57,
    height: 57
  },
  fill38Copy: {
    position: "absolute",
    height: 13,
    width: 32,
    top: 28,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill40Copy: {
    position: "absolute",
    height: 7,
    width: 7,
    top: 18,
    left: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill42Copy: {
    position: "absolute",
    height: 7,
    width: 7,
    top: 18,
    left: 34,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group3Stack: {
    width: 57,
    height: 57
  },
  oval1Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 32,
    marginRight: 35
  },
  aQuienLeVasACo: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(83,103,122,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 16,
    height: 0,
    width: 0,
    opacity: 0
  },
  ovalCopy: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 15
  },
  desmotivado: {
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693,
    marginLeft: 15,
    marginTop: 13
  },
  group8: {
    height: 57,
    width: 57,
    marginLeft: 77
  },
  group6: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 57,
    width: 57
  },
  clip5: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill4: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip5Stack: {
    width: 56,
    height: 57,
    marginLeft: 1
  },
  group26Copy: {
    position: "absolute",
    top: 17,
    left: 16,
    height: 21,
    width: 26
  },
  fill22: {
    height: 7,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill24: {
    height: 7,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  fill22Row: {
    height: 7,
    flexDirection: "row",
    marginLeft: 1,
    marginRight: 1
  },
  fill20: {
    height: 8,
    width: 26,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 6
  },
  group6Stack: {
    width: 57,
    height: 57
  },
  ovalCopyRow: {
    height: 57,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 32,
    marginRight: 35
  },
  ovalCopy2: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 37
  },
  neutral: {
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693,
    marginLeft: 15,
    marginTop: 35
  },
  iconSearch: {
    position: "absolute",
    top: 0,
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
  group10: {
    position: "absolute",
    top: 22,
    left: 0,
    height: 57,
    width: 57
  },
  group9: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 57,
    width: 57
  },
  clip8: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill7: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip8Stack: {
    width: 56,
    height: 57,
    marginLeft: 1
  },
  fill3Copy: {
    position: "absolute",
    height: 7,
    width: 7,
    top: 18,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill5Copy: {
    position: "absolute",
    height: 7,
    width: 7,
    top: 18,
    left: 34,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill7Copy: {
    position: "absolute",
    height: 3,
    width: 33,
    top: 34,
    left: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group9Stack: {
    width: 57,
    height: 57
  },
  iconSearchStack: {
    width: 76,
    height: 79,
    marginLeft: 131
  },
  ovalCopy2Row: {
    height: 79,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 32,
    marginRight: 16
  },
  ovalCopy3: {
    position: "absolute",
    height: 32,
    width: 32,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy5: {
    position: "absolute",
    height: 14,
    width: 14,
    top: 7,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy3Stack: {
    width: 32,
    height: 32,
    marginTop: 15
  },
  motivado: {
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693,
    marginLeft: 15,
    marginTop: 13
  },
  group11: {
    height: 57,
    width: 57,
    marginLeft: 114
  },
  group12: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 57,
    width: 57
  },
  clip11: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill10: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip11Stack: {
    width: 56,
    height: 57,
    marginLeft: 1
  },
  group35Copy: {
    position: "absolute",
    top: 17,
    left: 16,
    height: 21,
    width: 26
  },
  fill31: {
    height: 7,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill33: {
    height: 7,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  fill31Row: {
    height: 7,
    flexDirection: "row",
    marginLeft: 1,
    marginRight: 1
  },
  fill29: {
    height: 8,
    width: 26,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 6
  },
  group12Stack: {
    width: 57,
    height: 57
  },
  ovalCopy3StackRow: {
    height: 57,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 32,
    marginRight: 35
  },
  ovalCopy4: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 14
  },
  muyMotivado: {
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 20,
    fontFamily: "nunito-regular",
    letterSpacing: 0.7692307692307693,
    marginLeft: 15,
    marginTop: 13
  },
  group13: {
    height: 57,
    width: 57,
    marginLeft: 57
  },
  group15: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 57,
    width: 57
  },
  clip14: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill13: {
    position: "absolute",
    height: 57,
    width: 56,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip14Stack: {
    width: 56,
    height: 57
  },
  group17Copy: {
    position: "absolute",
    top: 17,
    left: 12,
    height: 27,
    width: 33
  },
  fill131: {
    height: 7,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill15: {
    height: 7,
    width: 7,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 9
  },
  fill131Row: {
    height: 7,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 5,
    marginRight: 5
  },
  fill11: {
    height: 13,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5
  },
  group15Stack: {
    width: 57,
    height: 57
  },
  ovalCopy4Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 32,
    marginRight: 35
  },
  elementTabDoubleActiveCopy11: {
    position: "absolute",
    top: 24,
    left: 188,
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
    height: 700,
    flex: 1,
    marginLeft: 102
  },
  groupRow: {
    height: 700,
    flexDirection: "row",
    marginTop: 64,
    marginLeft: -104,
    marginRight: -9
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
    marginTop: -732,
    marginLeft: 23,
    marginRight: 143
  }
});

export default Screen1;
