import React, { useState } from "react";
import { Box, Heading, Text, Stack, Input, Button, Grid, GridItem, Image, Link, Select } from "@chakra-ui/react";
import { FaSearch, FaPhone, FaEnvelope } from "react-icons/fa";

const businesses = [];

const BusinessListings = ({ quizResponses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredBusinesses = businesses.filter((business) => business.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedLocation === "" || business.location === selectedLocation));

  const locations = [...new Set(businesses.map((business) => business.location))];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Credit Repair Services
      </Heading>
      <Stack direction={["column", "row"]} spacing={4} mb={8}>
        <Input placeholder="Search businesses..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={<FaSearch />} />
        <Select placeholder="Filter by location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Select>
      </Stack>
      <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={8}>
        {filteredBusinesses.map((business) => (
          <GridItem key={business.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={business.image} alt={business.name} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {business.name}
            </Heading>
            <Text mb={2}>{business.description}</Text>
            <Text mb={2}>Rating: {business.rating}</Text>
            <Text mb={4}>Location: {business.location}</Text>
            <Stack direction={["column", "row"]} spacing={4}>
              <Link href={`tel:${business.phone}`}>
                <Button leftIcon={<FaPhone />}>Call</Button>
              </Link>
              <Link href={`mailto:${business.email}`}>
                <Button leftIcon={<FaEnvelope />}>Email</Button>
              </Link>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default BusinessListings;
