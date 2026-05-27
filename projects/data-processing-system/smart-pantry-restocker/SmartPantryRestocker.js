const rawData = [
  "KHI-500 | Kopi Hitam 500gr | 100 | 2026 | dry ",
  "KHI-250 | Kopi Hitam 250gr | 100 | 2026 | dry",
  "KSU-250 | Kopi Susu 250gr | 50 | 2026 | dry",
  "TCL-BOX | Teh Celup Kotak | 30 | 2027 | dry",
  
  "SND-1LT | Susu Nasi Dingin 1L | 20 | 2026 | chilled",
  "YGH-STR | Yogurt Strawberry | 45 | 2026 | chilled",
  "KEJ-BLK | Keju Blok | 15 | 2026 | chilled",

  "GRL-001 | Garam Dapur Lembut | 50 | 2028 | ", 
  "GUL-PAS | Gula Pasir Putih | 40 | 2029",

  "MIE-GNG | Mie Goreng Instan | 0 | 2026 | dry",
  "SRA-BTL | Sirup Rasa Coco |  | 2027 | dry",

  "BRS-WHT | Beras Putih Cianjur | 10 | unknown | dry", 
  "MTR-UNK | Minyak Tanpa Rabel | 25 | 2026 | "
]

const newShipment = [
  {
    sku: "KHI-500",
    name: "Kopi Hitam 500gr",
    qty: 20,
    expires: "2027",
    zone: "dry"
  },
  {
    sku: "TCL-BOX",
    name: "Teh Celup Kotak",
    qty: 0, 
    expires: "2027",
    zone: "dry"
  },
  {
    sku: "SND-1LT",
    name: "Susu Nasi Dingin 1L",
    qty: 15,
    expires: "2027",
    zone: "chilled"
  },
  {
    sku: "MIE-GNG",
    name: "Mie Goreng Instan",
    qty: 10,
    expires: "2027",
    zone: "dry"
  }
];

function parseShipment(rawData) {
  const pantry = [];

  for(let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    pantry.push({
      sku: parts[0].trim(),
      name: parts[1].trim(),
      qty: parseInt(parts[2].trim()), 
      expires: parts[3].trim(),
      zone: parts[4] && parts[4].trim() ? parts[4].trim() : "general" 
    })
  }

  return pantry;
}

const pantry = parseShipment(rawData);

function planRestock(pantry, shipment) {
  const planAction = [];
  
  for (let i = 0; i < shipment.length; i++) {
    const shipmentItem = shipment[i];
    
    if (shipmentItem.qty <= 0) {
      planAction.push({
        type: "discard",
        item: shipmentItem
      });
      continue;
    }
    
    const existsInPantry = pantry.some(p => p.sku === shipmentItem.sku);
    
    if (existsInPantry) {
      planAction.push({
        type: "restock",
        item: shipmentItem
      });
    } 
    
    else {
      planAction.push({
        type: "donate",
        item: shipmentItem
      });
    }
  }
  
  return planAction;
}

function groupByZone(actions) {
  const grouped = {};
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    if (!grouped[action.item.zone]) {
      grouped[action.item.zone] = [];
    }
    grouped[action.item.zone].push(action.item);
  }
  return grouped;
}

function clonePantry(pantry) {
  const cloned = JSON.parse(JSON.stringify(pantry));
  return cloned;
}

console.log(groupByZone(planRestock(pantry, newShipment)));