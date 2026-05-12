// PflegePro — Logique applicative complète
// Ce fichier sera découpé progressivement en modules

// ─── DATA ────────────────────────────────────────────────────────────────────
const THEMES = [
  {id:'haut',name:'Haut — Anatomie & Physiologie',icon:'🩹',col:'green',lessons:['Haut und ihre Aufgaben','Aufbau der Haut (Schichten)','Epithelgewebe – Exkurs','Die Epidermis & ihre Schichten','Aufbau der Dermis (Lederhaut)','Hautanhangsorgane & Drüsen','Fitzpatrick-Hauttypen','Veränderungen der Haut']},
  {id:'dekubitus',name:'Dekubitus — Prophylaxe & Therapie',icon:'🩺',col:'rose',lessons:['Definition & Expertenstandard','Risikofaktoren & Entstehung','EPUAP Klassifikation Kat. I–IV','Prädilektionsstellen & Einschätzung','Prophylaxe und Donts']},
  
  {id:'niere',name:'Niere & Harnwege — Miktion & Inkontinenz',icon:'🫘',col:'blue',lessons:['Anatomie & Funktionen der Niere','Nephrone & Urinbildung','Ableitende Harnwege & Miktionsreflex','Harninkontinenz — Definition & Formen','Inkontinenzformen im Detail','Expertenstandard & Pflege bei Inkontinenz']},
  {id:'herz',name:'Herz und Gefäße',icon:'🫀',col:'teal',lessons:['Anatomie und Physiologie','Vertiefung – Venöses Gefäßsystem']},
  {id:'atmung',name:'Atmungssystem',icon:'🌬️',col:'blue',lessons:['Anatomie und Physiologie','Pathologie – Pneumonie und Prophylaxe','Pathologie (weiterführend)']},
  {id:'knochen',name:'Knochen / Gelenke / Muskeln',icon:'🦴',col:'amber',lessons:['Anatomie und Physiologie','Funktion Bewegungsapparat','Pathologie – Bewegungseinschränkungen']},
  {id:'magen',name:'Magen-Darm-Trakt',icon:'🫃',col:'green',lessons:['Anatomie und Physiologie','Pflegerische Aspekte – Diarrhö / Obstipation','Patho Verdauung I – Gastritis']},
  {id:'paed',name:'Pädiatrie',icon:'👶',col:'rose',lessons:['Kinder als Patient – EACH','Säuglinge bis Grundschulkinder','Kinderkrankheiten des atopischen Formenkreises']},
  {id:'fachterm',name:'Fachterminologie',icon:'📖',col:'purple',lessons:['Fachterminologie I','Fachterminologie II']},
  {id:'beruf',name:'Pflege als Beruf',icon:'👩‍⚕️',col:'teal',lessons:['Einführung','Pflegetheorie / Pflegeverständnis','Historie']},
  {id:'prozess',name:'Pflegeprozess',icon:'🔄',col:'blue',lessons:['Pflegebedürfnispyramide nach Maslow','Pflegebedarf / Pflegediagnosen','Informationssammlung, Aufnahmegespräch','RTL / ABDEL']},
  {id:'hygiene',name:'Hygiene',icon:'🧼',col:'green',lessons:['Mikrobiologie + Basishygiene + PSA']},
  {id:'wahrnehm',name:'Wahrnehmung / Beobachtung',icon:'👁',col:'amber',lessons:['Sinnesorgane']},
  {id:'sensomot',name:'Sensomotorische Entwicklung',icon:'🧠',col:'purple',lessons:['Sensomotorische Entwicklung','Nah- und Fernsinn','Meilensteine und Grenzsteine']},
  {id:'lernen',name:'Selbstreflexion / Lernstrategie',icon:'🎯',col:'rose',lessons:['Lernen Lernen']},
  {id:'koerper',name:'Allgemeine Körperpflege',icon:'🛁',col:'teal',lessons:['Ablaufplanung','Grundsätze der Körperpflege','Ganzkörperwaschung im Bett','Hautpflegeprodukte','Multikulturelle Aspekte','Teilkörperpflege am Waschbecken','Scham','Technische/digitale Unterstützung – Hilfsmittel']},
  {id:'kennzeich',name:'Kennzeichen des Lebens',icon:'💧',col:'blue',lessons:['Gewebsarten','Flüssigkeits-/Elektrolytbedarf','Dehydration und Exsikkose','PP Pflegeprobleme bei der Ausscheidung']},
  {id:'schluck',name:'Schluckakt, Dysphagie, Essen anreichen',icon:'🥄',col:'amber',lessons:['Schluckakt und Dysphagie','Essen anreichen']},
  {id:'mund',name:'Zahn-/Mundhygiene',icon:'🦷',col:'green',lessons:['Zahn- und Mundhygiene']},
  {id:'expert',name:'Expertstandard',icon:'⭐',col:'purple',lessons:['Pflegestandard / Expertstandard','Einführung DNQP']},
  {id:'recht',name:'Recht I',icon:'⚖️',col:'rose',lessons:['Grundrechte und legalisierte Einschränkung']},
  {id:'pharma',name:'Allgemeine Pharmakologie',icon:'💊',col:'teal',lessons:['Allgemeine Pharmakologie']},
  {id:'postop',name:'Postoperative Pflege',icon:'🏥',col:'blue',lessons:['Einführung Chirurgie','Post-OP Schmerzassessment']},
  {id:'komm',name:'Pflegefachlich kommunizieren',icon:'🗣️',col:'amber',lessons:['Kommunikation / Empathie / Bedürfnisse','Grundwissen Kommunikation II']},
  {id:'ruecken',name:'Rückenschonendes Arbeiten',icon:'🏋️',col:'green',lessons:['Rückenschonendes Arbeiten']},
  {id:'sturz',name:'Sturzprophylaxe / Expertstandard',icon:'🚶',col:'purple',lessons:['Sturzprophylaxe','Expertstandard Sturzprophylaxe']},
  {id:'sexbel',name:'Sexuelle Belästigung',icon:'🛡️',col:'rose',lessons:['Angemessene Reaktionen und Nein Sagen']},
  {id:'erstehilfe',name:'Lebensrettende Sofortmaßnahmen',icon:'🚨',col:'teal',lessons:['Erste Hilfe']},
  {id:'beratung',name:'Kollegiale Beratung',icon:'🤝',col:'blue',lessons:['Kollegiale Beratung']},
  {id:'ernaehr',name:'Ernährung',icon:'🥗',col:'green',lessons:['Nährstoffe','Adipositas']},
  {id:'ekel',name:'Ekel / Scham / Nähe / Distanz',icon:'💭',col:'purple',lessons:['Ekel, Scham, Nähe und Distanz']},
  {id:'burnout',name:'Burn-out / Cool-out',icon:'🔥',col:'amber',lessons:['Burn-out und Cool-out in der Pflege']},
  {id:'antikoag',name:'Antikoagulanzien',icon:'💉',col:'rose',lessons:['Antikoagulanzien']},
  {id:'blutzuck',name:'Blutzucker / Diabetes Mellitus',icon:'🩸',col:'teal',lessons:['Grundlagen Blutzucker & Pankreas','Diabetes Typ 1 – Pathophysiologie','Diabetes Typ 2 – Pathophysiologie','Symptome Typ 1 & Typ 2 im Vergleich','Therapie – 3-Säulen & Insulinarten','Diagnostik – BZTP, HbA1c, oGTT','Folgeerkrankungen – Makro/Mikroangiopathie, Polyneuropathie','Diabetisches Fußsyndrom','Komaformen – Ketoazidose & Hyperosmolar']},
];

// Demo quiz for Herz
const QUIZZES = {
  herz:[
    {q:'Wie viele Kammern hat das menschliche Herz?',opts:['2 Kammern','3 Kammern','4 Kammern','6 Kammern'],correct:2,explanation:'Das Herz hat 4 Kammern: linker/rechter Vorhof und linke/rechte Hauptkammer.',lesson:'Anatomie und Physiologie',theme:'herz'},
    {q:'Was ist der Normalwert des Blutdrucks bei Erwachsenen?',opts:['80/60 mmHg','120/80 mmHg','140/100 mmHg','160/90 mmHg'],correct:1,explanation:'Optimaler Blutdruck: 120/80 mmHg. Über 140/90 mmHg = Hypertonie.',lesson:'Anatomie und Physiologie',theme:'herz'},
    {q:'Welcher Knoten steuert den Herzrhythmus?',opts:['AV-Knoten','Sinusknoten','Purkinje-Fasern','His-Bündel'],correct:1,explanation:'Der Sinusknoten im rechten Vorhof ist der natürliche Schrittmacher (60–80/min).',lesson:'Anatomie und Physiologie',theme:'herz'},
    {q:'Was ist eine Tachykardie?',opts:['Herzfrequenz unter 60/min','Herzfrequenz über 100/min','Unregelmäßiger Herzrhythmus','Normaler Herzrhythmus'],correct:1,explanation:'Tachykardie = Herzfrequenz über 100/min. Bradykardie = unter 60/min.',lesson:'Anatomie und Physiologie',theme:'herz'},
  ],
  haut:[
    {q:'Wie lautet der lateinische Begriff für die Haut und was macht sie besonders?',opts:['Dermis – dünnste Schicht','Cutis – größtes und nervenreichstes Organ des Menschen','Epidermis – einziges gefäßloses Organ','Subcutis – schwerste Schicht'],correct:1,explanation:'Lat. Cutis = die Haut. Sie ist das größte und nervenreichste Organ des Menschen, wiegt bis zu 20 kg (mit Subcutis) und ist 1,5–2 qm groß.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Wie groß ist die Körperoberfläche bei 1,80 m / 90 kg?',opts:['ca. 1,2 m²','ca. 1,55 m²','ca. 2,10 m²','ca. 3,0 m²'],correct:2,explanation:'Bei 1,80 m / 90 kg beträgt die Körperoberfläche ca. 2,10 m². Bei 1,60 m / 55 kg sind es ca. 1,55 m².',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Was sind passive Funktionen der Haut?',opts:['Schweißausscheidung und Resorption','Schutz vor Kälte, Hitze, Druck, Strahlung und chemischen Substanzen','Aktive Abwehr von Mikroorganismen','Vitaminproduktion durch Sonnenlicht'],correct:1,explanation:'Passive Funktionen: Schutz vor Kälte/Hitze/Strahlung, Schutz vor Druck/Stoß/Reibung, Schutz vor chemischen Substanzen.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Was versteht man unter dem Säureschutzmantel der Haut?',opts:['Eine Schicht aus Hornzellen','Den Hydro-Lipid-Film aus Talg- und Schweißdrüsen','Die Basalmembran der Epidermis','Das Melanin in der Basalzellschicht'],correct:1,explanation:'Säureschutzmantel = Hydro-Lipid-Film: "Lipid" aus Talgdrüsen + "Hydro" aus Schweißdrüsen. Schützt vor dem Eindringen von Keimen.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Wodurch kann der Säureschutzmantel beschädigt werden?',opts:['Durch zu wenig Sonnenlicht','Durch häufiges Waschen und feuchte Umgebung','Durch zu warme Kleidung','Durch Bewegungsmangel'],correct:1,explanation:'Häufiges Händewaschen und Tragen von Einmalhandschuhen beschädigen den Säureschutzmantel. Rückfettendes Händedesinfektionsmittel und Hautpflege helfen.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Was ist residente Hautflora?',opts:['Pathogene Mikroorganismen','Mikroorganismen, die vorübergehend auf der Haut sind','Physiologische Hautflora — immer vorhanden, nicht pathogen','Künstlich aufgetragene Schutzbakterien'],correct:2,explanation:'Residente Hautflora = physiologische Flora. Immer vorhanden, nicht pathogen. Hängt von Körperregion, Alter und physiologischem Status ab.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'⚠️ FALLE: Unterschied residente vs. transiente Hautflora?',opts:['Residente ist pathogen, transiente nicht','Residente dauerhaft + nicht pathogen — transiente vorübergehend + nicht pathogen','Beide sind pathogen','Residente kommt nur im Krankenhaus vor'],correct:1,explanation:'FALLE! Beide NICHT pathogen! Residente = dauerhaft. Transiente = vorübergehend. Die Infektionsflora ist pathogen — von beiden zu unterscheiden.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Welche zwei Hauttypen unterscheidet man?',opts:['Normale und trockene Haut','Leistenhaut (Handflächen/Fußsohlen) und Felderhaut (restlicher Körper)','Oberhaut und Unterhaut','Pigmentierte und helle Haut'],correct:1,explanation:'1. Leistenhaut: Fußsohlen/Handflächen, bis 9mm dick. 2. Felderhaut: restlicher Körper, größter Teil der Haut, Gesäß 3mm, Gesicht <1mm.',lesson:'Haut und ihre Aufgaben',theme:'haut'},
    {q:'Aus welchen 3 Schichten besteht die Haut (außen nach innen)?',opts:['Hornschicht, Keimschicht, Fettschicht','Epidermis (Oberhaut), Dermis (Lederhaut), Subcutis (Unterhaut)','Basalschicht, Stachelschicht, Hornschicht','Cutis, Subcutis, Muskel'],correct:1,explanation:'3 Schichten: Epidermis + Dermis = Cutis. Darunter Subcutis. Dann Muskel.',lesson:'Aufbau der Haut (Schichten)',theme:'haut'},
    {q:'Was bezeichnet man als "Cutis"?',opts:['Nur die Epidermis','Epidermis + Dermis zusammen','Epidermis + Dermis + Subcutis','Nur die Subcutis'],correct:1,explanation:'Cutis = Epidermis (Oberhaut) + Dermis (Lederhaut). Die Subcutis gehört NICHT zur Cutis.',lesson:'Aufbau der Haut (Schichten)',theme:'haut'},
    {q:'Welches Epithel bedeckt die äußere Haut?',opts:['Einschichtiges Plattenepithel','Zylinderepithel','Mehrschichtiges verhorntes Plattenepithel','Flimmerepithel'],correct:2,explanation:'Äußere Haut = mehrschichtiges verhorntes Plattenepithel. Mundschleimhaut = unverhorntes Plattenepithel. Lungenbläschen = einschichtiges Plattenepithel.',lesson:'Epithelgewebe – Exkurs',theme:'haut'},
    {q:'Welches Epithel findet man in den Atemwegen?',opts:['Mehrschichtiges verhorntes Plattenepithel','Übergangsepithel','Flimmerepithel (mit Zilien)','Einschichtiges Plattenepithel'],correct:2,explanation:'Flimmerepithel mit Zilien in den Atemwegen — transportiert Schleim und Fremdkörper. Harnblase = Übergangsepithel. Darm = Zylinderepithel.',lesson:'Epithelgewebe – Exkurs',theme:'haut'},
    {q:'⚠️ FALLE: Welches Epithel findet man in der Harnblase?',opts:['Flimmerepithel','Verhorntes Plattenepithel','Zylinderepithel','Übergangsepithel'],correct:3,explanation:'FALLE! Harnblase = Übergangsepithel. Atemwege = Flimmerepithel. Darm = Zylinderepithel. Haut = verhorntes Plattenepithel.',lesson:'Epithelgewebe – Exkurs',theme:'haut'},
    {q:'Welche besondere Eigenschaft hat die Epidermis bezüglich Blutgefäße?',opts:['Sehr viele Blutgefäße','Keine Blutgefäße — wird über Diffusion versorgt','Nur Lymphgefäße','Arterien aber keine Venen'],correct:1,explanation:'Epidermis = KEINE Gefäße. Versorgung über Diffusion und aktiven Nährstofftransport aus der Dermis.',lesson:'Die Epidermis & ihre Schichten',theme:'haut'},
    {q:'In welcher Zeitspanne erneuert sich die Epidermis vollständig?',opts:['7 Tage','14 Tage','30 Tage','6 Monate'],correct:2,explanation:'Epidermis erneuert sich innerhalb von 30 Tagen. Neue Zellen entstehen in der Basalschicht und wandern zur Oberfläche.',lesson:'Die Epidermis & ihre Schichten',theme:'haut'},
    {q:'Welche Schicht der Epidermis enthält Melanin-produzierende Zellen und Stammzellen?',opts:['Hornzellschicht','Stachelzellschicht','Körnerzellschicht','Basalzellschicht'],correct:3,explanation:'Basalzellschicht: Melanozyten (Melanin = UV-Schutz) + Stammzellen (neue Keratinozyten). Sitzt auf der Basalmembran.',lesson:'Die Epidermis & ihre Schichten',theme:'haut'},
    {q:'Was ist die Glanzzellschicht und wo kommt sie vor?',opts:['Melaninschicht überall','Glänzende Schicht unter der Hornschicht — NUR in Leistenhaut','Oberste Schicht der Epidermis','Unterste Dermisschicht'],correct:1,explanation:'Glanzzellschicht: direkt unter der Hornschicht, bricht UV-Licht stark, existiert NUR in der Leistenhaut (Handflächen + Fußsohlen).',lesson:'Die Epidermis & ihre Schichten',theme:'haut'},
    {q:'Von welchen Zellen gehen maligne Melanome aus?',opts:['Keratinozyten der Hornschicht','Melanozyten der Basalzellschicht','Zellen der Stachelschicht','Fibroblasten der Dermis'],correct:1,explanation:'Maligne Melanome gehen von Melanozyten (Basalzellschicht) aus. Sehr bösartig — metastasiert lymphogen und hämatogen.',lesson:'Die Epidermis & ihre Schichten',theme:'haut'},
    {q:'Was ist Diffusion und wie hilft sie der Epidermis?',opts:['Aktiver Transport mit Energie','Passiver Transport von hoher zu niedriger Konzentration — versorgt die gefäßlose Epidermis','Transport durch Blutgefäße','Aktiver Transport durch Pumpproteine'],correct:1,explanation:'Diffusion = passiver Transport. Teilchen wandern von höherer zu niedrigerer Konzentration. So gelangen Nährstoffe aus der Dermis in die gefäßlose Epidermis.',lesson:'Die Epidermis & ihre Schichten',theme:'haut'},
    {q:'Aus welchen 2 Schichten besteht die Dermis?',opts:['Basalschicht und Hornschicht','Papillenschicht (stratum papillare) und Geflechtschicht (stratum reticulare)','Epidermis und Subcutis','Melanschicht und Keratinschicht'],correct:1,explanation:'Dermis: 1. Papillenschicht (stratum papillare) — viele Blutgefäße. 2. Geflechtschicht (stratum reticulare) — kollagenreiche elastische Fasern.',lesson:'Aufbau der Dermis (Lederhaut)',theme:'haut'},
    {q:'⚠️ FALLE (Pflegerelevant): Warum ist anhaltender Druck auf die Haut gefährlich?',opts:['Er verstopft die Schweißdrüsen','Er komprimiert Blutgefäße der Papillenschicht → Ischämie → Dekubitusgefahr','Er beschädigt die Hornschicht','Er blockiert die Talgdrüsen'],correct:1,explanation:'WICHTIG! Druck komprimiert Blutgefäße in der Papillenschicht der Dermis → Ischämie → Gewebeunterversorgung → Dekubitusentstehung. Das ist der anatomische Grund für Lagerung!',lesson:'Aufbau der Dermis (Lederhaut)',theme:'haut'},
    {q:'Warum entstehen Falten im Alter und was beschleunigt diesen Prozess?',opts:['Epidermis wird dicker — durch Stress','Kollagenfasern werden elastischer','Elastizität der Geflechtschicht lässt nach — UV-Strahlung beschleunigt es','Basalzellschicht verliert Stammzellen'],correct:2,explanation:'Geflechtschicht (stratum reticulare) enthält kollagenreiche elastische Fasern. Elastizität nimmt im Alter ab — UV-Strahlung beschleunigt Faltenbildung.',lesson:'Aufbau der Dermis (Lederhaut)',theme:'haut'},
    {q:'Wie viele Schmerzrezeptoren befinden sich durchschnittlich auf 1 cm² Dermis?',opts:['12','40','100','200'],correct:3,explanation:'Pro cm² Dermis: 200 Schmerzrezeptoren, 100 Druckrezeptoren, 12 Kälterezeptoren, 2 Wärmerezeptoren, 100 Schweißdrüsen, 40 Talgdrüsen.',lesson:'Aufbau der Dermis (Lederhaut)',theme:'haut'},
    {q:'Welcher Mechanorezeptor reagiert auf Vibration und liegt in der Subcutis?',opts:['Merkel-Tastzellen','Meissner-Tastkörperchen','Ruffini-Körperchen','Vater-Pacini-Körperchen'],correct:3,explanation:'Vater-Pacini-Körperchen reagieren auf Vibration und liegen in der Subcutis. Meissner-Körperchen (Berührung) und Ruffini-Körperchen (Dehnung) liegen in der Dermis.',lesson:'Aufbau der Dermis (Lederhaut)',theme:'haut'},
    {q:'Was sind die Aufgaben der Subcutis?',opts:['Nur Schutz vor UV-Strahlung','Polsterung, Isolation, Wasserspeicher, Energiereserve, Lymph- + Blutgefäße','Produktion von Melanin und Keratin','Nur Verbindung von Dermis und Muskel'],correct:1,explanation:'Subcutis: lockeres Bindegewebe + Fett. Aufgaben: Polsterung, Isolation, Wasserspeicher, Energiereserve, enthält Lymph- und Blutgefäße. Verbindungsschicht zwischen Cutis und Körperfaszien.',lesson:'Aufbau der Dermis (Lederhaut)',theme:'haut'},
    {q:'Was gehört zu den Hautanhangsorganen (Hautanhangsgebilde)?',opts:['Epidermis, Dermis, Subcutis','Haare (Pilli), Nägel (Ungues), Talg-, Duft- und Schweißdrüsen (Glandulae)','Blutgefäße, Nerven, Lymphgefäße','Melanozyten, Keratinozyten, Fibroblasten'],correct:1,explanation:'Hautanhangsorgane: Haare (Pilli), Nägel (Ungues), Talg-, Duft- und Schweißdrüsen (Glandulae). Wichtig für Klausur!',lesson:'Hautanhangsorgane & Drüsen',theme:'haut'},
    {q:'Welche Bereiche des Körpers sind unbehaart (halos)?',opts:['Gesicht und Hals','Bereiche mit Felderhaut (Rücken, Arme)','Bereiche mit Leistenhaut (Handflächen und Fußsohlen)','Alle Stellen über Gelenken'],correct:2,explanation:'Haare bedecken fast den ganzen Körper — außer Bereiche mit Leistenhaut (Handflächen und Fußsohlen). Diese sind grundsätzlich unbehaart.',lesson:'Hautanhangsorgane & Drüsen',theme:'haut'},
    {q:'In welchen 3 Phasen verläuft die Haarbildung?',opts:['Wachstum, Ruhe, Abfall','Wachstumsphase, Übergangsphase, Ruhephase','Anagen, Katagen, Telogen sind nicht relevant','Produktion, Transport, Ausscheidung'],correct:1,explanation:'Haarbildung in 3 Phasen: 1. Wachstumsphase (Zellen teilen sich), 2. Übergangsphase (Produktion stoppt), 3. Ruhephase (Papille erholt sich, dann neues Haar).',lesson:'Hautanhangsorgane & Drüsen',theme:'haut'},
    {q:'Welche Aussage über Haare ist FALSCH?',opts:['Haare haben eine Talgdrüse','Haare besitzen weder Blut- noch Nervenversorgung','Haare wachsen aus der Haarpapille','Haare sind sehr gut durchblutet und versorgt'],correct:3,explanation:'FALSCH: Haare besitzen weder Blut- noch Nervenversorgung! Das Haar selbst ist "tot" — nur die Haarpapille wird über Blutgefäße versorgt.',lesson:'Hautanhangsorgane & Drüsen',theme:'haut'},
    {q:'Welche Funktion haben die Nägel (Ungues)?',opts:['Nur ästhetische Funktion','Schützen Kuppen, stabilisieren Zehenbeeren, verbessern Tastsinn, Kratzwerkzeug','Nur Schutz vor mechanischen Einflüssen','Regulierung der Körpertemperatur'],correct:1,explanation:'Nägel: schützen Finger-/Zehenkuppen, stabilisieren die darunter liegenden Finger- bzw. Zehenbeeren, verbessern die Wahrnehmung beim Ertasten/Greifen, Kratzwerkzeug.',lesson:'Hautanhangsorgane & Drüsen',theme:'haut'},
    {q:'⚠️ Was ist eine Paronychie?',opts:['Eine Haarerkrankung','Entzündung von Nagelfalz und Nagelwall','Eine Schweißdrüsenerkrankung','Verfärbung der Nägel durch Pilze'],correct:1,explanation:'Paronychie = Entzündung von Nagelfalz und Nagelwall. Hat sich bereits Eiter angesammelt → Panaritium. Die Umschlagfalte am Nagelfalz ist besonders gefährdet durch bakterielle Infektionen.',lesson:'Hautanhangsorgane & Drüsen',theme:'haut'},
    {q:'Welchem Fitzpatrick-Hauttyp entspricht: sehr helle Haut, rötlich-blondes Haar, Sonnenbrand in unter 10 Min?',opts:['Hauttyp 2 — Nordischer Typ','Hauttyp 1 — Keltischer Typ','Hauttyp 3 — Mischtyp','Hauttyp 4 — Mediterraner Typ'],correct:1,explanation:'Hauttyp 1 (Keltischer Typ): sehr helle Haut, hellblond-rötliches Haar, blau/grün/grau Augen, keine Bräunung möglich, Eigenschaftsschutz <10 Min.',lesson:'Fitzpatrick-Hauttypen',theme:'haut'},
    {q:'Wie viele Fitzpatrick-Hauttypen gibt es?',opts:['3','4','6','8'],correct:2,explanation:'Es gibt 6 Fitzpatrick-Hauttypen (1-6): von keltisch (sehr hell, <10 Min Eigenschutz) bis schwarz (dunkel, 90 Min Eigenschutz).',lesson:'Fitzpatrick-Hauttypen',theme:'haut'},
    {q:'Was charakterisiert die seborrhoische (fettige) Haut?',opts:['Spröde, trockene, schuppige Haut bei 30%','Dicke, fettige, grobporige Haut — bei 50% der Bevölkerung','Fettige Mitte, trockene Wangen — bei 20%','Sehr empfindliche Haut mit wenig Talgdrüsen'],correct:1,explanation:'Seborrhoische (fettige) Haut: dicke, fettige, grobporige, feucht glänzende Haut, Pickel/Mitesser, Überproduktion der Talgdrüsen mit vermehrter Schweißproduktion. Bei 50% der Bevölkerung.',lesson:'Veränderungen der Haut',theme:'haut'},
    {q:'Was passiert mit der Haut im Alter? (Altershaut)',opts:['Talgdrüsen produzieren mehr, Haut wird dicker','Kapillaranzahl nimmt ab, Epidermis erneuert sich langsamer, Haut wird dünner und trockener','Nur Pigmentflecken entstehen, alles andere bleibt gleich','Hautimmunität nimmt zu, Wundheilung verbessert sich'],correct:1,explanation:'Altershaut: Kapillaranzahl ↓ → blasse Haut + Hämatome. Epidermiserneuerung dauert länger → schlechtere Regeneration. Subcutis↓ + Verzahnung löst sich → pergamentartig. Schweiß/Talg↓ → trocken, schuppig, juckend. Kollagen ↓ → Falten. UV → Pigmentflecken.',lesson:'Veränderungen der Haut',theme:'haut'},
    {q:'Warum ist Kinderhaut besonders empfindlich? (3 Hauptgründe)',opts:['Zu viel Melanin, zu viele Talgdrüsen, zu große Zellen','Dünnere Hornschicht, kein fertiger Säureschutzmantel, kaum Melanin','Zu wenig Schweißdrüsen, zu trockene Haut, kein Immunsystem','Zu viele Nervenenden, zu sensitiv, zu dünn'],correct:1,explanation:'Kinderhaut: 1. Hornschicht ca. 30% dünner als bei Erwachsenen. 2. Talgdrüsen produzieren wenig Lipide → kein fertiger Säureschutzmantel → keine stabile Keimbarriere. 3. Kaum Melanin → hohe UV-Empfindlichkeit.',lesson:'Veränderungen der Haut',theme:'haut'},
  ],
  hygiene:[
    {q:'Wie lange dauert die Händedesinfektion mindestens?',opts:['10 Sekunden','20 Sekunden','30 Sekunden','60 Sekunden'],correct:2,explanation:'Mindestens 30 Sekunden, damit der Wirkstoff die Keime zuverlässig abtötet.',lesson:'Mikrobiologie + Basishygiene + PSA',theme:'hygiene'},
    {q:'Was bedeutet MRSA?',opts:['Methicillin-resistenter Staphylococcus aureus','Medikamentöse Resistenz durch Salmonellen','Mikrobiologisch resistente Streptokokken','Keine dieser Antworten'],correct:0,explanation:'MRSA = Methicillin-resistenter Staphylococcus aureus → strikte Kontaktisolation.',lesson:'Mikrobiologie + Basishygiene + PSA',theme:'hygiene'},
    {q:'Die WHO-Händehygiene umfasst wie viele Schritte?',opts:['3 Schritte','5 Schritte','6 Schritte','8 Schritte'],correct:2,explanation:'6 Schritte: Handflächen, Handrücken, Fingerzwischenräume, verschränkt, Daumen, Fingerkuppen.',lesson:'Mikrobiologie + Basishygiene + PSA',theme:'hygiene'},
  ],
  blutzuck:[
    // ── BLOC 1: Grundlagen & Pankreas ──
    {q:'Wofür benötigt der Körper Glukose?',
     opts:['Nur für die Blutbildung','Als Energiequelle für alle Körperzellen','Nur für das Immunsystem','Zur Wärmeregulation'],
     correct:1,
     explanation:'Glukose ist der wichtigste Energielieferant des Körpers. Alle Zellen — besonders Gehirn und Muskeln — sind darauf angewiesen.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-glukose'},

    {q:'Wer sorgt für die Glukoseaufnahme aus dem Blut in die Zellen?',
     opts:['Glukagon','Adrenalin','Insulin','Kortisol'],
     correct:2,
     explanation:'Insulin wirkt wie ein Schlüssel: Es öffnet die Zellen für Glukose. Ohne Insulin bleibt die Glukose im Blut — der BZ steigt.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-glukose'},

    {q:'Was ist der normale Blutzuckerwert nüchtern?',
     opts:['50–70 mg/dl','70–100 mg/dl','100–140 mg/dl','140–180 mg/dl'],
     correct:1,
     explanation:'Normaler Nüchtern-BZ: 70–100 mg/dl. Werte zwischen 100–125 mg/dl gelten als Prädiabetes. Ab 126 mg/dl (nüchtern, 2x gemessen) = Diabetes mellitus.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-werte'},

    {q:'Wie hoch darf der Blutzucker nach dem Essen (postprandial) sein?',
     opts:['Bis 100 mg/dl','Bis 120 mg/dl','Bis 140 mg/dl','Bis 200 mg/dl'],
     correct:2,
     explanation:'Nach dem Essen ist ein BZ bis 140 mg/dl noch tolerabel. Darüber sollte der Körper mit Insulin gegensteuern.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-werte'},

    {q:'Aus wie vielen Teilen besteht das Pankreas?',
     opts:['2 Teilen','3 Teilen','4 Teilen','5 Teilen'],
     correct:1,
     explanation:'Das Pankreas besteht aus 3 Teilen: Kopf (Caput), Körper (Corpus) und Schwanz (Cauda).',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-pankreas'},

    {q:'Wie liegt der Kopf des Pankreas anatomisch?',
     opts:['Er liegt neben der Milz','Er wird vom Duodenum c-förmig umschlossen','Er liegt direkt hinter der Leber','Er grenzt an den Magen'],
     correct:1,
     explanation:'Der Kopf (Caput) des Pankreas wird vom Duodenum (Zwölffingerdarm) c-förmig umschlossen. Der Schwanz grenzt an die Milz.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-pankreas'},

    {q:'Was produzieren die A-Zellen der Langerhans-Inseln?',
     opts:['Insulin — senkt den BZ','Glukagon — erhöht den BZ','Amylase — spaltet Kohlenhydrate','Lipase — spaltet Fette'],
     correct:1,
     explanation:'A-Zellen produzieren Glukagon (erhöht den BZ). Merkhilfe: A wie Anstieg. B-Zellen produzieren Insulin (Bremse).',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Was produzieren die B-Zellen der Langerhans-Inseln (70% der Inselzellen)?',
     opts:['Glukagon','Adrenalin','Insulin','Lipase'],
     correct:2,
     explanation:'B-Zellen (70% der Inselzellen) produzieren Insulin, das den BZ senkt. Merkhilfe: B wie Bremse.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Was bedeutet die endokrine Funktion des Pankreas?',
     opts:['Enzyme werden ins Duodenum abgegeben','Hormone werden direkt ins Blut abgegeben','Gallensäuren werden produziert','Magensäure wird neutralisiert'],
     correct:1,
     explanation:'Endokrin = Abgabe direkt ins Blut (Insulin, Glukagon). Exokrin = Abgabe über einen Gang nach außen (Verdauungsenzyme ins Duodenum).',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-pankreas'},

    // ── BLOC 2: Hypo / Hyper / Glukosurie ──
    {q:'Wie lautet der Fachbegriff für einen zu niedrigen BZ-Wert und ab wann spricht man davon?',
     opts:['Hyperglykämie, unter 100 mg/dl','Hypoglykämie, unter 70 mg/dl','Glukosurie, unter 80 mg/dl','Polydipsie, unter 60 mg/dl'],
     correct:1,
     explanation:'Hypoglykämie = Unterzuckerung, BZ unter 70 mg/dl. Klausurrelevant! Sofortmaßnahme: MESSEN → Traubenzucker.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hypo'},

    {q:'Nennen Sie 4 typische Symptome einer Unterzuckerung (Hypoglykämie):',
     opts:['Starker Durst, Polyurie, Müdigkeit, Juckreiz','Zittern, Schwitzen, Verwirrtheit, Heißhunger','Übelkeit, Erbrechen, Bauchschmerzen, Fieber','Blässe, Acetongeruch, Kussmaul-Atmung, Koma'],
     correct:1,
     explanation:'Typische Hypoglykämie-Symptome: Zittern, Schwitzen, Verwirrtheit, Heißhunger. Auch: Blässe, Herzrasen, Angst.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hypo'},

    {q:'⚠️ FALLE: Wie handeln Sie, wenn Sie NICHT sicher sind, ob jemand eine Unter- oder Überzuckerung hat?',
     opts:['Sofort Traubenzucker geben — Hypoglykämie ist gefährlicher','Sofort Insulin spritzen — sicherer bei Überzuckerung','Zuerst den Blutzucker messen, dann handeln','Arzt rufen und abwarten'],
     correct:2,
     explanation:'IMMER ZUERST MESSEN! Niemals blind handeln. Falsche Maßnahme kann den Zustand verschlimmern. Das ist eine Klausur-Standardfrage!',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hypo'},

    {q:'Nennen Sie 3 Anzeichen einer Überzuckerung (Hyperglykämie):',
     opts:['Zittern, Schwitzen, Heißhunger','Starker Durst, häufiges Wasserlassen, Müdigkeit','Acetongeruch, Schüttelfrost, Erbrechen','Bewusstlosigkeit, Herzrasen, Blässe'],
     correct:1,
     explanation:'Hyperglykämie-Zeichen: Starker Durst (Polydipsie), häufiges Wasserlassen (Polyurie), Müdigkeit, Schwäche, Sehstörungen.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hypo'},

    {q:'Wie lautet der Fachbegriff für einen zu hohen Blutzuckerwert?',
     opts:['Hypoglykämie','Hyperglykämie','Glukosurie','Polydipsie'],
     correct:1,
     explanation:'Hyperglykämie = erhöhter Blutzucker. Ab 126 mg/dl nüchtern (2x gemessen) = Diabetes mellitus. Grenzbereich: 100–125 mg/dl.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-hypo'},

    {q:'Ab wann ist ein Blutzuckerwert eindeutig zu hoch, und in welcher Spanne liegt der Grenzbereich?',
     opts:['Eindeutig ab 180 mg/dl, Grenzbereich 140–179 mg/dl','Eindeutig ab 126 mg/dl, Grenzbereich 100–125 mg/dl','Eindeutig ab 200 mg/dl, Grenzbereich 150–199 mg/dl','Eindeutig ab 140 mg/dl, Grenzbereich 110–139 mg/dl'],
     correct:1,
     explanation:'Ab 126 mg/dl nüchtern (2x gemessen) = Diabetes. Grenzbereich 100–125 mg/dl = Prädiabetes. Diese Grenzwerte sind klausurrelevant!',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-werte'},

    {q:'Ab welchem BZ-Wert entsteht Glukosurie (Zucker im Urin)?',
     opts:['Ab 100 mg/dl','Ab 126 mg/dl','Ab 180 mg/dl','Ab 250 mg/dl'],
     correct:2,
     explanation:'Ab 180 mg/dl (Nierenschwelle) kann die Niere den Zucker nicht mehr vollständig rückresorieren → Glukosurie entsteht.',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-bus'},

    {q:'Warum entsteht bei Diabetes Polydipsie (starker Durst)?',
     opts:['Weil das Insulin den Durst stimuliert','Weil Glukosurie Wasser mitnimmt → Exsikkose → kompensatorischer Durst','Weil die Nieren zu viel Wasser speichern','Weil der Magen weniger Flüssigkeit aufnimmt'],
     correct:1,
     explanation:'Kette: BZ > 180 → Glukosurie → Zucker zieht Wasser mit sich → Exsikkose (Austrocknung) → Polydipsie (starker Durst). Komplett erklären können!',
     lesson:'Grundlagen Blutzucker & Pankreas',theme:'blutzuck',anchor:'lsec-bus'},

    // ── BLOC 3: Diabetes Typen ──
    {q:'Welche Art von Insulinmangel liegt bei Typ-1-Diabetes vor?',
     opts:['Relativer Insulinmangel — zu wenig Insulin für die Zuckermenge','Absoluter Insulinmangel — Insulin fehlt völlig','Kein Insulinmangel — nur Insulinresistenz','Temporärer Insulinmangel — nur nachts'],
     correct:1,
     explanation:'Typ 1 = ABSOLUTER Insulinmangel. Die B-Zellen werden durch Autoimmunreaktion zerstört → kein Insulin mehr produziert.',
     lesson:'Diabetes Typ 1 – Pathophysiologie',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Was löst Typ-1-Diabetes wahrscheinlich aus?',
     opts:['Überernährung und Bewegungsmangel','Viren bei bestehender genetischer Veranlagung → Autoimmunreaktion','Zu viel Zuckerkonsum in der Kindheit','Chronischer Stress und Schlafmangel'],
     correct:1,
     explanation:'Typ 1: Wahrscheinlich durch Viren ausgelöst bei genetischer Veranlagung → Autoimmunreaktion → Antikörper zerstören B-Zellen langsam.',
     lesson:'Diabetes Typ 1 – Pathophysiologie',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Welche 3 Hauptfaktoren begünstigen Typ-2-Diabetes?',
     opts:['Viren, Kälte und Autoimmunreaktion','Über- und Fehlernährung, zu wenig Bewegung, genetische Prädisposition','Insulinmangel, Pankreaserkrankung, Infektionen','Stress, Schlafmangel und Rauchen'],
     correct:1,
     explanation:'Typ-2-Risikofaktoren: a) Über-/Fehlernährung (oft mit metabolischem Syndrom), b) Zu wenig Bewegung, c) Genetische Prädisposition.',
     lesson:'Diabetes Typ 2 – Pathophysiologie',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Was bedeutet Insulinresistenz bei Typ-2-Diabetes?',
     opts:['Das Pankreas produziert gar kein Insulin mehr','Die Zellen reagieren schlechter auf Insulin — brauchen immer mehr davon','Das Insulin wird zu schnell abgebaut','Das Insulin gelangt nicht ins Blut'],
     correct:1,
     explanation:'Insulinresistenz: Zellen reagieren immer schlechter auf Insulin → Pankreas produziert mehr → erschöpft sich → relativer Insulinmangel entsteht.',
     lesson:'Diabetes Typ 2 – Pathophysiologie',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Welche Symptome sind typisch für Typ-1-Diabetes?',
     opts:['Schleichender Beginn, Juckreiz, allgemeine Schwäche','Polyurie, Glukosurie, Polydipsie trotz Exsikkose, Gewichtsverlust','Nur Müdigkeit und leichter Durst','Keine Symptome im Frühstadium'],
     correct:1,
     explanation:'Typ 1 (akut): Polyurie, Glukosurie, Polydipsie, Exsikkose, Gewichtsverlust trotz hoher Kalorienzufuhr. Im Extremfall: Ketoazidose → Koma.',
     lesson:'Symptome Typ 1 & Typ 2 im Vergleich',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'⚠️ FALLE: Was sind frühe Anzeichen von Typ-2-Diabetes?',
     opts:['Sofortige starke Symptome wie bei Typ 1','Allgemeiner Schwächezustand und Juckreiz — erst später Durst und Polyurie','Ketoazidose und Acetongeruch','Sofortige Bewusstlosigkeit'],
     correct:1,
     explanation:'Typ 2 verläuft schleichend! Früh: Schwächezustand, Juckreiz. Spät: Starker Durst, Polyurie, Gewichtsabnahme. Oft Zufallsbefund!',
     lesson:'Symptome Typ 1 & Typ 2 im Vergleich',theme:'blutzuck',anchor:'lsec-hormone'},

    // ── BLOC 4: Therapie & Insuline ──
    {q:'Wie heißen die 3 Säulen der Therapie bei Typ-2-Diabetes?',
     opts:['Insulin, Kortison, Bewegung','Ernährungsumstellung, Bewegung, medikamentöse Therapie','Diät, Ruhe, Operation','Metformin, Insulin, Chirurgie'],
     correct:1,
     explanation:'3-Säulen-Therapie: Säule 1: Ernährungsumstellung. Säule 2: Bewegung. Säule 3: Medikamente (erst wenn Säule 1+2 nicht reichen).',
     lesson:'Therapie – 3-Säulen & Insulinarten',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'⚠️ FALLE: Welches Medikament wird bei Typ-2-Diabetes als ERSTES eingesetzt?',
     opts:['Sofort Insulin','Metformin (Biguanid)','Sulfonylharnstoffe','DPP-4-Hemmer'],
     correct:1,
     explanation:'FALLE! Viele denken sofort an Insulin. Laut Leitlinie: 1. Ernährung + Bewegung, 2. Metformin, 3. zweites Antidiabetikum, zuletzt Insulin.',
     lesson:'Therapie – 3-Säulen & Insulinarten',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Normalinsulin (z.B. Actrapid): Wirkdauer und Spritz-Ess-Abstand?',
     opts:['Wirkdauer 24h, kein Abstand nötig','Wirkdauer ~5h, Spritz-Ess-Abstand 10–20 Minuten','Wirkdauer ~3h, kein Abstand nötig','Wirkdauer 10–12h, Abstand 30–45 Minuten'],
     correct:1,
     explanation:'Normalinsulin (Actrapid, Huminsulin Normal): Wirkdauer ~5h, Spritz-Ess-Abstand 10–20 Minuten.',
     lesson:'Therapie – 3-Säulen & Insulinarten',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'⚠️ FALLE: Was ist bei Mischinsulin (trübes Aussehen) vor der Gabe unbedingt zu beachten?',
     opts:['Kräftig schütteln bis es gleichmäßig ist','Langsam schwenken — niemals schütteln! Trübes Aussehen ist normal','Erwärmen auf 37°C vor der Injektion','Im Kühlschrank aufziehen'],
     correct:1,
     explanation:'FALLE! Mischinsulin SCHWENKEN, nie schütteln — das zerstört das Insulin! Das trübe Aussehen ist normal (Langzeitanteil).',
     lesson:'Therapie – 3-Säulen & Insulinarten',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Was besagt die 30er-Regel zur BZ-Korrektur mit Insulin?',
     opts:['1 IE Insulin senkt den BZ um 30 mg/dl','1 IE Insulin erhöht den BZ um 30 mg/dl','30 IE Insulin senken den BZ um 1 mg/dl','30 IE Insulin pro kg Körpergewicht'],
     correct:0,
     explanation:'30er-Regel: 1 IE Altinsulin (z.B. Actrapid) senkt den BZ um ca. 30 mg/dl. Gilt nur als grobe Annäherung für niedrigere Werte.',
     lesson:'Therapie – 3-Säulen & Insulinarten',theme:'blutzuck',anchor:'lsec-hormone'},

    // ── BLOC 5: Diagnostik ──
    {q:'Was gibt der HbA1c-Wert an und was ist der Normwert?',
     opts:['Aktueller Nüchtern-BZ — Normwert 70–100 mg/dl','Durchschnittlicher BZ der letzten 3–4 Monate — Normwert 4–6%','BZ nach dem Essen — Normwert unter 140 mg/dl','Tägliche BZ-Schwankungen — Normwert unter 50 mg/dl'],
     correct:1,
     explanation:'HbA1c = Langzeit-BZ der letzten 3–4 Monate in %. Normwert: 4–6%. Bei Diabetikern tolerabel: 6,5–7,5%. Klausurrelevant!',
     lesson:'Diagnostik – BZTP, HbA1c, oGTT',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'Wofür steht BZTP und was zeigt es?',
     opts:['Blutzuckertherapieplan — zeigt die Medikamentendosierung','Blutzuckertagesprofil — zeigt BZ nüchtern, vor und 2h nach den Mahlzeiten','Blutzuckertestprotokoll — zeigt Wochendurchschnitt','Blutzuckertoleranzprofil — zeigt Frühdiabetes'],
     correct:1,
     explanation:'BZTP = Blutzuckertagesprofil. Zeigt BZ-Werte über den Tag verteilt: nüchtern, vor den Mahlzeiten, 2h danach.',
     lesson:'Diagnostik – BZTP, HbA1c, oGTT',theme:'blutzuck',anchor:'lsec-hormone'},

    // ── BLOC 6: Komaformen ──
    {q:'⚠️ FALLE: Welche Komaform tritt bei Typ-1-Diabetes auf und warum?',
     opts:['Hyperosmolares Koma — durch Austrocknung','Ketoazidotisches Koma — Fettabbau → Ketonkörper → Azidose','Hypoglykämisches Koma — durch zu viel Insulin','Hepatisches Koma — durch Leberversagen'],
     correct:1,
     explanation:'Ketoazidotisches Koma NUR bei Typ 1! Absoluter Insulinmangel → Fettabbau → Ketonkörper → Azidose → Kussmaul-Atmung → Acetongeruch. BZ: 300–700 mg/dl.',
     lesson:'Komaformen – Ketoazidose & Hyperosmolar',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'⚠️ FALLE: Welche Komaform tritt bei Typ-2-Diabetes auf?',
     opts:['Ketoazidotisches Koma — mit Acetongeruch','Hyperosmolares Koma — durch extreme Austrocknung','Beide Formen sind gleich wahrscheinlich','Hepatisches Koma durch Metformin'],
     correct:1,
     explanation:'FALLE! Hyperosmolares Koma = Typ 2. Etwas Insulin vorhanden → kein Fettabbau → keine Azidose. BZ bis 700 mg/dl → Austrocknung → Koma.',
     lesson:'Komaformen – Ketoazidose & Hyperosmolar',theme:'blutzuck',anchor:'lsec-hormone'},

    // ── BLOC 7: Folgeerkrankungen & Fußsyndrom ──
    {q:'Was ist Makroangiopathie und welche Folgekrankheiten entstehen?',
     opts:['Schädigung kleiner Kapillaren → Retinopathie, Nephropathie','Schädigung großer Blutgefäße → Herzinfarkt, Schlaganfall, pAVK','Nervenschäden → Kribbeln, Taubheit','Hornhautschäden → Sehverlust'],
     correct:1,
     explanation:'Makroangiopathie = Schädigung großer Gefäße (Arteriosklerose). Folgen: Herzinfarkt, Schlaganfall, pAVK (periphere Verschlusskrankheit).',
     lesson:'Folgeerkrankungen – Makro/Mikroangiopathie, Polyneuropathie',theme:'blutzuck',anchor:'lsec-hormone'},

    {q:'⚠️ FALLE: Was unterscheidet den neuropathischen vom ischämischen Fuß?',
     opts:['Neuropathisch: kalt, blass, Pulse nicht tastbar — Ischämisch: warm, Pulse tastbar','Neuropathisch: warm, Pulse tastbar, schmerzlos — Ischämisch: kalt, Pulse nicht tastbar, schmerzhaft','Beide sind identisch — nur der BZ-Wert unterscheidet','Neuropathisch: immer mit Infektion — Ischämisch: immer ohne'],
     correct:1,
     explanation:'KLAUSUR! Neuropathisch: WARM, Pulse tastbar, Sensibilitätsstörung → SCHMERZLOS (Mal perforans). Ischämisch: KALT, Pulse NICHT tastbar → SCHMERZHAFT (Nekrosen).',
     lesson:'Diabetisches Fußsyndrom',theme:'blutzuck',anchor:'lsec-hormone'},
  ],
  dekubitus:[
    // ── N1 Grundlagen — 7 Fragen ──
    {q:'Was ist ein Dekubitus per Definition (NPUAP/EPUAP)?',
     opts:['Eine Infektion der Haut durch Bakterien','Eine lokal begrenzte Schädigung der Haut/Gewebe durch Druck oder Druck+Scherkräfte über knöchernen Vorsprüngen','Eine allergische Reaktion auf Pflegeprodukte','Eine Pilzinfektion der Hautfalten'],
     correct:1,level:1,explanation:'Definition: lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes, in der Regel über knöchernen Vorsprüngen, infolge von Druck oder Druck in Kombination mit Scherkräften (NPUAP/EPUAP 2009).',
     lesson:'Definition & Expertenstandard',theme:'dekubitus'},
    {q:'Was versteht man unter Scherkräften?',
     opts:['Kräfte die senkrecht auf die Haut wirken','Entgegengesetzt wirkende Kräfte die Gewebe verschieben und Gefäße abknicken','Kräfte die die Epidermis ablösen','Thermische Kräfte durch Reibungswärme'],
     correct:1,level:1,explanation:'Scherkräfte wirken entgegengesetzt zueinander (z.B. Abgleiten im Bett). Das Gewebe wird verschoben, Gefäße werden abgeknickt → Ischämie → Nekrose. Typisch bei Oberkörperhochlagerung ohne Knierolle.',
     lesson:'Definition & Expertenstandard',theme:'dekubitus'},
    {q:'Welches sind die 3 wichtigsten Risikofaktoren laut Expertenstandard?',
     opts:['Alter, Gewicht, Geschlecht','Beeinträchtigte Mobilität, gestörte Durchblutung, beeinträchtigter Hautzustand','Schmerzen, Demenz, Inkontinenz','Ernährung, Flüssigkeitszufuhr, Medikamente'],
     correct:1,level:1,explanation:'Die 3 Hauptrisikofaktoren: 1. Beeinträchtigte Mobilität, 2. Gestörte Durchblutung (Arteriosklerose, Diabetes), 3. Beeinträchtigter Hautzustand (Feuchtigkeit). Weitere: Mangelernährung, Schmerzmittel, Sedativa.',
     lesson:'Risikofaktoren & Entstehung',theme:'dekubitus'},
    {q:'Welche sind die häufigsten Prädilektionsstellen eines Dekubitus?',
     opts:['Schultern und Ellenbogen','Kreuzbein (#1), Fersen, Trochanteren','Knie und Unterschenkel','Bauch und Brust'],
     correct:1,level:1,explanation:'Prädilektionsstellen: #1 Kreuzbein (ca. 30%), Fersen, Trochanteren (Seitenlage), Knöchel, Hinterhaupt (Kinder). Alle über knöchernen Vorsprüngen mit wenig Polstergewebe.',
     lesson:'Prädilektionsstellen & Einschätzung',theme:'dekubitus'},
    {q:'Was beschreibt Dekubitus Kategorie I nach EPUAP?',
     opts:['Offene Wunde bis zur Dermis','Nicht wegdrückbare Rötung bei intakter Haut','Sichtbares Fettgewebe','Freiliegender Knochen'],
     correct:1,level:1,explanation:'Kat. I: Nicht wegdrückbare, umschriebene Rötung bei intakter Haut über knöchernem Vorsprung. Bereich kann verhärtet, wärmer/kälter sein. ACHTUNG: Darunterliegendes Gewebe ist bereits mitbetroffen!',
     lesson:'EPUAP Klassifikation Kat. I–IV',theme:'dekubitus'},
    {q:'Was sind geeignete Maßnahmen zur Dekubitusprophylaxe?',
     opts:['Massage der geröteten Stellen und Lagerungsringe','Regelmäßige Lagerung, Bewegungsförderung, druckverteilende Matratzen, Hautbeobachtung','Hyperämisierende Salben und Wärmelampen','Watteverbände und Babypuder'],
     correct:1,level:1,explanation:'Geeignete Maßnahmen: Positionswechsel alle 2–4h (liegend), 1h (sitzend), Bewegungsförderung, viskoelastische Matratzen, Hautbeobachtung, pH-neutrale Pflege, Ernährungsoptimierung, Schulung.',
     lesson:'Prophylaxe und Donts',theme:'dekubitus'},
    {q:'Was ist der Goldstandard der Lagerung zur Dekubitusprophylaxe?',
     opts:['90°-Seitenlage','Bauchlage','30°-Schräglagerung','Oberkörperhochlagerung 45°'],
     correct:2,level:1,explanation:'Die 30°-Schräglagerung ist der Goldstandard: entlastet Kreuzbein UND Trochanter gleichzeitig. Bei 90°-Seitenlage lastet der gesamte Druck auf dem Trochanter major. Lagerungsintervall: 2–4h liegend, mind. 1h sitzend.',
     lesson:'Prophylaxe und Donts',theme:'dekubitus'},

    // ── N2 Vertiefung — 7 Fragen ──
    {q:'Wie lautet die 1. Entstehungstheorie des Dekubitus?',
     opts:['Direktschädigung durch Deformation des Muskelgewebes','Ischämie: Druckkompression der Blutgefäße → Hypoxie → Zelluntergang','Allergische Reaktion auf Hautpflegemittel','Bakterielle Infektion der Haut'],
     correct:1,level:2,explanation:'Theorie 1: Ischämie. Druck komprimiert Blutgefäße → Minderdurchblutung → Hypoxie → Stoffwechselprodukte → Zelluntergang. Bereits nach 1–2h können irreversible Schäden entstehen!',
     lesson:'Risikofaktoren & Entstehung',theme:'dekubitus'},
    {q:'Was besagt die 2. Entstehungstheorie (Direktschädigung)?',
     opts:['Infektion von außen nach innen','Mechanische Deformation des Muskelgewebes → Zytoskelettabbau → Nekrose von innen nach außen','Überhitzung durch Reibungswärme','Chemische Schädigung durch Medikamente'],
     correct:1,level:2,explanation:'Theorie 2: Deformationstheorie. Kompression deformiert Muskelgewebe auf zellulärer Ebene → Zytoskelett zerstört → Nekrose. Beginnt TIEF im Gewebe, bevor Haut sichtbare Schäden zeigt.',
     lesson:'Risikofaktoren & Entstehung',theme:'dekubitus'},
    {q:'Was beschreibt Dekubitus Kategorie III nach EPUAP?',
     opts:['Rötung bei intakter Haut','Offene Wunde bis zur Dermis','Vollständiger Hautverlust, Fettgewebe sichtbar, KEIN Knochen/Sehnen','Freiliegender Knochen, Sehnen oder Muskeln'],
     correct:2,level:2,explanation:'Kat. III: Alle Hautschichten zerstört. Subkutanes Fettgewebe sichtbar, KEINE Knochen/Muskeln/Sehnen. Belag, Tunnelierung möglich. Tiefe variiert stark (Ferse flach, Adipöse tief).',
     lesson:'EPUAP Klassifikation Kat. I–IV',theme:'dekubitus'},
    {q:'Was unterscheidet Kategorie III von Kategorie IV?',
     opts:['Kat. III hat Rötung, Kat. IV nicht','Kat. III: kein Knochen/Sehnen sichtbar — Kat. IV: Knochen, Sehnen oder Muskeln freiliegend','Kat. III schmerzhaft, Kat. IV nicht','Kat. IV nur an der Ferse möglich'],
     correct:1,level:2,explanation:'Kat. III → Fettgewebe sichtbar, KEIN Knochen/Sehnen. Kat. IV → Knochen, Sehnen oder Muskeln freiliegend oder tastbar. Kat. IV: Osteomyelitis-Risiko, höchstes Amputationsrisiko.',
     lesson:'EPUAP Klassifikation Kat. I–IV',theme:'dekubitus'},
    {q:'Was sind die 6 Kriterien der Braden-Skala?',
     opts:['Alter, Gewicht, Mobilität, Ernährung, Bewusstsein, Inkontinenz','Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte','Druck, Zeit, Durchblutung, Hautzustand, Ernährung, Mobilität','Schmerz, Fieber, RR, Puls, O₂, Bewusstsein'],
     correct:1,level:2,explanation:'Braden: 6 Kriterien — Sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Max. 23 Pkt. ≤18 = erhöhtes Risiko. ≤9 = sehr hohes Risiko. Merkhilfe: SFAMER. Reibung max. 3 Pkt!',
     lesson:'Definition & Expertenstandard',theme:'dekubitus'},
    {q:'Welche Substanzen sind zur Dekubitusprophylaxe obsolet?',
     opts:['Feuchtigkeitscreme und pH-neutrale Reinigung','Hyperämisierende Salben (ABC-Salbe, Finalgon), Vaseline, Babypuder, Seife','Wundauflagen und feuchtes Wundmilieu','Flüssigkeitsreiche Ernährung'],
     correct:1,level:2,explanation:'Obsolet/kontraindiziert: ABC-Salbe/Finalgon (verursachen Gewebsschäden!), Vaseline (porenverstopfend), Babypuder (Pasta zinci), Seife (zerstört Säureschutzmantel). Lagerungsringe erhöhen sogar den Randdruck!',
     lesson:'Prophylaxe und Donts',theme:'dekubitus'},
    {q:'Was gilt für Druck und Zeit bei der Dekubitusentstehung?',
     opts:['Nur sehr hoher Druck ist gefährlich','Hoher Druck kurze Zeit kann genauso schädigend sein wie niedriger Druck lange Zeit','Zeitdauer spielt keine Rolle','Nur Scherkräfte verursachen Dekubitus'],
     correct:1,level:2,explanation:'Druck × Zeit-Prinzip: Hoher Druck kurz = niedriger Druck lang — beides schädlich! Antidekubitusmatratzen vergrößern Kontaktfläche → Druck↓. Dennoch: Matratze ERSETZT NICHT die Lagerung!',
     lesson:'Risikofaktoren & Entstehung',theme:'dekubitus'},

    // ── N3 Profi — 7 Fragen ──
    {q:'⚠️ FALLE: Gibt es eine Progression von Kategorie I → II → III → IV?',
     opts:['Ja, immer in dieser Reihenfolge','Nein! Oberflächliche und tiefe Dekubitus sind konzeptionell VERSCHIEDENE Vorgänge','Ja, aber nur bei Immobilen','Nein, Kat. III kann zu Kat. I werden'],
     correct:1,level:3,explanation:'FALLE! Kein Progressionsmodell! Oberflächliche Dek. (I, II) entstehen von außen. Tiefe Dek. (III, IV) beginnen im Muskelgewebe (Deformationstheorie) → erst Tage/Wochen später sichtbar. Waren evtl. bei Aufnahme bereits vorhanden! (Kottner, Sibbald 2011)',
     lesson:'Prädilektionsstellen & Einschätzung',theme:'dekubitus'},
    {q:'⚠️ FALLE: Wann darf NICHT Dekubitus Kat. II diagnostiziert werden?',
     opts:['Bei tiefen Wunden','Bei Blasen durch Pflaster/Verbände, IAD, Mazeration, Mykosen, Abschürfungen','Wenn kein Knochen sichtbar ist','Wenn die Wunde infiziert ist'],
     correct:1,level:3,explanation:'KLAUSUR! Nicht als Kat. II: Blasen durch Pflaster/Verbände, IAD (Inkontinenz-assoziierte Dermatitis), Mazeration, Mykosen (Pilze), Abschürfungen. Andere Ursache, andere Therapie!',
     lesson:'EPUAP Klassifikation Kat. I–IV',theme:'dekubitus'},
    {q:'⚠️ FALLE: Reduziert die alleinige Verwendung von Risikoskalen (Braden/Norton) die Dekubitusinzidenz?',
     opts:['Ja, laut Expertenstandard belegt','Nein — kein Hinweis gefunden; sie sind nur unterstützend, nie Ersatz für klinisches Urteil','Ja, aber nur bei über 65-Jährigen','Nein, weil Risikoskalen zu ungenau sind'],
     correct:1,level:3,explanation:'FALLE! Es konnte KEIN Hinweis gefunden werden, dass Risikoskalen allein die Inzidenz senken (DNQP 2017). Geringe Interrater-Reliabilität. Nur Hilfsmittel — nie Ersatz für klinisches Urteilsvermögen!',
     lesson:'Definition & Expertenstandard',theme:'dekubitus'},
    {q:'Was ist IAD und wie unterscheidet sie sich vom Dekubitus?',
     opts:['IAD = Ischämie-assoziierte Druckschädigung, liegt über Knochen','IAD = Inkontinenz-assoziierte Dermatitis — Ursache Feuchtigkeit, NICHT Druck, unregelmäßige Ränder, im Perineum','IAD und Dekubitus sind identisch','IAD = Intertrigo-assoziierte Dystrophie'],
     correct:1,level:3,explanation:'IAD: Ursache = Feuchtigkeit (Urin/Stuhl), NICHT Druck. Lokalisation: Perineum, Gesäß (NICHT über Knochen). Ränder: unregelmäßig. IAD erhöht Dekubitusrisiko! Abgrenzung = Ausschlussdiagnose. Therapie: feuchtigkeitsregulierende Produkte, keine Druckentlastung nötig.',
     lesson:'EPUAP Klassifikation Kat. I–IV',theme:'dekubitus'},
    {q:'Warum sind tiefe Dekubitus bei Aufnahme möglicherweise bereits vorhanden ohne sichtbar zu sein?',
     opts:['Weil Kat. IV immer unsichtbar ist','Tiefe Schäden beginnen im Muskel → Sichtbarkeit erst Tage–Wochen später (bis 2 Wochen!)','Weil Patienten die Schäden verbergen','Weil Dekubitus nur bei Rückenlage entsteht'],
     correct:1,level:3,explanation:'Deformationstheorie: Nekrose beginnt im Muskelgewebe und arbeitet sich nach außen — Zeitfenster Entstehung→Sichtbarkeit bis 2 Wochen! Rechtlich bedeutsam: Schäden können vor Aufnahme entstanden sein → Aufnahmescreening + sofortige Dokumentation Pflicht!',
     lesson:'Prädilektionsstellen & Einschätzung',theme:'dekubitus'},
    {q:'Was ist NPWT und bei welchen Kategorien wird es eingesetzt?',
     opts:['Norton-Prophylaxe-Wundtherapie bei Kat. I','Negative Pressure Wound Therapy — Unterdrucktherapie bei tiefen Kat. III/IV zur Granulationsförderung','Nasale Positionswarnung Technik','Normalpflege Wundtherapie'],
     correct:1,level:3,explanation:'NPWT = Negative Pressure Wound Therapy (Unterdrucktherapie, z.B. CuraSul®): Unterdruck fördert Granulation, entfernt Sekret, verbessert Durchblutung. Indikation: Kat. III/IV, nach chirurgischer Wundsäuberung (Débridement).',
     lesson:'Prophylaxe und Donts',theme:'dekubitus'},
    {q:'⚠️ KLAUSUR: Druck = Kraft : Fläche — was bedeutet das für die Prophylaxe?',
     opts:['Druck allein ist nie gefährlich','Nur Scherkräfte zählen','Größere Kontaktfläche → geringerer Druck — daher sind großflächige Matratzen + Lagerung das Ziel','Zeit spielt keine Rolle'],
     correct:2,level:3,explanation:'Druck = Kraft : Fläche. Antidekubitusmatratzen vergrößern Kontaktfläche → Druck↓ auf Prädilektionsstellen. Kein Ersatz für Lagerung! Kombination nötig. 1 N/m² = 1 Pa = 0,0075 mmHg. Wichtig: Lagerungsintervall individuell anpassen (Risikoskala + klinisches Urteil).',
     lesson:'Risikofaktoren & Entstehung',theme:'dekubitus'},
  ],
  niere:[
    // ── N1 Grundlagen ──
    {q:'Welche der folgenden Funktionen erfüllen die Nieren?',opts:['Nur Urinbildung','Bildung von Urin, Blutdruckregulation, Hormonausschüttung und Säure-Basen-Regulation','Nur Filtration','Hormonbildung und Verdauung'],correct:1,explanation:'Die Nieren sind Multifunktionsorgane: Urinbildung, Reinigung des Blutes, Regulation von Blutdruck, Wasser-/Elektrolythaushalt, Säure-Basen-Haushalt und Hormonausschüttung (Renin, Erythropoetin).',level:1,lesson:'Anatomie & Funktionen der Niere',theme:'niere'},
    {q:'Welches Hormon produzieren die Nieren, das die Bildung roter Blutkörperchen anregt?',opts:['Renin','Aldosteron','Erythropoetin','Kortisol'],correct:2,explanation:'Die Nieren schütten Erythropoetin aus, das die Bildung von Erythrozyten im Knochenmark stimuliert. Fehlt dieses Hormon (z.B. bei Nierenversagen), entsteht Anämie.',level:1,lesson:'Anatomie & Funktionen der Niere',theme:'niere'},
    {q:'Wie viele Nephrone enthält eine einzelne Niere?',opts:['ca. 10.000','ca. 100.000','ca. 1–1,5 Millionen','ca. 10 Millionen'],correct:2,explanation:'Jede Niere enthält etwa 1–1,5 Millionen Nephrone. Beide Nieren zusammen haben ca. 2–3 Millionen Nephrone — die funktionellen Grundeinheiten der Harnbildung.',level:1,lesson:'Nephrone & Urinbildung',theme:'niere'},
    {q:'Ab welcher Füllmenge entsteht bei einem gesunden Erwachsenen Harndrang?',opts:['50–100 ml','150–300 ml','400–500 ml','600–800 ml'],correct:1,explanation:'Harndrang entsteht ab etwa 150–300 ml Blasenfüllung. Die maximale Kapazität der Harnblase liegt bei 400–600 ml.',level:1,lesson:'Ableitende Harnwege & Miktionsreflex',theme:'niere'},
    {q:'Was versteht man unter Harninkontinenz?',opts:['Häufiges, aber kontrollierbares Wasserlassen','Unfreiwilliger Harnverlust zu unpassenden Zeiten oder Orten','Zu seltenes Wasserlassen','Schmerzen beim Wasserlassen'],correct:1,explanation:'Harninkontinenz = unfreiwilliges Abgehen von Urin an unpassenden Orten oder Zeiten, mindestens 2x/Monat (Norton 1999). Laut ICS: Symptom des unfreiwilligen Urinverlusts jeglichen Ausmaßes. Kein eigenständiges Krankheitsbild, sondern ein Symptom!',level:1,lesson:'Harninkontinenz — Definition & Formen',theme:'niere'},
    {q:'Welche Form der Inkontinenz tritt typischerweise beim Husten, Niesen oder Lachen auf?',opts:['Dranginkontinenz','Reflexinkontinenz','Belastungsinkontinenz','Funktionelle Inkontinenz'],correct:2,explanation:'Belastungsinkontinenz (Stressinkontinenz): Harnabgang bei körperlicher Belastung wie Husten, Niesen, Lachen (Grad I). Ursache: geschwächte Beckenbodenmuskulatur.',level:1,lesson:'Inkontinenzformen im Detail',theme:'niere'},
    {q:'Was ist das Ziel des nationalen Expertenstandards zur Förderung der Harnkontinenz?',opts:['Alle Patienten mit Inkontinenz zu katheterisieren','Harnkontinenz bei jedem Pflegebedürftigen zu erhalten oder zu fördern','Nur die Dokumentation der Inkontinenz','Ausschließlich Medikamente einzusetzen'],correct:1,explanation:'Der Expertenstandard geht davon aus, dass bei jedem Pflegebedürftigen die Harnkontinenz erhalten oder gefördert werden kann. Eine identifizierte Inkontinenz wird beseitigt, reduziert oder kompensiert.',level:1,lesson:'Expertenstandard & Pflege bei Inkontinenz',theme:'niere'},

    // ── N2 Vertiefung ──
    {q:'Welche zwei Strukturen bilden das Nierenkörperchen?',opts:['Tubulus und Sammelrohr','Glomerulus (Kapillarknäuel) und Bowman-Kapsel','Henle-Schleife und distaler Tubulus','Nierenrinde und Nierenmark'],correct:1,explanation:'Das Nierenkörperchen besteht aus dem Glomerulus (Kapillarknäuel) und der Bowman-Kapsel. Hier wird der Primärharn gebildet — bis zu 180 Liter pro Tag, der im Tubulus auf ca. 1,5–2 Liter konzentriert wird.',level:2,lesson:'Nephrone & Urinbildung',theme:'niere'},
    {q:'Welcher Muskel ist für die Blasenentleerung verantwortlich und welches Nervensystem innerviert ihn?',opts:['M. sphincter urethrae — Sympathikus','M. detrusor vesicae — Parasympathikus','M. levator ani — Sympathikus','M. detrusor vesicae — somatisches Nervensystem'],correct:1,explanation:'Der M. detrusor vesicae (Harnblasenmuskel) wird vom Parasympathikus (S2–S4) innerviert: Kontraktion → Miktion. Der Sympathikus (L1–L3) hemmt den Detrusor → Kontinenz.',level:2,lesson:'Ableitende Harnwege & Miktionsreflex',theme:'niere'},
    {q:'Ab welchem Lebensjahr ist die bewusste Kontrolle der Blasenentleerung durch das Gehirn möglich?',opts:['Ab dem 1. Lebensjahr','Ab dem 3. Lebensjahr','Ab dem 6. Lebensjahr','Ab der Pubertät'],correct:1,explanation:'Ab dem 3. Lebensjahr ist eine Steuerung des Miktionsreflexes durch das Miktionszentrum im Gehirn möglich. Vorher: rein reflektorisch über das Rückenmark — deshalb brauchen Säuglinge Windeln.',level:2,lesson:'Ableitende Harnwege & Miktionsreflex',theme:'niere'},
    {q:'Was ist die Ursache der Dranginkontinenz?',opts:['Schwäche der Beckenbodenmuskulatur','Überaktivität der Blasenmuskulatur — unkontrollierte Detrusorkontraktionen','Nervenschaden durch Rückenmarkverletzung','Prostatavergrößerung'],correct:1,explanation:'Dranginkontinenz = Überaktivität der Blasenmuskulatur. Der Detrusor kontrahiert unkontrolliert, obwohl der Verschlussmechanismus der Harnröhre intakt ist. Ursachen: neurologische Erkrankungen, Blasenentzündung, psychische Ursachen.',level:2,lesson:'Inkontinenzformen im Detail',theme:'niere'},
    {q:'Was versteht man unter chronischer Harnretention (früher: Überlaufinkontinenz)?',opts:['Zu häufiges Wasserlassen','Überdehnung des Blasenmuskels durch Restharn bei Abflussbehinderung','Vollständiges Fehlen von Harndrang','Nächtliches Einnässen bei Kindern'],correct:1,explanation:'Chronische Harnretention: Der Blasenmuskel überdehnt sich durch angesammelten Restharn bei Abflussbehinderung (z.B. Prostatahyperplasie, Blasenstein). Es kommt zu unfreiwilligem Verlust kleiner Harnmengen.',level:2,lesson:'Inkontinenzformen im Detail',theme:'niere'},
    {q:'Welches Hilfsmittel wird beim Assessment der Inkontinenz eingesetzt, um Belastungs- von Dranginkontinenz zu unterscheiden?',opts:['Braden-Skala','Barthel-Index','Inkontinenzfragebogen nach Gaudenz','Glasgow Coma Scale'],correct:2,explanation:'Der Inkontinenzfragebogen nach Gaudenz ist ein standardisiertes Assessmentinstrument zur Differenzierung zwischen Belastungs- und Dranginkontinenz. Er erfasst Häufigkeit, Menge und Situationen des Harnverlusts.',level:2,lesson:'Expertenstandard & Pflege bei Inkontinenz',theme:'niere'},
    {q:'Welche der folgenden Angaben gehört NICHT zur Inkontinenzanamnese nach dem Expertenstandard?',opts:['Trinkverhalten und -gewohnheiten','Familienstand und Beruf','Aktuelle Medikation','Psychosoziale Auswirkungen und Leidensdruck'],correct:1,explanation:'Familienstand und Beruf gehören nicht zu den spezifischen Inhalten der Inkontinenzanamnese. Relevant sind: Trinkgewohnheiten, Medikation, Ausscheidungsgewohnheiten, Mobilität, Leidensdruck, Hilfsmittel, Erkrankungen und bei Frauen Geburtsverlauf.',level:2,lesson:'Expertenstandard & Pflege bei Inkontinenz',theme:'niere'},

    // ── N3 Profi ──
    {q:'⚠️ FALLE: Was ist der Unterschied zwischen Primärharn und Sekundärharn (Endharn)?',opts:['Beide sind identisch in Menge und Zusammensetzung','Primärharn ~180 L/Tag — durch Rückresorption in Tubuli entsteht Sekundärharn ~1,5 L/Tag','Primärharn enthält Eiweiße, Sekundärharn nicht','Sekundärharn entsteht im Glomerulus'],correct:1,explanation:'FALLE! Im Glomerulus werden täglich ~180 Liter Primärharn (Ultrafiltrat) gebildet. In den Nierenkanälchen (Tubuli) werden 99% rückresorbiert (Wasser, Elektrolyte, Glukose) → ~1,5–2 L Sekundärharn (Endharn/Urin).',level:3,lesson:'Nephrone & Urinbildung',theme:'niere'},
    {q:'Welche Nervenverbindungen sind am Miktionsreflex beim Erwachsenen beteiligt? (komplett)',opts:['Nur Parasympathikus und Rückenmark','Miktionszentrum Großhirn, Hirnstamm, Rückenmark, sakrales Reflexzentrum, N. hypogastricus, N. pelvicus, N. pudendus','Nur N. pudendus und N. pelvicus','Sympathikus und Parasympathikus ohne kortikale Kontrolle'],correct:1,explanation:'Beim Erwachsenen sind beteiligt: (1) Miktionszentrum im Großhirn, (2) Miktionszentrum im Hirnstamm, (3) Rückenmark, (4) sakrales Reflexzentrum, (5) N. hypogastricus (Sympathikus L1–L3), (6) N. pelvicus (Parasympathikus S2–S4), (7) N. pudendus (äußerer Sphinkter).',level:3,lesson:'Ableitende Harnwege & Miktionsreflex',theme:'niere'},
    {q:'Was ist der Unterschied zwischen Reflexinkontinenz und funktioneller Inkontinenz?',opts:['Kein Unterschied — beide sind neurologisch','Reflexinkontinenz: Nervenstörung der Blase/Schließmuskeln. Funktionelle Inkontinenz: Ursache liegt NICHT im Urogenitaltrakt (Demenz, Mobilität)','Funktionelle Inkontinenz entsteht durch Beckenbodendefekte','Reflexinkontinenz ist nur bei Frauen möglich'],correct:1,explanation:'Reflexinkontinenz: neurogene Störung der Blase (Rückenmarkschädigung, MS, Parkinson) → kein willentlicher Harnverlust möglich. Funktionelle Inkontinenz: Urogenitaltrakt intakt, aber Demenz, eingeschränkte Mobilität oder Depressionen verhindern rechtzeitigen Gang zur Toilette.',level:3,lesson:'Inkontinenzformen im Detail',theme:'niere'},
    {q:'⚠️ FALLE: Welche Therapie ist bei Belastungsinkontinenz Grad III indiziert?',opts:['Nur Beckenbodentraining','Nur medikamentöse Therapie','Konservative Therapie nicht mehr ausreichend — operative Therapie (Beckenbodenschwäche mit Blasensenkung)','Elektrostimulation allein'],correct:2,explanation:'FALLE! Grad I+II: konservative Therapie (Beckenbodentraining, Pessartherapie, Biofeedback). Grad III (Harnverlust im Liegen): operative Therapie bei Beckenbodenschwäche mit Blasensenkung und Senkung der inneren Geschlechtsorgane ist oft indiziert.',level:3,lesson:'Inkontinenzformen im Detail',theme:'niere'},
    {q:'Welche Aufgabe hat das Blasenfüllungszentrum im Miktionszentrum des Gehirns?',opts:['Es aktiviert den Parasympathikus → Miktion','Es hemmt die parasympathischen Fasern im Rückenmark → kein Detrusorkontraktionen + erhöhte Sphinkterspannung → Kontinenz','Es koordiniert nur den N. pudendus','Es sendet Signale direkt an den Glomerulus'],correct:1,explanation:'Das Blasenfüllungszentrum hemmt die parasympathischen Fasern im Rückenmark → keine Detrusorkontraktion, erhöhte Sphinkterspannung → Kontinenz (Harn anhalten). Das Blasenentleerungszentrum macht das Gegenteil: Parasympathikus aktiviert → Detrusor spannt an → Miktion.',level:3,lesson:'Ableitende Harnwege & Miktionsreflex',theme:'niere'},
    {q:'Was versteht man unter dem Renin-Angiotensin-System in Bezug auf die Nierenfunktion?',opts:['Renin bildet direkt Urin','Die Nieren bilden Renin bei Blutdruckabfall → Aktivierung der Angiotensin-Kaskade → Blutdrucksteigerung','Renin ist identisch mit Erythropoetin','Renin reguliert nur den pH-Wert'],correct:1,explanation:'Die Nieren bilden bei Blutdruckabfall das Hormon Renin → Renin aktiviert Angiotensin I → Angiotensin II (Vasokonstriktion, Aldosteron-Ausschüttung → Na+/Wasser-Retention) → Blutdrucksteigerung. Wichtig für Hypertonie-Therapie (ACE-Hemmer)!',level:3,lesson:'Anatomie & Funktionen der Niere',theme:'niere'},
    {q:'⚠️ KLAUSURFALLE: Was ist der pH-Wert des Blutes, den die Nieren regulieren, und welches Organ arbeitet dabei zusammen?',opts:['pH 6,0–7,0 — mit der Leber','pH 7,37–7,4 — mit der Lunge (über CO₂-Ausscheidung)','pH 7,0–7,2 — mit dem Pankreas','pH 7,4–8,0 — nur die Nieren allein'],correct:1,explanation:'Der physiologische pH-Wert des Blutes beträgt 7,37–7,4. Die Nieren regulieren den Säure-Basen-Haushalt durch H⁺-Ausscheidung und HCO₃⁻-Rückresorption. Die Lunge arbeitet über CO₂-Ausscheidung zusammen (respiratorische Kompensation).',level:3,lesson:'Anatomie & Funktionen der Niere',theme:'niere'},
  ],
};

const FACHBEGRIFFE = [
  // === NIERE & INKONTINENZ ===
  {term:'Nephron',def:'Funktionelle Grundeinheit der Niere — besteht aus Nierenkörperchen (Glomerulus + Bowman-Kapsel) und Nierenkanälchen (Tubuli). 1–1,5 Mio. pro Niere'},
  {term:'Glomerulus',def:'Kapillarknäuel im Nierenkörperchen — filtert den Primärharn (~180 L/Tag) aus dem Blut (Ultrafiltration)'},
  {term:'Primärharn',def:'Ultrafiltrat des Blutes im Glomerulus (~180 L/Tag). Enthält Wasser, Elektrolyte, Glukose, Aminosäuren — noch kein Endharn'},
  {term:'Sekundärharn',def:'Endharn nach Rückresorption im Tubulus (~1,5–2 L/Tag). 99% des Primärharns werden rückresorbiert'},
  {term:'Henle-Schleife',def:'Teil des Nierenkanälchens im Nierenmark — wichtig für Wasserrückresorption und Harnkonzentrierung'},
  {term:'Erythropoetin',def:'Hormon der Nieren — stimuliert die Bildung roter Blutkörperchen im Knochenmark. Mangel bei Nierenversagen → renale Anämie'},
  {term:'Renin',def:'Hormon der Nieren bei Blutdruckabfall → aktiviert Angiotensin-Kaskade → Blutdrucksteigerung (Renin-Angiotensin-System)'},
  {term:'M. detrusor vesicae',def:'Blasenwandmuskel — Kontraktion durch Parasympathikus (S2–S4) → Miktion. Entspannung durch Sympathikus → Blasenfüllung'},
  {term:'Miktionsreflex',def:'Reflex zur Blasenentleerung: Dehnungsrezeptoren → Rückenmark → Parasympathikus → Detrusor kontrahiert, Sphinkter erschlafft'},
  {term:'Miktionszentrum',def:'Übergeordnetes Zentrum im Gehirn (Großhirn + Hirnstamm): steuert ab 3. Lebensjahr bewusst Kontinenz und Miktion'},
  {term:'Kontinenz',def:'Fähigkeit zur willkürlichen Blasenentleerung zu passender Zeit und am passenden Ort — Gegenteil von Inkontinenz'},
  {term:'Harninkontinenz',def:'Unfreiwilliger Harnverlust jeglichen Ausmaßes (ICS). Kein Krankheitsbild, sondern ein Symptom — 2x/Monat oder öfter (Norton 1999)'},
  {term:'Belastungsinkontinenz',def:'Harnabgang bei körperlicher Belastung (Husten/Niesen = Grad I, Heben = Grad II, Liegen = Grad III) ohne Harndrang'},
  {term:'Dranginkontinenz',def:'Überaktivität des Detrusors → unkontrollierte Blasenentleerung trotz intaktem Schließmechanismus. Ursachen: neurologisch, Infektion, psychisch'},
  {term:'Reflexinkontinenz',def:'Neurogene Inkontinenz durch Nervenstörung (Rückenmarkschädigung, MS) — kein willentlicher Harnverlust möglich, Blase nicht wahrnehmbar'},
  {term:'Funktionelle Inkontinenz',def:'Urogenitaltrakt intakt, aber Demenz/Immobilität/Depression verhindern rechtzeitigen Toilettengang'},
  {term:'Harnretention',def:'Unvollständige Blasenentleerung mit Restharnbildung. Chronisch: Blasenüberdehnung, Abflussbehinderung (Prostata, Blasenstein)'},
  {term:'Miktionsprotokoll',def:'Dokumentation von Trinkmenge, Miktionsfrequenz, -menge und Inkontinenzepisoden — wichtigstes Assessmentinstrument'},
  {term:'Kontinenzprofil',def:'Pflegediagnostisches Ziel im Expertenstandard: beschreibt angestrebte Kontinenzsituation des Pflegebedürftigen'},
  {term:'Beckenbodentraining',def:'Gezielte Kräftigung der Beckenbodenmuskulatur → Unterstützung des äußeren Schließmuskels → Indikation: Belastungsinkontinenz'},
  {term:'Dekubitus',def:'Lokal begrenzte Schädigung der Haut/des Gewebes über knöchernen Vorsprüngen infolge von Druck oder Druck + Scherkräften (NPUAP/EPUAP)'},
  {term:'Ischämie',def:'Mangeldurchblutung eines Gewebes durch Druckkompression der Blutgefäße → Hypoxie → Zelluntergang'},
  {term:'Scherkräfte',def:'Entgegengesetzt zueinander wirkende Kräfte innerhalb eines Gewebes — führen zu Gefäßabknickung und Gewebsdeformation'},
  {term:'EPUAP',def:'European Pressure Ulcer Advisory Panel — erstellt die internationale Klassifikation von Dekubitus in 4 Kategorien'},
  {term:'NPUAP',def:'National Pressure Ulcer Advisory Panel — US-amerikanische Organisation, gemeinsam mit EPUAP Urheber der Dekubitusklassifikation'},
  {term:'Prädilektionsstellen',def:'Bevorzugte Entstehungsorte von Dekubitus: Kreuzbein (#1), Fersen, Hüfte (Trochanter), Knöchel, Hinterkopf'},
  {term:'IAD',def:'Inkontinenz assoziierte Dermatitis — feuchtigkeitsbedingte Hautschädigung durch Urin/Stuhl, KEIN Dekubitus'},
  {term:'Intertrigo (ITD)',def:'Intertriginöse Dermatitis durch Schwitzen und Reibung in Hautfalten (Rima ani, inguinal)'},
  {term:'MASD',def:'Moisture-associated skin damage — Oberbegriff für feuchtigkeitsbedingte Hautschäden (IAD, ITD, Mazeration)'},
  {term:'Mazeration',def:'Aufweichung der Haut durch länger anhaltende Feuchtigkeit — erhöht Dekubitusrisiko erheblich'},
  {term:'Nekrose',def:'Gewebetod durch anhaltende Unterversorgung (Ischämie) oder direkte mechanische Schädigung'},
  {term:'Unterminierung',def:'Taschenartige Gewebezerstörung unter intakter Haut am Wundrand — Zeichen für tiefe Dekubitus'},
  {term:'NPWT',def:'Negative Pressure Wound Therapy (Unterdrucktherapie) — bei tiefen Dekubitusulzera, fördert Granulation'},
  {term:'Osteomyelitis',def:'Knochenmarkentzündung — schwere Komplikation bei Kategorie IV Dekubitus mit freiliegendem Knochen'},
  {term:'Expertenstandard',def:'Wissenschaftlich begründeter Standard des DNQP — Dekubitusprophylaxe 2017: 6 Handlungsebenen, verbindlich für Pflegepersonal'},
  {term:'DNQP',def:'Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — erstellt evidenzbasierte Expertenstandards'},
  {term:'Braden-Skala',def:'Dekubitusrisikoskala mit 6 Faktoren (Aktivität, Mobilität, Ernährung, Feuchtigkeit, Reibung, Sensibilität). Niedrigerer Wert = höheres Risiko'},
  {term:'Hyperämisierende Salben',def:'ABC-Salbe, Finalgon — ZUR DEKUBITUSPROPHYLAXE OBSOLET! Verursachen Gewebsschäden statt zu schützen'},
  {term:'Bradykardie',def:'Herzfrequenz unter 60 Schläge pro Minute'},
  {term:'Hypertonie',def:'Bluthochdruck – systolischer Wert über 140 mmHg'},
  {term:'Hypotonie',def:'Niedriger Blutdruck – systolischer Wert unter 90 mmHg'},
  {term:'Dyspnoe',def:'Atemnot / erschwertes Atmen'},
  {term:'Apnoe',def:'Atemstillstand'},
  {term:'Tachypnoe',def:'Beschleunigte Atmung (über 20 Atemzüge/min)'},
  {term:'Bradypnoe',def:'Verlangsamte Atmung (unter 12 Atemzüge/min)'},
  {term:'Zyanose',def:'Bläuliche Verfärbung der Haut durch Sauerstoffmangel'},
  {term:'Ödeme',def:'Ansammlung von Flüssigkeit im Gewebe'},
  {term:'Dekubitus',def:'Druckgeschwür durch anhaltenden Druck auf die Haut'},
  {term:'Dysphagie',def:'Schluckstörung / erschwertes Schlucken'},
  {term:'Exsikkose',def:'Austrocknung des Körpers (Dehydration)'},
  {term:'Hypoglykämie',def:'Unterzuckerung – Blutzucker unter 70 mg/dl'},
  {term:'Hyperglykämie',def:'Überzuckerung – erhöhter Blutzucker'},
  {term:'Anamnese',def:'Erhebung der Krankengeschichte eines Patienten'},
  {term:'Diagnose',def:'Feststellung einer Krankheit anhand von Symptomen'},
  {term:'Prognose',def:'Voraussage über den Krankheitsverlauf'},
  {term:'Prophylaxe',def:'Vorbeugung / Maßnahmen zur Krankheitsverhütung'},
  {term:'Rehabilitation',def:'Wiederherstellung der körperlichen/geistigen Funktionen'},
  {term:'MRSA',def:'Methicillin-resistenter Staphylococcus aureus – multiresistenter Erreger'},
  {term:'Nosokomial',def:'Im Krankenhaus entstanden / krankenhauserworbene Infektion'},
  {term:'Sublingual',def:'Unter die Zunge (Applikationsweg für Medikamente)'},
  {term:'Intravenös (i.v.)',def:'In die Vene hinein – direkter Weg ins Blut'},
  {term:'Subkutan (s.c.)',def:'Unter die Haut – ins Fettgewebe (z.B. Insulin)'},
  // Diabetes Mellitus Fachbegriffe
  {term:'Hypoglykämie',def:'Unterzuckerung – Blutzucker unter 70 mg/dl → Zittern, Schwitzen, Verwirrtheit'},
  {term:'Hyperglykämie',def:'Überzuckerung – erhöhter Blutzucker über 126 mg/dl nüchtern'},
  {term:'Glukosurie',def:'Ausscheidung von Zucker im Urin – ab BZ über 180 mg/dl (Nierenschwelle)'},
  {term:'Polydipsie',def:'Vermehrter Durst – Folge von Glukosurie und Wasserverlust bei Diabetes'},
  {term:'Polyurie',def:'Vermehrtes Wasserlassen – häufiges Symptom bei Diabetes mellitus'},
  {term:'HbA1c',def:'Langzeitblutzucker der letzten 3–4 Monate in % – Normwert 4–6%'},
  {term:'BZTP',def:'Blutzuckertagesprofil – BZ nüchtern, vor und 2h nach den Mahlzeiten'},
  {term:'Insulin',def:'Hormon der B-Zellen – senkt den Blutzucker (B = Bremse)'},
  {term:'Glukagon',def:'Hormon der A-Zellen – erhöht den Blutzucker (A = Anstieg)'},
  {term:'Ketoazidose',def:'Lebensbedrohliche Übersäuerung bei Typ-1-Diabetes durch Ketonkörper'},
  {term:'Makroangiopathie',def:'Schädigung großer Blutgefäße bei Diabetes → Herzinfarkt, Schlaganfall, pAVK'},
  {term:'Mikroangiopathie',def:'Schädigung kleiner Gefäße (Kapillaren) → Retinopathie, Nephropathie'},
  {term:'Polyneuropathie',def:'Nervenschäden durch Diabetes → Kribbeln, Taubheit, Muskelschwäche'},
  {term:'Mal perforans',def:'Schmerzloses Ulkus an der Fußsohle beim neuropathischen diabetischen Fuß'},
  {term:'Metformin',def:'Erstlinien-Medikament bei Typ-2-Diabetes (Biguanid) – kein Insulin!'},
  {term:'Insulinresistenz',def:'Zellen reagieren schlechter auf Insulin → Pankreas erschöpft sich → Typ-2-Diabetes'},
  // Haut Fachbegriffe
  {term:'Cutis',def:'Lateinisch für Haut = Epidermis + Dermis (größtes und nervenreichstes Organ)'},
  {term:'Epidermis',def:'Oberhaut — keine Gefäße, erneuert sich alle 30 Tage, sitzt auf der Basalmembran'},
  {term:'Dermis',def:'Lederhaut — enthält Blutgefäße, Nerven, Haarfollikel, Talg- und Schweißdrüsen'},
  {term:'Subcutis',def:'Unterhaut und Fettgewebe — Wärmedämmung, Energiespeicher, Stoßdämpfer'},
  {term:'Melanin',def:'Farbstoff in der Basalzellschicht — schützt vor UV-Strahlung'},
  {term:'Melanozyten',def:'Melanin-produzierende Zellen in der Basalzellschicht der Epidermis'},
  {term:'Säureschutzmantel',def:'Hydro-Lipid-Film aus Talg (Talgdrüsen) + Schweiß (Schweißdrüsen) — schützt vor Keimen'},
  {term:'Residente Hautflora',def:'Dauerhaft auf der Haut vorhandene, nicht pathogene Mikroorganismen'},
  {term:'Transiente Hautflora',def:'Vorübergehend auf der Haut vorhandene, nicht pathogene Mikroorganismen'},
  {term:'Leistenhaut',def:'Haut an Handflächen und Fußsohlen — mit Leisten/Furchen, bis 9mm dick'},
  {term:'Felderhaut',def:'Haut am restlichen Körper — größter Teil, Gesäß 3mm, Gesicht <1mm'},
  {term:'Basalzellschicht',def:'Unterste Epidermisschicht — enthält Stammzellen und Melanozyten, auf Basalmembran'},
  {term:'Diffusion',def:'Passiver Transport von höherer zu niedrigerer Konzentration — versorgt die Epidermis'},
  {term:'Malignes Melanom',def:'Hautkrebs ausgehend von Melanozyten — sehr bösartig, metastasiert lymphogen + hämatogen'},
  {term:'Papillenschicht',def:'1. Schicht der Dermis — viele Blutgefäße, Druck kann diese komprimieren → Dekubitus!'},
  {term:'Geflechtschicht',def:'2. Schicht der Dermis — kollagenreiche elastische Fasern, Elastizität nimmt im Alter ab'},
  {term:'Glanzzellschicht',def:'Nur in Leistenhaut! Direkt unter Hornschicht, bricht UV-Licht stark (UV-Schutz)'},
  {term:'Stachelzellschicht',def:'Epidermisschicht mit stachelförmigen Zellen — verleiht der Haut besondere Festigkeit'},
  {term:'Körnerzellschicht',def:'Enthält Keratohyalinkörner (Eiweißkörper) — langsame Verhornung der Zellen'},
  {term:'Hornzellschicht',def:'Äußerste Epidermisschicht — abgestorbene kernlose Zellen, Dicke je nach Belastung'},
  {term:'Haarpapille',def:'Basis des Haares — Zellen teilen sich hier, Blutgefäße versorgen das Wachstum'},
  {term:'Haarfollikel',def:'Haarbalg — Einstülpung der Epidermis die das Haar umgibt, enthält Talgdrüse'},
  {term:'M. erector pili',def:'Haaraufrichtungsmuskel — kontrahiert bei Kälte/Angst → Gänsehaut'},
  {term:'Paronychie',def:'Entzündung von Nagelfalz und Nagelwall — durch Bakterien, bei Eiter → Panaritium'},
  {term:'Panaritium',def:'Schwere eitrige Entzündung am Finger/Nagel — Komplikation einer Paronychie'},
  {term:'Seborrhoische Haut',def:'Fettige Haut (50% der Bevölkerung) — grobporig, Pickel, Überproduktion der Talgdrüsen'},
  {term:'Sebostatische Haut',def:'Trockene Haut (30% der Bevölkerung) — spröde, rissig, schuppig, verminderte Talgproduktion'},
  {term:'Fitzpatrick-Skala',def:'Klassifikation der 6 Hauttypen nach UV-Empfindlichkeit — von keltisch (Typ 1) bis schwarz (Typ 6)'},
  {term:'Altershaut',def:'Kapillaren ↓, Epidermiserneuerung langsamer, Subcutis↓ → pergamentartig, trocken, Falten, Pigmentflecken'},
  {term:'Vater-Pacini-Körperchen',def:'Mechanorezeptor in der Subcutis — reagiert auf Vibration'},
  {term:'Meissner-Tastkörperchen',def:'Mechanorezeptor in der Dermis — reagiert auf Berührung/Tasten'},
  {term:'Merkel-Tastzellen',def:'Mechanorezeptor in der Oberhaut (Basalzellschicht) — reagiert auf Druck'},
  // Dekubitus
  {term:'Dekubitus',def:'Lokal begrenzte Schädigung der Haut/Gewebe über knöchernen Vorsprüngen durch Druck oder Druck+Scherkräfte (NPUAP/EPUAP)'},
  {term:'Ischämie',def:'Minderdurchblutung → Nährstoffmangel (Hypoxie) + Anreicherung Stoffwechselprodukte → Zelluntergang'},
  {term:'Scherkräfte',def:'Entgegengesetzt zueinander wirkende Kräfte innerhalb eines Gewebes — wichtiger Entstehungsfaktor des Dekubitus'},
  {term:'EPUAP',def:'European Pressure Ulcer Advisory Panel — europäische Fachgesellschaft für Dekubituseinstufung (Kategorie I–IV)'},
  {term:'NPUAP',def:'National Pressure Ulcer Advisory Panel — amerikanische Fachgesellschaft, gemeinsam mit EPUAP für Klassifikation zuständig'},
  {term:'Prädilektionsstellen',def:'Bevorzugte Stellen der Dekubitusentstehung: Kreuzbein, Steißbein, Fersen, Trochanter, Schulterblätter'},
  {term:'IAD',def:'Inkontinenz-assoziierte Dermatitis — Hautschaden durch Kontakt mit Urin/Stuhl. Kein Dekubitus! (Ausschlussdiagnose)'},
  {term:'Intertrigo (ITD)',def:'Intertriginöse Dermatitis — Hautschaden in Körperfalten durch Schwitzen/Reibung. In der Rima ani, inguinal.'},
  {term:'Dekubitus Kategorie I',def:'Nicht wegdrückbare Rötung bei intakter Haut über knöchernem Vorsprung — kann schmerzhaft, verhärtet, warm/kalt sein'},
  {term:'Dekubitus Kategorie II',def:'Teilzerstörung der Haut bis zur Dermis — flache Wunde oder Blase, ohne Beläge/Nekrose/Bluterguss'},
  {term:'Dekubitus Kategorie III',def:'Zerstörung aller Hautschichten, kein freiliegender Knochen/Muskel/Sehne — Tunnel möglich'},
  {term:'Dekubitus Kategorie IV',def:'Totaler Gewebsverlust mit freiliegendem Knochen, Sehnen oder Muskeln — Osteomyelitis möglich'},
  {term:'Expertenstandard DNQP',def:'Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — 6 Handlungsebenen zur Dekubitusprophylaxe (2017)'},
  {term:'Braden-Skala',def:'Risikoskala zur Dekubituseinschätzung — CAVE: kein Beweis für Senkung der Inzidenz, nur unterstützend'},
  {term:'MASD',def:'Moisture-associated skin damage — Feuchtigkeitsbedingte Hautschäden (IAD, Intertrigo, Mazeration)'},
  {term:'NPWT',def:'Negative Pressure Wound Therapy — Unterdrucktherapie zur Wundheilung bei tiefen Dekubitus (z.B. CuraSul®)'},
];

const PRAXIS_DATA = {
  krankenhaus:{
    label:'🏥 Akute Pflege (Krankenhaus)',
    expressions:[
      {de:'Haben Sie Schmerzen?',fr:'Avez-vous des douleurs ?'},
      {de:'Wo genau haben Sie Schmerzen?',fr:'Où exactement avez-vous mal ?'},
      {de:'Auf einer Skala von 0 bis 10 – wie stark sind die Schmerzen?',fr:'Sur une échelle de 0 à 10, comment évaluez-vous la douleur ?'},
      {de:'Ich helfe Ihnen beim Aufstehen.',fr:'Je vous aide à vous lever.'},
      {de:'Haben Sie Allergien?',fr:'Avez-vous des allergies ?'},
      {de:'Haben Sie heute Morgen Ihre Medikamente genommen?',fr:'Avez-vous pris vos médicaments ce matin ?'},
      {de:'Ich werde jetzt Ihren Blutdruck messen.',fr:'Je vais maintenant mesurer votre tension artérielle.'},
      {de:'Bitte atmen Sie tief ein und aus.',fr:'Veuillez respirer profondément.'},
      {de:'Haben Sie sich übergeben?',fr:'Avez-vous vomi ?'},
      {de:'Wie fühlen Sie sich heute?',fr:'Comment vous sentez-vous aujourd\'hui ?'},
    ],
    material:[
      {icon:'💉',name:'Venenverweilkanüle',desc:'Zugang für i.v.-Therapie'},
      {icon:'🩺',name:'Stethoskop',desc:'Abhören von Herz und Lunge'},
      {icon:'⏱️',name:'Pulsoximeter',desc:'Messung O₂-Sättigung'},
      {icon:'🩹',name:'Verbandsmaterial',desc:'Wundversorgung'},
      {icon:'💊',name:'Medikamentenwagen',desc:'Sichere Medikamentengabe'},
      {icon:'📊',name:'EKG-Gerät',desc:'Herzstromkurve aufzeichnen'},
    ]
  },
  altenheim:{
    label:'🏡 Langzeitpflege (Altenheim)',
    expressions:[
      {de:'Guten Morgen! Haben Sie gut geschlafen?',fr:'Bonjour ! Avez-vous bien dormi ?'},
      {de:'Darf ich Ihnen beim Waschen helfen?',fr:'Puis-je vous aider à vous laver ?'},
      {de:'Möchten Sie heute ein Bad oder eine Dusche?',fr:'Préférez-vous un bain ou une douche aujourd\'hui ?'},
      {de:'Das Frühstück ist fertig. Haben Sie Hunger?',fr:'Le petit-déjeuner est prêt. Avez-vous faim ?'},
      {de:'Ich helfe Ihnen beim Anziehen.',fr:'Je vous aide à vous habiller.'},
      {de:'Haben Sie heute Nacht geschlafen?',fr:'Avez-vous dormi cette nuit ?'},
      {de:'Brauchen Sie die Toilette?',fr:'Avez-vous besoin d\'aller aux toilettes ?'},
      {de:'Wir gehen jetzt ein bisschen spazieren.',fr:'Nous allons faire une petite promenade.'},
    ],
    material:[
      {icon:'🛁',name:'Badewannenlift',desc:'Sicheres Baden'},
      {icon:'🚶',name:'Rollator',desc:'Gehhilfe / Mobilität'},
      {icon:'🛏️',name:'Pflegebett',desc:'Höhenverstellbar, mit Seitengitter'},
      {icon:'🧴',name:'Hautpflegeprodukte',desc:'Dekubitusprophylaxe'},
      {icon:'🩺',name:'Blutdruckgerät',desc:'Regelmäßige Kontrolle'},
      {icon:'🍽️',name:'Hilfsmittel Essen',desc:'Spezialbesteck, Teller'},
    ]
  },
  psychiatrie:{
    label:'🧠 Psychiatrie',
    expressions:[
      {de:'Wie geht es Ihnen heute?',fr:'Comment allez-vous aujourd\'hui ?'},
      {de:'Ich höre Ihnen zu.',fr:'Je vous écoute.'},
      {de:'Sie sind hier in Sicherheit.',fr:'Vous êtes en sécurité ici.'},
      {de:'Haben Sie heute geschlafen?',fr:'Avez-vous dormi aujourd\'hui ?'},
      {de:'Möchten Sie über Ihre Gefühle sprechen?',fr:'Souhaitez-vous parler de vos sentiments ?'},
      {de:'Wir sind für Sie da.',fr:'Nous sommes là pour vous.'},
      {de:'Haben Sie Ihre Medikamente genommen?',fr:'Avez-vous pris vos médicaments ?'},
      {de:'Was beschäftigt Sie gerade?',fr:'Qu\'est-ce qui vous préoccupe en ce moment ?'},
    ],
    material:[
      {icon:'🛏️',name:'Sicherheitsbett',desc:'Mit Seitenschutz'},
      {icon:'💊',name:'Medikamentendispenser',desc:'Sichere Ausgabe'},
      {icon:'📝',name:'Dokumentationsbogen',desc:'Verlaufsbeobachtung'},
      {icon:'🔒',name:'Sicherheitsschloss',desc:'Gesicherte Bereiche'},
      {icon:'🧘',name:'Therapiematerial',desc:'Für Gruppen-/Einzeltherapie'},
      {icon:'🚪',name:'Aufenthaltsraum',desc:'Strukturierter Tagesablauf'},
    ]
  },
  kinderklinik:{
    label:'👶 Kinderklinik / Pädiatrie',
    expressions:[
      {de:'(an Kind) Wie heißt du?',fr:'(à l\'enfant) Comment tu t\'appelles ?'},
      {de:'(an Eltern) Wie lange hat Ihr Kind diese Symptome?',fr:'(aux parents) Depuis combien de temps votre enfant a-t-il ces symptômes ?'},
      {de:'Ich werde dir jetzt kurz ans Ohr schauen.',fr:'Je vais juste regarder ton oreille.'},
      {de:'Das ist ein kleines Pflaster, das tut fast nicht weh.',fr:'C\'est un petit pansement, ça ne fait presque pas mal.'},
      {de:'Hat Ihr Kind Allergien?',fr:'Votre enfant a-t-il des allergies ?'},
      {de:'Wie ist der Appetit Ihres Kindes?',fr:'Comment est l\'appétit de votre enfant ?'},
    ],
    material:[
      {icon:'🧸',name:'Spielzeug / Ablenkung',desc:'Beruhigung beim Eingriff'},
      {icon:'💉',name:'Kinderkanüle',desc:'Kleiner Durchmesser'},
      {icon:'🌡️',name:'Ohrthermometer',desc:'Kindgerechte Messung'},
      {icon:'⚖️',name:'Kinderwaage',desc:'Gewichtskontrolle'},
      {icon:'🩺',name:'Kinderstethoskop',desc:'Kleinere Membrane'},
      {icon:'🍭',name:'Belohnungssystem',desc:'Motivation und Kooperation'},
    ]
  }
};

// ─── LESSON CONTENT (version animée) ────────────────────────────────────────
const LESSON_CONTENT = {
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

}; // end LESSON_CONTENT

// Hautschicht SVG interaktion
function hautSchichtSelect(part){
  ['epidermis','dermis','subcutis'].forEach(p=>{
    const s=document.getElementById('svg-'+p);
    const l=document.getElementById('lbl-'+p);
    if(s){s.style.opacity='1';s.style.filter='none';}
    if(l) l.classList.remove('active');
  });
  const sel=document.getElementById('svg-'+part);
  if(sel){sel.style.filter='brightness(1.8)';sel.style.transform='scale(1.03)';}
  const lbl=document.getElementById('lbl-'+part);
  if(lbl) lbl.classList.add('active');
  ['epidermis','dermis','subcutis'].filter(p=>p!==part).forEach(p=>{
    const el=document.getElementById('svg-'+p);
    if(el){el.style.opacity='.25';el.style.filter='none';}
  });
}

// ─── OPEN LESSON ─────────────────────────────────────────────────────────────
function openLesson(themeId, lessonName, themeObj, anchorId){
  currentThemeObj = themeObj;
  const contentFn = LESSON_CONTENT[themeId]?.[lessonName];
  const header = document.getElementById('lektion-header');
  const body = document.getElementById('lektion-body');

  header.innerHTML='';  // header vide

  // Swapper la topbar principale vers mode leçon
  document.getElementById('topbar-default').style.display = 'none';
  const topLekt = document.getElementById('topbar-lektion');
  if(topLekt) topLekt.style.display = 'flex';
  const topBackBtn = document.getElementById('topbar-back-btn');
  if(topBackBtn) topBackBtn.onclick = () => openDetail(themeObj);
  const topTitle = document.getElementById('topbar-lesson-title');
  if(topTitle) topTitle.textContent = lessonName;
  const s2 = document.getElementById('streak-display2');
  const s1 = document.getElementById('streak-display');
  if(s2 && s1) s2.textContent = s1.textContent;

  if(!contentFn){
    body.innerHTML=`<div style="text-align:center;padding:48px 28px;background:var(--card);border:1px solid var(--border);border-radius:18px">
      <div style="font-size:2.5rem;margin-bottom:14px">🚧</div>
      <div style="font-family:'Fraunces',serif;font-size:1.1rem;margin-bottom:8px">Lektion in Vorbereitung</div>
      <div style="font-size:.82rem;color:var(--ink2)">Schick die Unterlagen und sie wird sofort integriert!</div>
    </div>`;
    nav('lektion');
    return;
  }

  body.innerHTML = contentFn();

  // Update TOC dynamically based on lesson content
  const tocInner = document.getElementById('lekt-toc-inner');
  if(tocInner){
    const tocTitle = tocInner.querySelector('div');
    // Clear old TOC items (keep title and progress)
    const oldItems = tocInner.querySelectorAll('.lekt-toc-item');
    oldItems.forEach(i=>i.remove());
    // Build TOC from sections in content
    const TOCS = {
      'Grundlagen Blutzucker & Pankreas': [['lsec-glukose','01','Was ist Glukose?'],['lsec-pankreas','02','Das Pankreas'],['lsec-hormone','03','Insulin & Glukagon'],['lsec-werte','04','BZ-Werte'],['lsec-hypo','05','Hypo & Hyper'],['lsec-bus','06','Glukosurie & Bus'],['lsec-summary','✓','Zusammenfassung']],
      'Haut und ihre Aufgaben': [['lsec-haut-intro','01','Cutis & Oberfläche'],['lsec-haut-schutz','02','Säureschutzmantel'],['lsec-haut-typen','03','Leisten- & Felderhaut']],
      'Aufbau der Haut (Schichten)': [['lsec-haut-schichten','01','Die 3 Schichten'],['lsec-epidermis','02','Epidermis-Schichten'],['lsec-dermis','03','Dermis & Rezeptoren'],['lsec-subcutis','04','Subcutis & Fett']],
      'Epithelgewebe – Exkurs': [['lsec-epithel-def','01','Was ist Epithel?'],['lsec-epithel-typen','02','Die 6 Epitheltypen']],
      'Die Epidermis & ihre Schichten': [['lsec-epi-eigenschaften','01','Eigenschaften'],['lsec-epi-schichten','02','5 Schichten A→E'],['lsec-epi-diffusion','03','Diffusion'],['lsec-epi-melanom','04','Melanozyten & Melanom']],
      'Aufbau der Dermis (Lederhaut)': [['lsec-dermis-schichten','01','2 Schichten'],['lsec-dermis-rezeptoren','02','Mechanorezeptoren'],['lsec-dermis-zahlen','03','Zahlen pro cm²']],
      'Hautanhangsorgane & Drüsen': [['lsec-anhang-intro','01','Übersicht'],['lsec-haare','02','Haare (Pilli)'],['lsec-naegel','03','Nägel (Ungues)'],['lsec-druesen','04','Talg- & Schweißdrüsen']],
      'Fitzpatrick-Hauttypen': [['lsec-fitzpatrick','01','6 Fitzpatrick-Typen'],['lsec-veraenderungen','02','Talgproduktion-Typen'],['lsec-altershaut','03','Alters- & Kinderhaut']],
      'Veränderungen der Haut': [['lsec-vera-lebensalter','01','Haut im Lebenslauf'],['lsec-vera-kinderhaut','02','Kinderhaut'],['lsec-vera-altershaut','03','Altershaut']],
      // Dekubitus
      'Definition & Expertenstandard': [['lsec-dek-def','01','Definition & DNQP'],['lsec-dek-ebenen','02','6 Handlungsebenen'],['lsec-dek-einsch','03','Einschätzung'],['lsec-dek-braden','04','Braden-Skala']],
      'Risikofaktoren & Entstehung': [['lsec-dek-risiko','01','Risikofaktoren'],['lsec-dek-entst','02','2 Entstehungstheorien'],['lsec-dek-gruppe','03','Risikogruppen']],
      'EPUAP Klassifikation Kat. I–IV': [['lsec-dek-epuap','01','Kat. I–IV'],['lsec-dek-iad','02','IAD vs. Dekubitus']],
      'Prädilektionsstellen & Einschätzung': [['lsec-dek-pred','01','Prädilektionsstellen'],['lsec-dek-tief','02','Tiefe Dekubitus']],
      'Prophylaxe und Donts': [['lsec-dek-dos','01','Do\'s'],['lsec-dek-donts','02','Don\'ts'],['lsec-dek-matrat','03','Hilfsmittel'],['lsec-dek-lager','04','Lagerungsarten']],
      // Niere
      'Anatomie & Funktionen der Niere': [['lsec-niere-anat','01','Lage & Aufbau'],['lsec-niere-funk','02','7 Funktionen']],
      'Nephrone & Urinbildung': [['lsec-niere-neph','01','Nephron-Struktur'],['lsec-niere-urin','02','3 Schritte Urinbildung']],
      'Ableitende Harnwege & Miktionsreflex': [['lsec-niere-harnw','01','Ableitende Harnwege'],['lsec-niere-mikt','02','Miktionsreflex']],
      'Harninkontinenz — Definition & Formen': [['lsec-niere-indef','01','Definition'],['lsec-niere-epi','02','Häufigkeit & Formen']],
      'Inkontinenzformen im Detail': [['lsec-niere-belas','01','Belastungsinkontinenz'],['lsec-niere-drang','02','Drang & weitere']],
      'Expertenstandard & Pflege bei Inkontinenz': [['lsec-niere-exp','01','6 Schritte'],['lsec-niere-assess','02','Assessment'],['lsec-niere-mass','03','Pflegemaßnahmen']],
    };
    const items = TOCS[lessonName] || [];
    const progressWrap = tocInner.querySelector('.lekt-progress-wrap');
    items.forEach(([id,num,label])=>{
      const a = document.createElement('a');
      a.className = 'lekt-toc-item';
      a.innerHTML = `<span class="lekt-toc-num">${num}</span>${label}`;
      a.onclick = () => lTocScroll(id, a);
      tocInner.insertBefore(a, progressWrap);
    });
    if(items.length > 0){
      tocInner.querySelectorAll('.lekt-toc-item')[0]?.classList.add('active');
    } else {
      // Pas de TOC pour cette leçon — masquer complètement
      tocInner.style.display = 'none';
    }
    // Update progress bar color for haut (green)
    const fill = document.getElementById('lekt-fill');
    if(fill) fill.style.background = themeId === 'haut' ? 'linear-gradient(90deg,#16a34a,#4ade80)' : 'linear-gradient(90deg,#dc2626,#f87171)';
  }

  nav('lektion');

  // Reset scroll
  const lektEl = document.getElementById('lekt-scroll');
  if(lektEl) lektEl.scrollTop = 0;

  // Init lesson animations (after DOM render)
  setTimeout(()=>{
    // Hero background cells — rouge pour blutzuck, vert pour haut
    const heroBg = document.getElementById('lekt-hero-bg');
    if(heroBg){
      const isHaut = themeId === 'haut';
      for(let i=0;i<10;i++){
        const c=document.createElement('div');
        const sz=30+Math.random()*70;
        const col = isHaut ? `rgba(${20+Math.random()*60},${180+Math.random()*60},${60+Math.random()*60},.25)` : `rgba(255,${Math.random()*80},${Math.random()*80},.25)`;
        c.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;border-radius:50%;background:radial-gradient(circle at 35% 35%,${col},transparent);border:1px solid ${isHaut?'rgba(74,222,128,.15)':'rgba(255,80,80,.12)'};animation:floatCell ${5+Math.random()*7}s linear ${Math.random()*-8}s infinite`;
        heroBg.appendChild(c);
      }
    }
    // Haut hero bg (second hero)
    const hautHeroBg = document.getElementById('haut-hero-bg');
    if(hautHeroBg){
      for(let i=0;i<10;i++){
        const c=document.createElement('div');
        const sz=25+Math.random()*60;
        c.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(74,222,128,.2),transparent);border:1px solid rgba(74,222,128,.1);animation:floatCell ${5+Math.random()*7}s linear ${Math.random()*-8}s infinite`;
        hautHeroBg.appendChild(c);
      }
    }
    // SVG pankreas
    ['kopf','koerper','schwanz'].forEach(p=>{
      const el=document.getElementById('svg-'+p);
      if(el) el.addEventListener('click',()=>svgSelect(p));
    });
    // SVG Haut Schichten
    ['epidermis','dermis','subcutis'].forEach(p=>{
      const el=document.getElementById('svg-'+p);
      if(el) el.addEventListener('click',()=>hautSchichtSelect(p));
    });
    // Bus
    const busEl = document.getElementById('lbz-val');
    if(busEl) lBusUpdate(90);
    // Reveal — simple fade in all sections
    document.querySelectorAll('.lekt-sec').forEach((el,i)=>{
      el.style.opacity='0';
      el.style.transform='translateY(16px)';
      el.style.transition='opacity .5s ease,transform .5s ease';
      setTimeout(()=>{ el.style.opacity='1'; el.style.transform='translateY(0)'; }, i*80);
    });
  },50);

  // Scroll to anchor
  if(anchorId){
    setTimeout(()=>{
      const el = document.getElementById(anchorId);
      const container = document.getElementById('screen-lektion');
      if(el && container){
        const bodyEl2 = document.getElementById('lektion-body');
        const totalOff = (bodyEl2 ? bodyEl2.offsetTop : 0) + el.offsetTop - 8;
        container.scrollTo({top: Math.max(0, totalOff), behavior:'smooth'});
      }
    }, 250);
  }
}

// TOC scroll
// Helper: get element offset from a specific ancestor container
function getOffsetFromContainer(el, container){
  let top = 0;
  let node = el;
  while(node && node !== container){
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return top;
}

function lTocScroll(id, el){
  event.preventDefault();
  document.querySelectorAll('.lekt-toc-item').forEach(i => i.classList.remove('active'));
  if(el) el.classList.add('active');

  const target = document.getElementById(id);
  // lekt-scroll is the direct scrollable container of lektion-body
  const scroller = document.getElementById('lekt-scroll');
  if(!target || !scroller) return;
  // target.offsetTop is relative to lektion-body which is direct child of lekt-scroll
  // So we just need target.offsetTop + lektion-body.offsetTop
  const body = document.getElementById('lektion-body');
  const top = (body ? body.offsetTop : 0) + target.offsetTop - 8;
  scroller.scrollTo({top: Math.max(0, top), behavior: 'smooth'});
}

// SVG pankreas interaction
function svgSelect(part){
  ['kopf','koerper','schwanz'].forEach(p=>{
    const s=document.getElementById('svg-'+p);
    const l=document.getElementById('lbl-'+p);
    if(s){s.style.opacity='1';s.style.filter='none';}
    if(l) l.classList.remove('active');
  });
  const sel=document.getElementById('svg-'+part);
  if(sel){sel.style.filter='brightness(1.7)';sel.style.transform='scale(1.05)';}
  const lbl=document.getElementById('lbl-'+part);
  if(lbl) lbl.classList.add('active');
  ['kopf','koerper','schwanz'].filter(p=>p!==part).forEach(p=>{
    const el=document.getElementById('svg-'+p);
    if(el){el.style.opacity='.3';el.style.filter='none';}
  });
}

// Bus animation
function lBusUpdate(val){
  val=parseInt(val);
  document.getElementById('lbz-val').textContent=val+' mg/dl';
  const seats=document.getElementById('lbus-seats');
  const road=document.getElementById('lbus-road');
  const info=document.getElementById('lbus-info');
  const bus=document.getElementById('lbus');
  if(!seats) return;
  const CAP=180,TOTAL=20;
  seats.innerHTML='';
  if(val<=CAP){
    const filled=Math.round((val/CAP)*TOTAL);
    for(let i=0;i<TOTAL;i++){
      const s=document.createElement('div');
      s.style.cssText=`width:16px;height:16px;border-radius:4px;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.55rem;transition:all .3s;${i<filled?'background:var(--teal-dim);border-color:var(--teal)':''}`;
      s.textContent=i<filled?'🩸':'';
      seats.appendChild(s);
    }
    road.style.background=`linear-gradient(90deg,var(--teal) ${Math.round((val/420)*70)}%,var(--bg3) 0)`;
    bus.style.transform='scale(1)';
    info.innerHTML=val<70?`⚠️ <strong style="color:var(--rose)">Hypoglykämie!</strong> Sofort MESSEN → Traubenzucker!`:`✅ BZ = ${val} mg/dl — Niere kann alles rückresorieren. <span style="color:var(--green)">Kein Zucker im Urin.</span>`;
  } else {
    const over=Math.round(((val-CAP)/(420-CAP))*TOTAL);
    for(let i=0;i<TOTAL;i++){
      const s=document.createElement('div');
      const isOver=i>=TOTAL-over;
      s.style.cssText=`width:16px;height:16px;border-radius:4px;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.55rem;transition:all .3s;${isOver?'background:var(--rose-dim);border-color:var(--rose);animation:shake .4s ease':'background:var(--teal-dim);border-color:var(--teal)'}`;
      s.textContent=isOver?'⚠️':'🩸';
      seats.appendChild(s);
    }
    road.style.background=`linear-gradient(90deg,var(--rose) ${Math.round((val/420)*90)}%,var(--bg3) 0)`;
    bus.style.transform='scale(1.1) rotate(-4deg)';
    info.innerHTML=`🚨 BZ = <strong style="color:var(--rose)">${val} mg/dl</strong> — Bus voll! Zucker im Urin (Glukosurie) → Wasser geht mit → <strong>Exsikkose</strong> → <strong>Polydipsie</strong>!`;
  }
}


let progress = JSON.parse(localStorage.getItem('pflegepro_progress') || JSON.stringify({
  quizDone:0, scores:[], streak:0, lastDate:'', mastered:[], totalCorrect:0, totalAnswered:0,
  levels:{}
}));
if(!progress.levels) progress.levels = {};

let quiz = {questions:[],idx:0,score:0,answered:false,wrongLessons:[],timedMode:false,themeId:'',startTime:null,timer:null,currentLevel:undefined};
let examMode = 'klausur';
let selectedExamThemes = new Set();
let currentThemeId = '';
let chronoEnabled = false;

const LEVEL_SIZE = 7;
const PASS_THRESHOLD = 0.70;

function saveProgress(){localStorage.setItem('pflegepro_progress',JSON.stringify(progress));}

function getLevelData(themeId){
  if(!progress.levels[themeId]) progress.levels[themeId]={currentLevel:0,levelScores:[],inProgress:null};
  return progress.levels[themeId];
}
function getQuestionsForLevel(themeId,level){
  const all=QUIZZES[themeId]||[];
  return all.slice(level*LEVEL_SIZE,Math.min((level+1)*LEVEL_SIZE,all.length));
}
function getTotalLevels(themeId){return Math.min(3,Math.ceil((QUIZZES[themeId]||[]).length/LEVEL_SIZE));}
function isLevelUnlocked(themeId,level){
  if(level===0)return true;
  const ld=getLevelData(themeId);
  return ld.levelScores.length>=level&&ld.levelScores[level-1]>=PASS_THRESHOLD;
}
function getLevelLabel(l){return['🟢','🟡','🔴','⭐'][l]||'⭐';}
function getLevelName(l){return['Niveau 1 – Basis','Niveau 2 – Fortgeschritten','Niveau 3 – Experte'][l]||'Niveau '+(l+1);}

function updateStreak(){
  const today=new Date().toDateString();
  if(progress.lastDate===today)return;
  const yesterday=new Date(Date.now()-86400000).toDateString();
  if(progress.lastDate===yesterday)progress.streak++;
  else if(progress.lastDate!==today)progress.streak=1;
  progress.lastDate=today;
  saveProgress();
}
function updateStats(){
  updateStreak();
  const quizDone = progress.quizDone;
  const avg = progress.scores.length ? Math.round(progress.scores.reduce((a,b)=>a+b,0)/progress.scores.length) : 0;
  const streak = progress.streak;
  const mastered = progress.mastered.length;

  document.getElementById('stat-quiz').textContent = quizDone;
  document.getElementById('stat-avg').textContent = progress.scores.length ? avg+'%' : '–';
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-mastered').textContent = mastered;
  document.getElementById('streak-display').textContent = streak;

  // Mini-barres animées
  setTimeout(()=>{
    const qBar = document.getElementById('bar-quiz');
    const sBar = document.getElementById('bar-score');
    const stBar = document.getElementById('bar-streak');
    const mBar = document.getElementById('bar-master');
    if(qBar) qBar.style.width = Math.min(quizDone*5, 100)+'%';
    if(sBar) sBar.style.width = (progress.scores.length ? avg : 0)+'%';
    if(stBar) stBar.style.width = Math.min(streak*10, 100)+'%';
    if(mBar) mBar.style.width = Math.round((mastered/THEMES.length)*100)+'%';
  }, 200);

  // Progress global
  const started = THEMES.filter(t=>{
    const lv = progress.levels[t.id];
    return lv && (lv.n1>0||lv.n2>0||lv.n3>0||lv.inProgress);
  }).length;
  const pct = Math.round((mastered/THEMES.length)*100);
  const fill = document.getElementById('prog-fill');
  const pctEl = document.getElementById('prog-pct');
  const detailEl = document.getElementById('prog-detail');
  const totalEl = document.getElementById('prog-total');
  const mastLbl = document.getElementById('prog-mastered-lbl');
  if(fill) setTimeout(()=>{ fill.style.width=pct+'%'; },300);
  if(pctEl) pctEl.textContent = pct+'%';
  if(detailEl) detailEl.textContent = started+' von ';
  if(totalEl) totalEl.textContent = THEMES.length+' Themen begonnen';
  if(mastLbl) mastLbl.textContent = mastered ? mastered+' gemeistert 🏆' : '';
}

function nav(screen){
  // Hide all regular screens
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.s-btn').forEach(b=>b.classList.remove('active'));

  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.main');
  const lektScreen = document.getElementById('screen-lektion');
  const toc = document.getElementById('lekt-toc-inner');
  // Show/hide the detail floating back button
  if(screen === 'lektion'){
    sidebar.classList.add('sidebar-hidden');
    main.classList.add('main-full');
    if(lektScreen) lektScreen.style.display = 'block';
    // Show TOC on tablet/desktop, adjust lektion-body padding
    const body = document.getElementById('lektion-body');
    const scroller = document.getElementById('lekt-scroll');
    if(window.innerWidth >= 700){
      // N'afficher le TOC que s'il contient des items (pas sur level select)
      const hasTocItems = toc && toc.querySelectorAll('.lekt-toc-item').length > 0;
      if(toc) toc.style.display = hasTocItems ? 'block' : 'none';
      if(scroller) scroller.style.right = hasTocItems ? '272px' : '0';
      if(body) body.style.paddingRight = '20px';
    } else {
      if(toc) toc.style.display = 'none';
      if(scroller) scroller.style.right = '0';
      if(body) body.style.paddingRight = '20px';
    }
    // Re-apply on resize
    const onResize = () => {
      const s = document.getElementById('lekt-scroll');
      const t = document.getElementById('lekt-toc-inner');
      const hasItems = t && t.querySelectorAll('.lekt-toc-item').length > 0;
      if(window.innerWidth >= 700){ if(s) s.style.right=hasItems?'272px':'0'; if(t) t.style.display=hasItems?'block':'none'; }
      else { if(s) s.style.right='0'; if(t) t.style.display='none'; }
    };
    window.removeEventListener('resize', window._lektResize||null);
    window._lektResize = onResize;
    window.addEventListener('resize', onResize);
  } else {
    const el = document.getElementById('screen-'+screen);
    if(el) el.classList.add('active');
    sidebar.classList.remove('sidebar-hidden');
    main.classList.remove('main-full');
    if(lektScreen) lektScreen.style.display = 'none';
    if(toc) toc.style.display = 'none';
    // Restaurer la topbar normale
    const td = document.getElementById('topbar-default');
    const tl = document.getElementById('topbar-lektion');
    if(td) td.style.display = 'flex';
    if(tl) tl.style.display = 'none';
  }

  const map={home:0,pruefung:1,fachbegriffe:2,praxis:3,heute:4,detail:0,lektion:0};
  if(map[screen]!==undefined && screen!=='lektion') document.querySelectorAll('.s-btn')[map[screen]]?.classList.add('active');
  if(screen==='home'){ updateStats(); updateGreeting(); }
  if(screen==='heute') buildHeute();
}

function colorVar(col){return 'var(--'+col+')';}
function colorDim(col){return 'var(--'+col+'-dim)';}

function renderThemeGrid(containerId,clickFn){
  const c=document.getElementById(containerId);
  c.innerHTML='';
  THEMES.forEach(t=>{
    const hasQuiz=!!QUIZZES[t.id];
    const isMastered=progress.mastered.includes(t.id);
    const ld=hasQuiz?getLevelData(t.id):null;
    const totalLvls=hasQuiz?getTotalLevels(t.id):0;
    const currentLvl=ld?ld.currentLevel:0;
    const hasInProgress=ld&&ld.inProgress!==null;
    let levelHtml='';
    if(hasQuiz){
      const dots=Array.from({length:totalLvls},(_,i)=>{
        const done=ld.levelScores[i]!==undefined;
        const passed=done&&ld.levelScores[i]>=PASS_THRESHOLD;
        return '<div class="lvl-dot '+(passed?'passed':done?'tried':i<=currentLvl?'active':'')+'" ></div>';
      }).join('');
      const badge=hasInProgress?'<span class="resume-badge">▶ Fortsetzen</span>':'';
      levelHtml='<div class="lvl-progress">'+dots+badge+'</div>';
    }
    const card=document.createElement('div');
    card.className='theme-card';
    card.innerHTML='<div class="t-icon" style="background:var(--'+t.col+'-dim)">'+t.icon+'</div><div class="t-info"><div class="t-name">'+t.name+'</div><div class="t-sub">'+t.lessons.length+' Lerneinheit'+(t.lessons.length>1?'en':'')+'</div>'+levelHtml+'</div>'+(isMastered?'<span class="mastered-tag">✓</span>':hasQuiz?'<span class="lvl-tag">'+getLevelLabel(Math.min(currentLvl,totalLvls-1))+'</span>':'<span class="soon-tag">Bald</span>')+'<div class="t-arrow">›</div>';
    card.onclick=()=>clickFn(t);
    c.appendChild(card);
  });
}

function openDetail(t){
  currentThemeId=t.id;
  currentThemeObj=t;
  document.getElementById('detail-header').innerHTML=
    '<div class="d-icon" style="background:var(--'+t.col+'-dim)">'+t.icon+'</div>'
    +'<div style="flex:1"><div class="d-title">'+t.name+'</div><div class="d-sub">'+t.lessons.length+' Lerneinheiten</div></div>'
    +'<button onclick="nav(\'home\')" style="display:flex;align-items:center;gap:6px;background:transparent;border:none;color:var(--ink3);font-size:.8rem;font-weight:600;font-family:\'DM Sans\',sans-serif;cursor:pointer;padding:6px 8px;border-radius:8px;transition:color .2s;white-space:nowrap" onmouseover="this.style.color=\'var(--ink)\'" onmouseout="this.style.color=\'var(--ink3)\'">← Zurück</button>';
  const ll=document.getElementById('lesson-list');
  ll.innerHTML='';
  t.lessons.forEach((l,i)=>{
    const hasContent=!!(LESSON_CONTENT[t.id]&&LESSON_CONTENT[t.id][l]);
    const row=document.createElement('div');
    row.className='lesson-row';
    row.innerHTML='<div class="lesson-num">'+String(i+1).padStart(2,'0')+'</div><div class="lesson-name">'+l+'</div><span class="l-tag '+(hasContent?'l-ready':'l-soon')+'">'+(hasContent?'Öffnen →':'Bald')+'</span>';
    row.onclick=()=>openLesson(t.id,l,t);
    row.style.cursor='pointer';
    ll.appendChild(row);
  });
  nav('detail');
}

function openDetailById(id){const t=THEMES.find(th=>th.id===id);if(t)openDetail(t);}

// Lance le quiz depuis l'écran Prüfung (pas depuis une leçon)
function startQuizFromPruefung(t){
  quizFromLesson = false;
  showLevelSelect(t);
}

// QUIZ ENGINE
let quizFromLesson = false; // mémorise si le quiz a été lancé depuis une leçon

function startQuizForTheme(t){
  if(!QUIZZES[t.id]){alert('Quiz für "'+t.name+'" kommt bald! 🚀');return;}
  quizFromLesson = true; // lancé depuis une leçon
  showLevelSelect(t);
}

function showLevelSelect(t){
  const ld=getLevelData(t.id);
  const totalLevels=getTotalLevels(t.id);
  const body=document.getElementById('lektion-body');
  const header=document.getElementById('lektion-header');
  header.innerHTML='';

  // Swapper la topbar vers mode leçon (pour le level select aussi)
  document.getElementById('topbar-default').style.display = 'none';
  const topLekt = document.getElementById('topbar-lektion');
  if(topLekt) topLekt.style.display = 'flex';
  const topBackBtn = document.getElementById('topbar-back-btn');
  if(topBackBtn) topBackBtn.onclick = quizFromLesson ? ()=>openDetailById(t.id) : ()=>nav('pruefung');
  const topTitle = document.getElementById('topbar-lesson-title');
  if(topTitle) topTitle.textContent = t.name;
  const s2 = document.getElementById('streak-display2');
  const s1 = document.getElementById('streak-display');
  if(s2 && s1) s2.textContent = s1.textContent;

  // Vider et cacher le TOC — ne doit pas apparaître sur le level select
  const toc=document.getElementById('lekt-toc-inner');
  if(toc){
    toc.querySelectorAll('.lekt-toc-item').forEach(i=>i.remove());
    toc.style.display='none';
  }
  // Remettre le scroller à 0
  const scroller=document.getElementById('lekt-scroll');
  if(scroller){ scroller.style.right='0'; scroller.style.top='0'; }

  // Destination Zurück — gérée dans la topbar ci-dessus

  let html='<div style="max-width:500px;margin:0 auto;padding:8px 0">'
    +'<div style="font-family:Fraunces,serif;font-size:1.2rem;color:var(--ink);margin-bottom:6px">🎯 Niveau wählen</div>'
    +'<div style="font-size:.82rem;color:var(--ink2);margin-bottom:24px">Schließe Niveau 1 mit 70%+ ab, um Niveau 2 freizuschalten.</div>';
  for(let lvl=0;lvl<totalLevels;lvl++){
    const unlocked=isLevelUnlocked(t.id,lvl);
    const score=ld.levelScores[lvl];
    const hasPrev=ld.inProgress&&ld.inProgress.level===lvl;
    const questions=getQuestionsForLevel(t.id,lvl);
    const pct=score!==undefined?Math.round(score*100):null;
    const passed=score!==undefined&&score>=PASS_THRESHOLD;
    const ringColor=passed?'var(--green)':'var(--teal)';
    const ringClass=passed?'passed':'';
    html+='<div class="level-card'+(unlocked?'':' locked')+'"'+(unlocked?' onclick="startLevel(\''+t.id+'\','+lvl+')"':'')+'>'+
      '<div class="level-card-left">'+
      '<div class="level-badge" style="background:'+(unlocked?(passed?'var(--green-dim)':'var(--teal-dim)'):'var(--bg3)')+';color:'+(unlocked?(passed?'var(--green)':'var(--teal)'):'var(--ink3)')+'">'+
      (unlocked?getLevelLabel(lvl):'🔒')+'</div>'+
      '<div><div class="level-name">'+getLevelName(lvl)+'</div>'+
      '<div class="level-sub">'+questions.length+' Fragen'+(hasPrev?' · <strong style="color:var(--amber)">Fortgesetzt</strong>':'')+'</div></div>'+
      '</div><div class="level-right">'+(pct!==null?'<div class="level-score-ring '+ringClass+'">'+pct+'%</div>':(unlocked?'<span style="color:var(--ink3);font-size:1.1rem">›</span>':''))+'</div></div>';
  }
  html+='</div>';

  body.innerHTML=html;
  currentThemeObj=t;
  nav('lektion');
}

function startLevel(themeId,level){
  const t=THEMES.find(th=>th.id===themeId);
  const ld=getLevelData(themeId);
  const questions=getQuestionsForLevel(themeId,level);
  let startIdx=0,prevScore=0,prevWrong=[];
  if(ld.inProgress&&ld.inProgress.level===level){
    startIdx=ld.inProgress.qIdx||0;
    prevScore=ld.inProgress.score||0;
    prevWrong=ld.inProgress.wrongLessons||[];
  }
  quiz.themeId=themeId;quiz.currentLevel=level;
  quiz.questions=questions;quiz.idx=startIdx;quiz.score=prevScore;
  quiz.answered=false;quiz.wrongLessons=prevWrong;quiz.timedMode=chronoEnabled;
  ld.inProgress={level,qIdx:startIdx,score:prevScore,wrongLessons:prevWrong};
  saveProgress();
  if(quiz.timer){clearInterval(quiz.timer);quiz.timer=null;}
  const timerBox=document.getElementById('timer-box');
  if(chronoEnabled){quiz.startTime=Date.now();timerBox.style.display='flex';quiz.timer=setInterval(updateTimer,1000);updateTimer();}
  else{timerBox.style.display='none';}
  document.getElementById('quiz-back-btn').onclick=()=>{
    if(quiz.timer){clearInterval(quiz.timer);quiz.timer=null;}
    const ld2=getLevelData(quiz.themeId);
    if(ld2.inProgress)ld2.inProgress.qIdx=quiz.idx;
    saveProgress();showLevelSelect(t);
  };
  nav('quiz');renderQ();
}

function startExamQuiz(questions,timed){
  quiz.questions=shuffle(questions);quiz.idx=0;quiz.score=0;quiz.answered=false;quiz.wrongLessons=[];
  quiz.timedMode=timed;quiz.currentLevel=undefined;
  quizFromLesson = false; // lancé depuis l'écran pruefung
  if(quiz.timer){clearInterval(quiz.timer);quiz.timer=null;}
  const timerBox=document.getElementById('timer-box');
  if(timed){quiz.startTime=Date.now();timerBox.style.display='flex';quiz.timer=setInterval(updateTimer,1000);updateTimer();}
  else{timerBox.style.display='none';}
  document.getElementById('quiz-back-btn').onclick=()=>{if(quiz.timer){clearInterval(quiz.timer);quiz.timer=null;}nav('pruefung');};
  document.getElementById('r-back-btn').onclick=()=>nav('pruefung');
  nav('quiz');renderQ();
}

function updateTimer(){
  if(!quiz.startTime)return;
  const elapsed=Math.floor((Date.now()-quiz.startTime)/1000);
  const m=Math.floor(elapsed/60),s=elapsed%60;
  const el=document.getElementById('timer-display');
  if(el)el.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}

function renderQ(){
  const q=quiz.questions[quiz.idx];
  const total=quiz.questions.length;
  document.getElementById('q-theme-label').textContent=(THEMES.find(t=>t.id===q.theme)||{}).name||'';
  document.getElementById('q-text').textContent=q.q;
  document.getElementById('q-counter').textContent=(quiz.idx+1)+'/'+total;
  document.getElementById('q-prog').style.width=((quiz.idx/total)*100)+'%';
  const opts=document.getElementById('q-opts');opts.innerHTML='';
  const letters=['A','B','C','D'];
  q.opts.forEach((o,i)=>{
    const btn=document.createElement('button');
    btn.className='opt';
    btn.innerHTML='<span class="opt-l">'+letters[i]+'</span>'+o;
    btn.onclick=()=>selectAnswer(i);
    opts.appendChild(btn);
  });
  document.getElementById('fb-box').className='fb-box';
  document.getElementById('review-link').className='review-link';
  document.getElementById('next-btn').className='next-btn';
  quiz.answered=false;
}

function selectAnswer(idx){
  if(quiz.answered)return;
  quiz.answered=true;
  const q=quiz.questions[quiz.idx];
  document.querySelectorAll('.opt').forEach(b=>b.disabled=true);
  const fb=document.getElementById('fb-box');
  if(idx===q.correct){
    quiz.score++;
    document.querySelectorAll('.opt')[idx].classList.add('correct');
    fb.className='fb-box correct show';
    document.getElementById('fb-head').innerHTML='✓ Richtig!';
  } else {
    document.querySelectorAll('.opt')[idx].classList.add('wrong');
    document.querySelectorAll('.opt')[q.correct].classList.add('correct');
    fb.className='fb-box wrong show';
    document.getElementById('fb-head').innerHTML='✗ Falsch';
    if(!quiz.wrongLessons.find(w=>w.lesson===q.lesson))quiz.wrongLessons.push({lesson:q.lesson,theme:q.theme});
    document.getElementById('review-link').className='review-link show';
  }
  document.getElementById('fb-body').textContent=q.explanation;
  const isLast=quiz.idx===quiz.questions.length-1;
  const nb=document.getElementById('next-btn');
  nb.className='next-btn show';
  nb.textContent=isLast?'Ergebnis anzeigen 🏁':'Weiter →';
}

function nextQ(){
  quiz.idx++;
  if(quiz.themeId&&quiz.currentLevel!==undefined){
    const ld=getLevelData(quiz.themeId);
    if(ld.inProgress){ld.inProgress.qIdx=quiz.idx;ld.inProgress.score=quiz.score;ld.inProgress.wrongLessons=quiz.wrongLessons;saveProgress();}
  }
  if(quiz.idx>=quiz.questions.length)showResults();
  else renderQ();
}

function showResults(){
  if(quiz.timer)clearInterval(quiz.timer);
  const total=quiz.questions.length;
  const pct=Math.round((quiz.score/total)*100);
  document.getElementById('r-pct').textContent=pct+'%';
  document.getElementById('r-correct').textContent=quiz.score;
  document.getElementById('r-wrong').textContent=total-quiz.score;
  document.getElementById('r-total').textContent=total;
  document.getElementById('q-prog').style.width='100%';

  const t=THEMES.find(th=>th.id===quiz.themeId);
  let totalLvls=0;
  if(quiz.themeId&&quiz.currentLevel!==undefined){
    const ld=getLevelData(quiz.themeId);
    const ratio=quiz.score/total;
    ld.levelScores[quiz.currentLevel]=ratio;
    ld.inProgress=null;
    totalLvls=getTotalLevels(quiz.themeId);
    const allPassed=ld.levelScores.length>=totalLvls&&ld.levelScores.every(s=>s>=PASS_THRESHOLD);
    if(allPassed&&!progress.mastered.includes(quiz.themeId))progress.mastered.push(quiz.themeId);
  }
  const passed=pct>=70;
  let title,desc;
  if(pct===100){title='🏆 Perfekt!';desc='Alle Antworten korrekt!';}
  else if(pct>=80){title='🎉 Sehr gut!';desc='Du beherrschst das Thema gut!';}
  else if(pct>=70){title='👍 Bestanden!';desc='Niveau abgeschlossen! Nächstes Niveau freigeschaltet 🔓';}
  else{title='📖 Noch üben';desc='70% nötig um das nächste Niveau freizuschalten.';}
  document.getElementById('r-title').textContent=title;
  document.getElementById('r-desc').textContent=desc;
  const lvlBadge=document.getElementById('r-level-badge');
  if(lvlBadge&&quiz.currentLevel!==undefined){
    lvlBadge.style.display='flex';
    lvlBadge.innerHTML=getLevelLabel(quiz.currentLevel)+' '+getLevelName(quiz.currentLevel)+' — <strong style="color:'+(passed?'var(--green)':'var(--rose)')+'">'+(passed?'✅ Bestanden':'❌ Nicht bestanden')+'</strong>';
  } else if(lvlBadge){lvlBadge.style.display='none';}
  progress.quizDone++;progress.scores.push(pct);
  if(progress.scores.length>50)progress.scores.shift();
  saveProgress();updateStats();

  // ── Bouton contextuel selon résultat ──
  const actionDiv=document.getElementById('r-action-btn');
  if(actionDiv&&quiz.themeId&&quiz.currentLevel!==undefined){
    actionDiv.style.display='block';
    const nextLvl=quiz.currentLevel+1;
    const hasNext=nextLvl<totalLvls;
    if(passed&&hasNext){
      // Réussi → proposer niveau suivant
      actionDiv.innerHTML='<button onclick="startLevel(\''+quiz.themeId+'\','+nextLvl+')" style="width:100%;padding:14px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--teal),var(--teal-dark));color:var(--bg);font-family:\'DM Sans\',sans-serif;font-size:.9rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all .2s" onmouseover="this.style.opacity=\'.88\'" onmouseout="this.style.opacity=\'1\'">'
        +'🚀 '+getLevelName(nextLvl)+' starten →</button>';
    } else if(passed&&!hasNext){
      // Réussi + dernier niveau → thème maîtrisé
      actionDiv.innerHTML='<div style="text-align:center;padding:14px;border-radius:12px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);color:var(--green);font-weight:700;font-size:.88rem">🏆 Thema gemeistert! Alle Niveaus abgeschlossen.</div>';
    } else {
      // Échoué → proposer les leçons concernées
      const lessonSet=[...new Set(quiz.wrongLessons.map(w=>w.lesson))];
      if(lessonSet.length>0){
        let btns=lessonSet.slice(0,3).map(lesson=>{
          const themeId=quiz.wrongLessons.find(w=>w.lesson===lesson)?.theme||quiz.themeId;
          return '<button onclick="openLesson(\''+themeId+'\',\''+lesson.replace(/'/g,"\\'")+'\',(THEMES.find(th=>th.id===\''+themeId+'\')))" '
            +'style="width:100%;padding:11px 14px;border-radius:10px;border:1.5px solid rgba(248,113,113,.3);background:rgba(248,113,113,.08);color:var(--rose);font-family:\'DM Sans\',sans-serif;font-size:.8rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:10px;text-align:left;margin-bottom:7px;transition:all .2s" '
            +'onmouseover="this.style.borderColor=\'var(--rose)\';this.style.background=\'rgba(248,113,113,.15)\'" '
            +'onmouseout="this.style.borderColor=\'rgba(248,113,113,.3)\';this.style.background=\'rgba(248,113,113,.08)\'">'
            +'<span style="font-size:1rem">📖</span><span>'+lesson+'</span></button>';
        }).join('');
        actionDiv.innerHTML='<div style="font-size:.78rem;font-weight:700;color:var(--rose);margin-bottom:8px;display:flex;align-items:center;gap:6px">💡 Diese Lektionen wiederholen:</div>'+btns;
      } else {
        actionDiv.style.display='none';
      }
    }
  } else if(actionDiv){ actionDiv.style.display='none'; }

  // Bloc révision (leçons à revoir) — affiché seulement si échec
  const rb=document.getElementById('revision-box');
  rb.style.display='none'; // remplacé par r-action-btn ci-dessus

  document.getElementById('r-back-btn').onclick=()=>t?showLevelSelect(t):nav('pruefung');
  nav('results');
}

function goReview(){const q=quiz.questions[quiz.idx];openDetailById(q.theme);}
function restartQuiz(){quiz.idx=0;quiz.score=0;quiz.answered=false;quiz.wrongLessons=[];if(quiz.timedMode){quiz.startTime=Date.now();quiz.timer=setInterval(updateTimer,1000);}nav('quiz');renderQ();}

function selectMode(m){examMode=m;}

function startExam(mode){
  examMode=mode||examMode;
  let questions=[];
  if(examMode==='abschluss'){Object.values(QUIZZES).forEach(qs=>questions.push(...qs));}
  else{selectedExamThemes.forEach(id=>{if(QUIZZES[id])questions.push(...QUIZZES[id]);});}
  if(questions.length===0){alert('Keine Fragen verfügbar.');return;}
  quiz.themeId='';startExamQuiz(questions,chronoEnabled);
}

function toggleChrono(){
  chronoEnabled=!chronoEnabled;
  const btn=document.getElementById('chrono-btn');
  const lbl=document.getElementById('chrono-label');
  btn.classList.toggle('active',chronoEnabled);
  lbl.textContent=chronoEnabled?'⏱ Chrono AN':'⏱ Chrono';
  lbl.style.color=chronoEnabled?'var(--teal)':'';
}

// Couleurs par catégorie
const FACH_COLORS = {
  'Diabetes': {bg:'linear-gradient(135deg,#dc2626,#b91c1c)',cat:'rgba(255,180,180,0.2)',catTxt:'#fca5a5'},
  'Haut':     {bg:'linear-gradient(135deg,#16a34a,#15803d)',cat:'rgba(180,255,200,0.2)',catTxt:'#86efac'},
  'Allgemein':{bg:'linear-gradient(135deg,#7c3aed,#6d28d9)',cat:'rgba(220,180,255,0.2)',catTxt:'#c4b5fd'},
};

function getFachColor(term){
  const diabTerms=['Glukose','Insulin','Glukagon','Pankreas','Hyperglykämie','Hypoglykämie','Diabetes','HbA1c','Glukosurie','Ketose','Ketoazidose','Mikroangiopathie','Makroangiopathie','Neuropathie','Retinopathie','Nephropathie','Langerhans','Basalrate','Bolus','C-Peptid','OGTT','Blutzucker'];
  const hautTerms=['Epidermis','Dermis','Subcutis','Melanin','Melanozyten','Säureschutzmantel','Hautflora','Leistenhaut','Felderhaut','Basalzellschicht','Diffusion','Melanom','Papillenschicht','Geflechtschicht','Glanzzellschicht','Stachelzellschicht','Körnerzellschicht','Hornzellschicht','Haarpapille','Haarfollikel','Arrector','Paronychie','Panaritium','Seborrhoisch','Sebostatisch','Fitzpatrick','Altershaut','Vater-Pacini','Meissner','Merkel','Cutis','Residente','Transiente'];
  if(diabTerms.some(t=>term.includes(t)||t.includes(term.split(' ')[0]))) return 'Diabetes';
  if(hautTerms.some(t=>term.includes(t)||t.includes(term.split(' ')[0]))) return 'Haut';
  return 'Allgemein';
}

let fachFilter = 'Alle';
let fachList = [];

function buildFachbegriffe(){
  fachList = shuffle([...FACHBEGRIFFE]);
  // Build filter buttons
  const filterEl = document.getElementById('fach-filter');
  const cats = ['Alle','Diabetes','Haut','Allgemein'];
  filterEl.innerHTML = cats.map(c=>`
    <button class="fach-filter-btn${c==='Alle'?' active':''}" onclick="setFachFilter('${c}')">${c==='Alle'?'📚 Alle':c==='Diabetes'?'🩸 '+c:c==='Haut'?'🩹 '+c:'💡 '+c}</button>
  `).join('');
  renderFach(fachList);
}

function setFachFilter(cat){
  fachFilter = cat;
  document.querySelectorAll('.fach-filter-btn').forEach(b=>b.classList.toggle('active', b.textContent.includes(cat==='Alle'?'Alle':cat)));
  filterFach();
}

function filterFach(){
  const q = (document.getElementById('fach-search')?.value||'').toLowerCase();
  const filtered = fachList.filter(f=>{
    const matchSearch = !q || f.term.toLowerCase().includes(q) || f.def.toLowerCase().includes(q);
    const cat = getFachColor(f.term);
    const matchCat = fachFilter==='Alle' || cat===fachFilter;
    return matchSearch && matchCat;
  });
  renderFach(filtered);
}

function renderFach(list){
  const grid = document.getElementById('fach-grid');
  const statsEl = document.getElementById('fach-stats');
  if(statsEl) statsEl.textContent = list.length + ' Begriffe';
  grid.innerHTML = '';
  if(!list.length){
    grid.innerHTML='<div class="fach-empty">🔍 Kein Begriff gefunden</div>';
    return;
  }
  list.forEach((f, i) => {
    const cat = getFachColor(f.term);
    const col = FACH_COLORS[cat];
    const card = document.createElement('div');
    card.className = 'fach-card';
    card.style.animationDelay = (i * 40) + 'ms';
    card.innerHTML = `
      <div class="fach-card-inner">
        <div class="fach-front">
          <div>
            <div class="fach-category" style="background:${col.cat};color:${col.catTxt}">${cat}</div>
            <div class="fach-term" style="color:var(--ink);margin-top:8px">${f.term}</div>
          </div>
          <div class="fach-hint-txt">↩️ <span>Tippen zum Umdrehen</span></div>
        </div>
        <div class="fach-back" style="background:${col.bg}">
          <div>
            <div class="fach-term-small">${f.term}</div>
            <div class="fach-def">${f.def}</div>
          </div>
          <div class="fach-hint-txt" style="color:rgba(255,255,255,.5)">↩️ <span style="color:rgba(255,255,255,.5)">Zurückdrehen</span></div>
        </div>
      </div>`;
    card.onclick = () => {
      card.classList.toggle('flipped');
    };
    grid.appendChild(card);
  });
}

function buildPraxis(key){
  const tabs=document.getElementById('einricht-tabs');tabs.innerHTML='';
  Object.entries(PRAXIS_DATA).forEach(([k,v])=>{
    const btn=document.createElement('button');btn.className='e-tab'+(k===key?' active':'');
    btn.textContent=v.label;btn.onclick=()=>buildPraxis(k);tabs.appendChild(btn);
  });
  const d=PRAXIS_DATA[key];
  const c=document.getElementById('praxis-content');
  c.innerHTML=`
  <div class="praxis-section">
    <div class="praxis-sec-title">💬 Wichtige Ausdrücke</div>
    <div class="expr-list praxis-phrases">
      ${d.expressions.map(e=>`
      <div class="expr-item">
        <div class="expr-de">${e.de}</div>
        <div class="expr-fr">${e.fr}</div>
      </div>`).join('')}
    </div>
  </div>
  <div class="praxis-section">
    <div class="praxis-sec-title">🔧 Wichtige Materialien</div>
    <div class="material-grid">
      ${d.material.map(m=>`
      <div class="material-item">
        <div class="mat-icon">${m.icon}</div>
        <div class="mat-name">${m.name}</div>
        <div class="mat-desc">${m.desc}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

function buildHeute(){
  const now = new Date();
  const days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
  const months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  const monthsShort = ['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'];

  // Remplir date dans le header Heute screen
  const dateEl = document.getElementById('heute-screen-date');
  const headerMonth = document.getElementById('heute-header-month');
  const headerDay = document.getElementById('heute-header-day');
  if(dateEl) dateEl.textContent = days[now.getDay()] + ', ' + now.getDate() + '. ' + months[now.getMonth()];
  if(headerMonth) headerMonth.textContent = monthsShort[now.getMonth()];
  if(headerDay) headerDay.textContent = now.getDate();

  // Remplir stats réelles
  const streakEl = document.getElementById('heute-streak2');
  const doneEl = document.getElementById('heute-done');
  const fachEl = document.getElementById('heute-fach-count');
  if(streakEl) streakEl.textContent = progress.streak;
  if(doneEl) doneEl.textContent = progress.quizDone;
  if(fachEl) fachEl.textContent = FACHBEGRIFFE.length;

  // Générer les tâches du jour (basées sur vrai progrès)
  const available = THEMES.filter(t => QUIZZES[t.id]);
  // Prioriser thèmes commencés mais pas maîtrisés
  const inProgress = available.filter(t => {
    const lv = progress.levels[t.id];
    return lv && (lv.n1>0||lv.n2>0) && !progress.mastered.includes(t.id);
  });
  const notStarted = available.filter(t => !progress.levels[t.id] || (!progress.levels[t.id].n1 && !progress.levels[t.id].n2));
  const pool = [...inProgress, ...shuffle(notStarted)];
  const pick = pool.slice(0, 2);

  // Construire les tâches enrichies
  const tasks = [];

  // Tâche 1 : Quiz thème principal
  if(pick[0]){
    const lv = progress.levels[pick[0].id];
    const lvNum = lv && lv.n2>0 ? 2 : lv && lv.n1>0 ? 2 : 1;
    tasks.push({
      title: pick[0].name,
      sub: `🎯 Niveau ${lvNum} · ${QUIZZES[pick[0].id].filter(q=>q.level===lvNum||!q.level).length} Fragen`,
      tag: 'Quiz', tagClass: 'tag-quiz', numClass: 'q',
      icon: pick[0].icon,
      action: () => startQuizForTheme(pick[0]),
      type: 'item-quiz'
    });
  }

  // Tâche 2 : Fachbegriffe
  const fachCount = Math.min(5 + Math.floor(progress.quizDone/2), 10);
  tasks.push({
    title: 'Fachbegriffe üben',
    sub: `🔤 ${fachCount} zufällige Begriffe wiederholen`,
    tag: 'Flashcard', tagClass: 'tag-fach', numClass: 'f',
    icon: '🔤',
    action: () => nav('fachbegriffe'),
    type: 'item-fach'
  });

  // Tâche 3 : Leçon ou Praxis
  if(pick[1]){
    tasks.push({
      title: pick[1].name,
      sub: `📖 Lektion oder Praxis-Ausdrücke`,
      tag: 'Lektion', tagClass: 'tag-lektion', numClass: 'l',
      icon: pick[1].icon,
      action: () => openDetail(pick[1]),
      type: 'item-lektion'
    });
  } else {
    tasks.push({
      title: 'Praxis Modus',
      sub: '🏨 Klinische Ausdrücke üben',
      tag: 'Praxis', tagClass: 'tag-praxis', numClass: 'p',
      icon: '🏨',
      action: () => nav('praxis'),
      type: 'item-praxis'
    });
  }

  // Mettre à jour titre home card
  const ht = document.getElementById('heute-title');
  const hs = document.getElementById('heute-sub');
  if(ht) ht.textContent = (tasks[0]?.title || 'Dein Lernplan') + ' – Heute';
  if(hs) hs.textContent = 'Deine tägliche Lerneinheit ist bereit!';

  // Rendre les cartes
  const c = document.getElementById('heute-plan');
  if(!c) return;
  c.innerHTML = '';
  const sub = document.getElementById('heute-screen-sub');
  if(sub) sub.textContent = tasks.length + ' Aufgaben für heute';

  tasks.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = `heute-item ${t.type}`;
    item.style.animationDelay = (i * 80) + 'ms';
    item.innerHTML = `
      <div class="heute-num ${t.numClass}">${t.icon}</div>
      <div class="heute-item-info">
        <div class="heute-item-title">${t.title}</div>
        <div class="heute-item-sub">${t.sub}</div>
      </div>
      <span class="heute-item-tag ${t.tagClass}">${t.tag}</span>
    `;
    item.onclick = () => {
      item.classList.add('done');
      setTimeout(t.action, 150);
    };
    c.appendChild(item);
  });
}

function saveUserName(){
  const input = document.getElementById('onboarding-name');
  const name = (input?.value||'').trim();
  if(!name) { input.style.borderColor='#f87171'; input.focus(); return; }
  localStorage.setItem('pflegepro_name', name);
  document.getElementById('onboarding-modal').style.display = 'none';
  updateGreeting();
}

function updateGreeting(){
  const name = localStorage.getItem('pflegepro_name') || '';
  const greetEl = document.getElementById('greeting-text');
  const motivEl = document.getElementById('motivation-text');
  if(!greetEl || !motivEl) return;

  const now = new Date();
  const h = now.getHours();
  const day = now.getDay(); // 0=So, 1=Mo...
  const streak = progress.streak;
  const avg = progress.scores.length ? Math.round(progress.scores.reduce((a,b)=>a+b,0)/progress.scores.length) : 0;
  const quizDone = progress.quizDone;

  // Salutation selon l'heure
  let salut = h < 5 ? '🌙 Gute Nacht' : h < 12 ? '🌅 Guten Morgen' : h < 17 ? '☀️ Guten Tag' : h < 21 ? '🌆 Guten Abend' : '🌙 Gute Nacht';
  greetEl.textContent = name ? `${salut}, ${name}!` : `${salut}!`;

  // Messages de motivation contextuels
  const msgs = [];

  if(streak >= 7) msgs.push(`🔥 ${streak} Tage in Folge — du bist unaufhaltsam!`);
  else if(streak >= 3) msgs.push(`🔥 ${streak}-Tage-Streak! Bleib dran, du schaffst das!`);
  else if(streak === 0 && quizDone > 0) msgs.push(`💪 Zeit, deinen Streak wieder aufzubauen!`);

  if(avg >= 90) msgs.push(`🏆 Ø ${avg}% — du beherrschst den Stoff!`);
  else if(avg >= 70) msgs.push(`📈 Ø ${avg}% — du wächst mit jeder Frage!`);
  else if(quizDone === 0) msgs.push(`🚀 Bereit für deine erste Frage?`);

  // Messages selon heure/jour
  if(day === 1) msgs.push(`💪 Montag — der beste Tag, um stark zu starten!`);
  else if(day === 5) msgs.push(`🎉 Freitag — ein letzter Push vor dem Wochenende!`);
  else if(h >= 5 && h < 9) msgs.push(`☕ Frühes Lernen ist effektives Lernen!`);
  else if(h >= 22) msgs.push(`🌙 Abend-Session — das Gehirn festigt nachts!`);

  // Phrases génériques inspirantes sur les soins
  const generic = [
    '🩺 Jede Frage bringt dich deinem Examen näher.',
    '💙 Die Pflege braucht dich — lern weiter!',
    '📚 Wissen schützt Patienten — dein Wissen zählt.',
    '⭐ Du investierst heute in deine Zukunft!',
    '🌱 Schritt für Schritt zum Pflegeprofi.',
    '💡 Verstehen ist besser als Auswendiglernen.',
  ];
  if(!msgs.length) msgs.push(generic[Math.floor(Math.random()*generic.length)]);

  motivEl.textContent = msgs[0];

  // Bulle de réaction de la mascotte
  const bubble = document.getElementById('mascot-bubble');
  if(bubble){
    const bubbles = streak >= 5 ? '🔥 '+streak+'!' : streak >= 2 ? '💪 Super!' : quizDone === 0 ? '👋 Hallo!' : avg >= 80 ? '⭐ Toll!' : '😊 Weiter!';
    bubble.textContent = bubbles;
    bubble.style.display = 'block';
  }
  // Changer expression yeux selon heure
  const eyeL = document.getElementById('mascot-eye-l');
  const eyeR = document.getElementById('mascot-eye-r');
  if(h >= 22 || h < 6){
    if(eyeL) eyeL.style.transform = 'scaleY(0.5)';
    if(eyeR) eyeR.style.transform = 'scaleY(0.5)';
  }
}

function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

function toggleTheme(){
  const html=document.documentElement;
  const isDark=html.getAttribute('data-theme')==='dark';
  const newTheme=isDark?'light':'dark';
  html.setAttribute('data-theme',newTheme);
  localStorage.setItem('pflegepro_theme',newTheme);
  updateThemeUI(newTheme);
}
function updateThemeUI(theme){
  const knob=document.getElementById('toggle-knob');
  const label=document.getElementById('theme-label');
  if(!knob||!label)return;
  if(theme==='light'){knob.textContent='☀️';label.textContent='☀️ Hell';}
  else{knob.textContent='🌙';label.textContent='🌙 Dunkel';}
}

function init(){
  const savedTheme=localStorage.getItem('pflegepro_theme')||'dark';
  document.documentElement.setAttribute('data-theme',savedTheme);
  updateThemeUI(savedTheme);
  updateStats();
  renderThemeGrid('home-grid',openDetail);
  renderThemeGrid('lernkarten-grid',startQuizFromPruefung);
  buildFachbegriffe();
  buildPraxis('krankenhaus');
  buildHeute();

  updateGreeting();

  // Premier lancement : afficher modale prénom
  if(!localStorage.getItem('pflegepro_name')){
    setTimeout(()=>{
      document.getElementById('onboarding-modal').style.display='flex';
      document.getElementById('onboarding-name').focus();
    }, 600);
  }
  const now = new Date();
  const months = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
  const monthsUpper = ['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'];
  const calMonth = document.getElementById('cal-month');
  const calDay = document.getElementById('cal-day');
  const navCalMonth = document.getElementById('nav-cal-month');
  const navCalDay = document.getElementById('nav-cal-day');
  if(calMonth) calMonth.textContent = months[now.getMonth()];
  if(calDay) calDay.textContent = now.getDate();
  if(navCalMonth) navCalMonth.textContent = monthsUpper[now.getMonth()];
  if(navCalDay) navCalDay.textContent = now.getDate();

  // Unique persistent TOC scroll listener
  const lektC = document.getElementById('lekt-scroll');
  if(lektC){
    lektC.addEventListener('scroll', ()=>{
      const sh = lektC.scrollHeight - lektC.clientHeight;
      const pct = sh>0 ? Math.round((lektC.scrollTop/sh)*100) : 0;
      const fill = document.getElementById('lekt-fill');
      const pctEl = document.getElementById('lekt-pct');
      if(fill) fill.style.width = pct+'%';
      if(pctEl) pctEl.textContent = pct+'%';
      const secs = ['lsec-glukose','lsec-pankreas','lsec-hormone','lsec-werte','lsec-hypo','lsec-bus','lsec-summary',
                     'lsec-haut-intro','lsec-haut-schutz','lsec-haut-typen',
                     'lsec-haut-schichten','lsec-epidermis','lsec-dermis','lsec-subcutis'];
      const body = document.getElementById('lektion-body');
      const bodyOff = body ? body.offsetTop : 0;
      const pos = lektC.scrollTop + 80;
      let ai = 0;
      const tocItems = document.querySelectorAll('.lekt-toc-item');
      let visibleSecs = secs.filter(id=>document.getElementById(id));
      visibleSecs.forEach((id,i)=>{ const s=document.getElementById(id); if(s&&(bodyOff+s.offsetTop)<=pos) ai=i; });
      tocItems.forEach((t,j)=>t.classList.toggle('active',j===ai));
    });
  }
}
init();
let currentThemeObj = null;