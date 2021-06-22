import React from "react";

import { Flex, Heading, Image, List, ListIcon, ListItem, useBreakpointValue } from "@chakra-ui/react";
import { IoMdMedal } from 'react-icons/io';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useCry } from "../../hooks/useCry";


export default function Ranking() {
  const { rank } = useCry();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  });
  
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
          alignItems="center"
          justifyContent="center"
          w={isDrawerSidebar ? "100%" : "60%"}
          p="2"
        >
          <Flex
            alignItems="flex-start"
            justifyContent="flex-start"
            minH="200px"
            w="100%"
            p="4"
            borderRadius="1rem"
            backgroundColor="rgba(0, 0, 0, 0.2)"
          >
            <List spacing={3}>
              { rank && rank.map(r => (
                <ListItem
                  key={r.crybaby}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={IoMdMedal}
                    boxSize="30px"
                    color={r.position === 1 ? "gold" : r.position === 2 ? "silver" : r.position === 3 ? "#cd7f32" : "white"}
                  />
                  <Heading
                    w="80px"
                    textAlign="center"
                  >
                    {r.total}
                  </Heading>
                  <Image
                    src={`./${r?.shame}`}
                    alt={r.crybaby}
                    maxH="50px"
                    maxW="50px"
                  />
                </ListItem>  
              ))}
            </List> 
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}