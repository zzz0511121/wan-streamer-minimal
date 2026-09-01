# Wan-Streamer Minimal — Project Page

Static research project page for the Wan-Streamer minimal implementation.

## Local preview

Run a static server from this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment

1. Create a public repository such as `wan-streamer-minimal`.
2. Copy this directory into the repository root and push to `main`.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. The project page will be published at `https://<username>.github.io/wan-streamer-minimal/`.

## Before publishing

- Confirm the author name and add affiliation/contact details if desired.
- Replace or remove any media that should not be redistributed.
- Add a source-code link only when the code repository is ready.
- Keep checkpoints, latent caches, raw corpora, and internal experiment directories out of this repository.
- Retain `THIRD_PARTY_NOTICES.md` and the on-page AMI attribution when publishing the included media.

## Evidence boundary

The quantitative claims are taken from the frozen S2, S3, and S3.1 validation summaries. The closed-loop media is the preselected S3.1 `speech_start` segment at horizon 16, seed 7. It is a diagnostic artifact, not a claim of production-quality generation.
