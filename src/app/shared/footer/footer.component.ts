import { ChangeDetectionStrategy, Component } from "@angular/core";
import { EmailIconComponent } from "@assets/icons/email-icon/email-icon.component";
import { FacebookIconComponent } from "@assets/icons/facebook-icon/facebook-icon.component";
import { PhoneIconComponent } from "@assets/icons/phone-icon/phone-icon.component";
import { XIconComponent } from "@assets/icons/x-icon/x-icon.component";
import { YoutubeIconComponent } from "@assets/icons/youtube-icon/youtube-icon.component";

@Component({
	selector: "app-footer",
	imports: [PhoneIconComponent, EmailIconComponent, YoutubeIconComponent, XIconComponent, FacebookIconComponent],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
