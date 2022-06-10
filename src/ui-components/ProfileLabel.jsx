/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ProfileLabel(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="215px"
      height="41px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ProfileLabel")}
    >
      <Text
        fontFamily="Ubuntu"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="42.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile Name"
        {...getOverrideProps(overrides, "Profile Name")}
      ></Text>
    </View>
  );
}
