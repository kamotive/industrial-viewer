
/**
  * Antialiasing options. (Default: `{ mode: 'FXAA', pixelRatio: 1 }` or `{ mode: 'FXAA', pixelRatio: 2 }` depends on device DPI)
  * @public
  */
declare interface AntialiasingOptions {
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
declare interface AxesColorsOptions {
    x: string;
    y: string;
    z: string;
}

/**
 * Camera controls damping options.
 * @public
 */
declare interface CameraControlsDampingOptions {
    /** On/off camera damping (Default: `true`) */
    enabled: boolean;
    /** Damping factor strength (Default: `0.64`) */
    factor: number;
}

/**
 * Partial {@link CameraControlsOptionsSimplified} or boolean.
 * @public
 */
declare type CameraControlsOptionsSet = Partial<CameraControlsOptionsSimplified> | boolean;

/**
 * Simplified interface of {@link CameraControlsOptions}.
 * @public
 */
declare interface CameraControlsOptionsSimplified {
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
declare interface CameraControlsPanningOptions {
    /** On/off camera panning (Default: `true`) */
    enabled: boolean;
    /** Speed of camera panning (Default: `1`) */
    speed: number;
}

/**
 * Camera controls rotation options.
 * @public
 */
declare interface CameraControlsRotationOptions {
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
declare interface CameraControlsZoomOptions {
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
declare interface CameraOptions {
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
declare type CameraOptionsSet = Partial<CameraOptions>;

/**
 * Camera projection type. (Default: `'perspective'`)
 * @public
 */
declare type CameraProjectionType = 'perspective' | 'orthographic';

/**
 * Coordinate system axes orientation. (Default: `'Y_UP'`)
 *
 * @remarks
 * Affects many features. Set it one time to avoid issues.
 *
 * @public
 */
declare type CoordinateSystem = 'Y_UP' | 'Z_UP';

/** @public */
declare const Default: Preset;
export default Default;

/**
 * Edge geometry options. Mode to show object edges. (Default: disabled).
 *
 * @remarks
 * Affects performance. Better not to enable for big models.
 *
 * @public
 */
declare interface EdgeGeometryOptions {
    /** Show/hide geometry edges (Default: `true`) */
    enabled: boolean;
    /** Color of edges (Default: `'202020'`) */
    color: string;
}

/**
 * Partial {@link EdgeGeometryOptions} or boolean. (Default: `false`)
 * @public
 */
declare type EdgeGeometryOptionsSet = Partial<EdgeGeometryOptions> | boolean;

/**
 * Environment options. (Default: loaded IBL from the default preset)
 * @public
 */
declare interface EnvironmentOptions {
    ibl: IBLOptions;
}

/** @public Partial {@link ExperimentalOptions} */
declare interface ExperimentalOptionsSet {
    stats: StatsOptionsSet;
}

/**
 * Ghost mode options. Allows to see hidden objects as transparent ghosts. (Default: disabled)
 *
 * @remarks
 * Ghost mode could decrease performance.
 *
 * @public
 */
declare type GhostModeOptions = {
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
declare type GhostModeOptionsSet = Partial<GhostModeOptions> | boolean;

/**
 * Grid options. Enabling showing grids/levels, setting appropriate options for them. (Default: disabled)
 * @public
 */
declare type GridOptions = {
    /** Show/hide grids and levels (Default: `true`) */
    enabled: boolean;
    /** Grid line color (Default: `'FFFFFF'`) */
    color: string;
};

/**
 * Partial {@link GridOptions} or boolean.
 * @public
 */
declare type GridOptionsSet = Partial<GridOptions> | boolean;

/**
 * IBL (image-based lighting) options.
 * @public
 */
declare interface IBLOptions {
    src: string;
    luminance: number;
    name: string | undefined;
}

/**
 * Enable logging public method calls (available via {@link IndustrialViewer.getDebugInfo} method) (Default: `true`)
 *
 * @public
 */
declare type LogsOptions = boolean;

/**
 * Navigation cube options. Show navigation cube in the view corner. (Default: disabled)
 * @public
 */
declare interface NavigationCubeOptions {
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
declare type NavigationCubeOptionsSet = Partial<NavigationCubeOptions> | boolean;

/**
 * Simplified interface of {@link Options}.
 * @public
 */
declare interface OptionsSimplified {
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
declare interface PlainVector2 {
    x: number;
    y: number;
}

declare type Preset = Partial<OptionsSimplified> & {
    environment: EnvironmentOptions;
};

/**
 * Progressive rendering options. When enabled allows to increase fps on big models. (Default: enabled in `'auto'` mode)
 * @public
 */
declare interface ProgressiveRenderingOptions {
    /** Enable/disable progressive rendering (Default: `true`) */
    enabled: boolean;
    /** Max number of drawcalls, less number - less showing objects - more FPS (Default: `512`) */
    maxDrawcalls: number;
}

/**
 * Partial {@link ProgressiveRenderingOptions} or boolean or auto mode. (Default: `'auto'`).
 * @public
 */
declare type ProgressiveRenderingOptionsSet = Partial<ProgressiveRenderingOptions> | boolean | 'auto';

/**
 * Selection color. (Default: `'FF0000'`)
 * @public
 */
declare type SelectionColorOptions = string;

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
declare type SelectionModeOptions = 'none' | 'single' | 'multi';

/**
 * Show model's point of origin. (Default: `false`)
 * @public
 */
declare type ShowOriginOptions = boolean;

/**
 * Memory size allocation in megabytes. (Default: `128` for desktop and `96` for mobiles)
 *
 * @remarks
 * You could set it to 0 for size auto detection.
 *
 * @public
 */
declare type StagingMemorySizeOptions = number;

/** @public Stats UI options */
declare interface StatsOptions {
    /** Show/hide stats (Default: `true`) */
    enabled: boolean;
    /** UI CSS style (Default: `{ position: 'absolute', left: '0', top: '0' }`) */
    style: Partial<CSSStyleDeclaration>;
}

/** @public Partial {@link StatsOptions} or boolean. (Default: `false`) */
declare type StatsOptionsSet = boolean | Partial<StatsOptions>;

/**
 * Theme options. (Default: transparent background)
 *
 * @public
 */
declare interface ThemeOptions {
    background?: CSSStyleDeclaration['background'];
    backgroundImage?: CSSStyleDeclaration['backgroundImage'];
    backgroundColor?: CSSStyleDeclaration['backgroundColor'];
}

export { }
