import React, { useState } from "react";
import { Box, Heading, Text, Stack, Input, Button, Grid, GridItem, Image, Link, Select } from "@chakra-ui/react";
import { FaSearch, FaPhone, FaEnvelope } from "react-icons/fa";
import CreditRepairQuiz from "../components/CreditRepairQuiz";
import BusinessListings from "../components/BusinessListings";

const businesses = [
  {
    id: 1,
    name: "Credit Repair Co.",
    description: "We help you fix your credit score and improve your financial health.",
    rating: 4.5,
    location: "New York",
    phone: "(123) 456-7890",
    email: "info@creditrepairco.com",
    image: "https://images.unsplash.com/photo-1556741564-a0e2cc7e2b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjByZXBhaXIlMjBidXNpbmVzc3xlbnwwfHx8fDE3MTI4ODk2ODR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Credit Solutions Inc.",
    description: "Our experts provide personalized credit repair services.",
    rating: 4.2,
    location: "Los Angeles",
    phone: "(987) 654-3210",
    email: "contact@creditsolutions.com",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjByZXBhaXIlMjBvZmZpY2V8ZW58MHx8fHwxNzEyODg5Njg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
 
];

const Index = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResponses, setQuizResponses] = useState({});

  const handleQuizSubmit = (responses) => {
    setQuizResponses(responses);
    setQuizCompleted(true);
  };

  return <Box>{!quizCompleted ? <CreditRepairQuiz onQuizSubmit={handleQuizSubmit} /> : <BusinessListings businesses={businesses} quizResponses={quizResponses} />}</Box>;
};

export default Index;
