import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IconsWhatsappComponent } from "../../icons/icons-whatsapp/icons-whatsapp.component";
import { IconsSupportComponent } from "../../icons/icons-support/icons-support.component";

@Component({
	selector: "app-footer",
	imports: [IconsWhatsappComponent, IconsSupportComponent],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
