import { Component } from '@angular/core';

/*
selector: tell Angular which elements on the screen should be controlled by our own component
  or should be replaced by our own component
standalone: this property marks this Component as a so-called Standalone Component, and Angular also knows other types of Components
templateUrl: defines the markup, the content that should be displayed by that Component.


*/

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styleUrl: '../header/header.component.css'
})

export class HeaderComponent { }