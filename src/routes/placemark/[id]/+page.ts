import { localeHistoryService } from "$lib/services/localehistory-service";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const placemark = await localeHistoryService.getPlacemark(encodeURI(params.id));
	return {
		placemark
	};
};