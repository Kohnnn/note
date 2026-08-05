from pathlib import Path
import re

ROOT = Path(r"C:/Users/Admin/Desktop/PersonalWebsite/interactive-note/interactive-explanation")

COPY = {
    "alpha-compositing": {
        "title": "Treat every transparent pixel as a negotiation between coverage, color, and order.",
        "summary": "Begin with the draggable opacity scenes before the formulas. Once you have seen edges soften, layers stack, and color leak through, the alpha math stops feeling like graphics jargon and starts reading like bookkeeping for light.",
        "chips": [
            "Drag the first blend",
            "Compare edge coverage",
            "Read source-over as a pipeline",
        ],
        "label": "Start with the edge case",
        "panel": "Drag the rose-glasses and coverage demos first. The important shift is noticing that transparency is not one effect but a pipeline: coverage, alpha, then composition. After that, Porter-Duff reads like a design vocabulary instead of a wall of operators.",
        "actions": [
            "Start with rose glasses",
            "Jump to Porter-Duff",
        ],
    },
    "color-spaces": {
        "title": "Move between pickers first, then let the math explain why the same numbers stop matching.",
        "summary": "This route works like a calibration exercise. Compare early pickers, watch gamma distort intuition, and carry that mismatch into chromaticity and gamut plots so every later diagram answers a surprise you already felt.",
        "chips": [
            "Compare RGB pickers",
            "Watch gamma bend brightness",
            "Read gamut as constraint",
        ],
        "label": "Start with the mismatch",
        "panel": "Drag the first picker until two controls that look equivalent stop agreeing. That surprise is the engine for the whole article. Once you feel it, intensity, chromaticity, and gamut sections become explanations of a broken assumption instead of isolated definitions.",
        "actions": [
            "Start with the pickers",
            "Jump to intensity mismatch",
        ],
    },
    "sound": {
        "title": "Start with the keyboard, then let the waveform story catch up to what your ear already knows.",
        "summary": "Treat the opening keys as the anchor, not the warm-up. Trigger a few notes, notice repetition and pitch shifts, then follow how pressure waves, particles, and waveforms turn that sensory pattern into a model you can inspect.",
        "chips": [
            "Trigger a few notes",
            "Track pressure as motion",
            "Read waveforms with your ear",
        ],
        "label": "Start with listening",
        "panel": "Play the first keyboard before you scroll. The fastest way into the article is to give yourself a sound to remember, then use the air and waveform sections to explain why that sound feels stable, louder, lower, or more complex.",
        "actions": [
            "Play the keyboard",
            "Jump to making sounds",
        ],
    },
    "cameras-and-lenses": {
        "title": "Tune the camera first, then let the optics story explain what the image keeps trading away.",
        "summary": "Open with the lens controls, not the theory. Change aperture and focus distance, watch the image reshape itself, then use sensors, pinholes, lenses, and aberrations to explain why every sharper choice costs something somewhere else.",
        "chips": [
            "Tune aperture and focus",
            "Compare pinholes and lenses",
            "Follow blur back to physics",
        ],
        "label": "Start with the tradeoff",
        "panel": "Use the top camera demo until one adjustment improves the image while another makes it worse. That tension drives the whole route. After that, detector, pinhole, and glass sections feel like reasons, not detours.",
        "actions": [
            "Tune the opening lens",
            "Jump to recording light",
        ],
    },
    "lights-and-shadows": {
        "title": "Move the light first, then let radiance, angle, and bounce explain the shape that appears.",
        "summary": "Start by rotating and resizing the source so the shadow changes under your hand. Once you have seen softness, falloff, and direction emerge visually, the later sections can name the pattern instead of asking you to imagine it.",
        "chips": [
            "Rotate the source",
            "Compare falloff and spread",
            "Read shadows as geometry",
        ],
        "label": "Start with the light source",
        "panel": "Spend a minute changing the opening light before you read. The route clicks once shadow shape feels like something you can steer, because power, inverse-square, radiance, and reflections all explain the same steering logic from different angles.",
        "actions": [
            "Rotate the first light",
            "Jump to power",
        ],
    },
    "tesseract": {
        "title": "Meet the 4D object first, then use lower dimensions as scaffolding instead of homework.",
        "summary": "Begin with the strange slice before the definitions. Once the top demo is lodged in your head, cubes, projections, rotations, and slices stop feeling like setup and start acting like tools for decoding one stubborn visual event.",
        "chips": [
            "Drag the first slice",
            "Build up from cubes",
            "Read shadows as evidence",
        ],
        "label": "Start with the weird part",
        "panel": "Give the first slice demo a full minute before you commit to the prose. The article works best when you already have one impossible-looking motion to explain, because every lower-dimensional stop is there to make that motion less mysterious.",
        "actions": [
            "Start with the slice",
            "Jump to building cubes",
        ],
    },
    "gears": {
        "title": "Watch the gear pair settle into shared motion, then read ratio and torque as consequences.",
        "summary": "Let the opening pair spin before you reach for terminology. Once direction swap, shared contact speed, and ratio change feel obvious to your eye, the later sections can sharpen the model instead of introducing it from zero.",
        "chips": [
            "Watch the first mesh",
            "Compare ratio changes",
            "Follow force into tooth shape",
        ],
        "label": "Start with contact",
        "panel": "Let the first gear pair run for a moment before you read. The key intuition is that the teeth are not decorative; they are a way of enforcing shared motion. Once that lands, velocity, transmission, torque, and involute geometry all line up.",
        "actions": [
            "Watch the first gear pair",
            "Jump to transmission",
        ],
    },
    "gps": {
        "title": "Build the sky picture first, then let timing, range, and correction layers earn their complexity.",
        "summary": "Start with the orbital view so the system feels physical before the numbers appear. From there, simple positioning, time of flight, clock bias, and signal timing read as layers added to one spatial picture rather than independent tricks.",
        "chips": [
            "Rotate the constellation",
            "Translate distance into time",
            "Track the error corrections",
        ],
        "label": "Start with the constellation",
        "panel": "Rotate the satellites until you can picture the receiver living inside a moving shell of clocks. That makes the rest of the route easier to hold: trilateration becomes a geometric story, and timing errors become a practical repair job.",
        "actions": [
            "Rotate the sky shell",
            "Jump to simple positioning",
        ],
    },
    "earth-and-sun": {
        "title": "Scrub the sunlight first, then let orbit, tilt, and timekeeping explain the pattern.",
        "summary": "Move the opening globe through date and hour before you read too much prose. Once you see the light line migrate for yourself, ellipse, axial tilt, solar day, and analemma sections all become explanations of a pattern you have already watched unfold.",
        "chips": [
            "Scrub sunlight across Earth",
            "Compare orbit with tilt",
            "Follow seasons into timekeeping",
        ],
        "label": "Start with the daylight line",
        "panel": "Stay with the first globe until the moving terminator feels familiar. The route becomes much easier after that, because every later section is really answering one question: why does the same planet keep presenting different sunlight schedules?",
        "actions": [
            "Scrub the sunlight",
            "Jump to orbit",
        ],
    },
    "bicycle": {
        "title": "Move the rider first, then let force diagrams and frame loads explain why the bike behaves.",
        "summary": "Start with the moving bicycle before the symbols. Once balance, lean, and steering have a visible rhythm, the article can build from forces to slip, torsion, and frame stress without feeling like separate topics stitched together.",
        "chips": [
            "Move the rider and steer",
            "Track forces through the frame",
            "Read stability as interaction",
        ],
        "label": "Start with the motion",
        "panel": "Use the rider slider and camera drag before you settle into the text. The point is to feel the bike as a coordinated system first, because the later diagrams are strongest when they explain motion you have already watched instead of motion you are still imagining.",
        "actions": [
            "Move the rider",
            "Jump to force balance",
        ],
    },
    "airfoil": {
        "title": "Watch the flow reorganize first, then let pressure and boundary layers explain lift.",
        "summary": "Open with the flow scenes, not the definitions. Scrub the airfoil and viscosity demos until the streamlines and markers feel alive, then use velocity, pressure, and boundary-layer sections to explain why that motion produces forces at all.",
        "chips": [
            "Scrub the first flow scene",
            "Compare viscosity regimes",
            "Follow pressure into lift",
        ],
        "label": "Start with the flow field",
        "panel": "Stay with the opening slider until you can see the flow pattern change before you can name it. That is the right order for this route. Once the motion is familiar, pressure plots and lift language start clarifying the picture instead of competing with it.",
        "actions": [
            "Scrub the airfoil",
            "Jump to airfoil flow",
        ],
    },
    "curves-and-surfaces": {
        "title": "Reshape the surface first, then let control points and interpolation explain the smoothness.",
        "summary": "Start by dragging the opening form until the surface feels editable. After that, control points, interpolation, splines, and subdivision read as progressively deeper answers to one question: how do you steer curvature without drawing every point by hand?",
        "chips": [
            "Reshape the first surface",
            "Follow control points into splines",
            "Read smoothness as construction",
        ],
        "label": "Start with the shape",
        "panel": "Work the opening surface before you read. The article is much cleaner once you already trust that a few handles can steer a richer form, because every later section is unpacking how that promise is actually delivered.",
        "actions": [
            "Reshape the surface",
            "Jump to defining the shape",
        ],
    },
    "internal-combustion-engine": {
        "title": "Rotate the engine first, then let crank, combustion, and timing turn into one loop.",
        "summary": "Begin with the full assembly in motion. Once pistons, crank, valves, and ignition already feel like parts of one loop, the later sections can zoom in without making the engine seem like a pile of unrelated mechanisms.",
        "chips": [
            "Rotate the full assembly",
            "Follow power through the cycle",
            "Read timing as coordination",
        ],
        "label": "Start with the assembly",
        "panel": "Drag the opening engine until you can track one cycle end to end. That is the anchor for the whole route. After that, crank, cylinder, valve train, pressure, and starter sections all feel like zoom levels on the same machine.",
        "actions": [
            "Rotate the engine",
            "Jump to crank",
        ],
    },
    "mechanical-watch": {
        "title": "Take the movement apart as a timed energy system, not a catalog of tiny parts.",
        "summary": "This route works best when you begin with the full ETA 2824-2 movement in view and only then start isolating mechanisms. Use the cutaway first, then follow stored energy, gearing, escapement, and winding as successive constraints on one stream of motion. <a href=\"https://calibercorner.com/eta-caliber-2824-2/\">Movement reference on Caliber Corner.</a>",
        "chips": [
            "Rotate the full movement",
            "Follow energy into timing",
            "Trace winding back to the hands",
        ],
        "label": "Start with the movement",
        "panel": "Rotate the movement and scrub the first cutaway before you read far. Once you can see energy entering through the mainspring and exiting as regulated motion, the power train, escapement, and automatic winding sections stop feeling like watch jargon and start reading like control design.",
        "actions": [
            "Inspect the movement",
            "Jump to automatic winding",
        ],
    },
    "naval-architecture": {
        "title": "Set the hull in motion first, then let buoyancy, stability, and propulsion explain the response.",
        "summary": "Open with the ship in water before the formulas. Once you have seen the hull pitch, settle, and resist disturbance, the later sections on pressure, buoyancy, stability, free surface, and propulsion all read like causes within one fluid story.",
        "chips": [
            "Rock the ship",
            "Follow force through buoyancy",
            "Read stability as geometry",
        ],
        "label": "Start with the hull",
        "panel": "Spend a minute with the opening ship scene before you read. The route lands faster once the water response feels physical, because syringe, submerged-body, stability, and wave sections are all explaining different faces of the same negotiation between hull and fluid.",
        "actions": [
            "Rock the hull",
            "Jump to buoyancy",
        ],
    },
}


def replace_once(text: str, pattern: str, replacement: str) -> str:
    new_text, count = re.subn(pattern, replacement, text, count=1, flags=re.S)
    if count != 1:
        raise ValueError(f"Pattern not found exactly once: {pattern}")
    return new_text


for slug, content in COPY.items():
    path = ROOT / slug / "index.html"
    text = path.read_text(encoding="utf-8")
    text = replace_once(text, r'(<h1 class="story-hero__title">)(.*?)(</h1>)', rf'\1{content["title"]}\3')
    text = replace_once(text, r'(<p class="story-hero__summary">)(.*?)(</p>)', rf'\1\n          {content["summary"]}\n        \3')

    chips = iter(content["chips"])
    def chip_repl(match):
        return f'{match.group(1)}{next(chips)}{match.group(3)}'
    text, chip_count = re.subn(r'(<span class="story-chip">)(.*?)(</span>)', chip_repl, text, count=3, flags=re.S)
    if chip_count != 3:
        raise ValueError(f"Expected 3 chips in {slug}, found {chip_count}")

    text = replace_once(text, r'(<span class="story-callout__label">)(.*?)(</span>)', rf'\1{content["label"]}\3')
    text = replace_once(text, r'(<span class="story-callout__label">.*?</span>\s*<p>)(.*?)(</p>)', rf'\1\n          {content["panel"]}\n        \3')

    actions = iter(content["actions"])
    def action_repl(match):
        return f'{match.group(1)}{next(actions)}{match.group(3)}'
    text, action_count = re.subn(r'(<a class="story-button(?: story-button--secondary)?" href=".*?">)(.*?)(</a>)', action_repl, text, count=2, flags=re.S)
    if action_count != 2:
        raise ValueError(f"Expected 2 actions in {slug}, found {action_count}")

    path.write_text(text, encoding="utf-8")
    print(f"updated {slug}")
