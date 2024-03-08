const departments=["Cyberquest","Electromania","Powersurge","Mechrocosm","Rasayans","Nirmaan","Genesis","Oligopoly","Monopoly","Gnosiomania","Robomania","Cosmocon","Aerodynamix","Rangmanch","Annunaad","Litmuse","Darkroom","Rangsazzi","Razzmatazz","Footprints"]
const EVENTS =[

    {
        eventName:" SOFTATHALON",
        minTeamsize : 1,
        maxTeamsize: 1,
        department:"Cyberquest",
     },
     {
        eventName:"INSOMNIA",
      minTeamsize :1 ,
          maxTeamsize:3 ,
        department:"Cyberquest",
     },
     {
        eventName:"CODE OF THE DAY",
      minTeamsize : 1,
          maxTeamsize: 1,
        department:"Cyberquest",
     },
     {
        eventName:"TECH-MAIDEN",
      minTeamsize : 1,
          maxTeamsize: 1,
        department:"Cyberquest",
     },
     {
        eventName:"CODE WARRIORS",
      minTeamsize : 1,
          maxTeamsize:2 ,
        department:"Cyberquest",
     },
     {
        eventName:"TUX-WARS",
      minTeamsize : 1,
          maxTeamsize: 2,
        department:"Cyberquest",
     },
     
     {
        eventName:"REVENGG",
      minTeamsize : 1,
          maxTeamsize: 2 ,
        department:"Cyberquest",
     },
     
     {
        eventName:"OPERAOMNIA",
      minTeamsize : 1,
          maxTeamsize:2 ,
        department:"Cyberquest",
     },
     
     {
        eventName:"MATHRUSH",
      minTeamsize : 1,
          maxTeamsize:2 ,
        department:"Cyberquest",
     },
     
     {
        eventName:"CSS BATTLE",
      minTeamsize : 1,
          maxTeamsize:1 ,
        department:"Cyberquest",
     },
     
     {
        eventName:"DESIGNRUSH",
      minTeamsize :1 ,
          maxTeamsize:1 ,
        department:"Cyberquest",
     },
     {
        eventName:"Quintathalon",
      minTeamsize : 1,
          maxTeamsize: 1,
        department:"Electromania",
     },
     {
        eventName:"Codotron",
      minTeamsize : 1,
          maxTeamsize: 3,
        department:"Electromania",
     },
     {
        eventName:"Innodev",
      minTeamsize : 1,
          maxTeamsize: 4,
        department:"Electromania",
     },
     {
        eventName:"Impromptu",
      minTeamsize : 1,
          maxTeamsize:2 ,
        department:"Electromania",
     },
     {
        eventName:"Circuit Of The Day",
      minTeamsize : 1,
          maxTeamsize: 2,
        department:"Electromania",
     },
     {
        eventName:"FPGA",
      minTeamsize : 1,
          maxTeamsize: 4,
        department:"Electromania",
     },
     {
        eventName:"Mind Sweeper",
      minTeamsize :1 ,
          maxTeamsize:2 ,
        department:"Electromania",
     },
     {
        eventName:"Research Gap",
        minTeamsize :1 ,
          maxTeamsize:2 ,
        department:"Electromania",
     },
    {
       eventName:"War of Currents",
       department:"Powersurge",
       minTeamsize : 1,
       maxTeamsize : 3,
    },
    {
       eventName:"Circuitbizz",
       department:"Powersurge",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Predefined Hardware",
       department:"Powersurge",
       minTeamsize : 3,
       maxTeamsize : 5,
    },
    {
       eventName:"Dev or Die",
       department:"Powersurge",
       minTeamsize : 3,
       maxTeamsize : 4,
    },
    {
       eventName:"Codesparks",
       department:"Powersurge",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Triathalon",
       department:"Mechrocosm",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Blueprint",
       department:"Mechrocosm",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"Automax",
       department:"Mechrocosm",
       minTeamsize : 1,
       maxTeamsize : 3,
    },
    {
       eventName:"Crack the Case",
       department:"Mechrocosm",
       minTeamsize : 3,
       maxTeamsize : 4,
    },
    {
       eventName:"Industrial Monopoly",
       department:"Mechrocosm",
       minTeamsize : 4,
       maxTeamsize : 4,
    },
    {
       eventName:"Mechathon",
       department:"Mechrocosm",
       minTeamsize : 3,
       maxTeamsize : 3,
    },
    {
       eventName:"Survivor Series",
       department:"Mechrocosm",
       minTeamsize : 2,
       maxTeamsize : 2,
    },
    {
       eventName:"CHEMEXPO",
       department:"Rasayans",
       minTeamsize : 3,
       maxTeamsize : 4,
    },
    {
       eventName:"HAZOPIUM",
       department:"Rasayans",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"CLASH-OF-CHEMIST (COC)",
       department:"Rasayans",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"CODEINDROME",
       department:"Rasayans",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"CHEMETHLON",
       department:"Rasayans",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"SCAVENGER HUNT",
       department:"Rasayans",
       minTeamsize : 3,
       maxTeamsize : 4,
    },
    {
       eventName:"MARKETING-NEXUS",
       department:"Rasayans",
       minTeamsize : 2,
       maxTeamsize : 4,
    },
    {
       eventName:"Codigo",
       department:"Nirmaan",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Cognizance",
       department:"Nirmaan",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Just In Case",
       department:"Nirmaan",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Ziggurare",
       department:"Nirmaan",
       minTeamsize : 3,
       maxTeamsize : 4,
    },
    {
       eventName:"Linkidge",
       department:"Nirmaan",
       minTeamsize : 3,
       maxTeamsize : 4,
    },
    {
       eventName:"Terraquiz",
       department:"Nirmaan",
       minTeamsize : 1,
       maxTeamsize : 3,
    },
    {
       eventName:"Constrengtho",
       department:"Nirmaan",
       minTeamsize : 1,
       maxTeamsize : 3,
    },
    {
       eventName:"Palladin",
       department:"Genesis",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Central Dogma",
       department:"Genesis",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"Clue Quest",
       department:"Genesis",
       minTeamsize : 3,
       maxTeamsize : 5,
    },
    {
       eventName:"AD-Hole",
       department:"Oligopoly",
       minTeamsize : 1,
       maxTeamsize : 2,
    },
    {
       eventName:"Trading Strategist ",
       department:"Oligopoly",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:" Pitchers",
       department:"Oligopoly",
       minTeamsize : 1,
       maxTeamsize : 3,
    },
    {
       eventName:"Solo Lobo",
       department:"Oligopoly",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"gnoTalks",
       department:"Gnosiomania",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"General Quiz",
       department:"Gnosiomania",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"MELA Quiz",
       department:"Gnosiomania",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"BizTech Quiz",
       department:"Gnosiomania",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"Sports Quiz",
       department:"Gnosiomania",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"India Quiz",
       department:"Gnosiomania",
       minTeamsize : 2,
       maxTeamsize : 3,
    },
    {
       eventName:"Cozmo Clench",
       department:"Robomania",
       minTeamsize : 1,
       maxTeamsize : 5,
    },
    {
       eventName:"Track-Trek",
       department:"Robomania",
       minTeamsize : 1,
       maxTeamsize : 4,
    },
    {
       eventName:"Navigate the Dark",
       department:"Robomania",
       minTeamsize : 1,
       maxTeamsize : 4,
    },
    {
       eventName:"Detect n direct",
       department:"Robomania",
       minTeamsize : 1,
       maxTeamsize : 4,
    },
    {
       eventName:"HACK-QUEST",
       department:"Robomania",
       minTeamsize : 1,
       maxTeamsize : 4,
    },
    {
       eventName:"The Quiz of Everything",
       department:"Cosmocon",
       minTeamsize : 1,
       maxTeamsize : 2,
    },
    {
       eventName:"Stellar Innovations",
       department:"Cosmocon",
       minTeamsize : 1,
       maxTeamsize : 4,
    },
    {
       eventName:"Capture the Stars",
       department:"Cosmocon",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"The Stargazing Night",
       department:"Cosmocon",
       minTeamsize : 1,
       maxTeamsize : 1,
    },
    {
       eventName:"Guardian",
       department:"Aerodynamix",
       minTeamsize : 1,
       maxTeamsize : 10,
    },
    {
       eventName:"Game of Drones",
       department:"Aerodynamix",
       minTeamsize : 1,
       maxTeamsize : 2,
    },
    
    {
       eventName:"Voice of Culrav",
       department:"Annunaad",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Harmony",
       department:"Annunaad",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Ijaad",
       department:"Annunaad",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Rocktave",
       department:"Annunaad",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Vadya",
       department:"Annunaad",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Euphony",
       department:"Annunaad",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Kavyanjali",
       department:"Litmuse",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Poetry Slam",
       department:"Litmuse",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Spell-bee",
       department:"Litmuse",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Laccuzzi",
       department:"Litmuse",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Picture Tale",
       department:"Darkroom",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Tasveer",
       department:"Darkroom",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Sales-Pitch: Revolutionize Your Marketing with Design",
       department:"Darkroom",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Layers: Dissecting Imagination with Colors",
       department:"Darkroom",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Short-Film: Crafting Captivating Narratives",
       department:"Darkroom",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"B-Roll: Crafting Compelling Cinematic Narratives",
       department:"Darkroom",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"PAINT THE WAY",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"LET’S FACE IT",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"SWADDLE",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Stroke Shuffle",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Blind Art",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Momento Vinci",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Junk Art",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Finger Print",
       department:"Rangsazzi",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"DESI SYNC",
       department:"Razzmatazz",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"The Vault of Dance",
       department:"Razzmatazz",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"REVEL",
       department:"Razzmatazz",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"LEAP OF FAITH",
       department:"Razzmatazz",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"SIZZLE AND SHAKE",
       department:"Razzmatazz",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Desfile de moda(Rampwalk)",
       department:"Footprints",
       minTeamsize : 1,
       maxTeamsize : 40,
    },
    {
       eventName:"Mr. and Miss Spandan",
       department:"Footprints",
       minTeamsize : 1,
       maxTeamsize : 40,
    } ,
    
     {
        eventName : "Chanakya Neeti",
        department : "Monopoly",
        minTeamsize : 1,
        maxTeamsize : 2,
     },
     {
        eventName : "Putting Words Into Action",
        department : "Monopoly",
        minTeamsize : 1,
        maxTeamsize : 1,
     },
     {
        eventName : "Navachar",
        department : "Monopoly",
        minTeamsize : 1,
        maxTeamsize : 3,
     },
     {
        eventName : "Stall Mart",
        department : "Monopoly",
        minTeamsize : 3,
        maxTeamsize : 4,
     },
     {
        eventName : "Natyamanch - Stage Play",
        department : "Rangmanch",
        minTeamsize : 1,
        maxTeamsize : 40,
     },
     {
        eventName : "Hasyamanch - Comic Play",
        department : "Rangmanch",
        minTeamsize : 1,
        maxTeamsize : 40,
     },
     {
        eventName : "Maskhare - The Stand-up comedy event",
        department : "Rangmanch",
        minTeamsize : 1,
        maxTeamsize : 40,
     },
     {
        eventName : "Nukkad - Street Play",
        department : "Rangmanch",
        minTeamsize : 1,
        maxTeamsize : 40,
     },
     {
        eventName : "Pratibimb - Mono Act competition",
        department : "Rangmanch",
        minTeamsize : 1,
        maxTeamsize : 40,
     },
]

module.exports = EVENTS;