window.addEventListener("DOMContentLoaded", () => {

    const parties = document.querySelectorAll(".partie");

    function openPartie(id) {

        parties.forEach(p => {
            p.classList.remove("active");
        });

        const target = document.getElementById(id);

        if (target) {
            target.classList.add("active");

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        history.replaceState(null, "", "#" + id);
    }

    // clic sur les titres
    document.querySelectorAll(".partie h2").forEach(title => {

        title.addEventListener("click", () => {
            const section = title.parentElement;
            openPartie(section.id);
        });

    });

    // ouverture via URL
    const hash = window.location.hash.replace("#", "");

    if (hash) {
        openPartie(hash);
    } else {
        openPartie("d1_cb"); // défaut
    }

});

window.addEventListener("DOMContentLoaded", () => {

    // MODE GLOBAL : ouvrir tous les bilans
    const openAllBilans = false; // <- change ici

    const semaines = document.querySelectorAll(".semaine");
    const bilans = document.querySelectorAll(".bilan");

    function openSemaine(id) {

        // ouvrir la semaine
        const semaine = document.getElementById(id);
        if (semaine) {
            semaine.classList.add("active");
        }

        // ouvrir bilan associé
        const num = id.replace("w", ""); // w1 -> 1
        const bilan = document.getElementById("b" + num);

        if (bilan) {
            bilan.classList.add("active");
        }
    }

    function openAll() {
        bilans.forEach(b => b.classList.add("active"));
    }

    // clic sur semaine
    document.querySelectorAll(".titre").forEach(titre => {

        titre.addEventListener("click", () => {

            const parent = titre.parentElement;

            if (parent.classList.contains("semaine")) {
                openSemaine(parent.id);
            }

        });

    });

    // URL (#w1, #w2...)
    const hash = window.location.hash.replace("#", "");

    if (openAllBilans) {
        openAll();
    }

    if (hash) {
        openSemaine(hash);
    }

});