import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
	selector: "app-button",
	imports: [ButtonModule],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
	@Input({ required: true }) label = "";
	@Input() icon? = "";
	@Input() iconPos: "left" | "right" = "left";
	@Input() ariaLabel = "";
	@Input() severity?:
		| "info"
		| "success"
		| "warn"
		| "danger"
		| "secondary"
		| "contrast"
		| "primary"
		| "help"
		| undefined = undefined;
	@Input() disabled!: boolean;
	@Input() rounded!: boolean;
	@Input() variant?: "outlined" | "text" | undefined = undefined;
	@Input() size?: "small" | "large" | undefined = undefined;
	@Input() styleClass?:string;
}
