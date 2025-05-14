import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, ButtonModule, InputTextModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "management-reports";
}
