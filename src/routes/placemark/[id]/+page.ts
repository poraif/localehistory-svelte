import { localeHistoryService } from "$lib/services/localehistory-service";
import type { PageLoad } from "./$types";
import { currentSession } from "$lib/stores";
import { get } from 'svelte/store';

export const load: PageLoad = async ({ params }) => {
    const session = get(currentSession);
    const placemark = await localeHistoryService.getPlacemark(encodeURI(params.id), session);
    return {
        placemark
    };
};