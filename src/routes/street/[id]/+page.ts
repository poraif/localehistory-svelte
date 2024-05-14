import { localeHistoryService } from "$lib/services/localehistory-service";
import { currentSession } from "$lib/stores";
import type { PageLoad } from "./$types";
import { get } from "svelte/store";

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  try {
    const session = get(currentSession);
    console.log('params.id:', params.id); // Log the id
    console.log('session:', session._id, session.email, session.token); // Log the session
    if (!session) {
      throw new Error('Session is undefined');
    }
    const street = await localeHistoryService.getStreet(encodeURI(params.id), session);
    return {
      street
    };
  } catch (error) {
    console.error('Error loading street:', error); // Log the error
    throw error; // Re-throw the error so it can be handled upstream
  }
};
