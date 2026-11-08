# Invocateur (League of Legends)

Le tableau de bord de ton compte League of Legends : profil, classement, champions et maîtrises, historique de parties détaillé, analyse de ton jeu et courbes d'évolution. Il lit ton compte directement depuis le client League ouvert, sans clé, ou avec une clé d'API Riot.

*English version: [README.en.md](README.en.md)*

## Lier ton compte

Deux façons, au choix :

- **Le client League (le plus simple)** : lance le client League of Legends et connecte-toi, puis clique **Utiliser le client League (sans clé)**. Invocateur lit ton profil, ton classement, tes champions et tes dernières parties directement sur ce PC. Seul ton compte est lu, uniquement quand le client est ouvert, et seulement en lecture.
- **Une clé Riot (tous les comptes)** : sur developer.riotgames.com, connecte-toi avec ton compte Riot et copie la « Development API Key ». Colle-la avec ton **Riot ID** (Nom#TAG) et ta **région** (EUW, EUNE, NA, BR, LAN, LAS, KR, OCE), puis **Lier mon compte**. Une clé de développement dure 24 h : **Nouvelle clé** permet de coller la suivante d'un clic.

Aucun mot de passe n'est jamais demandé. La clé ne part que vers l'API de Riot. **Délier** retire le compte et efface ses parties gardées.

## Les onglets

- **Aperçu** : ton classement Solo/Duo et Flex 5c5 (rang, LP, victoires et défaites), tes moyennes (KDA, sbires, vision et dégâts par minute, participation aux kills, durée), tes maîtrises de champions et tes dix dernières parties.
- **Analyse** : tes séries en cours et les plus longues ; ton mental (victoires juste après une victoire, juste après une défaite, et dans les longues sessions) ; l'écart de sbires, d'or et de dégâts face à ton adversaire direct, et tes victoires quand tu finis devant ou derrière ; l'or par minute, les dégâts subis, le contrôle des foules, les balises, le premier sang, les tours, les dragons, les kills en solo et les multi-kills jusqu'aux pentas ; tes résultats par rôle, par heure, par jour et selon la durée ; tes morts, tes meilleurs champions et ceux à éviter, tes records. Des conseils apparaissent quand un chiffre cloche (par exemple : « une pause après une défaite peut valoir des LP »).
- **Champions** : chaque champion joué avec ses parties, son taux de victoire et son KDA.
- **Historique** : tes parties, filtrables par file (classées, normales, ARAM, Arena…). Clique une partie pour son détail : tous les chiffres de ta partie et l'adversaire de ta voie.
- **Évolution** : des courbes de tes statistiques au fil des parties.

## Les parties gardées

**Actualiser** charge les dernières parties, **+ de parties** remonte plus loin. Les parties déjà chargées sont gardées, donc les courbes et l'analyse continuent au-delà des 20 dernières parties.

## Données et synchronisation

Ton compte lié et tes parties gardées sont enregistrés dans le dossier du plugin, sauvegardés et synchronisés entre tes PC si la synchro est activée. Les données viennent de l'API officielle de Riot (ou du client League local) et les images de Data Dragon. Le plugin demande le réseau et l'accès système (pour lire le client League sur ce PC) ; NeoDex ne l'ouvre que s'il est signé.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Invocateur → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
