import { ChangeDetectionStrategy, Component, output } from "@angular/core";

@Component({
	selector: "app-header",
	imports: [],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	toggleSidebar = output<Event>();

	onHamburgerClick(event: Event) {
		this.toggleSidebar.emit(event);
	}
}
