import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-auth-layout-container",
	imports: [RouterOutlet],
	templateUrl: "./auth-layout-container.component.html",
	styleUrl: "./auth-layout-container.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutContainerComponent {}
