import { ChangeDetectionStrategy, Component, type OnInit, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import type { SelectItemGroup } from "primeng/api";
import { IftaLabelModule } from "primeng/iftalabel";
import { SelectModule } from "primeng/select";

@Component({
	selector: "app-button-select",
	imports: [FormsModule, SelectModule, IftaLabelModule],
	templateUrl: "./button-select.component.html",
	styleUrl: "./button-select.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSelectComponent {
	model = input<SelectItemGroup[]>();
	options = input<{ label: string; value: string }[]>();
	inputId = input<string>();
	placeholder = input<string>("Seleccione una opción");
	label = input<string>();

	modelChange = output<string | null>();
}
