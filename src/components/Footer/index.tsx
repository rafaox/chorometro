import { Flex, Heading } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex
      alignItems="center"
      justifyItems="center"
    >
      <Heading
        as="h2"
        size="2"
        p="4"
      >
        POWERED BY Iniciativa Combeiros
      </Heading>
    </Flex>
  );
}