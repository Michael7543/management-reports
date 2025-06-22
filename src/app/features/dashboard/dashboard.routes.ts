import type { Routes } from "@angular/router";
import { DashboardLayoutContainerComponent } from "@app/layout/container/dashboard-layout-container/dashboard-layout-container.component";
import { DashboardContainerComponent } from "./container/dashboard-container/dashboard-container.component";

export const DASHBOARD_ROUTES: Routes = [
	{
		path: "",
		component: DashboardLayoutContainerComponent,
		children: [
			{
				path: "",
				component: DashboardContainerComponent,
				children: [
					{
						path: "records",
						loadComponent: () =>
							import("./presentational/table-records/table-records.component").then((c) => c.TableRecordsComponent),
					},
					{
						path: "",
						redirectTo: "records",
						pathMatch: "full",
					},
				],
			},
		],
	},
];
