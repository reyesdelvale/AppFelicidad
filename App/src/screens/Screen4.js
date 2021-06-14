import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path, Defs, Mask, Stop, LinearGradient } from "react-native-svg";

function Screen4(props) {
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
                  <View style={styles.color3}>
                    <Svg viewBox="0 0 10 18" style={styles.color4}>
                      <Defs>
                        <Mask id="OIFWzW" x={0} y={0} width={10} height={18}>
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
                        mask="url(#OIFWzW)"
                        d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
            </View>
            <Text style={styles.registroDeEstados}>Registro de estados</Text>
            <View style={styles.aQuienLeVasACoRow}>
              <Text style={styles.aQuienLeVasACo}>
                ¿A quién le vas a cobrar?
              </Text>
              <View style={styles.elementCardStack}>
                <View style={styles.elementCard}>
                  <View style={styles.radius}>
                    <View style={styles.colorStack}>
                      <View style={styles.color}>
                        <View style={styles.shadow}>
                          <View style={styles.color1}>
                            <View style={styles.color2}></View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.border}></View>
                    </View>
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
                    <View style={styles.color5}>
                      <Svg viewBox="0 0 24 24" style={styles.color6}>
                        <Defs>
                          <Mask id="J34WSX" x={0} y={0} width={24} height={24}>
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
                          mask="url(#J34WSX)"
                          d="M0.00 0.00 L25.04 0.00 L25.04 25.04 L0.00 25.04 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
                <Text style={styles.marzo}>Marzo</Text>
                <View style={styles.rectangleCopy2}>
                  <Text style={styles.lun}>LUN</Text>
                </View>
                <View style={styles.rectangleCopy3}>
                  <Text style={styles.mar}>MAR</Text>
                </View>
                <View style={styles.rectangleCopy4}>
                  <Text style={styles.mie}>MIÉ</Text>
                </View>
                <View style={styles.rectangleCopy5}>
                  <Text style={styles.jue}>JUE</Text>
                </View>
                <View style={styles.rectangleCopy6}>
                  <Text style={styles.vie}>VIE</Text>
                </View>
                <View style={styles.rectangleCopy7}>
                  <Text style={styles.sab}>SÁB</Text>
                </View>
                <View style={styles.rectangleCopy8}>
                  <Text style={styles.dom}>DOM</Text>
                </View>
                <Text style={styles.style}>1</Text>
                <Text style={styles.style1}>8</Text>
                <Text style={styles.style2}>2</Text>
                <Text style={styles.style3}>9</Text>
                <Text style={styles.style4}>3</Text>
                <Text style={styles.style5}>10</Text>
                <Text style={styles.style6}>11</Text>
                <Text style={styles.style7}>12</Text>
                <Text style={styles.style8}>13</Text>
                <Text style={styles.style9}>14</Text>
                <Text style={styles.style10}>4</Text>
                <Text style={styles.style11}>5</Text>
                <Text style={styles.style12}>6</Text>
                <Text style={styles.style13}>7</Text>
                <Svg viewBox="-1 -1 38 38" style={styles.oval1}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy7}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy8}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy2}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy9}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy3}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy10}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy4}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy11}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy5}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy12}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy6}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy13}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Text style={styles.style14}>15</Text>
                <Text style={styles.style15}>22</Text>
                <Text style={styles.style16}>28</Text>
                <Text style={styles.style17}>16</Text>
                <Text style={styles.style18}>22</Text>
                <Text style={styles.style19}>29</Text>
                <Text style={styles.style20}>17</Text>
                <Text style={styles.style21}>23</Text>
                <Text style={styles.style22}>30</Text>
                <Text style={styles.style23}>18</Text>
                <Text style={styles.style24}>24</Text>
                <Text style={styles.style25}>31</Text>
                <Text style={styles.style26}>19</Text>
                <Text style={styles.style27}>25</Text>
                <Text style={styles.style28}>20</Text>
                <Text style={styles.style29}>26</Text>
                <Text style={styles.style30}>21</Text>
                <Text style={styles.style31}>27</Text>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy20}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy21}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy28}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy19}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy22}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy29}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy18}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(82,238,73,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy23}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy30}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy17}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy24}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy31}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy16}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy25}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy15}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy26}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy14}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-1 -1 38 38" style={styles.ovalCopy27}>
                  <Path
                    strokeWidth={2}
                    fill="rgba(255,255,255,1)"
                    stroke="rgba(204,206,211,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M18.00 35.00 C27.39 35.00 35.00 27.39 35.00 18.00 C35.00 8.61 27.39 1.00 18.00 1.00 C8.61 1.00 1.00 8.61 1.00 18.00 C1.00 27.39 8.61 35.00 18.00 35.00 Z"
                  ></Path>
                </Svg>
                <View style={styles.group11Copy}>
                  <View style={styles.group12Stack}>
                    <View style={styles.group12}>
                      <View style={styles.clip11Stack}>
                        <Svg viewBox="0 0 25.46 25.83" style={styles.clip11}>
                          <Path
                            strokeWidth={0}
                            fill="transparent"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 12.92 C0.00 20.05 5.70 25.83 12.73 25.83 L12.73 25.83 C19.76 25.83 25.46 20.05 25.46 12.92 L25.46 12.92 C25.46 5.78 19.76 0.00 12.73 0.00 L12.73 0.00 C5.70 0.00 0.00 5.78 0.00 12.92 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 25.46 25.83" style={styles.fill10}>
                          <Defs>
                            <LinearGradient
                              id="GwrtdQ"
                              x1="15%"
                              x2="85%"
                              y1="85%"
                              y2="15%"
                            >
                              <Stop
                                offset="0.00"
                                stopColor="rgba(86,196,42,1)"
                              />
                              <Stop
                                offset="1.00"
                                stopColor="rgba(82,244,77,1)"
                              />
                            </LinearGradient>
                            <Mask
                              id="KPV2YT"
                              x={0}
                              y={0}
                              width={25}
                              height={25}
                            >
                              <Path
                                d="M0.00 12.92 C0.00 20.05 5.70 25.83 12.73 25.83 L12.73 25.83 C19.76 25.83 25.46 20.05 25.46 12.92 L25.46 12.92 C25.46 5.78 19.76 0.00 12.73 0.00 L12.73 0.00 C5.70 0.00 0.00 5.78 0.00 12.92 Z"
                                fill="white"
                              />
                            </Mask>
                          </Defs>
                          <Path
                            strokeWidth={0}
                            fill="url(#GwrtdQ)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            mask="url(#KPV2YT)"
                            d="M0.00 12.92 C0.00 20.05 5.70 25.83 12.73 25.83 L12.73 25.83 C19.76 25.83 25.46 20.05 25.46 12.92 L25.46 12.92 C25.46 5.78 19.76 0.00 12.73 0.00 L12.73 0.00 C5.70 0.00 0.00 5.78 0.00 12.92 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <View style={styles.group35Copy}>
                      <View style={styles.fill31Row}>
                        <Svg viewBox="0 0 3.08 2.86" style={styles.fill31}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(29,38,45,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M3.08 1.43 C3.08 2.22 2.39 2.86 1.54 2.86 C0.69 2.86 0.00 2.22 0.00 1.43 C0.00 0.64 0.69 0.00 1.54 0.00 C2.39 0.00 3.08 0.64 3.08 1.43 "
                          ></Path>
                        </Svg>
                        <Svg viewBox="0 0 3.08 2.86" style={styles.fill33}>
                          <Path
                            strokeWidth={0}
                            fill="rgba(29,38,45,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 1.43 C0.00 2.22 0.69 2.86 1.54 2.86 C2.39 2.86 3.08 2.22 3.08 1.43 C3.08 0.64 2.39 0.00 1.54 0.00 C0.69 0.00 0.00 0.64 0.00 1.43 "
                          ></Path>
                        </Svg>
                      </View>
                      <Svg viewBox="0 0 11.82 3.42" style={styles.fill29}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(29,38,45,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M11.11 0.00 C10.92 0.00 10.73 0.08 10.60 0.22 C9.41 1.41 7.73 2.14 5.91 2.14 C4.09 2.14 2.41 1.41 1.23 0.22 C1.09 0.08 0.91 0.00 0.71 0.00 L0.70 0.00 C0.11 0.00 -0.23 0.66 0.18 1.07 C1.62 2.54 3.68 3.42 5.91 3.42 C8.13 3.42 10.20 2.54 11.64 1.07 C12.05 0.66 11.71 0.00 11.11 0.00 "
                        ></Path>
                      </Svg>
                    </View>
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
    height: 717,
    width: 376,
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
  color3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24
  },
  color4: {
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
    marginLeft: 23,
    marginRight: 144
  },
  registroDeEstados: {
    height: 32,
    width: 253,
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(8,49,131,1)",
    fontSize: 26,
    fontFamily: "nunito-regular",
    letterSpacing: 1,
    marginTop: 36,
    marginLeft: 62
  },
  aQuienLeVasACo: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(83,103,122,1)",
    fontSize: 16,
    marginTop: 125,
    height: 0,
    width: 0,
    opacity: 0
  },
  elementCard: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 397,
    width: 333
  },
  radius: {
    flex: 1
  },
  color: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 397,
    width: 333
  },
  shadow: {
    height: 397,
    width: 333,
    borderRadius: 16,
    shadowColor: "rgba(0,36,100,0.1)",
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowRadius: 12,
    shadowOpacity: 1,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  color1: {
    height: 397,
    width: 333
  },
  color2: {
    height: 397,
    width: 333,
    backgroundColor: "rgba(255,255,255,1)"
  },
  border: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 397,
    width: 333,
    borderRadius: 16,
    backgroundColor: "transparent"
  },
  colorStack: {
    width: 333,
    height: 397
  },
  iconSearch: {
    position: "absolute",
    top: 203,
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
  color5: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 26,
    width: 26
  },
  color6: {
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
  marzo: {
    position: "absolute",
    top: 12,
    left: 122,
    height: 32,
    width: 89,
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(46,98,255,1)",
    fontSize: 28,
    fontFamily: "nunito-800",
    letterSpacing: 1.076923076923077
  },
  rectangleCopy2: {
    position: "absolute",
    top: 48,
    left: 9,
    height: 24,
    width: 45,
    backgroundColor: "rgba(255,255,255,1)"
  },
  lun: {
    height: 12,
    width: 31,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 9
  },
  rectangleCopy3: {
    position: "absolute",
    top: 48,
    left: 54,
    height: 24,
    width: 44,
    backgroundColor: "rgba(255,255,255,1)"
  },
  mar: {
    height: 12,
    width: 31,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 7
  },
  rectangleCopy4: {
    position: "absolute",
    top: 48,
    left: 97,
    height: 24,
    width: 45,
    backgroundColor: "rgba(255,255,255,1)"
  },
  mie: {
    height: 12,
    width: 25,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 10
  },
  rectangleCopy5: {
    position: "absolute",
    top: 48,
    left: 142,
    height: 24,
    width: 45,
    backgroundColor: "rgba(255,255,255,1)"
  },
  jue: {
    height: 12,
    width: 23,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 11
  },
  rectangleCopy6: {
    position: "absolute",
    top: 48,
    left: 187,
    height: 24,
    width: 45,
    backgroundColor: "rgba(255,255,255,1)"
  },
  vie: {
    height: 12,
    width: 22,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 12
  },
  rectangleCopy7: {
    position: "absolute",
    top: 48,
    left: 232,
    height: 24,
    width: 44,
    backgroundColor: "rgba(255,255,255,1)"
  },
  sab: {
    height: 12,
    width: 28,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 8
  },
  rectangleCopy8: {
    position: "absolute",
    top: 48,
    left: 276,
    height: 24,
    width: 45,
    backgroundColor: "rgba(255,255,255,1)"
  },
  dom: {
    height: 12,
    width: 33,
    backgroundColor: "transparent",
    color: "rgba(46,98,255,1)",
    fontSize: 13,
    fontFamily: "nunito-700",
    marginTop: 6,
    marginLeft: 6
  },
  style: {
    position: "absolute",
    top: 112,
    left: 29,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style1: {
    position: "absolute",
    top: 174,
    left: 29,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style2: {
    position: "absolute",
    top: 112,
    left: 73,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style3: {
    position: "absolute",
    top: 174,
    left: 73,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style4: {
    position: "absolute",
    top: 112,
    left: 117,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style5: {
    position: "absolute",
    top: 174,
    left: 113,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style6: {
    position: "absolute",
    top: 174,
    left: 158,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style7: {
    position: "absolute",
    top: 174,
    left: 203,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style8: {
    position: "absolute",
    top: 174,
    left: 247,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style9: {
    position: "absolute",
    top: 174,
    left: 292,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style10: {
    position: "absolute",
    top: 112,
    left: 162,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style11: {
    position: "absolute",
    top: 112,
    left: 207,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style12: {
    position: "absolute",
    top: 112,
    left: 251,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style13: {
    position: "absolute",
    top: 112,
    left: 296,
    height: 16,
    width: 6,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  oval1: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy7: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy8: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy2: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 102,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy9: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 102,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy3: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 147,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy10: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 147,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy4: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 192,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy11: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 192,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy5: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 236,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy12: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 236,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy6: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 75,
    left: 281,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy13: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 137,
    left: 281,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  style14: {
    position: "absolute",
    top: 236,
    left: 25,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style15: {
    position: "absolute",
    top: 298,
    left: 25,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style16: {
    position: "absolute",
    top: 360,
    left: 25,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style17: {
    position: "absolute",
    top: 236,
    left: 69,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style18: {
    position: "absolute",
    top: 298,
    left: 69,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style19: {
    position: "absolute",
    top: 360,
    left: 69,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style20: {
    position: "absolute",
    top: 236,
    left: 113,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style21: {
    position: "absolute",
    top: 298,
    left: 113,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style22: {
    position: "absolute",
    top: 360,
    left: 113,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style23: {
    position: "absolute",
    top: 236,
    left: 158,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style24: {
    position: "absolute",
    top: 298,
    left: 158,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style25: {
    position: "absolute",
    top: 360,
    left: 158,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style26: {
    position: "absolute",
    top: 236,
    left: 203,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style27: {
    position: "absolute",
    top: 298,
    left: 203,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style28: {
    position: "absolute",
    top: 236,
    left: 247,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style29: {
    position: "absolute",
    top: 298,
    left: 247,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style30: {
    position: "absolute",
    top: 236,
    left: 292,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  style31: {
    position: "absolute",
    top: 298,
    left: 292,
    height: 16,
    width: 15,
    backgroundColor: "transparent",
    color: "rgba(8,49,131,1)",
    fontSize: 12,
    fontFamily: "nunito-800"
  },
  ovalCopy20: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy21: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy28: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 323,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy19: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy22: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy29: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 323,
    left: 58,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy18: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 102,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy23: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 102,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy30: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 323,
    left: 102,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy17: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 147,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy24: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 147,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy31: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 323,
    left: 147,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy16: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 192,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy25: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 192,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy15: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 236,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy26: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 236,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy14: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 199,
    left: 281,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalCopy27: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 261,
    left: 281,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group11Copy: {
    position: "absolute",
    top: 204,
    left: 107,
    height: 26,
    width: 26
  },
  group12: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 26,
    width: 26
  },
  clip11: {
    position: "absolute",
    height: 26,
    width: 25,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill10: {
    position: "absolute",
    height: 26,
    width: 25,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clip11Stack: {
    width: 25,
    height: 26
  },
  group35Copy: {
    position: "absolute",
    top: 9,
    left: 8,
    height: 9,
    width: 12
  },
  fill31: {
    height: 3,
    width: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill33: {
    height: 3,
    width: 3,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 4
  },
  fill31Row: {
    height: 3,
    flexDirection: "row",
    marginLeft: 1,
    marginRight: 1
  },
  fill29: {
    height: 3,
    width: 12,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2
  },
  group12Stack: {
    width: 26,
    height: 26
  },
  elementCardStack: {
    width: 337,
    height: 397,
    marginLeft: 6
  },
  aQuienLeVasACoRow: {
    height: 397,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 16,
    marginRight: 17
  },
  elementTabDoubleActiveCopy11: {
    position: "absolute",
    top: 77,
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
    width: 384,
    height: 717,
    marginLeft: 102
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

export default Screen4;
