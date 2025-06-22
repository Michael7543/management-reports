import type { Routes } from "@angular/router";
import { AuthLayoutContainerComponent } from "@app/layout/container/auth-layout-container/auth-layout-container.component";
import { LoginContainerComponent } from "./container/login-container/login-container.component";

export const AUTH_ROUTES: Routes = [
	{
		path: "",
		component: AuthLayoutContainerComponent,
		children: [
			{
				path: "login",
				component: LoginContainerComponent,
			},
			{
				path: "",
				redirectTo: "login",
				pathMatch: "full",
			},
		],
	},
];
