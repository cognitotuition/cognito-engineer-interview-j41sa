// Ignore this function until prompted by the interviewer

import { TopicKey } from "./types";

const generateQuestionWithAI = (topics: TopicKey[]) => {
  const response = prompt(`Generate 3 quiz questions covering these topics: ${topics.join(', ')} 
  in the format of a JSON array of Question objects. A Question object has the following properties: 
  question (string), solution (string), mark (number), topics (array of topic keys).`);

  return response;
};
