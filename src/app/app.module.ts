import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-bs5/js/dataTables.bootstrap5.js';
import 'datatables.net-bs5/js/dataTables.bootstrap5.js';
import 'datatables.net-editor/js/dataTables.editor.js';
import 'datatables.net-editor-bs5/js/editor.bootstrap5.js';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		PopoverModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
