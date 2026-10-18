/* Part A1: Predict the output */

console.log("3" + 4 + 5);
console.log(3 + 4 + "5");
console.log("20" / "4");
console.log(null ?? "none");
console.log("" || "empty");
console.log(typeof undefined);
console.log(Boolean("0"));
console.log("Rwanda".slice(1, 4));


/* Part A2: Find and fix the bugs */

const members = ["Aline", "Eric", "Grace"];
let total = 0;

for (let i = 0; i < members.length; i++) {
    if (members[i] === "Eric") {
        total = total + 1;
    }
}

console.log(`Found ${total}`);



/* Part B: Variables, Strings and Numbers */

// Starting values
const rawName = "  uwase GRACE  ";
const phone = "0788123456";
const monthlySaving = "15000";

// 1. Clean and capitalise the full name
const cleanName = rawName.trim().toLowerCase();
const nameParts = cleanName.split(" ");
const firstName = nameParts[0];
const lastName = nameParts[1];

const capitalFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);

const capitalLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

const fullName = `${capitalLastName} ${capitalFirstName}`;

console.log(fullName);

// 2. Get the initials
const initials =
    `${capitalLastName.charAt(0)}.${capitalFirstName.charAt(0)}.`;

console.log(initials);

// 3. Mask the phone number
const maskedPhone = `${phone.slice(0, 3)}****${phone.slice(-3)}`;

console.log(maskedPhone);

// 4. Check the type before and after Number()
console.log(typeof monthlySaving);

const savingNumber = Number(monthlySaving);

console.log(typeof savingNumber);

// 5. Calculate and format yearly saving
const yearlySaving = savingNumber * 12;

console.log(`${yearlySaving.toLocaleString("en-US")} RWF`);

// 6. Calculate and format yearly interest at 5%
const yearlyInterest = yearlySaving * 0.05;

console.log(`${yearlyInterest.toLocaleString("en-US")} RWF`);


/* Part C: Conditions and Loops */

{
    // 1. Members data
    const members = [
        { name: "Aline", level: "G", contributions: [20000, 20000, 15000, 25000] },
        { name: "Eric", level: "S", contributions: [10000, 5000, 10000, 5000] },
        { name: "Grace", level: "B", contributions: [] },
        { name: "Jean", level: "S", contributions: [15000, 15000, 15000, 15000] },
        { name: "Diane", level: "G", contributions: [30000, 25000, 20000, 30000] },
        { name: "Patrick", level: "B", contributions: [5000, 10000, 5000, 0] }
    ];

    // Variables for the group report
    let groupTotal = 0;
    let onTrackCount = 0;
    let topSaverName = "";
    let topSaverTotal = 0;

    // 2. Loop through every member
    for (let i = 0; i < members.length; i++) {
        const member = members[i];

        // Skip members who have no contributions
        if (member.contributions.length === 0) {
            console.log(`${member.name}: no contributions yet.`);
            continue;
        }

        // 3. Calculate the member's total using an accumulator
        let total = 0;

        for (let j = 0; j < member.contributions.length; j++) {
            total = total + member.contributions[j];
        }

        // Add the member's total to the group total
        groupTotal = groupTotal + total;

        // 4. Determine the member's status
        let status;

        if (total >= 60000) {
            status = "On track";
            onTrackCount = onTrackCount + 1;
        } else if (total >= 30000) {
            status = "Behind";
        } else {
            status = "At risk";
        }

        // 5. Convert the level code using switch
        let levelName;

        switch (member.level) {
            case "G":
                levelName = "Gold";
                break;
            case "S":
                levelName = "Silver";
                break;
            case "B":
                levelName = "Bronze";
                break;
            default:
                levelName = "Unknown";
        }

        // 6. Print the member's report
        console.log(
            `${member.name} (${levelName}): ${total.toLocaleString("en-US")} RWF, ${status}`
        );

        // 7. Print a bar: one star for every full 10,000 RWF
        let bar = "";

        for (let star = 0; star < Math.floor(total / 10000); star++) {
            bar = bar + "*";
        }

        console.log(bar);

        // 8. Find the top saver without Math.max
        if (total > topSaverTotal) {
            topSaverTotal = total;
            topSaverName = member.name;
        }
    }

    // 9. Print the group summary
    console.log("--- Group Summary ---");
    console.log(`Group total: ${groupTotal.toLocaleString("en-US")} RWF`);
    console.log(`On track members: ${onTrackCount}`);
    console.log(
        `Top saver: ${topSaverName} (${topSaverTotal.toLocaleString("en-US")} RWF)`
    );

    // 10. Use a while loop to calculate the weeks needed
    const goal = 1000000;
    const weeklyIncrease = groupTotal / 4;

    let simulatedTotal = groupTotal;
    let weeks = 0;

    while (simulatedTotal < goal) {
        simulatedTotal = simulatedTotal + weeklyIncrease;
        weeks = weeks + 1;
    }

    console.log(`Weeks to reach 1,000,000 RWF: ${weeks}`);
}

/* Part D: Functions and Problem-Solving */


// Helper: compares an actual result with the expected result.
function check(actual, expected) {
    console.log(
        actual === expected
            ? "pass"
            : `FAIL: got ${actual}, expected ${expected}`
    );
}

// 1. Formats a number with commas and the RWF currency label.
function formatRwf(amount) {
    if (
        typeof amount !== "number" ||
        !Number.isFinite(amount) ||
        amount < 0
    ) {
        return "Invalid";
    }

    return `${Math.round(amount).toLocaleString("en-US")} RWF`;
}

// 2. Masks a valid 10-character Rwandan phone number.
function maskPhone(phone) {
    if (typeof phone !== "string" || !/^07\d{8}$/.test(phone)) {
        return "Invalid";
    }

    return phone.slice(0, 3) + "****" + phone.slice(-3);
}

// 3. Adds contributions using a loop; an empty array returns zero.
function memberTotal(contributions) {
    if (!Array.isArray(contributions)) {
        return "Invalid";
    }

    let total = 0;

    for (const amount of contributions) {
        if (
            typeof amount !== "number" ||
            !Number.isFinite(amount) ||
            amount < 0
        ) {
            return "Invalid";
        }

        total += amount;
    }

    return total;
}

// 4. Returns the savings status; negative or invalid totals are rejected.
// Example thresholds: replace these with the actual Part C rules.
function getStatus(total) {
    if (
        typeof total !== "number" ||
        !Number.isFinite(total) ||
        total < 0
    ) {
        return "Invalid";
    }

    if (total >= 50000) {
        return "On track";
    } else if (total >= 25000) {
        return "Behind";
    } else {
        return "At risk";
    }
}

// 5. Calculates the loan limit using a default multiplier of 3 and a cap.
function loanLimit(total, multiplier = 3) {
    if (
        typeof total !== "number" ||
        !Number.isFinite(total) ||
        total < 0 ||
        typeof multiplier !== "number" ||
        !Number.isFinite(multiplier) ||
        multiplier < 0
    ) {
        return 0;
    }

    return Math.min(total * multiplier, 500000);
}

// 6. Returns true if a total has an On track status.
const isOnTrack = total => getStatus(total) === "On track";

// 7. Counts members whose total passes the supplied callback.
function countMembers(list, test) {
    if (!Array.isArray(list) || typeof test !== "function") {
        return "Invalid";
    }

    let count = 0;

    for (const member of list) {
        if (!member || !Array.isArray(member.contributions)) {
            return "Invalid";
        }

        const total = memberTotal(member.contributions);

        if (total === "Invalid") {
            return "Invalid";
        }

        if (test(total)) {
            count++;
        }
    }

    return count;
}

// 8. Prints a savings report using the functions above.
function printReport(list) {
    if (!Array.isArray(list)) {
        console.log("Invalid report data");
        return;
    }

    console.log("\n===== MEMBER SAVINGS REPORT =====");

    for (const member of list) {
        const total = memberTotal(member.contributions);

        if (total === "Invalid") {
            console.log(`${member.name}: Invalid contributions`);
            continue;
        }

        console.log(`Name: ${member.name}`);
        console.log(`Total: ${formatRwf(total)}`);
        console.log(`Status: ${getStatus(total)}`);
        console.log(`Loan limit: ${formatRwf(loanLimit(total))}`);
        console.log("--------------------------------");
    }

    console.log(`Members on track: ${countMembers(list, isOnTrack)}`);
}

// ===============TEST CASES==============//

console.log("\n--- 1. formatRwf ---");
check(formatRwf(15000), "15,000 RWF");
check(formatRwf(0), "0 RWF");
check(formatRwf("hello"), "Invalid");

console.log("\n--- 2. maskPhone ---");
check(maskPhone("0788123456"), "078****456");
check(maskPhone("0700000000"), "070****000");
check(maskPhone("12345"), "Invalid");

console.log("\n--- 3. memberTotal ---");
check(memberTotal([5000, 5000]), 10000);
check(memberTotal([]), 0);
check(memberTotal("5000"), "Invalid");

console.log("\n--- 4. getStatus ---");
check(getStatus(60000), "On track");
check(getStatus(0), "At risk");
check(getStatus(-100), "Invalid");

console.log("\n--- 5. loanLimit ---");
check(loanLimit(80000), 240000);
check(loanLimit(0), 0);
check(loanLimit("hello"), 0);
check(loanLimit(200000), 500000);
check(loanLimit(80000, 2), 160000);

console.log("\n--- 6. isOnTrack ---");
check(isOnTrack(60000), true);
check(isOnTrack(0), false);
check(isOnTrack(-100), false);

console.log("\n--- 7. countMembers ---");
check(countMembers(members, isOnTrack), 2);
check(countMembers([], isOnTrack), 0);
check(countMembers(members, "not a function"), "Invalid");

console.log("\n--- 8. printReport ---");
printReport(members);

console.log("\nAll Part D tests completed.");





