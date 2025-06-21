import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "app-phone-icon",
	imports: [NgClass],
	templateUrl: "./phone-icon.component.html",
	styleUrl: "./phone-icon.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneIconComponent {
	@Input() iconClass = "";
	@Input({ required: true }) size!: { width: number; height: number };
}
