import React, { useState } from "react";
import { Box, Heading, Text, Stack, Input, Button, Select } from "@chakra-ui/react";

const CreditRepairQuiz = ({ onQuizSubmit }) => {
  const [goal, setGoal] = useState("");
  const [creditScore, setCreditScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuizSubmit({ goal, creditScore });
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Credit Repair Quiz
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} mb={8}>
          <Input placeholder="What is your main credit repair goal?" value={goal} onChange={(e) => setGoal(e.target.value)} />
          <Select placeholder="What is your current credit score range?" value={creditScore} onChange={(e) => setCreditScore(e.target.value)}>
            <option value="300-579">300-579 (Very Poor)</option>
            <option value="580-669">580-669 (Fair)</option>
            <option value="670-739">670-739 (Good)</option>
            <option value="740-799">740-799 (Very Good)</option>
            <option value="800-850">800-850 (Exceptional)</option>
          </Select>
        </Stack>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default CreditRepairQuiz;
