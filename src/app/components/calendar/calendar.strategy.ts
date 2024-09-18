import {
  CdkVirtualScrollViewport,
  VirtualScrollStrategy,
} from '@angular/cdk/scrolling';
import { distinctUntilChanged, Observable, Subject } from 'rxjs';

export class CalendarStrategy implements VirtualScrollStrategy {
  readonly #scrolledIndexChange = new Subject<number>();

  scrolledIndexChange: Observable<number> = this.#scrolledIndexChange.pipe(
    distinctUntilChanged(),
  );
  /** The attached viewport. */
  #viewport: CdkVirtualScrollViewport | null = null;

  /** The size of the items in the virtually scrolling list. */
  #itemSize: number;

  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize: number) {
    this.#itemSize = itemSize;
  }

  attach(viewport: CdkVirtualScrollViewport): void {
    this.#viewport = viewport;
  }

  detach(): void {
    this.#scrolledIndexChange.complete();
    this.#viewport = null;
  }

  onContentScrolled(): void {
    throw new Error('Method not implemented.');
  }
  onDataLengthChanged(): void {
    /* no-op */
  }
  onContentRendered(): void {
    /* no-op */
  }
  onRenderedOffsetChanged(): void {
    /* no-op */
  }
  scrollToIndex(index: number, behavior: ScrollBehavior): void {
    if (this.#viewport) {
      this.#viewport.scrollToOffset(index * this.#itemSize, behavior);
    }
  }
}
