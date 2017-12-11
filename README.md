# ma petite cantine

A front-end in Angular5 for **ma petite cantine**.

## Installation
* `npm install` or `yarn`

### Development
Client-side only rendering
* run `npm run start` which will start `ng serve`

### Production
also for testing SSR/Pre-rendering locally

**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

## Universal "Gotchas"

> When building Universal components in Angular there are a few things to keep in mind.

 - For the server bundle you may need to include your 3rd party module into `nodeExternals` whitelist

 - **`window`**, **`document`**, **`navigator`**, and other browser types - _do not exist on the server_ - so using them, or any library that uses them (jQuery for example) will not work. You do have some options, if you truly need some of this functionality:
    - If you need to use them, consider limiting them to only your client and wrapping them situationally. You can use the Object injected using the PLATFORM_ID token to check whether the current platform is browser or server. 
    
    ```typescript
     import { PLATFORM_ID } from '@angular/core';
     import { isPlatformBrowser, isPlatformServer } from '@angular/common';
     
     constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }
     
     ngOnInit() {
       if (isPlatformBrowser(this.platformId)) {
          // Client only code.
          ...
       }
       if (isPlatformServer(this.platformId)) {
         // Server only code.
         ...
       }
     }
    ```
    
     - Try to *limit or* **avoid** using **`setTimeout`**. It will slow down the server-side rendering process. Make sure to remove them [`ngOnDestroy`](https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html) in Components.
   - Also for RxJs timeouts, make sure to _cancel_ their stream on success, for they can slow down rendering as well.
 - **Don't manipulate the nativeElement directly**. Use the _Renderer2_ from ["@angular/core"](https://angular.io/api/core/Renderer2). We do this to ensure that in any environment we're able to change our view.
```typescript
constructor(element: ElementRef, renderer: Renderer2) {
  this.renderer.setStyle(element.nativeElement, 'font-size', 'x-large');
}
```
 - The application runs XHR requests on the server & once again on the Client-side (when the application bootstraps)
    - Use a cache that's transferred from server to client (TODO: Point to the example)
 - Know the difference between attributes and properties in relation to the DOM.
 - Keep your directives stateless as much as possible. For stateful directives, you may need to provide an attribute that reflects the corresponding property with an initial string value such as url in img tag. For our native element the src attribute is reflected as the src property of the element type HTMLImageElement.

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
