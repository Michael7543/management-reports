import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "app-facebook-icon",
	imports: [NgClass],
	templateUrl: "./facebook-icon.component.html",
	styleUrl: "./facebook-icon.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacebookIconComponent {
	@Input() iconClass = "";
	@Input({ required: true }) size!: { width: number; height: number };
}
