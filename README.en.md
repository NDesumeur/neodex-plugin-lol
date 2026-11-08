# Invocateur (League of Legends)

The dashboard for your League of Legends account: profile, rank, champions and masteries, detailed match history, analysis of your play and progress charts. It reads your account straight from the open League client, with no key, or with a Riot API key.

*Version française : [README.md](README.md)*

## Linking your account

Two ways, your choice:

- **The League client (simplest)**: launch the League of Legends client and sign in, then click **Use the League client (no key)**. Invocateur reads your profile, rank, champions and latest games directly on this PC. Only your account is read, only while the client is open, and read-only.
- **A Riot key (any account)**: on developer.riotgames.com, sign in with your Riot account and copy the "Development API Key". Paste it with your **Riot ID** (Name#TAG) and your **region** (EUW, EUNE, NA, BR, LAN, LAS, KR, OCE), then **Link my account**. A development key lasts 24 h: **New key** lets you paste the next one in one click.

No password is ever asked for. The key only goes to Riot's API. **Unlink** removes the account and erases its saved games.

## The tabs

- **Overview**: your Solo/Duo and Flex 5v5 rank (tier, LP, wins and losses), your averages (KDA, CS, vision and damage per minute, kill participation, duration), your champion masteries and your last ten games.
- **Analysis**: your current and longest streaks; your mental game (wins right after a win, right after a loss, and in long sessions); the CS, gold and damage gap against your direct opponent, and your wins when you finish ahead or behind; gold per minute, damage taken, crowd control, wards, first blood, towers, dragons, solo kills and multi-kills up to pentas; your results by role, by hour, by day and by game length; your deaths, best champions and those to avoid, and your records. Tips appear when a number looks off (for example: "a break after a loss can be worth LP").
- **Champions**: each champion played with its games, win rate and KDA.
- **History**: your games, filterable by queue (ranked, normal, ARAM, Arena…). Click a game for its details: all your numbers for that game and your lane opponent.
- **Progress**: charts of your statistics over your games.

## Saved games

**Refresh** loads the latest games, **+ more games** goes further back. Games already loaded are kept, so the charts and analysis continue beyond the last 20 games.

## Data and sync

Your linked account and saved games are kept in the plugin's folder, backed up and synced between your PCs when sync is on. Data comes from Riot's official API (or the local League client) and images from Data Dragon. The plugin asks for the network and system access (to read the League client on this PC); NeoDex only opens it if it is signed.

## Install

In NeoDex: **NeoStore → Discover → Invocateur → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
