function parseShipment(rawData) {
  const pantry = [];
  const seen = new Set();

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const sku = parts[0].trim();

    // ignore duplicate SKUs - keep first occurrence
    if (seen.has(sku)) continue;
    seen.add(sku);

    const name = parts[1] ? parts[1].trim() : "Unknown";
    const qtyRaw = parts[2] ? parts[2].trim() : "Unknown";
    const qty = qtyRaw !== "Unknown" ? parseInt(qtyRaw, 10) : 0;
    const expires = parts[3] ? parts[3].trim() : "Unknown";
    const zone = parts[4] && parts[4].trim() ? parts[4].trim() : "general";

    pantry.push({
      sku: sku,
      name: name,
      qty: qty,
      expires: expires,
      zone: zone
    })
  }

  return pantry;
}

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
    const zone = action.item.zone || "general";
    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action.item);
  }
  return grouped;
}

function clonePantry(pantry) {
  const cloned = JSON.parse(JSON.stringify(pantry));
  return cloned;
}

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01", 
  "B21|Bananas|10|2027-01-01", 
  "C32|Eggs|3|2027-01-01|fridge", 
  "C32|Eggs|3|2027-01-01", 
  "D43|Pineapples|0|2027-01-01", 
  "E54|Peppers|-1|2027-01-01|fridge"
];

const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

console.log(grouped);