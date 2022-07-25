# Change Log


## 6.0.0

### Breaking changes

- Updated measure API - removed `none` and added `view` mode. `select` mode renamed to `edit` mode.

### Features

- Added `parallelChunks` option for `loadModel` method
- Added `measure.add`, `measure.delete`, `measure.move-start`, `measure.move`, `measure.move-end` events
- Removed `measure.update` event
- Added `emitter` property to measure events
- Added `dynamic`, `color` properties to measure samples
- Added `measure.setOptions` method
- Added `measure.selectSamples` method
- Added `color` property to the sample object
- Added `getRenderStats()` method to API
- Added transparency effect to measure samples when create new sample or drag point
- Added hover effect to measure samples - a little brighter than base color
- Added `raycastObjects` method
- Renamed `experimental.showStats` option to `experimental.stats` and added `experimental.stats.style` sub-option

### Bug fixes

- Fix progressive loading to work well with transparent objects
- Remove `measure.select` event emerging when select the same measure sample
- Fix `grid` behaviour with progressive rendering, now grid updates on loading new chunk
- Fix transparency bug - when `sectoring` switch then order of objects becomes incorrect


## 5.4.1

### Bug fixes

- Fixed npm build


## 5.4.0

### Features

- Added `getScreenshot` method
- Added `getScreenPosition` method
- Added `getContextParams` method
- Added `camera.update` event
- Added `resize` event
- Added `color`, `colorBlendingMethod`, `overlap` properties into the `PointOptions` interface (`setPoints` method)
- Reduced presets size
- Added the ability to cancel `measure` sample creation by pressing Esc keyboard button
- Added `antialiasing.pixelRatio` limit validation
- Added `antialiasing.state` event
- Added public `getContextParams()` API method
- Updated presets background settings
- Updated presets ghostMode settings (except default)
- Improve progressive loading not to blink when possible
- Added default material support for WMD files without a renderable material set

### Bug fixes

- Fixed extra model redraw on `setPoints` method call
- Fixed `setExplosion` method, fixed explode direction
- Fixed image color for the points (`setPoints` method), now should match colors from the source image
- Fixed appearing two points at the same place for `measure` samples on mobile
- Fixed bug on changing `measure` mode during sample creation
- Fixed `ResizeObserver loop limit exceeded` error spamming in Sentry extension
- Fixed `MAX_TEXTURE_SIZE` crash, affected by antialiasing changes. Now `antialiasing.pixelRatio` can be changed automatically


## 5.3.0

### Features

- Added `navigationCube` options. You can change position, size and offset of the cube.
- Updated documentation

### Bug fixes

- Fixed typescript's types
- Fixed selection transparency bug which occurs with progressive rendering
- Detect texture loading progress for `.wmd` files


## 5.2.0

### Features

- Added typescript's types


## 5.1.0

### Features

- Added method `sendReport()`
- Added static method `registerExtension()` with providable extension `SentryExtension`
- Added value `'auto'` to `progressiveRendering` option
- Improved selection and color behaviour. Now it doesn’t force model redrawing with progressive rendering turned on
- Selected and colored objects are slightly visible through the other objects now

### Bug fixes

- Fixed filtering error (ghost mode)
- Fixed resize bug with orthographic camera projection
- Fixed camera visual bugs on small models
- Fixed raycasting errors with progressive loading and enabled edges
- Changed presets' light options (including default preset)


## 5.0.0

### Breaking changes

- Removed `searchObjectIds()` and `searchObjects()` methods. Use `@wg/objects-db` package for that
- Removed `createSelector()` method. Other methods don't recieve selectors as ids no more. Use `@wg/objects-db` package for that
- Updated `getObjects()` method - now it only returns all object's ids for current model
- Changed result value of `getDebugInfo()` method
- Changed `getOptions()` - now it takes no arguments
- Object id now could be only a number

### Features

- Added `.wmd` file format models support
- Memory and performance improvements
- Improved `filterObjects()` speed
- Added `camera.projectionType` option to `setOptions()` method
- Returned back `progressive` property to `loadModel()` method (works for `.wmd` model files only)
- Added mouse hover effect

### Bug fixes

- Fixed widget crash when container domElement becomes zero size
- Fixed bug when axes letters were broken on mobiles with `showOrigin` option enabled
- Fixed bug of section box flickering, when hover on box controllers
- Fixed bug of point sizes when use `staticSize` and `orthographic` projection of camera
- Fixed bug of selection after reloading model with selected element


## 4.0.0

### Breaking changes

- Removed resetting options by passing `undefined` value to `setOptions`. Use `getOptions` for saving state of options instead
- Removed deprecated options `showHiddenObjects` and `axes`. Use `ghostMode` and `grid` instead
- Origin of point defined as Vector3 allows to specify values between -1 and 1 and means offset of point location from point rotation center
- Progressive model loading is temporarily disabled

### Features

- Increased calculation accuracy for `getDistanceBetween`
- Performance and memory optimisations
- Changed `progressiveRendering` behavior to increase performance
- Added `getOptions` method for getting all or specified options
- Added `antialiasing` options to `setOptions` method
- Selectors generate exceptions if methods called with not exist ids
- Improved `hover` event behavior, now emits on any mouse move
- Added method `getDebugInfo` and option `logs`

### Bug fixes

- Fixed bug of `moveCameraToObjects` when camera captures hidden objects


## 3.5.1

### Bug fixes

- Fix to read `externalId` from `structure.json` properly


## 3.5.0

### Features

- Added `getDistanceBetween` method
- Added `ghostMode` options to `filter` feature
- Added `showOrigin` option
- Added `coordinateSystem` option
- Added `axesColors` option

### Deprecations

- `axes` option renamed to `grid`
- `showHiddenObjects` option renamed to `ghostMode`


## 3.4.0

### Features

- Added `blacklist` and `iterative` options to `filterObjects` method

### Bug fixes

- Added fallback for some WebGL errors on environment map creating


## 3.3.0

### Features

- Improved measure distance dragging performance
- Added `keyboard` option to `cameraControls`
- `getObjects` now returns externalId property
- Added `axes` option

### Bug fixes

- Fixed infinity `hover` event emitting with no mouse movement in some cases


## 3.2.0

### Features

- Decreased parsing model time
- Improved performance for progressive rendering
- Added `position` property in `hover` event

### Bug fixes

- Fixed several times edges generating


## 3.1.0

### Features

- Updated measure module (new look, new abilities)

### Bug fixes

- Fixed staging memory size auto detection


## 3.0.0

### Breaking changes

- Removed progressbar from viewer. Loader could be implemented on the application side
- Presets are now available using `@wg/industrial-viewer/presets/[presetName]` path whithout `dist` subfolder
- Option `origin` of point settings is vector2 or vector3 object now (deprecation removed)

### Features

- Added event `controls.update`
- Added event `measure.state`
- Added event `explode.state`
- Added arrows to `NavigationCube`
- `measure` feature disables on use `explosion` now and vice versa. Use events `measure.state` and `explode.state` to watch it
- `loadModel` now can be progressive; Require to split GLTF model to separated bin file chunks.
- `progress` event now returns two more fields: `chunksLoaded`, `chunksTotal`
- New gizmo for SectionBox

### Bug fixes

- Changed all presets settings a bit to look better


## 2.3.0

### Features

- `setOptions` now returns `Promise`
- Added `presets`
- Added `envrionment`, `theme`, params to `setOptions`
- Added new params to `camera` in `setOptions`

### Deprecations

- Option `origin` of point settings as array (now it's vector2 or vector3 object)

### Bug fixes

- Fixed sprite being visible outside sectionBox
- Fixed sectionBox axes invisibility on mobile


## 2.2.0

### Features

- Improved `sectionBox`
- Added `staticSize` option of point settings
- Added `origin` option of point settings

### Bug Fixes

- Fixed not working selection on setting `selectionColor` option before a model was loaded.


## 2.1.0

### Features

- Added `createSelector` method
- `measure`
    - added delete button for selected measure samples
    - added `visible` property in measure sample
- Added `NavigationCube` feature
- Added `navigationCube` option
- Added `normal` property to click event object
- Added support for translucency of Point images

### Bug Fixes

- Fixed `measure.getSamples` and `measure.searchSamples` bug
- Fixed resetting point size to default after second `setPoints` call in some cases
- Fixed deletion selected point bug


## 2.0.0

### Breaking changes

- `loadModel`
    - now accepts full url to model file
    - removed `apiPath` option
    - removed `onProgress` callback, handle `progress` event instead
- `measure`
    - removed `setActive` method, use `none` mode in `setMode` method instead
    - removed `isActive` method, check `none` mode in `getMode` instead
    - removed `createLineSample`, `createAngleSample`, use `setSamples` instead
    - removed `getSampleById`, `getAllSamples` methods, use `getSamples` instead
    - removed `getCurrentSample` method, use `searchSamples` instead
    - removed `clearAllSamples`, `clearSample` methods, use `setSamples` instead
    - removed `onSelect`, `onUpdate` callbacks, handle `measure.select`, `measure.update` events instead
    - changed events interface
- Removed `selectObject`, use `selectObjects` instead
- Removed `moveCameraToObject`, use `moveCameraToObjects` instead
- Removed `defaultSelection`, use `selectionMode` with value `none` instead
- Removed `onSelectObject` callback, handle `select` event instead
- Removed `onClick` callback, handle `click` event instead
- Changed interface of `colorObjects` method, renamed property `objectIds` into `ids`
- Changed interface of `select` event, renamed property `selected` to `ids`
- Changed interface of `click` event, renamed property `selected` to `id`

### Features

- Added staging memory size auto detection
- Added `edgeGeometry` option
- Added `setExplosion` method
- Added `cameraControls` option
- Added `camera` option
- Added `getObjects` method
- Added `measure.setSamples`, `measure.searchSamples` methods
- Added `measure.getSamples`
- Changed `measure.setMode` method, added `none` mode
- Added `hover` event
- Added `measure.hover` event
- Event `select` now returns full list of selected objects (included all descendant objects)

### Bug Fixes

- Changed progressive rendering object size detection method
- Validate wrong object properties passed
- Fixed not changing object color after `selectionColor` option change
- Fixed zoom controls issues on touch devices
- Fixed algorithm detecting camera position to see objects in method `moveCameraToObjects`
- Other small fixes
- Fixed multiselection bug


## 1.6.1

### Bug Fixes

- Fixed picking on some touch devices


## 1.6.0

### Features

- Added axes for section box resizing
- Added `selectionMode` option
- Added `selectObjects` method
- Added `addEventListener` method
- Added `removeEventListener` method

### Deprecations

- `selectObject` method
- `onSelectObject` callback
- `onClick` callback
- `onProgress` callback
- `measure.onSelect` callback
- `measure.onUpdate` callback

### Bug Fixes

- Fixed picking on some touch devices


## 1.5.0

### Features

- Added checking passed constructor arguments
- Added `showHiddenObjects` option (ghost mode)

### Bug Fixes

- Fixed infinity widget resizing
- Removed background from progress bar
- Removed Promise polyfill


## 1.4.1

### Bug Fixes

- Inline default hdr and default point image into the bundle


## 1.4.0

### Features

- Updated light setup
- Updated selection style
- Added validation checking for public API methods
- Added `selectionColor` option
- Added `useDefaultSelection` option (allows to prevent default selection)
- Added `progressiveRendering` option
- Added `setPoints` method
- Added `onClick` callback and similary option
- Added `setSectionBox` method
- Added `getSectionBox` method
- Added `measure` API
- Added `moveCameraToObjects` API


## 1.3.0

### Features

- Added `searchObjectIds` method
- Added `searchObjects` method
- Added `stagingMemorySize` option for viewer settings


## 1.2.0

### Features

- Updated WebGL engine
- Increased selection and color methods speed


## 1.1.0

### Features

- Increase environment luminance

### Bug Fixes

- `filterObjects` Don't fall if object wasn't found


## 1.0.3

### Bug Fixes

- Fixed bug with incorrect pointer events coordinates for some devices


## 1.0.2

### Bug Fixes

- Fixed bugs with nodes with the same name
- Fixed not enough memory error on big models change


## 1.0.1

### Bug Fixes

- Fixed long time `colorObjects` method execution for big models


## 1.0.0

### Breaking changes

- Added camera position auto setting

### Features

- Added API access using iframe postMessage
- Added `moveCameraToObject` method
- Added `setOptions` method
- Added `onProgress` callback for `loadModel`
- Added `moveCameraToPosition` method
- Added `getCameraPosition` method


## 0.2.0

### Features

- Idle scene is not rendering now
- Dom element's inner css classes were renamed to look more unique


## 0.1.1

### Bug Fixes

- Fixed bug when several same type objects were colored instead of one
- Fixed bug when material settings were cleared after object deselect
- Fixed forever coloring after simultaneous `colorObject` calls


## 0.1.0

### Features

- Added ability to deselect objects using `selectObject` method

### Bug Fixes

- `onSelectObject` doesn't call after selection failed


## 0.0.5

### Bug Fixes

- Added hotfix to work with `zone.js` polyfill


## 0.0.1

- First working version
