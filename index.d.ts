
/**
  * Antialiasing options. (Default: `{ mode: 'FXAA', pixelRatio: 1 }` or `{ mode: 'FXAA', pixelRatio: 2 }` depends on device DPI)
  * @public
  */
export declare interface AntialiasingOptions {
    /** Antialiasing mode. (Default: `'FXAA'`) */
    mode: 'NONE' | 'FXAA' | 'SSAA';
    /** Additional resolution multiplier. (Default: `1` or `2` depends on device DPI) */
    pixelRatio: number;
}

/**
  * Axes colors options. (Default: `{ x: 'FF0000', y: '00FF00', z: '0000FF' }`)
  *
  * @remarks
  * Affects on `setSectionBox` method and `showOrigin` option.
  *
  * @example
  * ```typescript
  * const axesColors: AxesColorsOptions = { x: 'FFFF00', y: '00FFFF', z: 'FF00FF' };
  * ```
  *
  * @public
  */
export declare interface AxesColorsOptions {
    x: string;
    y: string;
    z: string;
}

/**
 * Camera controls damping options.
 * @public
 */
export declare interface CameraControlsDampingOptions {
    /** On/off camera damping (Default: `true`) */
    enabled: boolean;
    /** Damping factor strength (Default: `0.64`) */
    factor: number;
}

/**
 * Camera controls options. (Default: enabled panning, zoom, rotation. Maximum polar angle rotation limited.)
 * @public
 */
export declare interface CameraControlsOptions {
    enabled: boolean;
    keyboard: boolean;
    zoom: CameraControlsZoomOptions;
    rotation: CameraControlsRotationOptions;
    panning: CameraControlsPanningOptions;
    damping: CameraControlsDampingOptions;
}

/**
 * Partial {@link CameraControlsOptionsSimplified} or boolean.
 * @public
 */
export declare type CameraControlsOptionsSet = Partial<CameraControlsOptionsSimplified> | boolean;

/**
 * Simplified interface of {@link CameraControlsOptions}.
 * @public
 */
export declare interface CameraControlsOptionsSimplified {
    enabled: boolean;
    keyboard: boolean;
    zoom: Partial<CameraControlsZoomOptions> | boolean;
    rotation: Partial<CameraControlsRotationOptions> | boolean;
    panning: Partial<CameraControlsPanningOptions> | boolean;
    damping: Partial<CameraControlsDampingOptions> | boolean;
}

/**
 * Camera controls pannig options.
 * @public
 */
export declare interface CameraControlsPanningOptions {
    /** On/off camera panning (Default: `true`) */
    enabled: boolean;
    /** Speed of camera panning (Default: `1`) */
    speed: number;
}

/**
 * Camera controls rotation options.
 * @public
 */
export declare interface CameraControlsRotationOptions {
    /** On/off camera rotation (Default: `true`) */
    enabled: boolean;
    /** Speed of camera rotation (Default: `1`) */
    speed: number;
    /** Minimum polar angle (min value `0`) (Default: `0`) */
    minPolarAngle: number;
    /** Maximum polar angle (max value `Math.PI`) (Default: `Math.PI / 2`) */
    maxPolarAngle: number;
}

/**
 * Camera controls zoom options.
 * @public
 */
export declare interface CameraControlsZoomOptions {
    /** On/off camera zooming (Default: `true`) */
    enabled: boolean;
    /** Speed of camera zooming (Default: `1`) */
    speed: number;
    /** Minimum distance from the camera to the target (Default: `5`) */
    minDistance: number;
    /** Maximum distance from the camera to the target (Default: `20000`) */
    maxDistance: number;
}

/**
 * Camera options. (Default: options from the default preset, perspective camera)
 * @public
 */
export declare interface CameraOptions {
    /** The relative aperture value controls how wide the lens is opened (Default: `16`) */
    aperture: number;
    /** The camera sensor light speed (Default: `100`) */
    ISO: number;
    /** The exposure compensation defines (Default: `2`) */
    expComp: number;
    /** The camera shutter speed in seconds (Default: `1/125`) */
    shutterSpeed: number;
    /** The camera projection type (Default: `'perspective'`) */
    projectionType: CameraProjectionType;
    /** Field of view of camera in degrees (Default: `72`) */
    fov: number;
}

/**
 * Partial {@link CameraOptions}.
 * @public
 */
export declare type CameraOptionsSet = Partial<CameraOptions>;

/** @public Camera position options. */
export declare interface CameraPositionOptions {
    position: PlainVector3;
    target: PlainVector3;
}

/**
 * Camera projection type. (Default: `'perspective'`)
 * @public
 */
export declare type CameraProjectionType = 'perspective' | 'orthographic';

/**
 * Camera update event.
 * @public
 */
export declare interface CameraUpdateEvent extends ViewerEvent {
    type: 'camera.update';
    position: PlainVector3;
    target: PlainVector3;
}

/**
 * Click event.
 * @public
 */
export declare interface ClickEvent extends ViewerEvent {
    type: 'click';
    /** Identifier of the clicked object. Null if no objects were crossed. */
    id: ObjectID | null;
    /** 3D hit object position. Null if no objects were crossed. */
    position: PlainVector3 | null;
    screenPosition: PlainVector2;
    normal: PlainVector3;
}

/** @public Color blending mode. */
export declare type ColorBlendingMethod = 'add' | 'multiply';

/**
 * Controls update event.
 * @public
 */
export declare interface ControlsUpdateEvent extends ViewerEvent {
    type: 'controls.update';
    zooming: boolean;
    rotating: boolean;
    panning: boolean;
}

/**
 * Coordinate system axes orientation. (Default: `'Y_UP'`)
 *
 * @remarks
 * Affects many features. Set it one time to avoid issues.
 *
 * @public
 */
export declare type CoordinateSystem = 'Y_UP' | 'Z_UP';

/** @public Debug 3D context parameters. */
export declare interface DebugContextParams {
    drawingBufferWidth: number;
    drawingBufferHeight: number;
    MAX_TEXTURE_SIZE: number;
}

/** @public Debug information. */
export declare interface DebugInfo {
    version: string;
    modelUrl: string;
    platform: string;
    userAgent: string;
    resolution: string;
    canvasSize: string;
    devicePixelRatio: number;
    glVersion: string;
    glVendor: string;
    glRenderer: string;
    glDebugVendor: string;
    glDebugRenderer: string;
    glExtensions: Array<string>;
    logs: Array<string>;
}

/** @public Distance between result. */
export declare interface DistanceBetweenResult {
    distance: number;
    start: PlainVector3;
    end: PlainVector3;
}

/**
 * Edge geometry options. Mode to show object edges. (Default: disabled).
 *
 * @remarks
 * Affects performance. Better not to enable for big models.
 *
 * @public
 */
export declare interface EdgeGeometryOptions {
    /** Show/hide geometry edges (Default: `true`) */
    enabled: boolean;
    /** Color of edges (Default: `'202020'`) */
    color: string;
}

/**
 * Partial {@link EdgeGeometryOptions} or boolean. (Default: `false`)
 * @public
 */
export declare type EdgeGeometryOptionsSet = Partial<EdgeGeometryOptions> | boolean;

declare interface EmitterEvent {
    type: string;
}

/**
 * Environment options. (Default: loaded IBL from the default preset)
 * @public
 */
export declare interface EnvironmentOptions {
    ibl: IBLOptions;
}

/**
 * Type of event emitter
 * `internal` - is an action which occured inside of viewer (for example by clicking on screen).
 * `external` - is an action which occured by calling API methods
 * @public
 */
export declare type EventEmitterType = 'internal' | 'external';

/**
 * Event type for methods {@link IndustrialViewer.addEventListener} and {@link IndustrialViewer.removeEventListener}.
 * @public
 */
export declare type EventType = 'resize' | 'progress' | 'click' | 'select' | 'hover' | 'controls.update' | 'camera.update' | 'explode.state' | 'measure.select' | 'measure.move' | 'measure.move-start' | 'measure.move-end' | 'measure.add' | 'measure.delete' | 'measure.hover' | 'measure.state' | 'antialiasing.state';

/** @public Experimental options. Don't use it unless you know what you are doing. */
export declare interface ExperimentalOptions {
    stats: StatsOptions;
}

/** @public Partial {@link ExperimentalOptions} */
export declare interface ExperimentalOptionsSet {
    stats: StatsOptionsSet;
}

/**
 * Explode state event.
 * @public
 */
export declare interface ExplodeStateEvent extends ViewerEvent {
    type: 'explode.state';
    progress: number;
    force: number;
}

/** @public Explosion options. */
export declare interface ExplosionOptions {
    /** Range [0..1]. (Default: `0`) */
    progress: number;
    /** Range [0..Infinity]. (Default: `2`) */
    force: number;
    /** Center of mass for explode. (Default: global center of mass) */
    center: PlainVector3 | null;
}

/** @public Objects color options. */
export declare type FilterOptions = {
    blacklist?: boolean;
    iterative?: boolean;
};

/**
 * Ghost mode options. Allows to see hidden objects as transparent ghosts. (Default: disabled)
 *
 * @remarks
 * Ghost mode could decrease performance.
 *
 * @public
 */
export declare type GhostModeOptions = {
    /** Show/hide ghost objects (Default: `true`) */
    enabled: boolean;
    /** Color of ghost objects (Default: `'202020'`) */
    color: string;
    /** Opacity of ghost objects (Default: `0.1`) */
    opacity: number;
};

/**
 * Partial {@link GhostModeOptions} or boolean.
 * @public
 */
export declare type GhostModeOptionsSet = Partial<GhostModeOptions> | boolean;

/**
 * Grid options. Enabling showing grids/levels, setting appropriate options for them. (Default: disabled)
 * @public
 */
export declare type GridOptions = {
    /** Show/hide grids and levels (Default: `true`) */
    enabled: boolean;
    /** Grid line color (Default: `'FFFFFF'`) */
    color: string;
};

/**
 * Partial {@link GridOptions} or boolean.
 * @public
 */
export declare type GridOptionsSet = Partial<GridOptions> | boolean;

/**
 * Hover event.
 * @public
 */
export declare interface HoverEvent extends ViewerEvent {
    type: 'hover';
    /** Identifier of the hovered object. Null if no objects were crossed. */
    id: ObjectID | null;
    /** 3D hit object position. Null if no objects were crossed. */
    position: PlainVector3 | null;
}

/**
 * IBL (image-based lighting) options.
 * @public
 */
export declare interface IBLOptions {
    src: string;
    luminance: number;
    name: string | undefined;
}

/**
 * Main class.
 *
 * @public
 */
declare class IndustrialViewer {
    
    
    
    
    /**
     * {@link Measure | Measure API}
     */
    readonly measure: Measure;
    /**
     * Allows to extend application functionality.
     *
     * @example
     * ```js
     * import IndustrialViewer from '@kamotive/industrial-viewer';
     * import extension from '@kamotive/industrial-viewer/extensions/[extentionName]';
     *
     * IndustrialViewer.registerExtension(extention);
     * ```
     */
    static registerExtension(ExtensionClass: Function): void;
    /**
     * Viewer initialization.
     *
     * @param container - DOM element where viewer will be placed to
     * @param options - viewer's options
     */
    constructor(container: HTMLElement, options?: OptionsSet);
    /**
     * Add listener for event.
     *
     * @param event - Event type
     * @param callback - Callback function
     *
     * @example
     * ```js
     * widget3d.addEventListener('select', (event) => {
     *     console.log(event);
     * });
     * ```
     */
    addEventListener<TEvent extends ViewerEvent>(event: EventType, callback: (event: TEvent) => void): void;
    /**
     * Remove listener for event.
     *
     * @param event - Event type
     * @param callback - Callback function
     *
     * @example
     * ```js
     * function callbackFunction(event) { console.log(event); }
     *
     * // Add listener
     * widget3d.addEventListener('select', callbackFunction);
     *
     * // Remove listener
     * widget3d.removeEventListener('select', callbackFunction);
     * ```
     */
    removeEventListener(event: EventType, callback: Function): void;
    /**
     * Set up viewer settings.
     *
     * @param options - viewer's options
     *
     * @remarks
     * There are several presets with predefined options.
     * Presets available from `'@kamotive/industrial-viewer/presets/[presetName]'`;
     * Available presets: `'default'` `'horizon'` `'sky'` `'street'` `'parking'`.
     *
     * @example
     * ```js
     * await widget3d.setOptions({
     *     stagingMemorySize: 256,
     *     progressiveRendering: {
     *         enabled: true
     *         maxDrawcalls: 1024
     *     },
     *     edgeGeometry: {
     *         enabled: true,
     *         color: '00ff00'
     *     }
     * });
     * ```
     *
     * @example
     * Use preset
     * ```js
     * import horizonPreset from '@kamotive/industrial-viewer/presets/horizon';
     *
     * await widget3d.setOptions(horizonPreset);
     * ```
     */
    setOptions(options: OptionsSet): Promise<void>;
    /**
     * Get all viewer settings.
     *
     * @example
     * ```js
     * const options = widget3d.getOptions();
     * // options = { camera: {…}, environment: {…}, theme: {…}, cameraControls: {…}, edgeGeometry: {…}, … }
     * ```
     */
    getOptions(): Options;
    /**
     * Get object ids from the current model.
     *
     * @example
     * ```js
     * const objectIds = widget3d.getObjects();
     * ```
     */
    getObjects(): Iterable<ObjectID>;
    /**
     * Loads a 3D model by url.
     *
     * @param url - 3D model url
     * @param options - Optional loading options (Default: `{ progressive: true }`)
     *
     * @remarks
     * If there is a 3D model in the scene it will be replaced by the new one.
     * By default loading is progressive, which means that it will start rendering as soon as possible.
     * Available model formats: wmd (prefered), gltf (converted and optimized with WGT convertion service).
     *
     * @example
     * ```js
     * await widget3d.loadModel('assets/scenes/metro/model.gltf');
     * ```
     */
    loadModel(url: string, options?: LoadModelOptions): Promise<void>;
    /**
     * Create box section.
     *
     * @example
     * ```js
     * // Box based model size
     * widget3d.setSectionBox();
     *
     * // Specify box boundaries
     * widget3d.setSectionBox({
     *     min: { x: -10, y: -10, z: -10 },
     *     max: { x: 10,  y: 10,  z: 10 }
     * });
     *
     * // Hide section box
     * widget3d.setSectionBox(null);
     * ```
     */
    setSectionBox(sectionBox?: SectionBoxOptions | null): void;
    /**
     * Get box section dimentsions.
     *
     * @remarks
     * Get null if section box is not set.
     *
     * @example
     * ```js
     * const box = widget3d.getSectionBox();
     * ```
     */
    getSectionBox(): SectionBoxOptions | null;
    /**
     * Select objects on the 3D scene.
     *
     * @example
     * ```js
     * // Selection:
     * await widget3d.selectObjects([1, 2]);
     *
     * // Deselection:
     * await widget3d.selectObjects([]);
     * await widget3d.selectObjects(null);
     * ```
     */
    selectObjects(ids: Array<ObjectID> | null): Promise<void>;
    /**
     * Move camera to see the target objects.
     *
     * @param ids - Object identifiers
     * @param animationDuration - Animation duration (in milliseconds)
     *
     * @example
     * ```js
     * // Move to see current objects
     * await widget3d.moveCameraToObjects([1, 2], 1000);
     *
     * // Move to see whole object
     * await widget3d.moveCameraToObjects(null, 1000);
     * ```
     */
    moveCameraToObjects(ids: Array<ObjectID> | null, animationDuration?: number): Promise<void>;
    /**
     * Get current camera position and target.
     *
     * @remarks
     * Combination with {@link IndustrialViewer.moveCameraToPosition} method makes it possible to move the camera to the specified position.
     *
     * @example
     * ```js
     * widget3d.getCameraPosition();
     * ```
     */
    getCameraPosition(): CameraPositionOptions;
    /**
     * Move the camera to the specified place.
     *
     * @param options - Camera options
     * @param animationDuration - Animation duration (in milliseconds)
     *
     * @remarks
     * Use method {@link IndustrialViewer.getCameraPosition} to get current camera position options.
     *
     * @example
     * ```js
     * await widget3d.moveCameraToPosition({ position: { x: 20, y: 10, z: 2.5 }, target: { x: 0.5, y: 5, z: 12 } }, 1000);
     * ```
     */
    moveCameraToPosition(options: CameraPositionOptions, animationDuration?: number): Promise<void>;
    /**
     * Color an array of objects with the specified color.
     *
     * @remarks
     * Once called this method resets all the previous color settings. Once called with “null” parameter this method reset all the previous color settings to default values.
     *
     * @example
     * ```js
     * // Color objects:
     * await widget3d.colorObjects([
     *     {
     *         color: '0000ff',
     *         ids: [386, 383]
     *     },
     *     {
     *         color: 'ffff00',
     *         ids: [704, 614, 524]
     *     }
     * ]);
     *
     * // Reset colors:
     * await widget3d.colorObjects(null);
     * ```
     */
    colorObjects(options: Array<ObjectsColorOptions> | null): Promise<void>;
    /**
     * Set objects visibility.
     *
     * @remarks
     * Default behavior is that objects which ids were passed become visible.
     * All the rest objects (not listed in the method) will be hidden.
     * Once used this method resets previous visibility settings.
     * Once called with “null” parameter this method resets all visibility settings to true, i.e. all objects become visible.
     *
     * @example
     * ```js
     * // Show only object 1 and 2 (all other objects are invisible)
     * await widget3d.filterObjects([1, 2]);
     * // or
     * await widget3d.filterObjects([1, 2], { blacklist: false });
     *
     * // Hide all objects
     * await widget3d.filterObjects([]);
     * // or
     * await widget3d.filterObjects([], { blacklist: false });
     *
     * // Show all objects
     * await widget3d.filterObjects(null);
     * // or
     * await widget3d.filterObjects(null, { blacklist: false });
     *
     * // Hide only object 1 and 2 (all other objects are visible)
     * await widget3d.filterObjects([1, 2], { blacklist: true });
     *
     * // Show all objects
     * await widget3d.filterObjects([], { blacklist: true });
     *
     * // Hide all objects
     * await widget3d.filterObjects(null, { blacklist: true });
     *
     * // Show objects 1 and 2. Then hide object 1. Object 2 is visible only.
     * await widget3d.filterObjects([1, 2], { blacklist: false });
     * await widget3d.filterObjects([1], { blacklist: true, iterative: true });
     *
     * // Show object 1. Then show object 3. Objects 1 and 3 are visible.
     * await widget3d.filterObjects([1], { blacklist: false });
     * await widget3d.filterObjects([3], { blacklist: false, iterative: true });
     * ```
     */
    filterObjects(ids: Array<ObjectID> | null, options?: FilterOptions): Promise<void>;
    /**
     * Append points of interest to the model.
     *
     * @returns Ids of created points (could be useful if you haven't set them manually).
     *
     * @example
     * ```js
     * // Set points
     * await widget3d.setPoints([{
     *     position: { x: 0, y: 2, z: 0 }
     * }]);
     *
     * // Remove points
     * await widget3d.setPoints(null);
     * ```
     */
    setPoints(pointsList: Array<PointOptions> | null): Promise<Array<ObjectID>>;
    /**
     * Set parameters to explode objects.
     *
     * @example
     * ```js
     * widget3d.setExplosion({
     *     progress: 0.5,
     *     force: 5,
     *     center: { x: 0, y: 0, z: 0 }
     * });
     * ```
     */
    setExplosion(config: Partial<ExplosionOptions> | null): void;
    /**
     * Get minimal distance between two objects.
     *
     * @remarks
     * This method could need time to resolve. Time duration depends on complexity of objects.
     *
     * @example
     * ```js
     * const distancePoints = await widget3d.getDistanceBetween(1, 2);
     * ```
     */
    getDistanceBetween(id0: ObjectID, id1: ObjectID): Promise<DistanceBetweenResult>;
    /**
     * Get position of 3d point in screen space
     *
     * @remarks
     * Returns `null` when point locates behind near plane of camera frustum (behind camera). Zero point locates on top left corner of screen
     *
     * @example
     * ```js
     * const { x, y } = await widget3d.getScreenPosition({ x: 0, y: 0, z: 0 });
     * ```
     */
    getScreenPosition(coords: PlainVector3): PlainVector2 | null;
    /**
     * Raycast objects by 2d screen coordinates
     *
     * @remarks
     * Screen coordinates are absolute.
     * Returns an array of ids of all objects intersected with the ray and sorted from the closest object to the farthest.
     *
     * @example
     * ```js
     * const ids = await widget3d.raycastObjects({ x: 250, y: 500 });
     * ```
     */
    raycastObjects(coords: PlainVector2): Array<ObjectID>;
    /**
     * Get screenshot of canvas area
     *
     * @remarks
     * Returns base64 string.
     * Makes screenshot of full canvas surface when argument is empty
     *
     * @example
     * ```js
     * const screenshot = widget3d.getScreenshot();
     * const image = new Image();
     * image.src = screenshot;
     * ```
     */
    getScreenshot(options?: ScreenshotOptions): string;
    /**
     * Return back debug information.
     *
     * @remarks
     * In addition if {@link Options.logs} option is enabled this method returns public method calls logs.
     *
     * @example
     * ```js
     * const info = widget3d.getDebugInfo();
     * ```
     */
    getDebugInfo(): DebugInfo;
    /**
     * Return 3D context information.
     *
     * @example
     * ```js
     * const { MAX_TEXTURE_SIZE } = widget3d.getContextParams();
     * ```
     */
    getContextParams(): DebugContextParams;
    /**
     * Send report to the `sentry` server.
     *
     * @remarks
     * This feature demands to include extention `SentryExtension` before using.
     * In the fail case it returns rejected promise.
     *
     * @example
     * ```js
     * import IndustrialViewer from '@kamotive/industrial-viewer';
     * import SentryExtension from '@kamotive/industrial-viewer/extensions/sentry';
     *
     * IndustrialViewer.registerExtension(SentryExtension);
     * const widget3d = new IndustrialViewer();
     *
     * try {
     *     await widget3d.sendReport({ message: 'Something is wrong!' });
     * } catch (e) {
     *     // exception code...
     * }
     * ```
     */
    sendReport(options: ReportOptions): Promise<void>;
    /**
     * Extended stats for draw calls, objects, vertices etc.
     *
     * @example
     * ```js
     * widget3d.getRenderStats();
     * ```
     */
    getRenderStats(): RenderStats;
}
export { IndustrialViewer }
export default IndustrialViewer;

/** @public Load model options. */
export declare interface LoadModelOptions {
    /**
     * When this option is enabled model starts rendering as soon as possible without full loading waiting.
     * Available for WMD file format only. (default: `true`)
     */
    progressive?: boolean;
    /** Count of parallel loading chunks. Make sense when option {@link LoadModelOptions.progressive} is enabled. (default: `6`) */
    parallelChunks?: number;
}

/**
 * Enable logging public method calls (available via {@link IndustrialViewer.getDebugInfo} method) (Default: `true`)
 *
 * @public
 */
export declare type LogsOptions = boolean;

/** @public Measure API. */
export declare class Measure {
    
    
    
    /**
     * Get measure mode state
     *
     * @example
     * ```js
     * const modeState = widget3d.measure.getMode();
     * ```
     */
    getMode(): MeasureMode;
    /**
     * Set measure mode state
     *
     * @example
     * ```js
     * widget3d.measure.setMode('angle');
     * ```
     */
    setMode(mode: MeasureMode): void;
    /**
     * Get particular samples by array of ids.
     *
     * @remarks
     * `null` is returned if sample wasn't found
     *
     * @example
     * ```js
     * // Get sample with id 'distance_0'
     * const samples = widget3d.measure.getSamples(['distance_0']);
     * ```
     */
    getSamples(ids: Array<SampleID>): Array<Sample | null>;
    /**
     * Get all samples.
     *
     * @example
     * ```js
     * // Get all samples
     * const samples = widget3d.measure.getSamples(null);
     * ```
     */
    getSamples(ids: null): Array<Sample>;
    /**
     * Deletes all old samples and set new sample list.
     *
     * @example
     * ```js
     * widget3d.measure.setSamples([{
     *     id: 'd0',
     *     type: 'distance',
     *     points: [{ x: 0, y: 0, z: 0 }, { x: 10, y: 5, z: 0 }]
     * }, {
     *     id: 'a0',
     *     type: 'angle',
     *     points: [{ x: 0, y: 0, z: 0 }, { x: 10, y: 5, z: 0 }, { x: 10, y: 15, z: 5 }]
     * }]);
     * ```
     */
    setSamples(samples: Array<SampleSimplified>): void;
    /**
     * Search samples by parameters.
     *
     * @example
     * ```js
     * // Find all selected samples with type 'angle'
     * widget3d.measure.searchSamples({ type: 'angle', selected: true });
     * ```
     */
    searchSamples(searchParams: Partial<Sample>): Array<SampleID>;
    /**
     * Set measure options
     *
     * @example
     * ```js
     * // Set default color
     * widget3d.measure.setOptions({ defaultColor: 'FF00FF' });
     * ```
     */
    setOptions(options: MeasureOptions): void;
    /**
     * Select samples by ids
     *
     * @example
     * ```js
     * // Selection
     * widget3d.measure.selectSamples(['sample_1', 'sample_2']);
     *
     * // Deselection:
     * await widget3d.measure.selectSamples([]);
     * await widget3d.measure.selectSamples(null);
     * ```
     */
    selectSamples(sampleIds: Array<string> | null): void;
}

/**
 * Measure add event.
 * @public
 */
export declare interface MeasureAddEvent extends ViewerEvent {
    type: 'measure.add';
    emitter: EventEmitterType;
    /** Identifier of the sample */
    id: SampleID;
}

/**
 * Measure delete event.
 * @public
 */
export declare interface MeasureDeleteEvent extends ViewerEvent {
    type: 'measure.delete';
    emitter: EventEmitterType;
    /** Identifier of the sample */
    id: SampleID;
}

/**
 * Measure hover event.
 * @public
 */
export declare interface MeasureHoverEvent extends ViewerEvent {
    type: 'measure.hover';
    emitter: EventEmitterType;
    /** Identifier of the hovered measure sample. Null if no samples were crossed. */
    id: SampleID | null;
}

/** @public
 * Measure mode.
 *
 * @remarks
 * - `'view'` - measures are visible but not interactive (you can't select, drag, delete)
 *
 * - `'edit'` - measures are visible and interactive (allows to select, drag, delete)
 *
 * - `'distance'` - mode for creation distance measures
 *
 * - `'angle'` - mode for creation angle measures
 */
export declare type MeasureMode = 'view' | 'edit' | 'distance' | 'angle';

/**
 * Measure move end event
 * @public
 */
export declare interface MeasureMoveEndEvent extends ViewerEvent {
    type: 'measure.move-end';
    emitter: EventEmitterType;
    /** Id of target sample */
    id: SampleID;
    /** Index of point */
    pointIndex: number;
}

/**
 * Measure move event.
 * @public
 */
export declare interface MeasureMoveEvent extends ViewerEvent {
    type: 'measure.move';
    emitter: EventEmitterType;
    /** Id of target sample */
    id: SampleID;
    /** New position of point */
    position: PlainVector3;
    /** Index of point */
    pointIndex: number;
}

/**
 * Measure move start event
 * @public
 */
export declare interface MeasureMoveStartEvent extends ViewerEvent {
    type: 'measure.move-start';
    emitter: EventEmitterType;
    /** Id of target sample */
    id: SampleID;
    /** Index of point */
    pointIndex: number;
}

/** @public Measure options. */
export declare interface MeasureOptions {
    /** Optional (Default: 'single') */
    selectionMode?: MeasureSelectionMode;
    /** Optional (Default: '027AFF')*/
    defaultColor?: string;
    /** Optional (Default: 'Arial')*/
    fontFamily?: string;
}

/**
 * Measure select event.
 * @public
 */
export declare interface MeasureSelectEvent extends ViewerEvent {
    type: 'measure.select';
    emitter: EventEmitterType;
    /** Array of measure sample ids */
    ids: Array<SampleID>;
}

/** @public Sample selection mode. */
export declare type MeasureSelectionMode = 'none' | 'single' | 'multi';

/**
 * Measure state event.
 * @public
 */
export declare interface MeasureStateEvent extends ViewerEvent {
    type: 'measure.state';
    emitter: EventEmitterType;
    mode: MeasureMode;
}

/**
 * Navigation cube options. Show navigation cube in the view corner. (Default: disabled)
 * @public
 */
export declare interface NavigationCubeOptions {
    /** On/off navigation cube (Default: `false`) */
    enabled: boolean;
    /** Position on screen space (Default: `'BOTTOM_RIGHT'`) */
    position: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';
    /** Offset from screen borders in pixels (Default: `{ x: 0, y: 0 }`) */
    offset: PlainVector2;
    /** Size of navigation cube viewport in pixels (Default: `175`) */
    size: number;
}

/**
 * Partial {@link NavigationCubeOptions} or boolean.
 * @public
 */
export declare type NavigationCubeOptionsSet = Partial<NavigationCubeOptions> | boolean;

/**
 * Object unique identifier
 *
 * @remarks
 * Should be in [0x000000, 0xffffff) range
 *
 * @public
 */
export declare type ObjectID = number;

/** @public Objects color options. */
export declare type ObjectsColorOptions = {
    color: string;
    ids: Iterable<ObjectID>;
};

/**
 * Viewer options.
 * @public
 */
export declare interface Options {
    /** {@inheritDoc AntialiasingOptions} */
    antialiasing: AntialiasingOptions;
    /** {@inheritDoc AxesColorsOptions} */
    axesColors: AxesColorsOptions;
    /** {@inheritDoc CameraControlsOptions} */
    cameraControls: CameraControlsOptions;
    /** {@inheritDoc CameraOptions} */
    camera: CameraOptions;
    /** {@inheritDoc CoordinateSystem} */
    coordinateSystem: CoordinateSystem;
    /** {@inheritDoc EdgeGeometryOptions} */
    edgeGeometry: EdgeGeometryOptions;
    /** {@inheritDoc EnvironmentOptions} */
    environment: EnvironmentOptions;
    /** Exprimental options. Don't use it unless you know what you are doing. */
    experimental: ExperimentalOptions;
    /** {@inheritDoc GhostModeOptions} */
    ghostMode: GhostModeOptions;
    /** {@inheritDoc GridOptions} */
    grid: GridOptions;
    /** {@inheritDoc LogsOptions} */
    logs: LogsOptions;
    /** {@inheritDoc NavigationCubeOptions} */
    navigationCube: NavigationCubeOptions;
    /** {@inheritDoc ProgressiveRenderingOptions} */
    progressiveRendering: ProgressiveRenderingOptionsGet;
    /** {@inheritDoc SelectionColorOptions} */
    selectionColor: SelectionColorOptions;
    /** {@inheritDoc SelectionModeOptions} */
    selectionMode: SelectionModeOptions;
    /** {@inheritDoc ShowOriginOptions} */
    showOrigin: ShowOriginOptions;
    /** {@inheritDoc StagingMemorySizeOptions} */
    stagingMemorySize: StagingMemorySizeOptions;
    /** {@inheritDoc ThemeOptions} */
    theme: ThemeOptions;
}

/**
 * Partial {@link OptionsSimplified}.
 * @public
 */
export declare type OptionsSet = Partial<OptionsSimplified>;

/**
 * Simplified interface of {@link Options}.
 * @public
 */
export declare interface OptionsSimplified {
    /** {@inheritDoc AntialiasingOptions} */
    antialiasing: AntialiasingOptions;
    /** {@inheritDoc AxesColorsOptions} */
    axesColors: AxesColorsOptions;
    /** {@inheritDoc CameraControlsOptions} */
    cameraControls: CameraControlsOptionsSet;
    /** {@inheritDoc CameraOptions} */
    camera: CameraOptionsSet;
    /** {@inheritDoc CoordinateSystem} */
    coordinateSystem: CoordinateSystem;
    /** {@inheritDoc EdgeGeometryOptions} */
    edgeGeometry: EdgeGeometryOptionsSet;
    /** {@inheritDoc EnvironmentOptions} */
    environment: EnvironmentOptions;
    /** {@inheritDoc ExperimentalOptions} */
    experimental: ExperimentalOptionsSet;
    /** {@inheritDoc GhostModeOptions} */
    ghostMode: GhostModeOptionsSet;
    /** {@inheritDoc GridOptions} */
    grid: GridOptionsSet;
    /** {@inheritDoc LogsOptions} */
    logs: LogsOptions;
    /** {@inheritDoc NavigationCubeOptions} */
    navigationCube: NavigationCubeOptionsSet;
    /** {@inheritDoc ProgressiveRenderingOptions} */
    progressiveRendering: ProgressiveRenderingOptionsSet;
    /** {@inheritDoc SelectionColorOptions} */
    selectionColor: SelectionColorOptions;
    /** {@inheritDoc SelectionModeOptions} */
    selectionMode: SelectionModeOptions;
    /** {@inheritDoc ShowOriginOptions} */
    showOrigin: ShowOriginOptions;
    /** {@inheritDoc StagingMemorySizeOptions} */
    stagingMemorySize: StagingMemorySizeOptions;
    /** {@inheritDoc ThemeOptions} */
    theme: ThemeOptions;
}

/** @public 2D Vector */
export declare interface PlainVector2 {
    x: number;
    y: number;
}

/** @public 3D Vector */
export declare interface PlainVector3 {
    x: number;
    y: number;
    z: number;
}

/** @public Point options. */
export declare interface PointOptions {
    /** Point 3D position */
    position: PlainVector3;
    /**
     * Unique name of point (Default: generates automatically)
     *
     * @remarks
     * Shouldn't match already exists ObjectID in the current model
     */
    id?: ObjectID;
    /** Point image path (Default: white point) */
    image?: string;
    /** Point color to mix with image (Default: `'ffffff'`) */
    color?: string;
    /** Blending color mode, describes how color will be applyed to the image (Default: `'multiply'`) */
    colorBlendingMethod?: ColorBlendingMethod;
    /** Makes point clickable (Default: `true`) */
    interactive?: boolean;
    /** Draw points always on top of 3D objects (Default: `false`) */
    overlap?: boolean;
    /**
     * Point size. (Default: `1`)
     *
     * @remarks
     * if {@link PointOptions.staticSize} option enabled, then size value represents in "px" units, else in world units.
     */
    size?: number;
    /** Makes point size independent of distance (Default: `false`) */
    staticSize?: boolean;
    /**
     * Defines offset for point origin.
     *
     * @remarks
     * For Vector2 values must be from 0 to 1.
     * For Vector3 values must be from -1 to 1.
     * If origin is vector2, then it will be located on point plane from top-left to the bottom-right corner.
     * If origin is vector3, then it will be located in 3d space and means that point location will be shifted from point rotation center.
     */
    origin?: PlainVector2 | PlainVector3;
}

/**
 * Progressive rendering options. When enabled allows to increase fps on big models. (Default: enabled in `'auto'` mode)
 * @public
 */
export declare interface ProgressiveRenderingOptions {
    /** Enable/disable progressive rendering (Default: `true`) */
    enabled: boolean;
    /** Max number of drawcalls, less number - less showing objects - more FPS (Default: `512`) */
    maxDrawcalls: number;
}

/**
 * {@link ProgressiveRenderingOptions} manual settings or auto mode.
 * @public
 */
export declare type ProgressiveRenderingOptionsGet = ProgressiveRenderingOptions | 'auto';

/**
 * Partial {@link ProgressiveRenderingOptions} or boolean or auto mode. (Default: `'auto'`).
 * @public
 */
export declare type ProgressiveRenderingOptionsSet = Partial<ProgressiveRenderingOptions> | boolean | 'auto';

/**
 * Progress event.
 * @public
 */
export declare interface ProgressLoadingEvent extends ViewerEvent {
    type: 'progress';
    loaded: number;
    total: number;
    chunksLoaded: number;
    chunksTotal: number;
}

/**
 * Renderer statistics.
 *
 * @public
 */
export declare interface RenderStats {
    vertexCount: number;
    subpassCount: number;
    programCount: number;
    drawCallCount: number;
    instanceCount: number;
    materialCount: number;
}

/** @public Report options. */
export declare interface ReportOptions {
    message: string;
    email?: string;
    name?: string;
}

/**
 * Resize event.
 * @public
 */
export declare interface ResizeEvent extends ViewerEvent {
    type: 'resize';
    width: number;
    height: number;
}

/** @public Measure sample discription. */
export declare interface Sample {
    id: string;
    type: SampleType;
    points: Array<PlainVector3>;
    visible: boolean;
    dynamic: boolean;
    color: string;
    value: number;
    unit: string;
}

/** @public Identifier of the measure sample. */
export declare type SampleID = string;

/** @public Simplified interface of {@link Sample} with optional fields */
export declare interface SampleSimplified {
    id: string;
    type: SampleType;
    points: Array<PlainVector3>;
    /** Optional */
    color?: string;
    /** Optional */
    dynamic?: boolean;
    /** Optional */
    visible?: boolean;
    /** Optional */
    value?: number;
    /** Optional */
    unit?: string;
}

/** @public Sample type. */
export declare type SampleType = 'distance' | 'angle';

/** @public Screenshot options. */
export declare interface ScreenshotOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fillColor?: string;
}

/** @public Section box options. */
export declare interface SectionBoxOptions {
    /** The lower corner of the box */
    min: PlainVector3;
    /** The higher corner of the box */
    max: PlainVector3;
}

/**
 * Select event.
 * @public
 */
export declare interface SelectEvent extends ViewerEvent {
    type: 'select';
    ids: Array<ObjectID>;
}

/**
 * Selection color. (Default: `'FF0000'`)
 * @public
 */
export declare type SelectionColorOptions = string;

/**
 * Selection mode. (Default: `'single'`)
 *
 * @remarks
 * - `'none'` - auto selection disabled on object click
 *
 * - `'single'` - only one object is selected at once
 *
 * - `'multi'` - multi selection mode
 *
 * @public
 */
export declare type SelectionModeOptions = 'none' | 'single' | 'multi';

/**
 * Show model's point of origin. (Default: `false`)
 * @public
 */
export declare type ShowOriginOptions = boolean;

/**
 * Memory size allocation in megabytes. (Default: `128` for desktop and `96` for mobiles)
 *
 * @remarks
 * You could set it to 0 for size auto detection.
 *
 * @public
 */
export declare type StagingMemorySizeOptions = number;

/** @public Stats UI options */
export declare interface StatsOptions {
    /** Show/hide stats (Default: `true`) */
    enabled: boolean;
    /** UI CSS style (Default: `{ position: 'absolute', left: '0', top: '0' }`) */
    style: Partial<CSSStyleDeclaration>;
}

/** @public Partial {@link StatsOptions} or boolean. (Default: `false`) */
export declare type StatsOptionsSet = boolean | Partial<StatsOptions>;

/**
 * Theme options. (Default: transparent background)
 *
 * @public
 */
export declare interface ThemeOptions {
    background?: CSSStyleDeclaration['background'];
    backgroundImage?: CSSStyleDeclaration['backgroundImage'];
    backgroundColor?: CSSStyleDeclaration['backgroundColor'];
}

/**
 * Base event interface.
 * @public
 */
export declare interface ViewerEvent extends EmitterEvent {
    type: EventType;
}

export { }
