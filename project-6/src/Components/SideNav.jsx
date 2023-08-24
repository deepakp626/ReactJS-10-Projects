import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { BiSolidDashboard } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import {BiSupport} from 'react-icons/bi'
import {BsArrowDownUp} from 'react-icons/bs'

const SideNav = () => {
  const location = useLocation()
  console.log(location)
  const isActiveLink = (link) => {
    return (location.pathname === link);
  }
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transections",
      link: "/transactions",
    },
  ];

  return (
    <>
      <Stack justifyContent="space-between" bg="white"
        border="lg" boxShadow={{ base: "none", lg: "lg" }} w={{ base: "full", lg: "256px" }} minH="100vh"
      >
        <Box>
          <Heading
            textAlign="center"
            mt="3.38rem"
            fontSize="1.25rem"
            color="#5F00D9"
          >
            @DOSOMECODING
          </Heading>
          <Box px="0.75rem">
            {navLinks.map((nav) => (
              <Link to={nav.link} key={nav.text}>
                <HStack
                 bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                 color={isActiveLink(nav.link)? "#171717": "#797E82"}
                  borderRadius="0.625rem"
                  p="0.75rem 1rem"
                  mt="0.25rem"
                  // color="#797E82"
                  _hover={{
                    backgroundColor: "#F3F3F7",
                    color: "#171717",
                  }}
                  
                >
                <Icon as={nav.icon} />
                <Text fontSize="0.875rem" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
              </Link>
            ))}
        </Box>
      </Box>

      <Link to="/support">
        <Box px="0.75rem" mb="3">
          <HStack
            borderRadius="0.625rem"
            p="0.75rem 1rem"
            mt="0.25rem"
            // color="#797E82"
            _hover={{
              backgroundColor: "#F3F3F7",
              color: "#171717",
            }}
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support")? "#171717": "#797E82"}
          >
            <Icon as={BiSupport} />
            <Text fontSize="0.875rem" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Box>
      </Link>
    </Stack >
    </>
  );
};

export default SideNav;
