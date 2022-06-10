/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function ProfileLayout(props) {
  const { profile, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileLayout")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="73px"
        left="909px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavItem1144")}
      ></Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="73px"
        left="1151px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavItem1145")}
      ></Flex>
      <Icon
        width="197px"
        height="197px"
        viewBox={{ minX: 0, minY: 0, width: 197, height: 197 }}
        paths={[
          {
            d: "M197 98.5C197 152.9 152.9 197 98.5 197C44.1 197 0 152.9 0 98.5C0 44.1 44.1 0 98.5 0C152.9 0 197 44.1 197 98.5Z",
            fill: "rgba(8,22,98,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="calc(50% - 98.5px - 407.5px)"
        left="calc(50% - 98.5px - 522.5px)"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
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
        top="325px"
        left="81px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile Name"
        {...getOverrideProps(overrides, "Profile Name")}
      ></Text>
      <Text
        fontFamily="Ubuntu"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="402px"
        left="83px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profile?.profileName}
        {...getOverrideProps(overrides, "ProfileNameValue")}
      ></Text>
      <Text
        fontFamily="Ubuntu"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="620px"
        left="81px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profile?.linkedInProfile}
        {...getOverrideProps(overrides, "temp")}
      ></Text>
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
        top="543px"
        left="81px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile Linked In"
        {...getOverrideProps(overrides, "Profile Linked In")}
      ></Text>
      <Text
        fontFamily="Luckiest Guy"
        fontSize="96px"
        fontWeight="400"
        color="rgba(252,175,175,1)"
        lineHeight="112.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="69px"
        left="159px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="M"
        {...getOverrideProps(overrides, "M1147")}
      ></Text>
      <Text
        fontFamily="Luckiest Guy"
        fontSize="96px"
        fontWeight="400"
        color="rgba(252,175,175,1)"
        lineHeight="112.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="69px"
        left="159px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="M"
        {...getOverrideProps(overrides, "M1148")}
      ></Text>
      <Icon
        width="38.28px"
        height="86px"
        viewBox={{ minX: 0, minY: 0, width: 38.27667236328125, height: 86 }}
        paths={[
          {
            d: "M29.7767 36.5C25.7767 29 36.2767 30.5 26.7767 0C7.61001 14.8333 -20.1233 52.8 22.2767 86L38.2767 63.5C36.7767 57 32.9767 42.5 29.7767 36.5Z",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="74px"
        left="135px"
        {...getOverrideProps(overrides, "Vector 1")}
      ></Icon>
    </View>
  );
}
