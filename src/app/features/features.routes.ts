import type { Routes } from "@angular/router";
import { TableRecordsComponent } from "./presentational/table-records/table-records.component";

export const FEATURES_ROUTES: Routes = [
	{
		path: "table-records",
		component: TableRecordsComponent,
	},
	{
		path: "**",
		redirectTo: "table-records",
		pathMatch: "full",
	},
];
