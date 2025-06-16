import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import type { Records } from "@domain/model/generalData/Records";
import { ButtonComponent } from "@shared/button/button.component";
import { InputComponent } from "@shared/input/input.component";
import { TableModule } from "primeng/table";
import { Tag } from "primeng/tag";

@Component({
	selector: "app-table-records",
	imports: [TableModule, Tag, CommonModule, ButtonComponent, InputComponent],
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
				fecha: new Date("2025-06-04"),
				type_event: "SOLICITUD",
				name_event: "SEGURIDAD TRANSPORTE PUBLICO",
				user: "JUAN LOSE DE MORALES LLUMISACA",
				estado: "APROBADO",
				hora_inicio: new Date("2025-06-04"),
				hora_fin: new Date("2025-06-04"),
				funcion: "OPERATIVO DE SEGURIDAD EN TRANSPORTE PÚBLICO",
				actividad: "SEGURIDAD TRANSPORTE PUBLICO",
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
