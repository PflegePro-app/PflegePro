// Lektion-Inhalte (HTML als Template Literals)
export const LESSON_CONTENT = {
  dekubitus:{
    'Definition & Expertenstandard': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Definition & Expertenstandard</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was ist ein Dekubitus — und welche Pflichten leitet der Expertenstandard 2017 daraus ab?</div>
  </div>
</div>

<div id="lsec-dek-def" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Internationale Definition (NPUAP/EPUAP)</div></div>
  <p class="lekt-prose">Ein <strong>Dekubitus</strong> (lat. decumbere = sich hinlegen) ist eine <strong>lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes</strong>, in der Regel über knöchernen Vorsprüngen, infolge von <strong>Druck oder Druck in Kombination mit Scherkräften</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">📐 Schlüsselbegriffe der Definition</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
      ${[
        ['Druck','Kraft die senkrecht auf Gewebe wirkt → Kompression der Blutgefäße → Ischämie','#f87171'],
        ['Scherkräfte','Entgegengesetzt wirkende Kräfte → Gewebe wird verschoben → Gefäße abgeknickt','#fb923c'],
        ['Knöcherne Vorsprünge','Kreuzbein, Ferse, Hüfte, Knöchel → zu wenig Polstergewebe','#fbbf24'],
        ['Gewebsschädigung','Haut UND/ODER darunterliegendes Gewebe — oft tiefer als sichtbar!','#f87171'],
      ].map(([t,d,c])=>`<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:4px">${t}</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${d}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Merkhilfe:</strong> Ein Dekubitus ist KEIN Wundliegen — er ist eine vermeidbare Druckschädigung. Das Wort "infolge von Druck" ist juristisch relevant!</div></div>
</div>

<div id="lsec-dek-exp" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Expertenstandard 2017 — 6 Handlungsebenen</div></div>
  <p class="lekt-prose">Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege) definiert im <strong>Expertenstandard Dekubitusprophylaxe 2. Aktualisierung 2017</strong> sechs verbindliche Handlungsebenen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🏛️ 6 Handlungsebenen NEU (DNQP 2017)</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[
        ['1','Einschätzungsebene','Wissen zur Dekubitusentstehung & Risikoeinschätzungskompetenz','#f87171'],
        ['2','Informationsebene','Sektorenübergreifende Zusammenarbeit & Planungskompetenz','#fb923c'],
        ['3','Beratungsebene','Informieren, beraten, schulen, anleiten','#fbbf24'],
        ['4','Planungsebene','Bewegungsförderung','#4ade80'],
        ['5','Organisationsebene','Druckverteilende Hilfsmittel','#60a5fa'],
        ['6','Beurteilungsebene','Beurteilung der Dekubitusprophylaxe','#c084fc'],
      ].map(([n,e,d,c])=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(255,255,255,.03);border-radius:11px;border-left:3px solid ${c}">
        <div style="width:28px;height:28px;border-radius:8px;background:${c}22;color:${c};font-weight:800;font-size:.8rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${n}</div>
        <div><div style="font-weight:700;font-size:.8rem;color:${c}">${e}</div><div style="font-size:.72rem;color:var(--ink2)">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Zielsetzung Expertenstandard</div>
    <strong>„Jeder dekubitusgefährdete Patient/Bewohner erhält eine Prophylaxe, die die Entstehung eines Dekubitus verhindert."</strong><br/>
    Ausnahmen: pflegerisch/medizinisch notwendige Prioritätensetzung oder informierte Entscheidung des Patienten.
  </div>
</div>

<div id="lsec-dek-einsch" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Systematische Einschätzung</div></div>
  <p class="lekt-prose">Die Einschätzung des Dekubitusrisikos ist <strong>zu Beginn jeden pflegerischen Auftrags</strong> durchzuführen. Risikoskalen (Braden, Norton, Waterlow) sind <strong>nur unterstützend</strong> — ein umfassendes klinisches Assessment ist Pflicht.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">⚠️ CAVE: Risikoskalen</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6">Es konnte <strong style="color:#f87171">kein Hinweis gefunden werden</strong>, dass Risikoskalen allein die Dekubitusinzidenz senken. Skalen haben geringe Zuverlässigkeit (Interrater-Reliabilität). Sie sind nur ein Hilfsmittel — <strong>nie Ersatz für klinisches Urteilsvermögen!</strong></p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
      ${['Braden-Skala','Norton-Skala','Waterlow-Skala','Cubbin-Jackson-Skala'].map(s=>`<span style="background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);border-radius:8px;padding:4px 10px;font-size:.72rem;color:var(--amber)">${s}</span>`).join('')}
    </div>
    <div style="margin-top:10px;font-size:.75rem;color:var(--ink3)">→ Altersbedingt nimmt die Druckwahrnehmung ab → seltener Positionswechsel. Auch Schmerzmittel, Psychopharmaka, Schlafmittel verringern die Druckwahrnehmung!</div>
  </div>
</div>

<div id="lsec-dek-braden" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Braden-Skala — 6 Kriterien im Detail</div></div>
  <p class="lekt-prose">Die <strong>Braden-Skala</strong> ist die international am häufigsten verwendete Risikoskala. Sie bewertet 6 Faktoren mit je 1–4 Punkten (Ausnahme: Reibung/Scherkräfte max. 3 Punkte). <strong>Niedrigerer Gesamtscore = höheres Risiko.</strong></p>

  <!-- SVG Braden-Skala visuelle -->
  <div class="lekt-card" style="padding:0;overflow:hidden">
    <div class="lekt-card-label" style="color:#fbbf24;padding:12px 16px 0">📊 Braden-Skala — 6 Kriterien & Scoring</div>
    <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
      <defs>
        <linearGradient id="brHigh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#16a34a"/>
        </linearGradient>
        <linearGradient id="brMid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="brLow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
        <filter id="brShadow"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="rgba(0,0,0,0.3)"/></filter>
      </defs>
      <rect width="560" height="340" fill="rgba(13,17,23,0.95)"/>

      <!-- En-tête colonnes scores -->
      <text x="220" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(248,113,113,0.8)">1 Pkt</text>
      <text x="305" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,191,36,0.8)">2 Pkt</text>
      <text x="390" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(96,165,250,0.8)">3 Pkt</text>
      <text x="475" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(74,222,128,0.8)">4 Pkt</text>
      <!-- Lignes séparatrices colonnes -->
      <line x1="178" y1="10" x2="178" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="262" y1="10" x2="262" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="347" y1="10" x2="347" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="432" y1="10" x2="432" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

      ${[
        ['👁️','Sensorische\nWahrnehmung','Völlig\naufgehoben','Stark\neingeschränkt','Leicht\neingeschränkt','Nicht\nbeeinträchtigt','#f87171'],
        ['💧','Feuchtigkeit\nder Haut','Konstant\nnass','Oft\nnass','Gelegentlich\nnass','Selten\nnass','#60a5fa'],
        ['🏃','Aktivität','Bettlägerig','Rollstuhl-\npflichtig','Geht\ngelegentlich','Geht\nregelmäßig','#4ade80'],
        ['🔄','Mobilität','Komplett\nimmobil','Stark\neingeschränkt','Leicht\neingeschränkt','Keine\nEinschränkung','#c084fc'],
        ['🍎','Ernährung','Sehr\nschlechte','Unzu-\nreichende','Adäquate\nErnährung','Ausgezeichnete','#fbbf24'],
        ['⚡','Reibung &\nScherkräfte','Problem\n(1 Pkt)','Potential.\nProblem (2)','Kein\nProblem (3)','—','#fb923c'],
      ].map(([icon,name,p1,p2,p3,p4,c],i) => {
        const y = 35 + i*50;
        const pts = [p1,p2,p3,p4];
        const colors = ['rgba(248,113,113,0.15)','rgba(251,191,36,0.12)','rgba(96,165,250,0.12)','rgba(74,222,128,0.15)'];
        const borders = ['rgba(248,113,113,0.4)','rgba(251,191,36,0.35)','rgba(96,165,250,0.35)','rgba(74,222,128,0.4)'];
        const txts = ['#f87171','#fbbf24','#60a5fa','#4ade80'];
        return `
        <!-- Ligne ${i+1} fond alterné -->
        <rect x="0" y="${y-2}" width="560" height="48" fill="${i%2===0?'rgba(255,255,255,0.02)':'rgba(0,0,0,0.1)'}"/>
        <!-- Critère label -->
        <text x="16" y="${y+13}" font-size="16" font-family="DM Sans">${icon}</text>
        <text x="38" y="${y+11}" font-size="8" font-family="DM Sans" font-weight="700" fill="${c}">${name.split('\\n')[0]}</text>
        <text x="38" y="${y+22}" font-size="7.5" font-family="DM Sans" fill="${c}" opacity="0.7">${name.split('\\n')[1]||''}</text>
        <!-- Cellules scores -->
        ${pts.map((p,j) => p === '—' ? `<text x="${179+j*85+42}" y="${y+24}" text-anchor="middle" font-size="9" font-family="DM Sans" fill="rgba(255,255,255,0.2)">—</text>` :
          `<rect x="${179+j*85+4}" y="${y+4}" width="74" height="38" rx="7" fill="${colors[j]}" stroke="${borders[j]}" stroke-width="1"/>
           <text x="${179+j*85+41}" y="${y+20}" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="${txts[j]}">${p.split('\\n')[0]}</text>
           <text x="${179+j*85+41}" y="${y+31}" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="${txts[j]}" opacity="0.75">${p.split('\\n')[1]||''}</text>`
        ).join('')}`;
      }).join('')}

      <!-- Barre de score total en bas -->
      <rect x="0" y="305" width="560" height="35" fill="rgba(0,0,0,0.5)"/>
      <!-- Gradient risque -->
      <defs><linearGradient id="riskBar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#dc2626"/><stop offset="40%" stop-color="#f97316"/>
        <stop offset="65%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#4ade80"/>
      </linearGradient></defs>
      <rect x="10" y="312" width="380" height="16" rx="8" fill="url(#riskBar)" opacity="0.85"/>
      <!-- Marqueurs score -->
      ${[[10,'6',''],  [72,'9','Sehr\nhoch'],[133,'12','Hoch'],[194,'14','Mittel'],[255,'18','Gering'],[340,'23+','Kein']].map(([x,s,l])=>
        `<line x1="${x+10}" y1="310" x2="${x+10}" y2="330" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
         <text x="${x+10}" y="${l?308:308}" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="white">${s}</text>`).join('')}
      <text x="400" y="318" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(248,113,113,0.9)">≤ 9 = SEHR HOCH</text>
      <text x="400" y="329" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,191,36,0.9)">10–14 = HOCH/MITTEL</text>
    </svg>
  </div>

  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Braden-Skala Scoring</div>
    <strong>Niedrigerer Score = HÖHERES Risiko!</strong> Maximalpunktzahl = 23 Punkte (kein Risiko). Kritischer Grenzwert: ≤ 18 Punkte = erhöhtes Risiko. Ab ≤ 9 Punkte = sehr hohes Risiko. <strong>Reibung/Scherkräfte: max. 3 Punkte</strong> (kein 4er!). Gesamtpunktzahl: 6–23.
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>6 Kriterien merken:</strong> <strong>S</strong>ensorik · <strong>F</strong>euchtigkeit · <strong>A</strong>ktivität · <strong>M</strong>obilität · <strong>E</strong>rnährung · <strong>R</strong>eibung → <em>"SFAMER"</em></div></div>
</div>
</div></div>`,

    'Risikofaktoren & Entstehung': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 2</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Risikofaktoren & Entstehung</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Warum entsteht ein Dekubitus — und wer ist besonders gefährdet?</div>
</div>

<div id="lsec-dek-risi" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Risikofaktoren laut Expertenstandard</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">⚠️ Die 3 wichtigsten Risikofaktoren</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
      ${[
        ['🚶','Beeinträchtigte Mobilität','Immobilität durch Schienen, Gips, Lähmung, Sedierung → kein Positionswechsel → anhaltender Druck','#f87171'],
        ['🩸','Gestörte Durchblutung','Arteriosklerose, Diabetes, Schock → Gewebe wird nicht ausreichend versorgt → erhöhte Dekubitusanfälligkeit','#fb923c'],
        ['🧴','Beeinträchtigter Hautzustand','Feuchte Haut (Inkontinenz, Schweiß), vorhandener Dekubitus, Hauterkrankungen → Schutzfunktion ↓','#fbbf24'],
      ].map(([i,t,d,c])=>`<div style="display:flex;gap:12px;padding:12px 14px;background:rgba(255,255,255,.02);border-radius:12px;border:1px solid ${c}22">
        <div style="font-size:1.4rem;flex-shrink:0">${i}</div>
        <div><div style="font-weight:700;font-size:.82rem;color:${c};margin-bottom:3px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#fb923c">📋 Weitere Risikofaktoren</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px">
      ${['Verminderte sensorische Wahrnehmung (PNP, Analgetika)','Diabetes mellitus','Schlechter AZ/EZ','Hautfeuchtigkeit ↑ (Wärmestau)','Mangelernährung','Medizinische Geräte (Tuben, Sonden, Trachealkanülen)','Psychopharmaka / Sedativa','Unwissenheit des Pflegepersonals'].map(r=>`<div style="font-size:.72rem;color:var(--ink2);padding:6px 10px;background:rgba(255,255,255,.02);border-radius:8px;border:1px solid rgba(255,255,255,.06)">• ${r}</div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-dek-ents" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Dekubitusentstehung — 2 Theorien</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Theorie 1: Ischämie</div>
    <!-- SVG Ischämie RÉALISTE — coupe anatomique -->
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:8px 0;border-radius:14px">
      <defs>
        <linearGradient id="gMat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
        <linearGradient id="gEpi2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4c5a0"/><stop offset="100%" stop-color="#e8a878"/>
        </linearGradient>
        <linearGradient id="gDerm2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c97060"/><stop offset="100%" stop-color="#a54838"/>
        </linearGradient>
        <linearGradient id="gSub2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c845"/><stop offset="100%" stop-color="#c8980a"/>
        </linearGradient>
        <linearGradient id="gMus2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c43858"/><stop offset="100%" stop-color="#8a1830"/>
        </linearGradient>
        <linearGradient id="gBon2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8d8b0"/><stop offset="60%" stop-color="#caba80"/><stop offset="100%" stop-color="#a89050"/>
        </linearGradient>
        <radialGradient id="gIscha2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="#991b1b" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#450a0a" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gVeinOk" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fca5a5"/><stop offset="100%" stop-color="#dc2626"/>
        </radialGradient>
        <radialGradient id="gVeinBad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#7f1d1d"/><stop offset="100%" stop-color="#450a0a"/>
        </radialGradient>
        <filter id="glow2"><feGaussianBlur stdDeviation="4" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
        <filter id="shadow2"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.5)"/></filter>
        <marker id="arrP" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
          <polygon points="0,0 9,4.5 0,9" fill="#3b82f6"/>
        </marker>
        <marker id="arrO" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <polygon points="0,0 8,4 0,8" fill="#f97316"/>
        </marker>
        <clipPath id="clipBody"><rect x="30" y="45" width="390" height="255"/></clipPath>
      </defs>

      <!-- ━━━ FOND ━━━ -->
      <rect width="560" height="310" rx="14" fill="#0c1520"/>
      <!-- Grille subtile -->
      <line x1="0" y1="45" x2="560" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

      <!-- ━━━ TITRE GAUCHE ━━━ -->
      <text x="16" y="28" font-size="11" font-family="DM Sans" font-weight="800" fill="#60a5fa">Querschnitt: Dekubitusentstehung</text>
      <text x="16" y="40" font-size="8.5" font-family="DM Sans" fill="rgba(148,163,184,0.7)">Druck zwischen Knochen und Unterlage → Ischämie → Nekrose</text>

      <!-- ━━━ MATRATZE / AUFLAGE ━━━ -->
      <rect x="30" y="45" width="390" height="18" rx="5" fill="url(#gMat)" filter="url(#shadow2)"/>
      <!-- Texture foam -->
      <path d="M35 54 Q50 50 65 54 Q80 58 95 54 Q110 50 125 54 Q140 58 155 54 Q170 50 185 54 Q200 58 215 54 Q230 50 245 54 Q260 58 275 54 Q290 50 305 54 Q320 58 335 54 Q350 50 365 54 Q380 58 395 54 Q408 50 415 54" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
      <text x="225" y="57" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="700" fill="rgba(255,255,255,0.85)">Matratze / Unterlage</text>

      <!-- ━━━ FLÈCHES DRUCK ━━━ -->
      <path d="M155 63 L155 78" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrP)"/>
      <path d="M215 63 L215 78" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrP)"/>
      <path d="M275 63 L275 78" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrP)"/>
      <text x="80" y="74" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#3b82f6">↓ Druck</text>

      <!-- ━━━ ÉPIDERME ━━━ -->
      <!-- Légèrement comprimé au centre -->
      <path d="M30 80 Q90 77 150 82 Q185 85 215 87 Q245 85 280 82 Q330 77 420 80 L420 100 Q330 97 280 100 Q245 103 215 105 Q185 103 150 100 Q90 97 30 100 Z" fill="url(#gEpi2)"/>
      <!-- Texture fine surface peau -->
      <path d="M35 88 Q55 86 75 88 Q95 90 115 88 Q135 86 155 88" fill="none" stroke="rgba(255,215,185,0.35)" stroke-width="1.2"/>
      <path d="M220 90 Q240 88 260 90 Q280 92 300 90 Q320 88 340 90" fill="none" stroke="rgba(255,215,185,0.3)" stroke-width="1"/>
      <!-- Micropoils -->
      <line x1="60" y1="80" x2="58" y2="75" stroke="rgba(200,150,100,0.4)" stroke-width="0.8"/>
      <line x1="100" y1="80" x2="99" y2="75" stroke="rgba(200,150,100,0.35)" stroke-width="0.8"/>
      <line x1="330" y1="80" x2="329" y2="75" stroke="rgba(200,150,100,0.4)" stroke-width="0.8"/>
      <line x1="370" y1="80" x2="369" y2="75" stroke="rgba(200,150,100,0.35)" stroke-width="0.8"/>
      <!-- Label -->
      <text x="435" y="93" font-size="9" font-family="DM Sans" font-weight="700" fill="#f5c8a0">Epidermis</text>
      <line x1="422" y1="91" x2="433" y2="91" stroke="#f5c8a0" stroke-width="1.2"/>

      <!-- ━━━ DERME ━━━ -->
      <path d="M30 100 Q90 97 150 100 Q185 103 215 105 Q245 103 280 100 Q330 97 420 100 L420 152 Q330 147 280 150 Q245 152 215 154 Q185 152 150 150 Q90 147 30 152 Z" fill="url(#gDerm2)"/>
      <!-- Fibres collagène -->
      <path d="M35 113 Q90 110 145 113 Q200 116 255 113 Q310 110 365 113 Q395 115 418 113" fill="none" stroke="rgba(220,140,110,0.3)" stroke-width="1.5"/>
      <path d="M35 127 Q90 124 145 127 Q200 130 255 127 Q310 124 365 127 Q395 129 418 127" fill="none" stroke="rgba(220,140,110,0.25)" stroke-width="1.5"/>
      <path d="M35 140 Q90 137 145 140 Q200 143 255 140 Q310 137 365 140 Q395 142 418 140" fill="none" stroke="rgba(220,140,110,0.2)" stroke-width="1.2"/>

      <!-- CAPILLAIRES SAINS (gauche) -->
      <ellipse cx="85" cy="118" rx="11" ry="7" fill="url(#gVeinOk)" stroke="#ef4444" stroke-width="1.5"/>
      <ellipse cx="85" cy="118" rx="7" ry="4" fill="rgba(254,226,226,0.5)"/>
      <!-- Globules rouges -->
      <ellipse cx="82" cy="118" rx="3" ry="2" fill="#dc2626" opacity="0.9"/>
      <ellipse cx="89" cy="117" rx="2.5" ry="1.8" fill="#dc2626" opacity="0.8"/>
      <text x="68" y="134" font-size="7" font-family="DM Sans" fill="rgba(74,222,128,0.9)" font-weight="700">✓ durchblutet</text>

      <!-- CAPILLAIRE COMPRIMÉ (centre, aplati) -->
      <ellipse cx="215" cy="125" rx="9" ry="2.5" fill="url(#gVeinBad)" stroke="#991b1b" stroke-width="1.5">
        <animate attributeName="ry" values="2.5;1.2;2.5" dur="1.6s" repeatCount="indefinite"/>
      </ellipse>
      <text x="192" y="140" font-size="7.5" font-family="DM Sans" fill="#f87171" font-weight="800">⚠ komprimiert!</text>

      <!-- CAPILLAIRE SAIN (droite) -->
      <ellipse cx="345" cy="118" rx="11" ry="7" fill="url(#gVeinOk)" stroke="#ef4444" stroke-width="1.5"/>
      <ellipse cx="345" cy="118" rx="7" ry="4" fill="rgba(254,226,226,0.5)"/>
      <ellipse cx="342" cy="118" rx="3" ry="2" fill="#dc2626" opacity="0.9"/>

      <!-- Label dermis -->
      <text x="435" y="130" font-size="9" font-family="DM Sans" font-weight="700" fill="#d4836a">Dermis</text>
      <line x1="422" y1="128" x2="433" y2="128" stroke="#d4836a" stroke-width="1.2"/>

      <!-- ━━━ SUBCUTIS ━━━ -->
      <path d="M30 152 Q90 147 150 150 Q185 152 215 154 Q245 152 280 150 Q330 147 420 152 L420 205 Q330 200 280 203 Q245 205 215 207 Q185 205 150 203 Q90 200 30 205 Z" fill="url(#gSub2)"/>
      <!-- Adipocytes — lobules graisseux réalistes -->
      <g opacity="0.75">
        ${[
          [55,170,9],[75,182,8],[95,172,10],[115,180,8],[135,170,9],[58,192,7],[85,195,9],
          [160,173,8],[185,168,9],[215,170,8],[215,185,7],[245,173,9],[265,178,8],
          [290,168,9],[310,180,8],[330,170,9],[355,178,8],[375,172,9],[395,182,8]
        ].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${Math.round(r*0.8)}" fill="rgba(245,195,50,0.45)" stroke="rgba(190,145,5,0.5)" stroke-width="0.8"/>
        <ellipse cx="${x-r*0.3}" cy="${y-r*0.3}" rx="${r*0.35}" ry="${r*0.25}" fill="rgba(255,230,120,0.3)"/>`).join('')}
      </g>
      <text x="435" y="182" font-size="9" font-family="DM Sans" font-weight="700" fill="#d4a010">Subcutis</text>
      <line x1="422" y1="180" x2="433" y2="180" stroke="#d4a010" stroke-width="1.2"/>

      <!-- ━━━ MUSCLE ━━━ -->
      <path d="M30 205 Q90 200 150 203 Q185 205 215 207 Q245 205 280 203 Q330 200 420 205 L420 245 Q330 241 280 243 Q245 245 215 246 Q185 245 150 243 Q90 241 30 245 Z" fill="url(#gMus2)"/>
      <!-- Fibres musculaires (stries) -->
      <path d="M33 213 Q140 210 248 213 Q355 216 418 213" fill="none" stroke="rgba(220,100,120,0.35)" stroke-width="2"/>
      <path d="M33 222 Q140 219 248 222 Q355 225 418 222" fill="none" stroke="rgba(220,100,120,0.3)" stroke-width="2"/>
      <path d="M33 232 Q140 229 248 232 Q355 235 418 232" fill="none" stroke="rgba(220,100,120,0.25)" stroke-width="1.8"/>
      <!-- Fascia superficiel -->
      <path d="M30 205 Q90 200 150 203 Q185 205 215 207 Q245 205 280 203 Q330 200 420 205" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
      <text x="435" y="228" font-size="9" font-family="DM Sans" font-weight="700" fill="#c43858">Muskel</text>
      <line x1="422" y1="226" x2="433" y2="226" stroke="#c43858" stroke-width="1.2"/>

      <!-- ━━━ OS (Kreuzbein — proéminent) ━━━ -->
      <!-- Corps principal -->
      <path d="M110 245 Q160 237 215 235 Q270 237 320 245 L322 290 Q270 298 215 300 Q160 298 108 290 Z" fill="url(#gBon2)" filter="url(#shadow2)"/>
      <!-- Trabécules osseuses internes -->
      <path d="M125 255 Q170 251 215 255 Q260 259 305 255" fill="none" stroke="rgba(155,125,65,0.45)" stroke-width="1.2"/>
      <path d="M120 265 Q168 261 215 265 Q262 269 310 265" fill="none" stroke="rgba(155,125,65,0.4)" stroke-width="1.2"/>
      <path d="M118 275 Q167 271 215 275 Q263 279 312 275" fill="none" stroke="rgba(155,125,65,0.35)" stroke-width="1"/>
      <path d="M118 285 Q167 281 215 285 Q263 289 312 285" fill="none" stroke="rgba(155,125,65,0.3)" stroke-width="1"/>
      <!-- Cortex osseux (bord plus dense) -->
      <path d="M110 245 Q160 237 215 235 Q270 237 320 245" fill="none" stroke="rgba(220,200,150,0.7)" stroke-width="2.5"/>
      <!-- Périoste -->
      <path d="M108 244 Q160 235 215 233 Q270 235 322 244" fill="none" stroke="rgba(240,220,170,0.4)" stroke-width="1"/>
      <!-- Text os -->
      <text x="215" y="268" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="800" fill="rgba(60,45,10,0.95)">Os (Kreuzbein)</text>
      <text x="215" y="280" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(80,60,20,0.7)">Os sacrum — knöcherner Vorsprung</text>
      <text x="435" y="268" font-size="9" font-family="DM Sans" font-weight="700" fill="#c8b880">Knochen</text>
      <line x1="422" y1="266" x2="433" y2="266" stroke="#c8b880" stroke-width="1.2"/>

      <!-- ━━━ ZONE ISCHÉMIE CENTRALE ━━━ -->
      <!-- Halo extérieur pulsant -->
      <ellipse cx="215" cy="178" rx="55" ry="72" fill="url(#gIscha2)" filter="url(#glow2)">
        <animate attributeName="opacity" values="0.7;0.35;0.7" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="55;60;55" dur="2.2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Cœur nécrotique sombre -->
      <ellipse cx="215" cy="182" rx="24" ry="32" fill="rgba(50,0,0,0.82)" stroke="rgba(130,10,10,0.75)" stroke-width="1.8">
        <animate attributeName="opacity" values="0.82;0.6;0.82" dur="2.2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Texte zone -->
      <text x="215" y="176" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="800" fill="#fca5a5">Ischämie</text>
      <text x="215" y="188" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(252,165,165,0.85)">Hypoxie → Nekrose</text>

      <!-- ━━━ FLÈCHE CONTRE-PRESSION (os remonte) ━━━ -->
      <path d="M215 232 L215 218" stroke="#f97316" stroke-width="3" stroke-linecap="round" marker-end="url(#arrO)"/>
      <text x="222" y="228" font-size="8" font-family="DM Sans" font-weight="700" fill="#f97316">Gegendruck</text>

      <!-- ━━━ LÉGENDE BAS ━━━ -->
      <rect x="0" y="292" width="560" height="18" rx="0 0 14 14" fill="rgba(0,0,0,0.45)"/>
      <text x="280" y="304" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(148,163,184,0.8)">Druck ↓ + Gegendruck ↑  →  Gefäßkompression  →  Ischämie  →  Hypoxie  →  Zelluntergang  →  Nekrose</text>
    </svg>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Druck zwischen Knochen und Auflage → komprimiert Gefäße → <strong>minderdurchblutetes Gewebe</strong> → Nährstoffmangel (Hypoxie) → Anreicherung von Stoffwechselprodukten → <strong>Zelluntergang</strong>. Außerdem: blockierter Lymphabfluss → anaerober Metabolismus.</p>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">🔬 Theorie 2: Direktschädigung durch Deformation</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Durch Kompression wird das Muskel- und Subcutangewebe <strong>gequetscht und deformiert</strong>. Muskelzellen sind sehr empfindlich gegenüber mechanischer Verformung. Auf zellulärer Ebene wird das <strong>Zytoskelett zerstört</strong> → Nekrose. Dies beginnt <strong>tief im Gewebe</strong> — oft bevor die Haut sichtbare Schäden zeigt!</p>
    <div class="lekt-klausur" style="margin:10px 0 0">
      <div class="lekt-klausur-lbl">⏱️ Zeitliche Entstehung — KLAUSUR!</div>
      <strong>Liegende Personen:</strong> bereits nach <strong>1 Stunde</strong> Schäden möglich<br/>
      <strong>Sitzende Personen:</strong> weniger als <strong>1 Stunde</strong><br/>
      <strong>Hohe Risikogruppen:</strong> bereits nach <strong>10–20 Minuten</strong>!<br/>
      ⚠️ Zwischen initialer Schädigung und Sichtbarwerden: <strong>bis zu 2 Wochen</strong>!
    </div>
  </div>
</div>

<div id="lsec-dek-gruppe" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Risikogruppen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">👥 Risikogruppen laut Expertenstandard</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${[
        ['#1 Akute Erkrankungen','Apoplexie (Schlaganfall), Herzinfarkt → plötzliche Immobilität','#f87171'],
        ['Pflegebedürftigkeit','Multimorbidität, dauerhaft eingeschränkte Mobilität','#fb923c'],
        ['Kinder','Säuglinge (Trachealkanülen, Sonden), neurologische Erkrankungen','#60a5fa'],
        ['Intensivpatienten','Sedierung, medizinische Geräte, schlechter AZ/EZ','#c084fc'],
      ].map(([t,d,c])=>`<div style="padding:10px;border-radius:10px;background:${c}11;border:1px solid ${c}33">
        <div style="font-size:.75rem;font-weight:700;color:${c};margin-bottom:4px">${t}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${d}</div>
      </div>`).join('')}
    </div>
  </div>
</div>
</div></div>`,

    'EPUAP Klassifikation Kat. I–IV': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 3</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">EPUAP Klassifikation — Kategorie I bis IV</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">European Pressure Ulcer Advisory Panel — die offizielle Klassifikation nach Schwere</div>
</div>

<div id="lsec-dek-klass" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">EPUAP Kategorien im Überblick</div></div>

  <!-- SVG Querschnitt Klassifikation -->
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">📊 Tiefe der Schädigung — animiert</div>
    <svg viewBox="0 0 580 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:6px 0;border-radius:12px">
      <defs>
        <linearGradient id="ep3Epi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4c5a0"/><stop offset="100%" stop-color="#e8a878"/>
        </linearGradient>
        <linearGradient id="ep3Derm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c97060"/><stop offset="100%" stop-color="#a54838"/>
        </linearGradient>
        <linearGradient id="ep3Sub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c845"/><stop offset="100%" stop-color="#c8980a"/>
        </linearGradient>
        <linearGradient id="ep3Mus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c43858"/><stop offset="100%" stop-color="#8a1830"/>
        </linearGradient>
        <linearGradient id="ep3Bon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e2d0a0"/><stop offset="100%" stop-color="#b0a060"/>
        </linearGradient>
        <!-- Nécroses par catégorie -->
        <radialGradient id="ep3Nek1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ep3Nek2" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="ep3Nek3" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fb923c" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#c2410c" stop-opacity="0.3"/>
        </radialGradient>
        <radialGradient id="ep3Nek4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.5"/>
        </radialGradient>
        <filter id="ep3glow"><feGaussianBlur stdDeviation="3" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
      </defs>

      <!-- FOND -->
      <rect width="580" height="290" rx="12" fill="#0c1520"/>
      <!-- Titre -->
      <text x="290" y="22" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">EPUAP Klassifikation — Schädigungstiefe im Querschnitt</text>

      <!-- ══════════════════════════════════════════
           COUCHES ANATOMIQUES — 4 colonnes
      ══════════════════════════════════════════ -->
      <!-- Chaque colonne: x = 15 + col*140, largeur 120 -->

      <!-- ── COL 1: Kat I ── x=15..135 -->
      <!-- Épiderme intact mais rouge -->
      <rect x="15" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <!-- Rougeur en surface (érythème non blanchissant) -->
      <ellipse cx="75" cy="46" rx="38" ry="11" fill="rgba(220,38,38,0.55)" filter="url(#ep3glow)">
        <animate attributeName="opacity" values="0.75;0.4;0.75" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Dermis -->
      <rect x="15" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <!-- Capillaires vasodilatés sous la rougeur -->
      <ellipse cx="60" cy="68" rx="8" ry="5" fill="rgba(239,68,68,0.7)" stroke="#dc2626" stroke-width="1"/>
      <ellipse cx="75" cy="72" rx="6" ry="4" fill="rgba(239,68,68,0.65)" stroke="#dc2626" stroke-width="1"/>
      <ellipse cx="90" cy="67" rx="7" ry="4.5" fill="rgba(239,68,68,0.7)" stroke="#dc2626" stroke-width="1"/>
      <!-- Subcutis -->
      <rect x="15" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      <!-- Adipocytes -->
      ${[[30,112,8],[50,118,7],[68,110,9],[87,117,8],[105,112,9],[125,119,7],[35,130,7],[55,127,8],[75,132,7],[95,128,8],[115,131,7]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${Math.round(r*0.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join('')}
      <!-- Muscle -->
      <rect x="15" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M17 157 Q75 154 133 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <path d="M17 167 Q75 164 133 167" fill="none" stroke="rgba(210,90,110,0.3)" stroke-width="1.8"/>
      <path d="M17 176 Q75 173 133 176" fill="none" stroke="rgba(210,90,110,0.25)" stroke-width="1.5"/>
      <!-- Os -->
      <rect x="15" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M17 192 Q75 189 133 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <path d="M17 203 Q75 200 133 203" fill="none" stroke="rgba(150,120,60,0.35)" stroke-width="1"/>

      <!-- ── COL 2: Kat II ── x=155..275 -->
      <rect x="155" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <rect x="155" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <rect x="155" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      ${[[170,112,8],[190,118,7],[208,110,9],[227,117,8],[245,112,9],[265,119,7],[175,130,7],[195,127,8],[215,132,7],[235,128,8],[255,131,7]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${Math.round(r*0.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join('')}
      <rect x="155" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M157 157 Q215 154 273 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <path d="M157 167 Q215 164 273 167" fill="none" stroke="rgba(210,90,110,0.3)" stroke-width="1.8"/>
      <path d="M157 176 Q215 173 273 176" fill="none" stroke="rgba(210,90,110,0.25)" stroke-width="1.5"/>
      <rect x="155" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M157 192 Q215 189 273 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <!-- PLAIE KAT II: cratère jusqu'à la dermis -->
      <path d="M195 35 Q215 28 235 35 L233 85 Q215 92 197 85 Z" fill="rgba(210,70,50,0.85)" stroke="rgba(180,50,30,0.9)" stroke-width="1.5"/>
      <!-- Fond plaie rouge vif (dermis exposé) -->
      <ellipse cx="215" cy="83" rx="13" ry="7" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Bords déchirés réalistes -->
      <path d="M197 50 Q200 45 204 50 Q207 55 211 49" fill="none" stroke="rgba(255,180,150,0.6)" stroke-width="1"/>
      <path d="M225 48 Q229 43 233 48 Q236 53 230 50" fill="none" stroke="rgba(255,180,150,0.6)" stroke-width="1"/>
      <!-- Sérosité / exsudat -->
      <ellipse cx="215" cy="79" rx="8" ry="4" fill="rgba(255,240,200,0.5)"/>

      <!-- ── COL 3: Kat III ── x=295..415 -->
      <rect x="295" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <rect x="295" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <rect x="295" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      ${[[310,112,8],[330,118,7],[348,110,9],[367,117,8],[385,112,9],[405,119,7],[315,130,7],[335,127,8],[355,132,7],[375,128,8],[395,131,7]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${Math.round(r*0.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join('')}
      <rect x="295" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M297 157 Q355 154 413 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <path d="M297 167 Q355 164 413 167" fill="none" stroke="rgba(210,90,110,0.3)" stroke-width="1.8"/>
      <rect x="295" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M297 192 Q355 189 413 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <!-- PLAIE KAT III: cratère jusqu'à la subcutis -->
      <path d="M325 35 Q355 23 385 35 L383 142 Q355 150 327 142 Z" fill="rgba(160,50,20,0.8)" stroke="rgba(130,30,10,0.9)" stroke-width="1.8"/>
      <!-- Tissu graisseux exposé au fond -->
      <ellipse cx="355" cy="139" rx="20" ry="9" fill="rgba(240,185,40,0.75)" stroke="#c8940a" stroke-width="1.2"/>
      <ellipse cx="347" cy="136" rx="5" ry="3.5" fill="rgba(245,200,60,0.6)" stroke="rgba(185,140,5,0.5)" stroke-width="0.7"/>
      <ellipse cx="360" cy="140" rx="4" ry="3" fill="rgba(245,200,60,0.5)" stroke="rgba(185,140,5,0.5)" stroke-width="0.7"/>
      <!-- Nécrose sombre dans plaie -->
      <ellipse cx="355" cy="90" rx="16" ry="30" fill="rgba(60,10,0,0.65)" stroke="rgba(100,20,10,0.6)" stroke-width="1"/>
      <!-- Fibrine/belag jaunâtre -->
      <path d="M338 110 Q355 105 372 110 Q355 118 338 110Z" fill="rgba(240,220,150,0.45)"/>
      <!-- Tunnelisation sous-cutanée (signe avancé) -->
      <path d="M325 100 Q305 105 300 115 Q298 125 308 128" fill="none" stroke="rgba(200,100,50,0.6)" stroke-width="1.5" stroke-dasharray="4 2"/>

      <!-- ── COL 4: Kat IV ── x=435..555 -->
      <rect x="435" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <rect x="435" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <rect x="435" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      ${[[450,112,8],[470,118,7],[488,110,9],[507,117,8],[525,112,9],[545,119,7],[455,130,7],[475,127,8],[495,132,7],[515,128,8],[535,131,7]].map(([x,y,r])=>`<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${Math.round(r*0.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join('')}
      <rect x="435" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M437 157 Q495 154 553 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <rect x="435" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M437 192 Q495 189 553 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <!-- PLAIE KAT IV: jusqu'à l'os -->
      <path d="M460 35 Q495 18 530 35 L528 188 Q495 196 462 188 Z" fill="rgba(20,5,5,0.88)" stroke="rgba(100,10,10,0.9)" stroke-width="2"/>
      <!-- Os exposé au fond -->
      <ellipse cx="495" cy="189" rx="28" ry="10" fill="rgba(225,210,165,0.9)" stroke="#b0a060" stroke-width="1.8"/>
      <path d="M472 189 Q495 184 518 189" fill="none" stroke="rgba(155,125,65,0.6)" stroke-width="1"/>
      <!-- Nécrose noire épaisse -->
      <ellipse cx="495" cy="130" rx="22" ry="48" fill="rgba(15,3,3,0.9)" stroke="rgba(80,5,5,0.7)" stroke-width="1.5"/>
      <!-- Tissus nécrotiques stringeux -->
      <path d="M475 100 Q495 95 515 100 Q495 108 475 100Z" fill="rgba(80,40,10,0.7)"/>
      <path d="M473 118 Q495 113 517 118 Q495 126 473 118Z" fill="rgba(60,20,5,0.65)"/>
      <!-- Sehne (tendon) exposé -->
      <path d="M482 165 Q495 160 508 165 Q495 172 482 165Z" fill="rgba(255,240,200,0.6)" stroke="rgba(220,200,150,0.7)" stroke-width="0.8"/>
      <text x="495" y="167" text-anchor="middle" font-size="5.5" font-family="DM Sans" fill="rgba(240,220,160,0.85)" font-weight="700">Sehne</text>

      <!-- ══════════════════════════════════════════
           ÉTIQUETTES COLONNES
      ══════════════════════════════════════════ -->
      <!-- Séparateurs -->
      <line x1="140" y1="30" x2="140" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <line x1="280" y1="30" x2="280" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <line x1="420" y1="30" x2="420" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

      <!-- Labels couches (colonne 1 seulement) -->
      <text x="8" y="50" font-size="7.5" font-family="DM Sans" font-weight="700" fill="rgba(240,200,160,0.85)" transform="rotate(-90,8,50)" text-anchor="middle" dominant-baseline="middle">Epidermis</text>

      <!-- Labels droite -->
      <text x="558" y="48" font-size="7.5" font-family="DM Sans" fill="rgba(240,200,160,0.7)" dominant-baseline="middle">Epidermis</text>
      <text x="558" y="78" font-size="7.5" font-family="DM Sans" fill="rgba(200,110,90,0.7)" dominant-baseline="middle">Dermis</text>
      <text x="558" y="123" font-size="7.5" font-family="DM Sans" fill="rgba(210,160,10,0.7)" dominant-baseline="middle">Subcutis</text>
      <text x="558" y="165" font-size="7.5" font-family="DM Sans" fill="rgba(190,60,85,0.7)" dominant-baseline="middle">Muskel</text>
      <text x="558" y="203" font-size="7.5" font-family="DM Sans" fill="rgba(200,185,115,0.7)" dominant-baseline="middle">Knochen</text>
      <!-- Lignes repère -->
      <line x1="554" y1="46" x2="557" y2="46" stroke="rgba(240,200,160,0.5)" stroke-width="1"/>
      <line x1="554" y1="76" x2="557" y2="76" stroke="rgba(200,110,90,0.5)" stroke-width="1"/>
      <line x1="554" y1="121" x2="557" y2="121" stroke="rgba(210,160,10,0.5)" stroke-width="1"/>
      <line x1="554" y1="163" x2="557" y2="163" stroke="rgba(190,60,85,0.5)" stroke-width="1"/>
      <line x1="554" y1="201" x2="557" y2="201" stroke="rgba(200,185,115,0.5)" stroke-width="1"/>

      <!-- ══ BANDEAUX TITRES CATÉGORIES ══ -->
      <rect x="15" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(220,38,38,0.18)" stroke="rgba(220,38,38,0.4)" stroke-width="1.2"/>
      <rect x="155" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(217,119,6,0.18)" stroke="rgba(217,119,6,0.4)" stroke-width="1.2"/>
      <rect x="295" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(234,88,12,0.18)" stroke="rgba(234,88,12,0.4)" stroke-width="1.2"/>
      <rect x="435" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(153,27,27,0.25)" stroke="rgba(220,38,38,0.5)" stroke-width="1.5"/>

      <!-- Kat I -->
      <text x="75" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#f87171">Kat. I</text>
      <text x="75" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(248,113,113,0.9)">Rötung</text>
      <text x="75" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(200,150,150,0.8)">Haut intakt</text>
      <text x="75" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(200,150,150,0.65)">nicht wegdrückbar</text>

      <!-- Kat II -->
      <text x="215" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#fbbf24">Kat. II</text>
      <text x="215" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,191,36,0.9)">Teilzerstörung</text>
      <text x="215" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(210,170,100,0.8)">bis Dermis</text>
      <text x="215" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(200,160,80,0.65)">Blase / offenes Ulkus</text>

      <!-- Kat III -->
      <text x="355" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#fb923c">Kat. III</text>
      <text x="355" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,146,60,0.9)">Vollzerstörung</text>
      <text x="355" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(220,160,100,0.8)">bis Subcutis</text>
      <text x="355" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(210,150,80,0.65)">Fettgewebe sichtbar</text>

      <!-- Kat IV -->
      <text x="495" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#ef4444">Kat. IV</text>
      <text x="495" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(239,68,68,0.9)">Totaler Verlust</text>
      <text x="495" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(220,130,130,0.8)">bis Knochen</text>
      <text x="495" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(200,120,120,0.65)">Sehnen / Knochen frei</text>
    </svg>
  </div>

  <!-- 4 Kategorien détaillées -->
  ${[
    ['I','Nicht wegdrückbare Rötung','rgba(248,113,113,0.12)','#f87171','Nicht wegdrückbare, umschriebene Rötung bei intakter Haut, gewöhnlich über einem knöchernen Vorsprung. Der Bereich kann schmerzempfindlich, verhärtet, weich, wärmer oder kälter sein als umgebendes Gewebe.','⚠️ ACHTUNG: Entgegen verbreiteter Meinung ist Kat. I NICHT nur auf die Haut beschränkt — darunterliegendes Gewebe ist bereits mitbetroffen!','ICD-10: Druckzone bei nicht wegdrückbarer Rötung bei intakter Haut'],
    ['II','Teilzerstörung bis Dermis','rgba(251,191,36,0.1)','#fbbf24','Teilzerstörung der Haut bis zur Dermis. Erscheint als flaches offenes Ulkus mit einem roten/rosafarbenen Wundbett, ohne Beläge. Kann sich als intakte oder offene/geplatzte Blase darstellen.','❌ NICHT als Kat. II klassifizieren: Blasen durch Pflaster/Verbände, IAD, Mazeration, Mykosen, Abschürfungen!','ICD-10: Abschürfung, Blase, Teilverlust der Haut mit Einbeziehung von Epidermis und/oder Dermis'],
    ['III','Zerstörung aller Hautschichten','rgba(251,146,60,0.1)','#fb923c','Zerstörung aller Hautschichten. Subkutanes Fettgewebe kann sichtbar sein, aber keine Knochen, Muskeln oder Sehnen. Es kann ein Belag vorliegen. Tunnel oder Unterminierungen möglich.','💡 Tiefe variiert je nach Lokalisation: An Ferse/Ohr sehr oberflächlich möglich. An adipösen Stellen extrem tief!','ICD-10: Vollständiger Hautverlust mit Zerstörung und Nekrose des subkutanen Gewebes'],
    ['IV','Totaler Gewebsverlust','rgba(220,38,38,0.1)','#dc2626','Totaler Gewebsverlust mit freiliegenden Knochen, Sehnen oder Muskeln. Belag und Schorf können vorliegen. Tunnel und Unterminierungen oft vorhanden. Kann Fascien, Sehnen, Gelenkkapseln betreffen.','⚠️ Osteomyelitis/Ostitis-Risiko! Knochen/Sehnen sichtbar oder tastbar. Höchstes Amputationsrisiko!','ICD-10: Dekubitus mit Nekrose von Muskeln, Knochen oder stützenden Strukturen'],
  ].map(([kat,titel,bg,c,text,cave,icd])=>`
  <div class="lekt-card" style="background:${bg};border-color:${c}44">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div style="width:36px;height:36px;border-radius:10px;background:${c}22;border:2px solid ${c};color:${c};font-family:'Fraunces',serif;font-size:1.1rem;font-weight:800;display:flex;align-items:center;justify-content:center">${kat}</div>
      <div style="font-weight:700;font-size:.88rem;color:${c}">${titel}</div>
    </div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-bottom:8px">${text}</p>
    <div style="font-size:.72rem;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid ${c}33;color:var(--ink2);line-height:1.5">${cave}</div>
    <div style="font-size:.67rem;color:var(--ink3);margin-top:8px">📋 ${icd}</div>
  </div>`).join('')}
</div>

<div id="lsec-dek-iad" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Abgrenzung: Dekubitus vs. IAD vs. ITD</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔍 Differenzialdiagnose — klausurrelevant!</div>
    <div style="overflow-x:auto;margin-top:8px">
      <table style="width:100%;border-collapse:collapse;font-size:.72rem">
        <tr style="background:rgba(255,255,255,.05)">
          <th style="padding:8px;text-align:left;color:var(--ink3);font-weight:700"></th>
          <th style="padding:8px;text-align:left;color:#f87171;font-weight:700">Dekubitus</th>
          <th style="padding:8px;text-align:left;color:#60a5fa;font-weight:700">IAD</th>
          <th style="padding:8px;text-align:left;color:#4ade80;font-weight:700">ITD</th>
        </tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Ursache</td><td style="padding:7px 8px;color:var(--ink2)">Druck + Scherkräfte</td><td style="padding:7px 8px;color:var(--ink2)">Urin-/Stuhlinkontinenz</td><td style="padding:7px 8px;color:var(--ink2)">Schwitzen + Reibung</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Lokalisation</td><td style="padding:7px 8px;color:var(--ink2)">Knöcherne Vorsprünge</td><td style="padding:7px 8px;color:var(--ink2)">Perineum, Gesäß</td><td style="padding:7px 8px;color:var(--ink2)">Rima ani, inguinal</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Tiefe</td><td style="padding:7px 8px;color:var(--ink2)">Kat. I–IV</td><td style="padding:7px 8px;color:var(--ink2)">Oberflächlich</td><td style="padding:7px 8px;color:var(--ink2)">Erosion</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Wundränder</td><td style="padding:7px 8px;color:var(--ink2)">Rund/oval, klar</td><td style="padding:7px 8px;color:var(--ink2)">Unregelmäßig</td><td style="padding:7px 8px;color:var(--ink2)">Linear</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Schlüssel</td><td style="padding:7px 8px;color:var(--ink2)">Immobilität</td><td style="padding:7px 8px;color:var(--ink2)">Inkontinenz</td><td style="padding:7px 8px;color:var(--ink2)">Diaphoresis</td></tr>
      </table>
    </div>
    <div class="lekt-merkhilfe" style="margin-top:12px">💡 <div><strong>IAD = Ausschlussdiagnose!</strong> Oberflächliche Läsionen nur dann als Dekubitus bezeichnen, wenn Feuchtigkeit/IAD als Ursache ausgeschlossen werden kann.</div></div>
  </div>
</div>
</div></div>`,

    'Prädilektionsstellen & Einschätzung': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 4</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Prädilektionsstellen & Einschätzung</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Wo entstehen Dekubitus am häufigsten — und wie erkenne ich sie frühzeitig?</div>
</div>

<div id="lsec-dek-pred" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Prädilektionsstellen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">📍 Häufigste Entstehungsorte bei liegenden Patienten</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-top:10px">

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3)">
        <div style="width:30px;height:30px;border-radius:50%;background:#ef4444;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:white;flex-shrink:0">1</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#f87171">Kreuzbein (Os sacrum)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">≈ 30% aller Dekubitus — die häufigste Lokalisation überhaupt</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#f87171;background:rgba(239,68,68,0.15);padding:3px 8px;border-radius:6px;white-space:nowrap">HOCH</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.22)">
        <div style="width:30px;height:30px;border-radius:50%;background:#ef4444;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:white;flex-shrink:0">2</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#f87171">Fersen (Calcaneus)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">2. häufigste — bes. bei Diabetes & Polyneuropathie → Freilagerung!</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#f87171;background:rgba(239,68,68,0.12);padding:3px 8px;border-radius:6px;white-space:nowrap">HOCH</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.22)">
        <div style="width:30px;height:30px;border-radius:50%;background:#f97316;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:#0a1220;flex-shrink:0">3</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#fb923c">Schulterblätter (Scapulae)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">Rückenlage, bes. bei Kachexie / Untergewicht — wenig Muskelpolster</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#fb923c;background:rgba(249,115,22,0.12);padding:3px 8px;border-radius:6px;white-space:nowrap">MITTEL</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(249,115,22,0.07);border:1px solid rgba(249,115,22,0.18)">
        <div style="width:30px;height:30px;border-radius:50%;background:#f97316;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:#0a1220;flex-shrink:0">4</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#fb923c">Trochanteren (Hüfte)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">Bei Seitenlage! — deshalb 30°-Schräglagerung statt 90°</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#fb923c;background:rgba(249,115,22,0.12);padding:3px 8px;border-radius:6px;white-space:nowrap">MITTEL</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(251,191,36,0.07);border:1px solid rgba(251,191,36,0.18)">
        <div style="width:30px;height:30px;border-radius:50%;background:#fbbf24;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:#0a1220;flex-shrink:0">5</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#fbbf24">Hinterhaupt (Occiput)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">Besonders Säuglinge & Kinder — Kopf proportional schwerer</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#fbbf24;background:rgba(251,191,36,0.1);padding:3px 8px;border-radius:6px;white-space:nowrap">KONTEXT</span>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.15)">
          <div style="width:26px;height:26px;border-radius:50%;background:#fbbf24;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;color:#0a1220;flex-shrink:0">6</div>
          <div><div style="font-weight:700;font-size:.78rem;color:#fbbf24">Lendenwirbel (LWS)</div><div style="font-size:.7rem;color:var(--ink2)">Magere Patienten</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(96,165,250,0.07);border:1px solid rgba(96,165,250,0.18)">
          <div style="width:26px;height:26px;border-radius:50%;background:#60a5fa;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;color:#0a1220;flex-shrink:0">7</div>
          <div><div style="font-weight:700;font-size:.78rem;color:#60a5fa">Knöchel & Ellenbogen</div><div style="font-size:.7rem;color:var(--ink2)">Olecranon, Seitenlage</div></div>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:10px;background:rgba(148,163,184,0.06);border:1px solid rgba(148,163,184,0.15)">
        <div style="width:26px;height:26px;border-radius:50%;background:#94a3b8;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;color:#0a1220;flex-shrink:0">8</div>
        <div style="font-weight:700;font-size:.78rem;color:#94a3b8">Medizinische Geräte</div>
        <div style="font-size:.73rem;color:var(--ink2)">Tubus, Sonden, Trachealkanülen — jede Druckstelle zählt!</div>
      </div>

    </div>
    <div class="lekt-merkhilfe" style="margin-top:12px">💡 <div><strong>Merkhilfe:</strong> Knochen nah unter der Haut + Körpergewicht drückt darauf = Druckstelle. <strong>Kreuzbein #1 + Fersen #2</strong> immer zuerst kontrollieren!</div></div>
  </div>
</div>

<div id="lsec-dek-tief" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Tiefe Dekubitus — das versteckte Problem</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb923c">⚠️ Schädigung von außen oft nicht erkennbar!</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Da bei länger einwirkendem Druck <strong>tiefer liegende Gewebe zunächst eher und stärker geschädigt</strong> werden als die Haut, müssen tiefe Dekubitus <strong>bereits entstanden sein, bevor druckbedingte Hautdefekte klinisch relevant werden</strong> (Kottner, Sibbald 2011).</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
      ${[
        ['❗','Kein Progressionsmodell','Oberflächliche und tiefe Dekubitus sind zwei konzeptionell VERSCHIEDENE Vorgänge!','#f87171'],
        ['⚖️','Rechtliche Konsequenz','Schäden können VOR der Aufnahme entstanden sein — unverzügliche Dokumentation beim Aufnahme!','#fbbf24'],
      ].map(([i,t,d,c])=>`<div style="padding:10px;border-radius:10px;background:${c}10;border:1px solid ${c}30">
        <div style="font-size:.75rem;font-weight:700;color:${c};margin-bottom:4px">${i} ${t}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${d}</div>
      </div>`).join('')}
    </div>
  </div>
</div>
</div></div>`,

    'Prophylaxe und Donts': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 5</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Prophylaxe — Do's & Don'ts</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was schützt wirklich — und was schadet mehr als es nützt?</div>
</div>

<div id="lsec-dek-dos" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Maßnahmen zur Prophylaxe</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">✅ Do's — Was wirkt!</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[
        ['🔄','Positionswechsel / Lagerung','Regelmäßige Umlagerung re/li/Rücken. Bei Sitzenden: mindestens alle 60 min! Mikrolagerung nicht vergessen.'],
        ['🏃','Bewegungsförderung','Eigenbewegung des Patienten fördern, Mobilisation so früh wie möglich.'],
        ['🛏️','Druckverteilende Hilfsmittel','Viscoelastische Schaumstoffmatratzen, großzellige dynamische Matratzen > Standardmatratzen (DNQP 2009).'],
        ['👁️','Hautbeobachtung','Regelmäßige systematische Einschätzung — Rötungen frühzeitig erkennen!'],
        ['💧','Hautpflege & Inkontinenzversorgung','pH-neutrale Reinigung. Bei Inkontinenz bei jeder Versorgung reinigen + trocknen + schützende Produkte.'],
        ['🎓','Schulung & Beratung','Patient, Angehörige UND Pflegepersonal schulen. ALLE informieren!'],
        ['🍎','Ernährung','Mangelernährung als Risikofaktor behandeln.'],
        ['🦶','Freilagerung','Stark gefährdete Körperstellen vollständig entlasten (z.B. Ferse freilagern)!'],
      ].map(([i,t,d])=>`<div style="display:flex;gap:12px;padding:10px 14px;background:rgba(74,222,128,.05);border-radius:10px;border:1px solid rgba(74,222,128,.15)">
        <div style="font-size:1.2rem;flex-shrink:0">${i}</div>
        <div><div style="font-weight:700;font-size:.8rem;color:#4ade80;margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-dek-donts" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Ungeeignete Hilfsmittel & Obsolete Maßnahmen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">❌ Don'ts — Klausurrelevant!</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${[
        ['Lagerungsringe','Erhöhen Druck am Rand → schlimmer!'],
        ['Felle / Schaffelle','Kein Nachweis der Wirksamkeit'],
        ['Wassermatratzen','Nicht evidenzbasiert'],
        ['Watteverbände','Ungeeignet'],
        ['Massage der Druckstellen','Führt zu Gewebsschäden!'],
        ['Hyperämisierende Salben','ABC-Salbe, Finalgon — obsolet!'],
        ['Vaseline / Babyöl','Porenverstopfend — kontraindiziert'],
        ['Babypuder / Pasta zinci','Hautabdeckend — obsolet'],
        ['Seife','Zerstört Säureschutzmantel'],
        ['Hydrokolloid prophylaktisch','Keine ausreichende Evidenz'],
      ].map(([t,d])=>`<div style="padding:10px;border-radius:10px;background:rgba(248,113,113,.08);border:1px solid rgba(248,113,113,.2)">
        <div style="font-size:.75rem;font-weight:700;color:#f87171;margin-bottom:3px">❌ ${t}</div>
        <div style="font-size:.67rem;color:var(--ink3);line-height:1.3">${d}</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-dek-mat" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Druckverteilende Hilfsmittel & Wundversorgung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🛏️ Spezialmatratzen</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Studien zeigen: <strong>großzellige dynamische Matratzen, Aufladesysteme oder viscoelastische Schaumstoffmatratzen</strong> reduzieren Dekubitusinzidenz im Vergleich zu Standardmatratzen (DNQP 2009).</p>
    <div class="lekt-klausur">
      <div class="lekt-klausur-lbl">⚠️ CAVE: Wechseldruckmatratze</div>
      Wechseldruckmatratzen können problematisch sein bei: <strong>Körperbildstörungen, Koordinationsstörungen, erhöhter Schmerzempfindlichkeit, Spastiken, eingeschränkter Eigenmobilität</strong>.
      <br/><strong>Wichtig: Die Matratze ersetzt NICHT die regelmäßige Lagerung!</strong>
    </div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">🩹 Wundbehandlung bei bestehendem Dekubitus</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
      ${[
        ['1. Druckentlastung','Unverzüglich! Ohne Druckentlastung heilt keine Wunde.','#f87171'],
        ['Antibakterielle Wundauflagen','Bei Infektionszeichen → antimikrobielle Wundauflagen','#fb923c'],
        ['NPWT (Unterdrucktherapie)','Negative Pressure Wound Therapy — bei tiefen Wunden','#60a5fa'],
        ['Feuchtes Wundmilieu','Modern: feuchte Wundversorgung fördert Heilung','#4ade80'],
      ].map(([t,d,c])=>`<div style="display:flex;gap:10px;padding:9px 12px;border-radius:9px;background:${c}0d;border:1px solid ${c}22">
        <div style="width:3px;background:${c};border-radius:2px;flex-shrink:0"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:${c}">${t}</div><div style="font-size:.71rem;color:var(--ink2)">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-card" style="background:rgba(220,38,38,.06);border-color:rgba(220,38,38,.2)">
    <div class="lekt-card-label" style="color:#f87171">⚖️ Haftung & Dokumentation</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Ein Dekubitus gehört zu den <strong>gravierenden Gesundheitsproblemen pflegebedürftiger Patienten</strong>. Das Auftreten kann <strong>weitgehend verhindert werden</strong> — daher besteht eine hohe rechtliche Relevanz. <strong>Lückenlose Dokumentation</strong> ist zwingend erforderlich: Einschätzung, Maßnahmen, Evaluation.</p>
    <div style="font-size:.72rem;padding:8px 12px;border-radius:8px;background:rgba(220,38,38,.08);border:1px solid rgba(220,38,38,.2);color:var(--ink2);margin-top:8px">📌 <strong>Initiales Screening bei Aufnahme:</strong> □ vorerst kein Dekubitusrisiko &nbsp; □ Dekubitusrisiko. Risikofaktoren + Interventionen dokumentieren!</div>
  </div>
</div>

<div id="lsec-dek-lager" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Lagerungsarten — Systematik & Positionen</div></div>
  <p class="lekt-prose">Korrekte Lagerung ist die <strong>wichtigste Prophylaxemaßnahme</strong>. Ziel: Druck auf gefährdete Körperstellen vollständig aufheben. Die <strong>30°-Schräglagerung</strong> ist Goldstandard — sie vermeidet Druck auf Trochanter und Kreuzbein gleichzeitig.</p>

  <!-- SVG Lagerungsarten -->
  <div class="lekt-card" style="padding:0;overflow:hidden">
    <div class="lekt-card-label" style="color:#60a5fa;padding:12px 16px 8px">🛏️ Die 5 wichtigsten Lagerungsarten</div>
    <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
      <defs>
        <linearGradient id="lagBed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <linearGradient id="lagSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8a878"/><stop offset="100%" stop-color="#c88858"/>
        </linearGradient>
        <linearGradient id="lagPillow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
        <radialGradient id="lagPressure" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
        </radialGradient>
        <filter id="lagShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <rect width="560" height="420" fill="#0c1520"/>

      <!-- ══ POSITION 1: RÜCKENLAGE ══ (col gauche, ligne 1) -->
      <text x="12" y="22" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#60a5fa">① Rückenlage (0°)</text>
      <text x="12" y="33" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.65)">Druckpunkte: Kreuzbein, Ferse, Hinterkopf</text>
      <!-- Lit -->
      <rect x="10" y="52" width="240" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps — Rückenlage (vue de dessus simplifiée, vue de côté) -->
      <!-- Tête -->
      <ellipse cx="40" cy="45" rx="16" ry="14" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Oreiller -->
      <rect x="25" y="38" width="30" height="14" rx="5" fill="url(#lagPillow)" opacity="0.6"/>
      <!-- Corps -->
      <rect x="56" y="40" width="130" height="22" rx="6" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Jambes -->
      <rect x="186" y="40" width="55" height="22" rx="5" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Points de pression (rouge) -->
      <ellipse cx="105" cy="62" rx="14" ry="5" fill="url(#lagPressure)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="223" cy="62" rx="8" ry="4" fill="url(#lagPressure)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.3s" repeatCount="indefinite"/>
      </ellipse>
      <text x="105" y="76" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#f87171" font-weight="700">⚠ Kreuzbein</text>
      <text x="223" y="76" text-anchor="middle" font-size="6" font-family="DM Sans" fill="#f87171">Fersen</text>

      <!-- ══ POSITION 2: 30°-SCHRÄGLAGE ══ (col droite, ligne 1) -->
      <text x="296" y="22" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#4ade80">② 30°-Schräglagerung ⭐ Goldstandard</text>
      <text x="296" y="33" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.65)">Entlastet Kreuzbein + Trochanter gleichzeitig!</text>
      <!-- Lit incliné -->
      <rect x="290" y="52" width="260" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps à 30° — représenté latéralement -->
      <!-- Coussin soutien -->
      <path d="M295 42 Q300 38 310 40 L310 62 Q300 62 295 58 Z" fill="url(#lagPillow)" opacity="0.7"/>
      <!-- Corps incliné -->
      <path d="M308 38 Q340 35 380 37 L395 38 Q430 36 460 38 L460 56 Q430 58 395 56 L380 55 Q340 57 308 56 Z"
            fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Tête -->
      <ellipse cx="322" cy="47" rx="16" ry="13" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Oreiller tête -->
      <rect x="305" y="37" width="32" height="12" rx="5" fill="url(#lagPillow)" opacity="0.7"/>
      <!-- Coussin entre jambes -->
      <rect x="455" y="44" width="22" height="12" rx="5" fill="url(#lagPillow)" opacity="0.6"/>
      <!-- Angle 30° marqué -->
      <path d="M296 62 L296 40" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M296 62 L320 62" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M296 62 Q304 58 308 55" fill="none" stroke="#4ade80" stroke-width="1.5"/>
      <text x="312" y="60" font-size="8" font-family="DM Sans" font-weight="800" fill="#4ade80">30°</text>
      <!-- Pas de pression = vert -->
      <text x="384" y="76" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#4ade80" font-weight="700">✓ Kein Druck auf Kreuzbein</text>
      <text x="384" y="85" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#4ade80">✓ Kein Druck auf Trochanter</text>

      <!-- ══ POSITION 3: SEITENLAGE 90° ══ (col gauche, ligne 2) -->
      <text x="12" y="110" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#fbbf24">③ Seitenlage (90°)</text>
      <text x="12" y="121" font-size="7.5" font-family="DM Sans" fill="rgba(251,191,36,0.65)">Trochanter-Risiko! Knie polstern!</text>
      <!-- Lit -->
      <rect x="10" y="140" width="240" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps en Seitenlage (vue de côté) -->
      <ellipse cx="40" cy="130" rx="14" ry="16" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="54" y="120" width="110" height="24" rx="7" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Jambes pliées -->
      <path d="M164 120 Q180 118 195 125 Q210 132 215 140 L190 140 Q186 134 175 130 Q165 126 164 120Z"
            fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Coussin entre genoux -->
      <rect x="188" y="128" width="18" height="14" rx="5" fill="url(#lagPillow)" opacity="0.7"/>
      <!-- Pression Trochanter -->
      <ellipse cx="60" cy="140" rx="10" ry="4" fill="url(#lagPressure)" opacity="0.75">
        <animate attributeName="opacity" values="0.75;0.35;0.75" dur="1.9s" repeatCount="indefinite"/>
      </ellipse>
      <text x="60" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#f87171" font-weight="700">⚠ Trochanter</text>
      <text x="190" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#4ade80">✓ Kissen Knie</text>

      <!-- ══ POSITION 4: BAUCHLAGE ══ (col droite, ligne 2) -->
      <text x="296" y="110" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#c084fc">④ Bauchlage (Prone)</text>
      <text x="296" y="121" font-size="7.5" font-family="DM Sans" fill="rgba(192,132,252,0.65)">Gesicht, Knie, Zehenspitzen — Druckpunkte!</text>
      <!-- Lit -->
      <rect x="290" y="140" width="260" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps en Bauchlage -->
      <ellipse cx="318" cy="130" rx="14" ry="15" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Coussin thorax -->
      <rect x="290" y="120" width="50" height="20" rx="6" fill="url(#lagPillow)" opacity="0.5"/>
      <rect x="335" y="118" width="120" height="24" rx="6" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="455" y="120" width="80" height="22" rx="5" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Coussin tibias -->
      <rect x="480" y="132" width="50" height="8" rx="4" fill="url(#lagPillow)" opacity="0.6"/>
      <!-- Points -->
      <ellipse cx="318" cy="140" rx="8" ry="3" fill="url(#lagPressure)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.1s" repeatCount="indefinite"/>
      </ellipse>
      <text x="318" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#f87171">Gesicht</text>
      <text x="490" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#4ade80">✓ Kissen</text>

      <!-- ══ POSITION 5: OBERKÖRPERHOCHLAGERUNG ══ (pleine largeur, ligne 3) -->
      <text x="12" y="198" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#fb923c">⑤ Oberkörperhochlagerung (30°) — Scherkräfte-Risiko!</text>
      <text x="12" y="209" font-size="7.5" font-family="DM Sans" fill="rgba(251,146,60,0.65)">Abgleiten → Scherkräfte auf Kreuzbein → CAVE: Max. 30°! Knierolle einsetzen!</text>
      <!-- Lit incliné côté tête -->
      <line x1="10" y1="260" x2="540" y2="240" stroke="url(#lagBed)" stroke-width="8" stroke-linecap="round"/>
      <!-- Corps incliné -->
      <ellipse cx="50" cy="238" rx="15" ry="14" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="65" y="226" width="200" height="24" rx="7" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="265" y="235" width="100" height="22" rx="6" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Knierolle -->
      <ellipse cx="368" cy="258" rx="10" ry="14" fill="url(#lagPillow)" opacity="0.7"/>
      <text x="368" y="276" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#60a5fa" font-weight="700">Knierolle!</text>
      <!-- Scherkraft flèche -->
      <path d="M165 250 L195 265" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" marker-end="url(#lagArr)"/>
      <defs><marker id="lagArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#f97316"/></marker></defs>
      <text x="210" y="270" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#f97316">⚠ Scherkräfte!</text>
      <!-- Angle -->
      <path d="M10 260 L60 260" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M10 260 Q16 252 20 248" fill="none" stroke="#fb923c" stroke-width="1.5"/>
      <text x="30" y="256" font-size="8" font-family="DM Sans" font-weight="800" fill="#fb923c">30°</text>

      <!-- ══ MIKROLAGERUNG ══ (petit encadré) -->
      <rect x="10" y="285" width="540" height="50" rx="10" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.25)" stroke-width="1"/>
      <text x="22" y="302" font-size="9" font-family="DM Sans" font-weight="800" fill="#60a5fa">⑥ Mikrolagerung (5°–10°) — zwischen den Hauptlagerungen!</text>
      <text x="22" y="315" font-size="7.5" font-family="DM Sans" fill="rgba(148,163,184,0.8)">Kleine Positionsveränderungen (z.B. mit kleinen Keilen/Handtüchern) zwischen den regulären Hauptlagerungen (2–4-stündlich).</text>
      <text x="22" y="327" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.8)">✓ Erleichtert kontinuierliche Druckentlastung ohne vollständiges Umlagern — auch bei kooperativen Patienten einsetzbar.</text>

      <!-- Légende -->
      <rect x="0" y="337" width="560" height="22" fill="rgba(0,0,0,0.5)"/>
      <rect x="10" y="344" width="10" height="8" rx="2" fill="url(#lagPressure)" opacity="0.8"/>
      <text x="24" y="351" font-size="7.5" font-family="DM Sans" fill="rgba(248,113,113,0.8)">= Druckzone (animiert)</text>
      <rect x="165" y="344" width="10" height="8" rx="2" fill="url(#lagPillow)" opacity="0.7"/>
      <text x="179" y="351" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.8)">= Lagerungskissen</text>
      <text x="340" y="351" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.8)">⭐ = Goldstandard Lagerung</text>
    </svg>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⏱️ Lagerungsintervalle — Klausurrelevant!</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${[
        ['Liegend','Alle 2–4 Stunden — je nach Risikoeinschätzung und individueller Toleranz','#60a5fa'],
        ['Sitzend','Mindestens alle 60 Minuten — Rollstuhlpatienten besonders gefährdet!','#fb923c'],
        ['30°-Lagerung','Schräglage links — Rücken — rechts — Mikrolagerung dazwischen','#4ade80'],
        ['Dokumentation','Jede Lagerung dokumentieren! (Uhrzeit, Position, Hautbefund)','#fbbf24'],
      ].map(([t,d,c])=>`<div style="padding:10px 12px;border-radius:10px;background:${c}0d;border:1px solid ${c}22">
        <div style="font-weight:700;font-size:.78rem;color:${c};margin-bottom:3px">${t}</div>
        <div style="font-size:.71rem;color:var(--ink2);line-height:1.4">${d}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 KLAUSUR: 30°-Schräglagerung — warum Goldstandard?</div>
    Bei der <strong>90°-Seitenlage</strong> lastet der gesamte Körperdruck auf dem <strong>Trochanter major</strong> → sehr hohe Druckbelastung. Die <strong>30°-Schräglage</strong> verteilt den Druck auf Gesäßmuskel und Rückseite → Trochanter und Kreuzbein werden gleichzeitig entlastet! <strong>Knierolle verhindert Abgleiten bei OK-Hochlagerung.</strong>
  </div>
</div>

<button class="lekt-quiz-btn" onclick="startQuizForTheme(THEMES.find(t=>t.id==='dekubitus'))">🎯 Jetzt Quiz starten — Dekubitus</button>
</div></div>`,
  },
  blutzuck:{
    'Grundlagen Blutzucker & Pankreas': () => `
<div class="lekt-layout">

<!-- MAIN CONTENT -->
<div>

<!-- HERO LEKTION -->
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="lekt-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🏥 Pflegefach · Lektion 1</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Grundlagen Blutzucker & Pankreas</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Wie kommt Zucker ins Blut, wer reguliert ihn — und was passiert wenn das System versagt?</div>
  </div>
</div>

<!-- 01 GLUKOSE -->
<div class="lekt-sec" id="lsec-glukose">
  <div class="lekt-sec-label"><span class="lekt-num">01</span><span class="lekt-title">Was ist Glukose & wozu braucht sie der Körper?</span></div>
  <p class="lekt-prose">Glukose ist der <strong>wichtigste Energielieferant</strong> des menschlichen Körpers. Alle Zellen — besonders das Gehirn — sind darauf angewiesen. Kohlenhydrate werden im Darm zu Glukose abgebaut, ins Blut aufgenommen, und Insulin schleust sie in die Zellen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label">🍞 Weg der Glukose durch den Körper</div>
    <div class="lekt-journey">
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(251,191,36,.1);border-color:rgba(251,191,36,.3)">🍞</div><div class="lekt-j-lbl">Kohlen­hydrate</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(96,165,250,.1);border-color:rgba(96,165,250,.3)">🫃</div><div class="lekt-j-lbl">Darm­aufnahme</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(220,38,38,.1);border-color:rgba(220,38,38,.3)">🩸</div><div class="lekt-j-lbl">BZ steigt</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(45,212,191,.1);border-color:rgba(45,212,191,.3)">💉</div><div class="lekt-j-lbl">Insulin</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(74,222,128,.1);border-color:rgba(74,222,128,.3)">⚡</div><div class="lekt-j-lbl">Energie in Zellen</div></div>
    </div>
  </div>
</div>

<!-- 02 PANKREAS -->
<div class="lekt-sec" id="lsec-pankreas">
  <div class="lekt-sec-label"><span class="lekt-num">02</span><span class="lekt-title">Das Pankreas — Anatomie & Funktion</span></div>
  <p class="lekt-prose">Das <strong>Pankreas (Bauchspeicheldrüse)</strong> liegt hinter dem Magen und hat zwei Funktionen: <strong>exokrin</strong> (Verdauungsenzyme ins Duodenum) und <strong>endokrin</strong> (Hormone ins Blut). Es besteht aus 3 Teilen — klicke auf jeden Teil!</p>
  <div class="lekt-card">
    <div class="lekt-card-label">🫀 Anatomie des Pankreas — realistisch & interaktiv</div>

    <!-- SVG ANATOMIQUE RÉALISTE PANKREAS pleine largeur -->
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px">
      <defs>
        <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5c0a0"/>
          <stop offset="100%" stop-color="#e09070"/>
        </linearGradient>
        <linearGradient id="magenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0a8a0"/>
          <stop offset="100%" stop-color="#d07868"/>
        </linearGradient>
        <linearGradient id="duodGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e8b870"/>
          <stop offset="100%" stop-color="#c89040"/>
        </linearGradient>
        <linearGradient id="milzGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c090c0"/>
          <stop offset="100%" stop-color="#905090"/>
        </linearGradient>
        <linearGradient id="kopfGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0a090"/>
          <stop offset="100%" stop-color="#d06050"/>
        </linearGradient>
        <linearGradient id="koerperGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#80d8c8"/>
          <stop offset="100%" stop-color="#40a898"/>
        </linearGradient>
        <linearGradient id="schwanzGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8d070"/>
          <stop offset="100%" stop-color="#d8a030"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- FOND -->
      <rect width="560" height="280" fill="#1a1f2e" rx="12"/>

      <!-- CONTEXTE ANATOMIQUE: organes voisins fantômes -->

      <!-- MAGEN (estomac, gauche) - forme de J arrondie -->
      <path d="M 30 40 Q 20 60 22 100 Q 24 140 40 165 Q 55 185 75 178 Q 95 170 100 150 Q 108 125 105 100 Q 102 75 90 55 Q 78 38 60 35 Q 42 32 30 40 Z"
        fill="rgba(240,168,160,0.15)" stroke="rgba(240,168,160,0.4)" stroke-width="1.5"/>
      <text x="60" y="105" text-anchor="middle" fill="rgba(240,168,160,0.5)" font-size="11" font-family="DM Sans" font-weight="600">Magen</text>
      <text x="60" y="120" text-anchor="middle" fill="rgba(240,168,160,0.3)" font-size="8" font-family="DM Sans">(Gaster)</text>

      <!-- DUODENUM (c-förmig autour du Kopf) -->
      <path d="M 140 110 Q 132 85 138 65 Q 144 50 155 48 Q 168 46 175 58"
        fill="none" stroke="rgba(232,184,112,0.5)" stroke-width="14" stroke-linecap="round"/>
      <path d="M 140 110 Q 135 128 138 148 Q 142 168 155 175 Q 168 182 180 176"
        fill="none" stroke="rgba(232,184,112,0.5)" stroke-width="14" stroke-linecap="round"/>
      <!-- Canal de Wirsung -->
      <path d="M 175 58 Q 230 68 310 72 Q 370 74 420 76"
        fill="none" stroke="rgba(232,184,112,0.6)" stroke-width="3" stroke-dasharray="5 3"/>
      <text x="118" y="200" text-anchor="middle" fill="rgba(232,184,112,0.55)" font-size="9" font-family="DM Sans">Duodenum</text>

      <!-- MILZ (rate, droite) - forme de fève -->
      <path d="M 478 45 Q 510 38 525 60 Q 538 82 530 105 Q 520 125 500 128 Q 478 128 465 110 Q 455 92 462 70 Q 468 52 478 45 Z"
        fill="rgba(192,144,192,0.18)" stroke="rgba(192,144,192,0.45)" stroke-width="1.5"/>
      <text x="495" y="86" text-anchor="middle" fill="rgba(192,144,192,0.55)" font-size="11" font-family="DM Sans" font-weight="600">Milz</text>
      <text x="495" y="100" text-anchor="middle" fill="rgba(192,144,192,0.35)" font-size="8" font-family="DM Sans">(Splen)</text>

      <!-- ===== PANKREAS principal ===== -->

      <!-- KOPF (rouge-saumon, rond, entouré Duodenum) -->
      <ellipse id="svg-kopf" cx="188" cy="112" rx="48" ry="58"
        fill="url(#kopfGrad)" stroke="#f87171" stroke-width="2.5"
        cursor="pointer" style="transition:all .35s;filter:drop-shadow(0 3px 8px rgba(248,113,113,0.3))"/>
      <!-- Texture Kopf -->
      <ellipse cx="188" cy="108" rx="35" ry="42" fill="rgba(255,255,255,0.06)"/>
      <ellipse cx="178" cy="100" rx="15" ry="12" fill="rgba(255,255,255,0.05)"/>
      <!-- Labels Kopf -->
      <text x="188" y="106" text-anchor="middle" fill="white" font-size="12" font-family="DM Sans" font-weight="800" pointer-events="none">Kopf</text>
      <text x="188" y="120" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="9" font-family="DM Sans" pointer-events="none">Caput</text>
      <!-- Vater-Papille point -->
      <circle cx="155" cy="130" r="5" fill="#fbbf24" opacity="0.9"/>
      <line x1="150" y1="132" x2="120" y2="148" stroke="rgba(251,191,36,0.5)" stroke-width="1"/>
      <text x="118" y="162" text-anchor="middle" fill="rgba(251,191,36,0.7)" font-size="7.5" font-family="DM Sans">Vater-</text>
      <text x="118" y="172" text-anchor="middle" fill="rgba(251,191,36,0.7)" font-size="7.5" font-family="DM Sans">Papille</text>

      <!-- KÖRPER (turquoise, allongé, au centre) -->
      <path id="svg-koerper"
        d="M 233 72 Q 280 58 330 62 Q 345 64 348 80 Q 350 96 348 112 Q 346 126 330 130 Q 280 134 233 128 Q 228 126 226 112 Q 224 96 226 80 Q 228 66 233 72 Z"
        fill="url(#koerperGrad)" stroke="#2dd4bf" stroke-width="2.5"
        cursor="pointer" style="transition:all .35s;filter:drop-shadow(0 3px 8px rgba(45,212,191,0.3))"/>
      <!-- Texture Körper -->
      <ellipse cx="290" cy="96" rx="45" ry="28" fill="rgba(255,255,255,0.07)"/>
      <!-- Langerhans-Inseln (petits cercles lumineux) -->
      <circle cx="268" cy="92" r="7" fill="rgba(255,255,255,0.25)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="290" cy="98" r="6" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="312" cy="90" r="5" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <!-- Labels Körper -->
      <text x="290" y="93" text-anchor="middle" fill="white" font-size="12" font-family="DM Sans" font-weight="800" pointer-events="none">Körper</text>
      <text x="290" y="107" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="9" font-family="DM Sans" pointer-events="none">Corpus</text>
      <!-- Label Langerhans -->
      <line x1="290" y1="66" x2="290" y2="55" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <text x="290" y="50" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="8" font-family="DM Sans">Langerhans-Inseln ✨</text>

      <!-- SCHWANZ (jaune-doré, effilé, vers milz) -->
      <path id="svg-schwanz"
        d="M 346 66 Q 380 54 415 58 Q 440 62 458 74 Q 468 84 462 98 Q 455 112 435 116 Q 408 120 374 116 Q 355 112 346 100 Q 344 90 346 78 Z"
        fill="url(#schwanzGrad)" stroke="#fbbf24" stroke-width="2.5"
        cursor="pointer" style="transition:all .35s;filter:drop-shadow(0 3px 8px rgba(251,191,36,0.3))"/>
      <!-- Texture Schwanz -->
      <ellipse cx="402" cy="88" rx="45" ry="24" fill="rgba(255,255,255,0.07)"/>
      <!-- Labels Schwanz -->
      <text x="405" y="85" text-anchor="middle" fill="white" font-size="12" font-family="DM Sans" font-weight="800" pointer-events="none">Schwanz</text>
      <text x="405" y="99" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="9" font-family="DM Sans" pointer-events="none">Cauda</text>

      <!-- Canal principal (Ductus pancreaticus) -->
      <path d="M 188 112 Q 240 110 290 108 Q 340 106 420 100"
        fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3" stroke-dasharray="6 3"/>
      <text x="300" y="148" text-anchor="middle" fill="rgba(255,255,255,0.25)" font-size="8" font-family="DM Sans">Ductus pancreaticus</text>

      <!-- Flèches hormones depuis Körper vers sang -->
      <!-- Insulin arrow -->
      <path d="M 268 92 Q 260 150 250 200" fill="none" stroke="rgba(45,212,191,0.6)" stroke-width="2" marker-end="url(#arrowTeal)"/>
      <rect x="225" y="205" width="55" height="20" rx="6" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.4)" stroke-width="1"/>
      <text x="252" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#2dd4bf">💉 Insulin</text>
      <!-- Glukagon arrow -->
      <path d="M 312 90 Q 318 150 325 200" fill="none" stroke="rgba(251,191,36,0.6)" stroke-width="2"/>
      <rect x="298" y="205" width="60" height="20" rx="6" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" stroke-width="1"/>
      <text x="328" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#fbbf24">⬆ Glukagon</text>
      <!-- Flèche vers sang -->
      <path d="M 252 225 Q 280 240 328 225" fill="none" stroke="rgba(248,113,113,0.4)" stroke-width="1.5" stroke-dasharray="4 2"/>
      <text x="290" y="250" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(248,113,113,0.6)">→ direkt ins Blut (endokrin)</text>

      <!-- Flèche exokrin vers Duodenum -->
      <path d="M 155 145 Q 148 158 145 170" fill="none" stroke="rgba(232,184,112,0.7)" stroke-width="2"/>
      <text x="100" y="218" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(232,184,112,0.7)">→ Verdauungsenzyme</text>
      <text x="100" y="228" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(232,184,112,0.5)">(exokrin)</text>

      <!-- Légende animée Langerhans -->
      <circle cx="30" cy="240" r="6" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="42" y="244" font-size="8" font-family="DM Sans" fill="rgba(255,255,255,0.5)">Langerhans-Inseln (endokrin) → Insulin + Glukagon ins Blut</text>
    </svg>

    <!-- Labels interactifs -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px">
      <div class="lekt-anat-lbl active" id="lbl-kopf" onclick="svgSelect('kopf')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#f0a090;border:2px solid #f87171"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#f87171;margin-bottom:1px">Kopf (Caput)</div><div style="font-size:.67rem;color:var(--ink2)">C-förmig vom Duodenum umschlossen · Vater-Papille</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-koerper" onclick="svgSelect('koerper')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#40a898;border:2px solid #2dd4bf"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#2dd4bf;margin-bottom:1px">Körper (Corpus)</div><div style="font-size:.67rem;color:var(--ink2)">Langerhans-Inseln ✨ → Insulin & Glukagon</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-schwanz" onclick="svgSelect('schwanz')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#d8a030;border:2px solid #fbbf24"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#fbbf24;margin-bottom:1px">Schwanz (Cauda)</div><div style="font-size:.67rem;color:var(--ink2)">Grenzt an die Milz (Splen) · linker Oberbauch</div></div>
      </div>
    </div>
  </div>
</div>

<!-- 03 HORMONE -->
<div class="lekt-sec" id="lsec-hormone">
  <div class="lekt-sec-label"><span class="lekt-num">03</span><span class="lekt-title">Insulin & Glukagon — Die zwei Gegenspieler</span></div>
  <p class="lekt-prose">In den <strong>Langerhans-Inseln</strong> werden ca. 1 Million Hormone direkt ins Blut abgegeben. Die zwei Schlüsselhormone sind Gegenspieler die den BZ im Gleichgewicht halten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label">⚖️ Insulin vs. Glukagon</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="background:var(--teal-dim);border:1px solid rgba(45,212,191,.2);border-radius:14px;padding:20px;text-align:center">
        <div style="font-size:1.8rem;margin-bottom:8px">💉</div>
        <div style="font-weight:700;color:var(--teal);margin-bottom:3px">INSULIN</div>
        <div style="font-size:.7rem;color:var(--ink2);margin-bottom:12px">B-Zellen (70% der Inselzellen)</div>
        <div style="font-size:1.4rem;animation:bDown 1.5s infinite">⬇️</div>
        <div style="background:rgba(45,212,191,.15);color:var(--teal);font-size:.78rem;font-weight:700;padding:5px 12px;border-radius:8px;margin-top:10px;display:inline-block">Blutzucker senken</div>
      </div>
      <div style="background:var(--amber-dim);border:1px solid rgba(251,191,36,.2);border-radius:14px;padding:20px;text-align:center">
        <div style="font-size:1.8rem;margin-bottom:8px">⬆️</div>
        <div style="font-weight:700;color:var(--amber);margin-bottom:3px">GLUKAGON</div>
        <div style="font-size:.7rem;color:var(--ink2);margin-bottom:12px">A-Zellen der Langerhans-Inseln</div>
        <div style="font-size:1.4rem;animation:bUp 1.5s infinite">⬆️</div>
        <div style="background:rgba(251,191,36,.15);color:var(--amber);font-size:.78rem;font-weight:700;padding:5px 12px;border-radius:8px;margin-top:10px;display:inline-block">Blutzucker erhöhen</div>
      </div>
    </div>
  </div>
  <div class="lekt-merkhilfe">
    <span style="font-size:1.4rem">🧠</span>
    <div><div style="font-size:.67rem;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--teal);margin-bottom:4px">Merkhilfe</div>
    <div style="font-size:.85rem"><strong style="color:var(--teal)">B wie Bremse</strong> → B-Zellen = Insulin = BZ bremsen<br><strong style="color:var(--amber)">A wie Anstieg</strong> → A-Zellen = Glukagon = BZ ansteigen lassen</div></div>
  </div>
  <div class="lekt-klausur"><div class="lekt-klausur-lbl">⚠️ Klausur</div>Verwechslung von A- und B-Zellen ist einer der <strong>häufigsten Fehler</strong>! A → Glukagon (Anstieg). B → Insulin (Bremse). Sitzt das?</div>
</div>

<!-- 04 BZ WERTE -->
<div class="lekt-sec" id="lsec-werte">
  <div class="lekt-sec-label"><span class="lekt-num">04</span><span class="lekt-title">Normale & kritische Blutzuckerwerte</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label">📊 BZ-Skala (mg/dl)</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[['Hypoglykämie 🚨','8%','var(--rose)','< 70 mg/dl'],['Normal nüchtern ✓','25%','var(--green)','70–100 mg/dl'],['Nach dem Essen','35%','var(--teal)','bis 140 mg/dl'],['Prädiabetes ⚠️','50%','var(--amber)','100–125 mg/dl'],['Diabetes mellitus','65%','#f97316','≥ 126 mg/dl'],['Nierenschwelle 🔴','80%','var(--rose)','> 180 mg/dl']].map(([l,w,c,v])=>`
      <div style="display:flex;align-items:center;gap:12px">
        <div style="font-size:.75rem;font-weight:500;color:var(--ink2);width:160px;flex-shrink:0">${l}</div>
        <div style="flex:1;height:10px;background:var(--bg3);border-radius:5px;overflow:hidden"><div style="width:${w};height:100%;background:${c};border-radius:5px;animation:growBar .9s ease both"></div></div>
        <div style="font-size:.72rem;font-weight:700;width:100px;text-align:right;color:${c}">${v}</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- 05 HYPO & HYPER -->
<div class="lekt-sec" id="lsec-hypo">
  <div class="lekt-sec-label"><span class="lekt-num">05</span><span class="lekt-title">Hypoglykämie & Hyperglykämie im Vergleich</span></div>
  <p class="lekt-prose"><strong>Wichtig: Immer zuerst messen bevor gehandelt wird!</strong> Beide Zustände sind gefährlich und werden oft in der Klausur verglichen.</p>
  <div class="lekt-card">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="background:var(--rose-dim);border:1px solid rgba(248,113,113,.25);border-radius:14px;padding:18px">
        <div style="font-weight:700;font-size:.9rem;color:var(--rose);margin-bottom:4px">⬇️ Hypoglykämie</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)">BZ unter 70 mg/dl</div>
        ${['Zittern, Schwitzen','Verwirrtheit, Unruhe','Heißhunger','Blässe, Herzrasen','Im Extremfall: Koma'].map(s=>`<div style="font-size:.78rem;color:var(--ink2);padding:3px 0 3px 14px;position:relative"><span style="position:absolute;left:0;color:var(--rose)">•</span>${s}</div>`).join('')}
        <div style="margin-top:12px;padding:9px 12px;background:rgba(248,113,113,.1);border-radius:8px;font-size:.74rem;color:var(--rose);font-weight:600">🚨 MESSEN → Traubenzucker</div>
      </div>
      <div style="background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.25);border-radius:14px;padding:18px">
        <div style="font-weight:700;font-size:.9rem;color:#fb923c;margin-bottom:4px">⬆️ Hyperglykämie</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)">BZ über 126 mg/dl nüchtern</div>
        ${['Starker Durst (Polydipsie)','Häufiges Wasserlassen (Polyurie)','Müdigkeit, Schwäche','Sehstörungen','Im Extremfall: Koma'].map(s=>`<div style="font-size:.78rem;color:var(--ink2);padding:3px 0 3px 14px;position:relative"><span style="position:absolute;left:0;color:#fb923c">•</span>${s}</div>`).join('')}
        <div style="margin-top:12px;padding:9px 12px;background:rgba(251,146,60,.1);border-radius:8px;font-size:.74rem;color:#fb923c;font-weight:600">🔶 MESSEN → Arzt → Insulin</div>
      </div>
    </div>
  </div>
  <div class="lekt-klausur"><div class="lekt-klausur-lbl">⚠️ Klausur — FALLE!</div>Wenn unklar ob Hypo oder Hyper: <strong>NIEMALS blind handeln — IMMER ZUERST MESSEN!</strong></div>
</div>

<!-- 06 BUS -->
<div class="lekt-sec" id="lsec-bus">
  <div class="lekt-sec-label"><span class="lekt-num">06</span><span class="lekt-title">Glukosurie & Polydipsie — Die Bus-Analogie</span></div>
  <p class="lekt-prose">Ab BZ > <strong>180 mg/dl</strong> (Nierenschwelle) scheidet die Niere Zucker im Urin aus (Glukosurie). Zucker zieht Wasser mit → Exsikkose → Polydipsie.</p>
  <div class="lekt-card">
    <div class="lekt-card-label">🚌 Interaktiv — schiebe den BZ-Regler!</div>
    <div style="background:var(--bg3);border-radius:12px;padding:18px">
      <div style="display:flex;align-items:flex-end;gap:10px;margin-bottom:10px">
        <div style="font-size:2.2rem;transition:transform .4s" id="lbus">🚌</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;flex:1" id="lbus-seats"></div>
      </div>
      <div style="height:5px;border-radius:3px;margin-bottom:12px;transition:background 1s" id="lbus-road"></div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5;min-height:44px" id="lbus-info"></div>
      <div style="margin-top:14px">
        <div style="display:flex;justify-content:space-between;font-size:.7rem;color:var(--ink3);margin-bottom:5px">
          <span>Blutzucker</span><strong style="color:var(--ink);font-size:.8rem" id="lbz-val">90 mg/dl</strong>
        </div>
        <input type="range" min="50" max="420" value="90" style="width:100%;accent-color:#dc2626;cursor:pointer" oninput="lBusUpdate(this.value)">
        <div style="display:flex;justify-content:space-between;font-size:.65rem;color:var(--ink3);margin-top:3px">
          <span>50</span><span style="color:var(--rose);font-weight:700">180 Nierenschwelle</span><span>420</span>
        </div>
      </div>
    </div>
    <p style="font-size:.7rem;color:var(--ink3);margin-top:8px;text-align:center">🎮 Schiebe auf über 180 mg/dl und beobachte die Glukosurie!</p>
  </div>
  <div class="lekt-klausur"><div class="lekt-klausur-lbl">⚠️ Klausur — Kette!</div><strong>BZ &gt; 180 → Glukosurie → Zucker zieht Wasser → Exsikkose → Polydipsie.</strong></div>
</div>

<!-- ZUSAMMENFASSUNG -->
<div class="lekt-sec" id="lsec-summary">
  <div class="lekt-sec-label"><span class="lekt-num">✓</span><span class="lekt-title">Zusammenfassung</span></div>
  <div class="lekt-card">
    ${[['01','Glukose = Energie für alle Zellen. Kohlenhydrate → Darm → Blut → Insulin → Zelle.'],['02','Pankreas: Kopf (Caput), Körper (Corpus, Langerhans-Inseln!), Schwanz (Cauda, Milz).'],['03','B-Zellen = Insulin (Bremse) · A-Zellen = Glukagon (Anstieg) — niemals verwechseln!'],['04','Normal: 70–100 nüchtern. Hypo: <70. Diabetes: ≥126. Nierenschwelle: >180 mg/dl.'],['05','Hypo: Zittern, Schwitzen, Heißhunger. Hyper: Durst, Polyurie. Immer ZUERST MESSEN!'],['06','BZ >180 → Glukosurie → Wasserverlust → Exsikkose → Polydipsie.']].map(([n,t])=>`
    <div style="display:flex;gap:12px;align-items:flex-start;font-size:.85rem;padding:11px 14px;background:rgba(255,255,255,.02);border-radius:9px;border:1px solid var(--border);margin-bottom:8px">
      <span style="color:#f87171;font-weight:800;flex-shrink:0">${n}</span><span>${t}</span>
    </div>`).join('')}
  </div>
  <button class="lekt-quiz-btn" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Diabetes starten →</button>
</div>

</div><!-- /main content -->

</div><!-- /lekt-layout -->`
  },
  haut:{
    'Haut und ihre Aufgaben': () => `
<div class="lekt-layout">
<div>

<!-- HERO VERT -->
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 1</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Die Haut & ihre Aufgaben</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Das größte Organ des Körpers — Schutz, Kommunikation und weit mehr</div>
  </div>
</div>

<!-- SEC 1: Was ist die Haut -->
<div class="lekt-sec" id="lsec-haut-intro">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Was ist die Haut? (Cutis)</span></div>
  <p class="lekt-prose">Die Haut (lat. <strong>Cutis</strong>) ist das <strong>größte und nervenreichste Organ</strong> des Menschen. Je nach Körpergröße wiegt sie bis zu <strong>20 kg</strong> (mit Subcutis) und ist <strong>1,5–2 m²</strong> groß. Sie ist das Grenzorgan zur Umwelt.</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📐 Hautoberflächenverteilung — Erwachsener vs. Kind</div>
    <!-- SVG animé reproduisant l'image 5 -->
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin-top:8px;border-radius:12px">
      <defs>
        <linearGradient id="skinAdult" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8a878"/><stop offset="100%" stop-color="#c88858"/>
        </linearGradient>
        <linearGradient id="skinChild" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#dba878"/><stop offset="100%" stop-color="#b87858"/>
        </linearGradient>
        <filter id="sfShadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <rect width="480" height="260" rx="12" fill="#0c1520"/>
      <text x="240" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">Körperoberfläche — Neunerregel (Wallace)</text>

      <!-- ═══ ADULTE (gauche) ═══ -->
      <text x="110" y="36" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="700" fill="#4ade80">Erwachsener</text>
      <text x="110" y="47" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.6)">1,55–2,10 m²</text>

      <!-- Tête adulte -->
      <ellipse cx="110" cy="72" rx="18" ry="21" fill="rgba(251,191,36,0.3)" stroke="#fbbf24" stroke-width="2" filter="url(#sfShadow)"/>
      <ellipse cx="110" cy="72" rx="18" ry="21" fill="url(#skinAdult)" opacity="0.4"/>
      <text x="110" y="76" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="900" fill="#fbbf24">9%</text>
      <!-- Visage simplifié -->
      <circle cx="116" cy="67" r="2.5" fill="rgba(0,0,0,0.35)"/>
      <path d="M105 79 Q110 83 115 79" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Cou adulte -->
      <rect x="103" y="93" width="14" height="10" rx="4" fill="url(#skinAdult)" opacity="0.7"/>

      <!-- Tronc adulte (avant + arrière = 18%+18%) -->
      <path d="M82 103 Q78 106 76 110 L76 165 Q78 170 82 172 L138 172 Q142 170 144 165 L144 110 Q142 106 138 103 Z"
            fill="rgba(251,191,36,0.25)" stroke="#fbbf24" stroke-width="1.8" filter="url(#sfShadow)"/>
      <path d="M82 103 Q78 106 76 110 L76 165 Q78 170 82 172 L138 172 Q142 170 144 165 L144 110 Q142 106 138 103 Z"
            fill="url(#skinAdult)" opacity="0.35"/>
      <!-- Muscles pectoraux simulés -->
      <path d="M88 112 Q110 108 132 112" fill="none" stroke="rgba(255,215,150,0.2)" stroke-width="1"/>
      <path d="M85 125 Q110 120 135 125" fill="none" stroke="rgba(255,215,150,0.15)" stroke-width="1"/>
      <text x="110" y="140" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="900" fill="#fbbf24">18%</text>
      <text x="110" y="152" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(251,191,36,0.7)">vorne + hinten</text>

      <!-- Bras gauche adulte -->
      <path d="M73 106 Q66 108 62 115 L57 155 Q58 162 63 164 Q68 166 72 160 L77 120 Q76 110 73 106Z"
            fill="rgba(96,165,250,0.25)" stroke="#60a5fa" stroke-width="1.8"/>
      <path d="M73 106 Q66 108 62 115 L57 155 Q58 162 63 164 Q68 166 72 160 L77 120 Q76 110 73 106Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="65" y="140" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="900" fill="#60a5fa">9%</text>

      <!-- Main gauche adulte -->
      <ellipse cx="60" cy="168" rx="7" ry="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.2"/>

      <!-- Bras droit adulte -->
      <path d="M147 106 Q154 108 158 115 L163 155 Q162 162 157 164 Q152 166 148 160 L143 120 Q144 110 147 106Z"
            fill="rgba(96,165,250,0.25)" stroke="#60a5fa" stroke-width="1.8"/>
      <path d="M147 106 Q154 108 158 115 L163 155 Q162 162 157 164 Q152 166 148 160 L143 120 Q144 110 147 106Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="155" y="140" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="900" fill="#60a5fa">9%</text>
      <ellipse cx="160" cy="168" rx="7" ry="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.2"/>

      <!-- Bassin/périnée adulte -->
      <ellipse cx="110" cy="174" rx="20" ry="8" fill="rgba(248,113,113,0.25)" stroke="#f87171" stroke-width="1.5"/>
      <text x="110" y="177" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="900" fill="#f87171">1%</text>

      <!-- Jambe gauche adulte -->
      <path d="M84 178 Q80 182 79 190 L78 245 Q80 250 86 250 Q92 250 94 245 L95 190 Q94 182 90 178Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <path d="M84 178 Q80 182 79 190 L78 245 Q80 250 86 250 Q92 250 94 245 L95 190 Q94 182 90 178Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="86" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">18%</text>

      <!-- Jambe droite adulte -->
      <path d="M130 178 Q134 182 135 190 L136 245 Q134 250 128 250 Q122 250 120 245 L119 190 Q120 182 124 178Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <path d="M130 178 Q134 182 135 190 L136 245 Q134 250 128 250 Q122 250 120 245 L119 190 Q120 182 124 178Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="128" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">18%</text>

      <!-- ═══ SÉPARATEUR ═══ -->
      <line x1="240" y1="30" x2="240" y2="255" stroke="rgba(255,255,255,0.07)" stroke-width="1.5" stroke-dasharray="5 3"/>
      <text x="240" y="148" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.15)" transform="rotate(-90,240,148)">vs.</text>

      <!-- ═══ ENFANT (droite) ═══ -->
      <text x="370" y="36" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="700" fill="#60a5fa">Kind (5 Jahre)</text>
      <text x="370" y="47" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.6)">andere Proportionen!</text>

      <!-- Tête enfant (plus grande = 15%) -->
      <ellipse cx="370" cy="75" rx="24" ry="27" fill="rgba(96,165,250,0.35)" stroke="#60a5fa" stroke-width="2.2" filter="url(#sfShadow)"/>
      <ellipse cx="370" cy="75" rx="24" ry="27" fill="url(#skinChild)" opacity="0.4"/>
      <text x="370" y="78" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="900" fill="#60a5fa">15%</text>
      <!-- Visage enfant -->
      <circle cx="376" cy="69" r="2.8" fill="rgba(0,0,0,0.35)"/>
      <path d="M362 82 Q370 87 378 82" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Cou enfant -->
      <rect x="362" y="102" width="16" height="10" rx="4" fill="url(#skinChild)" opacity="0.7"/>

      <!-- Tronc enfant -->
      <path d="M344 112 Q340 116 338 122 L338 170 Q340 175 344 177 L396 177 Q400 175 402 170 L402 122 Q400 116 396 112 Z"
            fill="rgba(251,191,36,0.25)" stroke="#fbbf24" stroke-width="1.8" filter="url(#sfShadow)"/>
      <path d="M344 112 Q340 116 338 122 L338 170 Q340 175 344 177 L396 177 Q400 175 402 170 L402 122 Q400 116 396 112 Z"
            fill="url(#skinChild)" opacity="0.35"/>
      <text x="370" y="147" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="900" fill="#fbbf24">16%</text>
      <text x="370" y="159" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(251,191,36,0.7)">vorne + hinten</text>

      <!-- Bras gauche enfant -->
      <path d="M336 116 Q330 118 328 125 L325 155 Q326 162 330 163 Q335 164 337 158 L340 128 Q339 118 336 116Z"
            fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="330" y="143" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="900" fill="#60a5fa">9.5%</text>

      <!-- Bras droit enfant -->
      <path d="M404 116 Q410 118 412 125 L415 155 Q414 162 410 163 Q405 164 403 158 L400 128 Q401 118 404 116Z"
            fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="410" y="143" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="900" fill="#60a5fa">9.5%</text>

      <!-- Jambes enfant (plus courtes = 17% chacune) -->
      <path d="M344 182 Q340 186 339 194 L338 248 Q340 252 346 252 Q352 252 354 248 L355 194 Q354 186 350 182Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <text x="346" y="222" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">17%</text>

      <path d="M396 182 Q400 186 401 194 L402 248 Q400 252 394 252 Q388 252 386 248 L385 194 Q386 186 390 182Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <text x="394" y="222" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">17%</text>

      <!-- Note comparative bas -->
      <rect x="5" y="252" width="470" height="20" rx="0 0 12 12" fill="rgba(0,0,0,0.4)"/>
      <text x="240" y="265" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(148,163,184,0.8)">⚠️ Kind: Kopf 15% (statt 9%) — Beine 17% (statt 18%) — wichtig bei Verbrennungsberechnung!</text>
    </svg>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⚙️ Funktionen der Haut</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px">
      ${[['🛡️','Passiver Schutz','Kälte, Hitze, Strahlung, Druck, Stoß, chem. Substanzen'],['🦠','Aktiver Schutz','Säureschutzmantel abwehrt Keime'],['💧','Resorption','Aufnahme best. Wirkstoffe durch die Haut'],['🌡️','Thermoregulation','Schweißproduktion, Hydrolipidfilm'],['👁️','Sinnesorgan','Druck, Vibration, Tast-, Schmerz-, Temperaturreiz'],['💬','Kommunikation','Errötung, Schwitzen, Gänsehaut als Signale']].map(([i,t,d])=>`
      <div style="display:flex;gap:10px;padding:10px 12px;background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:9px;align-items:flex-start">
        <span style="font-size:1.2rem;flex-shrink:0">${i}</span>
        <div><div style="font-weight:700;font-size:.8rem;color:#4ade80;margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- SEC 2: Säureschutzmantel & Flora -->
<div class="lekt-sec" id="lsec-haut-schutz">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Säureschutzmantel & Hautflora</span></div>
  <p class="lekt-prose">Der <strong>Säureschutzmantel</strong> = Hydro-Lipid-Film. Er besteht aus <strong>Lipiden</strong> der Talgdrüsen und <strong>Hydro</strong> der Schweißdrüsen. Er schützt die Haut vor Keimen.</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🛡️ Hydro-Lipid-Film — interaktiv</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="background:rgba(96,165,250,.08);border:1.5px solid rgba(96,165,250,.3);border-radius:12px;padding:14px;cursor:pointer;transition:all .3s" onclick="this.style.borderColor='#60a5fa';this.style.background='rgba(96,165,250,.15)'">
        <div style="font-size:1.3rem;margin-bottom:6px">💧</div>
        <div style="font-weight:700;font-size:.82rem;color:#60a5fa;margin-bottom:4px">"Hydro"</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Aus den <strong>Schweißdrüsen</strong> — wässriger Anteil des Films</div>
      </div>
      <div style="background:rgba(251,191,36,.08);border:1.5px solid rgba(251,191,36,.3);border-radius:12px;padding:14px;cursor:pointer;transition:all .3s" onclick="this.style.borderColor='#fbbf24';this.style.background='rgba(251,191,36,.15)'">
        <div style="font-size:1.3rem;margin-bottom:6px">🧴</div>
        <div style="font-weight:700;font-size:.82rem;color:#fbbf24;margin-bottom:4px">"Lipid"</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Aus den <strong>Talgdrüsen</strong> — fetthaltiger Anteil des Films</div>
      </div>
    </div>
    <div style="margin-top:10px;background:rgba(248,113,113,.06);border-left:3px solid #f87171;border-radius:0 9px 9px 0;padding:10px 14px;font-size:.78rem;color:var(--ink2)">
      ⚠️ <strong style="color:#f87171">Pflegerelevant:</strong> Häufiges Händewaschen und Einmalhandschuhe beschädigen den Säureschutzmantel! → Rückfettendes Desinfektionsmittel + Hautpflege verwenden.
    </div>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🦠 Hautflora — 3 Typen</div>
    ${[['🟢','Residente Hautflora','Immer vorhanden, nicht pathogen (physiologisch)','Dauerhaft'],['🟡','Transiente Hautflora','Vorübergehend vorhanden, nicht pathogen','Temporär'],['🔴','Infektionsflora','PATHOGEN — verursacht Infektionen','Gefährlich']].map(([dot,t,d,l])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:11px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:8px">
      <div style="font-size:1rem;flex-shrink:0;margin-top:1px">${dot}</div>
      <div><div style="font-weight:700;font-size:.82rem;margin-bottom:2px">${t} <span style="font-size:.68rem;font-weight:400;color:var(--ink3)">(${l})</span></div><div style="font-size:.73rem;color:var(--ink2)">${d}</div></div>
    </div>`).join('')}
  </div>
</div>

<!-- SEC 3: Hauttypen (Leisten/Feld) -->
<div class="lekt-sec" id="lsec-haut-typen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Leistenhaut & Felderhaut</span></div>
  <p class="lekt-prose">Man unterscheidet zwei Arten von Haut nach ihrer Oberflächenstruktur:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
    <div style="background:rgba(96,165,250,.08);border:1.5px solid rgba(96,165,250,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#60a5fa;margin-bottom:8px">👋 Leistenhaut</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.6">Handflächen + Fußsohlen<br>Dicke bis <strong>9 mm</strong><br>Hautleisten + Furchen<br>Keine Haare, keine Talgdrüsen<br>Schweißdrüsen in Furchen<br>Hat <strong>Glanzzellschicht</strong></div>
    </div>
    <div style="background:rgba(192,132,252,.08);border:1.5px solid rgba(192,132,252,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#c084fc;margin-bottom:8px">🌿 Felderhaut</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.6">Restlicher Körper (größter Teil)<br>Dicke: Gesäß <strong>3 mm</strong>, Gesicht <strong>&lt;1 mm</strong><br>Felder durch feine Rinnen<br>Mit Haaren + Talgdrüsen<br><strong>Keine</strong> Glanzzellschicht</div>
    </div>
  </div>
  </div>

  <!-- SVG ANATOMIQUE RÉALISTE - Injektionsarten -->
  <div class="lekt-card" style="margin-top:14px">
    <div class="lekt-card-label" style="color:#4ade80">💉 Injektionsarten — anatomisch & interaktiv</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px">
      <defs>
        <linearGradient id="inj-skinTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd5c8"/>
          <stop offset="100%" stop-color="#f0a888"/>
        </linearGradient>
        <linearGradient id="inj-derm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e08878"/>
          <stop offset="100%" stop-color="#c86858"/>
        </linearGradient>
        <linearGradient id="inj-sub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c840"/>
          <stop offset="100%" stop-color="#d4a010"/>
        </linearGradient>
        <linearGradient id="inj-mus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d03050"/>
          <stop offset="100%" stop-color="#a01030"/>
        </linearGradient>
        <!-- Seringue gradient -->
        <linearGradient id="syr-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d0d8e8"/>
          <stop offset="50%" stop-color="#f0f4ff"/>
          <stop offset="100%" stop-color="#b0b8c8"/>
        </linearGradient>
        <linearGradient id="syr-needle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c0c8d8"/>
          <stop offset="100%" stop-color="#9098a8"/>
        </linearGradient>
        <!-- Liquide dans seringue -->
        <linearGradient id="liq-im" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f87171" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="liq-sc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="liq-iv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="liq-ic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4ade80" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#22c55e" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="inj-glow-r"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f87171" flood-opacity="0.6"/></filter>
        <filter id="inj-glow-y"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#fbbf24" flood-opacity="0.6"/></filter>
        <filter id="inj-glow-b"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#60a5fa" flood-opacity="0.6"/></filter>
        <filter id="inj-glow-g"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#4ade80" flood-opacity="0.6"/></filter>
      </defs>

      <!-- FOND -->
      <rect width="560" height="320" fill="#12161f" rx="12"/>

      <!-- ===== COUCHES DE PEAU (vue latérale anatomique) ===== -->
      <!-- Surface ondulée peau (Epidermis) -->
      <path d="M 0 150 Q 70 144 140 150 Q 210 156 280 148 Q 350 142 420 150 Q 490 156 560 150 L560 175 Q 490 170 420 174 Q 350 178 280 172 Q 210 168 140 174 Q 70 178 0 174 Z"
        fill="url(#inj-skinTop)" />
      <!-- Stries cornées surface -->
      <path d="M 0 150 Q 140 146 280 150 Q 420 154 560 150" stroke="rgba(255,200,180,0.3)" stroke-width="1" fill="none"/>
      <path d="M 0 157 Q 140 153 280 157 Q 420 161 560 157" stroke="rgba(255,200,180,0.2)" stroke-width="0.7" fill="none"/>

      <!-- Dermis -->
      <path d="M 0 175 Q 140 178 280 172 Q 420 168 560 174 L560 215 Q 420 210 280 214 Q 140 218 0 215 Z"
        fill="url(#inj-derm)"/>
      <!-- Texture collagène -->
      <path d="M 0 188 Q 140 185 280 188 Q 420 191 560 188" stroke="rgba(255,180,160,0.2)" stroke-width="1" fill="none"/>
      <path d="M 0 200 Q 140 197 280 200 Q 420 203 560 200" stroke="rgba(255,180,160,0.15)" stroke-width="1" fill="none"/>
      <!-- Veine dans dermis (pour i.v.) -->
      <path d="M 50 205 Q 140 202 230 206 Q 310 209 400 205 Q 480 202 540 206"
        stroke="#4060cc" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M 50 205 Q 140 202 230 206 Q 310 209 400 205 Q 480 202 540 206"
        stroke="#6080ee" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>

      <!-- Subcutis -->
      <path d="M 0 215 Q 140 218 280 214 Q 420 210 560 215 L560 262 Q 420 258 280 262 Q 140 266 0 262 Z"
        fill="url(#inj-sub)"/>
      <!-- Fettkügelchen subcutis -->
      ${[[30,240],[70,248],[115,238],[160,245],[205,252],[250,242],[295,248],[340,240],[385,250],[430,244],[475,252],[520,240],[50,255],[130,260],[210,257],[290,260],[370,255],[450,258],[510,254]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="9" fill="rgba(255,210,80,0.35)" stroke="rgba(200,160,20,0.4)" stroke-width="0.8"/>`).join('')}

      <!-- Muskel -->
      <path d="M 0 262 Q 140 266 280 262 Q 420 258 560 262 L560 308 Q 420 304 280 308 Q 140 312 0 308 Z"
        fill="url(#inj-mus)"/>
      <!-- Stries musculaires -->
      <path d="M 0 275 Q 140 272 280 275 Q 420 278 560 275" stroke="rgba(255,150,150,0.2)" stroke-width="1.5" fill="none"/>
      <path d="M 0 288 Q 140 285 280 288 Q 420 291 560 288" stroke="rgba(255,150,150,0.15)" stroke-width="1.5" fill="none"/>
      <path d="M 0 300 Q 140 297 280 300 Q 420 303 560 300" stroke="rgba(255,150,150,0.1)" stroke-width="1" fill="none"/>

      <!-- Labels couches (droite) -->
      <text x="555" y="163" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#fcd5c8">Epidermis</text>
      <text x="555" y="197" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#fbbf24">Dermis</text>
      <text x="555" y="207" text-anchor="end" font-size="7" font-family="DM Sans" fill="rgba(96,165,250,0.8)">+ Vene</text>
      <text x="555" y="240" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#f0c840">Subcutis</text>
      <text x="555" y="285" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#f87171">Muskel</text>

      <!-- ===== SERINGUES CORRECTES - aiguille vers le bas ===== -->

      <!-- == 1. INTRAMUSKULÄR 90° - droite verticale, rouge == -->
      <!-- Piston (en haut) -->
      <rect x="58" y="5" width="18" height="5" rx="2" fill="#8090a0"/>
      <line x1="67" y1="10" x2="67" y2="16" stroke="#8090a0" stroke-width="3"/>
      <!-- Corps seringue -->
      <rect x="59" y="16" width="16" height="52" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
      <!-- Liquide rouge -->
      <rect x="62" y="20" width="10" height="38" rx="2" fill="url(#liq-im)"/>
      <!-- Oreilles -->
      <rect x="51" y="52" width="8" height="10" rx="2" fill="#a0a8b8"/>
      <rect x="75" y="52" width="8" height="10" rx="2" fill="#a0a8b8"/>
      <!-- Embout bas -->
      <rect x="63" y="68" width="8" height="6" rx="1" fill="#b0b8c8"/>
      <!-- Aiguille VERS LE BAS -->
      <rect x="65" y="74" width="4" height="78" rx="1" fill="url(#syr-needle)"/>
      <!-- Pointe aiguille -->
      <polygon points="65,152 69,152 67,157" fill="#9098a8"/>
      <!-- Ligne trajectoire dans la peau -->
      <line x1="67" y1="157" x2="67" y2="283" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
      <!-- Impact Muskel -->
      <circle cx="67" cy="283" r="6" fill="#f87171" filter="url(#inj-glow-r)">
        <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="18" y="108" width="98" height="28" rx="6" fill="rgba(248,113,113,0.12)" stroke="rgba(248,113,113,0.4)" stroke-width="1.2"/>
      <text x="67" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#f87171">Intramuskulär</text>
      <text x="67" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(248,113,113,0.7)">i.m. · 90°</text>

      <!-- == 2. SUBKUTAN 45° - rotation autour du point d'entrée peau == -->
      <!-- Seringue correcte (piston haut, aiguille bas), pivotée 45° autour du point peau -->
      <g transform="rotate(-45, 195, 150)">
        <!-- Piston haut -->
        <rect x="187" y="55" width="16" height="5" rx="2" fill="#8090a0"/>
        <line x1="195" y1="60" x2="195" y2="66" stroke="#8090a0" stroke-width="3"/>
        <!-- Corps -->
        <rect x="188" y="66" width="14" height="52" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
        <!-- Liquide jaune -->
        <rect x="191" y="70" width="8" height="36" rx="2" fill="url(#liq-sc)"/>
        <!-- Oreilles -->
        <rect x="180" y="98" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <rect x="204" y="98" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <!-- Embout bas -->
        <rect x="191" y="118" width="8" height="5" rx="1" fill="#b0b8c8"/>
        <!-- Aiguille vers le bas -->
        <rect x="193" y="123" width="4" height="28" rx="1" fill="url(#syr-needle)"/>
        <!-- Pointe -->
        <polygon points="193,151 197,151 195,156" fill="#909898"/>
      </g>
      <!-- Ligne trajectoire + impact Subcutis -->
      <line x1="195" y1="150" x2="170" y2="248" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
      <circle cx="168" cy="250" r="6" fill="#fbbf24" filter="url(#inj-glow-y)">
        <animate attributeName="r" values="5;9;5" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="148" y="108" width="88" height="28" rx="6" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.4)" stroke-width="1.2"/>
      <text x="192" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#fbbf24">Subkutan</text>
      <text x="192" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(251,191,36,0.7)">s.c. · 45°</text>

      <!-- == 3. INTRAVENÖS 25° - rotation 25° autour du point peau == -->
      <g transform="rotate(-25, 330, 150)">
        <!-- Piston haut -->
        <rect x="322" y="60" width="16" height="5" rx="2" fill="#8090a0"/>
        <line x1="330" y1="65" x2="330" y2="71" stroke="#8090a0" stroke-width="3"/>
        <!-- Corps -->
        <rect x="323" y="71" width="14" height="52" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
        <!-- Liquide bleu -->
        <rect x="326" y="75" width="8" height="36" rx="2" fill="url(#liq-iv)"/>
        <!-- Oreilles -->
        <rect x="315" y="103" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <rect x="339" y="103" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <!-- Embout bas -->
        <rect x="326" y="123" width="8" height="5" rx="1" fill="#b0b8c8"/>
        <!-- Aiguille -->
        <rect x="328" y="128" width="4" height="23" rx="1" fill="url(#syr-needle)"/>
        <!-- Pointe -->
        <polygon points="328,151 332,151 330,156" fill="#909898"/>
      </g>
      <!-- Ligne trajectoire + impact Veine -->
      <line x1="330" y1="150" x2="318" y2="205" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
      <circle cx="317" cy="206" r="6" fill="#60a5fa" filter="url(#inj-glow-b)">
        <animate attributeName="r" values="5;9;5" dur="1.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.9s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="286" y="108" width="84" height="28" rx="6" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.4)" stroke-width="1.2"/>
      <text x="328" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#60a5fa">Intravenös</text>
      <text x="328" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(96,165,250,0.7)">i.v. · 25°</text>

      <!-- == 4. INTRAKUTAN 10-15° - rotation 13° autour du point peau == -->
      <g transform="rotate(-13, 468, 150)">
        <!-- Piston haut -->
        <rect x="460" y="65" width="16" height="5" rx="2" fill="#8090a0"/>
        <line x1="468" y1="70" x2="468" y2="76" stroke="#8090a0" stroke-width="3"/>
        <!-- Corps -->
        <rect x="461" y="76" width="14" height="48" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
        <!-- Liquide vert -->
        <rect x="464" y="80" width="8" height="32" rx="2" fill="url(#liq-ic)"/>
        <!-- Oreilles -->
        <rect x="453" y="105" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <rect x="477" y="105" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <!-- Embout bas -->
        <rect x="464" y="124" width="8" height="5" rx="1" fill="#b0b8c8"/>
        <!-- Aiguille courte (intrakutan superficiel) -->
        <rect x="466" y="129" width="4" height="22" rx="1" fill="url(#syr-needle)"/>
        <!-- Pointe -->
        <polygon points="466,151 470,151 468,156" fill="#909898"/>
      </g>
      <!-- Quaddel animée dans épiderme -->
      <ellipse cx="464" cy="163" rx="12" ry="6" fill="rgba(74,222,128,0.45)" stroke="#4ade80" stroke-width="1.5">
        <animate attributeName="rx" values="10;16;10" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
      </ellipse>
      <text x="464" y="147" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="600" fill="rgba(74,222,128,0.9)">Quaddel ↑</text>
      <circle cx="464" cy="163" r="4" fill="#4ade80" filter="url(#inj-glow-g)">
        <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="424" y="108" width="88" height="28" rx="6" fill="rgba(74,222,128,0.12)" stroke="rgba(74,222,128,0.4)" stroke-width="1.2"/>
      <text x="468" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#4ade80">Intrakutan</text>
      <text x="468" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(74,222,128,0.7)">i.c. · 10–15°</text>

    </svg>

    <!-- Cards résumé cliquables -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px">
      ${[
        ['💉','Intramuskulär','i.m.','90°','Tief in den Muskel','#f87171','rgba(248,113,113,0.08)'],
        ['💛','Subkutan','s.c.','45°','In die Subcutis (Fettgewebe)','#fbbf24','rgba(251,191,36,0.08)'],
        ['💙','Intravenös','i.v.','25°','In die Vene (Blutgefäß)','#60a5fa','rgba(96,165,250,0.08)'],
        ['💚','Intrakutan','i.c.','10–15°','In die Epidermis (Quaddel)','#4ade80','rgba(74,222,128,0.08)'],
      ].map(([i,n,abk,grad,d,c,bg])=>`
      <div style="padding:10px;border-radius:11px;border:1.5px solid ${c}40;background:${bg};text-align:center">
        <div style="font-size:1.2rem;margin-bottom:4px">${i}</div>
        <div style="font-weight:800;font-size:.78rem;color:${c};margin-bottom:2px">${n}</div>
        <div style="font-size:.65rem;color:var(--ink3);margin-bottom:4px">${abk}</div>
        <div style="font-family:'Fraunces',serif;font-size:1.2rem;color:${c};margin-bottom:4px">${grad}</div>
        <div style="font-size:.65rem;color:var(--ink2);line-height:1.3">${d}</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>

</div></div>`
    ,
    'Aufbau der Haut (Schichten)': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 2</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Aufbau der Haut — Die 3 Schichten</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Epidermis, Dermis, Subcutis — von außen nach innen</div>
  </div>
</div>

<!-- SVG interactif couches peau -->
<div class="lekt-sec" id="lsec-haut-schichten">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Die 3 Schichten — interaktiv</span></div>
  <p class="lekt-prose">Die Haut besteht aus <strong>Epidermis + Dermis = Cutis</strong>, darunter liegt die <strong>Subcutis</strong>, dann der Muskel. Klicke auf jede Schicht!</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔬 Menschliche Haut (Querschnitt) — klickbar</div>

    <!-- SVG ANATOMIQUE RÉALISTE pleine largeur - fidèle à l'image du cours -->
    <svg id="haut-svg-main" viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px;overflow:visible">
      <defs>
        <!-- Gradients réalistes couche par couche -->
        <linearGradient id="skinBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde8e0"/>
          <stop offset="100%" stop-color="#f9d0be"/>
        </linearGradient>
        <linearGradient id="epiGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd5c8"/>
          <stop offset="100%" stop-color="#f5b8a0"/>
        </linearGradient>
        <linearGradient id="dermGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0a090"/>
          <stop offset="100%" stop-color="#e07060"/>
        </linearGradient>
        <linearGradient id="subGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5d080"/>
          <stop offset="100%" stop-color="#e8b840"/>
        </linearGradient>
        <linearGradient id="musGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e05060"/>
          <stop offset="100%" stop-color="#c03040"/>
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3d2010"/>
          <stop offset="100%" stop-color="#1a0a05"/>
        </linearGradient>
        <linearGradient id="follGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c87850"/>
          <stop offset="100%" stop-color="#a05830"/>
        </linearGradient>
        <!-- Filtre doux -->
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.2)"/>
        </filter>
      </defs>

      <!-- === FOND GLOBAL === -->
      <rect x="60" y="0" width="440" height="370" rx="10" fill="#fde8e0"/>

      <!-- === POILS / HAARE (3 poils qui sortent) === -->
      <!-- Poil gauche -->
      <path d="M165 0 Q162 20 160 55" stroke="url(#hairGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Poil milieu -->
      <path d="M280 0 Q278 18 276 55" stroke="url(#hairGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Poil droite (incliné) -->
      <path d="M380 0 Q382 20 385 55" stroke="url(#hairGrad)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Point rouge (naevus) -->
      <circle cx="235" cy="38" r="5" fill="#c04040" opacity="0.7"/>

      <!-- Label Schweißpore avec ligne -->
      <circle cx="276" cy="30" r="3" fill="rgba(255,255,255,0.6)" stroke="#888" stroke-width="1"/>
      <line x1="279" y1="28" x2="430" y2="10" stroke="#555" stroke-width="1"/>
      <rect x="432" y="3" width="70" height="14" rx="4" fill="rgba(30,40,80,0.8)"/>
      <text x="467" y="13" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="600" fill="white">Schweißpore</text>

      <!-- === EPIDERMIS (2 sous-couches visibles, rose clair ondulé) === -->
      <!-- Couche cornée - surface ondulée -->
      <path d="M60 55 Q120 48 180 55 Q240 60 300 52 Q360 46 440 55 Q480 58 500 54 L500 75 Q460 70 440 74 Q360 78 300 72 Q240 78 180 74 Q120 68 60 74 Z"
        fill="#f5c4b0" stroke="#e8a890" stroke-width="0.5"/>
      <!-- Couche épineuse - couleur plus foncée -->
      <path d="M60 75 Q120 68 180 74 Q240 78 300 72 Q360 78 440 74 Q480 72 500 74 L500 100 Q460 96 440 98 Q360 104 300 98 Q240 104 180 100 Q120 96 60 98 Z"
        fill="#eea880" stroke="#de9870" stroke-width="0.5"/>
      <!-- Basalmembrane - ligne plus foncée -->
      <path d="M60 98 Q180 100 300 98 Q420 96 500 100 L500 106 Q380 102 300 104 Q180 106 60 104 Z"
        fill="#cc8060" opacity="0.6"/>

      <!-- Texte EPIDERMIS cliquable -->
      <rect id="svg-epidermis" x="60" y="54" width="440" height="52" rx="0" fill="transparent" stroke="transparent" cursor="pointer" style="transition:all .3s"/>

      <!-- === DERMIS (rouge-rose saumon, plus épaisse) === -->
      <path d="M60 104 Q180 106 300 104 Q420 102 500 106 L500 218 Q420 214 300 218 Q180 222 60 218 Z"
        fill="#e08878"/>

      <!-- Texture dermis - stries collagène -->
      <path d="M70 130 Q200 126 330 130 Q420 132 490 128" stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none"/>
      <path d="M70 148 Q200 144 330 148 Q420 150 490 146" stroke="rgba(255,255,255,0.12)" stroke-width="1" fill="none"/>
      <path d="M70 165 Q200 162 330 165 Q420 167 490 163" stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="none"/>
      <path d="M70 182 Q200 179 330 182 Q420 184 490 180" stroke="rgba(255,255,255,0.08)" stroke-width="1" fill="none"/>
      <path d="M70 198 Q200 195 330 198 Q420 200 490 196" stroke="rgba(255,255,255,0.06)" stroke-width="1" fill="none"/>

      <!-- Texte DERMIS cliquable -->
      <rect id="svg-dermis" x="60" y="104" width="440" height="114" rx="0" fill="transparent" stroke="transparent" cursor="pointer" style="transition:all .3s"/>

      <!-- FOLLICULE PILEUX (dans la Dermis) -->
      <!-- Gaine externe -->
      <path d="M158 55 Q152 80 148 110 Q144 140 150 160 Q156 175 165 185 Q172 190 178 185 Q185 178 188 160 Q192 140 188 110 Q184 80 180 55"
        fill="url(#follGrad)" opacity="0.8"/>
      <!-- Bulbe -->
      <ellipse cx="169" cy="190" rx="20" ry="15" fill="#9a4020" opacity="0.85"/>
      <ellipse cx="169" cy="195" rx="12" ry="9" fill="#7a3010" opacity="0.9"/>
      <!-- Poil dans le follicule -->
      <path d="M165 55 Q163 80 162 110 Q161 140 163 165 Q165 180 168 185"
        stroke="url(#hairGrad)" stroke-width="2.5" fill="none"/>

      <!-- TALGDRÜSE (forme lobée jaune-orangée) -->
      <ellipse cx="195" cy="130" rx="18" ry="12" fill="#f0a040" opacity="0.9"/>
      <ellipse cx="210" cy="122" rx="12" ry="8" fill="#e89030" opacity="0.85"/>
      <ellipse cx="185" cy="120" rx="10" ry="7" fill="#f0a840" opacity="0.8"/>
      <!-- Canal Talgdrüse vers follicule -->
      <path d="M185 130 Q180 145 172 155" stroke="#d08020" stroke-width="2" fill="none"/>

      <!-- SCHWEISSDRÜSE (spirale jaune dans Dermis profonde) -->
      <path d="M385 168 Q400 155 405 168 Q410 182 400 188 Q390 192 385 182 Q380 172 388 165 Q396 158 400 168"
        fill="none" stroke="#f0b830" stroke-width="3" stroke-linecap="round"/>
      <path d="M400 155 Q403 140 405 120 Q406 108 404 104"
        stroke="#e8a820" stroke-width="2" fill="none"/>

      <!-- BLUTGEFÄSSE (vaisseaux - artère rouge + veine bleue) -->
      <!-- Artère (rouge) -->
      <path d="M70 175 Q120 170 180 174 Q240 178 300 174 Q360 170 440 175 Q470 177 495 173"
        stroke="#cc3030" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Veine (bleue) -->
      <path d="M70 188 Q120 184 180 188 Q240 192 300 188 Q360 185 440 190 Q470 192 495 188"
        stroke="#4060cc" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Capillaires -->
      <path d="M250 106 Q255 130 252 160 Q250 175 248 190" stroke="#cc3030" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M270 106 Q272 130 270 160 Q268 175 266 190" stroke="#4060cc" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M310 106 Q314 130 312 160 Q310 175 308 190" stroke="#cc3030" stroke-width="1.5" fill="none" opacity="0.55"/>
      <path d="M430 106 Q434 130 432 160 Q430 175 428 188" stroke="#4060cc" stroke-width="1.5" fill="none" opacity="0.5"/>

      <!-- NERVENFASER (ligne jaune ondulée) -->
      <path d="M70 205 Q140 200 210 205 Q280 210 350 205 Q420 200 490 205"
        stroke="#d4b010" stroke-width="2" fill="none" stroke-dasharray="5 3" opacity="0.7"/>

      <!-- HAARMUSKEL M. arrector pili (ligne oblique vers haut) -->
      <path d="M188 158 Q210 140 220 110 Q225 95 222 80"
        stroke="#c08050" stroke-width="2" fill="none" opacity="0.6"/>

      <!-- === SUBCUTIS (jaune-dorée avec fettkügelchen) === -->
      <path d="M60 218 Q180 222 300 218 Q420 214 500 218 L500 305 Q420 302 300 306 Q180 310 60 306 Z"
        fill="#f0c840"/>

      <!-- Fettkügelchen (cellules graisseuses rondes) -->
      <rect id="svg-subcutis" x="60" y="218" width="440" height="88" rx="0" fill="transparent" stroke="transparent" cursor="pointer" style="transition:all .3s"/>
      ${[
        [90,248,16],[120,235,14],[152,252,18],[182,240,15],[215,250,17],[248,238,14],
        [278,255,16],[310,243,15],[342,250,18],[375,240,14],[408,252,16],[440,242,15],
        [470,250,14],[105,268,13],[145,275,16],[185,268,14],[225,272,15],[265,265,16],
        [305,270,13],[345,267,15],[385,272,14],[425,268,16],[460,265,13]
      ].map(([cx,cy,r])=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#f8d860" stroke="#d4a820" stroke-width="1" opacity="0.85"/>`).join('')}
      <!-- Vaisseaux Subcutis -->
      <path d="M70 290 Q200 287 330 290 Q430 292 490 288" stroke="#cc3030" stroke-width="2" fill="none" opacity="0.5"/>

      <!-- === MUSKEL (rouge foncé avec stries) === -->
      <path d="M60 306 Q180 310 300 306 Q420 302 500 306 L500 360 Q420 356 300 360 Q180 364 60 360 Z"
        fill="#d03050"/>
      <!-- Stries musculaires -->
      <path d="M70 320 Q200 317 330 320 Q430 322 490 318" stroke="rgba(255,150,150,0.25)" stroke-width="1.5" fill="none"/>
      <path d="M70 335 Q200 332 330 335 Q430 337 490 333" stroke="rgba(255,150,150,0.2)" stroke-width="1.5" fill="none"/>
      <path d="M70 350 Q200 347 330 350 Q430 352 490 348" stroke="rgba(255,150,150,0.15)" stroke-width="1.5" fill="none"/>

      <!-- === LABELS DROITE avec lignes === -->
      <!-- Épidermis label -->
      <line x1="502" y1="78" x2="536" y2="78" stroke="#888" stroke-width="1"/>
      <text x="538" y="82" font-size="9" font-family="DM Sans" font-weight="700" fill="#4ade80">Epidermis</text>

      <!-- Talgdrüse label -->
      <line x1="215" y1="125" x2="540" y2="115" stroke="#888" stroke-width="0.8"/>
      <text x="540" y="119" font-size="8.5" font-family="DM Sans" fill="#f0a040">Talgdrüse</text>

      <!-- Dermis label -->
      <line x1="502" y1="160" x2="536" y2="155" stroke="#888" stroke-width="1"/>
      <text x="538" y="159" font-size="9" font-family="DM Sans" font-weight="700" fill="#fbbf24">Dermis</text>

      <!-- Blutgefäße -->
      <line x1="502" y1="180" x2="536" y2="178" stroke="#888" stroke-width="0.8"/>
      <text x="538" y="182" font-size="8" font-family="DM Sans" fill="#f87171">Blutgefäß</text>

      <!-- Nervenfaser -->
      <line x1="502" y1="204" x2="536" y2="200" stroke="#888" stroke-width="0.8"/>
      <text x="538" y="204" font-size="8" font-family="DM Sans" fill="#fbbf24">Nervenfaser</text>

      <!-- Schweißdrüse -->
      <line x1="410" y1="175" x2="536" y2="220" stroke="#888" stroke-width="0.8"/>
      <text x="538" y="224" font-size="8.5" font-family="DM Sans" fill="#f0b830">Schweißdrüse</text>

      <!-- Subcutis label -->
      <line x1="502" y1="258" x2="536" y2="258" stroke="#888" stroke-width="1"/>
      <text x="538" y="262" font-size="9" font-family="DM Sans" font-weight="700" fill="#fbbf24">Subcutis</text>

      <!-- Muskel label -->
      <line x1="502" y1="332" x2="536" y2="332" stroke="#888" stroke-width="1"/>
      <text x="538" y="336" font-size="9" font-family="DM Sans" font-weight="700" fill="#f87171">Muskel</text>

      <!-- === LABELS GAUCHE (Cutis brace) === -->
      <line x1="58" y1="55" x2="30" y2="55" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <line x1="58" y1="218" x2="30" y2="218" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <line x1="30" y1="55" x2="30" y2="218" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <line x1="30" y1="136" x2="24" y2="136" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <text x="22" y="140" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="700" fill="rgba(255,255,255,0.6)" transform="rotate(-90,22,140)">Cutis</text>

      <!-- HAARFOLLIKEL label gauche -->
      <line x1="148" y1="170" x2="60" y2="180" stroke="#888" stroke-width="0.8"/>
      <text x="58" y="184" text-anchor="end" font-size="8.5" font-family="DM Sans" fill="#c09060">Haarfollikel</text>

      <!-- M. arrector pili label -->
      <line x1="210" y1="130" x2="60" y2="140" stroke="#888" stroke-width="0.8"/>
      <text x="58" y="144" text-anchor="end" font-size="7.5" font-family="DM Sans" fill="#c09060">M. arrector pili</text>

      <!-- ZOOM ÉPIDERMIS (cercle détail en haut droite comme dans l'image) -->
      <circle cx="450" cy="65" r="45" fill="#f5c4b0" stroke="#dda090" stroke-width="2"/>
      <!-- Couches dans le zoom -->
      <path d="M410 52 Q430 48 450 52 Q465 55 490 50 L490 58 Q465 55 450 58 Q430 62 410 58 Z" fill="#e8b090" opacity="0.8"/>
      <path d="M410 58 Q430 62 450 58 Q465 55 490 58 L490 67 Q465 64 450 67 Q430 70 410 67 Z" fill="#d89070" opacity="0.8"/>
      <path d="M410 67 Q430 70 450 67 Q465 64 490 67 L490 76 Q465 73 450 76 Q430 79 410 76 Z" fill="#c07050" opacity="0.7"/>
      <path d="M410 76 Q430 79 450 76 Q465 73 490 76 L490 86 Q465 83 450 86 Q430 88 410 86 Z" fill="#a85030" opacity="0.65"/>
      <!-- Cellules dans le zoom -->
      ${[[415,55],[430,55],[445,55],[460,55],[475,55],[487,54]].map(([x,y])=>`<rect x="${x-4}" y="${y-4}" width="10" height="7" rx="2" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="0.5"/>`).join('')}
      ${[[415,65],[430,65],[445,65],[462,65],[478,65],[488,64]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="6" ry="4" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>`).join('')}
      <!-- Ligne zoom vers epidermis -->
      <line x1="410" y1="65" x2="380" y2="72" stroke="#888" stroke-width="0.8" stroke-dasharray="3 2"/>
      <text x="450" y="108" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="#888">Epidermis</text>
      <text x="450" y="118" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#888">(Zoom)</text>

    </svg>

    <!-- Labels interactifs sous le SVG -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px">
      <div class="lekt-anat-lbl active" id="lbl-epidermis" onclick="hautSchichtSelect('epidermis')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#fcd5c8;border:2px solid #f87171"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#f87171;margin-bottom:1px">Epidermis</div><div style="font-size:.67rem;color:var(--ink2)">Keine Gefäße · 30 Tage</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-dermis" onclick="hautSchichtSelect('dermis')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#e08878;border:2px solid #fbbf24"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#fbbf24;margin-bottom:1px">Dermis</div><div style="font-size:.67rem;color:var(--ink2)">Gefäße, Nerven, Drüsen</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-subcutis" onclick="hautSchichtSelect('subcutis')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#f0c840;border:2px solid #fbbf24"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#d4a820;margin-bottom:1px">Subcutis</div><div style="font-size:.67rem;color:var(--ink2)">Fett · Energie · Schutz</div></div>
      </div>
    </div>
  </div>
</div>

<!-- SEC 2: Epidermis Schichten -->
<div class="lekt-sec" id="lsec-epidermis">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Die 5 Schichten der Epidermis</span></div>
  <p class="lekt-prose">Die Epidermis besteht aus <strong>5 Schichten</strong> — von innen (Basalmembran) nach außen (Hornschicht). Die Glanzzellschicht existiert nur in der Leistenhaut!</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📚 Epidermis — von innen nach außen</div>
    ${[
      ['E','Hornzellschicht (Stratum corneum)','Abgestorbene Zellen ohne Kern. Schutzschicht. Je nach Belastung unterschiedlich stark.','#f87171'],
      ['D','Glanzzellschicht (Stratum lucidum)','NUR in Leistenhaut! Bricht UV-Licht stark. Direkt unter der Hornschicht.','#fb923c'],
      ['C','Körnerzellschicht (Stratum granulosum)','Eiweißkörper (Keratohyalinkörner) → langsame Verhornung.','#fbbf24'],
      ['B','Stachelzellschicht (Stratum spinosum)','Stachelförmige Zellen = besondere Festigkeit der Haut.','#4ade80'],
      ['A','Basalzellschicht (Stratum basale)','Auf der Basalmembran. Stammzellen + Melanozyten (UV-Schutz durch Melanin).','#60a5fa'],
    ].map(([l,n,d,c])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:rgba(255,255,255,.02);border-radius:9px;border:1px solid var(--border);margin-bottom:7px">
      <span style="width:22px;height:22px;border-radius:6px;background:${c};color:#0d1117;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;flex-shrink:0">${l}</span>
      <div><div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:2px">${n}</div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${d}</div></div>
    </div>`).join('')}
  </div>

  <div class="lekt-merkhilfe">
    <span style="font-size:1.2rem">🧠</span>
    <div><strong>Merkhilfe Reihenfolge (innen → außen):</strong> <em>Basis Stacheln Körner Glanz Horn</em> — <strong>B-S-K-G-H</strong></div>
  </div>
</div>

<!-- SEC 3: Dermis -->
<div class="lekt-sec" id="lsec-dermis">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Dermis — Die Lederhaut</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Pro cm² Dermis findet man:</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:4px">
      ${[['200','Schmerzrezeptoren','🔴'],['100','Druckrezeptoren','🟡'],['12','Kälterezeptoren','🔵'],['2','Wärmerezeptoren','🟠'],['100','Schweißdrüsen','💧'],['40','Talgdrüsen','🟤']].map(([n,l,i])=>`
      <div style="background:rgba(96,165,250,.06);border:1px solid rgba(96,165,250,.15);border-radius:9px;padding:10px;text-align:center">
        <div style="font-family:'Fraunces',serif;font-size:1.3rem;color:#60a5fa">${n}</div>
        <div style="font-size:.65rem;color:var(--ink2);margin-top:2px">${i} ${l}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">⚠️ Pflegerelevant — Dekubitus</div>
    Die Papillenschicht der Dermis enthält <strong>viele Blutgefäße</strong>. <strong>Anhaltender Druck komprimiert diese Gefäße → Ischämie → Gewebenekrose → Dekubitus!</strong> Das ist der anatomische Grund für regelmäßige Lagerung und Druckentlastung.
  </div>
</div>

<!-- SEC 4: Subcutis -->
<div class="lekt-sec" id="lsec-subcutis">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">04</span><span class="lekt-title">Subcutis & Fettgewebe</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🍯 Aufgaben der Subcutis</div>
    ${[['🛏️','Polsterung & Isolation','Mechanischer Schutz + Wärmeisolation'],['⚡','Energiereserve','Speicherung von Lipiden + fettlöslichen Vitaminen'],['💧','Wasserspeicher','Hält Körperwasser zurück'],['🔗','Verbindungsschicht','Verbindet Cutis mit den Körperfaszien']].map(([i,t,d])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <span style="font-size:1.1rem;flex-shrink:0">${i}</span>
      <div><div style="font-weight:700;font-size:.8rem;color:#fbbf24;margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${d}</div></div>
    </div>`).join('')}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>

</div></div>`
    ,
    'Hautanhangsorgane & Drüsen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 3</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Hautanhangsorgane</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Haare, Nägel, Talg-, Duft- und Schweißdrüsen</div>
  </div>
</div>

<!-- SEC 1: Übersicht -->
<div class="lekt-sec" id="lsec-anhang-intro">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Übersicht Hautanhangsorgane</span></div>
  <p class="lekt-prose">Zu den <strong>Hautanhangsorganen (Hautanhangsgebilgen)</strong> gehören Haare, Nägel und Drüsen. Sie sind Abkömmline der Epidermis.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">
    ${[['💇','Haare (Pilli)','Schutz, Thermoregulation, geringe biolog. Funktion'],['✋','Nägel (Ungues)','Schutz der Kuppen, Stabilisierung, Tastsinn'],['🧴','Drüsen (Glandulae)','Talg-, Duft-, Schweißdrüsen']].map(([i,t,d])=>`
    <div style="background:rgba(74,222,128,.07);border:1.5px solid rgba(74,222,128,.2);border-radius:13px;padding:14px;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:8px">${i}</div>
      <div style="font-weight:700;font-size:.82rem;color:#4ade80;margin-bottom:4px">${t}</div>
      <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${d}</div>
    </div>`).join('')}
  </div>
</div>

<!-- SEC 2: Haare -->
<div class="lekt-sec" id="lsec-haare">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Haare (Pilli) — Aufbau & Wachstum</span></div>
  <p class="lekt-prose">Haare bedecken fast den ganzen Körper — außer Bereiche mit <strong>Leistenhaut</strong> (Handflächen, Fußsohlen). Haare haben <strong>weder Blut- noch Nervenversorgung</strong> — sie sind biologisch "tot".</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔬 3 Haartypen nach Lebensphase</div>
    ${[
      ['🌸','Lanugohaare','Nur bei Neugeborenen (+ stark Untergewichtigen). Sehr fein, verschwindet kurz nach Geburt.','#f87171'],
      ['🌿','Vellushaar','Ersetzt nach Geburt das Lanugohaar. Kurz, weich, allgemeine Körperbehaarung.','#4ade80'],
      ['💪','Terminalhaar','Nach der Pubertät (Sexualhormone). Dickes Haar. Vor Pubertät nur: Kopfhaar, Augenbrauen, Wimpern.','#60a5fa'],
    ].map(([i,t,d,c])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:10px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:8px">
      <span style="font-size:1.1rem;flex-shrink:0">${i}</span>
      <div><div style="font-weight:700;font-size:.82rem;color:${c};margin-bottom:2px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.4">${d}</div></div>
    </div>`).join('')}
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⏱️ 3 Phasen der Haarbildung</div>
    <div style="display:flex;align-items:stretch;gap:0;border-radius:12px;overflow:hidden;border:1px solid var(--border)">
      ${[['🌱','Wachstumsphase','Anagen','Zellen der Haarpapille teilen sich — Haar wächst','#4ade80'],['🔄','Übergangsphase','Katagen','Produktion neuer Zellen wird eingestellt','#fbbf24'],['😴','Ruhephase','Telogen','Papille erholt sich, dann beginnt neues Haar','#60a5fa']].map(([i,de,lat,d,c])=>`
      <div style="flex:1;padding:14px 10px;text-align:center;background:rgba(255,255,255,.02);border-right:1px solid var(--border)">
        <div style="font-size:1.3rem;margin-bottom:4px">${i}</div>
        <div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:2px">${de}</div>
        <div style="font-size:.62rem;color:var(--ink3);margin-bottom:6px;font-style:italic">${lat}</div>
        <div style="font-size:.68rem;color:var(--ink2);line-height:1.4">${d}</div>
      </div>`).join('')}
    </div>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔩 Aufbau des Haares (Querschnitt)</div>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center">
      <svg viewBox="0 0 120 240" xmlns="http://www.w3.org/2000/svg" style="width:90px;height:180px">
        <defs>
          <linearGradient id="haarMark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#1d4ed8"/><stop offset="50%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/>
          </linearGradient>
          <linearGradient id="haarRinde" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#854d0e"/><stop offset="40%" stop-color="#a16207"/><stop offset="100%" stop-color="#854d0e"/>
          </linearGradient>
          <linearGradient id="haarCut" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#14532d"/><stop offset="40%" stop-color="#16a34a"/><stop offset="100%" stop-color="#14532d"/>
          </linearGradient>
          <radialGradient id="haarMark2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#1d4ed8"/>
          </radialGradient>
        </defs>
        <!-- Fond -->
        <rect width="120" height="240" rx="8" fill="rgba(13,17,23,0.9)"/>
        <!-- Titre -->
        <text x="60" y="14" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="rgba(255,255,255,0.6)">Querschnitt</text>

        <!-- Section transversale du cheveu (vue du dessus) -->
        <!-- Cuticula — couche externe (écailles) -->
        <circle cx="60" cy="105" r="38" fill="url(#haarCut)" stroke="rgba(74,222,128,0.6)" stroke-width="1.5"/>
        <!-- Écailles cuticulaires (texture réaliste) -->
        ${Array.from({length:12},(_,i)=>{
          const angle = i*30*(Math.PI/180);
          const x = 60 + 38*Math.cos(angle);
          const y = 105 + 38*Math.sin(angle);
          const x2 = 60 + 33*Math.cos(angle+0.18);
          const y2 = 105 + 33*Math.sin(angle+0.18);
          return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="rgba(74,222,128,0.5)" stroke-width="2.5" stroke-linecap="round"/>`;
        }).join('')}

        <!-- Rinde — couche médiane (kératine) -->
        <circle cx="60" cy="105" r="26" fill="url(#haarRinde)" stroke="rgba(251,191,36,0.5)" stroke-width="1"/>
        <!-- Fibres de kératine simulées -->
        ${Array.from({length:8},(_,i)=>{
          const a = i*45*(Math.PI/180);
          const x1 = (60+8*Math.cos(a)).toFixed(1), y1=(105+8*Math.sin(a)).toFixed(1);
          const x2 = (60+23*Math.cos(a)).toFixed(1), y2=(105+23*Math.sin(a)).toFixed(1);
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(161,98,7,0.5)" stroke-width="1"/>`;
        }).join('')}

        <!-- Mark — noyau central -->
        <circle cx="60" cy="105" r="12" fill="url(#haarMark2)" stroke="rgba(96,165,250,0.7)" stroke-width="1"/>
        <!-- Cellules médullaires -->
        <circle cx="60" cy="105" r="6" fill="rgba(147,197,253,0.3)"/>
        <circle cx="57" cy="102" r="2.5" fill="rgba(147,197,253,0.5)"/>
        <circle cx="63" cy="108" r="2" fill="rgba(147,197,253,0.45)"/>

        <!-- Flèches et labels -->
        <line x1="98" y1="80" x2="108" y2="70" stroke="rgba(74,222,128,0.7)" stroke-width="1"/>
        <text x="82" y="68" font-size="6.5" font-family="DM Sans" font-weight="700" fill="#4ade80">Cuticula</text>

        <line x1="84" y1="100" x2="110" y2="100" stroke="rgba(251,191,36,0.7)" stroke-width="1"/>
        <text x="82" y="98" font-size="6.5" font-family="DM Sans" font-weight="700" fill="#fbbf24">Rinde</text>

        <line x1="72" y1="105" x2="110" y2="120" stroke="rgba(96,165,250,0.7)" stroke-width="1"/>
        <text x="82" y="118" font-size="6.5" font-family="DM Sans" font-weight="700" fill="#60a5fa">Mark</text>

        <!-- Vue longitudinale en bas -->
        <text x="60" y="158" text-anchor="middle" font-size="6" font-family="DM Sans" fill="rgba(255,255,255,0.35)">Längsschnitt</text>
        <!-- Schaft du cheveu en coupe longitudinale -->
        <rect x="42" y="162" width="36" height="70" rx="18 18 3 3" fill="url(#haarRinde)" stroke="rgba(161,98,7,0.5)" stroke-width="1"/>
        <!-- Mark interne -->
        <rect x="54" y="162" width="12" height="70" rx="6 6 0 0" fill="url(#haarMark)" opacity="0.7"/>
        <!-- Écailles cuticulaires latérales -->
        ${[168,176,184,192,200,208,216,224].map(y=>`
          <path d="M42 ${y} Q38 ${y+2} 38 ${y+5} Q38 ${y+8} 42 ${y+8}" fill="rgba(74,222,128,0.4)" stroke="rgba(74,222,128,0.5)" stroke-width="0.8"/>
          <path d="M78 ${y} Q82 ${y+2} 82 ${y+5} Q82 ${y+8} 78 ${y+8}" fill="rgba(74,222,128,0.4)" stroke="rgba(74,222,128,0.5)" stroke-width="0.8"/>`).join('')}
      </svg>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${[['Cuticula (Schuppenschicht)','Äußerste Schicht. Abgestorbene verhornte Zellen.','#4ade80'],['Rindenschicht','Besteht aus Hornmasse (Keratin). Gibt Stabilität + Flexibilität.','#fbbf24'],['Haarmark','Zentrum des Haares.','#60a5fa']].map(([t,d,c])=>`
        <div style="padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02)">
          <div style="font-weight:700;font-size:.78rem;color:${c};margin-bottom:2px">${t}</div>
          <div style="font-size:.7rem;color:var(--ink2)">${d}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Wichtig: M. erector pili</div>
    Haare besitzen eine Talgdrüse und den <strong>M. erector pili</strong> (Haaraufrichtungsmuskel). Waschen <em>gegen</em> die Haarwuchsrichtung wirkt <strong>belebend</strong>, <em>mit</em> der Haarwuchsrichtung <strong>beruhigend</strong> — pflegerelevant!
  </div>
</div>

<!-- SEC 3: Nägel -->
<div class="lekt-sec" id="lsec-naegel">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Nägel (Ungues)</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">✋ Funktionen der Nägel</div>
    ${[['🛡️','Schutz','Schützen die Finger- und Zehenkuppen'],['🏗️','Stabilisierung','Stabilisieren die darunterliegenden Finger-/Zehenbeeren'],['👆','Tastsinn','Verbessern die Wahrnehmung beim Ertasten und Greifen'],['🐾','Kratzwerkzeug','Mechanisches Hilfsmittel']].map(([i,t,d])=>`
    <div style="display:flex;gap:10px;align-items:center;padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <span style="font-size:1.1rem;flex-shrink:0">${i}</span>
      <div><span style="font-weight:700;font-size:.8rem;color:#4ade80">${t}:</span> <span style="font-size:.75rem;color:var(--ink2)">${d}</span></div>
    </div>`).join('')}
  </div>
  <div style="background:rgba(248,113,113,.07);border:1px solid rgba(248,113,113,.2);border-radius:13px;padding:14px;margin-top:4px">
    <div style="font-weight:700;font-size:.8rem;color:#f87171;margin-bottom:6px">⚠️ Patho: Nagelerkrankungen</div>
    <div style="font-size:.75rem;color:var(--ink2);line-height:1.6"><strong style="color:#fbbf24">Paronychie</strong> = Entzündung von Nagelfalz + Nagelwall (Bakterien). Sorgfältige Nagelpflege kann das verhindern.<br><strong style="color:#f87171">Panaritium</strong> = Hat sich bereits Eiter angesammelt → schwere eitrige Entzündung.</div>
  </div>
</div>

<!-- SEC 4: Drüsen -->
<div class="lekt-sec" id="lsec-druesen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">04</span><span class="lekt-title">Talg-, Duft- und Schweißdrüsen</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🧴 Die 3 Drüsentypen</div>
    ${[['🟡','Talgdrüsen','Münden meist in den Haarbalg. Produzieren Talg (Lipid-Anteil des Säureschutzmantels). 40 pro cm².','Haarfollikel'],['💧','Schweißdrüsen','Münden direkt an der Hautoberfläche. Produzieren Schweiß (Hydro-Anteil). 100 pro cm².','Haut (Leistenhaut: Furchen)'],['👃','Duftdrüsen','Apokriene Drüsen in Achseln, Genital. Aktiv nach Pubertät.','Haarfollikel']].map(([d,t,desc,l])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:10px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:8px">
      <span style="font-size:1rem;flex-shrink:0;margin-top:2px">${d}</span>
      <div><div style="font-weight:700;font-size:.82rem;color:#fbbf24;margin-bottom:2px">${t} <span style="font-size:.65rem;color:var(--ink3);font-weight:400">→ mündet in: ${l}</span></div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${desc}</div></div>
    </div>`).join('')}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`
    ,
    'Fitzpatrick-Hauttypen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 4</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Fitzpatrick-Hauttypen & Veränderungen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">6 Typen nach UV-Empfindlichkeit + Altershaut & Kinderhaut</div>
  </div>
</div>

<!-- SEC 1: 6 Fitzpatrick Typen -->
<div class="lekt-sec" id="lsec-fitzpatrick">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Die 6 Fitzpatrick-Hauttypen</span></div>
  <p class="lekt-prose">Die <strong>Fitzpatrick-Skala</strong> klassifiziert Hauttypen nach ihrer UV-Empfindlichkeit. Je höher der Typ, desto mehr Melanin und desto länger der natürliche Schutz.</p>

  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
    ${[
      ['1','Keltischer Typ','<10 Min','Sehr hell, rötlich-blond, blau/grün Augen','Keine Bräunung','#f8fafc','#1e293b'],
      ['2','Nordischer Typ','10–20 Min','Helle Haut, blond-mittelbraun, blau/grau','Kaum bis langsam braun','#fef3c7','#78350f'],
      ['3','Mischtyp','20–30 Min','Hell-mittel, variabel Haar + Augen','Langsam braun','#fde68a','#92400e'],
      ['4','Mediterraner Typ','45 Min','Leicht gebräunt/olivfarben, braune Haare','Sehr schnell braun','#d97706','#fff'],
      ['5','Dunkler Typ','60 Min','Dunkel mit grauem Unterton, dunkle Augen','Schnell braun','#92400e','#fef3c7'],
      ['6','Schwarzer Typ','90 Min','Dunkelbraun bis schwarz, sehr dunkel','Immer braun','#1c0a00','#fbbf24'],
    ].map(([num,name,schutz,merkmale,bräunung,bg,fg])=>`
    <div style="display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:rgba(255,255,255,.02)">
      <div style="width:36px;height:36px;border-radius:50%;background:${bg};border:2px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <span style="font-size:.75rem;font-weight:800;color:${fg}">${num}</span>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:.82rem;color:var(--ink);margin-bottom:2px">${name}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${merkmale} · ${bräunung}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:.65rem;color:var(--ink3)">Eigenschutz</div>
        <div style="font-weight:700;font-size:.82rem;color:#4ade80">${schutz}</div>
      </div>
    </div>`).join('')}
  </div>

  <div class="lekt-merkhilfe">
    <span style="font-size:1.2rem">☀️</span>
    <div><strong>Alle Typen:</strong> Mittagssonne meiden, Sonnencreme LSF 50+, Sonnenbrille mit UV-Schutz, Sonnenhut. Ab Typ 5+: auch bei Bewölkung schützen!</div>
  </div>
</div>

<!-- SEC 2: Veränderungen -->
<div class="lekt-sec" id="lsec-veraenderungen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Hauttypen nach Talgproduktion</span></div>
  <p class="lekt-prose">Bei Erwachsenen unterscheidet man <strong>3 Hauttypen</strong> nach der Talgproduktion. Sie sind genetisch bedingt und hormonell gesteuert — ausgeprägt erst nach Ende der Pubertät.</p>
  <div style="display:grid;grid-template-columns:1fr;gap:9px;margin-bottom:14px">
    ${[
      ['💧','Seborrhoische (fettige) Haut','50%','Dicke, fettige, grobporige, feucht glänzende Haut. Überproduktion der Talgdrüsen + vermehrte Schweißproduktion. Hautunreinheiten (Pickel, Mitesser).','#fbbf24'],
      ['🏜️','Sebostatische (trockene) Haut','30%','Spröde, rissige, raue Haut, oft schuppig. Verminderte Talgproduktion.','#60a5fa'],
      ['☯️','Mischhaut','20%','Fettige Gesichtsmitte (T-Zone), trockene Wangen. Gelegentlich Unreinheiten.','#4ade80'],
    ].map(([i,t,p,d,c])=>`
    <div style="display:flex;gap:12px;align-items:flex-start;padding:13px;border-radius:12px;border:1.5px solid rgba(${c==='#fbbf24'?'251,191,36':c==='#60a5fa'?'96,165,250':'74,222,128'},.25);background:rgba(${c==='#fbbf24'?'251,191,36':c==='#60a5fa'?'96,165,250':'74,222,128'},.05)">
      <span style="font-size:1.3rem;flex-shrink:0">${i}</span>
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <div style="font-weight:700;font-size:.82rem;color:${c}">${t}</div>
          <div style="font-size:.72rem;font-weight:700;color:${c};background:rgba(0,0,0,.2);padding:2px 8px;border-radius:5px">${p}</div>
        </div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.5">${d}</div>
      </div>
    </div>`).join('')}
  </div>
</div>

<!-- SEC 3: Altershaut -->
<div class="lekt-sec" id="lsec-altershaut">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Altershaut & Kinderhaut</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">👴 Veränderungen im Alter — Altershaut</div>
    ${[
      ['Kapillaren ↓ + poröser','→ Hämatome, kalte blasse Haut'],
      ['Epidermiserneuerung dauert länger','→ Regenerationsfähigkeit sinkt'],
      ['Verzahnung Epidermis/Dermis löst sich, Subcutis ↓','→ dünne, pergamentartige Haut'],
      ['Schweiß- + Talgdrüsensekretion ↓','→ rissige, trockene, schuppige, juckende Haut'],
      ['Bindegewebe + Kollagenfasern ↓','→ Faltenbildung'],
      ['Jahrelange UV-Strahlung','→ Pigmentflecken'],
    ].map(([u,r])=>`
    <div style="display:flex;gap:8px;align-items:flex-start;padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:6px;font-size:.77rem">
      <span style="color:#c084fc;flex-shrink:0">→</span>
      <div><span style="color:var(--ink)">${u}</span> <strong style="color:#c084fc">${r}</strong></div>
    </div>`).join('')}
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">👶 Kinderhaut — Besonderheiten</div>
    ${[
      ['🔬','Hornschicht dünner (~30%)','Weniger Schutz vor äußeren Einflüssen'],
      ['🛡️','Kein fertiger Säureschutzmantel','Talgdrüsen produzieren wenig Lipide → keine stabile Keimbarriere'],
      ['☀️','Kaum Melanin','→ hohe UV-Lichtempfindlichkeit — immer Sonnenschutz!'],
      ['🤝','Immunsystem muss trainiert werden','Haut noch auf Umweltreize einzustellen'],
      ['🧴','Durchlässiger für Substanzen','→ auf Duftstoffe, Konservierungsstoffe verzichten'],
    ].map(([i,t,d])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:6px">
      <span style="font-size:1rem;flex-shrink:0">${i}</span>
      <div><div style="font-weight:700;font-size:.78rem;color:#60a5fa;margin-bottom:2px">${t}</div><div style="font-size:.7rem;color:var(--ink2)">${d}</div></div>
    </div>`).join('')}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`
    ,
    'Epithelgewebe – Exkurs': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Exkurs</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Exkurs: Epithelgewebe</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Deckgewebe aller inneren und äußeren Oberflächen — Klausurklassiker!</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epithel-def">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Was ist Epithelgewebe?</span></div>
  <p class="lekt-prose"><strong>Epithelgewebe</strong> ist Deckgewebe, das alle inneren und äußeren Oberflächen des Körpers bedeckt — Haut, Schleimhäute, Organe.</p>
  <div class="lekt-merkhilfe">
    <span style="font-size:1.2rem">🧠</span>
    <div><strong>Merkhilfe:</strong> Epithel = Hülle. Es grenzt ab, schützt, resorbiert und sezerniert.</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epithel-typen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Die 6 Epitheltypen — vollständige Übersicht</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔬 Alle Epitheltypen auf einen Blick</div>
    ${[
      ['Einschichtiges Plattenepithel','Lungenbläschen (Alveolen)','Sehr dünn für Gasaustausch','#4ade80'],
      ['Mehrschichtiges unverhorntes Plattenepithel','Mundschleimhaut, Speiseröhre, Vagina','Widerstandsfähig, feucht','#60a5fa'],
      ['Mehrschichtiges verhorntes Plattenepithel','Äußere Haut (Epidermis)','Beste Schutzfunktion, trocken','#fbbf24'],
      ['Zylinderepithel','Darmschleimhaut (mit Mikrovilli)','Resorption von Nährstoffen','#c084fc'],
      ['Flimmerepithel (Zilien)','Atemwege (Trachea, Bronchien)','Transportiert Schleim + Fremdstoffe','#f87171'],
      ['Übergangsepithel (Urothel)','Harnblase, Ureter','Dehnbar — passt sich Füllungsgrad an','#fb923c'],
    ].map(([t,ort,fkt,c])=>`
    <div style="display:grid;grid-template-columns:2fr 1.5fr 1.5fr;gap:8px;align-items:start;padding:10px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <div><div style="font-weight:700;font-size:.78rem;color:${c};margin-bottom:2px">${t}</div></div>
      <div style="font-size:.7rem;color:var(--ink2)">📍 ${ort}</div>
      <div style="font-size:.7rem;color:var(--ink3)">→ ${fkt}</div>
    </div>`).join('')}
  </div>

  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">⚠️ Klausurfallen — diese werden oft verwechselt!</div>
    <strong>Harnblase</strong> = Übergangsepithel (NICHT Flimmer!)<br>
    <strong>Atemwege</strong> = Flimmerepithel (NICHT Zylinder!)<br>
    <strong>Darm</strong> = Zylinderepithel mit Mikrovilli<br>
    <strong>Äußere Haut</strong> = mehrschichtig verhornt (NICHT unverhornt!)<br>
    <strong>Mundschleimhaut</strong> = mehrschichtig unverhornt
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`
    ,
    'Die Epidermis & ihre Schichten': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Vertiefung</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Die Epidermis im Detail</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">5 Schichten, Zyklus, Diffusion, Melanozyten & Melanom</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-eigenschaften">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Eigenschaften der Epidermis</span></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    ${[
      ['🚫','Keine Blutgefäße','Versorgung nur durch Diffusion + aktiven Nährstofftransport aus der Dermis'],
      ['🔄','30-Tage-Zyklus','Neue Zellen entstehen in der Basalschicht und wandern in 30 Tagen zur Oberfläche'],
      ['🧱','Mehrschichtig verhornt','Mehrschichtiges verhorntes Plattenepithel — beste Schutzbarriere'],
      ['📍','Basalmembran','Unterseite sitzt auf der Basalmembran — Grenze zur Dermis'],
    ].map(([i,t,d])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:12px;background:rgba(74,222,128,.05);border:1px solid rgba(74,222,128,.15);border-radius:11px">
      <span style="font-size:1.2rem;flex-shrink:0">${i}</span>
      <div><div style="font-weight:700;font-size:.8rem;color:#4ade80;margin-bottom:3px">${t}</div><div style="font-size:.71rem;color:var(--ink2);line-height:1.4">${d}</div></div>
    </div>`).join('')}
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-schichten">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Die 5 Schichten der Epidermis (A → E)</span></div>
  <p class="lekt-prose">Von außen (A) nach innen (E) — merke: <strong>H-G-K-S-B</strong> (Horn-Glanz-Körner-Stachel-Basis)</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📚 Schichten von außen → innen</div>
    ${[
      ['A','Hornzellschicht','Stratum corneum','Abgestorbene, kernlose Zellen. Je nach Belastung unterschiedlich dick. Hauptschutzschicht.','#f87171','außen'],
      ['B','Glanzzellschicht','Stratum lucidum','NUR in Leistenhaut! Liegt direkt unter Hornschicht. Bricht UV-Licht stark — UV-Schutz.','#fb923c','nur Leistenhaut'],
      ['C','Körnerzellschicht','Stratum granulosum','Eiweißkörper (Keratohyalinkörner) → langsame Verhornung der wandernden Zellen.','#fbbf24',''],
      ['D','Stachelzellschicht','Stratum spinosum','Oval bis stachelförmige Zellen — miteinander verankert → besondere Festigkeit der Haut.','#4ade80',''],
      ['E','Basalzellschicht','Stratum basale','Auf der Basalmembran. Enthält Stammzellen (→ neue Keratinozyten) + Melanozyten (→ Melanin).','#60a5fa','innen'],
    ].map(([l,de,lat,d,c,note])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <div style="width:26px;height:26px;border-radius:7px;background:${c};color:#0d1117;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800;flex-shrink:0">${l}</div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
          <span style="font-weight:700;font-size:.8rem;color:${c}">${de}</span>
          <span style="font-size:.63rem;color:var(--ink3);font-style:italic">${lat}</span>
          ${note?`<span style="font-size:.6rem;background:rgba(255,255,255,.08);color:var(--ink3);padding:1px 6px;border-radius:4px">${note}</span>`:''}
        </div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${d}</div>
      </div>
    </div>`).join('')}
  </div>
  <div class="lekt-merkhilfe">
    <span>🧠</span>
    <div><strong>Merkhilfe (außen→innen):</strong> <em>"Habt Grippe? Kämpft Stark, Burschen!"</em> → <strong>H</strong>orn – <strong>G</strong>lanz – <strong>K</strong>örner – <strong>S</strong>tachel – <strong>B</strong>asal</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-diffusion">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Diffusion — Wie wird die Epidermis versorgt?</span></div>
  <p class="lekt-prose">Da die Epidermis <strong>keine eigenen Blutgefäße</strong> hat, wird sie über <strong>Diffusion</strong> aus der Dermis versorgt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">⚗️ Was ist Diffusion? — animiert</div>
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:4px 0 8px;border-radius:12px">
      <defs>
        <linearGradient id="diffEpi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4c5a0"/><stop offset="100%" stop-color="#e8a878"/>
        </linearGradient>
        <linearGradient id="diffDerm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c97060"/><stop offset="100%" stop-color="#a54838"/>
        </linearGradient>
        <radialGradient id="diffNut" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/>
        </radialGradient>
        <radialGradient id="diffNut2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#16a34a"/>
        </radialGradient>
        <marker id="diffArr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill="#60a5fa"/>
        </marker>
        <filter id="diffGlow"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
      </defs>

      <!-- Fond -->
      <rect width="480" height="220" rx="12" fill="#0c1520"/>
      <!-- Titre -->
      <text x="240" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">Diffusion — Versorgung der gefäßlosen Epidermis</text>

      <!-- ══ GAUCHE: CONCEPT ABSTRAIT ══ -->
      <!-- Boîte gauche: haute concentration -->
      <rect x="12" y="28" width="130" height="150" rx="10" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.3)" stroke-width="1.5"/>
      <text x="77" y="42" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="#60a5fa">Hohe Konzentration</text>
      <!-- Membrane semi-perméable -->
      <line x1="142" y1="28" x2="142" y2="178" stroke="rgba(96,165,250,0.6)" stroke-width="2.5" stroke-dasharray="6 3"/>
      <text x="142" y="192" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(96,165,250,0.6)" transform="rotate(-90,142,185)" dominant-baseline="middle">semipermeable Membran</text>
      <!-- Boîte droite: basse concentration -->
      <rect x="152" y="28" width="100" height="150" rx="10" fill="rgba(96,165,250,0.03)" stroke="rgba(96,165,250,0.2)" stroke-width="1.5"/>
      <text x="202" y="42" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(96,165,250,0.6)">Niedrige Konz.</text>

      <!-- Particules haute conc. (gauche) — animées -->
      ${[[28,65,1.7],[48,95,2.1],[68,60,1.5],[35,125,1.9],[55,148,1.6],[80,110,2.0],[95,75,1.8],[110,135,2.2],[75,48,1.4],[100,55,1.7],[120,90,2.0],[30,160,1.5],[115,160,1.9]].map(([x,y,d],i)=>
        `<circle cx="${x}" cy="${y}" r="7" fill="url(#diffNut)" opacity="0.85" filter="url(#diffGlow)">
          <animateTransform attributeName="transform" type="translate" values="0,0;${i%2?2:-2},${i%3?-2:2};0,0" dur="${d}s" repeatCount="indefinite"/>
        </circle>`).join('')}

      <!-- Flèches de flux -->
      <path d="M144 75 L150 75" stroke="#60a5fa" stroke-width="2" marker-end="url(#diffArr)"/>
      <path d="M144 103 L150 103" stroke="#60a5fa" stroke-width="2" marker-end="url(#diffArr)"/>
      <path d="M144 131 L150 131" stroke="#60a5fa" stroke-width="2" marker-end="url(#diffArr)"/>
      <text x="97" y="196" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.7)">→ von hoch nach niedrig</text>

      <!-- Particules basse conc. (droite) — quelques unes -->
      ${[[165,65,2.1],[185,110,1.7],[210,80,1.9],[175,145,2.3],[230,130,1.6]].map(([x,y,d])=>
        `<circle cx="${x}" cy="${y}" r="7" fill="url(#diffNut)" opacity="0.6"><animateTransform attributeName="transform" type="translate" values="0,0;1,2;0,0" dur="${d}s" repeatCount="indefinite"/></circle>`).join('')}

      <!-- ══ DROITE: APPLICATION ANATOMIQUE ══ -->
      <!-- Séparateur -->
      <line x1="270" y1="25" x2="270" y2="200" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="375" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.75)">In der Haut</text>

      <!-- Épiderme (sans vaisseaux) -->
      <rect x="278" y="28" width="190" height="65" rx="6 6 0 0" fill="url(#diffEpi)"/>
      <!-- Texture épiderme -->
      <path d="M280 40 Q320 37 360 40 Q400 43 462 40" fill="none" stroke="rgba(255,215,185,0.3)" stroke-width="1.2"/>
      <path d="M280 52 Q320 49 360 52 Q400 55 462 52" fill="none" stroke="rgba(255,215,185,0.25)" stroke-width="1"/>
      <path d="M280 65 Q320 62 360 65 Q400 68 462 65" fill="none" stroke="rgba(255,215,185,0.2)" stroke-width="1"/>
      <!-- Cellules épidermiques -->
      ${[[295,48,22,10],[340,45,20,10],[385,48,22,10],[430,45,20,10],[310,62,22,10],[358,60,22,10],[408,62,22,10],[455,60,18,10]].map(([x,y,w,h])=>
        `<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="4" fill="rgba(240,185,140,0.3)" stroke="rgba(220,160,110,0.35)" stroke-width="0.7"/>`).join('')}
      <!-- Noyaux cellulaires -->
      ${[[295,48],[340,45],[385,48],[430,45],[310,62],[358,60],[408,62],[455,60]].map(([x,y])=>
        `<ellipse cx="${x}" cy="${y}" rx="4" ry="2.5" fill="rgba(180,110,60,0.5)"/>`).join('')}
      <!-- Label Epidermis -->
      <text x="463" y="52" font-size="8" font-family="DM Sans" font-weight="700" fill="#f5c8a0" text-anchor="start">  </text>
      <text x="283" y="38" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(60,30,10,0.9)">Epidermis (KEINE Gefäße!)</text>
      <!-- Icône pas de vaisseaux -->
      <text x="440" y="82" font-size="10" text-anchor="middle">🚫</text>
      <circle cx="440" cy="70" r="8" fill="none" stroke="#f87171" stroke-width="1.5"/>
      <path d="M434 64 L446 76" stroke="#f87171" stroke-width="1.5"/>

      <!-- Interface Epi/Dermis — Basalmembrane -->
      <rect x="278" y="93" width="190" height="3" fill="rgba(255,255,255,0.2)"/>
      <text x="373" y="101" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(255,255,255,0.4)">Basalmembran</text>

      <!-- Derme (avec vaisseaux) -->
      <rect x="278" y="96" width="190" height="75" rx="0 0 6 6" fill="url(#diffDerm)"/>
      <!-- Fibres collagène -->
      <path d="M280 108 Q330 105 380 108 Q430 111 465 108" fill="none" stroke="rgba(210,120,90,0.3)" stroke-width="1.5"/>
      <path d="M280 122 Q330 119 380 122 Q430 125 465 122" fill="none" stroke="rgba(210,120,90,0.25)" stroke-width="1.5"/>
      <path d="M280 138 Q330 135 380 138 Q430 141 465 138" fill="none" stroke="rgba(210,120,90,0.2)" stroke-width="1.5"/>
      <!-- Capillaire sanguin réaliste -->
      <ellipse cx="330" cy="150" rx="20" ry="10" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
      <ellipse cx="330" cy="150" rx="14" ry="6" fill="rgba(254,202,202,0.4)"/>
      <!-- Globules rouges dans le capillaire -->
      <ellipse cx="323" cy="150" rx="4" ry="2.5" fill="#dc2626" opacity="0.9"/>
      <ellipse cx="332" cy="149" rx="3.5" ry="2" fill="#dc2626" opacity="0.85"/>
      <ellipse cx="340" cy="151" rx="4" ry="2.5" fill="#dc2626" opacity="0.9"/>
      <!-- Petit capillaire droit -->
      <ellipse cx="420" cy="148" rx="18" ry="9" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
      <ellipse cx="420" cy="148" rx="12" ry="5" fill="rgba(254,202,202,0.35)"/>
      <!-- Label dermis -->
      <text x="283" y="107" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(255,220,210,0.9)">Dermis (mit Blutgefäßen)</text>

      <!-- Flèches de diffusion (Dermis → Epidermis) -->
      ${[[305,93],[340,93],[375,93],[410,93],[445,93]].map(([x,y])=>
        `<path d="M${x} ${y+2} L${x} ${y-14}" stroke="#4ade80" stroke-width="2" stroke-linecap="round" marker-end="url(#diffArr2)"/>
         <circle cx="${x}" cy="${y+5}" r="5" fill="url(#diffNut2)" opacity="0.75" filter="url(#diffGlow)">
           <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="${1.5+Math.random()*.8}s" repeatCount="indefinite"/>
         </circle>`).join('')}
      <defs><marker id="diffArr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#4ade80"/></marker></defs>

      <!-- Texte flux -->
      <text x="373" y="205" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="#4ade80">Nährstoffe diffundieren: Blut → Dermis → Epidermis</text>
      <text x="373" y="216" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(255,255,255,0.4)">passiv, ohne Energie, von hoch nach niedrig</text>
    </svg>
    <div style="font-size:.75rem;color:var(--ink2);line-height:1.5;padding:10px;background:rgba(96,165,250,.06);border-radius:8px">
      <strong style="color:#60a5fa">Diffusion</strong> = passiver Transport ohne Energie. Teilchen wandern von <strong>hoher → niedriger Konzentration</strong> bis zum Gleichgewicht. So versorgt die Dermis die gefäßlose Epidermis!
    </div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-melanom">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">04</span><span class="lekt-title">Melanozyten & Malignes Melanom</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">🔬 Von der Basalzelle zum Melanom</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="padding:12px;background:rgba(74,222,128,.06);border-radius:10px;border:1px solid rgba(74,222,128,.2)">
        <div style="font-weight:700;font-size:.82rem;color:#4ade80;margin-bottom:4px">Melanozyten (normal)</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">In der <strong>Basalzellschicht</strong>. Produzieren <strong>Melanin</strong> = brauner Farbstoff. Schützt vor UV-Strahlung. Sonnenbräune = mehr Melaninproduktion.</div>
      </div>
      <div style="text-align:center;font-size:.8rem;color:var(--ink3)">⬇ Entartung</div>
      <div style="padding:12px;background:rgba(192,132,252,.06);border-radius:10px;border:1px solid rgba(192,132,252,.25)">
        <div style="font-weight:700;font-size:.82rem;color:#c084fc;margin-bottom:4px">Malignes Melanom (Hautkrebs)</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Geht von Melanozyten aus. <strong>Sehr bösartig</strong>. Metastasiert <strong>lymphogen</strong> (Lymphwege) und <strong>hämatogen</strong> (Blutweg). Frühzeitige Erkennung = entscheidend.</div>
      </div>
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Warum muss ich die Epidermisschichten kennen?</div>
    <strong>Krebserkrankungen der Haut</strong> gehen von bestimmten Zelltypen in bestimmten Schichten aus. Das malignes Melanom von den <strong>Melanozyten der Basalzellschicht</strong>. Nur wer die Schichten kennt, versteht die Pathologie!
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`
    ,
    'Aufbau der Dermis (Lederhaut)': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Vertiefung</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Dermis (Lederhaut) im Detail</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">2 Schichten, Mechanorezeptoren, Sinneswahrnehmung & Dekubitus</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-dermis-schichten">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Die 2 Schichten der Dermis</span></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
    <div style="background:rgba(96,165,250,.07);border:1.5px solid rgba(96,165,250,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#60a5fa;margin-bottom:4px">1. Papillenschicht</div>
      <div style="font-size:.65rem;color:var(--ink3);margin-bottom:10px;font-style:italic">Stratum papillare</div>
      <div style="font-size:.73rem;color:var(--ink2);line-height:1.6">
        ✓ Viele <strong>Blutgefäße</strong><br>
        ✓ Versorgt Epidermis + Dermis<br>
        ✓ Bei Hellhäutigen: Errötung sichtbar<br>
        ⚠️ <strong style="color:#f87171">Druck komprimiert Gefäße!</strong>
      </div>
    </div>
    <div style="background:rgba(251,191,36,.07);border:1.5px solid rgba(251,191,36,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#fbbf24;margin-bottom:4px">2. Geflechtschicht</div>
      <div style="font-size:.65rem;color:var(--ink3);margin-bottom:10px;font-style:italic">Stratum reticulare</div>
      <div style="font-size:.73rem;color:var(--ink2);line-height:1.6">
        ✓ Kollagenreiche Fasern<br>
        ✓ Elastisch<br>
        ✓ Elastizität nimmt im Alter ab<br>
        ⚠️ UV-Strahlung beschleunigt Falten
      </div>
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">⚠️ DEKUBITUS — Anatomische Erklärung</div>
    <strong>Anhaltender Druck</strong> auf die Haut → komprimiert die <strong>Blutgefäße der Papillenschicht</strong> → <strong>Ischämie</strong> (Durchblutungsstop) → Gewebeunterversorgung → <strong>Nekrose → Dekubitus</strong>.<br>
    <span style="color:#4ade80">→ Deshalb: regelmäßige Lagerung alle 2h, Druckverteilung, Prophylaxematten!</span>
  </div>
</div>

<div class="lekt-sec" id="lsec-dermis-rezeptoren">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Mechanorezeptoren & Sinneswahrnehmung</span></div>
  <p class="lekt-prose">Die Haut ist das <strong>nervenreichste Organ</strong>. Spezialisierte Nervenendungen reagieren auf unterschiedliche Reize.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🖐️ Mechanorezeptoren — Tabelle</div>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:.75rem">
        <thead>
          <tr style="background:rgba(74,222,128,.1)">
            <th style="padding:8px 10px;text-align:left;color:#4ade80;font-weight:700;border-bottom:1px solid var(--border)">Rezeptor</th>
            <th style="padding:8px 10px;text-align:left;color:#4ade80;font-weight:700;border-bottom:1px solid var(--border)">Reiz</th>
            <th style="padding:8px 10px;text-align:left;color:#4ade80;font-weight:700;border-bottom:1px solid var(--border)">Lage</th>
          </tr>
        </thead>
        <tbody>
          ${[
            ['Merkel-Tastzellen','Druck','Oberhaut (Basalzellschicht)'],
            ['Freie Nervenendigungen','Druck, Temperatur, Schmerz','Oberhaut + Lederhaut'],
            ['Meissner-Tastkörperchen','Berührung / Tasten','Lederhaut (Dermis)'],
            ['Ruffini-Körperchen','Hautdehnung','Lederhaut (Dermis)'],
            ['Vater-Pacini-Körperchen','Vibration','Unterhautfettgewebe (Subcutis)'],
          ].map(([r,reiz,lage],i)=>`
          <tr style="background:${i%2?'rgba(255,255,255,.01)':'transparent'}">
            <td style="padding:8px 10px;color:var(--ink);border-bottom:1px solid var(--border)">${r}</td>
            <td style="padding:8px 10px;color:var(--ink2);border-bottom:1px solid var(--border)">${reiz}</td>
            <td style="padding:8px 10px;color:var(--ink2);border-bottom:1px solid var(--border)">${lage}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>
  <div class="lekt-merkhilfe">
    <span>🧠</span>
    <div><strong>Merkhilfe Lage:</strong> <em>Merkel oben (Basalzellschicht), Meissner + Ruffini mitte (Dermis), Pacini unten (Subcutis)</em></div>
  </div>
</div>

<div class="lekt-sec" id="lsec-dermis-zahlen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Zahlen pro cm² Dermis — Klausurklassiker</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔢 Pro 1 cm² Dermis — animiertes Diagramm</div>
    <!-- SVG bar chart animé reproduisant l'Image 3 -->
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:6px 0;border-radius:12px">
      <defs>
        <linearGradient id="bSchmz" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
        <linearGradient id="bDruck" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#fb923c"/></linearGradient>
        <linearGradient id="bSchweis" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#15803d"/><stop offset="100%" stop-color="#4ade80"/></linearGradient>
        <linearGradient id="bTalg" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#7e22ce"/><stop offset="100%" stop-color="#c084fc"/></linearGradient>
        <linearGradient id="bKalt" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
        <linearGradient id="bWarm" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
        <filter id="barShadow"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <rect width="480" height="200" rx="12" fill="#0c1520"/>
      <!-- Titre -->
      <text x="240" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">Rezeptoren &amp; Strukturen pro 1 cm² Dermis</text>

      <!-- Axe Y -->
      <line x1="52" y1="30" x2="52" y2="148" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <!-- Axe X -->
      <line x1="52" y1="148" x2="468" y2="148" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <!-- Grille Y -->
      ${[50,100,150,200].map(v=>{
        const y = 148 - (v/200)*118;
        return `<line x1="52" y1="${y.toFixed(0)}" x2="468" y2="${y.toFixed(0)}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <text x="48" y="${(y+3).toFixed(0)}" font-size="7" font-family="DM Sans" fill="rgba(255,255,255,0.3)" text-anchor="end">${v}</text>`;
      }).join('')}

      <!-- Barres + valeurs + icônes -->
      ${[
        [200,'#f87171','url(#bSchmz)','200','Schmerzrezeptoren','⚡','85'],
        [100,'#fb923c','url(#bDruck)','100','Druckrezeptoren','👆','151'],
        [100,'#4ade80','url(#bSchweis)','100','Schweißdrüsen','💧','217'],
        [40,'#c084fc','url(#bTalg)','40','Talgdrüsen','🫙','283'],
        [12,'#60a5fa','url(#bKalt)','12','Kälterezeptoren','❄️','349'],
        [2,'#fbbf24','url(#bWarm)','2','Wärmerezeptoren','🌡️','415'],
      ].map(([val,c,grad,label,name,icon,cx])=>{
        const barH = (val/200)*118;
        const barY = 148 - barH;
        const barX = Number(cx)-22;
        return `
        <!-- Barre ${name} -->
        <rect x="${barX}" y="${barY}" width="44" height="${barH.toFixed(1)}" rx="6 6 2 2" fill="${grad}" filter="url(#barShadow)" style="animation:growBar3 0.8s ease-out"/>
        <!-- Valeur -->
        <text x="${cx}" y="${(barY-8).toFixed(0)}" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="900" fill="${c}">${label}</text>
        <!-- Icône -->
        <text x="${cx}" y="${(barY-20).toFixed(0)}" text-anchor="middle" font-size="11">${icon}</text>
        <!-- Label bas -->
        <text x="${cx}" y="160" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="700" fill="${c}">${name.split(' ')[0]}</text>
        <text x="${cx}" y="170" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(255,255,255,0.4)">${name.split(' ')[1]||''}</text>`;
      }).join('')}
      <style>@keyframes growBar3 { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); } }</style>

      <!-- Note bas -->
      <text x="240" y="188" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(148,163,184,0.7)">Merkhilfe: 200 Schmerz · 100 Druck · 100 Schweiß · 40 Talg · 12 Kälte · 2 Wärme</text>
    </svg>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Sinneswahrnehmung + Schutz</div>
    Die Haut nimmt über Rezeptoren verschiedene Reize auf → Nervenbahnen → Gehirn. <strong>Tastsinn</strong>: Form + Struktur. <strong>Temperatursinn</strong>: Kalt/Warm. <strong>Schutz vor Austrocknung</strong>: Epidermis verhindert Wasserverdunstung. <strong>Melanozyten</strong>: Melanin schützt vor UV.
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`
    ,
    'Veränderungen der Haut': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Vertiefung</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Veränderungen der Haut</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Kinderhaut — Jugend — Erwachsene — Altershaut</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-vera-lebensalter">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Haut im Lebenslauf</span></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
    ${[
      ['👶','Baby / Kind (bis 8 J.)','Fettarm, wasserreich. Talgdrüsen kaum aktiv. Sehr empfindlich auf Wind, Sonne, Kälte.','#60a5fa'],
      ['🧑','Jugendliche','Talgproduktion oft gesteigert → unreine, fettige Haut (Pickel, Mitesser häufig)','#fbbf24'],
      ['🧑‍🦱','Erwachsene (ab Ende Pubertät)','3 genetisch bedingte Hauttypen (seborrhoisch/sebostatisch/Misch). Hormonell gesteuert.','#4ade80'],
      ['👴','Ältere Menschen','Viele strukturelle Veränderungen → Altershaut (siehe unten)','#c084fc'],
    ].map(([i,t,d,c])=>`
    <div style="display:flex;gap:12px;align-items:flex-start;padding:13px;border-radius:12px;border:1.5px solid var(--border);background:rgba(255,255,255,.02)">
      <span style="font-size:1.6rem;flex-shrink:0">${i}</span>
      <div><div style="font-weight:700;font-size:.82rem;color:${c};margin-bottom:4px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${d}</div></div>
    </div>`).join('')}
  </div>
</div>

<div class="lekt-sec" id="lsec-vera-kinderhaut">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Kinderhaut — Besonderheiten & Pflegekonsequenzen</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">👶 Kinderhaut vs. Erwachsenenhaut</div>
    ${[
      ['Hornschicht ~30% dünner','Weniger mechanischer Schutz','→ sanfte Pflege, kein Rubbeln'],
      ['Kein fertiger Säureschutzmantel','Keine stabile Keimbarriere','→ pH-neutrale Produkte, keine Duftstoffe'],
      ['Kaum Melanin','Hohe UV-Empfindlichkeit','→ immer LSF 50+, Sonnenhut'],
      ['Immunsystem muss noch trainiert werden','Anfälliger für Hautreizungen','→ natürliche Reize zulassen, aber schützen'],
      ['Durchlässiger für Substanzen','Allergene dringen leichter ein','→ auf Konservierungsstoffe verzichten'],
    ].map(([t,p,k])=>`
    <div style="display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:6px;align-items:start;padding:9px 12px;border-radius:8px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:6px;font-size:.72rem">
      <div style="color:#60a5fa;font-weight:600">${t}</div>
      <div style="color:var(--ink2)">${p}</div>
      <div style="color:#4ade80">${k}</div>
    </div>`).join('')}
  </div>
</div>

<div class="lekt-sec" id="lsec-vera-altershaut">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Altershaut — Ursache & Konsequenz</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">👴 Veränderungen + Pflegerelevanz</div>
    ${[
      ['Kapillaranzahl ↓, poröser','Hämatome, kalte + blasse Haut','→ Vorsicht bei Lagerung, Druckschutz'],
      ['Epidermiserneuerung dauert länger','Regenerationsfähigkeit ↓','→ Wunden heilen langsamer'],
      ['Verzahnung Epidermis/Dermis löst sich + Subcutis ↓','Dünne, pergamentartige Haut','→ vorsichtiger Umgang, keine Klebestreifen reißen'],
      ['Schweiß- + Talgdrüsensekretion ↓','Rissige, trockene, juckende, schuppige Haut','→ regelmäßige rückfettende Hautpflege'],
      ['Bindegewebe + Kollagenfasern ↓','Faltenbildung','→ kosmetisch, keine Pflegekonsequenz'],
      ['UV-Strahlung über Jahrzehnte','Pigmentflecken (Altersflecken)','→ beobachten auf Malignität'],
    ].map(([u,f,p])=>`
    <div style="padding:10px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px">
        <span style="color:#c084fc;font-size:.75rem;font-weight:700;flex-shrink:0">Ursache:</span>
        <span style="font-size:.75rem;color:var(--ink)">${u}</span>
      </div>
      <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px">
        <span style="color:#f87171;font-size:.72rem;font-weight:700;flex-shrink:0">Folge:</span>
        <span style="font-size:.72rem;color:var(--ink2)">${f}</span>
      </div>
      <div style="display:flex;gap:6px;align-items:flex-start">
        <span style="color:#4ade80;font-size:.7rem;font-weight:700;flex-shrink:0">Pflege:</span>
        <span style="font-size:.7rem;color:#4ade80">${p}</span>
      </div>
    </div>`).join('')}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`
  },

  niere:{
    'Anatomie & Funktionen der Niere': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Anatomie & Funktionen der Niere</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was leisten unsere Nieren — und wo liegen sie genau?</div>
  </div>
</div>

<div id="lsec-niere-anat" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Lage und Aufbau</div></div>
  <p class="lekt-prose">Die Nieren liegen <strong>retroperitoneal</strong> (hinter dem Bauchfell) beidseitig der Wirbelsäule auf Höhe der Lendenwirbel. Die <strong>rechte Niere liegt tiefer</strong> als die linke (wegen der Leber). Jede Niere ist ca. 10–12 cm lang, 5–6 cm breit und wiegt 120–200 g.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🫘 Anatomische Gliederung</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px">
      ${[
        ['Nierenrinde','Außenbereich — enthält die Nierenkörperchen (Glomeruli) und proximale/distale Tubuli','#60a5fa'],
        ['Nierenmark','Innerer Bereich — enthält Henle-Schleifen und Sammelrohre','#93c5fd'],
        ['Nierenbecken','Sammelsystem für den Harn → leitet in den Harnleiter','#3b82f6'],
        ['Harnleiter (Ureter)','2 Harnleiter, je ca. 25–30 cm lang → leiten Harn zur Harnblase','#60a5fa'],
      ].map(([t,d,c])=>`<div style="background:rgba(96,165,250,.06);border:1px solid rgba(96,165,250,.15);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:4px">${t}</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${d}</div>
      </div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-niere-funk" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Allgemeine Funktionen der Niere</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📋 7 Hauptfunktionen</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[
        ['💧','Urinbildung','Bildung von Harn durch 2–3 Mio. Nephrone','#60a5fa'],
        ['🩸','Blutfilterung','Reinigung des Blutes von Stoffwechselabfällen und Giftstoffen','#f87171'],
        ['⚖️','Wasser-/Elektrolythaushalt','Regulation durch Ausscheidung und Rückresorption von Wasser, Na⁺, K⁺, Cl⁻','#fbbf24'],
        ['🩺','Blutdruckregulation','Über Wasserhaushalt und Hormon Renin → Angiotensin → Blutdrucksteigerung','#fb923c'],
        ['🔬','Säure-Basen-Haushalt','pH-Wert des Blutes: 7,37–7,4 (H⁺-Ausscheidung, HCO₃⁻-Rückresorption)','#4ade80'],
        ['💊','Hormonausschüttung','Renin (Blutdruck) + Erythropoetin (Erythrozytenbildung)','#c084fc'],
        ['☀️','Vitamin D3-Aktivierung','Umwandlung von Vitamin D in aktive Form Vitamin D3','#fbbf24'],
      ].map(([i,t,d,c])=>`<div style="display:flex;gap:12px;padding:10px 14px;background:rgba(255,255,255,.02);border-radius:11px;border-left:3px solid ${c}">
        <div style="font-size:1.2rem;flex-shrink:0">${i}</div>
        <div><div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Merkhilfe pH-Wert:</strong> 7,37–7,4 — unter 7,35 = Azidose, über 7,45 = Alkalose. Die Nieren regulieren langfristig (Stunden–Tage), die Lunge kurzfristig (Sekunden–Minuten) über CO₂.</div></div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Renin-Angiotensin-System</div>
    Nieren bilden bei Blutdruckabfall <strong>Renin</strong> → aktiviert Angiotensin I → Angiotensin II → Vasokonstriktion + Aldosteron-Ausschüttung → Na⁺/Wasser-Retention → Blutdruckstieg.<br/>
    <em>ACE-Hemmer blockieren diesen Weg → Blutdrucksenkung!</em>
  </div>
</div>
</div></div>`,

    'Nephrone & Urinbildung': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 2</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Nephrone & Urinbildung</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Wie entsteht Urin — von 180 Litern Primärharn zu 1,5 Litern Endharn?</div>
</div>

<div id="lsec-niere-neph" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Das Nephron — Grundstruktur</div></div>
  <p class="lekt-prose">Das <strong>Nephron</strong> ist die funktionelle Grundeinheit der Niere. Jede Niere enthält ca. <strong>1–1,5 Millionen Nephrone</strong>, beide zusammen ca. 2–3 Mio. Es besteht aus zwei Teilen: dem Nierenkörperchen und den Nierenkanälchen (Tubuli).</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Aufbau des Nephrons</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[
        ['Nierenkörperchen (Corpusculum renale)','In der Nierenrinde — besteht aus Glomerulus + Bowman-Kapsel. Hier: Ultrafiltration → Primärharn','#60a5fa'],
        ['Proximaler Tubulus','Gewundener + gerader Teil — Rückresorption von ~65% des Filtrats, Glukose, Aminosäuren','#93c5fd'],
        ['Henle-Schleife','Im Nierenmark — dünner absteigender + aufsteigender Schenkel. Harnkonzentrierung','#3b82f6'],
        ['Distaler Tubulus','Feinregulation von Na⁺, K⁺, Ca²⁺ und Wasser (durch Aldosteron und ADH)','#60a5fa'],
        ['Sammelrohr','Sammelt Harn vieler Nephrone → ins Nierenbecken → Harnleiter','#bfdbfe'],
      ].map(([t,d,c])=>`<div style="display:flex;gap:12px;padding:10px 14px;background:rgba(96,165,250,.04);border-radius:11px;border-left:3px solid ${c}">
        <div><div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-niere-urin" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Urinbildung — 3 Schritte</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⚗️ Vom Blut zum Urin</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
      ${[
        ['1','Glomeruläre Filtration','Im Nierenkörperchen: Blutdruck treibt Flüssigkeit durch Kapillarwand in die Bowman-Kapsel. Ergebnis: ~180 L Primärharn/Tag (Ultrafiltrat = wie Blutplasma ohne Eiweiße)','#60a5fa'],
        ['2','Tubuläre Rückresorption','In den Tubuli: 99% des Primärharns werden rückresorbiert — Wasser, Glukose, Elektrolyte, Aminosäuren. Ergebnis: ~1,5–2 L konzentrierter Sekundärharn/Tag','#4ade80'],
        ['3','Tubuläre Sekretion','Aktiver Transport von Abfallstoffen (H⁺, K⁺, bestimmten Medikamenten) aus dem Blut in den Tubulus → Harn wird konzentriert und angesäuert','#fbbf24'],
      ].map(([n,t,d,c])=>`<div style="display:flex;gap:12px;padding:12px 14px;background:rgba(255,255,255,.02);border-radius:12px">
        <div style="width:28px;height:28px;border-radius:8px;background:${c}22;color:${c};font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${n}</div>
        <div><div style="font-weight:700;font-size:.82rem;color:${c};margin-bottom:3px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
  <!-- SVG animé: 180L → 1.5L -->
  <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:8px 0;border-radius:12px">
    <defs>
      <radialGradient id="glomGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#7f1d1d"/>
      </radialGradient>
      <linearGradient id="tubGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#78350f"/>
      </linearGradient>
      <linearGradient id="urGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#60a5fa"/>
      </linearGradient>
      <radialGradient id="dropBlue" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#2563eb"/>
      </radialGradient>
      <radialGradient id="dropGreen" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#86efac"/><stop offset="100%" stop-color="#15803d"/>
      </radialGradient>
      <radialGradient id="dropAmber" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#b45309"/>
      </radialGradient>
      <filter id="gGlow2"><feGaussianBlur stdDeviation="2" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
      <marker id="uArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0,0 7,3.5 0,7" fill="#60a5fa"/>
      </marker>
      <marker id="gArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0,0 7,3.5 0,7" fill="#4ade80"/>
      </marker>
    </defs>

    <!-- Fond -->
    <rect width="520" height="160" rx="12" fill="#0c1520"/>
    <!-- Titre -->
    <text x="260" y="16" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.8)">Urinbildung im Nephron — 3 Schritte</text>

    <!-- ═══ ÉTAPE 1: GLOMERULUS — Filtration ═══ -->
    <!-- Capillaire afférent -->
    <path d="M20 80 Q28 80 35 75 Q42 68 48 68" stroke="#dc2626" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- Bowman-Kapsel -->
    <circle cx="68" cy="75" r="28" fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.4)" stroke-width="2"/>
    <!-- Glomérule (peloton de capillaires) -->
    <circle cx="68" cy="75" r="18" fill="url(#glomGrad)" stroke="rgba(220,38,38,0.6)" stroke-width="1.5" filter="url(#gGlow2)"/>
    <!-- Texture glomérule -->
    <path d="M56 70 Q62 65 70 68 Q78 71 74 78 Q70 85 62 82 Q54 79 56 70" fill="rgba(220,38,38,0.35)" stroke="rgba(255,150,150,0.3)" stroke-width="0.8"/>
    <path d="M64 63 Q70 60 76 64 Q80 68 77 74" fill="none" stroke="rgba(255,150,150,0.3)" stroke-width="0.8"/>
    <!-- Capsule texte -->
    <text x="68" y="114" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#f87171">Glomerulus</text>
    <text x="68" y="124" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(248,113,113,0.7)">(Kapillarknäuel)</text>
    <!-- Capillaire efférent -->
    <path d="M88 68 Q94 65 100 68 Q108 72 112 78" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- Gouttes de filtrat sortant -->
    ${[[50,48],[62,42],[76,44]].map(([x,y])=>
      `<ellipse cx="${x}" cy="${y}" rx="4" ry="5.5" fill="url(#dropBlue)" opacity="0.85" filter="url(#gGlow2)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="1.6s" repeatCount="indefinite"/>
      </ellipse>`).join('')}
    <!-- Flèche Filtration -->
    <path d="M65 46 L65 36" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#uArr)"/>
    <text x="68" y="32" font-size="7" font-family="DM Sans" font-weight="700" fill="#60a5fa">Filtration</text>

    <!-- Badge 180L -->
    <rect x="25" y="22" width="56" height="20" rx="6" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.5)" stroke-width="1.2"/>
    <text x="53" y="30" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="#60a5fa">Primärharn</text>
    <text x="53" y="39" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="white">180 L/Tag</text>

    <!-- ═══ ÉTAPE 2: TUBULE — Réabsorption ═══ -->
    <!-- Tubule proximal (serpentin) -->
    <path d="M112 78 Q120 74 130 80 Q140 86 150 80 Q162 72 172 78 Q184 85 194 78 Q206 70 218 76 Q230 83 240 76 Q252 68 264 76 Q276 84 288 78 Q300 70 310 78"
          stroke="url(#tubGrad)" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.9"/>
    <!-- Contour tubule -->
    <path d="M112 78 Q120 74 130 80 Q140 86 150 80 Q162 72 172 78 Q184 85 194 78 Q206 70 218 76 Q230 83 240 76 Q252 68 264 76 Q276 84 288 78 Q300 70 310 78"
          stroke="rgba(161,98,7,0.4)" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- Label tubule -->
    <text x="210" y="100" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#d97706">Proximaler Tubulus + Henle-Schleife</text>
    <text x="210" y="112" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(217,119,6,0.7)">99% Rückresorption: Wasser, Glukose, Na⁺, K⁺</text>

    <!-- Flèches de réabsorption (vers le bas = retour dans le sang) -->
    ${[[140,82],[175,82],[215,80],[255,80],[295,80]].map(([x,y])=>
      `<path d="M${x} ${y+5} L${x} ${y+18}" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#gArr)"/>
       <circle cx="${x}" cy="${y+5}" r="4" fill="url(#dropGreen)" opacity="0.7" filter="url(#gGlow2)">
         <animateTransform attributeName="transform" type="translate" values="0,0;0,3;0,0" dur="1.8s" repeatCount="indefinite"/>
       </circle>`).join('')}
    <text x="210" y="135" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(74,222,128,0.6)">↓ zurück ins Blut (Rückresorption)</text>

    <!-- ═══ ÉTAPE 3: ENDHARN ═══ -->
    <!-- Sammelrohr -->
    <path d="M310 78 Q322 80 330 85 Q338 92 340 105 L340 148" stroke="url(#urGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M310 78 Q322 80 330 85 Q338 92 340 105 L340 148" stroke="rgba(29,78,216,0.3)" stroke-width="10" fill="none" stroke-linecap="round"/>
    <text x="360" y="90" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#60a5fa">Sammelrohr</text>
    <!-- Gouttes d'urine finale -->
    ${[[335,128],[340,140],[338,152]].map(([x,y])=>
      `<ellipse cx="${x}" cy="${y}" rx="4" ry="5.5" fill="url(#dropAmber)" opacity="0.85">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,3;0,0" dur="1.4s" repeatCount="indefinite"/>
      </ellipse>`).join('')}

    <!-- Badge Endharn -->
    <rect x="360" y="108" width="62" height="38" rx="8" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.5)" stroke-width="1.5"/>
    <text x="391" y="122" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="#fbbf24">Sekundärharn</text>
    <text x="391" y="133" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="900" fill="white">1,5–2 L</text>
    <text x="391" y="143" text-anchor="middle" font-size="6" font-family="DM Sans" fill="rgba(251,191,36,0.6)">pro Tag = URIN</text>

    <!-- Numéros d'étapes -->
    <circle cx="20" cy="54" r="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/>
    <text x="20" y="58" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#60a5fa">1</text>
    <circle cx="200" cy="54" r="10" fill="rgba(74,222,128,0.2)" stroke="#4ade80" stroke-width="1.5"/>
    <text x="200" y="58" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#4ade80">2</text>
    <circle cx="360" cy="54" r="10" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="360" y="58" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#fbbf24">3</text>
    <text x="34" y="58" font-size="7" font-family="DM Sans" fill="rgba(96,165,250,0.7)">Filtration</text>
    <text x="214" y="58" font-size="7" font-family="DM Sans" fill="rgba(74,222,128,0.7)">Rückresorption (99%)</text>
    <text x="374" y="58" font-size="7" font-family="DM Sans" fill="rgba(251,191,36,0.7)">Sekretion → Urin</text>
  </svg>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Primär- vs. Sekundärharn</div>
    <strong>Primärharn ≠ Urin!</strong> 180 L werden filtriert, aber 99% rückresorbiert → nur 1,5–2 L Endharn. Glukosurie (Zucker im Urin) entsteht erst ab einem BZ &gt;180 mg/dl — dann ist die Rückresorptionskapazität überschritten!
  </div>
</div>
</div></div>`,

    'Ableitende Harnwege & Miktionsreflex': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 3</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Ableitende Harnwege & Miktionsreflex</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Vom Nierenbecken zur Blase — und wie die Miktion gesteuert wird</div>
</div>

<div id="lsec-niere-harnw" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Ableitende Harnwege</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🗺️ Weg des Urins</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
      ${[
        ['Nierenbecken (Pelvis renalis)','Sammelsystem der Niere — nimmt Urin aus den Sammelrohren auf'],
        ['Harnleiter (Ureter)','2 Harnleiter, je ~25–30 cm — peristaltische Bewegungen transportieren Urin zur Blase'],
        ['Harnblase (Vesica urinaria)','Speicher: 400–600 ml. Wand: M. detrusor vesicae + Übergangsepithel'],
        ['Innerer Sphinkter','Glatter Muskel — unwillkürlich (vegetatives NS). Sympathikus hält ihn geschlossen'],
        ['Äußerer Sphinkter','Quergestreifter Muskel — willkürlich (N. pudendus). Ab 3. Lebensjahr bewusst kontrollierbar'],
        ['Harnröhre (Urethra)','Frau: ~4 cm (kurz → höheres HWI-Risiko!). Mann: ~20 cm'],
      ].map(([t,d])=>`<div style="display:flex;gap:10px;padding:8px 12px;background:rgba(96,165,250,.04);border-radius:9px;align-items:flex-start">
        <div style="width:6px;height:6px;border-radius:50%;background:#60a5fa;flex-shrink:0;margin-top:5px"></div>
        <div><span style="font-weight:700;font-size:.8rem;color:#60a5fa">${t}:</span> <span style="font-size:.78rem;color:var(--ink2)">${d}</span></div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Merkhilfe HWI-Risiko:</strong> Frauen haben eine kurze Harnröhre (~4 cm) → Erreger gelangen leichter in die Blase → häufigere Harnwegsinfekte! Wichtig für Prophylaxe und Anamnese.</div></div>
</div>

<div id="lsec-niere-mikt" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Miktionsreflex — bis und ab dem 3. Lebensjahr</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">👶 Bis zum 3. Lebensjahr — Reflektorisch</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
      ${[
        ['1','Füllungsreiz ab ~150–300 ml','Innendruck der Blase steigt'],
        ['2','Dehnungsrezeptoren aktiviert','In der Blasenwand → Signal ans Rückenmark (S2–S4)'],
        ['3','Parasympathikus aktiv','M. detrusor kontrahiert, innerer Sphinkter erschlafft'],
        ['4','Motorische Nerven','Äußerer Sphinkter erschlafft → Miktion findet statt'],
        ['5','Keine Gehirnkontrolle','Rein reflexartig → Windeln notwendig!'],
      ].map(([n,t,d])=>`<div style="display:flex;gap:10px;padding:8px 12px;background:rgba(248,113,113,.04);border-radius:9px;align-items:flex-start">
        <div style="width:20px;height:20px;border-radius:6px;background:rgba(248,113,113,.2);color:#f87171;font-weight:800;font-size:.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${n}</div>
        <div><span style="font-weight:700;font-size:.78rem;color:#f87171">${t}: </span><span style="font-size:.75rem;color:var(--ink2)">${d}</span></div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#4ade80">🧠 Ab dem 3. Lebensjahr — Mit Gehirnkontrolle</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6;margin-top:6px">Das <strong>Miktionszentrum im Gehirn</strong> (Großhirn + Hirnstamm) übernimmt ab dem 3. Lebensjahr die Kontrolle:</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
      <div style="padding:10px 12px;background:rgba(74,222,128,.06);border-radius:10px;border:1px solid rgba(74,222,128,.2)">
        <div style="font-weight:700;font-size:.78rem;color:#4ade80;margin-bottom:4px">🛑 Blasenfüllungszentrum</div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.5">Hemmt Parasympathikus im Rückenmark → kein Detrusor-Zug → Sphinkter bleibt gespannt → <strong>Kontinenz</strong></div>
      </div>
      <div style="padding:10px 12px;background:rgba(96,165,250,.06);border-radius:10px;border:1px solid rgba(96,165,250,.2)">
        <div style="font-weight:700;font-size:.78rem;color:#60a5fa;margin-bottom:4px">✅ Blasenentleerungszentrum</div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.5">Aktiviert Parasympathikus → Detrusor spannt an → Sphinkter erschlafft → <strong>Miktion</strong></div>
      </div>
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Nerven des Reflexbogens beim Erwachsenen</div>
    (1) Miktionszentrum Großhirn → (2) Hirnstamm → (3) Rückenmark → (4) Sakrales Reflexzentrum (S2–S4) → (5) N. hypogastricus (Sympathikus L1–L3) → (6) N. pelvicus (Parasympathikus S2–S4) → (7) N. pudendus (äußerer Sphinkter) → (8) Blase
  </div>
</div>
</div></div>`,

    'Harninkontinenz — Definition & Formen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 4</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Harninkontinenz — Definition & Epidemiologie</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was ist Inkontinenz, wie häufig ist sie — und was bedeutet sie für Betroffene?</div>
</div>

<div id="lsec-niere-indef" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Definition & Kontinenz</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">📖 Definitionen</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
      <div style="padding:12px 14px;background:rgba(74,222,128,.06);border-radius:11px;border-left:3px solid #4ade80">
        <div style="font-weight:700;font-size:.82rem;color:#4ade80;margin-bottom:4px">Kontinenz</div>
        <div style="font-size:.78rem;color:var(--ink2)">Fähigkeit zur <strong>willkürlichen Blasenentleerung</strong> zu passender Zeit an einem passenden Ort</div>
      </div>
      <div style="padding:12px 14px;background:rgba(248,113,113,.06);border-radius:11px;border-left:3px solid #f87171">
        <div style="font-weight:700;font-size:.82rem;color:#f87171;margin-bottom:4px">Harninkontinenz (Norton 1999)</div>
        <div style="font-size:.78rem;color:var(--ink2)">Unfreiwilliges Ausscheiden oder Abgehen von Urin an unpassenden Orten oder Zeiten, <strong>mindestens 2x pro Monat</strong>, unabhängig von der Urinmenge</div>
      </div>
      <div style="padding:12px 14px;background:rgba(96,165,250,.06);border-radius:11px;border-left:3px solid #60a5fa">
        <div style="font-weight:700;font-size:.82rem;color:#60a5fa;margin-bottom:4px">ICS-Definition</div>
        <div style="font-size:.78rem;color:var(--ink2)">Symptom des unfreiwilligen Urinverlusts jeglichen Ausmaßes</div>
      </div>
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Wichtig für die Klausur:</strong> Harninkontinenz ist <strong>KEINE eigenständige Erkrankung, sondern ein Symptom!</strong> Es liegt immer eine Grundursache vor.</div></div>
</div>

<div id="lsec-niere-epi" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Häufigkeit & psychosoziale Folgen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">📊 Prävalenz in Deutschland</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px">
      ${[
        ['18–40 J.','♂ 4/100\n♀ 8/100','#60a5fa'],
        ['41–60 J.','♂ 7/100\n♀ 11/100','#fbbf24'],
        ['> 60 J.','♂ 18/100\n♀ 27/100','#f87171'],
      ].map(([a,z,c])=>`<div style="text-align:center;padding:12px 8px;background:${c}11;border:1px solid ${c}33;border-radius:12px">
        <div style="font-size:.75rem;color:var(--ink2);margin-bottom:6px">${a}</div>
        <div style="font-size:.85rem;font-weight:700;color:${c};white-space:pre-line;line-height:1.6">${z}</div>
      </div>`).join('')}
    </div>
    <div style="margin-top:10px;font-size:.74rem;color:var(--ink3)">Gesamtprävalenz: Frauen 4,5–53%, Männer 1,6–24%. Tatsächliche Zahl höher wegen Scham und Tabuisierung.</div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#f87171">😔 Psychosoziale Folgen (Fallbeispiel)</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${['Sozialer Rückzug (kein Theater, keine Freunde)','Ständige Angst vor unkontrolliertem Verlust','Planung aller Wege nach Toilettennähe','Mehrmals täglich Wäsche wechseln','Vermeidung von Sport und Aktivitäten','Vermindertes Selbstwertgefühl + Scham'].map(f=>`<div style="font-size:.72rem;color:var(--ink2);padding:6px 10px;background:rgba(248,113,113,.04);border-radius:8px;border:1px solid rgba(248,113,113,.1)">• ${f}</div>`).join('')}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#4ade80">📋 7 Formen der Harninkontinenz</div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
      ${[
        'Belastungsinkontinenz (Stressinkontinenz)',
        'Dranginkontinenz (Überaktive Blase)',
        'Mischharninkontinenz (Belastung + Drang)',
        'Reflexinkontinenz (neurogen)',
        'Chronische Harnretention (früher: Überlaufinkontinenz)',
        'Funktionelle Inkontinenz',
        'Enuresis nocturna (Bettnässen bei Kindern)',
      ].map((f,i)=>`<div style="display:flex;gap:8px;align-items:center;font-size:.78rem;color:var(--ink2);padding:5px 10px;background:rgba(74,222,128,.03);border-radius:8px">
        <span style="color:#4ade80;font-weight:700;font-size:.7rem">${i+1}.</span>${f}
      </div>`).join('')}
    </div>
  </div>
</div>
</div></div>`,

    'Inkontinenzformen im Detail': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 5</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Inkontinenzformen im Detail</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Ursachen, Symptome und Therapie der wichtigsten Inkontinenzformen</div>
</div>

<div id="lsec-niere-belas" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Belastungsinkontinenz (Stressinkontinenz)</div></div>
  <p class="lekt-prose">Unfreiwilliger Harnabgang bei <strong>körperlicher Belastung</strong> — OHNE Harndrang. Ursache: unzureichender Harnröhrenverschlussdruck bei erhöhtem Bauchdruck.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">📊 3 Schweregrade</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
      ${[
        ['Grad I','Harnverlust bei Husten, Niesen oder Lachen','#4ade80'],
        ['Grad II','Harnverlust bei Heben, Treppensteigen oder Aufstehen','#fbbf24'],
        ['Grad III','Harnverlust im Liegen — auch ohne Belastung','#f87171'],
      ].map(([g,d,c])=>`<div style="display:flex;gap:10px;padding:8px 12px;background:${c}0d;border-radius:9px;border-left:3px solid ${c}">
        <div style="font-weight:800;font-size:.78rem;color:${c};min-width:52px">${g}</div>
        <div style="font-size:.78rem;color:var(--ink2)">${d}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#60a5fa">⚕️ Ursachen & Therapie</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px;font-size:.75rem">
      <div style="background:rgba(255,255,255,.03);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#60a5fa;margin-bottom:6px">Ursachen</div>
        <div style="color:var(--ink2);line-height:1.7">• Frauen: Schwäche der Beckenbodenmuskulatur (nach Geburten)<br/>• Männer: Prostata-OP (Verletzung des Verschlussmuskels)</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#4ade80;margin-bottom:6px">Therapie</div>
        <div style="color:var(--ink2);line-height:1.7">• Konservativ: Beckenbodentraining, Pessartherapie, Biofeedback<br/>• Operativ: bei Grad III — Blasensenkung/Organvorfall</div>
      </div>
    </div>
  </div>
</div>

<div id="lsec-niere-drang" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Dranginkontinenz & weitere Formen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb923c">🔥 Dranginkontinenz</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6;margin-top:6px"><strong>Überaktivität der Blasenmuskulatur</strong> — der Detrusor kontrahiert unkontrolliert. Reizblase = leichte Form (Harndrang noch unterdrückbar).</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:.74rem">
      <div style="background:rgba(251,146,60,.06);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#fb923c;margin-bottom:4px">Ursachen</div>
        <div style="color:var(--ink2);line-height:1.7">• Neurologisch: Schlaganfall, Parkinson, Diabetes<br/>• Blasensteine, Tumore<br/>• Blasenentzündung<br/>• Psychische Ursachen</div>
      </div>
      <div style="background:rgba(251,146,60,.06);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#4ade80;margin-bottom:4px">Therapie</div>
        <div style="color:var(--ink2);line-height:1.7">• Blasentraining (Miktionsintervall verlängern)<br/>• Medikamente (Anticholinergika)<br/>• Elektrostimulation</div>
      </div>
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#c084fc">📋 Weitere Formen im Überblick</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[
        ['Reflexinkontinenz','Nervenschaden (Rückenmark, MS) → keine Blasenwahrnehmung, kein willentlicher Harnverlust möglich. Therapie: Intermittierender Selbstkatheterismus (ISK)','#c084fc'],
        ['Chronische Harnretention','Blasenüberdehnung durch Restharn bei Abflussbehinderung (Prostata, Blasenstein). Symptome: Startschwierigkeiten, schwacher Strahl, Nachträufeln. Therapie: OP oder Katheter','#60a5fa'],
        ['Funktionelle Inkontinenz','Urogenitaltrakt intakt! Ursache: Demenz, Immobilität, Depressionen → Gang zur Toilette nicht möglich. Therapie: Toilettentraining, Hilfsmittel','#4ade80'],
      ].map(([t,d,c])=>`<div style="padding:10px 12px;background:${c}0a;border-radius:10px;border-left:3px solid ${c}">
        <div style="font-weight:700;font-size:.8rem;color:${c};margin-bottom:3px">${t}</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${d}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 KLAUSURFALLE: Welche Therapie bei welcher Form?</div>
    <strong>Belastung Grad I+II:</strong> Beckenbodentraining | <strong>Drang:</strong> Blasentraining + Medikamente | <strong>Reflex:</strong> ISK | <strong>Retention:</strong> OP / Katheter | <strong>Funktionell:</strong> Toilettentraining + Umgebungsanpassung
  </div>
</div>
</div></div>`,

    'Expertenstandard & Pflege bei Inkontinenz': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 6</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Expertenstandard & Pflege bei Inkontinenz</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Nationaler Expertenstandard — Assessment, Kontinenzprofil und Pflegemaßnahmen</div>
</div>

<div id="lsec-niere-exp" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Expertenstandard — 6 Schritte</div></div>
  <p class="lekt-prose">Der <strong>Nationale Expertenstandard „Förderung der Harnkontinenz" (DNQP)</strong> geht davon aus, dass bei jedem Pflegebedürftigen die Harnkontinenz erhalten oder gefördert werden kann. Eine identifizierte Inkontinenz wird beseitigt, reduziert oder kompensiert.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🏛️ 6 Schritte des Expertenstandards</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-top:6px">
      ${[
        ['1','Identifikation','Harninkontinenz und ihre Form erkennen (Anamnese, Assessment-Tools, Miktionsprotokoll)','#60a5fa'],
        ['2','Einschätzung','Differenzierte Einschätzung + Erstellung eines Kontinenzprofils','#4ade80'],
        ['3','Beratung','Maßnahmen zur Förderung der Harnkontinenz — angepasst an die Inkontinenzform','#fbbf24'],
        ['4','Planung','Kontinenzfördernde Maßnahmen und Ziele planen','#fb923c'],
        ['5','Durchführung','Koordination und Umsetzung der geplanten Maßnahmen','#f87171'],
        ['6','Evaluation','Beurteilung anhand des angestrebten Kontinenzprofils — Ziele erreicht?','#c084fc'],
      ].map(([n,t,d,c])=>`<div style="display:flex;align-items:flex-start;gap:10px;padding:9px 12px;background:${c}0a;border-radius:10px;border-left:3px solid ${c}">
        <div style="width:24px;height:24px;border-radius:7px;background:${c}22;color:${c};font-weight:800;font-size:.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${n}</div>
        <div><div style="font-weight:700;font-size:.78rem;color:${c};margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${d}</div></div>
      </div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-niere-assess" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Assessment & Anamnese</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">❓ Screening-Fragen (Expertenstandard)</div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
      ${[
        'Verlieren Sie ungewollt Harn?',
        'Verlieren Sie Harn beim Husten, Lachen oder Heben?',
        'Verlieren Sie Harn auf dem Weg zur Toilette?',
        'Verspüren Sie häufig starken, nicht unterdrückbaren Harndrang?',
        'Tragen Sie Einlagen/Vorlagen, um Harn aufzufangen?',
        'Müssen Sie pressen, um die Blase zu entleeren?',
      ].map(f=>`<div style="display:flex;gap:8px;font-size:.78rem;color:var(--ink2);padding:6px 10px;background:rgba(251,191,36,.04);border-radius:8px;border:1px solid rgba(251,191,36,.1)">
        <span style="color:#fbbf24">❓</span>${f}
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#60a5fa">📋 Assessment-Inhalte</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px">
      ${['Mobilität (Sturzgefahr?)','Orientiertheit (PE orientiert?)','Verständigungsmöglichkeit','Grad der Selbstpflege','Akzeptanz der Inkontinenz','Bereitschaft zur Therapie','Trinkverhalten/-gewohnheiten','Aktuelle Medikation','Psychosoziale Auswirkungen','Miktionsprotokoll (3–7 Tage)'].map(a=>`<div style="font-size:.72rem;color:var(--ink2);padding:5px 9px;background:rgba(96,165,250,.04);border-radius:8px;border:1px solid rgba(96,165,250,.1)">• ${a}</div>`).join('')}
    </div>
  </div>
</div>

<div id="lsec-niere-mass" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Pflegemaßnahmen im Überblick</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">⚕️ 3 Therapiebereiche</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px">
      ${[
        ['Medizinisch','Medikamente, operative Therapie','#f87171'],
        ['Pflegemanagement','Verhaltenstherapie, Toilettentraining, Hilfsmittel, Schulung','#60a5fa'],
        ['Physikalisch','Beckenbodentraining, Biofeedback, Elektrostimulation','#4ade80'],
      ].map(([t,d,c])=>`<div style="padding:10px;background:${c}0a;border-radius:10px;border-top:2px solid ${c}">
        <div style="font-weight:700;font-size:.78rem;color:${c};margin-bottom:5px">${t}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.5">${d}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Inkontinenzfragebogen nach Gaudenz:</strong> Standardisiertes Instrument zur Differenzierung von Belastungs- und Dranginkontinenz anhand von Symptomen und Situationen.</div></div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Kontinenzprofil</div>
    Das <strong>Kontinenzprofil</strong> ist das <em>Pflegeziel</em> — es beschreibt die angestrebte Kontinenzsituation. Das <strong>Miktionsprotokoll</strong> ist das <em>Assessmentinstrument</em> — es dokumentiert Trinkmenge, Miktionsfrequenz und Inkontinenzepisoden. Nicht verwechseln!
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#1d4ed8,#2563eb)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Niere & Inkontinenz starten →</button>
</div></div>`
  },

  niere: {

    'Anatomie & Funktionen der Niere': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#78350f,#92400e,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,191,36,.2);border:1px solid rgba(251,191,36,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(253,224,71,.95)">💧 Niere · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Anatomie & Funktionen der Niere</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Filterorgane des Körpers — Blutreinigung, Hormonproduktion und Regulation</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Hauptaufgaben der Nieren</div></div>
  <p class="lekt-prose">Die Nieren sind <strong>lebenswichtige Filterorgane</strong> – sie reinigen das Blut, regulieren den Wasser- und Elektrolythaushalt und produzieren wichtige Hormone.</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🎯 Die 6 Hauptfunktionen</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:#fbbf24;margin-bottom:4px">💧 Urinbildung</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Durch die Nephrone — bis zu 180 L Primärharn/Tag, davon ~1,5–2 L Endurin</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:#fb923c;margin-bottom:4px">🩸 Blutreinigung</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Entfernung von Kreatinin, Harnstoff, Harnsäure und Giftstoffen</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:#60a5fa;margin-bottom:4px">⚖️ Wasser & Elektrolyte</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Ausscheidung und Rückresorption von Wasser, Elektrolyten, Glucose, kleinen Proteinen</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:#f87171;margin-bottom:4px">❤️ Blutdruckregulation</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Über Wasserhaushalt und Hormon <strong>Renin</strong> → Blutdruck steigt</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:#a78bfa;margin-bottom:4px">⚗️ Säure-Basen-Haushalt</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">pH-Wert des Blutes: <strong>7,37–7,4</strong></div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:#34d399;margin-bottom:4px">💊 Hormonausschüttung</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Renin, Erythropoetin, aktives Vitamin D3 (Calcitriol)</div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Die 3 wichtigsten Nieren-Hormone</div></div>
  <div style="display:flex;flex-direction:column;gap:12px;margin-top:12px">
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:14px 16px">
      <div style="font-weight:700;color:#fb7185;margin-bottom:4px">🩸 Renin</div>
      <div style="font-size:.85rem;color:var(--ink2);line-height:1.5">Bei niedrigem Blutdruck ausgeschüttet → mehr Wasserrückresorption → <strong>Blutdruckanstieg</strong></div>
    </div>
    <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:14px 16px">
      <div style="font-weight:700;color:#ef4444;margin-bottom:4px">🩸 Erythropoetin (EPO)</div>
      <div style="font-size:.85rem;color:var(--ink2);line-height:1.5">Stimuliert die Bildung von <strong>Erythrozyten</strong> im Knochenmark. Mangel → renale Anämie bei Nierenversagen</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:14px 16px">
      <div style="font-weight:700;color:#fbbf24;margin-bottom:4px">☀️ Calcitriol (Vit. D3)</div>
      <div style="font-size:.85rem;color:var(--ink2);line-height:1.5">Aktive Form von Vitamin D → wichtig für <strong>Knochenaufbau</strong> und Calciumstoffwechsel</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Die Nieren sind <strong>Multifunktionsorgane</strong> — sie filtern, regulieren und produzieren Hormone. Bei Nierenversagen fallen ALLE diese Funktionen aus!
</div>
</div></div>`,

    'Nephrone & Urinbildung': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#78350f,#92400e,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,191,36,.2);border:1px solid rgba(251,191,36,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(253,224,71,.95)">💧 Niere · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Nephrone & Urinbildung</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die mikroskopischen Filtereinheiten der Niere — Primär- und Sekundärharn</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Nephrone?</div></div>
  <p class="lekt-prose">Das <strong>Nephron</strong> ist die <strong>kleinste Funktionseinheit der Niere</strong>. Jede Niere enthält ca. <strong>1–1,5 Millionen Nephrone</strong> — beide Nieren zusammen ca. 2–3 Mio.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🔬 Aufbau eines Nephrons</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:6px">Ein Nephron besteht aus <strong>zwei Hauptteilen</strong>:</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
      <div style="background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;font-size:.85rem;color:#fbbf24;margin-bottom:6px">1️⃣ Nierenkörperchen</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Glomerulus + Bowman-Kapsel<br>→ liegt in der <strong>Nierenrinde</strong></div>
      </div>
      <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;font-size:.85rem;color:#60a5fa;margin-bottom:6px">2️⃣ Nierenkanälchen</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Tubulusapparat<br>→ in <strong>Rinde + Mark</strong></div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Primärharn-Bildung im Glomerulus</div></div>
  <p class="lekt-prose">Im <strong>Nierenkörperchen</strong> (Glomerulus + Bowman-Kapsel) entsteht der <strong>Primärharn</strong> — die Vorstufe des Urins.</p>
  <div class="lekt-card" style="background:rgba(251,191,36,.05);border-color:rgba(251,191,36,.2)">
    <div class="lekt-card-label" style="color:#fbbf24">📥 Was wird filtriert?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Wasser</li>
      <li>Elektrolyte</li>
      <li>Glucose</li>
      <li>Kleine Proteine</li>
      <li>Giftstoffe, Kreatinin, Harnstoff, Harnsäure</li>
    </ul>
    <div class="lekt-card-label" style="color:#ef4444;margin-top:12px">🚫 Was bleibt im Blut?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Erythrozyten, Leukozyten, Thrombozyten <strong>(zu groß!)</strong></li>
    </ul>
  </div>
  <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:14px 16px;margin-top:12px">
    <div style="font-weight:700;color:#60a5fa;margin-bottom:4px">💡 Filtration & Blutdruck</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.5">Die Filtration wird durch den <strong>Blutdruck</strong> gesteuert. Bei zu niedrigem RR → Niere schüttet <strong>Renin</strong> aus → mehr Wasserrückresorption → Blutdruckerhöhung → bessere Filtration</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Sekundärharn-Bildung im Tubulus</div></div>
  <p class="lekt-prose">In den <strong>Nierenkanälchen</strong> (Tubulusapparat) wird der Primärharn <strong>aufkonzentriert</strong> → es entsteht der <strong>Sekundärharn</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#34d399">🔄 Rückresorption</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:6px">Aus dem Primärharn werden Wasser, Elektrolyte, Glucose und kleinste Proteine ins Blut <strong>zurückgeholt</strong>.</p>
  </div>

  <div style="background:linear-gradient(135deg,rgba(251,191,36,.08),rgba(96,165,250,.08));border:1px solid rgba(251,191,36,.2);border-radius:12px;padding:14px 16px;margin-top:14px">
    <div style="font-weight:700;color:#fbbf24;margin-bottom:8px">🚰 Weg des Sekundärharns nach außen</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.8">Sammelrohre → Nierenkelche → <strong>Nierenbecken</strong> → Harnleiter → <strong>Harnblase</strong> → Harnröhre → Ausscheidung</div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Im Nierenkörperchen entsteht der Primärharn (~180 L/Tag). In den Nierenkanälchen wird er aufkonzentriert zum Sekundärharn (~1,5–2 L/Tag).
</div>
</div></div>`,

    'Ableitende Harnwege & Miktionsreflex': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#78350f,#92400e,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,191,36,.2);border:1px solid rgba(251,191,36,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(253,224,71,.95)">💧 Niere · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Ableitende Harnwege & Miktionsreflex</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wie das Wasserlassen gesteuert wird — Reflex vs. willkürliche Kontrolle</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Wann entsteht Harndrang?</div></div>
  <p class="lekt-prose">Der <strong>Harndrang</strong> entsteht ab ca. <strong>150–300 ml</strong> Blasenfüllung. Die maximale Blasenkapazität liegt bei <strong>400–600 ml</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">📊 Blasenfüllung & Reaktion</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:.78rem;color:#22c55e">150–300 ml</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:3px">Erster Harndrang</div>
      </div>
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:.78rem;color:#ef4444">400–600 ml</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:3px">Maximale Kapazität</div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Miktion bei Säuglingen (bis 3. Lebensjahr)</div></div>
  <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.2);border-radius:12px;padding:16px;margin-top:8px">
    <div style="font-weight:700;color:#60a5fa;margin-bottom:8px">🍼 Reflektorisch (über das Rückenmark)</div>
    <ol style="margin:0 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.8">
      <li>Blasenfüllung steigt → Innendruck steigt</li>
      <li><strong>Dehnungsrezeptoren</strong> registrieren die Dehnung</li>
      <li>Weiterleitung ans <strong>Rückenmark</strong></li>
      <li>Parasympathikus aktiviert <strong>M. detrusor vesicae</strong> → Kontraktion</li>
      <li>Innerer Sphinkter erschlafft</li>
      <li>Äußerer Sphinkter (Beckenboden) erschlafft</li>
      <li>→ <strong>Miktion findet statt</strong></li>
    </ol>
    <div style="margin-top:10px;font-size:.8rem;color:#fb923c;font-weight:600">⚠️ Noch keine Gehirnkontrolle → Windeln notwendig</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Miktion ab dem 3. Lebensjahr</div></div>
  <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.2);border-radius:12px;padding:16px;margin-top:8px">
    <div style="font-weight:700;color:#a78bfa;margin-bottom:8px">🧠 Zentralgesteuert (über das Gehirn)</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-bottom:10px">Das <strong>Miktionszentrum</strong> nimmt den Harndrang <strong>bewusst</strong> wahr und entscheidet:</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:4px">🛑 Blasenfüllungszentrum</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Hemmt parasympathische Fasern → Detrusor entspannt → Schließmuskel kontrahiert → <strong>Kontinenz</strong></div>
      </div>
      <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.85rem;margin-bottom:4px">💧 Blasenentleerungszentrum</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Parasympathikus aktiviert → Detrusor kontrahiert → Schließmuskeln erschlaffen → <strong>Miktion</strong></div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Wichtige Nerven für die Miktion</div></div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem">Nervus pelvicus (Beckennerv)</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px;line-height:1.5">Parasympathisch (S2–S4) — innerviert den Detrusor → löst Miktion aus</div>
    </div>
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.85rem">Nervus pudendus</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px;line-height:1.5">Innerviert den <strong>äußeren Schließmuskel</strong> (Beckenboden) → ermöglicht willkürliche Kontrolle</div>
    </div>
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.85rem">Nervus hypogastricus</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px;line-height:1.5">Sympathisch — hemmt die Miktion → fördert Kontinenz</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Bis zum 3. Lebensjahr läuft die Miktion <strong>rein reflektorisch</strong> über das Rückenmark. Danach übernimmt das Gehirn die <strong>willkürliche Kontrolle</strong>.
</div>
</div></div>`,

    'Harninkontinenz — Definition & Formen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#78350f,#92400e,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,191,36,.2);border:1px solid rgba(251,191,36,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(253,224,71,.95)">💧 Niere · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Harninkontinenz — Definition</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Symptom, nicht Krankheit — Definitionen, Prävalenz & Tabuthema</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Definitionen</div></div>

  <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:14px 16px;margin-bottom:12px">
    <div style="font-weight:700;color:#22c55e;margin-bottom:4px">✅ Kontinenz</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.5"><strong>Willkürliche Blasenentleerung</strong> zu passender Zeit an passendem Ort.</div>
  </div>

  <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:14px 16px;margin-bottom:12px">
    <div style="font-weight:700;color:#fb7185;margin-bottom:4px">❌ Harninkontinenz (Norton 1999)</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.5">"Unfreiwilliges Ausscheiden oder Abgehen von Urin an unpassenden Orten oder zu unpassenden Zeiten, <strong>≥ 2× im Monat</strong>, unabhängig von der Urinmenge."</div>
  </div>

  <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#60a5fa;margin-bottom:4px">📋 ICS-Definition</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.5">"Symptom des <strong>unfreiwilligen Urinverlusts jeglichen Ausmaßes</strong>."</div>
  </div>

  <div style="background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.3);border-radius:12px;padding:14px 16px;margin-top:14px">
    <div style="font-weight:700;color:#fbbf24;margin-bottom:6px">⚠️ Wichtig zu wissen</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.6">Harninkontinenz ist <strong>keine Erkrankung, sondern ein Symptom</strong>! Die Ursache muss differentialdiagnostisch abgeklärt werden.</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Prävalenz in Deutschland</div></div>
  <p class="lekt-prose">Harninkontinenz ist ein <strong>häufiges Problem</strong>, das mit dem Alter <strong>deutlich zunimmt</strong>. Sie betrifft <strong>Frauen häufiger als Männer</strong>.</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">📊 Häufigkeitsverteilung</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px;text-align:center">
        <div style="font-size:1.2rem;font-weight:700;color:#fb7185">4,5–53%</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">👩 Frauen gesamt</div>
      </div>
      <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:12px;text-align:center">
        <div style="font-size:1.2rem;font-weight:700;color:#60a5fa">1,6–24%</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">👨 Männer gesamt</div>
      </div>
      <div style="background:rgba(251,113,133,.12);border:1px solid rgba(251,113,133,.3);border-radius:10px;padding:12px;text-align:center">
        <div style="font-size:1.2rem;font-weight:700;color:#fb7185">~27/100</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Frauen > 60 J.</div>
      </div>
      <div style="background:rgba(96,165,250,.12);border:1px solid rgba(96,165,250,.3);border-radius:10px;padding:12px;text-align:center">
        <div style="font-size:1.2rem;font-weight:700;color:#60a5fa">~18/100</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Männer > 60 J.</div>
      </div>
    </div>
  </div>

  <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:12px 14px;margin-top:14px">
    <div style="font-weight:700;color:#ef4444;margin-bottom:4px">🤫 Tabuthema</div>
    <div style="font-size:.82rem;color:var(--ink2);line-height:1.5">Die tatsächlichen Zahlen liegen <strong>deutlich höher</strong> — viele Betroffene verschweigen das Problem aus Scham!</div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Harninkontinenz ist ein <strong>Symptom</strong>, kein eigenständiges Krankheitsbild. Sie ist häufig (besonders bei älteren Frauen) und oft unterschätzt wegen Scham.
</div>
</div></div>`,

    'Inkontinenzformen im Detail': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#78350f,#92400e,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,191,36,.2);border:1px solid rgba(251,191,36,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(253,224,71,.95)">💧 Niere · Lektion 5</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Inkontinenzformen im Detail</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Belastung, Drang, Retention, Reflex — Differenzialdiagnose & Therapie</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Belastungsinkontinenz (Stressinkontinenz)</div></div>
  <div class="lekt-zusammen" style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185">
    <strong>Definition:</strong> Unfreiwilliger Harnabgang bei <strong>körperlicher Belastung — ohne Harndrang</strong>.
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">📊 Schweregrade</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
      <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px">
        <strong style="color:#22c55e">Grad I</strong> <span style="color:var(--ink2);font-size:.85rem">— Harnverlust bei Husten, Niesen, Lachen</span>
      </div>
      <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:8px;padding:10px">
        <strong style="color:#fbbf24">Grad II</strong> <span style="color:var(--ink2);font-size:.85rem">— Harnverlust bei Heben, Treppensteigen, Aufstehen</span>
      </div>
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px">
        <strong style="color:#ef4444">Grad III</strong> <span style="color:var(--ink2);font-size:.85rem">— Harnverlust <strong>im Liegen</strong></span>
      </div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
    <div style="background:rgba(251,113,133,.05);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">👩 Frauen</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Beckenbodenschwäche nach Geburten, Bindegewebsschwäche, Hormonmangel post menopause</div>
    </div>
    <div style="background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.8rem;margin-bottom:4px">👨 Männer</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Prostata-OP (Verletzung des Verschlussmuskels)</div>
    </div>
  </div>
  <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px;margin-top:12px">
    <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:6px">💊 Therapie</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6"><strong>Konservativ:</strong> Beckenbodentraining, Pessartherapie, Biofeedbacktraining<br><strong>Operativ:</strong> bei Blasensenkung, Gebärmutter-/Scheidenvorfall</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Dranginkontinenz (Überaktive Blase)</div></div>
  <div class="lekt-zusammen" style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa">
    <strong>Definition:</strong> "Überaktivität der Blasenmuskulatur" — Blase kann Harn nicht mehr speichern trotz intakten Verschlussmechanismus. Leichte Form = <strong>Reizblase</strong>.
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
    <div style="background:rgba(167,139,250,.05);border:1px solid rgba(167,139,250,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.8rem;margin-bottom:4px">⚠️ Ursachen</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Neurologische Erkrankungen: <strong>Schlaganfall, Parkinson, MS, Alzheimer, Diabetes mellitus, Epilepsie</strong>. Auch: Blasensteine, Blasenentzündung, Bestrahlung, psychisch.</div>
    </div>
    <div style="background:rgba(251,113,133,.05);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">🚨 Symptome</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5"><strong>Starker, kaum unterdrückbarer Harndrang</strong>. Bei Reizblase noch unterdrückbar.</div>
    </div>
  </div>
  <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px;margin-top:12px">
    <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:6px">💊 Therapie</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6">Blasentraining, medikamentös (blasenberuhigende Medikamente), Elektrostimulation</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Chronische Harnretention (Überlauf)</div></div>
  <div class="lekt-zusammen" style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa">
    <strong>Definition:</strong> Überdehnung des Blasenmuskels durch Restharn → "Überlaufen" → unwillkürlicher Verlust kleiner Harnmengen. <strong>Betrifft v.a. Männer!</strong>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
    <div style="background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.8rem;margin-bottom:4px">⚠️ Ursachen</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5"><strong>Prostatavergrößerung (BPH)</strong>, Blasenstein, Blasentumor, Urethrastriktur, Diabetes, Psychopharmaka, Bandscheibenvorfall</div>
    </div>
    <div style="background:rgba(251,113,133,.05);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">🚨 Symptome</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Verlängerte Entleerungszeit, Startschwierigkeiten, schwacher Strahl, <strong>Nachträufeln</strong>, häufige kleine Mengen</div>
    </div>
  </div>
  <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px;margin-top:12px">
    <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:6px">💊 Therapie</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6"><strong>Operative Entfernung</strong> des Abflusshindernisses. Überbrückend: SPK, DK, <strong>ISK</strong></div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Reflexinkontinenz (Neurogene Inkontinenz)</div></div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>Definition:</strong> Störung der blasensteuernden Nerven → unkontrollierter Harnverlust. <strong>⚠️ Erhöhter Blasendruck schädigt langfristig die Nieren!</strong>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">
    <div style="background:rgba(239,68,68,.05);border:1px solid rgba(239,68,68,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#ef4444;font-size:.8rem;margin-bottom:4px">⚠️ Ursachen</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5"><strong>Rückenmarkschädigung, Querschnittslähmung</strong>, Tumore am Rückenmark, MS, Parkinson</div>
    </div>
    <div style="background:rgba(251,113,133,.05);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">🚨 Symptome</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Keine willentliche Entleerung möglich. Blase nicht wahrnehmbar voll. <strong>Zufallsreiz (Husten) löst Entleerung aus</strong></div>
    </div>
  </div>
  <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px;margin-top:12px">
    <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:6px">💊 Therapie</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6"><strong>ISK</strong> zur restharnfreien Entleerung, medikamentöse Drucksenkung, Elektrostimulation</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Weitere Formen</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem">🔀 Misch-Harninkontinenz</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Kombination aus <strong>Drang- und Belastungsinkontinenz</strong></div>
    </div>
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.85rem">🚿 Extraurethrale Inkontinenz</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Harnabgang unter Umgehung der Harnröhre (Fistelgänge, ektope Harnleiter) — <strong>nur operativ behandelbar!</strong></div>
    </div>
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.85rem">♿ Funktionelle Inkontinenz</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Harndrangkontrolle intakt, aber Gang zur Toilette unmöglich (<strong>Demenz, eingeschränkte Mobilität, Depression</strong>)</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Die 4 Hauptformen sind <strong>Belastung, Drang, Retention, Reflex</strong>. Die Differenzialdiagnose ist entscheidend für die richtige Therapie!
</div>
</div></div>`,

    'Expertenstandard & Pflege bei Inkontinenz': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#78350f,#92400e,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,191,36,.2);border:1px solid rgba(251,191,36,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(253,224,71,.95)">💧 Niere · Lektion 6</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Expertenstandard & Pflege</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Nationaler Expertenstandard zur Förderung der Harnkontinenz</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Das Ziel des Expertenstandards</div></div>
  <div style="background:rgba(34,197,94,.08);border:1.5px solid rgba(34,197,94,.3);border-radius:12px;padding:16px;margin-top:8px">
    <div style="font-weight:700;color:#22c55e;margin-bottom:6px">🎯 Grundprinzip</div>
    <p style="font-size:.9rem;color:var(--ink);line-height:1.6;margin:0">Der Nationale Expertenstandard geht davon aus, dass bei <strong>jedem Pflegebedürftigen</strong> Harnkontinenz <strong>erhalten oder gefördert werden kann</strong>.</p>
    <p style="font-size:.82rem;color:var(--ink2);margin-top:8px;line-height:1.5">Eine identifizierte Inkontinenz wird <strong>beseitigt, reduziert oder kompensiert</strong>.</p>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Die 6 Schritte des Expertenstandards</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(251,191,36,.05);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem;margin-bottom:3px">1️⃣ Identifikation</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Erkennen der Harninkontinenz und der jeweiligen Form</div>
    </div>
    <div style="background:rgba(251,191,36,.05);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem;margin-bottom:3px">2️⃣ Einschätzung</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Differenzierte Einschätzung → Erstellung eines <strong>Kontinenzprofils</strong></div>
    </div>
    <div style="background:rgba(251,191,36,.05);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem;margin-bottom:3px">3️⃣ Beratung</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Beratung zu formspezifischen Maßnahmen zur Kontinenzförderung</div>
    </div>
    <div style="background:rgba(251,191,36,.05);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem;margin-bottom:3px">4️⃣ Planung</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Planung der Maßnahmen und Ziele</div>
    </div>
    <div style="background:rgba(251,191,36,.05);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem;margin-bottom:3px">5️⃣ Durchführung</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Koordination und Umsetzung der geplanten Maßnahmen</div>
    </div>
    <div style="background:rgba(251,191,36,.05);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.85rem;margin-bottom:3px">6️⃣ Evaluation</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Bewertung anhand des angestrebten Kontinenzprofils</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Anamnese-Fragen bei Inkontinenz</div></div>
  <p class="lekt-prose">Wichtige Fragen laut Expertenstandard zur differenzierten Einschätzung:</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:.85rem;color:var(--ink)">🔵 Verlieren Sie <strong>ungewollt Harn</strong>?</div>
    </div>
    <div style="background:rgba(251,113,133,.05);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:.85rem;color:var(--ink)">🔴 Verlieren Sie Harn beim <strong>Husten, Lachen oder Heben</strong>? <span style="font-size:.72rem;color:var(--ink3)">→ Belastungsinkontinenz</span></div>
    </div>
    <div style="background:rgba(167,139,250,.05);border:1px solid rgba(167,139,250,.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:.85rem;color:var(--ink)">🟣 Verlieren Sie Harn <strong>auf dem Weg zur Toilette</strong>? <span style="font-size:.72rem;color:var(--ink3)">→ Dranginkontinenz</span></div>
    </div>
    <div style="background:rgba(251,191,36,.05);border:1px solid rgba(251,191,36,.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:.85rem;color:var(--ink)">🟡 Tragen Sie <strong>Einlagen/Vorlagen</strong>?</div>
    </div>
    <div style="background:rgba(167,139,250,.05);border:1px solid rgba(167,139,250,.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:.85rem;color:var(--ink)">🟣 Verspüren Sie <strong>starken, nicht unterdrückbaren Harndrang</strong>?</div>
    </div>
    <div style="background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:10px 12px">
      <div style="font-size:.85rem;color:var(--ink)">🔵 Müssen Sie <strong>pressen</strong>, um die Blase zu entleeren? <span style="font-size:.72rem;color:var(--ink3)">→ Retention</span></div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Therapeutische Maßnahmen</div></div>
  <div style="display:grid;grid-template-columns:1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.05);border:1px solid rgba(239,68,68,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#ef4444;font-size:.85rem;margin-bottom:6px">💊 Medizinisch</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Medikamentöse Therapie, operative Verfahren</div>
    </div>
    <div style="background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:6px">👩‍⚕️ Pflegemanagement</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Verhaltenstherapie (<strong>Toilettentraining</strong>), Hilfsmittelanpassung und -schulung</div>
    </div>
    <div style="background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.2);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.85rem;margin-bottom:6px">🏋️ Physikalisch</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5"><strong>Beckenbodentraining</strong>, Biofeedbacktraining, Elektrostimulation</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Assessment-Faktoren im Überblick</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🔍 Was wird erfasst?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.8">
      <li>Mobilität und Orientiertheit</li>
      <li>Verständigung und Grad der Selbstpflege</li>
      <li><strong>Akzeptanz</strong> der Inkontinenz</li>
      <li>Therapiebereitschaft</li>
      <li>Trink- und Ausscheidungsgewohnheiten</li>
      <li>Medikation</li>
      <li><strong>Psychosoziale Auswirkungen</strong></li>
    </ul>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Der Expertenstandard folgt 6 Schritten — von der <strong>Identifikation</strong> über die <strong>Beratung</strong> bis zur <strong>Evaluation</strong>. Das Ziel: Kontinenz erhalten oder fördern bei <strong>jedem</strong> Pflegebedürftigen.
</div>
</div></div>`,

  },

  gefaesse: {

    'Aufbau & Klappen der Gefäße': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🩸 Gefäße · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Aufbau & Klappen der Gefäße</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Schichten der Gefäßwand, Venenklappen und der venöse Rücktransport</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Wandaufbau der Blutgefäße</div></div>
  <p class="lekt-prose">Die Wand der Blutgefäße besteht von <strong>innen nach außen</strong> aus drei Schichten:</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🔬 Die 3 Schichten</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
      <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#60a5fa">1. Intima</div>
        <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Glatte Zellschicht innen (Endothel)</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#fb7185">2. Media</div>
        <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Glatte Muskelschicht und elastische Fasern</div>
      </div>
      <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#fbbf24">3. Adventitia</div>
        <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Lockeres Bindegewebe — Verbindung zum umliegenden Gewebe</div>
      </div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Der Wandaufbau ist bei Arterien und Venen prinzipiell gleich — die Schichten unterscheiden sich jedoch in <strong>Dicke und Zusammensetzung</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Bauunterschiede Venen vs. Arterien</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.95rem;margin-bottom:6px">🩸 Arterien</div>
      <ul style="margin:0 0 0 16px;color:var(--ink2);font-size:.82rem;line-height:1.7">
        <li><strong>Kleiner</strong> Gefäßdurchmesser</li>
        <li><strong>Dicke</strong> Muskelschicht</li>
        <li>Halten dem hohen Druck stand</li>
      </ul>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:6px">💧 Venen</div>
      <ul style="margin:0 0 0 16px;color:var(--ink2);font-size:.82rem;line-height:1.7">
        <li><strong>Größerer</strong> Gefäßdurchmesser</li>
        <li><strong>Dünne</strong> Muskelschicht</li>
        <li>Besitzen <strong>Venenklappen</strong></li>
      </ul>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24"><strong>⚠️ Wichtig:</strong> Nicht alle Venen besitzen Klappen. <strong>Venenklappenlos</strong> sind die Hohlvenen, die Lungenvenen und die Hirnvenen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Funktion der Venenklappen</div></div>
  <p class="lekt-prose">Venenklappen sind <strong>taschenförmige Aussackungen der Intima</strong> und wirken wie Ventile, die den Blutstrom nur in Richtung Herz zulassen.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:4px">💪 Muskelkontraktion</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Blut wird nach oben Richtung Herz gepresst. Die untere geschlossene Klappe verhindert den Rückstrom.</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.85rem;margin-bottom:4px">😌 Muskelentspannung</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Blut kann von unten durch die wieder geöffnete Klappe nachfließen.</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>🩺 Pathologie:</strong> Sind die Venen erweitert, schließen die Klappen nicht mehr vollständig (<strong>Klappeninsuffizienz</strong>). Blut strömt in die Peripherie zurück. Bei längerem Bestehen entstehen <strong>Varikose</strong> (Krampfadern).
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Venöser Rücktransport zum Herz — die 4 Mechanismen</div></div>
  <p class="lekt-prose">Venenklappen unterstützen <strong>vier Mechanismen</strong>, durch die das Blut <strong>gegen die Schwerkraft</strong> zum Herzen transportiert wird:</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">1️⃣ Arterio-venöse Kopplung</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Venen verlaufen häufig mit Arterien (Begleitvenen). Die Druckwelle der Arterien <strong>komprimiert die Venen</strong> und treibt das Blut voran.</div>
    </div>
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#fb7185;font-size:.88rem">2️⃣ Muskelpumpe</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Wirkt v.a. in den Beinen. Die Beinmuskulatur komprimiert bei Kontraktion die Venen.</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#fbbf24;font-size:.88rem">3️⃣ Sogwirkung des rechten Vorhofs</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Während der <strong>Systole</strong> verschiebt sich die Ventilebene zur Herzspitze → Sog in den Vorhöfen. In der <strong>Diastole</strong> strömt das Blut in die erschlafften Ventrikel.</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem">4️⃣ Unterdruck bei der Inspiration</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Bei der Einatmung erweitert sich der Thoraxinnenraum, der Venendruck fällt — die Venen erweitern sich.</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.1);border-left:3px solid #ef4444">
    <strong>🏥 Klinische Bedeutung:</strong> Bewegungsmangel (Bettlägerigkeit, langes Sitzen) schwächt die Muskelpumpe → <strong>erhöhtes Thromboserisiko</strong>. <strong>Mobilisation</strong> ist eine zentrale pflegerische Maßnahme!
  </div>
</div>
</div></div>`,

    'Anatomie der Venen — Bein, Arm, Hals': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🩸 Gefäße · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Anatomie der Venen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Bein, Arm und Hals — Venensysteme im Detail</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Untere Hohlvene (V. cava inferior)</div></div>
  <p class="lekt-prose">Die <strong>V. cava inferior</strong> sammelt das Blut aller Organe der <strong>unteren Körperhälfte</strong> und bringt es zum <strong>rechten Atrium</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🔗 Entstehung</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:6px">Sie entsteht aus den beiden Beckenvenen (<strong>V. iliaca communis</strong>). Diese erhält Blut aus:</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#fb7185;font-size:.8rem">V. iliaca interna</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:3px">Genitalregion</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#fb7185;font-size:.8rem">V. iliaca externa</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:3px">Bein</div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Venensysteme des Beins</div></div>
  <p class="lekt-prose">Am Bein existieren <strong>zwei Venensysteme</strong>, verbunden durch Kollateralen:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem;margin-bottom:4px">🔵 Tiefes System</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Erhält Blut vom oberflächlichen System</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:12px;padding:12px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem;margin-bottom:4px">🟢 Oberflächliches System</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Versorgung der Haut</div>
    </div>
  </div>

  <div class="lekt-card" style="margin-top:14px">
    <div class="lekt-card-label" style="color:#60a5fa">🔵 Tiefes Venensystem — Fuß → Becken</div>
    <div style="background:rgba(96,165,250,.05);border-radius:10px;padding:12px;margin-top:8px;font-size:.85rem;color:var(--ink2);line-height:2">
      <strong>V. tibialis ant./post.</strong> (Schienbeinvenen) → <strong>V. poplitea</strong> (Kniekehlenvene) → <strong>V. femoralis</strong> (Oberschenkelvene) → <strong>V. iliaca externa</strong>
    </div>
  </div>

  <div class="lekt-card" style="margin-top:14px">
    <div class="lekt-card-label" style="color:#22c55e">🟢 Oberflächliches Venensystem</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
      <div style="background:rgba(34,197,94,.05);border-left:3px solid #22c55e;border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#22c55e;font-size:.82rem">V. saphena parva</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Wadenbeinseite (kleiner Zeh) → V. poplitea (kurze Strecke)</div>
      </div>
      <div style="background:rgba(34,197,94,.05);border-left:3px solid #22c55e;border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#22c55e;font-size:.82rem">V. saphena magna</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Schienbeinseite (großer Zeh) → V. femoralis (lange Strecke)</div>
      </div>
    </div>
  </div>

  <div class="lekt-zusammen">
    <strong>🩺 Klinischer Hinweis:</strong> Die <strong>V. saphena magna</strong> wird häufig als <strong>Bypass</strong> verwendet. Heute werden für koronare Bypässe jedoch bevorzugt arterielle Gefäße (z.B. <strong>A. mammaria interna</strong>) eingesetzt — höhere langfristige Erfolgsraten!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Obere Hohlvene & Armvenen</div></div>
  <p class="lekt-prose">Die <strong>V. cava superior</strong> leitet das venöse Blut der <strong>oberen Extremität</strong> (Arme und Kopf) zum Herzen. Sie entsteht aus dem Zusammenschluss der <strong>linken und rechten V. brachiocephalica</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🩸 Weg der Armvenen</div>
    <div style="background:rgba(251,113,133,.05);border-radius:10px;padding:12px;margin-top:8px;font-size:.85rem;color:var(--ink2);line-height:2">
      <strong>V. radialis + V. ulnaris</strong> → <strong>V. brachialis</strong> → <strong>V. axillaris</strong> → <strong>V. subclavia</strong> → <strong>V. brachiocephalica</strong> → V. cava superior
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Halsbereich — Arterien und Venen</div></div>
  <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:14px;margin-top:8px">
    <div style="font-weight:700;color:#ef4444;margin-bottom:8px">🩸 Arterien</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6;margin-bottom:8px">Die <strong>A. carotis communis</strong> (Halsschlagader) teilt sich in:</p>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:8px 10px">
        <div style="font-weight:700;color:#ef4444;font-size:.8rem">A. carotis externa</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:2px">Versorgt den äußeren Schädelbereich (Gesicht, Kopfhaut)</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:8px 10px">
        <div style="font-weight:700;color:#ef4444;font-size:.8rem">A. carotis interna</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:2px">Versorgt das Gehirn. Hier liegt das <strong>Glomus caroticum</strong> mit Chemorezeptoren (O₂, CO₂, pH)</div>
      </div>
    </div>
  </div>

  <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:14px;margin-top:12px">
    <div style="font-weight:700;color:#60a5fa;margin-bottom:8px">💧 Venen</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:8px 10px">
        <div style="font-weight:700;color:#60a5fa;font-size:.8rem">V. jugularis interna</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:2px">Leitet Blut aus dem Gehirn ab — verläuft mit der A. carotis</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:8px 10px">
        <div style="font-weight:700;color:#60a5fa;font-size:.8rem">V. jugularis externa</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:2px">Oberflächlich — <strong>bei Herzinsuffizienz als gestaute Halsvene sichtbar</strong>!</div>
      </div>
    </div>
  </div>

  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die V. jugularis interna bildet mit der V. subclavia den <strong>Venenwinkel (Angulus venosus)</strong> und vereinigt sich zur <strong>V. brachiocephalica</strong> (auch V. anonyma genannt).
  </div>
</div>
</div></div>`,

    'ZVK & Pfortaderkreislauf': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🩸 Gefäße · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">ZVK & Pfortaderkreislauf</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Zentraler Venenkatheter und das portale System</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist ein ZVK?</div></div>
  <p class="lekt-prose">Ein <strong>ZVK</strong> (Zentraler Venenkatheter) wird in eine größere Körpervene eingeführt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🎯 Indikationen</div>
    <ul style="margin:8px 0 0 16px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Intravenöse <strong>Medikamenten- und Infusionsgabe</strong></li>
      <li>Messung des <strong>zentralen Venendrucks (ZVD)</strong></li>
    </ul>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Punktionsorte</div></div>
  <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.25);border-radius:12px;padding:14px;margin-top:8px">
    <div style="font-weight:700;color:#fb7185;margin-bottom:8px">🎯 Häufigste Punktionsorte</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#fb7185;font-size:.85rem">V. jugularis interna</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#fb7185;font-size:.85rem">V. subclavia</div>
      </div>
    </div>
    <div style="margin-top:10px;font-size:.78rem;color:var(--ink2)"><strong>Seltener verwendet:</strong> V. jugularis externa, V. brachiocephalica, V. femoralis</div>
  </div>

  <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px;margin-top:12px">
    <div style="font-weight:700;color:#60a5fa;margin-bottom:8px">📍 Periphere Anlage (PICC)</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#60a5fa;font-size:.82rem">V. cephalica</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:2px">Vom Handrücken über Bizeps direkt in die V. subclavia</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:10px">
        <div style="font-weight:700;color:#60a5fa;font-size:.82rem">V. basilica</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-top:2px">Vom Handrücken über die Innenseite in die V. brachialis</div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">⚠️ Wichtige pflegerische Hinweise</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#ef4444;font-size:.85rem;margin-bottom:4px">🚨 Bevorzugt RECHTS!</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Links mündet der <strong>Ductus thoracicus</strong> (Lymphbahn) in den Venenwinkel → Verletzungsgefahr</div>
    </div>
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#fb7185;font-size:.85rem;margin-bottom:4px">💧 Bei Volumenmangel</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Die V. jugularis kann kollabiert sein → V. subclavia besser geeignet</div>
    </div>
    <div style="background:rgba(239,68,68,.12);border:1.5px solid #ef4444;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#ef4444;font-size:.85rem;margin-bottom:4px">⚠️ Gefahr bei V. subclavia: PNEUMOTHORAX!</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Luftansammlung im Pleuraspalt → Lungenkollaps</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.85rem;margin-bottom:4px">✅ Vorteile V. brachiocephalica</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Gerader Verlauf, großer Durchmesser, <strong>keine Venenklappen</strong>, kürzester Weg zum rechten Herzen</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Der Pfortaderkreislauf</div></div>
  <p class="lekt-prose">Der Pfortaderkreislauf sammelt das venöse Blut aus dem <strong>gesamten Magen-Darm-Trakt</strong> und der <strong>Milz</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🔄 Der Weg des Blutes</div>
    <div style="background:rgba(251,191,36,.05);border-radius:10px;padding:14px;margin-top:8px;font-size:.88rem;color:var(--ink);line-height:2;text-align:center">
      <strong>Magen-Darm + Milz</strong><br>↓<br><strong>V. portae (Pfortader)</strong><br>↓<br><strong>LEBER</strong> 🧴<br>↓<br><strong>V. cava inferior</strong>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa">
    <strong>💡 Besonderheit:</strong> Der Pfortaderkreislauf ist ein <strong>portales System</strong> — das Blut durchläuft <strong>zwei Kapillarbetten hintereinander</strong> (Darm/Milz → Leber → V. cava inferior). So kann die Leber Nährstoffe und Toxine verarbeiten, bevor sie in den systemischen Kreislauf gelangen.
  </div>
</div>
</div></div>`,

  },

  herz: {

    'Das Herz — Lage, Größe & Funktion': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🫀 Herz · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Das Herz — Lage, Größe & Funktion</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Das muskuläre Hohlorgan — zentrale Pumpe des Körpers</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist das Herz?</div></div>
  <p class="lekt-prose">Das <strong>Herz</strong> ist ein muskuläres Hohlorgan und arbeitet als zentrale <strong>Pumpe</strong> des Herz-Kreislauf-Systems. Es liegt im <strong>Thorax</strong> hinter dem Brustbein (<strong>retrosternal</strong>) und wird vom Herzbeutel (<strong>Perikard</strong>) umgeben.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">📍 Die wichtigsten Fakten</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">📍 Lage</div>
        <div style="font-size:.78rem;color:var(--ink2);line-height:1.5"><strong>2/3 links</strong> und 1/3 rechts im Brustkorb</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">✊ Größe</div>
        <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Ungefähr so groß wie die <strong>Faust</strong> des Besitzers</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">⚖️ Gewicht</div>
        <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">ca. <strong>250 g</strong> bei Frauen, <strong>300 g</strong> bei Männern</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.2);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.8rem;margin-bottom:4px">⚙️ Funktion</div>
        <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Transport von sauerstoffreichem & sauerstoffarmem Blut</div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Arbeitsweise</div></div>
  <p class="lekt-prose">Das Herz arbeitet durch eine <strong>rhythmische Pumpbewegung</strong> mit zwei Hauptphasen:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#ef4444;font-size:.88rem">💪 Systole</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Auswurfphase — Blut wird gepumpt</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem">😌 Diastole</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Füllungsphase — Kammern füllen sich</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Das Herz schlägt etwa <strong>100.000 Mal pro Tag</strong> und pumpt mehrere tausend Liter Blut durch den Körper!
</div>
</div></div>`,

    'Aufbau des Herzens': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🫀 Herz · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Aufbau des Herzens</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Vier Hohlräume — getrennt durch das Septum</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Die 4 Herzräume</div></div>
  <p class="lekt-prose">Das Herz besteht aus <strong>vier Hohlräumen</strong> und wird durch das <strong>Septum</strong> in eine rechte und linke Herzhälfte getrennt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🫀 Die 4 Räume</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#60a5fa;font-size:.85rem;margin-bottom:4px">🔵 Rechter Vorhof</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Nimmt <strong>sauerstoffarmes</strong> Blut aus dem Körper auf</div>
      </div>
      <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#60a5fa;font-size:.85rem;margin-bottom:4px">🔵 Rechte Kammer</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Pumpt Blut in den <strong>Lungenkreislauf</strong></div>
      </div>
      <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#ef4444;font-size:.85rem;margin-bottom:4px">🔴 Linker Vorhof</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Empfängt <strong>sauerstoffreiches</strong> Blut aus der Lunge</div>
      </div>
      <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#ef4444;font-size:.85rem;margin-bottom:4px">🔴 Linke Kammer</div>
        <div style="font-size:.75rem;color:var(--ink2);line-height:1.5">Pumpt Blut in den <strong>Körperkreislauf</strong></div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Das Septum</div></div>
  <p class="lekt-prose">Das <strong>Septum</strong> ist die Herzscheidewand zwischen rechter und linker Herzhälfte. Es trennt das sauerstoffarme vom sauerstoffreichen Blut.</p>
</div>

<div class="lekt-zusammen">
  <strong>🩺 Pflegerelevanz:</strong> Die <strong>linke Herzkammer</strong> besitzt eine <strong>dickere Muskelschicht</strong>, weil sie gegen den höheren Druck des Körperkreislaufs arbeiten muss!
</div>
</div></div>`,

    'Herzklappen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🫀 Herz · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Herzklappen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Segel- und Taschenklappen — gerichteter Blutfluss</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Aufgabe der Herzklappen</div></div>
  <p class="lekt-prose">Die Herzklappen sorgen für einen <strong>gerichteten Blutfluss</strong> im Herzen. Man unterscheidet <strong>Segelklappen</strong> und <strong>Taschenklappen</strong>.</p>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Segelklappen</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem;margin-bottom:4px">🔵 Trikuspidalklappe</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Zwischen <strong>rechtem Vorhof</strong> und <strong>rechter Kammer</strong></div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#ef4444;font-size:.88rem;margin-bottom:4px">🔴 Mitralklappe</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Zwischen <strong>linkem Vorhof</strong> und <strong>linker Kammer</strong></div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Taschenklappen</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem;margin-bottom:4px">🔵 Pulmonalklappe</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Zwischen <strong>rechter Kammer</strong> und <strong>Lungenarterie</strong></div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#ef4444;font-size:.88rem;margin-bottom:4px">🔴 Aortenklappe</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Zwischen <strong>linker Kammer</strong> und <strong>Aorta</strong></div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Stabilisierung der Segelklappen</div></div>
  <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px;margin-top:8px">
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6">Die <strong>Papillarmuskeln</strong> und <strong>Chordae tendineae</strong> (Sehnenfäden) verhindern das Zurückschlagen der Segelklappen während der Systole.</p>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong><br>
  • <strong>Segelklappen</strong> liegen zwischen Vorhof und Kammer<br>
  • <strong>Taschenklappen</strong> liegen zwischen Kammer und Gefäß
</div>
</div></div>`,

    'Systole & Diastole': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🫀 Herz · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Systole & Diastole</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die zwei Hauptphasen des Herzzyklus</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Systole — Auswurfphase</div></div>
  <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px;margin-top:8px">
    <div style="font-weight:700;color:#ef4444;font-size:.95rem;margin-bottom:8px">💪 Was passiert?</div>
    <ul style="margin:0 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.8">
      <li><strong>Anspannungsphase:</strong> Herzmuskel zieht sich zusammen</li>
      <li><strong>Austreibungsphase:</strong> Blut wird in die Gefäße gepumpt</li>
      <li>Blut wird aus den Kammern <strong>in die Aorta und Lungenarterie</strong> gepresst</li>
    </ul>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Diastole — Füllungsphase</div></div>
  <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px;margin-top:8px">
    <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:8px">😌 Was passiert?</div>
    <ul style="margin:0 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.8">
      <li><strong>Entspannungsphase:</strong> Herzmuskel erschlafft</li>
      <li><strong>Füllungsphase:</strong> Kammern füllen sich mit Blut</li>
      <li>Vorbereitung auf den nächsten Auswurf</li>
    </ul>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>🩺 Klinik:</strong> Beim Blutdruck <strong>120/80 mmHg</strong> entspricht der obere Wert dem <strong>systolischen</strong> Druck (Auswurf), der untere dem <strong>diastolischen</strong> Druck (Füllung).
</div>
</div></div>`,

    'Herzhäute & Herzskelett': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🫀 Herz · Lektion 5</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Herzhäute & Herzskelett</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die Schichten des Herzens — von innen nach außen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Die 4 Herzschichten</div></div>
  <p class="lekt-prose">Das Herz besitzt <strong>mehrere Schichten</strong> und ein stabiles Bindegewebsgerüst.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem">1️⃣ Endokard</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Innere Herzschicht — kleidet das Herz von innen aus</div>
    </div>
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.88rem">2️⃣ Myokard</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Herzmuskelschicht</strong> — die dickste und wichtigste Schicht</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.88rem">3️⃣ Epikard</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Äußere Herzschicht</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">4️⃣ Perikard</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Herzbeutel</strong> — umhüllt das ganze Herz</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Das Herzskelett</div></div>
  <p class="lekt-prose">Das <strong>Herzskelett</strong> ist eine Bindegewebsstruktur, die die <strong>Herzklappen verankert</strong> und stabilisiert.</p>
</div>

<div class="lekt-zusammen">
  <strong>🧠 Eselsbrücke:</strong> <strong>Endo → Myo → Epi → Peri</strong><br>
  (innen nach außen)
</div>
</div></div>`,

    'Windkesselfunktion & Puls': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🫀 Herz · Lektion 6</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Windkesselfunktion & Puls</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wie die Aorta einen kontinuierlichen Blutfluss erzeugt</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist die Windkesselfunktion?</div></div>
  <p class="lekt-prose">Die elastische <strong>Aorta</strong> speichert während der <strong>Systole</strong> Energie und gibt sie in der <strong>Diastole</strong> wieder ab. Dadurch entsteht ein <strong>kontinuierlicher Blutfluss</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🔄 So funktioniert es</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px 12px">
        <strong style="color:#ef4444">Systole:</strong> <span style="color:var(--ink2);font-size:.85rem">Aorta dehnt sich → Energie wird gespeichert</span>
      </div>
      <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px">
        <strong style="color:#60a5fa">Diastole:</strong> <span style="color:var(--ink2);font-size:.85rem">Aorta zieht sich zusammen → Rückstoß treibt Blut weiter</span>
      </div>
      <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px">
        <strong style="color:#22c55e">Ergebnis:</strong> <span style="color:var(--ink2);font-size:.85rem">Kontinuierlicher Blutstrom statt Stoßweise</span>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Der Puls</div></div>
  <p class="lekt-prose">Der <strong>Puls</strong> ist die <strong>tastbare Druckwelle</strong>, die durch den systolischen Blutauswurf entsteht.</p>
  <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
    <li>Entsteht durch die Druckwelle der Systole</li>
    <li>Wird durch elastische Arterien fortgeleitet</li>
    <li>An Arterien <strong>tastbar</strong> (z.B. A. radialis, A. carotis)</li>
  </ul>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Der Puls entsteht durch die Druckwelle des systolischen Blutauswurfs — die Aorta wirkt dabei als <strong>elastischer Windkessel</strong>.
</div>
</div></div>`,

  },

  ekg: {

    'Autonomie & Schrittmacherzellen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">⚡ EKG · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Autonomie & Schrittmacherzellen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wie das Herz seine eigenen Impulse erzeugt</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Autonomie des Herzens</div></div>
  <p class="lekt-prose">Das Herz besitzt die Fähigkeit, elektrische Impulse <strong>selbstständig zu erzeugen</strong>. Diese Eigenschaft nennt man <strong>Autonomie des Herzens</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚡ Die 2 Systeme</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
      <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.88rem">🎯 Erregungsbildungssystem</div>
        <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Erzeugt die elektrischen Impulse</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#fb7185;font-size:.88rem">📡 Erregungsleitungssystem</div>
        <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Leitet die Impulse weiter</div>
      </div>
    </div>
    <div style="margin-top:10px;font-size:.78rem;color:var(--ink2);font-style:italic">Beide Systeme bestehen aus spezialisierten Herzmuskelzellen. Das vegetative Nervensystem beeinflusst nur die Herzleistung (Frequenz und Kraft).</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Zelltypen des Erregungssystems</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fbbf24;font-size:.9rem;margin-bottom:4px">⚡ Schrittmacherzellen</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Erzeugen <strong>spontan</strong> elektrische Impulse</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.9rem;margin-bottom:4px">💪 Arbeitsmyokard</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Kontrahiert nach Erregung</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem;margin-bottom:4px">⬆️ Depolarisation</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Elektrische <strong>Aktivierung</strong> der Zellen</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.9rem;margin-bottom:4px">⬇️ Repolarisation</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Elektrische <strong>Rückbildung</strong></div>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>Merke:</strong> Das Herz kann auch <strong>ohne Verbindung zum Gehirn</strong> selbstständig schlagen — z.B. nach einer Transplantation!
</div>
</div></div>`,

    'Erregungsleitungssystem': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">⚡ EKG · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Erregungsleitungssystem</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Sinusknoten · AV-Knoten · His-Bündel · Purkinje-Fasern</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Sinusknoten — der Taktgeber</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🥇 Primärer Schrittmacher</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
      <div style="background:rgba(251,191,36,.08);border-radius:8px;padding:10px">
        <div style="font-size:.72rem;color:var(--ink2)">📍 Lage</div>
        <div style="font-weight:700;color:#fbbf24;font-size:.85rem">Rechter Vorhof</div>
      </div>
      <div style="background:rgba(251,191,36,.08);border-radius:8px;padding:10px">
        <div style="font-size:.72rem;color:var(--ink2)">⏱️ Frequenz</div>
        <div style="font-weight:700;color:#fbbf24;font-size:.85rem">60–80/min</div>
      </div>
    </div>
    <div style="margin-top:10px;font-size:.8rem;color:var(--ink2)">Rhythmus: <strong>Sinusrhythmus</strong> (= normaler Herzrhythmus)</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">AV-Knoten — die Verzögerung</div></div>
  <p class="lekt-prose">Der AV-Knoten <strong>verzögert</strong> die Weiterleitung der elektrischen Erregung.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🥈 Sekundärer Schrittmacher</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
      <div style="background:rgba(251,113,133,.08);border-radius:8px;padding:10px">
        <div style="font-size:.72rem;color:var(--ink2)">📍 Lage</div>
        <div style="font-weight:700;color:#fb7185;font-size:.82rem">Boden des rechten Vorhofs</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border-radius:8px;padding:10px">
        <div style="font-size:.72rem;color:var(--ink2)">⏱️ Verzögerung</div>
        <div style="font-weight:700;color:#fb7185;font-size:.82rem">60–120 ms</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border-radius:8px;padding:10px">
        <div style="font-size:.72rem;color:var(--ink2)">🔄 Eigenfrequenz</div>
        <div style="font-weight:700;color:#fb7185;font-size:.82rem">40–60/min</div>
      </div>
      <div style="background:rgba(251,113,133,.08);border-radius:8px;padding:10px">
        <div style="font-size:.72rem;color:var(--ink2)">⚡ Funktion</div>
        <div style="font-weight:700;color:#fb7185;font-size:.82rem">Ersatzschrittmacher</div>
      </div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>🩺 Klinik:</strong> Ohne die Verzögerung des AV-Knotens würden Vorhöfe und Kammern <strong>gleichzeitig</strong> kontrahieren — das Herz könnte nicht effizient pumpen!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">His-Bündel & Purkinje-Fasern</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">🥉 His-Bündel</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Einziger Leitungsweg</strong> durch das Herzskelett — Eigenfrequenz: <strong>30–40/min</strong></div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">🔀 Tawara-Schenkel</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Rechter und linker Kammerschenkel</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">🌿 Purkinje-Fasern</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Leiten die Erregung <strong>in die Kammern</strong></div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Schrittmacher-Hierarchie</div></div>
  <div style="background:rgba(251,113,133,.05);border-radius:12px;padding:14px;text-align:center;font-size:.9rem;color:var(--ink);line-height:2">
    <strong style="color:#fbbf24">Sinusknoten (60–80/min)</strong><br>↓<br>
    <strong style="color:#fb7185">AV-Knoten (40–60/min)</strong><br>↓<br>
    <strong style="color:#a78bfa">His-Bündel → Tawara → Purkinje (30–40/min)</strong>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Je <strong>weiter weg</strong> vom Sinusknoten, desto <strong>langsamer</strong> die Eigenfrequenz!
  </div>
</div>
</div></div>`,

    'Das EKG': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">⚡ EKG · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Das EKG</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Elektrokardiogramm — die elektrische Aktivität sichtbar machen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist ein EKG?</div></div>
  <p class="lekt-prose">Das <strong>Elektrokardiogramm (EKG)</strong> zeichnet die <strong>elektrische Aktivität</strong> des Herzens auf — durch Elektroden auf der Haut.</p>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Die EKG-Wellen im Detail</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem">📈 P-Welle</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Vorhoferregung</strong> — Depolarisation der Vorhöfe</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#fbbf24;font-size:.95rem">➡️ PQ-Strecke</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Überleitung im <strong>AV-Knoten</strong></div>
    </div>
    <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#ef4444;font-size:.95rem">📊 QRS-Komplex</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Kammererregung</strong> — Depolarisation der Ventrikel</div>
    </div>
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#fb7185;font-size:.95rem">➡️ ST-Strecke</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Beginn der Rückbildung</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.95rem">📉 T-Welle</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Repolarisation</strong> der Kammern</div>
    </div>
    <div style="background:rgba(255,255,255,.04);border-left:3px solid rgba(255,255,255,.2);border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:var(--ink);font-size:.95rem">〰️ U-Welle</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px"><strong>Nicht immer sichtbar</strong> — Nachschwankung</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
  <strong>🩺 Klinik:</strong> Das EKG hilft bei der Diagnose von <strong>Herzrhythmusstörungen</strong> und <strong>Herzinfarkt</strong>. Ein Standard im Pflegealltag!
</div>
</div></div>`,

    'Herzfrequenz & Herzschrittmacher': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">⚡ EKG · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Herzfrequenz & Herzschrittmacher</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Normwerte, HZV und künstliche Schrittmacher</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Normwerte Herzfrequenz</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.95rem">👨 Erwachsene</div>
      <div style="font-size:1.3rem;color:var(--ink);margin-top:6px"><strong>60–80/min</strong></div>
    </div>
    <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb7185;font-size:.95rem">👶 Neugeborene</div>
      <div style="font-size:1.3rem;color:var(--ink);margin-top:6px"><strong>120–140/min</strong></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:10px 12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">🐢 Bradykardie</div>
      <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">&lt; 60/min</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:10px;padding:10px 12px">
      <div style="font-weight:700;color:#ef4444;font-size:.82rem">🐇 Tachykardie</div>
      <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">&gt; 100/min</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Herzzeitvolumen (HZV)</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🧮 Die Formel</div>
    <div style="background:rgba(251,113,133,.08);border-radius:10px;padding:14px;margin-top:8px;text-align:center;font-size:1rem;color:var(--ink);font-family:'Fraunces',serif">
      <strong>HZV = Schlagvolumen × Herzfrequenz</strong>
    </div>
    <div style="margin-top:10px;font-size:.85rem;color:var(--ink2);text-align:center">
      Normales HZV: <strong>ca. 4,9 Liter/min</strong>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Bei Belastung (Sport, Stress) kann das HZV <strong>stark ansteigen</strong> — bis zu 20–25 L/min!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Vegetative Steuerung</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.9rem">⬆️ Sympathikus</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px"><strong>Steigert</strong> Herzfrequenz und Herzkraft (Stress, Sport)</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem">⬇️ Parasympathikus</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px"><strong>Senkt</strong> die Herzfrequenz (Ruhe, Erholung)</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Künstlicher Herzschrittmacher</div></div>
  <p class="lekt-prose">Ein künstlicher Herzschrittmacher unterstützt das Herz bei <strong>schweren Rhythmusstörungen</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🔧 Funktionsweise</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Implantation meist <strong>unter dem Schlüsselbein</strong></li>
      <li>Verbindung über <strong>Elektroden</strong> zum Herz</li>
      <li>Gibt elektrische Impulse ab</li>
      <li>Unterstützt bei <strong>Bradykardie</strong> oder Ausfall des Erregungssystems</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa">
    <strong>🩺 Pflegerelevanz:</strong> Patienten mit Schrittmacher tragen einen <strong>Herzschrittmacherausweis</strong>! Wichtig bei MRT, Sicherheitskontrollen und im Notfall.
  </div>
</div>
</div></div>`,

  },

  blutkreislauf: {

    'Körper- & Lungenkreislauf': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🔄 Kreislauf · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Körper- & Lungenkreislauf</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die zwei Kreisläufe des Herz-Kreislauf-Systems</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Körperkreislauf (großer Kreislauf)</div></div>
  <p class="lekt-prose">Der <strong>Körperkreislauf</strong> versorgt den gesamten Körper mit sauerstoffreichem Blut.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">🔴 Der Weg des Blutes</div>
    <div style="background:rgba(239,68,68,.05);border-radius:10px;padding:14px;margin-top:8px;font-size:.88rem;color:var(--ink);line-height:2;text-align:center">
      <strong style="color:#ef4444">Linke Kammer</strong> → <strong>Aorta</strong> →<br>
      <strong>Körper</strong> (Organe, Gewebe) →<br>
      <strong>Hohlvene</strong> → <strong style="color:#60a5fa">Rechter Vorhof</strong>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Lungenkreislauf (kleiner Kreislauf)</div></div>
  <p class="lekt-prose">Der <strong>Lungenkreislauf</strong> dient dem <strong>Gasaustausch</strong> zwischen Blut und Lunge.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔵 Der Weg des Blutes</div>
    <div style="background:rgba(96,165,250,.05);border-radius:10px;padding:14px;margin-top:8px;font-size:.88rem;color:var(--ink);line-height:2;text-align:center">
      <strong style="color:#60a5fa">Rechte Kammer</strong> → <strong>Lungenarterie</strong> →<br>
      <strong>Lunge</strong> (Gasaustausch) →<br>
      <strong>Lungenvene</strong> → <strong style="color:#ef4444">Linker Vorhof</strong>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>⚠️ Achtung — Ausnahmen!</strong><br>
    • Die <strong>Lungenarterie</strong> transportiert <strong>sauerstoffARMES</strong> Blut<br>
    • Die <strong>Lungenvene</strong> transportiert <strong>sauerstoffREICHES</strong> Blut
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Hochdruck- vs. Niederdrucksystem</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.95rem;margin-bottom:6px">🔥 Hochdrucksystem</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.6"><strong>Arterien</strong> des Körperkreislaufs</div>
      <div style="margin-top:8px;background:rgba(239,68,68,.1);border-radius:6px;padding:6px 10px;font-size:.85rem;color:#ef4444"><strong>~100 mmHg</strong></div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:6px">💧 Niederdrucksystem</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.6"><strong>Venen, Kapillaren</strong> und Lungenkreislauf</div>
      <div style="margin-top:8px;background:rgba(96,165,250,.1);border-radius:6px;padding:6px 10px;font-size:.85rem;color:#60a5fa"><strong>&lt; 20 mmHg</strong></div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Der Großteil des Blutes (~85%) befindet sich im <strong>Niederdrucksystem</strong> — die Venen sind die "Blutreservoirs" des Körpers!
  </div>
</div>
</div></div>`,

    'Kapillaren & Stoffaustausch': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🔄 Kreislauf · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Kapillaren & Stoffaustausch</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wo Sauerstoff und Nährstoffe das Blut verlassen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Kapillaren?</div></div>
  <p class="lekt-prose">Kapillaren sind die <strong>kleinsten Blutgefäße</strong> und der Ort des <strong>Stoffaustauschs</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🔬 Eigenschaften</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li><strong>Sehr dünne</strong> Gefäßwand (1 Zellschicht)</li>
      <li>Austausch von <strong>Sauerstoff</strong> und <strong>Nährstoffen</strong></li>
      <li>Verbindung zwischen <strong>Arterien und Venen</strong></li>
      <li>Bildung dichter <strong>Kapillarnetze</strong> um jedes Organ</li>
    </ul>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Der Weg des Blutes</div></div>
  <div class="lekt-card">
    <div style="background:rgba(251,113,133,.05);border-radius:10px;padding:14px;margin-top:8px;text-align:center;line-height:2.2">
      <span style="background:rgba(239,68,68,.15);border-radius:6px;padding:4px 10px;color:#ef4444;font-weight:700">Arterie</span> →
      <span style="background:rgba(239,68,68,.1);border-radius:6px;padding:4px 8px;color:#ef4444;font-size:.85rem">Arteriole</span> →
      <span style="background:rgba(167,139,250,.15);border-radius:6px;padding:4px 10px;color:#a78bfa;font-weight:700">Kapillare</span> →
      <span style="background:rgba(96,165,250,.1);border-radius:6px;padding:4px 8px;color:#60a5fa;font-size:.85rem">Venole</span> →
      <span style="background:rgba(96,165,250,.15);border-radius:6px;padding:4px 10px;color:#60a5fa;font-weight:700">Vene</span>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Was wird ausgetauscht?</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.9rem;margin-bottom:4px">➡️ Aus dem Blut</div>
      <ul style="margin:4px 0 0 16px;color:var(--ink2);font-size:.78rem;line-height:1.7">
        <li>Sauerstoff (O₂)</li>
        <li>Glukose</li>
        <li>Aminosäuren</li>
        <li>Fettsäuren</li>
        <li>Hormone</li>
      </ul>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem;margin-bottom:4px">⬅️ Ins Blut</div>
      <ul style="margin:4px 0 0 16px;color:var(--ink2);font-size:.78rem;line-height:1.7">
        <li>Kohlendioxid (CO₂)</li>
        <li>Stoffwechselprodukte</li>
        <li>Harnstoff</li>
        <li>Hormone (von Drüsen)</li>
      </ul>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>💡 Merke:</strong> Die Kapillaren sind <strong>so dünn</strong>, dass nur eine einzige Endothelzelle die Wand bildet. Erst dadurch kann der Stoffaustausch funktionieren!
</div>
</div></div>`,

    'Koronararterien & Herzinfarkt': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🔄 Kreislauf · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Koronararterien & Herzinfarkt</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die Herzkranzgefäße — wie sich das Herz selbst versorgt</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Koronararterien?</div></div>
  <p class="lekt-prose">Die <strong>Herzkranzgefäße (Koronararterien)</strong> versorgen den Herzmuskel selbst mit Sauerstoff. Sie entspringen direkt aus der <strong>Aorta</strong>.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.95rem;margin-bottom:4px">➡️ A. coronaria dextra</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Rechte Herzkranzarterie — versorgt vor allem die rechte Herzhälfte</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.95rem;margin-bottom:4px">⬅️ A. coronaria sinistra</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Linke Herzkranzarterie — mit dem wichtigen Ast <strong>RIVA</strong></div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Wann werden die Koronararterien durchblutet?</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">⏰ Besonderheit</div>
    <p style="font-size:.88rem;color:var(--ink2);line-height:1.6;margin-top:8px">Die Koronararterien werden vor allem in der <strong>DIASTOLE</strong> durchblutet, nicht in der Systole!</p>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:8px;padding:10px 12px;margin-top:10px;font-size:.8rem;color:var(--ink2);line-height:1.5">
      <strong>Warum?</strong> In der Systole presst das Myokard die Koronararterien zusammen. Erst in der Diastole, wenn das Herz erschlafft, kann das Blut frei durch die Herzkranzgefäße fließen.
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">⚠️ Herzinfarkt</div></div>
  <div style="background:rgba(239,68,68,.1);border:1.5px solid #ef4444;border-radius:12px;padding:14px;margin-top:8px">
    <div style="font-weight:700;color:#ef4444;font-size:1rem;margin-bottom:6px">🚨 Was passiert?</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6">Ein <strong>Verschluss</strong> einer Koronararterie (meist durch Thrombus auf einem Plaque) führt zur <strong>Unterversorgung</strong> des Herzmuskels mit Sauerstoff. Das Gewebe stirbt ab → <strong>Herzinfarkt (Myokardinfarkt)</strong>.</p>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>🩺 Klinik:</strong> Typische Symptome sind <strong>Brustschmerzen</strong> (oft in linken Arm/Kiefer ausstrahlend), <strong>Atemnot</strong>, <strong>Schweißausbruch</strong>, Übelkeit. Bei Frauen oft <strong>unspezifisch</strong>! Sofort 112 anrufen!
  </div>
</div>
</div></div>`,

    'Klinik — Arteriosklerose, Stent & Bypass': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(251,113,133,.2);border:1px solid rgba(251,113,133,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(254,202,202,.95)">🔄 Kreislauf · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Klinik — Arteriosklerose, Stent & Bypass</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wenn Gefäße erkranken — und wie man sie behandelt</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Arteriosklerose</div></div>
  <p class="lekt-prose">Bei der <strong>Arteriosklerose</strong> kommt es zur <strong>Gefäßverengung durch Plaques</strong> (Ablagerungen aus Cholesterin, Kalk und Zellen in der Gefäßwand).</p>
  <div class="lekt-card" style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25)">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Risikofaktoren</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
      <div style="background:rgba(239,68,68,.08);border-radius:8px;padding:8px 10px;font-size:.82rem;color:var(--ink2)">🚬 Rauchen</div>
      <div style="background:rgba(239,68,68,.08);border-radius:8px;padding:8px 10px;font-size:.82rem;color:var(--ink2)">🩺 Bluthochdruck</div>
      <div style="background:rgba(239,68,68,.08);border-radius:8px;padding:8px 10px;font-size:.82rem;color:var(--ink2)">🍩 Diabetes</div>
      <div style="background:rgba(239,68,68,.08);border-radius:8px;padding:8px 10px;font-size:.82rem;color:var(--ink2)">⚖️ Übergewicht</div>
      <div style="background:rgba(239,68,68,.08);border-radius:8px;padding:8px 10px;font-size:.82rem;color:var(--ink2)">🧬 Genetik</div>
      <div style="background:rgba(239,68,68,.08);border-radius:8px;padding:8px 10px;font-size:.82rem;color:var(--ink2)">🛋️ Bewegungsmangel</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Diagnostik — Herzkatheter</div></div>
  <p class="lekt-prose">Bei Verdacht auf Koronare Herzkrankheit (KHK) erfolgt ein <strong>Herzkatheter</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🔬 Wie läuft es ab?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Zugang meist über die <strong>A. radialis</strong> (Handgelenk) oder A. femoralis (Leiste)</li>
      <li>Katheter wird bis zu den Herzkranzgefäßen vorgeschoben</li>
      <li>Kontrastmittel sichtbar im Röntgen</li>
      <li>Verengungen werden direkt diagnostiziert</li>
    </ul>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Therapie — Stent & Bypass</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.95rem;margin-bottom:4px">🔩 Stent</div>
      <div style="font-size:.82rem;color:var(--ink2);line-height:1.5"><strong>Drahtgitter</strong>, das während des Herzkatheters in das Gefäß eingesetzt wird, um es <strong>offen zu halten</strong>. Minimalinvasiv, schnelle Erholung.</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:4px">🔄 Bypass</div>
      <div style="font-size:.82rem;color:var(--ink2);line-height:1.5"><strong>Operative Umleitung</strong> eines Gefäßes — mit körpereigenem Ersatzgefäß (V. saphena magna oder bevorzugt <strong>A. mammaria interna</strong>). Offene OP, größerer Eingriff.</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen">
  <strong>🩺 Pflegerelevanz:</strong> Patienten nach Herzkatheter benötigen <strong>Druckverband</strong> und Bettruhe. Nach Bypass-OP umfassende kardiologische Reha. <strong>Lebensstil-Änderung</strong> ist Pflicht: Rauchstopp, Ernährung, Bewegung!
</div>
</div></div>`,

  },

  atmung: {

    'Aufbau der Atemwege': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a8a,#1e40af,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(191,219,254,.95)">🫁 Atmung · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Aufbau der Atemwege</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Von der Nase bis zu den Bronchiolen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Aufgaben des Atmungssystems</div></div>
  <p class="lekt-prose">Das Atmungssystem sorgt für den <strong>Austausch von Sauerstoff und Kohlendioxid</strong> sowie für die Aufbereitung der Atemluft.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🎯 Die 4 Hauptaufgaben</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#22c55e;font-size:.85rem">⬇️ O₂-Aufnahme</div>
      </div>
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#ef4444;font-size:.85rem">⬆️ CO₂-Abgabe</div>
      </div>
      <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#60a5fa;font-size:.85rem">🧼 Reinigung</div>
      </div>
      <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:8px;padding:10px 12px">
        <div style="font-weight:700;color:#fbbf24;font-size:.85rem">🌡️ Erwärmen & Anfeuchten</div>
      </div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Obere Luftwege</div></div>
  <p class="lekt-prose">Zu den oberen Luftwegen gehören <strong>Nase und Rachen (Pharynx)</strong>.</p>
  <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
    <li>Die <strong>Nasenatmung</strong> reinigt die Luft (Flimmerepithel & Nasenhaare)</li>
    <li>Die Nase <strong>erwärmt und befeuchtet</strong> die Luft</li>
    <li>Der Rachen verbindet Mund- und Nasenhöhle</li>
    <li><strong>Luft- und Speiseweg kreuzen sich</strong> im Pharynx (Laryngopharynx)</li>
  </ul>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die <strong>Nasenatmung</strong> ist physiologisch besser als die Mundatmung — die Luft wird optimal vorbereitet!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Kehlkopf & Luftröhre</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem">🎤 Larynx (Kehlkopf)</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Enthält die <strong>Stimmbänder</strong> für die Lautbildung</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.9rem">🚪 Epiglottis (Kehldeckel)</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Verschließt die Luftröhre <strong>beim Schlucken</strong> — verhindert Aspiration</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem">🪈 Trachea (Luftröhre)</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Ca. <strong>10–12 cm lang</strong> — durch <strong>Knorpelspangen</strong> offen gehalten</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Bronchialbaum</div></div>
  <p class="lekt-prose">Die <strong>Bronchien</strong> verzweigen sich <strong>baumartig</strong> in der Lunge.</p>
  <div style="background:rgba(96,165,250,.05);border-radius:10px;padding:14px;margin-top:8px;text-align:center;line-height:2.2;font-size:.88rem">
    <strong style="color:#60a5fa">Trachea</strong> →<br>
    <strong>Hauptbronchien</strong> (rechts & links) →<br>
    <strong>Lappenbronchien</strong> →<br>
    <strong>Segmentbronchien</strong> →<br>
    <strong style="color:#fbbf24">Bronchiolen</strong> (ohne Knorpel!)
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>🩺 Klinik:</strong> Bei <strong>Asthma bronchiale</strong> verengen sich die Bronchiolen <strong>krampfartig</strong> → Atemnot, Giemen!
  </div>
</div>
</div></div>`,

    'Alveolen & Gasaustausch': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a8a,#1e40af,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(191,219,254,.95)">🫁 Atmung · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Alveolen & Gasaustausch</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wo Sauerstoff ins Blut diffundiert</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Alveolen?</div></div>
  <p class="lekt-prose">Die <strong>Alveolen</strong> (Lungenbläschen) sind die <strong>funktionelle Einheit</strong> der Lunge — der Ort des Gasaustauschs.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Eigenschaften</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li><strong>Ort des Gasaustauschs</strong> zwischen Luft und Blut</li>
      <li>Von <strong>Kapillaren</strong> umgeben (Lungenkapillarnetz)</li>
      <li>Enthalten <strong>Surfactant</strong> — verhindert das Kollabieren</li>
      <li>Ca. <strong>300 Millionen</strong> Alveolen in beiden Lungen!</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Surfactant:</strong> Ein oberflächenaktiver Stoff, der die Oberflächenspannung in den Alveolen senkt. <strong>Ohne Surfactant</strong> würden die Alveolen zusammenfallen (z.B. bei Frühgeborenen → Atemnotsyndrom).
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Der Gasaustausch</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.95rem;margin-bottom:4px">➡️ O₂ ins Blut</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5"><strong>Sauerstoff diffundiert</strong> von den Alveolen in die Lungenkapillaren</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.95rem;margin-bottom:4px">⬅️ CO₂ aus Blut</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5"><strong>Kohlendioxid diffundiert</strong> aus dem Blut in die Alveolen → wird ausgeatmet</div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Diffusion — wie funktioniert das?</div></div>
  <p class="lekt-prose">Der Gasaustausch basiert auf <strong>Diffusion</strong> — einem passiven Vorgang.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">⚗️ Prinzip</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Teilchen bewegen sich <strong>selbstständig</strong></li>
      <li>Wanderung von <strong>hoher zu niedriger Konzentration</strong></li>
      <li><strong>Ausgleich</strong> der Konzentrationsunterschiede</li>
      <li><strong>Passiv</strong> — ohne Energieaufwand</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>🎨 Beispiel:</strong> Ein <strong>Tintentropfen</strong> in Wasser verteilt sich von alleine — ohne Rühren. Das ist Diffusion!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Totraum</div></div>
  <p class="lekt-prose">Der <strong>Totraum</strong> umfasst alle luftleitenden Wege <strong>ohne Gasaustausch</strong>.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 12px;font-size:.82rem;color:var(--ink2)">👃 Nase</div>
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 12px;font-size:.82rem;color:var(--ink2)">👄 Rachen</div>
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 12px;font-size:.82rem;color:var(--ink2)">🪈 Luftröhre</div>
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 12px;font-size:.82rem;color:var(--ink2)">🌳 Bronchien</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Das Totraumvolumen beträgt beim Erwachsenen ca. <strong>150 ml</strong> — von 500 ml Atemzugvolumen kommen also nur 350 ml in den Alveolen an!
  </div>
</div>
</div></div>`,

    'Atemmechanik & Pleura': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a8a,#1e40af,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(191,219,254,.95)">🫁 Atmung · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Atemmechanik & Pleura</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wie wir atmen — Zwerchfell, Druck und Lunge</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Inspiration (Einatmung)</div></div>
  <div class="lekt-card" style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25)">
    <div class="lekt-card-label" style="color:#22c55e">⬇️ AKTIVER Vorgang</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.8">
      <li><strong>Zwerchfell kontrahiert</strong> (bewegt sich nach unten)</li>
      <li><strong>Brustkorb erweitert sich</strong></li>
      <li><strong>Unterdruck</strong> entsteht in der Lunge</li>
      <li><strong>Luft strömt ein</strong></li>
    </ul>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Exspiration (Ausatmung)</div></div>
  <div class="lekt-card" style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25)">
    <div class="lekt-card-label" style="color:#60a5fa">⬆️ PASSIVER Vorgang (in Ruhe)</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.8">
      <li><strong>Zwerchfell entspannt sich</strong></li>
      <li><strong>Brustkorb verkleinert sich</strong></li>
      <li><strong>Überdruck</strong> entsteht in der Lunge</li>
      <li><strong>Luft strömt aus</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die <strong>Einatmung ist AKTIV</strong> (Muskelarbeit), die <strong>Ausatmung in Ruhe PASSIV</strong> (elastische Rückstellkräfte). Bei Belastung wird auch die Ausatmung aktiv!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Die Pleura — das Brustfell</div></div>
  <p class="lekt-prose">Die <strong>Pleura</strong> umgibt die Lunge und ermöglicht die Atembewegung.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.9rem">🫁 Pleura visceralis</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Lungenfell — liegt <strong>direkt auf der Lunge</strong></div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem">🛡️ Pleura parietalis</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Rippenfell — kleidet den <strong>Brustkorb von innen</strong> aus</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.9rem">💨 Pleuraspalt</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Zwischen beiden Blättern — hier herrscht <strong>Unterdruck</strong> (~ -5 mmHg)</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>🚨 Klinik — Pneumothorax:</strong> Bei Luft im Pleuraspalt geht der Unterdruck verloren → die <strong>Lunge fällt zusammen (kollabiert)</strong>! Notfall, sofortige Drainage nötig.
  </div>
</div>
</div></div>`,

    'Atemfrequenz & Klinik': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a8a,#1e40af,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(191,219,254,.95)">🫁 Atmung · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Atemfrequenz & Klinik</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Normwerte & Vitalzeichen erfassen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Atemzugvolumen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">📊 Normwert</div>
    <div style="background:rgba(96,165,250,.08);border-radius:10px;padding:14px;margin-top:8px;text-align:center;font-size:1.1rem;color:var(--ink)">
      <strong>Atemzugvolumen ≈ 500 ml</strong>
    </div>
    <div style="margin-top:8px;font-size:.8rem;color:var(--ink2);text-align:center;font-style:italic">
      Davon kommen ~350 ml in den Alveolen an (150 ml Totraum)
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Atemfrequenz nach Alter</div></div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#22c55e;font-size:.9rem">👨 Erwachsene</div>
      <div style="font-size:.95rem;color:var(--ink);margin-top:3px"><strong>12–18 Atemzüge/min</strong></div>
    </div>
    <div style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fbbf24;font-size:.9rem">🧒 Kinder</div>
      <div style="font-size:.95rem;color:var(--ink);margin-top:3px">Höhere Atemfrequenz als Erwachsene</div>
    </div>
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:10px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.9rem">👶 Säuglinge</div>
      <div style="font-size:.95rem;color:var(--ink);margin-top:3px"><strong>~40 Atemzüge/min</strong></div>
    </div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Pathologische Werte</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem">🐢 Bradypnoe</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">&lt; 12/min — z.B. bei Opioiden, Hirndruckerhöhung</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.9rem">🐇 Tachypnoe</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">&gt; 20/min — z.B. bei Fieber, Angst, Herzinsuffizienz, Pneumonie</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.9rem">⏸️ Apnoe</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Atemstillstand &gt; 10 Sek. — z.B. Schlafapnoe</div>
    </div>
    <div style="background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fbbf24;font-size:.9rem">😮‍💨 Dyspnoe</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:3px">Subjektive Atemnot</div>
    </div>
  </div>
</div>

<div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
  <strong>🩺 Pflege-Tipp:</strong> Die Atemfrequenz sollte <strong>UNAUFFÄLLIG</strong> gezählt werden (z.B. während des Pulszählens), denn Patienten verändern ihre Atmung <strong>unbewusst</strong>, sobald sie merken, dass sie beobachtet werden!
</div>
</div></div>`,

  },

  hygiene_grundlagen: {

    'Grundlagen & persönliche Hygiene': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(187,247,208,.95)">🧼 Hygiene · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Grundlagen & persönliche Hygiene</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Basics, Erscheinungsbild und Dienstkleidung</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist Hygiene?</div></div>
  <p class="lekt-prose"><strong>Hygiene</strong> umfasst alle Maßnahmen zur Verhütung von Krankheiten und zur Vermeidung der Übertragung von Krankheitserregern. Ziel ist der Schutz von <strong>Patienten, Mitarbeitenden und Besuchern</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🦠 Was ist eine Infektion?</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:8px">Eine <strong>Infektion</strong> entsteht durch das <strong>Eindringen und Vermehren</strong> von Krankheitserregern im menschlichen Körper. Zur Vermeidung werden präventive Hygienemaßnahmen angewendet.</p>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Hygiene dient der <strong>Infektionsprävention</strong> und dem Schutz aller Beteiligten im Gesundheitswesen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Persönliche Hygiene</div></div>
  <p class="lekt-prose">In patientennahen Bereichen gelten <strong>besondere Anforderungen</strong> an das persönliche Erscheinungsbild.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Was ist erlaubt / Pflicht</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
      <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">
        💇 <strong>Kurze Haare</strong> oder zusammengebundene Haare
      </div>
      <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">
        💅 <strong>Kurze, saubere Fingernägel</strong>
      </div>
    </div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#ef4444">❌ Was ist verboten</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">
        Kein <strong>Nagellack</strong> oder künstliche Fingernägel
      </div>
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">
        Keine <strong>Schmuckstücke</strong> an Händen und Unterarmen
      </div>
      <div style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">
        <strong>Piercings</strong> entfernen, wenn Entzündungsgefahr besteht
      </div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Hände und Unterarme müssen für eine wirksame Händedesinfektion <strong>frei von Schmuck</strong> sein.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Dienst- und Bereichskleidung</div></div>
  <p class="lekt-prose">Dienstkleidung ist während der Arbeitszeit <strong>verpflichtend</strong> zu tragen und ersetzt private Kleidung. Sie dient dem <strong>Schutz vor Kontamination</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">👕 Wichtige Regeln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Wechsel <strong>mindestens alle zwei Tage</strong></li>
      <li><strong>Sofortiger Wechsel</strong> bei Verschmutzung</li>
      <li>Keine private Kleidung unter kurzärmeliger Dienstkleidung</li>
      <li>Aufbereitung durch den <strong>Arbeitgeber</strong></li>
      <li>Arbeitskleidung darf <strong>nicht privat gewaschen</strong> werden</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">🏥 Bereichskleidung</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.5;margin-top:8px">Wird <strong>ausschließlich in festgelegten Bereichen</strong> getragen (z.B. OP, Intensivstation) und darf nicht außerhalb verwendet werden.</p>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Dienst- und Bereichskleidung <strong>verhindern die Verschleppung</strong> von Krankheitserregern.
  </div>
</div>
</div></div>`,

    'Händehygiene': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(187,247,208,.95)">🧼 Hygiene · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Händehygiene</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die wichtigste Einzelmaßnahme der Infektionsprävention</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Basishygiene</div></div>
  <p class="lekt-prose">Die Basishygiene umfasst <strong>Standardmaßnahmen</strong> zur Vermeidung der Übertragung von Krankheitserregern.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🛡️ Die 8 Säulen der Basishygiene</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Konsequente Händehygiene</strong></li>
      <li>Persönliche Hygiene</li>
      <li>Sachgerechte Verwendung von PSA</li>
      <li>Flächenreinigung und Flächendesinfektion</li>
      <li>Aufbereitung von Medizinprodukten</li>
      <li>Abfallentsorgung gemäß Vorschriften</li>
      <li>Wäsche- und Geschirrhygiene</li>
      <li>Patienten- und Besucheraufklärung</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die <strong>Händehygiene</strong> gilt als <strong>wichtigste Einzelmaßnahme</strong> der Infektionsprävention!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Händedesinfektion — die 5 Momente (WHO)</div></div>
  <p class="lekt-prose">Die hygienische Händedesinfektion ist die <strong>wirksamste Maßnahme</strong> zur Unterbrechung von Infektionsketten. Sie entfernt die <strong>transiente Hautflora</strong>.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">1️⃣ Vor Patientenkontakt</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">2️⃣ Vor aseptischen Tätigkeiten</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">3️⃣ Nach Kontakt mit potenziell infektiösem Material</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">4️⃣ Nach Patientenkontakt</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">5️⃣ Nach Kontakt mit der Patientenumgebung</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>⏱️ Einwirkzeit:</strong> Die hygienische Händedesinfektion dauert in der Regel <strong>30 Sekunden</strong>!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Durchführung — Die 6 Schritte</div></div>
  <p class="lekt-prose">Bei der Durchführung müssen <strong>alle Bereiche der Hände</strong> ausreichend benetzt werden:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:10px;text-align:center">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">1️⃣ Handfläche auf Handfläche</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:10px;text-align:center">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">2️⃣ Handflächen über Handrücken</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:10px;text-align:center">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">3️⃣ Fingerzwischenräume</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:10px;text-align:center">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">4️⃣ Fingeraußenseiten</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:10px;text-align:center">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">5️⃣ Daumen kreisend</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:10px;text-align:center">
      <div style="font-weight:700;color:#60a5fa;font-size:.82rem">6️⃣ Fingerspitzen</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Achtung:</strong> Nicht benetzte Hautbereiche stellen ein <strong>Infektionsrisiko</strong> dar!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Händewaschung & Hautpflege</div></div>
  <p class="lekt-prose">Händewaschen dient vor allem der <strong>Entfernung sichtbarer Verschmutzungen</strong> und <strong>ersetzt die Händedesinfektion NICHT</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💧 Wann Händewaschen?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Arbeitsbeginn</li>
      <li>Sichtbare <strong>Verschmutzung</strong></li>
      <li>Vor Mahlzeiten</li>
      <li>Nach <strong>Toilettenbesuch</strong></li>
      <li>Nach Kontakt mit <strong>Sporenbildnern</strong> oder Parasiten</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa">
    <strong>💡 Tipp:</strong> Regelmäßige <strong>Hautpflege</strong> schützt die Hautbarriere. Gesunde Haut ist Voraussetzung für wirksame Händehygiene!
  </div>
</div>
</div></div>`,

    'PSA & Isolation': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(187,247,208,.95)">🧼 Hygiene · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">PSA & Isolation</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Schutzausrüstung, Masken und Isolationsformen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Persönliche Schutzausrüstung (PSA)</div></div>
  <p class="lekt-prose">Die <strong>PSA</strong> schützt Mitarbeitende vor <strong>biologischen Arbeitsstoffen</strong> und infektiösen Materialien.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🛡️ Bestandteile der PSA</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🧤 Einmalhandschuhe</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">😷 MNS</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">😷 FFP2-Maske</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">😷 FFP3-Maske</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🥽 Schutzbrille</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🛡️ Gesichtsschutzschild</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🥼 Schutzkittel</div>
      <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">👕 Schutzschürze</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> PSA wird entsprechend der <strong>Gefährdungsbeurteilung</strong> und dem <strong>Übertragungsweg</strong> ausgewählt.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Handschuhe & Masken</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem;margin-bottom:4px">🧤 Einmalhandschuhe</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Schützen vor Kontakt mit <strong>Blut, Sekreten, Exkreten</strong> und kontaminierten Materialien</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem;margin-bottom:4px">😷 Mund-Nasen-Schutz (MNS)</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Schützt vor <strong>Tröpfchen</strong></div>
    </div>
    <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb7185;font-size:.9rem;margin-bottom:4px">😷 FFP2 / FFP3</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Zusätzlicher Schutz vor <strong>luftgetragenen Erregern (Aerosolen)</strong></div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Wichtig:</strong>
    <ul style="margin:6px 0 0 18px">
      <li>Handschuhe ersetzen <strong>NICHT</strong> die Händedesinfektion</li>
      <li>Masken müssen <strong>korrekt sitzen</strong></li>
      <li>Vor und nach Gebrauch: <strong>Händedesinfektion</strong></li>
    </ul>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Isolation von Patienten</div></div>
  <p class="lekt-prose">Patienten mit bestimmten Erregern müssen <strong>isoliert</strong> werden, um eine Weiterverbreitung zu verhindern.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🏥 Die 4 Isolationsformen</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
      <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#a78bfa;font-size:.85rem">🚪 Einzelzimmerisolierung</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Patient allein in einem separaten Zimmer</div>
      </div>
      <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#a78bfa;font-size:.85rem">🚪🚪 Isolierung mit Schleuse</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Zusätzlicher Raum vor dem Patientenzimmer</div>
      </div>
      <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#a78bfa;font-size:.85rem">👥 Kohortenisolierung</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Patienten mit <strong>gleichem Erreger</strong> gemeinsam untergebracht</div>
      </div>
      <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px">
        <div style="font-weight:700;color:#a78bfa;font-size:.85rem">🛡️ Umkehrisolierung (Schutzisolierung)</div>
        <div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Schutz für <strong>immungeschwächte Patienten</strong> vor Erregern von außen</div>
      </div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Isolation schützt <strong>Mitpatienten, Personal und Besucher</strong> vor Infektionsübertragungen. Vor Betreten: alle vorgeschriebenen Schutzmaßnahmen einhalten!
  </div>
</div>
</div></div>`,

  },

  koerperpflege_grundlagen: {

    'Grundlagen der Körperpflege': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛁 Körperpflege · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Grundlagen der Körperpflege</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Bedeutung, Ziele und Grundregeln</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist Körperpflege?</div></div>
  <p class="lekt-prose">Die <strong>Körperpflege</strong> gehört zu den wichtigsten pflegerischen Maßnahmen. Sie dient nicht nur der Reinigung des Körpers, sondern unterstützt <strong>Gesundheit, Wohlbefinden und Lebensqualität</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">👁️ Mehrere Funktionen gleichzeitig</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:8px">Während der Körperpflege beobachtet die Pflegefachperson den Gesundheitszustand: <strong>Haut, Beweglichkeit, Befinden</strong>. Sie wird individuell an Bedürfnisse, Gewohnheiten, Fähigkeiten und Wünsche angepasst.</p>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Körperpflege bedeutet mehr als Waschen. Sie verbindet <strong>Hygiene, Gesundheitsförderung, Beobachtung und Zuwendung</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Bedeutung der Körperpflege</div></div>
  <p class="lekt-prose">Die Unterstützung bei der Körperpflege gehört zu den grundlegenden Aufgaben der professionellen Pflege.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🎯 Sie hilft, ...</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li><strong>Krankheiten vorzubeugen</strong></li>
      <li><strong>Wohlbefinden zu steigern</strong></li>
      <li><strong>Selbstwertgefühl zu fördern</strong></li>
      <li><strong>Wahrnehmungsfähigkeit zu erhalten</strong></li>
      <li><strong>Kommunikationsfähigkeit zu fördern</strong></li>
      <li><strong>Selbstständigkeit zu unterstützen</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die Körperpflege verbindet <strong>körperliche Versorgung mit Kommunikation und Beziehungsgestaltung</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Ziele der Körperpflege</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Hauptziele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Erhaltung der Gesundheit</li>
      <li>Förderung der <strong>Hautintegrität</strong></li>
      <li>Vermeidung von Infektionen</li>
      <li>Steigerung des Wohlbefindens</li>
      <li>Förderung der <strong>Selbstständigkeit</strong></li>
      <li>Verbesserung der Körperwahrnehmung</li>
      <li>Erhaltung sozialer Teilhabe</li>
      <li>Unterstützung der Mobilität</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Goldene Regel — Aktivierende Pflege:</strong><br/>
    <em style="font-size:1.05rem">"So viel Selbstständigkeit wie möglich, so viel Unterstützung wie nötig."</em>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Einflussfaktoren</div></div>
  <p class="lekt-prose">Die Planung und Durchführung wird von verschiedenen Faktoren beeinflusst.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb7185;font-size:.9rem;margin-bottom:6px">🏥 Gesundheitszustand</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Fieber · Schmerzen · Erschöpfung · Bewegungseinschränkungen · Lähmungen · Vitalzeichen · Bettruhe</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem;margin-bottom:6px">👤 Persönliche Faktoren</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Alter · Kulturelle Gewohnheiten · Vorlieben · Schamgefühl · Religiöse Bedürfnisse</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.9rem;margin-bottom:6px">🏠 Umgebungsfaktoren</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Häusliche Umgebung · Pflegeheim · Krankenhaus · Verfügbare Hilfsmittel · Unterstützung durch Angehörige</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Jede Körperpflege muss <strong>individuell geplant</strong> werden. Standardlösungen gibt es nicht.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Grundregeln der Körperpflege</div></div>
  <p class="lekt-prose">Für eine professionelle und menschenwürdige Körperpflege gelten grundlegende Prinzipien:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🤝 <strong>Selbstbestimmung</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💪 <strong>Selbstständigkeit</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">😌 <strong>Stress vermeiden</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🙈 <strong>Schamgefühl achten</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🛡️ <strong>Intimsphäre schützen</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🤲 <strong>Haut schonen</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🧼 <strong>Hygiene einhalten</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">⚠️ <strong>Sicherheit</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2);grid-column:span 2">🏋️ <strong>Rückenschonend arbeiten</strong></div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Der <strong>Patient steht im Mittelpunkt</strong> und entscheidet soweit möglich selbst.
  </div>
</div>
</div></div>`,

    'Vorbereitung der Körperpflege': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛁 Körperpflege · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Vorbereitung der Körperpflege</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Information, Material, Umgebung und Sicherheit</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Warum vorbereiten?</div></div>
  <p class="lekt-prose">Eine sorgfältige Vorbereitung ist die Grundlage für eine <strong>sichere, hygienische und patientenorientierte Körperpflege</strong>. Sie ermöglicht einen strukturierten Ablauf, reduziert Risiken und schafft eine angenehme Atmosphäre.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">📋 Sie umfasst...</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li><strong>Informationssammlung</strong></li>
      <li><strong>Organisation der Umgebung</strong></li>
      <li><strong>Bereitstellung aller Materialien</strong></li>
      <li><strong>Sicherheitsmaßnahmen</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Eine gute Vorbereitung <strong>verhindert Unterbrechungen</strong> und erhöht die Sicherheit für Patient und Pflegekraft.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Informationssammlung</div></div>
  <p class="lekt-prose">Vor jeder Körperpflege müssen wichtige Informationen über den Patienten eingeholt werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">📝 Zu erfassen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Aktueller Gesundheitszustand · Diagnosen · Erkrankungen</li>
      <li><strong>Schmerzen · Fieber · Mobilitätseinschränkungen</strong></li>
      <li>Angeordnete Bettruhe</li>
      <li>Bekannte <strong>Allergien</strong></li>
      <li>Pflegebedürftigkeit · Ressourcen des Patienten</li>
      <li>Psychische Verfassung</li>
      <li>Kulturelle und religiöse Bedürfnisse</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#22c55e">📚 Wo finden?</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.5;margin-top:8px">Gespräche mit Patient, Angehörigen, Kollegen · <strong>Pflegeanamnese</strong> · <strong>Pflegedokumentation</strong></p>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Je besser die Informationslage, desto <strong>individueller und sicherer</strong> die Pflege.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Gewohnheiten & Wünsche</div></div>
  <p class="lekt-prose">Jeder Mensch besitzt individuelle Vorstellungen von Sauberkeit. Diese Gewohnheiten sollten <strong>möglichst berücksichtigt</strong> werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">💭 Typische Beispiele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Duschen statt Baden — oder umgekehrt</li>
      <li>Körperpflege am Morgen oder Abend</li>
      <li>Bevorzugte Wassertemperatur</li>
      <li>Verwendung eigener Pflegeprodukte</li>
      <li><strong>Pflege durch eine Person gleichen Geschlechts</strong></li>
      <li>Bestimmte Reihenfolge der Körperpflege</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Gewohnheiten geben <strong>Sicherheit und Orientierung</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Vorbereitung der Umgebung</div></div>
  <p class="lekt-prose">Die Umgebung muss so gestaltet werden, dass der Patient sich wohlfühlt und die Pflege ungestört durchgeführt werden kann.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:10px;font-size:.78rem;color:var(--ink2);text-align:center">🌡️ <strong>Raumtemperatur</strong></div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:10px;font-size:.78rem;color:var(--ink2);text-align:center">🪟 <strong>Fenster schließen</strong></div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:10px;font-size:.78rem;color:var(--ink2);text-align:center">💨 <strong>Zugluft vermeiden</strong></div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:10px;font-size:.78rem;color:var(--ink2);text-align:center">💡 <strong>Beleuchtung</strong></div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:10px;font-size:.78rem;color:var(--ink2);text-align:center">🛡️ <strong>Sichtschutz</strong></div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:10px;font-size:.78rem;color:var(--ink2);text-align:center">🚪 <strong>Besucher</strong></div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die <strong>Wahrung der Intimsphäre</strong> beginnt bereits VOR der Pflegemaßnahme.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Vorbereitung der Materialien</div></div>
  <p class="lekt-prose">Alle benötigten Materialien müssen <strong>vollständig bereitgestellt</strong> werden, bevor die Körperpflege beginnt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🧺 Typische Materialien</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:8px">
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🪣 Waschschüssel</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🧖 Handtücher</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🧽 Waschlappen</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🧴 Waschlotion / Syndets</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">💆 Hautpflegeprodukte</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🪥 Zahnpflege</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🪒 Rasierapparat</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🧤 Handschuhe</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">👕 Frische Kleidung</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:5px 8px;font-size:.72rem;color:var(--ink2)">🛏️ Bettwäsche</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Wichtig:</strong> Die Pflegekraft sollte den Patienten <strong>nicht allein lassen müssen</strong>, um fehlendes Material zu holen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Persönliche Vorbereitung der Pflegekraft</div></div>
  <p class="lekt-prose">Auch die Pflegefachperson muss sich vorbereiten — für <strong>Hygiene und Sicherheit</strong>.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">✅ Saubere <strong>Dienstkleidung</strong> tragen</div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">✅ Haare <strong>zusammenbinden</strong></div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">✅ <strong>Kurze Fingernägel</strong>, kein Nagellack</div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">✅ Kein <strong>Schmuck</strong> an Händen und Unterarmen</div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">✅ <strong>Händedesinfektion</strong> durchführen</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Schmuck und lange Fingernägel können <strong>Verletzungen verursachen</strong> und die Händehygiene beeinträchtigen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Sicherheitsmaßnahmen</div></div>
  <p class="lekt-prose">Risiken müssen erkannt und minimiert werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Sturzprävention</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Rutschfeste Schuhe</strong> oder Antirutschsocken</li>
      <li>Trockener Fußboden</li>
      <li>Entfernung von Stolperfallen</li>
      <li>Nutzung von <strong>Haltegriffen</strong></li>
      <li>Bremsen von Rollator / Rollstuhl feststellen</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#fbbf24">🛡️ Weitere Sicherheit</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Wassertemperatur prüfen</strong></li>
      <li>Klingel in Reichweite</li>
      <li>Patient bei Bedarf nicht allein lassen</li>
      <li>Auf Schwindel und Schwäche achten</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Goldene Regel:</strong> Patientensicherheit hat <strong>immer Vorrang</strong> vor einem schnellen Arbeitsablauf.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Die 3 Phasen der Körperpflege</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:4px">1️⃣ Vorbereitungsphase</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Informationssammlung · Material · Umgebung · persönliche Vorbereitung</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.95rem;margin-bottom:4px">2️⃣ Durchführungsphase</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Fachgerechte Durchführung · individuelle Wünsche · <strong>Kommunikation begleitet jeden Schritt</strong></div>
    </div>
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.95rem;margin-bottom:4px">3️⃣ Nachbereitungsphase</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Aufräumen · Reinigung · Versorgung · <strong>Dokumentation</strong></div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Professionelle Pflege besteht <strong>immer aus diesen 3 Phasen</strong>.
  </div>
</div>
</div></div>`,

    'Scham und Intimsphäre': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛁 Körperpflege · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Scham und Intimsphäre</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Würde, Respekt und professioneller Umgang</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Scham in der Pflege</div></div>
  <p class="lekt-prose">Das <strong>Schamgefühl</strong> gehört zu den stärksten und persönlichsten menschlichen Gefühlen. Besonders während der Körperpflege können Patienten Scham empfinden, da fremde Menschen in ihren <strong>persönlichen und intimen Lebensbereich</strong> eintreten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">💔 Asymmetrie</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:8px">Für Pflegefachpersonen gehört der Umgang mit Nacktheit, Ausscheidungen oder Intimpflege zum <strong>Berufsalltag</strong>. Für den Patienten kann dieselbe Situation jedoch <strong>belastend, unangenehm oder beschämend</strong> sein.</p>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Scham schützt die <strong>persönliche Würde</strong> eines Menschen und muss in jeder Pflegesituation respektiert werden.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Was ist Scham?</div></div>
  <p class="lekt-prose">Scham bezeichnet das Gefühl des <strong>Bloßgestelltseins</strong> oder die Angst, bloßgestellt zu werden. Sie entsteht häufig dort, wo persönliche Grenzen verletzt werden.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb7185;font-size:.9rem;margin-bottom:4px">🙈 Intime Scham</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Verletzung der Intimsphäre oder körperliche Entblößung</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.9rem;margin-bottom:4px">👥 Soziale Scham</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Schuld- oder Versagensgefühle gegenüber anderen</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Scham entsteht häufig dort, wo Menschen sich <strong>verletzlich, abhängig oder ausgeliefert</strong> fühlen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Scham bei Pflegebedürftigkeit</div></div>
  <p class="lekt-prose">Krankheiten und körperliche Einschränkungen können das Selbstwertgefühl beeinträchtigen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Typische Auslöser</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Abhängigkeit von anderen Personen</li>
      <li>Körperliche Schwäche</li>
      <li>Pflegebedürftigkeit</li>
      <li><strong>Nacktheit während der Pflege</strong></li>
      <li>Hilfebedarf bei der Intimpflege</li>
      <li><strong>Inkontinenz</strong> (Verlust der Kontrolle)</li>
      <li>Verlust von Selbstständigkeit</li>
      <li>Körperliche Veränderungen durch Krankheiten</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Je größer die <strong>Abhängigkeit</strong> von fremder Hilfe, desto stärker können Schamgefühle auftreten.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Anzeichen von Scham</div></div>
  <p class="lekt-prose">Scham zeigt sich durch <strong>körperliche UND emotionale</strong> Reaktionen.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb7185;font-size:.9rem;margin-bottom:6px">🫀 Körperliche Reaktionen</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Erröten · Erbleichen · Schwitzen · Zittern · Herzklopfen · Hitzewallungen · Mundtrockenheit · Atembeschwerden · Schwindel</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.9rem;margin-bottom:6px">😔 Verhaltensweisen</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Verlegenes Lächeln · Sprachlosigkeit · Wegschauen · Vermeidungsverhalten · Nervosität · Weinen · Wut · Angst</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Achte auf <strong>beide Signale</strong> — körperlich UND emotional.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Intimsphäre schützen</div></div>
  <p class="lekt-prose">Die Wahrung der Intimsphäre gehört zu den <strong>wichtigsten Aufgaben</strong> während der Körperpflege.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Konkrete Maßnahmen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Anklopfen</strong> vor dem Betreten des Zimmers</li>
      <li>Patienten begrüßen</li>
      <li>Pflegemaßnahmen <strong>erklären</strong></li>
      <li><strong>Einverständnis einholen</strong></li>
      <li>Besucher hinausbitten</li>
      <li><strong>Sichtschutz</strong> verwenden, Vorhänge schließen</li>
      <li>Nur notwendige Körperbereiche entkleiden</li>
      <li>Patient <strong>niemals unnötig entblößen</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Goldene Regel:</strong> Nur die Körperregion wird entkleidet, die <strong>aktuell gepflegt</strong> wird.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Professionelle Berührungen</div></div>
  <p class="lekt-prose">Berührungen vermitteln Sicherheit, Vertrauen und Wohlbefinden. <strong>Unangemessene</strong> Berührungen können dagegen Scham auslösen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🤝 Regeln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Vor jeder Berührung <strong>ankündigen</strong></li>
      <li>Patient ansprechen</li>
      <li><strong>Angenehme Wärme</strong> der Hände</li>
      <li>Flächige Berührungen mit der Handinnenfläche</li>
      <li>Ruhige und gleichmäßige Bewegungen</li>
      <li>Leichten Druck verwenden</li>
      <li><strong>Blickkontakt</strong> halten</li>
      <li>Reaktionen beobachten</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Jede Berührung benötigt <strong>Respekt, Aufmerksamkeit und Einverständnis</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Vertrauen aufbauen</div></div>
  <p class="lekt-prose">Pflegefachpersonen können aktiv dazu beitragen, Scham zu reduzieren und Vertrauen zu fördern.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🗣️ <strong>Ruhig sprechen</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">👂 <strong>Aktiv zuhören</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🕰️ <strong>Geduld zeigen</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">❤️ <strong>Wünsche ernst nehmen</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🤝 <strong>Entscheidungen ermöglichen</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💪 <strong>Ressourcen fördern</strong></div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Vertrauen entsteht durch <strong>Respekt, Kommunikation und Wahrung der Menschenwürde</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Scham = Hüterin der Würde</div></div>
  <p class="lekt-prose">Scham wird häufig als <strong>"Hüterin der menschlichen Würde"</strong> bezeichnet. Sie schützt persönliche Grenzen und erinnert Menschen daran, respektvoll miteinander umzugehen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🛡️ Grundwerte professioneller Pflege</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li><strong>Menschenwürde</strong></li>
      <li><strong>Selbstbestimmung</strong></li>
      <li><strong>Wertschätzung</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa">
    <strong>💜 Goldene Regel:</strong> Jeder Mensch hat unabhängig von Alter, Krankheit oder Pflegebedarf Anspruch auf einen <strong>würdevollen Umgang</strong>.
  </div>
</div>
</div></div>`,

  },

  koerperpflege_haut: {

    'Hautpflege & Hautintegrität': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">💧 Haut & Reinigung · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Hautpflege & Hautintegrität</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Das größte Organ und seine Schutzfunktion</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Die Haut — das größte Organ</div></div>
  <p class="lekt-prose">Die Haut ist das <strong>größte Organ</strong> des menschlichen Körpers. Sie schützt vor äußeren Einflüssen, Krankheitserregern, chemischen Substanzen und mechanischen Belastungen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🌟 Vier Rollen der Haut</div>
    <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-top:8px"><strong>Schutzorgan · Sinnesorgan · Temperaturregulator · Gesundheitsbestandteil</strong></p>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Eine gesunde Haut ist die Grundlage für <strong>Wohlbefinden, Gesundheit und Lebensqualität</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Hautintegrität</div></div>
  <p class="lekt-prose">Unter <strong>Hautintegrität</strong> versteht man die Unversehrtheit und Funktionsfähigkeit der Haut.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🛡️ Funktionen der Haut</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Schutz vor Krankheitserregern</li>
      <li>Schutz vor mechanischen Verletzungen</li>
      <li>Schutz vor Austrocknung</li>
      <li><strong>Regulation der Körpertemperatur</strong></li>
      <li>Sinneswahrnehmung (Berührung, Druck, Schmerz)</li>
      <li>Speicherung von Wasser und Fett</li>
      <li>Beteiligung an der <strong>Immunabwehr</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Achtung:</strong> Eine gestörte Hautintegrität erhöht das Risiko für <strong>Infektionen und Wunden</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Ziele der Hautpflege</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🧼 <strong>Haut sauber halten</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💨 <strong>Haut trocken halten</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🛡️ <strong>Hautschutz erhalten</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💧 <strong>Austrocknung verhindern</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🚫 <strong>Allergien vermeiden</strong></div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">😊 <strong>Wohlbefinden fördern</strong></div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Hautpflege dient der <strong>Gesunderhaltung</strong> und dem körperlichen wie seelischen Wohlbefinden.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Der Hydro-Lipid-Film</div></div>
  <p class="lekt-prose">Die Hautoberfläche wird von einem natürlichen Schutzfilm bedeckt — dem <strong>Hydro-Lipid-Film</strong>. Er besteht aus Wasser, Schweiß, Hautfetten und körpereigenen Bestandteilen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💧 Aufgaben des Films</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Schutz vor Austrocknung</li>
      <li>Schutz vor Krankheitserregern</li>
      <li>Erhaltung der Hautfeuchtigkeit</li>
      <li>Unterstützung des Säureschutzmantels</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Achtung:</strong> Häufiges Waschen, aggressive Mittel oder heißes Wasser <strong>beschädigen</strong> diesen Schutzfilm.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Der pH-Wert der Haut</div></div>
  <p class="lekt-prose">Der <strong>pH-Wert</strong> beschreibt, wie sauer oder basisch eine Lösung ist.</p>
  <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">pH unter 7 = <strong>sauer</strong></div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">pH = 7 = <strong>neutral</strong></div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)">pH über 7 = <strong>basisch (alkalisch)</strong></div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Wichtig:</strong> Die gesunde Haut hat einen leicht sauren pH-Wert von etwa <strong>5,5</strong> — der <strong>Säureschutzmantel</strong> hemmt Krankheitserreger.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Hautbeobachtung</div></div>
  <p class="lekt-prose">Die Körperpflege bietet die ideale Gelegenheit zur <strong>systematischen Hautbeobachtung</strong>.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:8px">
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">🎨 Hautfarbe</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">🌡️ Hauttemperatur</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">💧 Hautfeuchtigkeit</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">🔴 Rötungen</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">⬇️ Druckstellen</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">🩹 Verletzungen</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">🟣 Hämatome</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">💧 Ödeme</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Auffälligkeiten <strong>dokumentieren</strong> und weiterleiten. Prävention ist wirksamer als Behandlung!
  </div>
</div>
</div></div>`,

    'Hautreinigung': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">💧 Haut & Reinigung · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Hautreinigung</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wasser, Seife und Syndets richtig einsetzen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Ziele der Hautreinigung</div></div>
  <p class="lekt-prose">Die <strong>Hautreinigung</strong> entfernt Schmutz, Schweiß, abgestorbene Hautzellen und andere Substanzen — <strong>ohne die Schutzfunktion zu beeinträchtigen</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🧹 Was wird entfernt?</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:8px">
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">Staub & Schmutz</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">Schweiß</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">Hornzellen (Korneozyten)</div>
      <div style="background:rgba(34,197,94,.06);border-radius:6px;padding:6px 8px;font-size:.72rem;color:var(--ink2)">Kosmetikreste</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Sauberkeit und Hautschutz müssen immer im <strong>Gleichgewicht</strong> stehen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Wasser als Reinigungsmittel</div></div>
  <p class="lekt-prose">Wasser ist das <strong>natürlichste Reinigungsmittel</strong> — aber zu langer oder zu heißer Kontakt schadet der Haut.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.9rem;margin-bottom:4px">✅ Vorteile</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Natürlich · Gut verträglich · Entfernt Schmutz und Schweiß · Einfach verfügbar</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.9rem;margin-bottom:4px">⚠️ Nachteile</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Austrocknung · Schädigung des Hydro-Lipid-Films · Verlust von Hautfetten</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Je heißer das Wasser und je länger der Kontakt, desto stärker wird die Haut <strong>entfettet</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Seifen</div></div>
  <p class="lekt-prose">Seifen bestehen aus Natrium- oder Kaliumsalzen von <strong>Fettsäuren</strong>. Klassische Kernseifen sind stark <strong>alkalisch</strong> (pH ~12).</p>
  <div class="lekt-card" style="margin-top:8px">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Nachteile von Seifen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Starke <strong>Entfettung</strong> der Haut</li>
      <li>Austrocknung</li>
      <li>Beeinträchtigung des <strong>Säureschutzmantels</strong></li>
      <li>Höheres Risiko von Hautreizungen</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Je höher der pH-Wert eines Reinigungsmittels, desto stärker die Beeinträchtigung der Hautbarriere.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Syndets — die hautfreundliche Alternative</div></div>
  <p class="lekt-prose"><strong>Syndets</strong> (synthetic detergents) sind synthetische Reinigungsmittel, die die Haut <strong>schonender</strong> reinigen als klassische Seifen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile von Syndets</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Hautfreundlicher pH-Wert</strong></li>
      <li>Schonende Reinigung</li>
      <li>Geringere Austrocknung</li>
      <li>Geeignet für <strong>empfindliche Haut</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e">
    <strong>✅ Merke:</strong> In der Pflege werden meist <strong>pH-hautneutrale Syndets</strong> bevorzugt.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">📊 pH-Werte im Vergleich</div></div>
  <p class="lekt-prose">Ein Überblick über die pH-Werte verschiedener Produkte im Vergleich zur Haut:</p>
  <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">
    <div style="display:flex;align-items:center;gap:10px;background:rgba(34,197,94,.1);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px">
      <span style="font-weight:800;color:#22c55e;font-size:1rem;min-width:42px">5,5</span>
      <span style="font-size:.8rem;color:var(--ink2)"><strong>Gesunde Haut</strong> (Referenz, leicht sauer)</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;background:rgba(34,197,94,.08);border-left:3px solid #4ade80;border-radius:8px;padding:10px 12px">
      <span style="font-weight:800;color:#4ade80;font-size:1rem;min-width:42px">5,5-6,5</span>
      <span style="font-size:.8rem;color:var(--ink2)"><strong>Syndet</strong> (hautneutral) ✅</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px">
      <span style="font-weight:800;color:#60a5fa;font-size:1rem;min-width:42px">7</span>
      <span style="font-size:.8rem;color:var(--ink2)"><strong>Wasser</strong> (neutral)</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;background:rgba(251,146,60,.08);border-left:3px solid #fb923c;border-radius:8px;padding:10px 12px">
      <span style="font-weight:800;color:#fb923c;font-size:1rem;min-width:42px">9-10</span>
      <span style="font-size:.8rem;color:var(--ink2)"><strong>Klassische Seife</strong> (alkalisch)</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;background:rgba(239,68,68,.08);border-left:3px solid #ef4444;border-radius:8px;padding:10px 12px">
      <span style="font-weight:800;color:#ef4444;font-size:1rem;min-width:42px">~12</span>
      <span style="font-size:.8rem;color:var(--ink2)"><strong>Kernseife</strong> (stark alkalisch) ⚠️</span>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Faustregel:</strong> Je näher am Haut-pH (5,5), desto schonender das Produkt!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Hautschonende Reinigung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Empfehlungen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Duschen</strong> dem Baden vorziehen</li>
      <li>Nicht zu heiß waschen</li>
      <li>Milde, <strong>pH-hautneutrale</strong> Produkte</li>
      <li>Seifen sparsam einsetzen</li>
      <li>Haut gründlich, aber schonend <strong>trocknen</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> <strong>Hautfalten und Zehenzwischenräume</strong> sorgfältig trocknen — Feuchtigkeit begünstigt Pilzinfektionen!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Reinigung bei Neugeborenen</div></div>
  <p class="lekt-prose">Die Haut von Neugeborenen ist <strong>besonders empfindlich</strong> und braucht schonende Pflege.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:10px;padding:12px;text-align:center">
      <div style="font-weight:800;color:#60a5fa;font-size:1.1rem">38-40°C</div>
      <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">Wassertemperatur</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:10px;padding:12px;text-align:center">
      <div style="font-weight:800;color:#a78bfa;font-size:1.1rem">5-10 Min</div>
      <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">Badezeit</div>
    </div>
    <div style="background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.25);border-radius:10px;padding:12px;text-align:center">
      <div style="font-weight:800;color:#fb923c;font-size:1.1rem">26-28°C</div>
      <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">Raumtemperatur</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:10px;padding:12px;text-align:center">
      <div style="font-weight:800;color:#22c55e;font-size:1.1rem">5,5-7</div>
      <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">pH-Wert Produkt</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Empfindliche Säuglingshaut braucht <strong>milde Produkte und kurze Badezeiten</strong>.
  </div>
</div>
</div></div>`,

    'Hautpflegeprodukte': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">💧 Haut & Reinigung · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Hautpflegeprodukte</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Emulsionen, O/W und W/O verstehen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Bedeutung der Hautpflege</div></div>
  <p class="lekt-prose">Hautpflegeprodukte müssen <strong>individuell</strong> ausgewählt werden — nach Alter, Hauttyp, Hautzustand, Gewohnheiten und Wünschen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🎯 Ziele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Erhaltung der Hautintegrität</li>
      <li>Schutz vor Austrocknung</li>
      <li>Förderung der Hautregeneration</li>
      <li>Unterstützung des Säureschutzmantels</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Nicht jedes Produkt eignet sich für jeden Menschen — die Auswahl erfolgt <strong>immer individuell</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Hydrophil vs. Lipophil</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:4px">💧 Hydrophil = "wasserliebend"</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Wasser · Alkohole · wasserlösliche Bestandteile</div>
    </div>
    <div style="background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb923c;font-size:.95rem;margin-bottom:4px">🛢️ Lipophil = "fettliebend"</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Öle · Vaseline · Wachse · fettlösliche Bestandteile</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Eselsbrücke:</strong> Hydro = Wasser 💧 · Lipo = Fett 🛢️
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Emulsionen</div></div>
  <p class="lekt-prose">Die meisten Cremes und Lotionen sind <strong>Emulsionen</strong> — eine Mischung aus Wasser und Fett. Da sich beide normalerweise nicht mischen, braucht es <strong>Emulgatoren</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🧪 3 Bestandteile</div>
    <div style="display:flex;gap:6px;margin-top:8px">
      <div style="flex:1;background:rgba(96,165,250,.1);border-radius:8px;padding:10px;text-align:center;font-size:.78rem;color:var(--ink2)">💧<br/><strong>Wasserphase</strong></div>
      <div style="flex:1;background:rgba(251,146,60,.1);border-radius:8px;padding:10px;text-align:center;font-size:.78rem;color:var(--ink2)">🛢️<br/><strong>Fettphase</strong></div>
      <div style="flex:1;background:rgba(167,139,250,.1);border-radius:8px;padding:10px;text-align:center;font-size:.78rem;color:var(--ink2)">🔗<br/><strong>Emulgator</strong></div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Ohne <strong>Emulgatoren</strong> würden sich Wasser und Öl wieder trennen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">O/W vs. W/O — der wichtigste Unterschied</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:6px">💧 Öl-in-Wasser (O/W)</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.6">Hoher <strong>Wasseranteil</strong> (~60%) · <strong>kühlt</strong> die Haut · zieht schnell ein · leicht abwaschbar<br/><span style="color:#60a5fa">→ Für normale & fettige Haut, warme Jahreszeit</span></div>
    </div>
    <div style="background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#fb923c;font-size:.95rem;margin-bottom:6px">🛢️ Wasser-in-Öl (W/O)</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.6">Hoher <strong>Fettanteil</strong> · starker Schutzfilm · <strong>rückfettend</strong> · schützt vor Feuchtigkeitsverlust<br/><span style="color:#fb923c">→ Für trockene Haut, ältere Menschen, kalte Jahreszeit</span></div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Merke:</strong> <strong>O/W kühlt</strong> (Wasser außen) · <strong>W/O fettet</strong> (Öl außen)
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Pflege nach Hauttyp</div></div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:10px 12px;font-size:.8rem;color:var(--ink2)"><strong>Normale Haut:</strong> Leichte Lotionen ausreichend</div>
    <div style="background:rgba(251,146,60,.08);border-left:3px solid #fb923c;border-radius:8px;padding:10px 12px;font-size:.8rem;color:var(--ink2)"><strong>Trockene Haut:</strong> Rückfettend, W/O-Emulsionen bevorzugen</div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px;font-size:.8rem;color:var(--ink2)"><strong>Fettige Haut:</strong> Leichte Produkte, O/W-Emulsionen</div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:10px 12px;font-size:.8rem;color:var(--ink2)"><strong>Empfindliche Haut:</strong> Milde Produkte, Duftstoffe vermeiden</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Der <strong>Hauttyp</strong> bestimmt die Wahl des geeigneten Produktes.
  </div>
</div>
</div></div>`,

  },

  koerperpflege_praxis: {

    'Teilkörperpflege am Waschbecken': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛏️ Pflegepraxis · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Teilkörperpflege am Waschbecken</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Aktivierende Pflege fördert Selbstständigkeit</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist Teilkörperpflege?</div></div>
  <p class="lekt-prose">Die <strong>Teilkörperpflege am Waschbecken</strong> ist eine aktivierende Pflegemaßnahme. Der Patient führt die Körperpflege <strong>soweit wie möglich selbstständig</strong> durch und erhält nur die notwendige Unterstützung.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🎯 Ziele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Förderung der <strong>Selbstständigkeit</strong></li>
      <li>Erhaltung der Mobilität</li>
      <li>Förderung des <strong>Kreislaufs</strong></li>
      <li>Höheres Wohlbefinden</li>
      <li>Erhaltung vorhandener Ressourcen</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Goldene Regel:</strong> So viel Selbstständigkeit wie möglich, so viel Hilfe wie nötig.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Indikationen vs. Kontraindikationen</div></div>
  <p class="lekt-prose">Nicht für jeden Patienten ist die Teilkörperpflege am Waschbecken geeignet.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.9rem;margin-bottom:4px">✅ Indikationen (geeignet)</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Mobilität vorhanden · Kreislauf stabil · geringes Sturzrisiko · Patient kann sitzen/stehen</div>
    </div>
    <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#ef4444;font-size:.9rem;margin-bottom:4px">❌ Kontraindikationen (ungeeignet)</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Angeordnete Bettruhe · akute Schmerzen · Schwindel · postoperative Phase · starke Schwäche</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Bei Kontraindikationen wird stattdessen die <strong>Ganzkörperwaschung im Bett</strong> durchgeführt.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Vorbereitung & Material</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">📋 Vorbereitung</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Patient informieren & Einverständnis einholen</li>
      <li>Material bereitstellen</li>
      <li>Raumtemperatur & Sichtschutz</li>
      <li>Händedesinfektion · Waschwasser vorbereiten</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#22c55e">🧺 Material</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Waschschüssel · Handtücher · Waschlappen · Syndets/Waschlotion · Hautpflegeprodukte · Handschuhe · frische Kleidung · Zahnpflege</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Alle Materialien <strong>vor Beginn</strong> vollständig bereitstellen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Durchführung — Reihenfolge</div></div>
  <p class="lekt-prose">Von <strong>sauber nach unrein</strong>, von <strong>oben nach unten</strong>. Der Patient übernimmt möglichst viele Schritte selbst.</p>
  <div style="display:flex;flex-direction:column;gap:4px;margin-top:10px">
    <div style="background:rgba(167,139,250,.08);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">1️⃣ Gesicht → 2️⃣ Hals → 3️⃣ Ohren</div>
    <div style="background:rgba(167,139,250,.08);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">4️⃣ Arme & Hände → 5️⃣ Achselhöhlen</div>
    <div style="background:rgba(167,139,250,.08);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">6️⃣ Brust & Bauch → 7️⃣ Rücken</div>
    <div style="background:rgba(167,139,250,.08);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">8️⃣ Beine → 9️⃣ Füße → 🔟 Intimbereich (zuletzt!)</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Der <strong>Intimbereich</strong> wird immer <strong>zuletzt</strong> gereinigt.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Hautbeobachtung & Nachbereitung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">👁️ Beobachten</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Rötungen · Druckstellen · Verletzungen · Hämatome · Ödeme · Pilzbefall · Wunden · trockene Haut</div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#22c55e">✅ Nachbereitung</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Patient bequem lagern · Klingel erreichbar · Getränke bereitstellen · Material aufräumen · Desinfektion · <strong>Dokumentation</strong></div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Körperpflege bietet die ideale Gelegenheit zur <strong>Hautbeobachtung</strong>.
  </div>
</div>
</div></div>`,

    'Ganzkörperwaschung im Bett': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛏️ Pflegepraxis · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Ganzkörperwaschung im Bett</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Für bettlägerige Patienten — strukturiert & sicher</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Wann im Bett waschen?</div></div>
  <p class="lekt-prose">Die <strong>Ganzkörperwaschung im Bett</strong> wird durchgeführt, wenn Patienten ihr Bett <strong>nicht verlassen können oder dürfen</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🏥 Indikationen</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Bettlägerigkeit · schwere Erkrankungen · ausgeprägte Bewegungseinschränkungen · postoperative Zustände · angeordnete Bettruhe · starke Schwäche · akute Schmerzen</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Sie ist <strong>Hygiene, Beobachtung, Kommunikation und aktivierende Pflege</strong> zugleich.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Vorbereitung & Lagerung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🛏️ Positionierung</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Pflegebett auf <strong>Arbeitshöhe</strong> einstellen</li>
      <li>Oberkörper leicht erhöhen</li>
      <li>Patient möglichst <strong>mitarbeiten</strong> lassen</li>
      <li>Sicherheit gewährleisten</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Wichtig:</strong> <strong>Rückenschonendes Arbeiten</strong> schützt die Gesundheit der Pflegekraft!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Die 3 wichtigsten Grundsätze</div></div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">1️⃣ Von sauber → nach unrein</div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem">2️⃣ Von oben → nach unten</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">3️⃣ Von körperfern → nach körpernah</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> <strong>Kommunikation</strong> begleitet jeden einzelnen Pflegeschritt.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Durchführung Schritt für Schritt</div></div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
    <div style="background:rgba(167,139,250,.06);border-radius:8px;padding:10px 12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.82rem;margin-bottom:2px">👁️ Gesicht</div>
      <div style="font-size:.74rem;color:var(--ink2)"><strong>Ohne Waschlotion</strong> · Augen separat · von <strong>außen nach innen</strong> · Ohren nicht vergessen</div>
    </div>
    <div style="background:rgba(167,139,250,.06);border-radius:8px;padding:10px 12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.82rem;margin-bottom:2px">💪 Arme & Achseln</div>
      <div style="font-size:.74rem;color:var(--ink2)">Arm einzeln freilegen · <strong>Achselhöhlen gründlich</strong> · vollständig trocknen</div>
    </div>
    <div style="background:rgba(167,139,250,.06);border-radius:8px;padding:10px 12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.82rem;margin-bottom:2px">🫁 Brust & Bauch</div>
      <div style="font-size:.74rem;color:var(--ink2)"><strong>Hautfalten</strong> beachten · unter Brustfalten sorgfältig trocknen</div>
    </div>
    <div style="background:rgba(167,139,250,.06);border-radius:8px;padding:10px 12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.82rem;margin-bottom:2px">🔙 Rücken</div>
      <div style="font-size:.74rem;color:var(--ink2)">Patient seitlich lagern · <strong>Dekubituszeichen</strong> & Druckstellen beobachten</div>
    </div>
    <div style="background:rgba(167,139,250,.06);border-radius:8px;padding:10px 12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.82rem;margin-bottom:2px">🦶 Beine & Füße</div>
      <div style="font-size:.74rem;color:var(--ink2)"><strong>Zehenzwischenräume</strong> kontrollieren · auf Fußpilz achten · trocknen aber <strong>nicht eincremen</strong></div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Feuchtigkeit zwischen den Zehen begünstigt <strong>Pilzinfektionen</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Hygiene während der Pflege</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🧼 Regeln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Händedesinfektion · Handschuhe bei Bedarf wechseln</li>
      <li>Saubere Waschlappen verwenden</li>
      <li>Waschwasser wechseln</li>
      <li>Für die <strong>Intimpflege immer frisches Wasser</strong></li>
      <li>Kontaminierte Materialien sofort entsorgen</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Für die <strong>Intimpflege</strong> wird <strong>immer frisches Wasser</strong> verwendet!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Nachbereitung</div></div>
  <div style="font-size:.8rem;color:var(--ink2);line-height:1.7">
    Patient ankleiden · Haare kämmen · Spiegel anbieten · bequem lagern · <strong>Klingel erreichbar</strong> · Getränke bereitstellen · Zimmer lüften · Material reinigen & desinfizieren · <strong>dokumentieren</strong> · Besonderheiten weitergeben
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Eine vollständige Pflege endet erst mit <strong>Dokumentation</strong> und Sicherstellung des Wohlbefindens.
  </div>
</div>
</div></div>`,

    'Intimpflege': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛏️ Pflegepraxis · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Intimpflege</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die sensibelste Pflegemaßnahme — mit Würde</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Grundsätze der Intimpflege</div></div>
  <p class="lekt-prose">Die <strong>Intimpflege</strong> umfasst die Reinigung des äußeren Genital- und Analbereichs. Sie gehört zu den <strong>sensibelsten Maßnahmen</strong> und erfordert besonderen Respekt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Grundregeln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Von <strong>sauber nach unrein</strong> arbeiten</li>
      <li><strong>Frisches Wasser</strong> verwenden</li>
      <li><strong>Handschuhe</strong> tragen</li>
      <li>Schamgefühl respektieren · Pflegeschritte erklären</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💜 Priorität:</strong> Die <strong>Wahrung der Intimsphäre</strong> hat oberste Priorität.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Intimpflege bei der Frau</div></div>
  <p class="lekt-prose">Reinigung grundsätzlich <strong>von vorne nach hinten</strong> (Symphyse → Anus), um Keimverschleppung in die Harnwege zu vermeiden.</p>
  <div style="display:flex;flex-direction:column;gap:4px;margin-top:10px">
    <div style="background:rgba(251,113,133,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">1️⃣ Leistenbereich</div>
    <div style="background:rgba(251,113,133,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">2️⃣ Große Schamlippen → 3️⃣ Kleine Schamlippen</div>
    <div style="background:rgba(251,113,133,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">4️⃣ Harnröhrenöffnung → 5️⃣ Scheideneingang</div>
    <div style="background:rgba(251,113,133,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">6️⃣ Perinealbereich → 7️⃣ Anus (zuletzt!)</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Waschrichtung <strong>immer von der Symphyse zum Anus</strong> — jeder Wischvorgang mit sauberer Stelle.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Intimpflege beim Mann</div></div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-top:10px">
    <div style="background:rgba(96,165,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">1️⃣ Leistenbereich → 2️⃣ Penis</div>
    <div style="background:rgba(96,165,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">3️⃣ <strong>Vorhaut vorsichtig zurückziehen</strong> → 4️⃣ Eichel reinigen</div>
    <div style="background:rgba(96,165,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">5️⃣ Harnröhrenöffnung → 6️⃣ <strong>Vorhaut zurückschieben!</strong></div>
    <div style="background:rgba(96,165,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">7️⃣ Hodensack → 8️⃣ Perineum → 9️⃣ Anus</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ WICHTIG:</strong> Die Vorhaut muss nach der Reinigung <strong>wieder vorgeschoben</strong> werden, um eine <strong>Paraphimose</strong> zu verhindern!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Pflege bei liegendem Blasenkatheter</div></div>
  <p class="lekt-prose">Bei einem <strong>Blasenkatheter</strong> ist besondere Sorgfalt nötig, um Infektionen zu vermeiden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🩺 Katheterpflege</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Tägliche Reinigung</strong> des Katheterbereichs</li>
      <li>Waschrichtung <strong>vom Katheter weg</strong></li>
      <li>Beobachtung des Urins (<strong>Farbe, Geruch, Menge</strong>)</li>
      <li>Vermeidung von <strong>Zug am Katheter</strong></li>
      <li>Hygienestandards strikt beachten</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Immer <strong>vom Katheter weg</strong> reinigen, um Keime nicht Richtung Blase zu verschleppen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Gesäßpflege & Beobachtung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">🔍 Gesäß reinigen</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Gesäßhälften reinigen · Hautfalten kontrollieren · Feuchtigkeit entfernen · <strong>Anus zuletzt</strong> · auf Rötungen & Druckstellen achten</div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#60a5fa">👁️ Beobachten</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Rötungen · Schwellungen · Verletzungen · Pilzinfektionen · <strong>Ausfluss</strong> · ungewöhnliche Gerüche</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Die Intimpflege endet erst mit <strong>Händedesinfektion und Dokumentation</strong>.
  </div>
</div>
</div></div>`,

    'Berührung & Kommunikation': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛏️ Pflegepraxis · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Berührung & Kommunikation</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Beziehungsgestaltung durch Wort und Berührung</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Kommunikation in der Pflege</div></div>
  <p class="lekt-prose">Kommunikation ermöglicht den Austausch von <strong>Informationen, Gefühlen und Bedürfnissen</strong> zwischen Pflegekraft und Patient.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🎯 Ziele</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Vertrauen aufbauen · Sicherheit vermitteln · Ängste reduzieren · Bedürfnisse erkennen · Zusammenarbeit fördern · Selbstbestimmung unterstützen</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Pflege ist immer <strong>Beziehungsgestaltung</strong> durch Kommunikation und Berührung.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Verbal vs. Nonverbal</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:4px">🗣️ Verbale Kommunikation</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.5">Deutlich & langsam sprechen · kurze Sätze · verständliche Begriffe · aktiv zuhören · Patienten ausreden lassen</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.95rem;margin-bottom:4px">😊 Nonverbale Kommunikation</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.5">Mimik · Gestik · Blickkontakt · Körperhaltung · Berührung · Stimmlage · Abstand</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Merke:</strong> Nonverbale Signale verraten oft <strong>mehr als Worte</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Professionelle Berührungen</div></div>
  <p class="lekt-prose">Berührungen vermitteln <strong>Sicherheit, Orientierung und Geborgenheit</strong> — müssen aber bewusst eingesetzt werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🤝 Grundregeln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Berührung <strong>ankündigen</strong></li>
      <li>Patienten ansprechen · Einverständnis beachten</li>
      <li><strong>Warme Hände</strong> verwenden</li>
      <li>Ruhige, <strong>flächige</strong> Bewegungen</li>
      <li>Patientenreaktionen beobachten</li>
    </ul>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Berührungen sollen Sicherheit vermitteln und <strong>niemals erschrecken</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Aktives Zuhören</div></div>
  <p class="lekt-prose"><strong>Aktives Zuhören</strong> bedeutet, dem Gesprächspartner volle Aufmerksamkeit zu schenken.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">👁️ Blickkontakt halten</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🚫 Nicht unterbrechen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">❓ Nachfragen stellen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">💜 Gefühle wahrnehmen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🔁 Zusammenfassen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🤗 Verständnis zeigen</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Wer aufmerksam zuhört, erkennt <strong>Bedürfnisse und Sorgen</strong> schneller.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Kommunikation mit älteren Menschen & bei Demenz</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.9rem;margin-bottom:4px">👴 Ältere Menschen</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.5">Langsam & deutlich · Augenkontakt · Nebengeräusche reduzieren · Zeit für Antworten lassen</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.9rem;margin-bottom:4px">🧠 Bei Demenz</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.5">Ruhig sprechen · kurze, einfache Sätze · Wiederholungen zulassen · Gefühle ernst nehmen · <strong>Diskussionen vermeiden</strong> · Orientierung geben</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Bei Demenz stehen <strong>Verständnis, Sicherheit und Orientierung</strong> im Mittelpunkt.
  </div>
</div>
</div></div>`,

    'Duschen & Baden': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛏️ Pflegepraxis · Lektion 5</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Duschen & Baden</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Sicherheit und Wohlbefinden im Bad</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Duschen vs. Baden</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.95rem;margin-bottom:4px">🚿 Duschen</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.5">Kürzerer Wasserkontakt · <strong>schonender für die Haut</strong> · zeitsparend · fördert Selbstständigkeit · geringere Hautaufweichung</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.95rem;margin-bottom:4px">🛁 Baden</div>
      <div style="font-size:.76rem;color:var(--ink2);line-height:1.5">Entspannend · <strong>Muskelentspannung</strong> · Wärmegefühl · fördert Durchblutung · aber: nicht jeder verträgt ein Vollbad</div>
    </div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Merke:</strong> <strong>Duschen</strong> belastet die Haut meist weniger als langes Baden.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Kontraindikationen für ein Vollbad</div></div>
  <p class="lekt-prose">Nicht jeder Patient darf ein Vollbad nehmen. Bei folgenden Zuständen ist <strong>Vorsicht geboten</strong>:</p>
  <div class="lekt-card" style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.25)">
    <div class="lekt-card-label" style="color:#ef4444">❌ Kontraindikationen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Akute <strong>Herzinsuffizienz</strong></li>
      <li><strong>Hypotonie</strong> / Hypertonie</li>
      <li>Schwere offene Wunden</li>
      <li>Frische Operationsnarben</li>
      <li>Hauterkrankungen mit offenen Stellen</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Bei Herz-Kreislauf-Problemen kann die Wärme eines Vollbads <strong>gefährlich</strong> sein.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Sicherheitsmaßnahmen</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">👟 Rutschfeste Schuhe</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🟦 Antirutschmatte</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🤚 Haltegriffe nutzen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">💧 Boden trocken halten</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🌡️ Temperatur prüfen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">👁️ Nicht allein lassen</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> <strong>Nasse Böden</strong> gehören zu den häufigsten Sturzursachen im Bad.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Durchführung des Duschens</div></div>
  <p class="lekt-prose">Reihenfolge von <strong>oben nach unten</strong>, Intimbereich zuletzt.</p>
  <div style="display:flex;flex-direction:column;gap:4px;margin-top:10px">
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">1️⃣ Haare befeuchten → 2️⃣ Gesicht → 3️⃣ Hals</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">4️⃣ Arme & Hände → 5️⃣ Brust & Bauch</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">6️⃣ Rücken → 7️⃣ Beine → 8️⃣ Füße</div>
    <div style="background:rgba(167,139,250,.06);border-radius:6px;padding:7px 10px;font-size:.76rem;color:var(--ink2)">9️⃣ Intimbereich (zuletzt!)</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> <strong>Hautfalten und Zehenzwischenräume</strong> gründlich trocknen!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Nachbereitung</div></div>
  <div style="font-size:.8rem;color:var(--ink2);line-height:1.7">
    Patient abtrocknen · <strong>Hautpflege</strong> durchführen · frische Kleidung · Haare trocknen · sicher begleiten · Material reinigen · <strong>dokumentieren</strong>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Nach der Körperpflege muss der Patient <strong>sicher und komfortabel</strong> versorgt sein.
  </div>
</div>
</div></div>`,

    'Technische Hilfsmittel': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#4c1d95,#5b21b6,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(167,139,250,.2);border:1px solid rgba(167,139,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(221,214,254,.95)">🛏️ Pflegepraxis · Lektion 6</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Technische Hilfsmittel</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Mehr Sicherheit und Selbstständigkeit</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Ziele technischer Hilfsmittel</div></div>
  <p class="lekt-prose">Technische Hilfsmittel unterstützen bei <strong>Körperpflege, Mobilisation und Bewegung</strong>. Sie fördern Selbstständigkeit und entlasten Pflegekräfte.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🎯 Ziele</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-top:8px">Förderung der Selbstständigkeit · Erhöhung der Sicherheit · Vermeidung von Stürzen · Unterstützung der Mobilität · Entlastung der Pflegekräfte · Teilhabe am Alltag</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(251,191,36,.08);border-left:3px solid #fbbf24">
    <strong>💡 Merke:</strong> Hilfsmittel sollen vorhandene Fähigkeiten <strong>fördern, nicht ersetzen</strong>.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Hilfsmittel für die Körperpflege</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🪑 Duschstuhl / -hocker</div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🛁 Badewannenbrett</div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">⬆️ Badewannenlifter</div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🤚 Haltegriffe</div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🧽 Waschhilfen (lang)</div>
    <div style="background:rgba(96,165,250,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🟦 Rutschfeste Unterlagen</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Hilfsmittel sollen die <strong>Eigenaktivität</strong> des Patienten unterstützen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Mobilitätshilfen</div></div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem;margin-bottom:2px">🚶 Rollator</div>
      <div style="font-size:.74rem;color:var(--ink2)">Verbessert Gangsicherheit · reduziert Sturzrisiko · Möglichkeit zum Ausruhen. <strong>⚠️ Bremsen regelmäßig kontrollieren!</strong></div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem;margin-bottom:2px">♿ Rollstuhl</div>
      <div style="font-size:.74rem;color:var(--ink2)">Bei eingeschränkter Gehfähigkeit. <strong>⚠️ Vor jedem Transfer Bremsen feststellen!</strong></div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:10px;padding:12px 14px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem;margin-bottom:2px">⬆️ Patientenlifter</div>
      <div style="font-size:.74rem;color:var(--ink2)">Sicheres Heben & Umsetzen · <strong>schont den Rücken</strong> der Pflegekraft · vermeidet Verletzungen</div>
    </div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> Weitere Hilfsmittel: Gehstock · Unterarmgehstützen · Rutschbretter · Drehscheiben · Aufstehhilfen.
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Sicherheit & Anleitung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Grundsätze</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Individuelle Anpassung an den Patienten</li>
      <li>Patienten <strong>anleiten und einweisen</strong></li>
      <li>Regelmäßige <strong>Funktionskontrolle</strong></li>
      <li>Defekte Hilfsmittel <strong>sofort melden</strong></li>
      <li>Herstellerangaben & Hygiene beachten</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444">
    <strong>⚠️ Merke:</strong> Hilfsmittel verhindern Stürze <strong>nur, wenn sie richtig genutzt</strong> werden!
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Pflegerische Verantwortung</div></div>
  <p class="lekt-prose">Pflegefachpersonen tragen Verantwortung für den <strong>sicheren Einsatz</strong> technischer Hilfsmittel.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">✅ Funktionsfähigkeit prüfen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🛠️ Mängel melden</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">🧼 Hygiene sicherstellen</div>
    <div style="background:rgba(34,197,94,.08);border-radius:8px;padding:8px 10px;font-size:.76rem;color:var(--ink2)">📝 Dokumentation</div>
  </div>
  <div class="lekt-zusammen">
    <strong>Merke:</strong> <strong>Sicherheit, Hygiene und fachgerechte Anwendung</strong> stehen immer im Mittelpunkt.
  </div>
</div>
</div></div>`,

  },

  pharma_grundlagen: {

    'Einführung in die Pharmakologie': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">💊 Pharmakologie · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Einführung in die Pharmakologie</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Die Wissenschaft von den Arzneimitteln</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist Pharmakologie?</div></div>
  <p class="lekt-prose">Die <strong>Pharmakologie</strong> ist die Wissenschaft von Arzneimitteln. Sie beschäftigt sich mit Eigenschaften, Wirkungen, Nebenwirkungen, Anwendungsgebieten und der Anwendung von Medikamenten beim Menschen.</p>
  <p class="lekt-prose">Pflegefachpersonen kommen täglich mit Arzneimitteln in Kontakt. Deshalb gehören pharmakologische Grundkenntnisse zu den wichtigsten Kompetenzen im Pflegeberuf.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Pharmakologie beschreibt, wie Arzneimittel wirken und wie sie sicher angewendet werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Was ist ein Arzneimittel?</div></div>
  <p class="lekt-prose">Nach dem <strong>Arzneimittelgesetz (AMG)</strong> sind Arzneimittel Stoffe oder Stoffzubereitungen, die zur Heilung, Linderung oder Verhütung von Krankheiten eingesetzt werden. Sie können außerdem physiologische Funktionen beeinflussen oder medizinische Diagnosen ermöglichen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Aufgaben von Arzneimitteln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Krankheiten <strong>heilen</strong></li>
      <li>Beschwerden <strong>lindern</strong></li>
      <li>Krankheiten <strong>vorbeugen</strong></li>
      <li>Körperfunktionen beeinflussen</li>
      <li>Diagnosen ermöglichen</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Arzneimittel dienen nicht nur der Therapie, sondern auch der <strong>Prävention und Diagnostik</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Teilgebiete der Pharmakologie</div></div>
  <p class="lekt-prose">Die Pharmakologie umfasst verschiedene Fachgebiete, die unterschiedliche Aspekte von Arzneimitteln untersuchen.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🔄 <strong>Pharmakokinetik</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">⚡ <strong>Pharmakodynamik</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🧪 <strong>Pharmazeutik</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💊 <strong>Galenik</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🩺 <strong>Pharmakotherapie</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">☠️ <strong>Toxikologie</strong></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die verschiedenen Teilgebiete erklären Herstellung, Wirkung und Anwendung von Medikamenten.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Pharmakokinetik — das ADME-Prinzip</div></div>
  <p class="lekt-prose">Die <strong>Pharmakokinetik</strong> beschreibt den Weg eines Arzneistoffs durch den Körper. Sie beantwortet die Frage: <em>„Was macht der Körper mit dem Medikament?"</em></p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px"><strong style="color:#60a5fa">A</strong> — Resorption (Aufnahme)</div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:10px 12px"><strong style="color:#818cf8">D</strong> — Distribution (Verteilung)</div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:10px 12px"><strong style="color:#a78bfa">M</strong> — Metabolismus (Umwandlung)</div>
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:8px;padding:10px 12px"><strong style="color:#fb7185">E</strong> — Exkretion (Ausscheidung)</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>ADME</strong> = Aufnahme, Verteilung, Verstoffwechselung und Ausscheidung eines Arzneistoffs.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Resorption (Aufnahme)</div></div>
  <p class="lekt-prose">Unter <strong>Resorption</strong> versteht man die Aufnahme eines Arzneistoffs in den Blutkreislauf. Die Geschwindigkeit hängt von der Applikationsart ab.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💡 Beispiele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Tabletten über den <strong>Magen-Darm-Trakt</strong></li>
      <li>Subkutane Injektionen über das Gewebe</li>
      <li>Inhalationen über die <strong>Lunge</strong></li>
      <li>Sublinguale Medikamente über die Mundschleimhaut</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Ohne Resorption kann ein Arzneistoff nicht im Körper wirken.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Distribution (Verteilung)</div></div>
  <p class="lekt-prose"><strong>Distribution</strong> bedeutet die Verteilung des Arzneistoffs im Organismus. Über den Blutkreislauf gelangt das Medikament zu den Zielorganen und Geweben.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📊 Beeinflussende Faktoren</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Durchblutung · Körpergewicht · Alter · Fettanteil · Eiweißbindung im Blut</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Gut durchblutete Organe werden schneller erreicht als schlecht durchblutete Gewebe.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Metabolismus (Umwandlung)</div></div>
  <p class="lekt-prose">Der <strong>Metabolismus</strong> beschreibt die chemische Umwandlung eines Arzneistoffs. Die wichtigste Rolle spielt dabei die <strong>Leber</strong>. Durch Stoffwechselprozesse können Arzneimittel aktiviert, verändert oder abgebaut werden.</p>
  <div class="lekt-zusammen" style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa"><strong>Merke:</strong> Die <strong>Leber</strong> ist das wichtigste Stoffwechselorgan für Arzneimittel.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Exkretion (Ausscheidung)</div></div>
  <p class="lekt-prose"><strong>Exkretion</strong> bedeutet Ausscheidung von Arzneistoffen oder deren Abbauprodukten. Die Ausscheidung erfolgt überwiegend über die <strong>Nieren</strong> mit dem Urin.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">🚪 Ausscheidungswege</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Niere (Urin) · Darm (Stuhl) · Lunge (Atemluft) · Haut (Schweiß)</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die <strong>Niere</strong> ist das wichtigste Ausscheidungsorgan für Medikamente.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Pharmakodynamik</div></div>
  <p class="lekt-prose">Die <strong>Pharmakodynamik</strong> beschreibt die Wirkung eines Arzneimittels auf den Körper. Sie beantwortet die Frage: <em>„Was macht das Medikament mit dem Körper?"</em></p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">⚡ Beispiele für Wirkungen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schmerzlinderung · Blutdrucksenkung · Entzündungshemmung · Beruhigung · Fiebersenkung</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Pharmakodynamik beschreibt die eigentliche Arzneimittelwirkung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Pharmazeutik & Galenik</div></div>
  <p class="lekt-prose">Die <strong>Pharmazeutik</strong> beschäftigt sich mit Entwicklung, Herstellung und Qualität von Arzneimitteln. Die <strong>Galenik</strong> beschreibt die Arzneiform eines Medikaments.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💊 Arzneiformen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Tabletten · Kapseln · Tropfen · Salben · Zäpfchen · Infusionslösungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Galenik beeinflusst <strong>Aufnahmegeschwindigkeit und Wirkdauer</strong> eines Arzneimittels.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Pharmakotherapie</div></div>
  <p class="lekt-prose">Die <strong>Pharmakotherapie</strong> bezeichnet die Behandlung von Krankheiten mit Arzneimitteln.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🎯 Ziele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Heilung von Krankheiten</li>
      <li>Linderung von Beschwerden</li>
      <li>Vorbeugung von Erkrankungen</li>
      <li>Verbesserung der <strong>Lebensqualität</strong></li>
      <li>Verlängerung der Lebenserwartung</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Pharmakotherapie nutzt Arzneimittel gezielt zur Behandlung von Erkrankungen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">12</div><div class="lekt-title">Gesetzliche Grundlagen</div></div>
  <p class="lekt-prose">Die Anwendung von Arzneimitteln wird durch verschiedene Gesetze geregelt.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)"><strong>AMG</strong> — Arzneimittelgesetz</div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)"><strong>BtMG</strong> — Betäubungsmittelgesetz</div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:10px 12px;font-size:.82rem;color:var(--ink2)"><strong>BtMVV</strong> — Betäubungsmittelverschreibungsverordnung</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e"><strong>Merke:</strong> <strong>Sicherheit und Patientenschutz</strong> stehen im Mittelpunkt aller arzneimittelrechtlichen Regelungen.</div>
</div>
</div></div>`,

    'Arzneimittel & Arzneimitteltherapie': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">💊 Pharmakologie · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Arzneimittel & Arzneimitteltherapie</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Arten von Arzneimitteln und Therapieformen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Definition eines Arzneimittels</div></div>
  <p class="lekt-prose">Arzneimittel sind Stoffe oder Stoffzubereitungen, die am oder im menschlichen Körper angewendet werden, um Krankheiten zu <strong>erkennen, verhüten, heilen oder lindern</strong>. Sie können außerdem physiologische Funktionen beeinflussen oder ersetzen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Hauptaufgaben</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.85rem;line-height:1.7">
      <li>Vorbeugung von Krankheiten</li>
      <li>Diagnostik</li>
      <li>Behandlung von Erkrankungen</li>
      <li>Linderung von Beschwerden</li>
      <li>Ersatz fehlender Stoffe</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Nicht jedes Medikament heilt – viele Arzneimittel <strong>lindern lediglich Symptome</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Präsentationsarzneimittel</div></div>
  <p class="lekt-prose"><strong>Präsentationsarzneimittel</strong> sind Produkte, die ausdrücklich als Mittel zur Heilung, Linderung oder Verhütung von Krankheiten angeboten oder beworben werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schmerztabletten · Hustensaft · Nasenspray · fiebersenkende Medikamente</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die beabsichtigte Darstellung eines Produkts kann bereits dazu führen, dass es rechtlich als Arzneimittel gilt.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Funktionsarzneimittel</div></div>
  <p class="lekt-prose"><strong>Funktionsarzneimittel</strong> wirken durch pharmakologische, immunologische oder metabolische Mechanismen auf den Organismus ein. Sie verändern gezielt Körperfunktionen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Insulin · Antibiotika · Blutdrucksenker · Antidepressiva</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Funktionsarzneimittel verändern oder beeinflussen <strong>Körperfunktionen direkt</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Diagnostische Arzneimittel</div></div>
  <p class="lekt-prose"><strong>Diagnostika</strong> unterstützen medizinische Untersuchungen und helfen bei der Erkennung von Krankheiten. Häufig werden <strong>Kontrastmittel</strong> eingesetzt, um Organe besser sichtbar zu machen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🔬 Anwendungsgebiete</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Röntgendiagnostik · CT · MRT · Laboruntersuchungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Diagnostika dienen nicht der Behandlung, sondern der <strong>Diagnosestellung</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Prophylaktische Therapie</div></div>
  <p class="lekt-prose">Die <strong>prophylaktische Therapie</strong> dient der Vorbeugung von Krankheiten oder Komplikationen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">💉 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Impfungen · Thromboseprophylaxe · Malariaprophylaxe · Vitamin-D-Gabe</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Prophylaxe bedeutet <strong>Vorbeugung</strong> vor dem Auftreten einer Erkrankung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Kurative Therapie</div></div>
  <p class="lekt-prose">Die <strong>kurative Therapie</strong> verfolgt das Ziel, eine Krankheit zu heilen oder deren Ursache zu beseitigen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Antibiotikatherapie bei Infektionen · OP eines entzündeten Blinddarms · Behandlung einer Lungenentzündung</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>Kurativ</strong> bedeutet heilend.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Substitutionstherapie</div></div>
  <p class="lekt-prose">Bei der <strong>Substitutionstherapie</strong> werden Stoffe ersetzt, die dem Körper fehlen oder nicht ausreichend produziert werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Insulin bei Diabetes Typ 1 · Schilddrüsenhormone bei Hypothyreose · Eisenpräparate · Vitamin B12</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>Substitution</strong> bedeutet Ersatz eines fehlenden Stoffes.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Symptomatische Therapie</div></div>
  <p class="lekt-prose">Die <strong>symptomatische Therapie</strong> behandelt Beschwerden, ohne die eigentliche Ursache der Erkrankung zu beseitigen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schmerzmittel bei Kopfschmerzen · Hustenstiller · Fiebersenker · Antiemetika gegen Übelkeit</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Symptomatische Therapie lindert Symptome, beseitigt aber nicht die Ursache.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Palliative Therapie</div></div>
  <p class="lekt-prose">Die <strong>palliative Therapie</strong> wird eingesetzt, wenn eine Heilung nicht mehr möglich ist. Ziel ist die Verbesserung der <strong>Lebensqualität</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">💜 Ziele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Schmerzlinderung</li>
      <li>Symptomkontrolle</li>
      <li>Leidensminderung</li>
      <li>Erhaltung von Würde und Lebensqualität</li>
      <li>Unterstützung von Patienten und Angehörigen</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Palliative Therapie bedeutet nicht Aufgabe der Behandlung, sondern <strong>Fokus auf Lebensqualität</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Lokale & systemische Therapie</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#22c55e;font-size:.9rem;margin-bottom:4px">📍 Lokale Therapie</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Wirkung beschränkt sich auf den Anwendungsort: Salben · Augentropfen · Nasensprays · Lokalanästhetika</div>
    </div>
    <div style="background:rgba(129,140,248,.08);border:1px solid rgba(129,140,248,.3);border-radius:12px;padding:14px">
      <div style="font-weight:700;color:#818cf8;font-size:.9rem;margin-bottom:4px">🌐 Systemische Therapie</div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5">Wirkstoff gelangt über den Blutkreislauf in den ganzen Körper: Tabletten · Infusionen · Injektionen · Kapseln</div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Lokale Therapie wirkt <strong>am Ort der Anwendung</strong>, systemische Therapie im <strong>gesamten Körper</strong>.</div>
</div>
</div></div>`,

    'Wirkung von Arzneimitteln': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">💊 Pharmakologie · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Wirkung von Arzneimitteln</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Haupt- & Nebenwirkungen, Indikation, Allergien</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Hauptwirkung</div></div>
  <p class="lekt-prose">Die <strong>Hauptwirkung</strong> ist die gewünschte therapeutische Wirkung eines Arzneimittels.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">💡 Beispiele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Schmerzlinderung durch <strong>Analgetika</strong></li>
      <li>Blutdrucksenkung durch Antihypertensiva</li>
      <li>Fiebersenkung durch Antipyretika</li>
      <li>Bekämpfung von Bakterien durch Antibiotika</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Hauptwirkung entspricht dem <strong>therapeutischen Ziel</strong> der Behandlung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Nebenwirkungen</div></div>
  <p class="lekt-prose"><strong>Nebenwirkungen</strong> sind unerwünschte Wirkungen, die zusätzlich zur Hauptwirkung auftreten können. Nicht jeder Patient entwickelt dieselben Nebenwirkungen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Übelkeit · Schwindel · Müdigkeit · Durchfall · Hautausschläge · Kopfschmerzen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Nebenwirkungen können <strong>leicht, schwer oder lebensbedrohlich</strong> sein.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Indikation</div></div>
  <p class="lekt-prose">Die <strong>Indikation</strong> beschreibt den medizinischen Grund für die Anwendung eines Arzneimittels.</p>
  <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 12px;font-size:.8rem;color:var(--ink2)">Schmerzen → <strong>Analgetikum</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 12px;font-size:.8rem;color:var(--ink2)">Bluthochdruck → <strong>Antihypertensivum</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 12px;font-size:.8rem;color:var(--ink2)">Infektion → <strong>Antibiotikum</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 12px;font-size:.8rem;color:var(--ink2)">Fieber → <strong>Antipyretikum</strong></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Indikation beantwortet: <em>„Warum wird das Medikament gegeben?"</em></div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Kontraindikation</div></div>
  <p class="lekt-prose">Eine <strong>Kontraindikation</strong> ist ein Umstand, bei dem ein Arzneimittel nicht oder nur eingeschränkt angewendet werden darf.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#fb7185;font-size:.82rem">🚫 Absolut</div><div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Darf nicht angewendet werden</div></div>
    <div style="flex:1;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#f59e0b;font-size:.82rem">⚖️ Relativ</div><div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Nur nach Nutzen-Risiko-Abwägung</div></div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Allergie gegen einen Wirkstoff · schwere Lebererkrankung · bestimmte Schwangerschaften · schwere Niereninsuffizienz</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Kontraindikationen schützen Patienten vor vermeidbaren Risiken.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Allergische Reaktionen</div></div>
  <p class="lekt-prose">Eine <strong>Allergie</strong> ist eine überschießende Reaktion des Immunsystems auf einen eigentlich harmlosen Stoff. Sie kann unmittelbar oder verzögert auftreten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Mögliche Symptome</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Juckreiz · Hautausschlag · Rötungen · Schwellungen · Atembeschwerden · Kreislaufprobleme</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Arzneimittelallergien müssen <strong>dokumentiert und weitergegeben</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Anaphylaktischer Schock</div></div>
  <div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.4);border-radius:12px;padding:14px;margin-bottom:12px">
    <div style="font-weight:700;color:#ef4444;font-size:.9rem">🚨 Medizinischer Notfall</div>
    <div style="font-size:.8rem;color:var(--ink2);margin-top:4px">Die schwerste Form einer allergischen Reaktion — lebensbedrohlich!</div>
  </div>
  <p class="lekt-prose" style="font-weight:600;color:var(--ink);font-size:.82rem;margin-bottom:4px">Mögliche Anzeichen:</p>
  <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-bottom:10px">Atemnot · Schwellung von Zunge und Rachen · Blutdruckabfall · Tachykardie · Bewusstseinsstörungen · Kreislaufversagen</div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🏥 Pflegerische Maßnahmen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Notruf</strong> veranlassen</li>
      <li>Arzt informieren</li>
      <li>Vitalzeichen überwachen</li>
      <li>Patient beobachten</li>
      <li>Notfallmaßnahmen vorbereiten</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Der anaphylaktische Schock ist <strong>lebensbedrohlich</strong> und erfordert sofortiges Handeln.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Wechselwirkungen</div></div>
  <p class="lekt-prose"><strong>Wechselwirkungen</strong> entstehen, wenn sich mehrere Arzneimittel gegenseitig beeinflussen. Auch Lebensmittel, Alkohol oder pflanzliche Präparate können sie verursachen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f59e0b">🔀 Mögliche Folgen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Wirkungsverstärkung · Wirkungsabschwächung · veränderte Nebenwirkungen · erhöhtes Komplikationsrisiko</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Mehrere Medikamente erhöhen das Risiko für Wechselwirkungen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Compliance & Adhärenz</div></div>
  <p class="lekt-prose"><strong>Compliance</strong> beschreibt, in welchem Ausmaß Patienten ärztliche oder pflegerische Empfehlungen befolgen. Der modernere Begriff <strong>Adhärenz</strong> betont die gemeinsame Entscheidung zwischen Patient und Behandelnden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📊 Einflussfaktoren</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Verständnis der Therapie · Motivation · Nebenwirkungen · Vertrauen · Komplexität des Therapieplans</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Eine gute <strong>Adhärenz</strong> verbessert den Therapieerfolg erheblich.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Placebo-Effekt</div></div>
  <p class="lekt-prose">Ein <strong>Placebo</strong> enthält keinen pharmakologisch wirksamen Stoff. Trotzdem kann es durch die <strong>Erwartung</strong> des Patienten zu einer Verbesserung von Beschwerden kommen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✨ Mögliche Wirkungen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schmerzlinderung · verbessertes Wohlbefinden · subjektive Symptomverbesserung</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Erwartungen und Vertrauen können den Therapieerfolg beeinflussen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Nocebo-Effekt</div></div>
  <p class="lekt-prose">Der <strong>Nocebo-Effekt</strong> beschreibt das Auftreten negativer Beschwerden aufgrund <strong>negativer Erwartungen</strong> eines Patienten. Er kann auch ohne tatsächliche pharmakologische Ursache auftreten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Kopfschmerzen · Übelkeit · Schwindel · verstärkte Schmerzempfindung</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Negative Erwartungen können Beschwerden <strong>verstärken oder auslösen</strong>.</div>
</div>
</div></div>`,

  },

  pharma_arzneiformen: {

    'Feste Arzneiformen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">💉 Arzneiformen · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Feste Arzneiformen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Tabletten, Kapseln, Zäpfchen & Co.</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Arzneiformen?</div></div>
  <p class="lekt-prose">Arzneimittel bestehen nicht nur aus Wirkstoffen. Damit sie sicher angewendet und richtig dosiert werden können, werden sie in unterschiedlichen <strong>Arzneiformen</strong> hergestellt. Die Wahl der Arzneiform beeinflusst Aufnahmegeschwindigkeit, Wirkdauer, Anwendung und Verträglichkeit.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Arzneiform beeinflusst maßgeblich die <strong>Wirkung und Anwendung</strong> eines Medikaments.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Feste Arzneiformen — Überblick</div></div>
  <p class="lekt-prose">Feste Arzneiformen enthalten Wirkstoffe in fester Form und gehören zu den am häufigsten verwendeten Arzneiformen.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#22c55e;font-size:.82rem">✅ Vorteile</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Einfache Dosierung · gute Haltbarkeit · leichte Lagerung · genaue Wirkstoffmenge</div></div>
    <div style="flex:1;background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#fb7185;font-size:.82rem">⚠️ Nachteile</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Schluckbeschwerden möglich · nicht für alle geeignet · manche dürfen nicht geteilt werden</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Feste Arzneiformen ermöglichen eine <strong>präzise Dosierung</strong> des Wirkstoffs.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Pulver & Granulat</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">🥄 Pulver</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Fein zerkleinerte feste Stoffe. Schnelle Auflösung, flexible Dosierung. Beispiele: Magnesiumpulver, Elektrolytpulver, Wundpuder.</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">🌾 Granulat</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Kleine Körnchen mit Wirkstoffen, meist in Wasser aufgelöst. Gute Dosierbarkeit, angenehmere Einnahme.</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Pulver lösen sich häufig schneller auf als Tabletten.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Tabletten</div></div>
  <p class="lekt-prose"><strong>Tabletten</strong> sind die am häufigsten verwendete Arzneiform. Sie entstehen durch das <strong>Pressen</strong> von Wirkstoffen und Hilfsstoffen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f59e0b">⚠️ Wichtige Hinweise</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Nur teilen, <strong>wenn erlaubt</strong></li>
      <li>Mit ausreichend Flüssigkeit einnehmen</li>
      <li>Nicht eigenmächtig zerkleinern</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Nicht jede Tablette darf <strong>geteilt oder zerdrückt</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Filmtabletten</div></div>
  <p class="lekt-prose"><strong>Filmtabletten</strong> besitzen einen dünnen Überzug, der den Wirkstoff schützt oder die Einnahme erleichtert.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Leichteres Schlucken · Geschmacksschutz · Wirkstoffschutz · bessere Stabilität</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Der Filmüberzug schützt Wirkstoff und Patient.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Retardtabletten</div></div>
  <p class="lekt-prose"><strong>Retardtabletten</strong> geben den Wirkstoff über einen längeren Zeitraum langsam und kontrolliert ab.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(34,197,94,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#22c55e;font-size:.8rem">✅ Vorteile</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Längere Wirkdauer · weniger Einnahmen · gleichmäßigere Konzentration</div></div>
    <div style="flex:1;background:rgba(239,68,68,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#ef4444;font-size:.8rem">🚫 Niemals</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Nicht teilen · nicht mörsern · nicht zerkauen</div></div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Retardtabletten dürfen meist nicht zerstört werden, da sonst der Wirkstoff <strong>schlagartig</strong> freigesetzt wird.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Brausetabletten</div></div>
  <p class="lekt-prose"><strong>Brausetabletten</strong> werden vor der Einnahme vollständig in Wasser aufgelöst. Schnelle Auflösung, geeignet bei Schluckbeschwerden.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Brausetabletten müssen <strong>vollständig aufgelöst</strong> sein, bevor sie getrunken werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Lutsch- & Kautabletten</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">🍬 Lutschtabletten</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Lösen sich langsam im Mund auf, wirken häufig lokal im Mund- und Rachenraum.</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">😋 Kautabletten</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Werden vor dem Schlucken zerkaut. Geeignet für Kinder, schnellere Freisetzung.</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Lutschtabletten werden <strong>gelutscht</strong>, Kautabletten werden <strong>gekaut</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Dragees</div></div>
  <p class="lekt-prose"><strong>Dragees</strong> besitzen einen Zucker- oder Schutzüberzug.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Funktionen des Überzugs</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Geschmacksverbesserung · Wirkstoffschutz · leichteres Schlucken · verbesserte Stabilität</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Dragees sollten in der Regel <strong>unzerkaut</strong> geschluckt werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Hart- & Weichkapseln</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">💊 Hartkapseln</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Zwei Kapselhälften, enthalten meist Pulver oder Granulate.</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">🥚 Weichkapseln</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Enthalten flüssige oder ölige Wirkstoffe.</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Viele Kapseln dürfen <strong>nicht geöffnet</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Suppositorien (Zäpfchen)</div></div>
  <p class="lekt-prose"><strong>Suppositorien</strong> werden rektal angewendet — über den Enddarm.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Geeignet bei Übelkeit & Erbrechen · Umgehung von Schluckproblemen · teilweise Umgehung des Magen-Darm-Trakts</div>
  </div>
  <p class="lekt-prose" style="font-size:.8rem;margin-top:8px">Anwendung: Schmerztherapie · Fiebersenkung · Abführmittel</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Suppositorien werden über den <strong>Enddarm</strong> verabreicht.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">12</div><div class="lekt-title">Vaginalsuppositorien</div></div>
  <p class="lekt-prose"><strong>Vaginalsuppositorien</strong> werden in die Scheide eingeführt und wirken überwiegend <strong>lokal</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Anwendungsgebiete</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Pilzinfektionen · Entzündungen · lokale Hormontherapie</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Vaginalsuppositorien entfalten ihre Wirkung hauptsächlich <strong>lokal</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">13</div><div class="lekt-title">Arzneitees</div></div>
  <p class="lekt-prose"><strong>Arzneitees</strong> bestehen aus getrockneten Pflanzenteilen und werden mit heißem Wasser aufgegossen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🌿 Bestandteile & Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Blätter · Blüten · Wurzeln · Samen · Früchte<br>Beispiele: Kamillentee · Fencheltee · Pfefferminztee</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Auch Arzneitees sind <strong>Arzneimittel</strong> und müssen korrekt angewendet werden.</div>
</div>
</div></div>`,

    'Flüssige Arzneiformen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">💉 Arzneiformen · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Flüssige Arzneiformen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Lösungen, Tropfen, Tinkturen, Suspensionen & Emulsionen</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Überblick</div></div>
  <p class="lekt-prose">Flüssige Arzneiformen enthalten Wirkstoffe in gelöster, suspendierter oder emulgierter Form. Besonders bei Kindern, älteren Menschen oder Patienten mit <strong>Schluckstörungen</strong> sind sie eine wichtige Alternative zu Tabletten.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#22c55e;font-size:.82rem">✅ Vorteile</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Schneller Wirkungseintritt · einfache Einnahme · flexible Dosierung · geeignet bei Schluckstörungen</div></div>
    <div style="flex:1;background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#fb7185;font-size:.82rem">⚠️ Nachteile</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Kürzere Haltbarkeit · Dosierungsfehler möglich · empfindlich gegen Licht/Temperatur</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Flüssige Arzneiformen wirken oft <strong>schneller</strong> als feste Arzneiformen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Lösungen</div></div>
  <p class="lekt-prose">Eine <strong>Lösung</strong> besteht aus Wirkstoffen, die vollständig in einer Flüssigkeit gelöst sind. Die Flüssigkeit erscheint <strong>klar</strong> und enthält keine sichtbaren Partikel.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Trinklösungen · Infusionslösungen · Augenlösungen · Mundspüllösungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Bei Lösungen ist der Wirkstoff <strong>vollständig gelöst</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Tropfen</div></div>
  <p class="lekt-prose"><strong>Tropfen</strong> werden mithilfe eines Tropfers oder Dosiersystems verabreicht. Die Dosierung erfolgt häufig über die <strong>Anzahl der Tropfen</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Anwendungsbereiche</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Augentropfen · Nasentropfen · Ohrentropfen · Trinktropfen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Tropfenzahl muss immer sorgfältig <strong>kontrolliert</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Augentropfen</div></div>
  <p class="lekt-prose"><strong>Augentropfen</strong> werden direkt in den <strong>Bindehautsack</strong> eingebracht und wirken überwiegend lokal.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🏥 Pflegerische Hinweise</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Händedesinfektion durchführen</li>
      <li><strong>Tropferspitze nicht berühren</strong></li>
      <li>Kopf leicht nach hinten neigen</li>
      <li>Unterlid vorsichtig nach unten ziehen</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Tropferspitze darf weder Auge noch Haut berühren.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Nasentropfen</div></div>
  <p class="lekt-prose"><strong>Nasentropfen</strong> werden in die Nasenhöhle eingebracht und wirken meist lokal auf die Schleimhaut. Anwendung: Erkältungen, Allergien, Schleimhautschwellungen, Nasennebenhöhlenentzündungen.</p>
  <div class="lekt-zusammen" style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b"><strong>Merke:</strong> Abschwellende Nasentropfen sollten nur <strong>begrenzte Zeit</strong> angewendet werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Tinkturen</div></div>
  <p class="lekt-prose"><strong>Tinkturen</strong> sind alkoholische oder hydroalkoholische Lösungen von Arzneistoffen oder pflanzlichen Wirkstoffen. Lange Haltbarkeit, hohe Wirkstoffkonzentration.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💡 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Jodtinktur · pflanzliche Heilpflanzentinkturen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Viele Tinkturen enthalten <strong>Alkohol</strong> als Lösungsmittel.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Medizinweine</div></div>
  <p class="lekt-prose"><strong>Medizinweine</strong> sind Arzneizubereitungen, bei denen Wein als Trägerstoff verwendet wird. Heute besitzen sie nur noch eine geringe Bedeutung.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Medizinweine spielen in der modernen Pharmakotherapie <strong>kaum noch eine Rolle</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Suspensionen</div></div>
  <p class="lekt-prose">Bei <strong>Suspensionen</strong> sind feste Wirkstoffpartikel in einer Flüssigkeit verteilt, jedoch <strong>nicht vollständig gelöst</strong>. Die Partikel können sich mit der Zeit am Boden absetzen (Sedimentation).</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f59e0b">⚠️ Besonderheiten & Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Vor Gebrauch schütteln · sichtbare Partikel möglich<br>Beispiele: Antibiotikasäfte · Antazida</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b"><strong>Merke:</strong> Suspensionen müssen vor der Anwendung gut <strong>geschüttelt</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Emulsionen</div></div>
  <p class="lekt-prose">Eine <strong>Emulsion</strong> besteht aus zwei Flüssigkeiten, die normalerweise nicht mischbar sind — typischerweise <strong>Öl und Wasser</strong>.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(129,140,248,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#818cf8;font-size:.8rem">💧 O/W</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Öl-in-Wasser: Öltröpfchen in Wasser</div></div>
    <div style="flex:1;background:rgba(129,140,248,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#818cf8;font-size:.8rem">🛢️ W/O</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Wasser-in-Öl: Wassertröpfchen in Öl</div></div>
  </div>
  <p class="lekt-prose" style="font-size:.8rem">Beispiele: medizinische Cremes · Pflegelotionen · Trinkemulsionen</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Emulsionen verbinden zwei normalerweise <strong>nicht mischbare</strong> Flüssigkeiten.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Pflegerische Verantwortung</div></div>
  <p class="lekt-prose">Pflegefachpersonen tragen Verantwortung für die korrekte Vorbereitung, Dosierung und Verabreichung flüssiger Arzneiformen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Wichtige Maßnahmen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Verordnung kontrollieren · Dosierung überprüfen · Messhilfen korrekt verwenden · Verfallsdatum & Lagerung beachten · Patient beobachten · dokumentieren</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Eine <strong>genaue Dosierung</strong> ist besonders bei flüssigen Arzneimitteln entscheidend.</div>
</div>
</div></div>`,

    'Halbfeste & gasförmige Arzneiformen': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">💉 Arzneiformen · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Halbfeste & gasförmige Arzneiformen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Salben, Cremes, Gele, Aerosole & Sauerstoff</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Überblick</div></div>
  <p class="lekt-prose">Halbfeste und gasförmige Arzneiformen werden überwiegend <strong>lokal</strong> angewendet. Sie ermöglichen eine gezielte Behandlung von Haut, Schleimhäuten oder Atemwegen.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die richtige Arzneiform unterstützt <strong>Wirksamkeit und Sicherheit</strong> der Therapie.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Halbfeste Arzneiformen</div></div>
  <p class="lekt-prose">Halbfeste Arzneiformen besitzen eine <strong>streichfähige</strong> Konsistenz und werden meist auf Haut oder Schleimhäuten angewendet. Wichtige Vertreter: Salben, Cremes, Gele, Pasten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Gezielte lokale Wirkung · geringere systemische Belastung · einfache Anwendung</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Halbfeste Arzneiformen wirken überwiegend <strong>am Ort der Anwendung</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Salben</div></div>
  <p class="lekt-prose"><strong>Salben</strong> bestehen überwiegend aus fettigen Grundlagen und enthalten wenig oder kein Wasser. Sie bilden einen schützenden <strong>Fettfilm</strong> und verhindern Wasserverlust.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📋 Eigenschaften & Anwendung</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Stark rückfettend · wasserabweisend · schützend<br>Bei: trockener Haut, chronischen Hauterkrankungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Salben eignen sich besonders für <strong>trockene und schuppige Haut</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Cremes</div></div>
  <p class="lekt-prose"><strong>Cremes</strong> bestehen aus <strong>Fett und Wasser</strong> und sind dadurch leichter aufzutragen als Salben.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(129,140,248,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#818cf8;font-size:.8rem">💧 O/W</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px">Öl-in-Wasser-Creme</div></div>
    <div style="flex:1;background:rgba(129,140,248,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#818cf8;font-size:.8rem">🛢️ W/O</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px">Wasser-in-Öl-Creme</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Cremes enthalten sowohl <strong>Wasser als auch Fett</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Gele</div></div>
  <p class="lekt-prose"><strong>Gele</strong> bestehen überwiegend aus Wasser und enthalten Gelbildner. Sie ziehen schnell ein und hinterlassen kaum Fett.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">❄️ Eigenschaften & Anwendung</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Kühlend · schnelle Aufnahme · nicht fettend<br>Bei: Sportverletzungen, Entzündungen, Schwellungen, Schmerzen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Gele wirken häufig <strong>kühlend</strong> und ziehen rasch ein.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Pasten</div></div>
  <p class="lekt-prose"><strong>Pasten</strong> enthalten große Mengen pulverförmiger Bestandteile in einer Salbengrundlage und besitzen eine <strong>festere</strong> Konsistenz.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📋 Eigenschaften & Anwendung</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schützend · bindet Feuchtigkeit · haftet gut<br>Bei: Wundschutz, Windeldermatitis, nässenden Hautveränderungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Pasten schützen die Haut und <strong>binden Feuchtigkeit</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Okklusivverband</div></div>
  <p class="lekt-prose">Ein <strong>Okklusivverband</strong> deckt die behandelte Haut luft- und wasserdicht ab und verbessert die Aufnahme bestimmter Wirkstoffe.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(34,197,94,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#22c55e;font-size:.8rem">✅ Wirkungen</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Erhöhte Hautfeuchtigkeit · bessere Wirkstoffaufnahme · verstärkte Wirkung</div></div>
    <div style="flex:1;background:rgba(251,113,133,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#fb7185;font-size:.8rem">⚠️ Risiken</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Hautreizungen · Mazeration · Infektionsrisiko</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Unter einem Okklusivverband steigt die <strong>Durchlässigkeit</strong> der Haut.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Gasförmige Arzneiformen</div></div>
  <p class="lekt-prose">Gasförmige Arzneiformen werden hauptsächlich über die <strong>Atemwege</strong> aufgenommen. Die Wirkstoffe gelangen über die Lunge in den Körper oder wirken direkt in den Atemwegen. Beispiele: Aerosole, Dosieraerosole, Sauerstoff, Inhalationsnarkotika.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Lunge besitzt eine <strong>große Aufnahmefläche</strong> für Arzneistoffe.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Aerosole & Dosieraerosole</div></div>
  <p class="lekt-prose"><strong>Aerosole</strong> bestehen aus fein verteilten festen oder flüssigen Partikeln in einem Gas und werden eingeatmet. <strong>Dosieraerosole</strong> geben bei jeder Anwendung eine exakt festgelegte Wirkstoffmenge ab.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Anwendung & Hinweise</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Bei Asthma bronchiale, COPD, chronischen Atemwegserkrankungen<br><strong>Wichtig:</strong> richtige Inhalationstechnik, Koordination von Auslösen und Einatmen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Eine falsche Inhalationstechnik vermindert die Wirksamkeit erheblich. Je kleiner die Partikel, desto tiefer gelangen sie in die Atemwege.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Sauerstoff</div></div>
  <p class="lekt-prose">Medizinischer <strong>Sauerstoff</strong> wird zur Behandlung von Patienten mit Sauerstoffmangel eingesetzt. Anwendungsformen: Nasenbrille, Sauerstoffmaske, Reservoirmaske.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🩺 Pflegebeobachtung</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Atemfrequenz · Sauerstoffsättigung · Hautfarbe · Bewusstseinslage</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b"><strong>Merke:</strong> Sauerstoff ist ein <strong>Arzneimittel</strong> und darf nur nach ärztlicher Anordnung verabreicht werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Inhalationsnarkotika</div></div>
  <p class="lekt-prose"><strong>Inhalationsnarkotika</strong> sind gasförmige oder verdampfbare Arzneistoffe zur Durchführung einer Allgemeinanästhesie. Sie führen zu Bewusstlosigkeit, Schmerzfreiheit und Muskelentspannung.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Ziele der Allgemeinanästhesie</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Bewusstseinsverlust · Schmerzfreiheit · Muskelrelaxation · Operationsfähigkeit</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Inhalationsnarkotika werden überwiegend im <strong>Operationsbereich</strong> eingesetzt.</div>
</div>
</div></div>`,

  },

  pharma_dosierung: {

    'Dosierungslehre': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">⚖️ Dosierung · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Dosierungslehre</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Normdosis, Einzeldosis, Maximaldosis & Co.</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist Dosierung?</div></div>
  <p class="lekt-prose">Die <strong>Dosierung</strong> beschreibt die Menge eines Arzneimittels, die einem Patienten verabreicht wird. Eine korrekte Dosierung ist entscheidend für <strong>Therapieerfolg und Patientensicherheit</strong>.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(251,113,133,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#fb7185;font-size:.8rem">⬇️ Zu niedrig</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px">Unzureichende Wirkung</div></div>
    <div style="flex:1;background:rgba(239,68,68,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#ef4444;font-size:.8rem">⬆️ Zu hoch</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px">Nebenwirkungen, Vergiftung</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die richtige Dosierung ist eine der wichtigsten Voraussetzungen für eine <strong>sichere Arzneimitteltherapie</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Einflussfaktoren auf die Dosierung</div></div>
  <p class="lekt-prose">Die erforderliche Dosierung kann von Patient zu Patient unterschiedlich sein.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">👤 Alter</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">⚖️ Körpergewicht</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">📏 Körpergröße</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">⚧ Geschlecht</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💧 Nierenfunktion</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🫀 Leberfunktion</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🤰 Schwangerschaft</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">💊 Wechselwirkungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die gleiche Dosis kann bei verschiedenen Patienten <strong>unterschiedlich wirken</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Normdosis</div></div>
  <p class="lekt-prose">Die <strong>Normdosis</strong> ist die durchschnittliche Dosis eines Arzneimittels für einen gesunden Erwachsenen. Sie dient als <strong>Orientierung</strong>.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Normdosis ist ein <strong>Richtwert</strong> und muss individuell angepasst werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Einzeldosis & Tagesdosis</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">💊 Einzeldosis</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Menge bei einer einzelnen Verabreichung. Beispiel: Paracetamol 500 mg einmalig</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">📅 Tagesdosis</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Gesamtmenge in 24 h. Beispiel: 3 × 500 mg = <strong>1500 mg/Tag</strong></div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Tagesdosis ergibt sich aus der <strong>Summe aller Einzeldosen</strong> eines Tages.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Initialdosis</div></div>
  <p class="lekt-prose">Die <strong>Initialdosis</strong> ist die erste verabreichte Dosis zu Beginn einer Therapie. Sie kann höher sein als die spätere Erhaltungsdosis, um rasch eine wirksame Konzentration zu erreichen.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Initialdosis dient dem <strong>schnellen Erreichen</strong> eines therapeutischen Wirkspiegels.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Sättigungsdosis (Loading Dose)</div></div>
  <p class="lekt-prose">Die <strong>Sättigungsdosis</strong> ist eine erhöhte Anfangsdosis, um schnell einen wirksamen Arzneimittelspiegel zu erreichen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Anwendungsgebiete</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Herzmedikamente · bestimmte Antibiotika · Notfallmedikamente</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Sättigungsdosis ist meist <strong>höher</strong> als die spätere Erhaltungsdosis.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Erhaltungsdosis</div></div>
  <p class="lekt-prose">Die <strong>Erhaltungsdosis</strong> dient dazu, den gewünschten Wirkstoffspiegel über einen längeren Zeitraum aufrechtzuerhalten. Sie folgt häufig auf eine Initial- oder Sättigungsdosis.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Erhaltungsdosis <strong>stabilisiert</strong> den therapeutischen Effekt.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Maximaldosis</div></div>
  <p class="lekt-prose">Die <strong>Maximaldosis</strong> ist die höchste zulässige Dosis eines Arzneimittels innerhalb eines bestimmten Zeitraums. Eine Überschreitung kann zu <strong>schweren Nebenwirkungen</strong> führen.</p>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Die Maximaldosis darf <strong>niemals</strong> überschritten werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Toxische Dosis</div></div>
  <p class="lekt-prose">Die <strong>toxische Dosis</strong> ist die Arzneimittelmenge, bei der Vergiftungserscheinungen auftreten können.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Mögliche Folgen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Übelkeit · Erbrechen · Bewusstseinsstörungen · Organschäden · Kreislaufstörungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die toxische Dosis liegt <strong>oberhalb</strong> des therapeutischen Bereichs.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Letaldosis</div></div>
  <p class="lekt-prose">Die <strong>Letaldosis</strong> bezeichnet die Arzneimittelmenge, die zum Tod führen kann.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">☠️ LD50</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">In der Pharmakologie wird häufig die <strong>LD50</strong> verwendet — die Dosis, bei der 50 % einer Versuchsgruppe sterben würden.</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Die Letaldosis ist <strong>lebensgefährlich</strong> und weit oberhalb der therapeutischen Dosis.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Kinderdosierung</div></div>
  <p class="lekt-prose">Kinder erhalten <strong>keine Standarddosen</strong> für Erwachsene. Die Dosierung wird individuell berechnet. Kinder reagieren empfindlicher auf Dosierungsfehler.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">👶 Wichtige Kriterien</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Körpergewicht · Alter · Körperoberfläche · Entwicklungsstand</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e"><strong>Merke:</strong> Kinder sind <strong>keine kleinen Erwachsenen</strong> — ihre Dosierung muss individuell berechnet werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">12</div><div class="lekt-title">Pflegerische Verantwortung</div></div>
  <p class="lekt-prose">Pflegefachpersonen tragen Verantwortung für die <strong>sichere Verabreichung</strong> von Medikamenten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Wichtige Aufgaben</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Dosierung <strong>überprüfen</strong></li>
      <li>Verordnung kontrollieren</li>
      <li>Patient beobachten</li>
      <li>Nebenwirkungen erkennen</li>
      <li>Dokumentation durchführen</li>
      <li>Unklarheiten <strong>sofort klären</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Jede Dosierung muss <strong>vor</strong> der Verabreichung sorgfältig überprüft werden.</div>
</div>
</div></div>`,

    'Mengenberechnung': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">⚖️ Dosierung · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Mengenberechnung</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Einheiten, Umrechnungen & Dosierungsformeln</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Wichtigkeit der Mengenberechnung</div></div>
  <p class="lekt-prose">Die Mengenberechnung gehört zu den <strong>wichtigsten Kompetenzen</strong> in der Pflege. Fehler können zu Überdosierungen, Unterdosierungen oder schwerwiegenden Komplikationen führen.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Bei jeder Medikamentengabe muss die berechnete Menge <strong>überprüft</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Maßeinheiten in der Pharmakologie</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)"><strong>g</strong> — Gramm</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)"><strong>mg</strong> — Milligramm</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)"><strong>µg</strong> — Mikrogramm</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)"><strong>l</strong> — Liter</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)"><strong>ml</strong> — Milliliter</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)"><strong>gtt</strong> — Tropfen</div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2);grid-column:span 2"><strong>IE</strong> — Internationale Einheiten</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> <strong>mg und µg</strong> dürfen niemals verwechselt werden!</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Gewichtseinheiten umrechnen</div></div>
  <div style="background:rgba(129,140,248,.08);border:1px solid rgba(129,140,248,.3);border-radius:12px;padding:14px;margin-bottom:10px">
    <div style="font-weight:700;color:#818cf8;font-size:.88rem;margin-bottom:6px">📏 Grundlagen</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.8">
      1 g = <strong>1000 mg</strong><br>
      1 mg = <strong>1000 µg</strong><br>
      1 g = <strong>1.000.000 µg</strong>
    </div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">💡 Beispiele</div>
    <div style="font-size:.82rem;color:var(--ink2);line-height:1.8;margin-top:6px">
      2 g = <strong>2000 mg</strong><br>
      500 mg = <strong>0,5 g</strong><br>
      2500 µg = <strong>2,5 mg</strong>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Beim Umrechnen <strong>nach unten</strong> wird multipliziert, <strong>nach oben</strong> dividiert.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Volumeneinheiten umrechnen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">💧 Umrechnungen</div>
    <div style="font-size:.85rem;color:var(--ink2);line-height:1.8;margin-top:6px">
      1 l = <strong>1000 ml</strong><br>
      0,5 l = <strong>500 ml</strong><br>
      250 ml = <strong>0,25 l</strong>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>1000 ml</strong> entsprechen immer 1 Liter.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Tropfenberechnung</div></div>
  <p class="lekt-prose">Bei Tropfenlösungen erfolgt die Dosierung über die Anzahl der Tropfen.</p>
  <div style="background:rgba(129,140,248,.08);border:1px solid rgba(129,140,248,.3);border-radius:12px;padding:14px">
    <div style="font-weight:700;color:#818cf8;font-size:.88rem">📐 Faustregel</div>
    <div style="font-size:1rem;color:var(--ink);font-weight:600;margin-top:6px"><strong>20 Tropfen ≈ 1 ml</strong></div>
    <div style="font-size:.78rem;color:var(--ink3);margin-top:4px">Beispiel: 10 ml ≈ 200 Tropfen</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b"><strong>Merke:</strong> Die <strong>Herstellerangaben</strong> haben immer Vorrang vor allgemeinen Faustregeln.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Internationale Einheiten (IE)</div></div>
  <p class="lekt-prose">Einige Arzneimittel werden in <strong>Internationalen Einheiten (IE)</strong> angegeben — sie beschreiben die <strong>biologische Wirkung</strong> eines Wirkstoffs.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💉 Beispiele</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Insulin · Heparin · Vitamin D</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> IE können <strong>nicht einfach</strong> in Gramm oder Milligramm umgerechnet werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Grundformel der Dosierung</div></div>
  <div style="background:linear-gradient(135deg,rgba(129,140,248,.15),rgba(79,70,229,.1));border:2px solid rgba(129,140,248,.4);border-radius:12px;padding:16px;text-align:center;margin-bottom:12px">
    <div style="font-size:.75rem;color:var(--ink3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">🔑 Wichtigste Formel</div>
    <div style="font-family:'Fraunces',serif;font-size:1rem;color:var(--ink);font-weight:600;line-height:1.5">Verordnete Dosis<br>÷ vorhandene Dosis<br>× vorhandenes Volumen</div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">💡 Beispiel</div>
    <div style="font-size:.82rem;color:var(--ink2);line-height:1.7;margin-top:6px">
      Verordnet: <strong>250 mg</strong><br>
      Vorhanden: 500 mg in 1 Tablette<br><br>
      <strong>250 ÷ 500 × 1 = 0,5 Tabletten</strong>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Immer zuerst prüfen, welche <strong>Wirkstoffmenge</strong> tatsächlich vorhanden ist.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Berechnung von Flüssigkeiten</div></div>
  <p class="lekt-prose">Auch bei Lösungen wird dieselbe Grundformel verwendet.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">💡 Beispiel</div>
    <div style="font-size:.82rem;color:var(--ink2);line-height:1.7;margin-top:6px">
      Verordnet: <strong>250 mg</strong><br>
      Vorhanden: 500 mg in 10 ml<br><br>
      <strong>250 ÷ 500 × 10 = 5 ml</strong>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Einheit des Endergebnisses entspricht dem <strong>vorhandenen Volumen</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Insulinberechnung</div></div>
  <p class="lekt-prose">Insulin wird in <strong>IE</strong> angegeben. Die Dosierung erfolgt mit speziellen Insulinspritzen oder Insulinpens.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💉 Beispiel</div>
    <div style="font-size:.82rem;color:var(--ink2);line-height:1.7;margin-top:6px">Verordnet: <strong>8 IE Insulin</strong><br>→ Der Patient erhält exakt 8 IE gemäß Skala des Pens oder der Spritze.</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Insulin gehört zu den <strong>Hochrisiko-Arzneimitteln</strong> und muss besonders sorgfältig kontrolliert werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Häufige Berechnungsfehler</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Vorsicht!</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Verwechslung von <strong>mg und µg</strong></li>
      <li>Falsche Dezimalstellen</li>
      <li>Fehlerhafte Umrechnungen</li>
      <li>Verwechslung von <strong>IE und mg</strong></li>
      <li>Nichtbeachtung der Konzentration</li>
      <li>Rechenfehler unter Zeitdruck</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e"><strong>Merke:</strong> Berechnungen sollten möglichst durch eine <strong>zweite Person</strong> kontrolliert werden (Vier-Augen-Prinzip).</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Pflegerische Verantwortung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Wichtige Maßnahmen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Berechnung überprüfen · Verordnung kontrollieren · Einheiten beachten · Vier-Augen-Prinzip · Patient beobachten · dokumentieren</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Jede fehlerhafte Berechnung kann die <strong>Patientensicherheit</strong> gefährden.</div>
</div>
</div></div>`,

    'Applikationsarten & Applikationswege': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">⚖️ Dosierung · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Applikationsarten & Applikationswege</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Wie kommt das Arzneimittel in den Körper?</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist Applikation?</div></div>
  <p class="lekt-prose">Unter <strong>Applikation</strong> versteht man die Verabreichung eines Arzneimittels. Der Applikationsweg beeinflusst <strong>Wirkungseintritt, Wirkungsdauer, Resorption</strong> und Nebenwirkungen.</p>
  <div class="lekt-zusammen"><strong>Merke:</strong> Der Applikationsweg beeinflusst <strong>Geschwindigkeit und Stärke</strong> der Arzneimittelwirkung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Einteilung der Applikationswege</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#22c55e;font-size:.82rem">🍽️ Enteral</div><div style="font-size:.72rem;color:var(--ink2);margin-top:4px">Über Magen-Darm-Trakt</div></div>
    <div style="background:rgba(251,113,133,.08);border:1px solid rgba(251,113,133,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#fb7185;font-size:.82rem">💉 Parenteral</div><div style="font-size:.72rem;color:var(--ink2);margin-top:4px">Umgehung Verdauung</div></div>
    <div style="background:rgba(129,140,248,.08);border:1px solid rgba(129,140,248,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#818cf8;font-size:.82rem">📍 Lokal</div><div style="font-size:.72rem;color:var(--ink2);margin-top:4px">Am Ort der Anwendung</div></div>
    <div style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.3);border-radius:10px;padding:10px"><div style="font-weight:700;color:#a78bfa;font-size:.82rem">🌐 Systemisch</div><div style="font-size:.72rem;color:var(--ink2);margin-top:4px">Im ganzen Körper</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>Enteral</strong> = über den Verdauungstrakt · <strong>parenteral</strong> = unter Umgehung des Verdauungstrakts.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Enterale Applikation</div></div>
  <p class="lekt-prose">Das Arzneimittel gelangt über den <strong>Magen-Darm-Trakt</strong> in den Körper: Oral · Sublingual · Bukkal · Rektal.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Einfache Anwendung · nicht invasiv · hohe Patientenakzeptanz</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die <strong>orale Gabe</strong> ist weltweit die häufigste Applikationsform.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Parenterale Applikation</div></div>
  <p class="lekt-prose"><strong>Parenterale</strong> Arzneimittel werden unter Umgehung des Verdauungstrakts verabreicht: Intrakutan · Subkutan · Intramuskulär · Intravenös.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schneller Wirkungseintritt · exakte Dosierung · auch bei Bewusstlosigkeit möglich</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>Intravenöse</strong> Arzneimittel wirken meist am schnellsten.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Orale Applikation</div></div>
  <p class="lekt-prose">Bei der <strong>oralen</strong> Anwendung wird das Arzneimittel geschluckt: Tabletten · Kapseln · Tropfen · Säfte.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Nachteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Langsamer Wirkungseintritt · <strong>First-Pass-Effekt</strong> der Leber · nicht geeignet bei Erbrechen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Viele oral verabreichte Arzneimittel passieren zunächst die <strong>Leber</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Sublinguale & bukkale Applikation</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">👅 Sublingual</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Unter die Zunge, Aufnahme über Mundschleimhaut. Umgeht First-Pass-Effekt. Beispiel: <strong>Nitroglycerin</strong> bei Angina pectoris</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">😊 Bukkal</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Zwischen Zahnfleisch und Wangenschleimhaut</div></div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b"><strong>Merke:</strong> Sublinguale Arzneimittel dürfen <strong>nicht geschluckt</strong> werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Rektale & vaginale Applikation</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">🍑 Rektal</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Über den Enddarm: Suppositorien · Klistiere · Rektallösungen. Geeignet bei Übelkeit/Erbrechen, besonders bei Kindern.</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">🌸 Vaginal</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Vaginaltabletten · Zäpfchen · Cremes. Häufig zur lokalen Infektionsbehandlung.</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die rektale Anwendung umgeht teilweise den First-Pass-Effekt.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Kutan & transdermal</div></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:12px"><div style="font-weight:700;color:#22c55e;font-size:.88rem">🖐️ Kutan</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Auf der Haut mit <strong>lokaler</strong> Wirkung: Salben · Cremes · Gele</div></div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:12px"><div style="font-weight:700;color:#a78bfa;font-size:.88rem">🩹 Transdermal</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Wirkstoff <strong>durch die Haut</strong> in den Blutkreislauf: Schmerz-, Nikotin-, Hormonpflaster</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Transdermale Systeme wirken <strong>systemisch</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Intrakutane Injektion (i.c.)</div></div>
  <p class="lekt-prose">Die Injektion erfolgt in die <strong>Haut (Dermis)</strong> — sehr oberflächlich.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🎯 Anwendung & Menge</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Allergietests · Tuberkulintest<br>Meist <strong>0,1 ml</strong></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Intrakutane Injektionen werden sehr <strong>oberflächlich</strong> verabreicht.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Subkutane Injektion (s.c.)</div></div>
  <p class="lekt-prose">Injektion in das <strong>Unterhautfettgewebe</strong>. Eine der häufigsten Injektionen in der Pflege.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💉 Beispiele & Orte</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px"><strong>Medikamente:</strong> Insulin · Heparin<br><strong>Orte:</strong> Bauch · Oberschenkel · Oberarm</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die subkutane Injektion gehört zu den <strong>häufigsten</strong> Injektionen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Intramuskuläre Injektion (i.m.)</div></div>
  <p class="lekt-prose">Injektion direkt in die <strong>Muskulatur</strong>. Schnellere Resorption als s.c., größere Volumina möglich.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💪 Typische Orte</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">M. deltoideus · M. vastus lateralis · ventrogluteale Region</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Intramuskuläre Injektionen wirken <strong>schneller</strong> als subkutane.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">12</div><div class="lekt-title">Intravenöse Applikation (i.v.)</div></div>
  <p class="lekt-prose">Der Arzneistoff wird <strong>direkt in eine Vene</strong> verabreicht.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(34,197,94,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#22c55e;font-size:.8rem">✅ Vorteile</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Sofortige Wirkung · 100% Bioverfügbarkeit · exakte Dosierung</div></div>
    <div style="flex:1;background:rgba(239,68,68,.08);border-radius:10px;padding:10px"><div style="font-weight:700;color:#ef4444;font-size:.8rem">⚠️ Risiken</div><div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Infektionen · Paravasate · Embolien</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Intravenös verabreichte Arzneimittel gelangen <strong>unmittelbar</strong> in den Blutkreislauf.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">13</div><div class="lekt-title">Inhalative Applikation</div></div>
  <p class="lekt-prose">Arzneimittel werden über die <strong>Atemwege</strong> aufgenommen: Dosieraerosole · Vernebler · Sauerstoff.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Vorteile</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schneller Wirkungseintritt · gezielte Wirkung in den Atemwegen · geringere systemische Belastung</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die richtige <strong>Inhalationstechnik</strong> ist entscheidend für den Therapieerfolg.</div>
</div>
</div></div>`,

    'Sichere Arzneimittelgabe (6-R & 10-R)': () => `
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">⚖️ Dosierung · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Sichere Arzneimittelgabe</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">6-R · 10-R · Hochrisiko-Medikamente</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Regeln der sicheren Arzneimittelgabe</div></div>
  <p class="lekt-prose">Die sichere Verabreichung von Arzneimitteln gehört zu den wichtigsten Aufgaben von Pflegefachpersonen. Fehler können <strong>schwerwiegende Folgen</strong> für Patienten haben.</p>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> <strong>Patientensicherheit</strong> hat bei jeder Arzneimittelgabe höchste Priorität.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Die 6-R-Regel</div></div>
  <p class="lekt-prose">Die <strong>6-R-Regel</strong> bildet die Grundlage einer sicheren Medikamentengabe.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">1️⃣ Richtiger <strong>Patient</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">2️⃣ Richtiges <strong>Arzneimittel</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">3️⃣ Richtige <strong>Dosierung</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">4️⃣ Richtiger <strong>Zeitpunkt</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">5️⃣ Richtiger <strong>Applikationsweg</strong></div>
    <div style="background:rgba(129,140,248,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">6️⃣ Richtige <strong>Dokumentation</strong></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Vor jeder Arzneimittelgabe müssen <strong>alle sechs</strong> Punkte überprüft werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Die 10-R-Regel</div></div>
  <p class="lekt-prose">Die moderne Pflege erweitert die 6-R-Regel zur <strong>10-R-Regel</strong>. Zusätzlich:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">7️⃣ Richtige <strong>Anwendungsdauer</strong></div>
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">8️⃣ Richtige <strong>Aufbewahrung</strong></div>
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">9️⃣ Richtiges <strong>Risikomanagement</strong></div>
    <div style="background:rgba(167,139,250,.08);border-radius:8px;padding:8px 10px;font-size:.78rem;color:var(--ink2)">🔟 Richtige <strong>Entsorgung</strong></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die 10-R-Regel umfasst den gesamten Lebenszyklus des Arzneimittels — von der Anwendung bis zur Entsorgung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Patientenidentifikation</div></div>
  <p class="lekt-prose">Vor jeder Medikamentengabe muss die Identität des Patienten <strong>eindeutig</strong> überprüft werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Möglichkeiten</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Name erfragen · Geburtsdatum kontrollieren · Patientenarmband prüfen · Pflegedokumentation vergleichen</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Niemals Medikamente verabreichen, wenn <strong>Zweifel</strong> an der Patientenidentität bestehen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Medikamentenfehler</div></div>
  <p class="lekt-prose">Medikamentenfehler gehören zu den häufigsten <strong>vermeidbaren Risiken</strong> im Gesundheitswesen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Häufige Fehlerquellen</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Falscher Patient · falsches Medikament · falsche Dosierung · falscher Applikationsweg · falscher Zeitpunkt · Berechnungsfehler · Verwechslungen</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die meisten Fehler entstehen durch mangelnde Kontrolle und <strong>Zeitdruck</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Dokumentation</div></div>
  <p class="lekt-prose">Jede Arzneimittelgabe muss <strong>nachvollziehbar</strong> dokumentiert werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📋 Inhalte</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Name des Arzneimittels · Dosierung · Uhrzeit · Applikationsweg · Besonderheiten · Beobachtungen</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> <strong>Nicht dokumentiert = nicht durchgeführt</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Delegation & Verantwortung</div></div>
  <p class="lekt-prose">Bestimmte Tätigkeiten können vom Arzt an Pflegefachpersonen delegiert werden.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px"><div style="font-weight:700;color:#818cf8;font-size:.88rem">👨‍⚕️ Arzt</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Indikation · Verordnung · Therapieentscheidung</div></div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:12px"><div style="font-weight:700;color:#22c55e;font-size:.88rem">👩‍⚕️ Pflegefachperson</div><div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Kontrolle · Vorbereitung · Verabreichung · Beobachtung · Dokumentation</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Delegation bedeutet <strong>nicht Übertragung</strong> der Verantwortung für die Durchführung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Hochrisiko-Medikamente</div></div>
  <p class="lekt-prose"><strong>Hochrisiko-Medikamente</strong> können bereits bei kleinen Fehlern schwere Schäden verursachen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Besondere Vorsicht bei</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Insulin · Heparin · Opioide · Kaliumkonzentrate · Zytostatika</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Hochrisiko-Medikamente müssen <strong>besonders sorgfältig</strong> kontrolliert werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">09</div><div class="lekt-title">Insulin</div></div>
  <p class="lekt-prose"><strong>Insulin</strong> zählt zu den wichtigsten Hochrisiko-Medikamenten in der Pflege.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">✓ Kontrollpunkte</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Blutzuckerwert prüfen</li>
      <li>Insulinart kontrollieren</li>
      <li>Dosierung überprüfen</li>
      <li>Verfallsdatum beachten</li>
      <li><strong>Vier-Augen-Prinzip</strong> anwenden</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Fehler bei Insulin können zu <strong>Hypoglykämien oder Hyperglykämien</strong> führen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">10</div><div class="lekt-title">Heparin</div></div>
  <p class="lekt-prose"><strong>Heparin</strong> wird zur Hemmung der Blutgerinnung eingesetzt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb7185">⚠️ Risiken</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Blutungen · Hämatome · Dosierungsfehler</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Bei Heparin muss besonders auf <strong>Blutungszeichen</strong> geachtet werden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">11</div><div class="lekt-title">Betäubungsmittel (BtM)</div></div>
  <p class="lekt-prose"><strong>Betäubungsmittel</strong> unterliegen besonderen gesetzlichen Vorschriften. Beispiele: Morphin · Fentanyl · Oxycodon.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">📋 Besonderheiten</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Gesonderte Dokumentation · Bestandskontrolle · sichere Aufbewahrung · nachvollziehbare Entnahme</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Für BtM gelten <strong>strengere</strong> Dokumentationspflichten als für normale Arzneimittel.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">12</div><div class="lekt-title">Lagerung & Verfallsdatum</div></div>
  <p class="lekt-prose">Die richtige <strong>Lagerung</strong> beeinflusst Wirksamkeit und Sicherheit von Arzneimitteln.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Wichtige Regeln</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Vor Licht schützen · Temperatur beachten · trocken lagern · Zugriff sichern · Originalverpackung</div>
  </div>
  <p class="lekt-prose" style="margin-top:10px">Das <strong>Verfallsdatum</strong> gibt an, bis wann ein Arzneimittel verwendet werden darf. Besonders zu beachten nach Anbruch: Augentropfen, Insulin, Infusionslösungen, Antibiotikasäfte.</p>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Abgelaufene Arzneimittel dürfen <strong>grundsätzlich nicht mehr</strong> angewendet werden.</div>
</div>
</div></div>`,

  },

  pharma_sicherheit: {

    'Arzneimittel richtig aufbewahren': () => `
<div class="lekt-layout"><div>

<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">🛡️ Sicherheit · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Arzneimittel richtig aufbewahren</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Lagerung, Temperaturen, Kühlkette, FEFO-Prinzip und Gefahrstoffe</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Allgemeine Lagerungsregeln</div></div>
  <p class="lekt-prose">Die richtige Aufbewahrung von Arzneimitteln ist ein wesentlicher Bestandteil der <strong>Patientensicherheit</strong>. Falsch gelagerte Medikamente können ihre Wirkung verlieren oder sogar schädlich werden.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📋 Grundregeln</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Behältnisse <strong>sicher verschließen</strong></li>
      <li>Lichtempfindliche Substanzen <strong>vor Licht schützen</strong></li>
      <li><strong>Trocken</strong> lagern</li>
      <li>Vor <strong>mechanischen Einflüssen</strong> schützen</li>
      <li>Auf das <strong>Verfallsdatum</strong> achten (FEFO-Prinzip)</li>
      <li>Möglichst <strong>kleine Lagermengen</strong></li>
      <li>Veränderungen <strong>erkennen und dokumentieren</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Arzneimittel immer verschlossen, trocken, lichtgeschützt und in kleinen Mengen lagern.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Lagerungstemperaturen (Europäische Pharmakopöe)</div></div>
  <p class="lekt-prose">Die <strong>Lagerungstemperatur</strong> steht auf der Packung oder im Beipackzettel und ist in den nationalen Arzneimittelbüchern definiert.</p>
  <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">
    <div style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b;border-radius:8px;padding:10px 12px"><div style="font-weight:700;color:#f59e0b;font-size:.85rem">🌡️ Raumtemperatur · 15–25 °C</div><div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Tabletten, Kapseln, Salben, Sprays, Suppositorien</div></div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:10px 12px"><div style="font-weight:700;color:#60a5fa;font-size:.85rem">❄️ Kalt/Kühl · 8–15 °C</div><div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Bestimmte Augentropfen, einige Sirupe</div></div>
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:10px 12px"><div style="font-weight:700;color:#818cf8;font-size:.85rem">🧊 Kühlschrank · 2–8 °C</div><div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Insulin, Suprarenin, Impfstoffe</div></div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:10px 12px"><div style="font-weight:700;color:#a78bfa;font-size:.85rem">🥶 Tiefgekühlt · unter −15 °C</div><div style="font-size:.75rem;color:var(--ink2);margin-top:3px">Bestimmte Impfstoffe (z.B. COVID-19)</div></div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Die Lagerungstemperatur gilt nur für original <strong>verschlossene</strong> Medikamente.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Kühlkette</div></div>
  <p class="lekt-prose">Kühlungspflichtige Medikamente (Insulin, Suprarenin) müssen bei <strong>2–8 °C</strong> aufbewahrt werden. Sie dürfen <strong>keinesfalls eingefroren</strong> werden — das Einfrieren verändert die Proteinstruktur und macht das Medikament unwirksam.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">❄️ Die Kühlkette</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px"><strong>Kühlkettenpflichtige Arzneimittel</strong> müssen über die gesamte Lieferkette — vom Hersteller bis zur Anwendung — <strong>ohne Unterbrechung</strong> im vorgeschriebenen Temperaturbereich gehalten werden. Beispiele: Lebendimpfstoffe, Insulin, bestimmte Biologika.</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Kühlkette nie unterbrechen — bei Unterbrechung sofort <strong>dokumentieren</strong> und Apotheke/Arzt informieren.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Verfallsdatum & FEFO-Prinzip</div></div>
  <p class="lekt-prose">Das <strong>Verfallsdatum</strong> ("verwendbar bis…") gilt nur für <strong>original verschlossene</strong> Medikamente. Nach dem Anbruch gilt oft ein kürzeres Verfallsdatum.</p>
  <div style="background:linear-gradient(135deg,rgba(129,140,248,.15),rgba(79,70,229,.1));border:2px solid rgba(129,140,248,.4);border-radius:12px;padding:16px;margin-bottom:10px">
    <div style="font-weight:700;color:#818cf8;font-size:.92rem;margin-bottom:6px">🗓️ FEFO-Prinzip</div>
    <div style="font-size:.82rem;color:var(--ink);line-height:1.6"><strong>F</strong>irst <strong>E</strong>xpired — <strong>F</strong>irst <strong>O</strong>ut</div>
    <div style="font-size:.78rem;color:var(--ink2);margin-top:6px;line-height:1.5">Arzneimittel mit dem frühesten Verfallsdatum werden zuerst verwendet. Vorgeschrieben in den <strong>EU-Leitlinien für die Gute Vertriebspraxis (GDP)</strong>.</div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f59e0b">⚠️ Nach dem Anbruch</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Angebrochene oder weiterverarbeitete Arzneimittel sind oft nur kurzzeitig haltbar. Immer mit <strong>Anbruchsdatum</strong> und <strong>Verfallsdatum nach Anbruch</strong> beschriften.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> FEFO = zuerst verfallende Medikamente zuerst verwenden.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Originalverpackung</div></div>
  <p class="lekt-prose">Medikamente müssen in der <strong>kompletten Originalverpackung</strong> zusammen mit dem Beipackzettel aufbewahrt werden — bis zum Verbrauch der letzten Tablette.</p>
  <div class="lekt-card" style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.3)">
    <div class="lekt-card-label" style="color:#ef4444">🚫 Niemals umfüllen!</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Um <strong>Verwechslungen zu vermeiden</strong>, dürfen Medikamente niemals in andere Gefäße umgefüllt werden. Alle relevanten Informationen sind an die Originalverpackung gebunden.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Arzneimittel immer in der <strong>Originalverpackung</strong> mit Beipackzettel — niemals umfüllen!</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Lagerung im häuslichen Bereich</div></div>
  <p class="lekt-prose">Im häuslichen Pflegebereich müssen Arzneimittel so aufbewahrt werden, dass sie für <strong>demenzkranke Patienten und Kinder nicht zugänglich</strong> sind.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🔒 Aufbewahrung zu Hause</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Medikamentenschrank in <strong>kühlem, trockenem Raum</strong> (z.B. Schlafzimmer) — <strong>nicht</strong> Bad oder Küche</li>
      <li>Kühlpflichtige Medikamente: <strong>abschließbare Box</strong> im Kühlschrank (Gemüsefach)</li>
      <li>BtM: möglichst <strong>eingeschlossen</strong></li>
      <li>Bei Selbstgefährdung: Pflegedienst <strong>führt Tabletten mit sich</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Im häuslichen Bereich Sicherheit vor <strong>Kindern und dementen Personen</strong> gewährleisten.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Umgang mit Gefahrstoffen</div></div>
  <p class="lekt-prose">Manche Substanzen gelten als <strong>feuergefährlich</strong> (Alkohol, Aceton, Benzin). Ihre Dämpfe sind leicht entzündlich → <strong>Explosionsgefahr</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">🔥 Lagerung feuergefährlicher Stoffe</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Nur in <strong>verschlossenen Gefäßen</strong></li>
      <li><strong>Nicht in der Nähe</strong> von Heizquellen oder offenem Feuer</li>
      <li>Vor <strong>direkter Sonneneinstrahlung</strong> schützen</li>
      <li>In Krankenhäusern oft <strong>feuerfester Schrank</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Feuergefährliche Substanzen verschlossen, kühl und fernab von Zündquellen lagern.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">08</div><div class="lekt-title">Entsorgung</div></div>
  <p class="lekt-prose">Abgelaufene Arzneimittel gelten als <strong>Sondermüll</strong> und dürfen nicht über Toilette oder Abfluss entsorgt werden — Arzneimittelrückstände belasten das Grundwasser.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">🗑️ Richtige Entsorgung</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Über <strong>Apotheke</strong> oder <strong>kommunale Abfallentsorgung</strong></li>
      <li><strong>Niemals</strong> über Toilette/Abfluss</li>
      <li>Medikamentenmüll <strong>kindersicher</strong> abwerfen</li>
      <li>Arzneimittel verstorbener Bewohner = Eigentum der <strong>Erben</strong></li>
      <li><strong>Nicht</strong> an andere Bewohner weitergeben</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Arzneimittel sind <strong>Sondermüll</strong> — immer über Apotheke oder kommunale Entsorgung.</div>
</div>

</div></div>`,

    'Risikomanagement & Dokumentation': () => `
<div class="lekt-layout"><div>

<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">🛡️ Sicherheit · Lektion 2</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Risikomanagement & Dokumentation</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Medikationsfehler erkennen, melden, analysieren und dokumentieren</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Medikationsfehler?</div></div>
  <p class="lekt-prose">Ein <strong>Medikationsfehler</strong> ist jede vermeidbare Handlung oder Unterlassung im Umgang mit Arzneimitteln, die zu einer <strong>unangemessenen Medikation</strong> führt oder führen kann — unabhängig davon, ob ein Schaden entsteht.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Häufige Arten</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Falsches Medikament</strong></li>
      <li><strong>Falsche Dosierung</strong> (zu viel/wenig)</li>
      <li><strong>Falscher Patient</strong> — Verwechslung</li>
      <li><strong>Falscher Zeitpunkt</strong></li>
      <li><strong>Falsche Applikationsform/-route</strong></li>
      <li><strong>Abgelaufenes Medikament</strong></li>
      <li><strong>Doppelgabe</strong> oder <strong>unterlassene Gabe</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Ein Medikationsfehler liegt auch ohne sichtbaren Schaden vor — entscheidend ist die <strong>Abweichung vom Standard</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Fehlerquellen</div></div>
  <p class="lekt-prose">Fehler entstehen selten durch eine einzelne Ursache — meist sind <strong>mehrere Faktoren</strong> beteiligt.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(251,113,133,.08);border-left:3px solid #fb7185;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#fb7185;font-size:.88rem">🧠 Personenbezogen</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Übermüdung · Stress · Ablenkung · Wissensmängel · Kommunikationsfehler · Routine</div>
    </div>
    <div style="background:rgba(245,158,11,.08);border-left:3px solid #f59e0b;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#f59e0b;font-size:.88rem">⚙️ Systembezogen</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5"><strong>Look-alike/Sound-alike</strong> · unleserliche Verordnungen · Schnittstellen · <strong>Polymedikation</strong> · Zeitmangel · fehlendes Vier-Augen-Prinzip</div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Systemfehler analysieren, <strong>nicht Personen beschuldigen</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Sicherheitskultur & CIRS</div></div>
  <p class="lekt-prose">Eine positive <strong>Sicherheitskultur</strong> nutzt Fehler als <strong>Lernchance</strong>. Ziel: Systemverbesserung, nicht Schuldzuweisung.</p>
  <div style="background:linear-gradient(135deg,rgba(129,140,248,.15),rgba(79,70,229,.1));border:2px solid rgba(129,140,248,.4);border-radius:12px;padding:14px;margin-bottom:10px">
    <div style="font-weight:700;color:#818cf8;font-size:.95rem;margin-bottom:6px">🔄 CIRS</div>
    <div style="font-size:.78rem;color:var(--ink2);line-height:1.6"><strong>Critical Incident Reporting System</strong> — anonymes, sanktionsfreies Fehlermeldesystem. Auch <em>Beinahe-Fehler (Near-Miss)</em> können gemeldet werden.</div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">⚖️ Gesetzliche Grundlage</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Seit <strong>2014 (§ 137 SGB V)</strong> sind Krankenhäuser in Deutschland verpflichtet, ein Risikomanagement-System vorzuhalten. Rund <strong>90 %</strong> der Allgemeinkrankenhäuser nehmen an einrichtungsübergreifenden Lernsystemen teil.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Fehler melden ist <strong>professionelle Verantwortung</strong>, kein Versagen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Das Vier-Augen-Prinzip</div></div>
  <p class="lekt-prose">Eine zweite Person kontrolliert <strong>unabhängig</strong>, ob das Medikament korrekt vorbereitet wurde — <strong>bevor</strong> es verabreicht wird.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">👁️ Wann anwenden?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Hochrisikomedikamente</strong> (Insulin, Heparin, Zytostatika)</li>
      <li><strong>Mündliche Anordnungen</strong> (Rückbestätigung!)</li>
      <li><strong>Ungewohnte/unbekannte</strong> Medikamente</li>
      <li>Bei <strong>Unsicherheiten</strong></li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#22c55e">📌 Was wird kontrolliert?</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Medikament · Dosierung · Patient · Applikationsform/-route · Zeitpunkt</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Keine Misstrauensgeste — ein <strong>Sicherheitsstandard</strong> zum Schutz aller.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Verhalten bei Fehlern</div></div>
  <p class="lekt-prose">Bei einem Medikationsfehler ist <strong>schnelles, strukturiertes Handeln</strong> entscheidend. <strong>Nicht verschweigen!</strong></p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">🚨 Sofortmaßnahmen</div>
    <ol style="margin:8px 0 0 22px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Ruhe bewahren</strong></li>
      <li><strong>Patienten beobachten</strong> (Vitalzeichen)</li>
      <li><strong>Sofort melden</strong> (Vorgesetzte + Arzt)</li>
      <li>Bei schwerer Reaktion: <strong>Notarzt/Giftnotruf</strong></li>
      <li><strong>Dokumentieren</strong> — lückenlos</li>
      <li><strong>Fehler analysieren</strong></li>
    </ol>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">⚗️ Überdosierung</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Symptome je nach Wirkstoff: Herzrhythmusstörungen bei Digitalisglykosiden · Blutungsgefahr bei Antikoagulanzien · Hypoglykämie bei Insulin.</div>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Fehler <strong>niemals vertuschen</strong> — melden, beobachten, dokumentieren.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Nebenwirkungsbeobachtung</div></div>
  <p class="lekt-prose">Nach jeder Medikamentengabe: <strong>Patienten beobachten</strong>, Reaktionen beurteilen und dokumentieren.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">👁️ Worauf achten?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Allgemeinzustand</strong> und Bewusstseinslage</li>
      <li><strong>Vitalzeichen</strong>: RR, Puls, Atmung, Temperatur</li>
      <li><strong>Haut</strong>: Rötung, Juckreiz, Schwellung (Allergie!)</li>
      <li><strong>Magen-Darm</strong>: Übelkeit, Erbrechen, Durchfall</li>
      <li><strong>Schwindel/Stürze</strong></li>
      <li>Veränderte <strong>Laborwerte</strong></li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">📋 Meldepflicht</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Schwerwiegende Nebenwirkungen → <strong>Arzt</strong>. In bestimmten Fällen über das <strong>BfArM</strong> melden.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Bei auffälligen Reaktionen sofort <strong>informieren</strong> und <strong>dokumentieren</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Dokumentation</div></div>
  <p class="lekt-prose">Eine <strong>lückenlose Dokumentation</strong> ist rechtlich vorgeschrieben — sie schützt Patient und Pflegekraft.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📝 Was dokumentieren?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Verordnung</strong> des Arztes</li>
      <li><strong>Verabreichung</strong> (wer, wann, was)</li>
      <li><strong>Abgelehnte</strong> oder <strong>vergessene</strong> Gaben</li>
      <li>Beobachtete <strong>Nebenwirkungen</strong></li>
      <li><strong>Medikationsfehler</strong> — ehrlich!</li>
      <li>Bei BtM: <strong>BtM-Nachweisbuch</strong></li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#22c55e">✍️ Grundsätze</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Zeitnah</strong> dokumentieren</li>
      <li><strong>Klar und nachvollziehbar</strong></li>
      <li>Korrekturen: <strong>durchstreichen</strong> (lesbar lassen), Datum + Handzeichen — <strong>nie überkleben</strong>!</li>
      <li>Mit <strong>Signatur</strong> versehen</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> <strong>Nicht dokumentiert = nicht gemacht</strong>. Dokumentation = Beweismittel vor Gericht.</div>
</div>

</div></div>`,

    'Richten von Arzneimitteln': () => `
<div class="lekt-layout"><div>

<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">🛡️ Sicherheit · Lektion 3</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Richten von Arzneimitteln</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Voraussetzungen, Verantwortlichkeiten, Settings & Hilfsmittel</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was bedeutet „Richten"?</div></div>
  <p class="lekt-prose">Das <strong>Richten von Arzneimitteln</strong> bezeichnet die Vorbereitung und Bereitstellung von Medikamenten für die spätere Verabreichung. Eine der <strong>fehleranfälligsten</strong> Tätigkeiten im Medikationsprozess.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📋 Grundvoraussetzungen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Nur nach <strong>schriftlicher ärztlicher Anordnung</strong></li>
      <li><strong>Störungsquellen</strong> ausschließen (keine Ablenkung)</li>
      <li><strong>Hygienevorschriften</strong> einhalten (Händedesinfektion)</li>
      <li><strong>Dreifache Kontrolle</strong>: Schrank → Verpackung → Zurückstellen</li>
      <li><strong>Verfallsdatum</strong> und Verpackungszustand prüfen</li>
      <li><strong>Anbruchdatum</strong> notieren</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#f59e0b">✂️ Teilen & Mörsern</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Mit <strong>Arzt/Apotheker</strong> klären oder Beipackzettel beachten. <strong>Retardtabletten</strong>, magensaftresistente und beschichtete Tabletten dürfen i.d.R. <strong>nicht</strong> geteilt/gemörsert werden — die Wirkungsweise wird zerstört.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Kein Richten ohne <strong>schriftliche Anordnung</strong> — immer dreifach kontrollieren.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Remonstrationspflicht</div></div>
  <p class="lekt-prose">Die <strong>Remonstrationspflicht</strong> verpflichtet die Pflegefachkraft, dem Arzt gegenüber <strong>Bedenken zu äußern</strong>, wenn eine Anordnung den Patienten gefährden könnte — und die Durchführung abzulehnen, bis eine Klärung erfolgt.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#818cf8;font-size:.88rem">👨‍⚕️ Arzt — Anordnungsverantwortung</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Richtigkeit und Sicherheit der Verordnung</div>
    </div>
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">👩‍⚕️ Pflegefachkraft — Durchführungsverantwortung</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Sach- und fachgerechte Ausführung der Anordnung</div>
    </div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">💡 Beispiel</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Ein Arzt verordnet eine ungewöhnlich hohe Dosis. Die Pflegekraft bemerkt eine Verschlechterung des Patienten. Sie ist <strong>verpflichtet</strong>, Bedenken zu äußern und erst nach Rücksprache zu verabreichen.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Remonstrieren ist <strong>keine Respektlosigkeit</strong> — sondern Berufspflicht und Patientenschutz.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Richten im Krankenhaus</div></div>
  <p class="lekt-prose">Im <strong>Krankenhaus</strong> erfolgt das Richten auf der Station, durch examiniertes Pflegepersonal, unter kontrollierten Bedingungen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🏥 Besonderheiten</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Anordnung im <strong>Kurvenblatt</strong> oder digitalen System</li>
      <li>Richten am <strong>Stellwagen / Medikamententisch</strong></li>
      <li><strong>Vier-Augen-Prinzip</strong> bei Hochrisikomedikamenten</li>
      <li>Medikamente <strong>patientenbezogen</strong> beschriften</li>
      <li>Injektionen/Infusionen: <strong>aseptisches Arbeiten</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Kein Richten ohne <strong>Kurvenblatt-Anordnung</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Stationäre Langzeitpflege</div></div>
  <p class="lekt-prose">In <strong>Pflegeheimen</strong> werden Medikamente häufig für <strong>eine Woche im Voraus</strong> gerichtet. Erfordert besondere Sorgfalt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🏠 Besonderheiten</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Wochenweise im Voraus richten</li>
      <li><strong>Dispenser / Pillenbox / Wochenbox</strong></li>
      <li>Fächer nach Einnahmezeitpunkt (Morgen/Mittag/Abend/Nacht)</li>
      <li>Nur durch <strong>examinierte Pflegefachkräfte</strong></li>
      <li><strong>Medikamentenplan</strong> des Arztes erforderlich</li>
      <li>Alternativ: <strong>Verblisterung</strong> durch Apotheke</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Klare Beschriftung, sorgfältige Kontrolle, schriftliche Arztanordnung.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Ambulante Pflege</div></div>
  <p class="lekt-prose">In der <strong>ambulanten Pflege</strong> findet das Richten im <strong>häuslichen Umfeld</strong> statt — weniger kontrollierte Bedingungen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🚗 Besonderheiten</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Richten <strong>beim Patienten zu Hause</strong></li>
      <li>Häufig <strong>Pillenbox / Wochenbox</strong></li>
      <li>Einwilligungsfähige Patienten: <strong>Selbstmedikation</strong> möglich, Pflegekraft behält sie im Blick</li>
      <li>Bei Selbstgefährdung (Demenz, Suizidalität): Pflegedienst <strong>führt Tabletten mit sich</strong></li>
      <li>Schriftliche Anordnung auch hier Pflicht</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Auch ambulant: nur nach <strong>schriftlicher Anordnung</strong> richten.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Verblisterung</div></div>
  <p class="lekt-prose">Die <strong>Verblisterung</strong> ist ein industrielles Verfahren, bei dem feste orale Arzneimittel von der <strong>Apotheke maschinell</strong> in beschriftete Blister eingeschweißt werden — nach Einnahmedatum und -uhrzeit geordnet.</p>
  <div style="display:flex;gap:8px;margin:8px 0">
    <div style="flex:1;background:rgba(34,197,94,.08);border-radius:10px;padding:10px">
      <div style="font-weight:700;color:#22c55e;font-size:.82rem">✅ Vorteile</div>
      <div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Zeitersparnis · weniger Fehler · klare Beschriftung · höhere Adhärenz · Nachvollziehbarkeit</div>
    </div>
    <div style="flex:1;background:rgba(239,68,68,.08);border-radius:10px;padding:10px">
      <div style="font-weight:700;color:#ef4444;font-size:.82rem">❌ Grenzen</div>
      <div style="font-size:.74rem;color:var(--ink2);margin-top:4px;line-height:1.5">Nur feste orale AM · <strong>keine BtM</strong> · schwer bei wechselnder Medikation · Kunststoffabfall</div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Verblisterung = maschinelles Richten durch die Apotheke — sicher, aber nicht für alle Medikamente.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Dispenser & Pillenbox</div></div>
  <p class="lekt-prose"><strong>Dispenser</strong> und <strong>Pillenboxen</strong> sind Hilfsmittel zur strukturierten Aufbewahrung vorgerichteter Medikamente — sie unterstützen die Therapietreue.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#818cf8;font-size:.88rem">💊 Pillenbox (Wochenbox)</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Kunststoffbox mit <strong>7 Fächern für die Wochentage</strong>, unterteilt nach Einnahmezeitpunkten. <strong>Manuell</strong> befüllt — nach ärztlichem Medikamentenplan.</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">🤖 Automatischer Dispenser</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Gibt Medikamente <strong>automatisch zum richtigen Zeitpunkt</strong> aus, oft mit Alarm. Besonders bei <strong>eingeschränkter Kognition</strong> oder Compliance-Problemen geeignet.</div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Dispenser/Pillenbox erhöhen Sicherheit und Therapietreue — ersetzen aber <strong>nicht</strong> die ärztliche Anordnung.</div>
</div>

</div></div>`,

    'Arzneimittelgesetz (AMG)': () => `
<div class="lekt-layout"><div>

<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">🛡️ Sicherheit · Lektion 4</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Das Arzneimittelgesetz (AMG)</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">Rechtliche Grundlagen, Arzneimittelnamen & Kennzeichnung</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was ist das AMG?</div></div>
  <p class="lekt-prose">Das <strong>Arzneimittelgesetz (AMG)</strong> — „Gesetz über den Verkehr mit Arzneimitteln" — ist die zentrale Rechtsgrundlage in Deutschland. Erstmals <strong>1961</strong> eingeführt, nach dem <strong>Contergan-Skandal</strong> <strong>1976 grundlegend neu gefasst</strong>.</p>
  <div style="background:linear-gradient(135deg,rgba(129,140,248,.15),rgba(79,70,229,.1));border:2px solid rgba(129,140,248,.4);border-radius:12px;padding:14px;margin:10px 0">
    <div style="font-weight:700;color:#818cf8;font-size:.92rem;margin-bottom:6px">🎯 Ziele (§ 1 AMG)</div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <div style="flex:1;background:rgba(34,197,94,.1);border-radius:8px;padding:8px;text-align:center"><div style="font-weight:700;color:#22c55e;font-size:.82rem">Qualität</div></div>
      <div style="flex:1;background:rgba(96,165,250,.1);border-radius:8px;padding:8px;text-align:center"><div style="font-weight:700;color:#60a5fa;font-size:.82rem">Wirksamkeit</div></div>
      <div style="flex:1;background:rgba(167,139,250,.1);border-radius:8px;padding:8px;text-align:center"><div style="font-weight:700;color:#a78bfa;font-size:.82rem">Unbedenklichkeit</div></div>
    </div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📜 Was regelt das AMG?</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Definition</strong> des Arzneimittelbegriffs</li>
      <li><strong>Zulassung</strong> und Registrierung</li>
      <li><strong>Herstellung</strong> und Qualitätssicherung</li>
      <li><strong>Kennzeichnung</strong> und Packungsbeilage</li>
      <li><strong>Abgabe und Handel</strong></li>
      <li><strong>Pharmakovigilanz</strong> (Sicherheitsüberwachung)</li>
      <li><strong>Haftung</strong> bei Arzneimittelschäden</li>
      <li>Schutz bei <strong>klinischen Prüfungen</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Das AMG schützt die Gesundheit der Bevölkerung — nur <strong>wirksame, sichere und qualitativ hochwertige</strong> Arzneimittel kommen in den Verkehr.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Definition Arzneimittel (§ 2 AMG)</div></div>
  <p class="lekt-prose">Arzneimittel sind <strong>Stoffe oder Zubereitungen</strong>, die dazu bestimmt sind:</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">💊 Bestimmung</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Krankheiten zu <strong>heilen, lindern oder verhüten</strong></li>
      <li>Körperfunktionen <strong>zu erkennen</strong> (Diagnostika)</li>
      <li>Krankheitserreger <strong>unschädlich</strong> zu machen</li>
      <li>Körper- oder seelische Zustände <strong>zu beeinflussen</strong></li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#f59e0b">⚠️ Abgrenzung</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Nahrungsergänzungsmittel</strong> → Lebensmittelrecht</li>
      <li><strong>Medizinprodukte</strong> (Verbandmaterial, Katheter) → Medizinprodukterecht</li>
      <li><strong>Kosmetika</strong> → Kosmetikrecht</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Nur Arzneimittel unterliegen der <strong>Zulassungspflicht</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Zulassung & Registrierung</div></div>
  <p class="lekt-prose">Ein Arzneimittel darf nur in den Handel, wenn es <strong>zugelassen</strong> oder <strong>registriert</strong> ist.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(34,197,94,.08);border-left:3px solid #22c55e;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#22c55e;font-size:.88rem">✅ Zulassung</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Standardverfahren. Nachweis von <strong>Wirksamkeit, Sicherheit, Qualität</strong>. Zuständig: <strong>BfArM</strong> (D) oder <strong>EMA</strong> (EU).</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">📋 Registrierung</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Vereinfacht für <strong>Homöopathika</strong> & <strong>traditionelle Pflanzenmittel</strong>. Kein Wirksamkeitsnachweis nötig.</div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Zulassung = voller Nachweis · Registrierung = vereinfacht für Homöopathika/Pflanzenmittel.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Die drei Namen eines Arzneimittels</div></div>
  <p class="lekt-prose">Jedes Arzneimittel hat in der Regel <strong>drei Bezeichnungen</strong>. Im Pflegealltag wichtig: <strong>INN</strong> und <strong>Handelsname</strong>.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#818cf8;font-size:.88rem">🧪 1. Chemischer Name</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Genaue chemische Struktur (IUPAC). Nur in Wissenschaft.<br><em>Bsp: (RS)-2-(4-(2-methylpropyl)phenyl)propansäure</em></div>
    </div>
    <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#60a5fa;font-size:.88rem">🌍 2. INN — Internationaler Freiname</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Von der <strong>WHO</strong> vergebener, weltweit einheitlicher, <strong>gemeinfreier</strong> Wirkstoffname. Nicht markenrechtlich geschützt.<br><em>Bsp: Ibuprofen</em></div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">🏷️ 3. Handelsname</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5"><strong>Markenrechtlich geschützt</strong> (®). Vom Hersteller gewählt.<br><em>Bsp: Nurofen®, Ibuflam®, Dolgit® → alle Ibuprofen</em></div>
    </div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#22c55e">🔢 Namenszusätze</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Zahlen</strong> → Wirkstoffstärke (Ibuprofen 400/600)</li>
      <li><strong>retard / SR / depot</strong> → verzögerte Freisetzung</li>
      <li><strong>forte / mite</strong> → stark / schwach</li>
      <li><strong>N1 / N2 / N3</strong> → Packungsgröße</li>
      <li><strong>comp.</strong> → Kombination mehrerer Wirkstoffe</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Chemischer Name (Wissenschaft) · INN (WHO, weltweit) · Handelsname (Marke). Pflegealltag: <strong>INN + Handelsname</strong> kennen!</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Kennzeichnung (§ 10 AMG)</div></div>
  <p class="lekt-prose">Das AMG schreibt in <strong>§ 10</strong> genau vor, welche Angaben auf der Verpackung stehen müssen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">🏷️ Pflichtangaben</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Name</strong> des Arzneimittels (Handelsname)</li>
      <li><strong>Wirkstoff</strong> (INN) mit Stärke</li>
      <li><strong>Darreichungsform</strong></li>
      <li><strong>Inhalt</strong> (Gewicht/Volumen/Stückzahl)</li>
      <li><strong>Hersteller</strong></li>
      <li><strong>Zulassungsnummer</strong> (Zul.-Nr.)</li>
      <li><strong>Chargennummer</strong> (Ch.-B.) — Rückverfolgung</li>
      <li><strong>Verfallsdatum</strong></li>
      <li><strong>Lagerungshinweise</strong></li>
      <li>Hinweis auf <strong>Packungsbeilage</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Alle Pflichtangaben nach <strong>§ 10 AMG</strong> müssen vollständig und korrekt sein.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Packungsbeilage (§ 11 AMG)</div></div>
  <p class="lekt-prose">Die <strong>Packungsbeilage</strong> ist gesetzlich vorgeschrieben — sie richtet sich an den <strong>Patienten</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📄 Pflichtinhalte</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Bezeichnung & Wirkstoff</li>
      <li><strong>Anwendungsgebiete</strong> (Indikationen)</li>
      <li><strong>Gegenanzeigen</strong> (Kontraindikationen)</li>
      <li><strong>Wechselwirkungen</strong></li>
      <li>Dosierung & Art der Anwendung</li>
      <li><strong>Nebenwirkungen</strong></li>
      <li>Lagerung & Haltbarkeit nach Anbruch</li>
      <li>Verfallsdatum & Hersteller</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">⏰ Verfallsdatum</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">„Verwendbar bis…" / „EXP". Gibt <strong>Monat + Jahr</strong> an — bis zum <strong>letzten Tag dieses Monats</strong>. Gilt für <strong>original verschlossene</strong> AM. Nach Anbruch: oft kürzer (siehe Packungsbeilage).</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Packungsbeilage = Pflicht. Bis zur letzten Einnahme aufbewahren!</div>
</div>

</div></div>`,

    'Betäubungsmittel & Bedarfsmedikation': () => `
<div class="lekt-layout"><div>

<div style="background:linear-gradient(135deg,#312e81,#4338ca,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(129,140,248,.2);border:1px solid rgba(129,140,248,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(199,210,254,.95)">🛡️ Sicherheit · Lektion 5</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Betäubungsmittel & Bedarfsmedikation</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.65)">BtMG, BtMVV, BtM-Schrank, Dokumentation & VuG-Prinzip</div>
  </div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Was sind Betäubungsmittel?</div></div>
  <p class="lekt-prose"><strong>Betäubungsmittel (BtM)</strong> sind Stoffe mit hohem <strong>Sucht- und Missbrauchspotenzial</strong>, die einer besonderen gesetzlichen Kontrolle unterliegen. Unverzichtbar in <strong>Schmerztherapie, Palliativversorgung und Anästhesie</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#a78bfa">💊 Beispiele</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Morphin</strong> — starkes Opioid</li>
      <li><strong>Fentanyl</strong> — sehr starkes Opioid (Pflaster, Injektion)</li>
      <li><strong>Oxycodon</strong> — Opioid</li>
      <li><strong>Tramadol</strong> — schwaches Opioid</li>
      <li><strong>Methadon</strong> — Substitutionstherapie</li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> BtM sind wirksame Schmerzmittel — der strikte rechtliche Rahmen dient dem <strong>Schutz vor Missbrauch und Abhängigkeit</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Rechtliche Grundlagen: BtMG & BtMVV</div></div>
  <p class="lekt-prose">Der Umgang mit BtM ist in Deutschland durch <strong>zwei zentrale Rechtsgrundlagen</strong> geregelt.</p>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
    <div style="background:rgba(129,140,248,.08);border-left:3px solid #818cf8;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#818cf8;font-size:.88rem">⚖️ BtMG — Betäubungsmittelgesetz</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Übergeordnetes Gesetz. Definiert BtM (Anlagen I–III) · regelt Verkehr · <strong>Strafvorschriften</strong> (bis 5 Jahre Freiheitsstrafe) · BtM-Schrank (§ 15)</div>
    </div>
    <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;border-radius:8px;padding:12px">
      <div style="font-weight:700;color:#a78bfa;font-size:.88rem">📋 BtMVV — Verschreibungsverordnung</div>
      <div style="font-size:.78rem;color:var(--ink2);margin-top:4px;line-height:1.5">Konkretisiert das BtMG: Verschreibung · BtM-Rezept · Abgabe · Dokumentation (BtM-Nachweisbuch) · monatliche ärztliche Kontrolle (§ 13)</div>
    </div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> BtMG = Gesetz · BtMVV = Detailregeln. Beide bilden den rechtlichen Rahmen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Das BtM-Rezept</div></div>
  <p class="lekt-prose">BtM dürfen nur auf einem <strong>speziellen BtM-Rezept (gelb, dreiteilig)</strong> verschrieben werden. Ausgestellt vom Arzt mit persönlicher <strong>BtM-Nummer</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📝 Pflichtangaben</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>Name, Vorname & <strong>Anschrift des Patienten</strong></li>
      <li><strong>Ausstellungsdatum</strong></li>
      <li>Bezeichnung des BtM (Wirkstoff, Form, Stärke)</li>
      <li>Menge in <strong>Buchstaben und Ziffern</strong></li>
      <li>Name, Anschrift & <strong>BtM-Nummer des Arztes</strong></li>
      <li><strong>Unterschrift</strong> des Arztes</li>
    </ul>
    <div style="font-size:.78rem;color:var(--ink2);margin-top:8px;line-height:1.5">Dreiteilig: <strong>Teil 1</strong> → Apotheke · <strong>Teil 2</strong> → Arzt · <strong>Teil 3</strong> → Krankenkasse</div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">🏥 BtM-Anforderungsschein</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Im <strong>Krankenhaus</strong> für den <strong>Stationsbedarf</strong> (§ 10 BtMVV) — nicht für einzelne Patienten. BtM-Rezepte: in <strong>Pflegeheimen, Hospizen, ambulant</strong>.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Kein normales Rezept für BtM — nur das <strong>gelbe dreiteilige BtM-Rezept</strong> oder der BtM-Anforderungsschein.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">BtM-Schrank & Lagerung (§ 15 BtMG)</div></div>
  <p class="lekt-prose">BtM müssen in einem <strong>gesonderten, gesicherten Schrank</strong> aufbewahrt werden — gesetzlich in <strong>§ 15 BtMG</strong> geregelt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#ef4444">🔒 Anforderungen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Verschlossener, verankerter Wertschutzschrank</strong> (Widerstandsgrad 0+, EN 1143-1)</li>
      <li><strong>Ständig verschlossen</strong></li>
      <li><strong>Schlüsselverwaltung</strong>: durch diensthabende Pflegefachkraft · Übergabe beim Dienstwechsel</li>
      <li>Nur <strong>berechtigte Personen</strong> haben Zugang</li>
      <li><strong>Monatliche ärztliche Kontrolle</strong> (§ 13 BtMVV)</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> BtM-Schlüssel <strong>niemals unbeaufsichtigt</strong> lassen — Verlust hat ernste rechtliche Konsequenzen.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">05</div><div class="lekt-title">Dokumentation & Nachweisführung</div></div>
  <p class="lekt-prose">Der <strong>Verbleib jedes BtM</strong> muss lückenlos dokumentiert werden — von der Lieferung bis zur Verabreichung/Vernichtung.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#818cf8">📓 BtM-Nachweisbuch (§ 14 BtMVV)</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Bezeichnung</strong> des BtM</li>
      <li><strong>Zugang/Abgang</strong> + resultierender <strong>Bestand</strong></li>
      <li><strong>Datum</strong> jeder Bewegung</li>
      <li>Name des <strong>Patienten</strong></li>
      <li><strong>Name + Unterschrift</strong> der Pflegefachkraft</li>
    </ul>
    <div style="font-size:.78rem;color:var(--ink2);margin-top:6px">Auch per <strong>EDV</strong> möglich.</div>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#a78bfa">🗑️ Vernichtung (§ 16 BtMG)</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li>In Anwesenheit von <strong>zwei Zeugen</strong></li>
      <li><strong>Dokumentation</strong> der Vernichtung</li>
      <li>Niederschrift <strong>3 Jahre</strong> aufbewahren</li>
    </ul>
  </div>
  <div class="lekt-zusammen" style="background:rgba(239,68,68,.08);border-left:3px solid #ef4444"><strong>Merke:</strong> Lücken in der BtM-Dokumentation sind <strong>strafbar</strong>.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">06</div><div class="lekt-title">Bedarfsmedikation</div></div>
  <p class="lekt-prose"><strong>Bedarfsmedikation</strong> = vom Arzt verordnet, wird <strong>bei Bedarf</strong> bei bestimmtem Symptom verabreicht. Gibt der Pflegekraft Handlungssicherheit.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#22c55e">✅ Pflichtangaben in der Anordnung</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Genaue Indikation</strong> (z.B. „bei Schmerzen NRS ≥ 5")</li>
      <li><strong>Einzeldosis</strong></li>
      <li><strong>Verabreichungsintervall</strong> (Mindestabstand)</li>
      <li><strong>Maximale Tagesdosis</strong></li>
      <li>Ggf. wann Arzt kontaktieren</li>
    </ul>
  </div>
  <div class="lekt-card" style="margin-top:10px">
    <div class="lekt-card-label" style="color:#ef4444">⚠️ Wichtige Grenzen</div>
    <ul style="margin:8px 0 0 18px;color:var(--ink2);font-size:.82rem;line-height:1.7">
      <li><strong>Nur für das verordnete Symptom</strong>! Ibuprofen bei Knieschmerzen ≠ bei Kopfschmerzen</li>
      <li>Gabe immer <strong>dokumentieren</strong> (Zeit, Dosis, Symptom, Wirkung)</li>
      <li>Höchstdosis & Intervall <strong>strikt einhalten</strong></li>
    </ul>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> Bedarfsmedikation = nur für das <strong>verordnete Symptom</strong>, in verordneter Dosis, mit vorgeschriebenem Abstand.</div>
</div>

<div class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">07</div><div class="lekt-title">Telefonische Anordnung & VuG-Prinzip</div></div>
  <p class="lekt-prose">In <strong>Akutsituationen</strong> kann eine schriftliche Anordnung nicht sofort vorliegen. Lösung: <strong>telefonische Anordnung nach VuG-Prinzip</strong>.</p>
  <div style="background:linear-gradient(135deg,rgba(129,140,248,.15),rgba(79,70,229,.1));border:2px solid rgba(129,140,248,.4);border-radius:12px;padding:14px;margin:10px 0">
    <div style="font-weight:700;color:#818cf8;font-size:.95rem;margin-bottom:6px">📞 VuG = Vorgelesen und Genehmigt</div>
    <ol style="margin:8px 0 0 22px;color:var(--ink2);font-size:.8rem;line-height:1.7">
      <li>Pflegefachkraft nimmt mündliche Anordnung entgegen</li>
      <li><strong>Wiederholt die Anordnung laut</strong> gegenüber dem Arzt</li>
      <li>Arzt <strong>bestätigt</strong> die Richtigkeit</li>
      <li>Pflegefachkraft <strong>dokumentiert sofort</strong> mit Vermerk „VuG" + Unterschrift</li>
      <li>Arzt <strong>unterzeichnet schriftlich</strong> bei nächster Visite</li>
    </ol>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f59e0b">👩‍⚕️ Wer darf entgegennehmen?</div>
    <div style="font-size:.8rem;color:var(--ink2);line-height:1.6;margin-top:8px">Nur eine <strong>Pflegefachkraft mit dreijähriger Berufsausbildung</strong> — <strong>nicht</strong> Pflegehilfskräfte oder Auszubildende.</div>
  </div>
  <div class="lekt-zusammen"><strong>Merke:</strong> <strong>VuG = Vorgelesen und Genehmigt</strong>. Telefonische Anordnung sofort dokumentieren → Arzt unterzeichnet bei nächster Visite.</div>
</div>

</div></div>`,

  },

}; // end LESSON_CONTENT
