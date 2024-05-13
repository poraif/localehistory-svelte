import { localeHistoryService } from "$lib/services/localehistory-service";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  try {
    console.log('params.id:', params.id); // Log the id
    const street = await localeHistoryService.getStreet(encodeURI(params.id));
    return {
      street
    };
  } catch (error) {
    console.error('Error loading street:', error); // Log the error
    throw error; // Re-throw the error so it can be handled upstream
  }
};
