function normalizeUnits (manifest) {
    const manifested = {...manifest};

    if (manifested.unit != "kg") {
        manifested.weight = manifested.weight*0.45;
        manifested.unit = "kg";
    }
    
    return manifested;
}

function validateManifest (manifest) {
    const requiredFields = ["containerId", "destination", "weight", "unit", "hazmat"];
    const fieldStatus = {};

    for (const field of requiredFields) {
        if (!(field in manifest)) {
            fieldStatus[field] = "Missing";
        }
    }

    if ("containerId" in manifest) {
        if (
            typeof manifest.containerId !== "number" ||
            !Number.isInteger(manifest.containerId) ||
            manifest.containerId <= 0
        ) {
            fieldStatus.containerId = "Invalid";
        }
    }

    if ("destination" in manifest) {
        if (
            typeof manifest.destination !== "string" ||
            manifest.destination.trim() === ""
        ) {
            fieldStatus.destination = "Invalid";
        }
    }

    if ("weight" in manifest) {
        if (
            typeof manifest.weight !== "number" ||
            Number.isNaN(manifest.weight) ||
            manifest.weight <= 0
        ) {
            fieldStatus.weight = "Invalid";
        }
    }

    if ("unit" in manifest) {
        const validUnits = ["kg", "lb"];

        if (
            typeof manifest.unit !== "string" ||
            !validUnits.includes(manifest.unit)
        ) {
            fieldStatus.unit = "Invalid";
        }
    }

    if ("hazmat" in manifest) {
        if (typeof manifest.hazmat !== "boolean") {
            fieldStatus.hazmat = "Invalid";
        }
    }

    const errors = {};

    for (const field of requiredFields) {
        if (field in fieldStatus) {
            errors[field] = fieldStatus[field];
        }
    }

    return errors;
}

function processManifest (manifest) {
    const validationResult = validateManifest(manifest);

    if (Object.keys(validationResult).length === 0) {
        const normalizedManifest = normalizeUnits(manifest);

        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizedManifest.weight} kg`);
        return;
    }

    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
}

console.log("normalizeUnits test:");
console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }));

console.log("validateManifest tests:");
console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
console.log(validateManifest({}));
console.log(validateManifest({ containerId: null, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
console.log(validateManifest({ containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" }));
console.log(validateManifest({ containerId: -2 }));
console.log(validateManifest({ containerId: 3.50 }));
console.log(validateManifest({ destination: "  " }));
console.log(validateManifest({ weight: NaN }));

console.log("processManifest tests:");
processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false });
processManifest({ containerId: -88, destination: "Soledad", weight: NaN });
processManifest({ destination: "Watsonville", hazmat: true });
