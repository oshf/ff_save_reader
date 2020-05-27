function getStats(sav) {

  const offsets = [0x0100, 0x0140, 0x0180, 0x01C0]; // Party info location begin

  let party = {
    "classes": [],
    "names": [],
    "lvls": [],
    "HP": [],
    "maxHP": [],
    "str": [],
    "agl": [],
    "int": [],
    "vit": [],
    "luck": [],
    "dmg": [],
    "hit": [],
    "abs": [],
    "evd": []
  }

  let tmp = "";

  offsets.forEach(function(partyMem) {

    // Get Class
    tmp = sav.charCodeAt(partyMem).toString();
    party.classes.push(getClass(tmp));

    // Get Name
    tmp = "";
    for (j = 0; j < 4; j++) {
      tmp += getChar(sav.charCodeAt(partyMem + 0x02 + j));
    }
    party.names.push(tmp);

    // Get Level
    tmp = parseInt(sav.charCodeAt(partyMem + 0x26).toString(), 16) + 1; // Level is stored as -1
    party.lvls.push(tmp);

    // Get HP
    tmp = sav.charCodeAt(partyMem + 0x0A).toString();
    party.HP.push(tmp);

    // Get Max HP
    tmp = sav.charCodeAt(partyMem + 0x0C).toString();
    party.maxHP.push(tmp);

    // Get Strength
    tmp = sav.charCodeAt(partyMem + 0x10).toString();
    party.str.push(tmp);

    // Get Agility
    tmp = sav.charCodeAt(partyMem + 0x11).toString();
    party.agl.push(tmp);

    // Get Intelligence
    tmp = sav.charCodeAt(partyMem + 0x12).toString();
    party.int.push(tmp);

    // Get Vitality
    tmp = sav.charCodeAt(partyMem + 0x13).toString();
    party.vit.push(tmp);

    // Get Luck
    tmp = sav.charCodeAt(partyMem + 0x14).toString();
    party.luck.push(tmp);

    // Get Damage
    tmp = sav.charCodeAt(partyMem + 0x20).toString();
    party.dmg.push(tmp);

    // Get Hit %
    tmp = sav.charCodeAt(partyMem + 0x21).toString();
    party.hit.push(tmp);

    // Get Absorb
    tmp = sav.charCodeAt(partyMem + 0x22).toString();
    party.abs.push(tmp);

    // Get Evade %
    tmp = sav.charCodeAt(partyMem + 0x23).toString();
    party.evd.push(tmp);
  });

  function getClass(num) {
    tmp = {
      0: "Fighter",
      1: "Thief",
      2: "Bl. Belt",
      3: "Red Mage",
      4: "Wh. Mage",
      5: "Bl. Mage",
      6: "Knight",
      7: "Ninja",
      8: "Master",
      9: "Red Wiz.",
      10: "Wh. Wiz.",
      11: "Bl. Wiz."
    }
    return tmp[num]
  }

  function getChar(hex) { // Char table generated from US version
    tmp = {
      0x80: '0',
      0x81: '1',
      0x82: '2',
      0x83: '3',
      0x84: '4',
      0x85: '5',
      0x86: '6',
      0x87: '7',
      0x88: '8',
      0x89: '9',
      0x8A: 'A',
      0x8B: 'B',
      0x8C: 'C',
      0x8D: 'D',
      0x8E: 'E',
      0x8F: 'F',
      0x90: 'G',
      0x91: 'H',
      0x92: 'I',
      0x93: 'J',
      0x94: 'K',
      0x95: 'L',
      0x96: 'M',
      0x97: 'N',
      0x98: 'O',
      0x99: 'P',
      0x9A: 'Q',
      0x9B: 'R',
      0x9C: 'S',
      0x9D: 'T',
      0x9E: 'U',
      0x9F: 'V',
      0xA0: 'W',
      0xA1: 'X',
      0xA2: 'Y',
      0xA3: 'Z',
      0xA4: 'a',
      0xA5: 'b',
      0xA6: 'c',
      0xA7: 'd',
      0xA8: 'e',
      0xA9: 'f',
      0xAA: 'g',
      0xAB: 'h',
      0xAC: 'i',
      0xAD: 'j',
      0xAE: 'k',
      0xAF: 'l',
      0xB0: 'm',
      0xB1: 'n',
      0xB2: 'o',
      0xB3: 'p',
      0xB4: 'q',
      0xB5: 'r',
      0xB6: 's',
      0xB7: 't',
      0xB8: 'u',
      0xB9: 'v',
      0xBA: 'w',
      0xBB: 'x',
      0xBC: 'y',
      0xBD: 'z',
      0xBE: '\'',
      0xBF: ',',
      0xC0: '.',
      0xC2: '-',
      0xC3: '..',
      0xC4: '!',
      0xC5: '?',
      0xFF: ' '
    }
    return tmp[hex];
  }

  return party;

}