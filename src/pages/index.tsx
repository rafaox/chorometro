import React, { FormEvent, useEffect, useState } from "react";

import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { useCry } from "../hooks/useCry";

export default function Home() {
  const { cry, toCry } = useCry();
  const [buttonMessage, setButtonMessage] = useState('');

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  });

  useEffect(() => {
    setButtonMessage('Chorar');
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (buttonMessage === 'Chorar')
      setButtonMessage('Chorar mais');
    else if (buttonMessage === 'Chorar mais')
      setButtonMessage('Continuar chorando');
    else
      setButtonMessage('Seu nível de chorão é mais de 8000!');
    
    toCry();
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      h="100%"
    >
      <Header />

      <Flex
        w="100%"
        maxWidth={1480}
        mx="auto"
        px="6"
        justifyContent={isDrawerSidebar ? "center" : "space-between"}
      >
        <Sidebar />

        <Flex
          direction="column"
          onSubmit={handleSubmit}
          alignItems="center"
          justifyContent="center"
          as="form"
          w="100%"
          p="4"
          borderRadius="1rem"
          backgroundColor="rgba(0, 0, 0, 0.2)"
        >
          <Button
            type="submit"
            w="100%"
            colorScheme="white"
            variant="outline"
            onClick={handleSubmit}
            mb={isDrawerSidebar ? "4" : "0"}
          >
            {buttonMessage}
          </Button>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minH="300px"
            textAlign="center"
          >
            <Image
              src={`./${cry?.shame}`}
              display="flex"
              alignItems="center"
              justifyContent="center"
              alt="crybaby"
              h="100%"
              w="100%"
              maxH="100px"
              maxW="100px"
              borderWidth="5px"
              borderColor="white"
              borderRadius="50%"
              borderStyle="solid"
              backgroundSize="contain"
              mb="4"
            />

            <Heading
              as="h3"
              color="white"
              fontSize="1.5rem"
            >
              {cry?.cry}
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
