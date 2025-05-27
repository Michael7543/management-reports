import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";

@Component({
	selector: "app-input",
	imports: [InputTextModule],
	templateUrl: "./input.component.html",
	styleUrl: "./input.component.scss",
})
export class InputComponent {
	@Input() type: string = "text";
	@Input() placeholder: string = "";
	@Input() disabled: boolean = false;
	@Input() readonly?: boolean;
	@Input() required?: boolean;
	@Input() name?: string;
	@Input() maxLength: number = 10;
	@Input() minLength?: number;
	@Input() autocomplete?: string;
	@Input() classInput: string = "";

	@Output() valueChange = new EventEmitter<any>();
	onInput(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		this.valueChange.emit(value);
	}
}
