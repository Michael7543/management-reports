import {
	type ApplicationConfig,
	provideZoneChangeDetection,
} from "@angular/core";
import {
	provideClientHydration,
	withEventReplay,
} from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import Aura from "@primeng/themes/aura";
import { providePrimeNG } from "primeng/config";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
				options: {
					cssLayer: {
						name: "primeng",
						order: "tailwind, primeng",
					},
				},
			},
		}),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
	],
};
