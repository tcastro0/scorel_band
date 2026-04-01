# Scorel 🎾

A padel score tracker app for the **Xiaomi Smart Band 10**, built with Xiaomi Vela JS (RPK format). Designed to be used on the wrist during a match — no phone needed while playing.

---

## Features

- Full padel scoring: 15 / 30 / 40 / Deuce / Advantage
- **Golden Point** mode (sudden death at deuce) — on by default
- Standard **Advantage** mode
- Tracks games, sets (best of 3)
- Serve rotation with per-player indicator (player 1 / player 2)
- Choose which team serves first
- Undo last point (up to 10 steps)
- Result screen with per-set game breakdown
- Send match result to phone via Bluetooth notification

---

## Project Structure

```
scorel/
├── manifest.json          # App config & feature declarations
├── app.ux                 # App lifecycle
├── state/
│   └── scoreState.js      # All game logic (pure functions)
└── pages/
    ├── index/index.ux     # Match setup screen
    ├── score/score.ux     # Live scoreboard
    └── result/result.ux   # Match result screen
```

---

## Development Environment Setup

### Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | 18 or later | Required by AIoT-IDE |
| OpenSSL | any | Required for app signing |
| AIoT-IDE | latest | Xiaomi's official Vela IDE |

---

### Step 1 — Install Node.js

Download and install from [nodejs.org](https://nodejs.org). After installing, verify it works:

```bash
node --version   # should print v18.x or later
npm --version
```

---

### Step 2 — Install OpenSSL

**macOS**
```bash
brew install openssl
```
Then add it to your PATH in `~/.zshrc` or `~/.bashrc`:
```bash
export PATH="/opt/homebrew/opt/openssl/bin:$PATH"
```

**Windows**

Download the installer from [slproweb.com/products/Win32OpenSSL.html](https://slproweb.com/products/Win32OpenSSL.html), install it, then add the `bin` folder to your system PATH. Restart your computer after.

**Ubuntu / Debian**
```bash
sudo apt install openssl
```

Verify it works:
```bash
openssl version   # should print something like OpenSSL 3.x.x
```

---

### Step 3 — Download and Install AIoT-IDE

1. Go to [iot.mi.com/vela/quickapp/en/guide/start/use-ide.html](https://iot.mi.com/vela/quickapp/en/guide/start/use-ide.html)
2. Download the version for your OS (macOS / Windows / Ubuntu)
3. Install it:

**macOS** — if you get a security warning on first launch, run:
```bash
sudo xattr -r -d com.apple.quarantine /Applications/AIoT-IDE.app
```

**Windows / Ubuntu** — run the installer normally.

---

### Step 4 — Open the Scorel Project

1. Launch AIoT-IDE
2. Click **File → Open Folder**
3. Select the `scorel/` folder
4. AIoT-IDE will detect `manifest.json` and recognise it as a Vela project
5. A development guide panel will appear on the right — click **Install Dependencies** and wait for `npm install` to finish

---

### Step 5 — Set Up the Emulator

1. In AIoT-IDE, click the **Device** button in the top bar
2. Click **New** to create a simulator
3. Choose the `vela-miwear-watch` image (closest to Band 10)
4. Click **Run** to start the emulator

> The emulator screen is wider/squarer than the real Band 10. The real device screen is approximately **116 × 390px** — use `height: 200px` for each half in `score.ux` if it looks off.

---

### Step 6 — Run the App

1. Click **Select Device** in the top bar and choose your running emulator
2. Click **Debug** — the app will compile and launch in the emulator
3. You can inspect the DOM tree and console logs in the debug panel at the bottom

---

### Step 7 — Package the App

When ready to install on the real band:

1. First generate signing keys. In AIoT-IDE open the terminal and run:
```bash
mkdir -p sign
openssl req -newkey rsa:2048 -nodes -keyout sign/private.pem -x509 -days 3650 -out sign/certificate.pem -subj "/CN=Scorel"
```

2. Click **Release** in the top bar
3. Select your `sign/private.pem` and `sign/certificate.pem` when prompted
4. The signed `.rpk` file will appear in the `dist/` folder

---

## Installing on the Band

Scorel is installed via **Notify for Xiaomi** — a third-party companion app that supports sideloading RPK apps onto the Mi Band 9/10.

### Step 1 — Install Notify for Xiaomi on your phone

- **Android**: search "Notify for Xiaomi" on Google Play, or download from [mibandnotify.com](https://mibandnotify.com)
- **Minimum version required**: v22.0.0 or later
- iOS is not currently supported for RPK sideloading

### Step 2 — Pair your Band 10 with Notify

1. Open Notify for Xiaomi
2. Tap the **+** button to add a device
3. Follow the pairing steps — keep the band close to your phone
4. Once paired, you should see your band's battery and stats in the app

### Step 3 — Install the RPK

1. Copy the `.rpk` file from `dist/` to your Android phone (USB, Google Drive, etc.)
2. Open your file manager and tap the `.rpk` file
3. Notify for Xiaomi should intercept the open-with dialog — select it
4. Tap **Install** and keep the band near your phone until the installation completes
5. On the band, go to **Apps** — Scorel should appear in the list

> If the file manager doesn't trigger Notify, open Notify manually, go to **Tools → Apps** and use the install from file option if available in your version.

---

## How to Use

### Setup screen
- **Serves first** — tap Opp or Us to choose who serves the first game
- **Mode** — toggle between Golden Point (sudden death at deuce) and Adv (normal advantage rules)
- Tap **START** to begin

### Score screen
- Tap the **top half** to give a point to Opponents (blue)
- Tap the **bottom half** to give a point to Us (orange)
- The **yellow ball** (● ) shows which player of the serving team is serving — right side = player 1, left side = player 2
- The **net bar** in the middle shows current games (e.g. `4 - 6`)
- `Won: X` inside each half shows sets won
- **UNDO** cancels the last point (up to 10 steps back)
- **END** finishes the match early and goes to the result screen

### Result screen
- Shows the winner and a grid of games won per set
- **Send to Phone** sends the result as a Bluetooth notification to your paired phone

---

## Scoring Rules

| Situation | Golden Point | Advantage |
|-----------|-------------|-----------|
| 40 - 40 | Next point wins the game | Enter deuce |
| Deuce | — | Next point gives advantage |
| Advantage | — | Win point → win game / Lose point → back to deuce |
| Set | First to 6 games with 2 game lead, or 7-5, or 7-6 | Same |
| Match | Best of 3 sets | Same |

---

## Tech Stack

- **Runtime**: Xiaomi Vela OS (NuttX-based RTOS)
- **Language**: JavaScript (Vela JS / Quick App framework)
- **UI**: `.ux` files (template + style + script, similar to Vue single-file components)
- **Tooling**: AIoT-IDE + AIoT-toolkit
- **Install**: RPK package format, sideloaded via Notify for Xiaomi

---

## Useful Links

- [Xiaomi Vela JS docs](https://iot.mi.com/vela/quickapp/en/guide/)
- [AIoT-IDE setup guide](https://iot.mi.com/vela/quickapp/en/guide/start/use-ide.html)
- [Notify for Xiaomi](https://mibandnotify.com)
- [Vela JS API reference](https://iot.mi.com/vela/quickapp/en/features/)
