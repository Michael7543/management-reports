import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@app/layout/presentational/layout/footer/footer.component";
import { HeaderComponent } from "@app/layout/presentational/layout/header/header.component";
import { SidebarComponent } from "@app/layout/presentational/layout/sidebar/sidebar.component";

@Component({
	selector: "app-dashboard-layout-container",
	imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, NgClass],
	templateUrl: "./dashboard-layout-container.component.html",
	styleUrl: "./dashboard-layout-container.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutContainerComponent {
	sidebarOpen = true;

	toggleSidebar() {
		this.sidebarOpen = !this.sidebarOpen;
	}
}
