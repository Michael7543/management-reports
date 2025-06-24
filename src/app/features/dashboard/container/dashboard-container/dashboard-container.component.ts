import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TableRecordsComponent } from "../../presentational/table-records/table-records.component";

@Component({
	selector: "app-dashboard-container",
	imports: [TableRecordsComponent],
	templateUrl: "./dashboard-container.component.html",
	styleUrl: "./dashboard-container.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent {}
