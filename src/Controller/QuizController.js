export const fetchQuestion = async () => {
    try {
      const response = await fetch('https://apidevquiznet60-production.up.railway.app/api/question');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching the question:', error);
      return null;
    }
  };