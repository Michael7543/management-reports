import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { EmailIconComponent } from "./email-icon.component";

describe("EmailIconComponent", () => {
	let component: EmailIconComponent;
	let fixture: ComponentFixture<EmailIconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EmailIconComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(EmailIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
