import { ChangeDetectionStrategy, Component } from "@angular/core";
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { EmailIconComponent } from "../../../../assets/icons/email-icon/email-icon.component";
import { UserIconComponent } from "../../../../assets/icons/user-icon/user-icon.component";

@Component({
	selector: "app-login",
	imports: [InputComponent, ButtonComponent, UserIconComponent],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
