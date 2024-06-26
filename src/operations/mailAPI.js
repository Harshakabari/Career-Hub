import { sendemail } from '../apis';
const { SEND_MAIL } = sendemail;
import { apiConnector } from "../apiConnector"


export const submitJobApplication = async (formData,token) => {
  try {
    const response = await apiConnector(
        "POST",
        SEND_MAIL,
        {
          formData,
        },
        {
            'Content-Type': 'multipart/form-data',
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

    if (response.status === 200) {
      return response.data; // Return the data received from the server
    } else {
      throw new Error('Failed to submit application'); // Handle error scenarios
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit application');
  }
};