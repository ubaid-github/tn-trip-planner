document.addEventListener("DOMContentLoaded", function() {
    const activities = [
        "Moonshine Mountain Coaster",
        "Ripley's Mountain Coaster",
        "SMO Rafting",
        "Arcadia",
        "Escape Room",
        "Ripley's Believe It or Not",
        "Ripley's Aquarium",
        "Gatlinburg SkyPark",
        "Ober Mountain",
        "Anakeesta"
    ];

    const activityRankingSection = document.getElementById("activity-ranking");

    const form = document.createElement("form");
    form.action = "https://formspree.io/f/mvgpppve";
    form.method = "POST";

    const nameLabel = document.createElement("label");
    nameLabel.for = "rank-name";
    nameLabel.textContent = "Name:";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "rank-name";
    nameInput.name = "rank-name";
    nameInput.required = true;
    form.appendChild(nameInput);

    for (let i = 1; i <= 3; i++) {
        const label = document.createElement("label");
        label.for = `activity-${i}`;
        label.textContent = `Activity ${i} (${i === 1 ? 'Favorite' : i === 2 ? 'Second Favorite' : 'Third Favorite'}):`;
        form.appendChild(label);

        const select = document.createElement("select");
        select.id = `activity-${i}`;
        select.name = `activity-${i}`;
        select.required = true;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select an activity";
        select.appendChild(defaultOption);

        activities.forEach(activity => {
            const option = document.createElement("option");
            option.value = activity;
            option.textContent = activity;
            select.appendChild(option);
        });

        form.appendChild(select);
    }

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit Rankings";
    form.appendChild(submitButton);

    activityRankingSection.appendChild(form);
});
