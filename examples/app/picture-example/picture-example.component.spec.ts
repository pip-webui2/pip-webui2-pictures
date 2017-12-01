import { TestBed, inject } from '@angular/core/testing';

import { PictureExampleComponent } from './picture-example.component';

describe('a picture-example component', () => {
	let component: PictureExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PictureExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PictureExampleComponent], (PictureExampleComponent) => {
		component = PictureExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});