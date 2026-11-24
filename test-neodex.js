// lancé par le test « local » de NeoDex : un compte fictif (rien ne part vers Riot), puis la sélection des champions simulée
// (les conseils d'après les parties gardées) et le détail d'une partie avec ses dix joueurs, objets compris
module.exports = async ({ pj, js, sleep, plugins, id, shot }) => {
  let z = 11; const rnd = () => (z = (z * 16807) % 2147483647) / 2147483647;
  const CH = [[222, 'Jinx'], [81, 'Ezreal'], [103, 'Ahri'], [412, 'Thresh'], [157, 'Yasuo'], [64, 'LeeSin'], [266, 'Aatrox'], [99, 'Lux'], [51, 'Caitlyn'], [89, 'Leona']];
  const IT = {3031: ['Lame d\'infini', 3450, 0], 3006: ['Jambières du berserker', 1100, 1], 6672: ['Tueur de krakens', 3000, 0], 3094: ['Canon ultrarapide', 2650, 0], 3085: ['Ouragan de Runaan', 2650, 0], 3036: ['Salutations de Dominik', 3000, 0], 1055: ['Lame de Doran', 450, 0], 3340: ['Totem furtif', 0, 0]};
  const build = () => [1055, 3006, ...[3031, 6672, 3094, 3085, 3036].filter(() => rnd() < .7), 3340];
  const ms = Array.from({length: 30}, (_, i) => {
    const mine = i % 3 ? 222 : 81, win = rnd() < .58, pl = CH.map(([c], j) => [c, j === 0 ? 2 : j < 5 ? 1 : 0, Math.floor(rnd() * 10), Math.floor(rnd() * 8), Math.floor(rnd() * 12), 40 + Math.floor(rnd() * 200), 8000 + Math.floor(rnd() * 20000), 7000 + Math.floor(rnd() * 8000), build(), 'Joueur ' + (j + 1)]);
    pl[0][0] = mine; if (mine === 81) pl[1][0] = 222;
    if (i % 2) pl[5][0] = 51;  // Caitlyn en face une partie sur deux
    return {id: 'EUW1_' + i, t: Date.now() - i * 6e6, dur: 1500 + Math.floor(rnd() * 600), q: 420, champ: CH.find(c => c[0] === mine)[1], cid: mine, role: 'BOTTOM', win, remake: false, k: pl[0][2], d: pl[0][3], a: pl[0][4], cs: pl[0][5], vis: 20, dmg: pl[0][6], gold: pl[0][7], kp: 50, share: 25, x: 1,
      taken: 15000, mitig: 5000, heal: 2000, cc: 5, wards: 8, wk: 2, cw: 1, multi: [1, 0, 0, 0], spree: 3, fb: false, towers: 1, drakes: 1, barons: 0, it: pl[0][8], ks: i % 4 ? 8008 : 8005, pl};
  });
  const dd = {v: '14.23.1', at: Date.now(), byKey: Object.fromEntries(CH.map(([c, n]) => [c, {id: n, name: n.replace(/([a-z])([A-Z])/g, '$1 $2')}]).concat([[516, {id: 'Ornn', name: 'Ornn'}]])), items: IT, runes: {8008: ['Tempo mortel', ''], 8005: ['Attaque soutenue', '']}};
  plugins.writeDoc(id, 'cache', {acct: {gameName: 'Invocateur', tagLine: 'EUW', puuid: 'x', platform: 'euw1', region: 'europe', regionName: 'EUW (Europe Ouest)'}, profile: {profileIconId: 4568, summonerLevel: 312}, dd, updated: Date.now(), matches: ms,
    ranks: [{queueType: 'RANKED_SOLO_5x5', tier: 'GOLD', rank: 'II', leaguePoints: 47, wins: 30, losses: 25}], mastery: [], rankHist: []});
  await js(`(tabs.slice().forEach(closeTab), newTab('plugin:${id}'), 0)`); await sleep(2500);
  // la sélection : Jinx en ADC, Caitlyn et Leona en face
  await pj(`(document.querySelector('.lol').__lol.sel({cid: 222, role: 'BOTTOM', allies: [412], enemies: [51, 516]}), 0)`); await sleep(300);
  const t = await pj(`document.querySelector('.lol .sel')?.innerText || ''`);
  for (const want of ['SÉLECTION EN COURS', 'TOI AVEC JINX', 'TES OBJETS QUAND TU GAGNES', 'Lame d\'infini', 'TA RUNE PRINCIPALE', 'Tempo mortel', 'FACE À EUX', 'Caitlyn', 'jamais croisé'])
    if (!t.includes(want)) throw new Error('sélection : il manque « ' + want + ' » dans ' + t.slice(0, 400));
  if (/Lame de Doran|Totem furtif/.test(t)) throw new Error('sélection : un objet de départ compté comme objet fini');
  await shot('selection');
  // sans partie avec ce champion : tes meilleurs champions du poste
  await pj(`(document.querySelector('.lol').__lol.sel({cid: 99, role: 'BOTTOM', allies: [], enemies: []}), 0)`); await sleep(200);
  const t2 = await pj(`document.querySelector('.lol .sel').innerText`); if (!/PAS ENCORE DE PARTIE AVEC LUX/.test(t2) || !/Jinx/.test(t2)) throw new Error('sans partie : ' + t2.slice(0, 300));
  await pj(`(document.querySelector('.lol').__lol.sel(null), 0)`);
  // l'historique : le détail d'une partie montre les dix joueurs et leurs objets
  await pj(`([...document.querySelectorAll('.lol .tabs button')].find(b => b.textContent === 'HISTORIQUE').click(), 0)`); await sleep(300);
  await pj(`(document.querySelector('.lol .m').click(), 0)`); await sleep(400);
  const d = await pj(`(() => { const det = document.querySelector('.lol .det'); return {pl: det.querySelectorAll('.pl').length, me: det.querySelectorAll('.pl.me').length, it: det.querySelectorAll('.pl .it').length, sw: document.documentElement.scrollWidth, ww: innerWidth}; })()`);
  if (d.pl !== 10 || d.me !== 1 || d.it < 30) throw new Error('détail de la partie : ' + JSON.stringify(d));
  if (d.sw > d.ww + 1) throw new Error('la page dépasse la fenêtre : ' + d.sw + ' > ' + d.ww);
  await pj(`(document.querySelector('.lol .det').scrollIntoView({block: 'center'}), 0)`); await sleep(300);
  return 'sélection conseillée (objets, rune, face à eux) · partie détaillée : ' + d.pl + ' joueurs, ' + d.it + ' objets';
};
