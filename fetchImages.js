fetch('https://ibb.co.com/MkmmH347').then(r=>r.text()).then(t => { const m = t.match(/<meta property="og:image" content="(.*?)"/); if(m) console.log("1:", m[1]); });
fetch('https://ibb.co.com/MkZrQVf5').then(r=>r.text()).then(t => { const m = t.match(/<meta property="og:image" content="(.*?)"/); if(m) console.log("2:", m[1]); });
fetch('https://ibb.co.com/gFZm13VL').then(r=>r.text()).then(t => { const m = t.match(/<meta property="og:image" content="(.*?)"/); if(m) console.log("3:", m[1]); });
