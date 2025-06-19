import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("@features/features.routes").then((m) => m.FEATURES_ROUTES),
	},
];
