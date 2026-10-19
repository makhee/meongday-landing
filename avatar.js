// 멍데이 조립식 아바타 (랜딩용). 부위 데이터는 앱 mobile/src/avatar/appearance.ts 와 같음
// 문자: O 외곽 · W 털 · D 진한 털 · M 무늬색 · E 귀 색 · K 눈코 · L 하이라이트 · P 혀/귀속 · R 목줄 (+ 아이템 색)
(function () {
  'use strict';
  var GRID_W = 15, GRID_H = 21;

  var HEAD = [
    '..OOOOOOOOOO...',
    '.OWWWWWWWWWWO..',
    '.OWWWWWWWWWWO..',
    '.OWWWWWWWWWWO..',
    '.OWWWWWWWWWWO..',
    '.OWWWWWWWWWWO..',
    '..OWWWWWWWWO...',
    '...OOOOOOOO....',
  ];

  var EARS = {
    prick_big: { name: '쫑긋 큰', at: -3, rows: ['..O........O...', '.OPO......OPO..', '.OEPO....OPEO..', '.OEEO....OEEO..'] },
    prick_small: { name: '쫑긋 작은', at: -2, rows: ['..O........O...', '.OPO......OPO..', '.OEO......OEO..'] },
    semi: { name: '반접힌', at: -2, rows: ['.OO........OO..', 'OEEO......OEEO.', 'OEEO......OEEO.', 'OE..........EO.'] },
    drop: { name: '접힌 작은', at: 1, rows: ['OO..........OO.', 'OE..........EO.', 'OE..........EO.', 'OO..........OO.'] },
    floppy: { name: '늘어진', at: 0, rows: ['OOO........OOO.', 'OEE........EEO.', 'OEE........EEO.', 'OEE........EEO.', 'OEE........EEO.', 'OEE........EEO.', 'OOO........OOO.'] },
    curly: { name: '곱슬 긴', at: 0, rows: ['OOO........OOO.', 'OEW........WEO.', 'OWE........EWO.', 'OEW........WEO.', 'OWE........EWO.', 'OEW........WEO.', 'OWE........EWO.', '.OO........OO..'] },
    bat: { name: '박쥐', at: -3, rows: ['.OO........OO..', 'OPPO......OPPO.', 'OPEO......OEPO.', 'OEEO......OEEO.'] },
  };
  var EYES = {
    shine: { name: '반짝', at: 2, rows: ['...L......L....', '...K......K....'] },
    dot: { name: '점', at: 3, rows: ['...K......K....'] },
    smile: { name: '웃는', at: 2, rows: ['...K......K....', '..K.K....K.K...'] },
    sleepy: { name: '졸린', at: 3, rows: ['..KKK....KKK...'] },
    big: { name: '큰', at: 2, rows: ['..KL......KL...', '..KK......KK...'] },
  };
  var MOUTH = {
    tongue: { name: '혀 내밀기', at: 4, rows: ['......KK.......', '......PP.......'] },
    closed: { name: '다문 입', at: 4, rows: ['......KK.......', '.....K..K......'] },
    white: { name: '흰 주둥이', at: 4, rows: ['....MMKKMM.....', '....MMPPMM.....', '.....MMMM......'] },
    dark: { name: '진한 주둥이', at: 4, rows: ['....DDKKDD.....', '....DDPPDD.....', '.....DDDD......'] },
    beard: { name: '수염', at: 4, rows: ['....MMKKMM.....', '...MMMMMMMM....', '...MMMMMMMM....', '....MMMMMM.....'] },
  };
  var TOP = {
    none: { name: '없음', at: 0, rows: [] },
    topknot: { name: '곱슬 머리', at: -2, rows: ['....OOOOOO.....', '...OWDWWDWO....', '..OWWWWWWWWO...'] },
    bangs: { name: '몽실 머리', at: -1, rows: ['...OO.OO.OO....', '..OWWOWWOWWO...'] },
    tuft: { name: '삐친 털', at: -2, rows: ['......O........', '.....OWO.......', '..OOOOWOOOOO...'] },
  };
  var HEAD_PAT = {
    none: { name: '없음', at: 0, rows: [] },
    blaze: { name: '이마 줄', at: 0, rows: ['......XX.......', '......XX.......', '......XX.......'] },
    patch: { name: '눈 반점', at: 1, rows: ['..XXX..........', '..XXX..........', '..XXX..........'] },
    cheek: { name: '흰 볼', at: 4, rows: ['..XX......XX...', '..XXX....XXX...'] },
    half: { name: '얼굴 반반', at: 0, rows: ['.XXXXX.........', '.XXXXX.........', '.XXXXX.........', '.XXXXX.........', '.XXXXX.........', '.XXXXX.........', '..XXXX.........'] },
  };
  var BODY_PAT = {
    none: { name: '없음', at: 0, rows: [] },
    chest: { name: '가슴', at: 1, rows: ['.....XXXX......', '......XX.......'] },
    tuxedo: { name: '턱시도', at: 1, rows: ['.....XXXX......', '.....XXXX......', '......XX.......'] },
    saddle: { name: '안장', at: 1, rows: ['...XXXXXXXX....', '...XXXXXXXX....', '...XX....XX....'] },
    spots: { name: '점박이', at: 1, rows: ['...X.....X.....', '.......X.......', '....X......X...', '........X......', '...X...........'] },
  };
  var TAIL = {
    up: { name: '위로', at: 0, rows: ['............OO.', '...........OOWO', '...........OWO.', '...........OO..'] },
    curl: { name: '말린', at: 0, rows: ['...........OOO.', '...........OWWO', '...........OOWO', '.............O.'] },
    short: { name: '짧은', at: 1, rows: ['...........OO..', '...........OWO.', '...........OO..'] },
    plume: { name: '풍성', at: 0, rows: ['............OO.', '...........OWWO', '...........OWWO', '...........OWO.', '...........OO..'] },
  };
  var BODY = {
    S: { name: '소형', rows: ['...ORRRRRRO....', '..OWWWWWWWWO...', '..OWWWWWWWWO...', '..OWWWOOWWWO...', '..OOOOOOOOOO...'] },
    M: { name: '중형', rows: ['...ORRRRRRO....', '..OWWWWWWWWO...', '..OWWWWWWWWO...', '..OWWWWWWWWO...', '..OWWWOOWWWO...', '..OWWWOOWWWO...', '..OOOOOOOOOO...'] },
    L: { name: '대형', rows: ['...ORRRRRRO....', '..OWWWWWWWWO...', '..OWWWWWWWWO...', '..OWWWWWWWWO...', '..OWWWWWWWWO...', '..OWWOOOOWWO...', '..OWWO..OWWO...', '..OWWO..OWWO...', '..OOOO..OOOO...'] },
  };
  var FUR = ['#FFFDF5', '#F2D29B', '#A8663A', '#B8BCCB', '#3B3B4F', '#E8B07A', '#FFE2C2', '#7A5038', '#D9A441', '#7C86A8'];
  var FUR_NAMES = ['하양', '크림', '갈색', '회색', '검정', '황갈', '살구', '초코', '골드', '블루'];
  var SUB = [['하양', '#FFFDF5'], ['크림', '#F2D29B'], ['갈색', '#A8663A'], ['검정', '#2E2E40'], ['회색', '#B8BCCB'], ['진하게', null]];
  var EAR_COLOR = { W: '털색', D: '진하게', M: '무늬색' };

  // 꾸미기 아이템: 앱과 같이 예전 15×19 격자 기준 → 머리 윗줄(5) · 목줄(12)에 맞춰 옮김
  function rowsAt(top, body) { var g = []; for (var i = 0; i < 19; i++) g.push('...............'); body.forEach(function (r, i) { g[top + i] = r; }); return g; }
  var ITEMS = {
    ribbon: rowsAt(2, ['...OO...OO.....', '..OPPO.OPPO....', '..OPPPOPPPO....', '..OPPO.OPPO....', '...OO...OO.....']),
    crown: rowsAt(1, ['...O..OO..O....', '...OYOYYOYO....', '...OYYYYYYO....', '...OYRYYRYO....', '...OOOOOOOO....']),
    scarf: rowsAt(12, ['...OFFFFFFO....', '...OFO.........', '...OFO.........', '...OOO.........']),
  };
  var PUP_HEAD_TOP = 5, PUP_COLLAR = 12;
  function isHeadItem(rows) { for (var i = 0; i < rows.length; i++) if (/[^.]/.test(rows[i])) return i < 10; return false; }

  function layout(size) {
    var bodyTop = GRID_H - BODY[size].rows.length;
    return { bodyTop: bodyTop, headTop: bodyTop - HEAD.length };
  }

  function buildGrid(spec, items) {
    var g = [];
    for (var y = 0; y < GRID_H; y++) { var row = []; for (var x = 0; x < GRID_W; x++) row.push('.'); g.push(row); }
    var l = layout(spec.size);
    function put(rows, top, mask) {
      rows.forEach(function (r, i) {
        var yy = top + i; if (yy < 0 || yy >= GRID_H) return;
        for (var x = 0; x < GRID_W && x < r.length; x++) {
          var ch = r[x]; if (ch === '.') continue;
          if (mask) { if (g[yy][x] === 'W') g[yy][x] = mask; } else g[yy][x] = ch;
        }
      });
    }
    put(BODY[spec.size].rows, l.bodyTop);
    put(TAIL[spec.tail].rows, l.bodyTop + TAIL[spec.tail].at);
    put(BODY_PAT[spec.bodyPat].rows, l.bodyTop + BODY_PAT[spec.bodyPat].at, 'M');
    if (spec.bodyPat === 'tuxedo') for (var yy = GRID_H - 3; yy < GRID_H - 1; yy++) for (var xx = 0; xx < GRID_W; xx++) if (g[yy][xx] === 'W') g[yy][xx] = 'M';
    put(HEAD, l.headTop);
    put(HEAD_PAT[spec.headPat].rows, l.headTop + HEAD_PAT[spec.headPat].at, 'M');
    put(MOUTH[spec.mouth].rows, l.headTop + MOUTH[spec.mouth].at);
    put(EYES[spec.eyes].rows, l.headTop + EYES[spec.eyes].at);
    put(EARS[spec.ears].rows, l.headTop + EARS[spec.ears].at);
    put(TOP[spec.top].rows, l.headTop + TOP[spec.top].at);
    (items || []).forEach(function (k) {
      var rows = ITEMS[k]; if (!rows) return;
      put(rows, isHeadItem(rows) ? l.headTop - PUP_HEAD_TOP : l.bodyTop - PUP_COLLAR);
    });
    return g;
  }

  function shade(hex, k) {
    var n = parseInt(hex.slice(1), 16);
    return '#' + [n >> 16, (n >> 8) & 255, n & 255].map(function (v) { return Math.round(v * k).toString(16).padStart(2, '0'); }).join('');
  }
  function palette(spec) {
    var w = FUR[spec.fur] || FUR[0];
    var dark = spec.fur === 0 ? '#D8CDB8' : spec.fur === 6 ? '#E2B48A' : shade(w, spec.fur === 4 ? 0.6 : 0.72);
    var sub = (SUB[spec.sub] && SUB[spec.sub][1]) || dark;
    var dim = spec.fur === 4 || spec.fur === 7;
    var pal = { O: '#23234A', K: dim ? '#0E0E1C' : '#23234A', L: '#FFFFFF', U: '#4896D6', P: '#FF9FB2', R: '#FF5D6C', Y: '#FFCF3A', F: '#FF8A2B', W: w, D: dark, M: sub };
    pal.E = pal[spec.earColor] || dark;
    return pal;
  }

  // canvas 하나에 그림 (face: 머리 아이템 ~ 목줄 12줄만)
  function draw(spec, px, items, face) {
    var g = buildGrid(spec, items);
    if (face) { var top = Math.max(0, layout(spec.size).headTop - 4); g = g.slice(top, top + 12); }
    var pal = palette(spec);
    var cv = document.createElement('canvas');
    cv.width = GRID_W * px; cv.height = g.length * px;
    var c = cv.getContext('2d');
    g.forEach(function (row, y) { row.forEach(function (ch, x) { if (ch !== '.' && pal[ch]) { c.fillStyle = pal[ch]; c.fillRect(x * px, y * px, px, px); } }); });
    return cv;
  }

  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function random() {
    return {
      v: 1, size: pick(['S', 'M', 'L']), ears: pick(Object.keys(EARS)), eyes: pick(Object.keys(EYES)), mouth: pick(Object.keys(MOUTH)),
      top: Math.random() < 0.6 ? 'none' : pick(Object.keys(TOP)), headPat: Math.random() < 0.4 ? 'none' : pick(Object.keys(HEAD_PAT)),
      bodyPat: Math.random() < 0.35 ? 'none' : pick(Object.keys(BODY_PAT)), tail: pick(Object.keys(TAIL)),
      fur: Math.floor(Math.random() * FUR.length), sub: Math.floor(Math.random() * SUB.length), earColor: pick(['W', 'D', 'M']),
    };
  }

  var P = function (o) { o.v = 1; return o; };
  var PRESETS = [
    ['말티즈', P({ size: 'S', ears: 'drop', eyes: 'shine', mouth: 'tongue', top: 'bangs', headPat: 'none', bodyPat: 'none', tail: 'plume', fur: 0, sub: 0, earColor: 'W' })],
    ['포메라니안', P({ size: 'S', ears: 'prick_small', eyes: 'shine', mouth: 'tongue', top: 'tuft', headPat: 'none', bodyPat: 'chest', tail: 'plume', fur: 8, sub: 1, earColor: 'W' })],
    ['푸들', P({ size: 'M', ears: 'curly', eyes: 'shine', mouth: 'closed', top: 'topknot', headPat: 'none', bodyPat: 'none', tail: 'short', fur: 7, sub: 0, earColor: 'W' })],
    ['치와와', P({ size: 'S', ears: 'bat', eyes: 'big', mouth: 'closed', top: 'none', headPat: 'none', bodyPat: 'chest', tail: 'up', fur: 5, sub: 0, earColor: 'W' })],
    ['시바견', P({ size: 'M', ears: 'prick_big', eyes: 'dot', mouth: 'white', top: 'none', headPat: 'cheek', bodyPat: 'chest', tail: 'curl', fur: 5, sub: 0, earColor: 'W' })],
    ['웰시코기', P({ size: 'S', ears: 'prick_big', eyes: 'smile', mouth: 'white', top: 'none', headPat: 'blaze', bodyPat: 'tuxedo', tail: 'short', fur: 8, sub: 0, earColor: 'W' })],
    ['허스키', P({ size: 'L', ears: 'prick_big', eyes: 'shine', mouth: 'white', top: 'none', headPat: 'blaze', bodyPat: 'chest', tail: 'plume', fur: 3, sub: 0, earColor: 'D' })],
    ['골든 리트리버', P({ size: 'L', ears: 'floppy', eyes: 'shine', mouth: 'tongue', top: 'none', headPat: 'none', bodyPat: 'none', tail: 'plume', fur: 8, sub: 1, earColor: 'D' })],
    ['비글', P({ size: 'M', ears: 'floppy', eyes: 'dot', mouth: 'white', top: 'none', headPat: 'blaze', bodyPat: 'saddle', tail: 'up', fur: 5, sub: 3, earColor: 'W' })],
    ['닥스훈트', P({ size: 'S', ears: 'floppy', eyes: 'shine', mouth: 'closed', top: 'none', headPat: 'none', bodyPat: 'none', tail: 'up', fur: 2, sub: 0, earColor: 'D' })],
    ['퍼그', P({ size: 'S', ears: 'semi', eyes: 'big', mouth: 'dark', top: 'none', headPat: 'none', bodyPat: 'none', tail: 'curl', fur: 1, sub: 5, earColor: 'D' })],
    ['프렌치 불독', P({ size: 'S', ears: 'bat', eyes: 'big', mouth: 'dark', top: 'none', headPat: 'patch', bodyPat: 'chest', tail: 'short', fur: 4, sub: 0, earColor: 'W' })],
    ['슈나우저', P({ size: 'S', ears: 'semi', eyes: 'dot', mouth: 'beard', top: 'bangs', headPat: 'none', bodyPat: 'none', tail: 'short', fur: 9, sub: 4, earColor: 'D' })],
    ['보더콜리', P({ size: 'M', ears: 'semi', eyes: 'shine', mouth: 'tongue', top: 'none', headPat: 'blaze', bodyPat: 'tuxedo', tail: 'plume', fur: 4, sub: 0, earColor: 'W' })],
    ['달마시안', P({ size: 'L', ears: 'drop', eyes: 'dot', mouth: 'closed', top: 'none', headPat: 'patch', bodyPat: 'spots', tail: 'up', fur: 0, sub: 3, earColor: 'M' })],
    ['시츄', P({ size: 'S', ears: 'curly', eyes: 'big', mouth: 'beard', top: 'topknot', headPat: 'half', bodyPat: 'none', tail: 'plume', fur: 0, sub: 2, earColor: 'M' })],
  ];

  var GROUPS = [
    ['size', '크기', Object.keys(BODY).map(function (k) { return [k, BODY[k].name]; })],
    ['ears', '귀', Object.keys(EARS).map(function (k) { return [k, EARS[k].name]; })],
    ['eyes', '눈', Object.keys(EYES).map(function (k) { return [k, EYES[k].name]; })],
    ['mouth', '입', Object.keys(MOUTH).map(function (k) { return [k, MOUTH[k].name]; })],
    ['top', '머리털', Object.keys(TOP).map(function (k) { return [k, TOP[k].name]; })],
    ['headPat', '얼굴 무늬', Object.keys(HEAD_PAT).map(function (k) { return [k, HEAD_PAT[k].name]; })],
    ['bodyPat', '몸 무늬', Object.keys(BODY_PAT).map(function (k) { return [k, BODY_PAT[k].name]; })],
    ['tail', '꼬리', Object.keys(TAIL).map(function (k) { return [k, TAIL[k].name]; })],
    ['fur', '털색', FUR_NAMES.map(function (n, i) { return [i, n]; })],
    ['sub', '무늬색', SUB.map(function (s, i) { return [i, s[0]]; })],
    ['earColor', '귀 색', Object.keys(EAR_COLOR).map(function (k) { return [k, EAR_COLOR[k]]; })],
  ];

  window.MeongAvatar = { draw: draw, random: random, PRESETS: PRESETS, GROUPS: GROUPS, FUR: FUR, SUB: SUB, combos: GROUPS.reduce(function (n, g) { return n * g[2].length; }, 1) };
})();
