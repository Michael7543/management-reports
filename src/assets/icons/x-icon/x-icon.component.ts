import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "app-x-icon",
	imports: [NgClass],
	templateUrl: "./x-icon.component.html",
	styleUrl: "./x-icon.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XIconComponent {
	@Input() iconClass = "";
	@Input({ required: true }) size!: { width: number; height: number };
}
