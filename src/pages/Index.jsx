import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  // Sample data for the dashboard
  const metrics = [
    {
      id: 1,
      icon: FaDollarSign,
      label: "Total Revenue",
      value: "$30,000",
      change: "12.5%",
      status: "increase",
    },
    {
      id: 2,
      icon: FaShoppingCart,
      label: "Sales",
      value: "1,400",
      change: "9.8%",
      status: "increase",
    },
    {
      id: 3,
      icon: FaUsers,
      label: "New Customers",
      value: "80",
      change: "7.0%",
      status: "decrease",
    },
    {
      id: 4,
      icon: FaChartLine,
      label: "Customer Satisfaction",
      value: "88%",
      change: "3.5%",
      status: "increase",
    },
  ];

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {metrics.map((metric) => (
          <Stat key={metric.id} p={5} shadow="md" border="1px" borderColor="gray.200">
            <Flex alignItems="center">
              <Box as={metric.icon} size="3rem" mr={2} color="blue.500" />
              <Box>
                <StatLabel>{metric.label}</StatLabel>
                <StatNumber>{metric.value}</StatNumber>
                <StatHelpText>
                  <StatArrow type={metric.status === "increase" ? "increase" : "decrease"} />
                  {metric.change}
                </StatHelpText>
              </Box>
            </Flex>
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
