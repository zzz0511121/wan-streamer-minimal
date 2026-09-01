# Wan-Streamer Minimal

A minimal implementation of the Wan-Streamer training mechanism: real multi-party meeting streams are aligned onto one 160 ms causal timeline, where a single shared representation learns to predict the next text, audio, and video states.

**Live page:**&#8203; https://zzz0511121.github.io/wan-streamer-minimal/

## What this project is

This repository hosts the static project page for the Wan-Streamer minimal implementation. The page documents how real AMI meeting data was organized into a `world + event stream`, aligned to a 160 ms causal grid, and used to train a compact three-modal predictor (SmolLM2-360M text backbone + Mimi audio codes + Wan-VAE video latents + 128-D shared causal representation, ~5.7M trainable parameters).

## What has been validated

- A causal training contract holds across text, audio, and video: each prediction head beats its copy/shuffle baseline on the AMI-medium validation set (seeds 7, 17, 29).
- Closed-loop behavior is reported honestly on a frozen model: text loops are numerically stable but repetitive; audio loops collapse (−21 dB vs. target RMS); video stays stable at 2.56 s and degrades by 5.12 s.

These are **preliminary, validation-only results**. No claim is made about full-scale generation quality, and the holdout set has not been touched. See the "Scope & next step" section of the page for the full evidence boundary.

## Repository contents

| File | Purpose |
|---|---|
| `index.html` | The project page (single page) |
| `styles.css`, `script.js` | Styling and minimal interactions |
| `assets/` | Media (video/audio diagnostics), figures, progress-report PDF |
| `notices.html`, `THIRD_PARTY_NOTICES.md` | AMI corpus attribution (CC BY 4.0) |

## License notes

The AMI meeting corpus is used under the AMI license (CC BY 4.0); see `THIRD_PARTY_NOTICES.md` and the on-page attribution.
