export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(target: any, _options?: any) {
    const targets = Array.isArray(target) ? target : [target];
    targets.forEach((t) => {
      const elements = typeof t === "string" ? Array.from(document.querySelectorAll(t)) : [t];
      elements.forEach((el: any) => {
        if (!el || !el.textContent) return;
        const text = el.textContent;
        el.innerHTML = "";
        text.split("").forEach((char: string) => {
          const span = document.createElement("span");
          span.style.display = "inline-block";
          span.textContent = char === " " ? "\u00A0" : char;
          el.appendChild(span);
          this.chars.push(span);
        });
        this.words.push(el);
        this.lines.push(el);
      });
    });
  }

  revert() {}
}

export class ScrollSmoother {
  static create(_config: any) {
    return new ScrollSmoother();
  }
  static refresh() {}
  scrollTop(_val?: number) { return 0; }
  scrollTo(target: any, _smooth?: boolean, _position?: string) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  paused(_val?: boolean) { return false; }
}
