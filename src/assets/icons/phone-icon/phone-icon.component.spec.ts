import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { PhoneIconComponent } from "./phone-icon.component";

describe("PhoneIconComponent", () => {
	let component: PhoneIconComponent;
	let fixture: ComponentFixture<PhoneIconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PhoneIconComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PhoneIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
