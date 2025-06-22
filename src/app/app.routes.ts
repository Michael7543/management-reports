import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "auth/login",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () => import("@features/auth/auth.routes").then((m) => m.AUTH_ROUTES),
	},
	{
		path: "dashboard",
		loadChildren: () => import("@features/dashboard/dashboard.routes").then((m) => m.DASHBOARD_ROUTES),
	},
	{
		path: "**",
		redirectTo: "auth/login",
	},
];
