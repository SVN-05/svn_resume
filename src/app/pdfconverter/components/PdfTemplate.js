"use client";
import React, { useEffect, useState } from "react";
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import data from "../../../../public/pdfTemplates/data.json";

const PdfTemplate = ({ qrCode_base64 = "", logo_base64 = "" }) => {
  Font.register({
    family: "Raleway",
    format: "truetype",
    fonts: [
      {
        src: "/pdfTemplates/raleway/Raleway-Regular.ttf",
        fontWeight: "normal",
      },
      {
        src: "/pdfTemplates/raleway/Raleway-Medium.ttf",
        fontWeight: "medium",
      },
      {
        src: "/pdfTemplates/raleway/Raleway-SemiBold.ttf",
        fontWeight: "semibold",
      },
      {
        src: "/pdfTemplates/raleway/Raleway-Bold.ttf",
        fontWeight: "bold",
      },
    ],
  });

  Font.register({
    family: "Inter",
    format: "truetype",
    fonts: [
      {
        src: "/pdfTemplates/inter/Inter-Regular.ttf",
        fontWeight: "normal",
      },
    ],
  });

  const [splitData, setSplitData] = useState([]);

  const chunkArray = (arr = [], chunkSize = 14) => {
    const recurringArrays = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      const recurringChunk = arr.slice(i, i + chunkSize);
      recurringArrays.push(recurringChunk);
    }
    setSplitData([...recurringArrays]);
  };

  useEffect(() => {
    chunkArray(data?.invoices);
  }, []);

  const summary = [
    { text: "Pending Dues", amount: "₹ 0" },
    { text: "", amount: "+" },
    { text: "Charges for this Month", amount: "₹ 4526.00" },
    { text: "", amount: "=" },
    { text: "Amount Payable", amount: "₹ 4526.00" },
    { text: "Amount After Due Date (06Jul)", amount: "₹ 4644.00" },
  ];

  const tableTitles = [
    "S.No",
    "Product - Variant",
    "HSN Code",
    "No. of Unit",
    "Rate/Unit",
    "CGST",
    "SGST",
    "Total",
  ];

  const paymentOptions = [
    { text: "Click & Pay", link: "Payment Gateway" },
    { text: "UPI ID", link: "payrentz@paytm" },
  ];

  return (
    <Document>
      {splitData?.map((item, index) => {
        const isLastIndex = splitData?.length - 1 === index;
        return (
          <Page size="A4" key={index} style={styles.page}>
            <View>
              {index === 0 && (
                <View style={styles.section1}>
                  <View style={styles.footerRow}>
                    <View style={styles.flexCol}>
                      <Text style={styles.title}>Monthly Rental Invoice</Text>
                      <View style={styles.flexCol}>
                        <Text style={styles.customer_name}>
                          Mr. Customer Name
                        </Text>
                        <Text>10/11, Address Line 1</Text>
                        <Text>Address Line 2</Text>
                        <Text>City - 000 000</Text>
                        <View style={styles.regularFlexRow}>
                          <Text style={{ fontWeight: "600" }}>
                            Mobile Number
                          </Text>
                          <Text>9999999999</Text>
                        </View>
                        <View style={styles.regularFlexRow}>
                          <Text style={{ fontWeight: "600" }}>Email ID</Text>
                          <Text style={styles.highLight}>
                            customer-email@gmail.com
                          </Text>
                        </View>
                        <Text
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "10px",
                          }}
                        >
                          <Text style={{ fontWeight: "600", fontSize: "8px" }}>
                            Payrentz Customer ID:
                          </Text>{" "}
                          PR 01231
                        </Text>
                      </View>
                    </View>

                    <View style={styles.flexCol}>
                      <Image
                        style={{ width: 126, height: 33 }}
                        src={logo_base64}
                      />
                      <View style={styles.flexRow}>
                        <View style={styles.flexCol}>
                          <Text style={{ fontWeight: "600" }}>Invoice Id:</Text>
                          <Text style={{ fontWeight: "600" }}>
                            Invoice Date:
                          </Text>
                          <Text style={{ fontWeight: "600" }}>
                            Invoice Period:
                          </Text>
                          <Text style={{ fontWeight: "600" }}>Due Date:</Text>
                          <Text style={{ fontWeight: "600" }}>Status:</Text>
                          <Text style={{ fontWeight: "600" }}>
                            Payment Mode:
                          </Text>
                          <Text style={{ fontWeight: "600", marginTop: "4px" }}>
                            Invoice Amount:
                          </Text>
                        </View>
                        <View style={styles.flexCol}>
                          <Text style={{ alignSelf: "flex-end" }}>INV 001</Text>
                          <Text style={{ alignSelf: "flex-end" }}>
                            30 June 2023
                          </Text>
                          <Text style={{ alignSelf: "flex-end" }}>June</Text>
                          <Text style={{ alignSelf: "flex-end" }}>
                            06 July 2023
                          </Text>
                          <Text
                            style={{
                              alignSelf: "flex-end",
                              color: "#ED1F28",
                              fontWeight: "600",
                            }}
                          >
                            Unpaid
                          </Text>
                          <Text
                            style={{
                              alignSelf: "flex-end",
                              color: "#ED1F28",
                              fontWeight: "600",
                            }}
                          >
                            ---
                          </Text>
                          <Text
                            style={{
                              alignSelf: "flex-end",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            ₹ 4526.06
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.payment_summary_box}>
                    {summary?.map((item2, index2) => {
                      return (
                        <View key={index2} style={styles.summaryItem}>
                          <Text style={{ fontWeight: "600", color: "#2B5CAB" }}>
                            {item2?.text}
                          </Text>
                          <Text>{item2?.amount}</Text>
                        </View>
                      );
                    })}
                  </View>
                  <Text style={styles.subTitle}>Current Month Summary</Text>
                </View>
              )}
              <View>
                <View style={styles.tableHeader}>
                  {tableTitles?.map((item3, index3) => {
                    return (
                      <Text key={index3} style={{ fontWeight: "600" }}>
                        {item3}
                      </Text>
                    );
                  })}
                </View>
                {item?.map((item4, index4) => {
                  return (
                    <View key={index4} style={styles.tableRow}>
                      <Text style={{ flex: 0.7, textAlign: "center" }}>
                        {item4?.id}
                      </Text>
                      <Text style={{ flex: 2, paddingLeft: "20px" }}>
                        {item4?.product}
                      </Text>
                      <Text style={{ flex: 1.5, paddingLeft: "20px" }}>
                        {item4?.hsn_code}
                      </Text>
                      <Text style={{ flex: 1.5, paddingLeft: "10px" }}>
                        {item4?.no_of_units}
                      </Text>
                      <Text style={{ flex: 1 }}>{item4?.rate_unit}</Text>
                      <Text style={{ flex: 1, textAlign: "center" }}>
                        {item4?.cgst}
                      </Text>
                      <Text style={{ flex: 1, textAlign: "center" }}>
                        {item4?.sgst}
                      </Text>
                      <Text style={{ flex: 1, textAlign: "center" }}>
                        {item4?.total}
                      </Text>
                    </View>
                  );
                })}
              </View>
              {isLastIndex && (
                <View style={styles.parentFooter}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: "12px",
                      alignSelf: "flex-start",
                      marginTop: "20px",
                    }}
                  >
                    <Text style={{ fontWeight: "600", color: "#2B5CAB" }}>
                      Total in Words
                    </Text>
                    <Text>
                      Rupees Four Thousand Five Hundred and Twenty Six Only
                    </Text>
                  </View>
                  <Text style={styles.orangeText}>
                    Here How you can pay us Click the link below to pay
                  </Text>
                  <View style={{ marginTop: "20px", width: "100%" }}>
                    <View style={styles.footerRow}>
                      <View style={styles.flexCol}>
                        {paymentOptions?.map((item5, index5) => {
                          return (
                            <View key={index5} style={styles.flexRow}>
                              <Text
                                style={{ fontWeight: "700", fontSize: "10px" }}
                              >
                                {item5?.text}
                              </Text>
                              <Text style={styles.highLight}>
                                {item5?.link}
                              </Text>
                            </View>
                          );
                        })}
                      </View>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          columnGap: "20px",
                        }}
                      >
                        <Text style={{ fontWeight: "700", fontSize: "10px" }}>
                          Scan & Pay
                        </Text>
                        <Image
                          style={{ width: 57, height: 59 }}
                          src={qrCode_base64}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.footer}>
              <Text style={{ alignSelf: "flex-end" }}>
                {index + 1} / {splitData?.length}
              </Text>
              <View style={styles.greyLine} />
              <Text style={{ marginTop: "10px" }}>
                No: 14/20, Ground Floor, Mahalakshmi Street, Gandhi Road,
                Velachery, Chennai- 600042
              </Text>
              <View style={styles.footerRow}>
                <Text>Mobile: +91 89395 81818</Text>
                <Text>Email: rent@payrentz.com</Text>
                <Link>www.payrentz.com</Link>
                <Text>CIN No: 000000000000</Text>
                <Text>GSTIN: 33XXXXXXXXXX</Text>
              </View>
            </View>
          </Page>
        );
      })}
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: "8px",
    fontWeight: "500",
    fontFamily: "Raleway",
    justifyContent: "space-between",
    padding: "25px",
  },
  section: {
    margin: 20,
    padding: 10,
    flexGrow: 1,
  },
  section1: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "5px",
  },
  regularFlexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "5px",
  },
  title: {
    color: "#2B5CAB",
    fontSize: "14px",
    fontWeight: "700",
  },
  subTitle: {
    color: "#2B5CAB",
    fontSize: "10px",
    fontWeight: "700",
  },
  customer_name: {
    fontWeight: "600",
    fontSize: "12px",
    marginTop: "7px",
  },
  highLight: {
    color: "#2B5CAB",
    fontWeight: "500",
    textDecoration: "underline",
  },
  parentFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    fontFamily: "Inter",
    fontWeight: "400",
  },
  footerRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greyLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#DBDBDB",
  },
  payment_summary_box: {
    width: "100%",
    backgroundColor: "#F3F7FF",
    borderRadius: "10px",
    padding: "16px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "15px",
  },
  summaryItem: {
    display: "flex",
    flexDirection: "column",
    rowGap: "14px",
    alignItems: "flex-start",
  },
  tableHeader: {
    width: "100%",
    backgroundColor: "#F3F7FF",
    borderColor: "#D3D3D3",
    borderWidth: "1px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "7px",
    paddingBottom: "7px",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginTop: "10px",
  },
  tableRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#D3D3D3",
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  orangeText: {
    fontSize: "10px",
    fontWeight: "700",
    color: "#F27721",
    marginTop: "20px",
  },
});

export default PdfTemplate;
