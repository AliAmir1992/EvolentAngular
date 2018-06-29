# Contact CRUD Application

This is an application for maintaining Contact information. We can perform add/update/delete/view operations. This application is build using Angular framework.

## Setting up the environment

1. Install node on your machine. Goto https://nodejs.org/en/download/ to get the latest LTS release.

2. Open node js command prompt and run below commands to install Angular CLI on you machine:-
	- npm intsall -g @angular/cli
	
3. After this go to the project directory and run below command to install all the dependencies for our project:-
	- npm install

## Folder structure for the aplication

|-- app
	|-- contact 						 // files related to Contact component and its template
		|-- contact.component.html 		 // contains html for oprations related to contact management
		|-- contact.component.spec.ts 	 // unit test files for contact component
		|-- contact.component.ts 		 // defines class for contact component
		|-- contact.service.ts 			 // service calls for performing read/write oprations on contact.
	|-- shared
		|-- modal-content.component.html // defines html for modal window used in application.
		|-- modal-content.component.ts	 // defines component class for modal window.	
	|-- model 							 // contains model 
		Contact.ts 						 // this file defines the Contact model and its properties
	|-- app.component.html 				 // main application html file
	|-- app.component.spec.ts 			 // contains unit tests for app component
	|-- app.component.ts 				 // defines app component class
	|-- app.module.ts 					 // main application module where we declare all the dependencies and external libraries used.
	|-- app.routing.ts 					 // main routing file for the whole application.
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


