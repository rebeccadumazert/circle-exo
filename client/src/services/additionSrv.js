import axios from 'axios';

export const addTwoNumbers = async (number1, number2) => {
  const { data } = await axios.post('/api/v1/addition', {
    params: {
      number1,
      number2,
    },
  });

  return data;
};
