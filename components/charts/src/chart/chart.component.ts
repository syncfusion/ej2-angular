import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Chart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { SeriesCollectionDirective } from './series.directive';
import { AxesDirective } from './axes.directive';
import { RowsDirective } from './rows.directive';
import { ColumnsDirective } from './columns.directive';
import { AnnotationsDirective } from './annotations.directive';
import { SelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { IndicatorsDirective } from './indicators.directive';

export const inputs: string[] = ['annotations','axes','background','border','chartArea','columns','crosshair','currencyCode','dataSource','description','enableAnimation','enableExport','enablePersistence','enableRtl','enableSideBySidePlacement','height','indicators','isMultiSelect','isTransposed','legendSettings','locale','margin','palettes','primaryXAxis','primaryYAxis','rows','selectedDataIndexes','selectionMode','series','subTitle','subTitleStyle','tabIndex','theme','title','titleStyle','tooltip','useGroupingSeparator','width','zoomSettings'];
export const outputs: string[] = ['animationComplete','annotationRender','axisLabelRender','axisMultiLabelRender','axisRangeCalculated','beforePrint','chartMouseClick','chartMouseDown','chartMouseLeave','chartMouseMove','chartMouseUp','dragComplete','legendRender','load','loaded','pointClick','pointMove','pointRender','resized','scrollChanged','scrollEnd','scrollStart','seriesRender','textRender','tooltipRender','zoomComplete'];
export const twoWays: string[] = [''];

/**
 * Chart Component
 * ```html
 * <ejschart></ejschart>
 * ```
 */
@Component({
    selector: 'ejs-chart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(SeriesCollectionDirective), 
        childAxes: new ContentChild(AxesDirective), 
        childRows: new ContentChild(RowsDirective), 
        childColumns: new ContentChild(ColumnsDirective), 
        childAnnotations: new ContentChild(AnnotationsDirective), 
        childSelectedDataIndexes: new ContentChild(SelectedDataIndexesDirective), 
        childIndicators: new ContentChild(IndicatorsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class ChartComponent extends Chart implements IComponentBase {
    public childSeries: any;
    public childAxes: any;
    public childRows: any;
    public childColumns: any;
    public childAnnotations: any;
    public childSelectedDataIndexes: any;
    public childIndicators: any;
    public tags: string[] = ['series', 'axes', 'rows', 'columns', 'annotations', 'selectedDataIndexes', 'indicators'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsLineSeries')); }catch {} 





















































        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}
