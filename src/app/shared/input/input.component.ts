import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";

@Component({
	selector: "app-input",
	imports: [InputTextModule],
	templateUrl: "./input.component.html",
	styleUrl: "./input.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
	@Input() type = "text";
	@Input() placeholder = "";
	@Input() disabled = false;
	@Input() readonly?: boolean;
	@Input() required?: boolean;
	@Input() name?: string;
	@Input() maxLength = 10;
	@Input() minLength?: number;
	@Input() autocomplete?: string;
	@Input() classInput = "";

	@Output() valueChange = new EventEmitter<string | number>();
	onInput(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		this.valueChange.emit(value);
	}
}
