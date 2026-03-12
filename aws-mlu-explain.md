# AWS MLU-Explain

**Source Compilation:** [aws-mlu-explain](https://github.com/Kohnnn/aws-mlu-explain)
**Website:** [https://mlu-explain.github.io/](https://mlu-explain.github.io/)

## What the Site is About
MLU-Explain (Machine Learning University Explain) is an educational platform by Amazon. It provides visual, interactive articles explaining core machine learning concepts like Linear Regression, Decision Trees, and Random Forests. It uses a highly effective "scrollytelling" narrative format where the text and visualizations are tightly coupled.

## Interactive Elements & Interactivity Level
- **Scrollytelling (Scroll-Triggered State Changes):** As the reader scrolls down the page, the text is typically locked to the left side of the screen, while a sticky visualization pane sits on the right. Scrolling past specific textual "waypoints" triggers smooth, animated transitions in the visualization (e.g., drawing a new regression line, splitting a dataset point-by-point). **Interactivity Level:** High and seamless.
- **Real-Time Property Sliders:** Articles embed standard `<input type="range">` sliders directly into the text (e.g., adjusting the "square footage" to predict house prices). Moving these sliders updates the mathematical formulas in the text and instantly moves crosshairs/lines on the adjacent charts. **Interactivity Level:** Real-time, 60fps responsiveness.
- **Interactive SVG Charts:** Charts are drawn using scalable vector graphics. Hovering over data points triggers custom tooltips. 
- **Contextual Hover/Click:** Hovering over bolded glossary terms in the text often highlights the corresponding node or line in the visualization chart. Small `[i]` icons can be clicked to open lightweight informational modals.

## Tech Stack & Architecture (How to Replicate)
To replicate the MLU-Explain architecture, you need a stack that excels at binding localized state to DOM elements and rendering complex SVGs.

*   **Core Framework:** **Svelte**. The site relies heavily on Svelte's compiler-based reactivity. Unlike React, Svelte doesn't use a virtual DOM, making surgical updates to SVG attributes incredibly fast—crucial for 60fps sliders.
*   **Visualization Library:** **D3.js**. While Svelte manages the DOM, D3 is used "under the hood" for its powerful math utilities: creating scales (mapping domain to range), generating axis ticks, and interpolating paths for smooth transitions.
*   **Math Typesetting:** **KaTeX**. Chosen over MathJax for its superior rendering speed, which is vital when mathematical formulas need to update in real-time as a slider is dragged.
*   **Scroll Management:** Typically achieved via the **Intersection Observer API** (or lightweight wrappers like `scrollama.js`). You configure observers on text `<section>` elements. When a section enters the viewport, it dispatches an event that updates a global "currentStep" state variable in Svelte, which in turn triggers D3 transitions.
*   **Rendering Medium:** Primarily **Manipulated SVGs** rather than Canvas. This allows individual data points to be treated as standard DOM elements and styled via CSS.
