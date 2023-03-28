import React from "react";

interface HTMLMarqueeElement extends HTMLElement {}

export interface MarqueeHTMLAttributes<T> extends React.HTMLAttributes<T> {
  /** Defines component and styles which will be used */
  children?: React.ReactNode;
  /**
   *
   * Sets how the text is scrolled within the marquee. Possible values are scroll, slide and alternate. If no value is specified, the default value is scroll.
   */
  behavior?: "scroll" | "slide" | "alternate";

  /**
   *
   * Sets the background color through color name or hexadecimal value.
   */
  bgcolor?: React.CSSProperties["backgroundColor"];

  /**
   *
   * Sets the direction of the scrolling within the marquee. Possible values are left, right, up and down. If no value is specified, the default value is left.
   */
  direction?: "left" | "right" | "up" | "down";

  /**
   *
   * Sets the height.
   */
  height?: React.CSSProperties["height"];

  /**
   *
   * Sets the horizontal margin
   */
  hspace?: number | string;

  /**
   *
   * Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously.
   */
  loop?: number | -1;

  /**
   *
   * Sets the amount of scrolling at each interval in pixels. The default value is 6.
   */
  scrollamount?: number | 6;

  /**
   *
   * Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead unless truespeed is specified.
   */
  scrolldelay?: number;

  /**
   *
   * By default, scrolldelay values lower than 60 are ignored. If truespeed is present, those values are not ignored.
   */
  truespeed?: number;

  /**
   *
   * Sets the vertical margin in pixels or percentage value.
   * @type `number` for pixel
   * @type `string` for percentage.
   */
  vspace?: number | string;

  /**
   *
   * Sets the width.
   */
  width?: React.CSSProperties["width"];

  /**
   * Fires when the marquee has reached the end of its scroll position. It can only fire when the behavior attribute is set to alternate.
   */
  onBounce?: () => void;

  /**
   *Fires when the marquee has finished the amount of scrolling that is set by the loop attribute. It can only fire when the loop attribute is set to some number that is greater than 0.
   */
  onFinish?: () => void;

  /**
   * Fires when the marquee starts scrolling.
   */
  onStart?: () => void;

  /**
   * Starts scrolling of the marquee.
   */
  start?: boolean;
  /**
   * Stops scrolling of the marquee.
   */
  stop?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: MarqueeHTMLAttributes<HTMLMarqueeElement>;
    }
  }
}
