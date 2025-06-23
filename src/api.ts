export const callEmailAPI = async (
  formData: FormData
): Promise<{ subject: string; content: string }> => {
  const response = await fetch('https://your-backend.com/api/generate-email', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) throw new Error('API failed');

  return await response.json();
};
