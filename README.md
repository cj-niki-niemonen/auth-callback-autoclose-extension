# Auth Callback Auto Close Extension

![Extension icon](icon-128.png)

Chrome/Chromium extension that closes successful OAuth callback tabs for
`http://127.0.0.1:<port>/oauth/callback`.

## Load unpacked

1. Open `chrome://extensions`.
2. Enable "Developer mode".
3. Click "Load unpacked" and select this folder.

## Build

Run:

```bash
./build.sh
```

The zip will be created in `dist/`.

## Customize

Edit `manifest.json` if your callback URL differs (host, path, or scheme).
