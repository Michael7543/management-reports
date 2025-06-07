import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { XIconComponent } from "./x-icon.component";

describe("XIconComponent", () => {
	let component: XIconComponent;
	let fixture: ComponentFixture<XIconComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [XIconComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(XIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
