import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, HeaderComponent, SidebarComponent, NgClass],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "management-reports";

	sidebarOpen = false;

	toggleSidebar() {
		this.sidebarOpen = !this.sidebarOpen;
		console.log("click desde el padre: ", this.sidebarOpen);
	}
}
