import { TestBed, inject } from '@angular/core/testing';

import { ToggleButtonsExampleComponent } from './toggle-buttons-example.component';

describe('a toggle-buttons-example component', () => {
	let component: ToggleButtonsExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ToggleButtonsExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ToggleButtonsExampleComponent], (ToggleButtonsExampleComponent) => {
		component = ToggleButtonsExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});