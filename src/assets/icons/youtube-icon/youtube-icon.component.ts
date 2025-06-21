import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "app-youtube-icon",
	imports: [NgClass],
	templateUrl: "./youtube-icon.component.html",
	styleUrl: "./youtube-icon.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeIconComponent {
	@Input() iconClass = "";
	@Input({ required: true }) size!: { width: number; height: number };
}
