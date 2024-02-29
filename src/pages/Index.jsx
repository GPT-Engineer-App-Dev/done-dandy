import React from "react";
import { Box, Button, Container, Flex, Heading, Icon, Stack, Text, VStack, HStack, Image, Spacer, Link, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub, FaPlus } from "react-icons/fa";

const FeatureCard = ({ title, text, icon }) => {
  return (
    <VStack bg={useColorModeValue("gray.100", "gray.700")} p={5} borderRadius="lg" boxShadow="md" alignItems="start">
      <Icon as={icon} w={10} h={10} />
      <Heading size="md">{title}</Heading>
      <Text>{text}</Text>
    </VStack>
  );
};

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" p={4} justifyContent="space-between" alignItems="center" bg={useColorModeValue("gray.200", "gray.900")}>
        <Heading size="lg">MyWebsite</Heading>
        <Button rightIcon={<FaSun />} variant="ghost" onClick={() => {}}>
          Light/Dark
        </Button>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.md" centerContent py={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to MyWebsite
        </Heading>
        <Text fontSize="xl" textAlign="center">
          The best place to find modern and efficient React components.
        </Text>
        <Button mt={10} size="lg" leftIcon={<FaPlus />}>
          Get Started
        </Button>
      </Container>

      {/* Features Section */}
      <Stack direction={{ base: "column", md: "row" }} spacing={4} justifyContent="center" p={10}>
        <FeatureCard icon={FaSun} title="Feature One" text="An amazing feature that you'll absolutely love." />
        <FeatureCard icon={FaMoon} title="Feature Two" text="Something else that's really cool and useful." />
        <FeatureCard icon={FaInstagram} title="Feature Three" text="A neat trick that will make your life easier." />
      </Stack>

      {/* Footer */}
      <Box bg={useColorModeValue("gray.100", "gray.800")} p={4}>
        <Container maxW="container.md">
          <HStack justifyContent="space-between">
            <Text>&copy; {new Date().getFullYear()} MyWebsite</Text>
            <HStack spacing={4}>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <Icon as={FaLinkedin} />
              </Link>
              <Link href="https://github.com" isExternal>
                <Icon as={FaGithub} />
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
