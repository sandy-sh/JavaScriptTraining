const config1 = {
    fault: false,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 4 },
    ],
};

const config2 = {
    fault: false,
    phases: [
        { color: "red", duration: 3 },
        { color: "yellow", duration: -2 },
        { color: "green", duration: 6 },
    ],
};

const config3 = {
    fault: true,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 6 },
    ],
};

const config4 = {
    fault: false,
    phases: [],
};

function runSequence(config, cycles) {
    let sequence = 0;

    if (config.phases.length === 0) {
        console.log("No phases found");
    } else if (config.fault) {
        console.log("Faulted phase!");
    } else {
        while (sequence < cycles) {
        for (let i = 0; i < config.phases.length; i++) {
            const color = config.phases[i].color;
            const duration = config.phases[i].duration;

            if (config.phases[i].duration <= 0) {
            console.log("Invalid phase detected");
            } else {
            console.log(`Switching to ${color} for ${duration} s`);
            }
        }
        sequence++;
        }
    }
    return "Sequence Completed";
}

function generateTimeline(config, cycles) {
    let time = 0;
    let sequence = 0;
    const timeline = [];

    while (sequence < cycles) {
        for (let i = 0; i < config.phases.length; i++) {
        timeline.push((time += config.phases[i].duration));
        }
        sequence++;
    }

    return timeline;
}
