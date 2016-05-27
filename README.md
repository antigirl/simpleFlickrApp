# simpleFlickrApp
[simpleflickrapp.surge.sh](http://simpleflickrapp.surge.sh)
- npm **start** to run dev enviornment
- npm run **build** to compile dist folder
- npm run **deploy** to compile dist and deploy it to surge
- npm run **tests** to run all the unit tests 


# considerations
-  [Due to time constraints]:
- Browser support only for Chrome, FireFox, Safari, IE10+ [IE9 is having some issues with the polyfills involved and React v15 does not support IE8]
- Focus has been on modularisation, abstraction and React itself so the CSS is not shown much love
- Integretion tests and tests for Reducers are missing
- Alot more of the components could so with being stateless functional components
- Proptypes could be more stricter
- Errors are not output to user
