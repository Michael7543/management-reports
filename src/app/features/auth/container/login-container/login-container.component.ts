import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoginComponent } from "../../presentational/login/login.component";

@Component({
	selector: "app-login-container",
	imports: [LoginComponent],
	templateUrl: "./login-container.component.html",
	styleUrl: "./login-container.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {}
