import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import type { Records } from "@domain/model/generalData/Records";
import { ButtonComponent } from "@shared/button/button.component";
import { InputComponent } from "@shared/input/input.component";
import { TableModule } from "primeng/table";
import { Tag } from "primeng/tag";
import { TooltipModule } from "primeng/tooltip";

@Component({
	selector: "app-table-records",
	imports: [TableModule, Tag, CommonModule, ButtonComponent, InputComponent, TooltipModule],
	templateUrl: "./table-records.component.html",
	styleUrl: "./table-records.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRecordsComponent implements OnInit {
	records: Records[] = [];

	ngOnInit(): void {
		this.records = [
			{
				id: 1,
				date: new Date("2025-06-04"),
				type_event: "SOLICITUD",
				user_name: "JUAN LOSE DE MORALES LLUMISACA",
				state: "ATENDIDO",
				activity: "OPERATIVO CONTROL PARADAS DEL METRO QUITO",
				sub_activity: "INTERVENCION PARADAS DEL METRO QUITO",
			},
			{
				id: 22341,
				date: new Date("2025-06-04"),
				type_event: "EVENTO PROGRAMADO",
				user_name: "JUAN LOSE DE MORALES LLUMISACA",
				state: "ATENDIDO",
				activity: "OPERATIVO CONTROL PARADAS DEL METRO QUITO",
				sub_activity: "INTERVENCION PARADAS DEL METRO QUITO",
			},
		];
	}

	getSeverity(estado: string) {
		switch (estado) {
			case "unqualified":
				return "danger";

			case "qualified":
				return "success";

			case "new":
				return "info";

			case "negotiation":
				return "warn";

			case "renewal":
				return null;

			default:
				return undefined;
		}
	}
}
