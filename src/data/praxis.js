// Praxis-Ausdrücke
export const PRAXIS_DATA = {
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
      {icon:'💉',name:'Venenverweilkanüle',desc:'Zugang für i.v.-Therapie',image:'/images/material/venenverweilkanuele.webp'},
      {icon:'🩺',name:'Stethoskop',desc:'Abhören von Herz und Lunge',image:'/images/material/stethoskop.webp'},
      {icon:'⏱️',name:'Pulsoximeter',desc:'Messung O₂-Sättigung',image:'/images/material/pulsoximeter.webp'},
      {icon:'🩹',name:'Verbandsmaterial',desc:'Wundversorgung'},
      {icon:'💊',name:'Medikamentenwagen',desc:'Sichere Medikamentengabe',image:'/images/material/medikamentenwagen.webp'},
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
      {icon:'🚶',name:'Rollator',desc:'Gehhilfe / Mobilität',image:'/images/material/rollator.webp'},
      {icon:'🛏️',name:'Pflegebett',desc:'Höhenverstellbar, mit Seitengitter',image:'/images/material/pflegebett.webp'},
      {icon:'🧴',name:'Hautpflegeprodukte',desc:'Dekubitusprophylaxe'},
      {icon:'🩺',name:'Blutdruckgerät',desc:'Regelmäßige Kontrolle',image:'/images/material/blutdruckmessgeraet.webp'},
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
      {icon:'💊',name:'Medikamentendispenser',desc:'Sichere Ausgabe',image:'/images/material/medikamentendispenser.webp'},
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
      {icon:'💉',name:'Kinderkanüle',desc:'Kleiner Durchmesser',image:'/images/material/kinderkanuele.webp'},
      {icon:'🌡️',name:'Ohrthermometer',desc:'Kindgerechte Messung',image:'/images/material/ohrthermometer.webp'},
      {icon:'⚖️',name:'Kinderwaage',desc:'Gewichtskontrolle',image:'/images/material/kinderwaage.webp'},
      {icon:'🩺',name:'Kinderstethoskop',desc:'Kleinere Membrane'},
      {icon:'🍭',name:'Belohnungssystem',desc:'Motivation und Kooperation'},
    ]
  }
};

// ─── LESSON CONTENT (version animée) ────────────────────────────────────────
