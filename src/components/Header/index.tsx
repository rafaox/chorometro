import React from "react";

import { Flex, Heading, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from "../../hooks/useSidebarDrawerHook";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent={!isWideVersion ? "space-between" : "center"}
      py="6"
      px="4"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      
      <Heading as="h1" >CHORÔMETRO v1.1</Heading>

      {!isWideVersion && (
        <div></div>
      )}
    </Flex>
  );
}