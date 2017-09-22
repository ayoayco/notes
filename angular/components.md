# Angular Components

Angular Components are sort of the puzzle pieces that will make the whole. As you design your angular app, you will find the different parts that you will need to work on, and these parts will directly translate into Angular Components.

Here's a template for an empty component called SideBarComponent:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateURL: './app.sidebar.component.html',
    styleURLs: ['./app.sidebar.component.css']
})

export class AppSidebarComponent {

    constructor(){}

}


```
