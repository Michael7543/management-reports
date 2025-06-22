import { ChangeDetectionStrategy, Component } from "@angular/core";
import { EmailIconComponent } from "../../../../../assets/icons/email-icon/email-icon.component";
import { UserIconComponent } from "../../../../../assets/icons/user-icon/user-icon.component";
import { ButtonComponent } from "../../../../shared/components/buttons/button/button.component";
import { InputComponent } from "../../../../shared/components/inputs/input/input.component";

@Component({
	selector: "app-login",
	imports: [InputComponent, ButtonComponent, UserIconComponent],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
