# Silvio Relli homepage v3.1

## Setup
Requires Node 26 (pinned in `.tool-versions` and in `engines` in `package.json`, which Vercel reads).

```
brew install gnupg            # the asdf yarn plugin verifies downloads with gpg
asdf plugin add nodejs
asdf plugin add yarn
asdf install
yarn install
```

## Dev
Build CSS with  `yarn run tailwindcss -i ./src/input.css -o ./style.css --watch`

## Run
Run `python3 -m http.server`

Then open `http://localhost:8000/`