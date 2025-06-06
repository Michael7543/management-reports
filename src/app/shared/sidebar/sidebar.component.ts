import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ButtonComponent } from "../button/button.component";

@Component({
	selector: "app-sidebar",
	imports: [RouterLink, RouterLinkActive, ButtonComponent, NgClass],
	templateUrl: "./sidebar.component.html",
	styleUrl: "./sidebar.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
	isOpen = input<boolean>(false);

	get inertAttribute() {
		return this.isOpen() ? null : "inert";
	}
}
