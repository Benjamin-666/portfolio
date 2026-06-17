<?php
session_start();
$type = $_SESSION['type_portfolio'] ?? "Général";
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Benjamin - CV</title>

    <link rel="stylesheet" href="Portfolio_cv.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>

<!-- NAVBAR -->
<nav>
    <div class="nav-center">
        <h2>QUANTIN Benjamin</h2>
    </div>

    <div class="nav-right">
        <ol>
            <li><a href="epreuve_oral.html">E5 Oral</a></li>
            <li><a href="veille_technologique.html">Veille</a></li>
            <li><a href="projet.html">Projets</a></li>
            <li><a href="stage.html">Stage</a></li>
            <li><a href="cv.html">CV</a></li>
        </ol>
    </div>
</nav>

<br/><br/><br/><br/><br/>

<!-- BREADCRUMB -->
<div class="breadcrumb">
    <a href="index.php">Accueil</a>
    <span class="sep">/</span>
    <span class="current">Mon CV</span>
</div>

<header>
    <h1>Mon CV</h1>

    <a href="CV.pdf" class="btn-CV-1">Télécharger le CV PDF</a>
</header>

<main class="content">

    <!-- =========================
         EXPERIENCES ACTUELLES
    ========================= -->

    <section class="card">

        <h2>Expériences en cours</h2>

        <?php if ($type == "Informatique") { ?>

            <h4>Stagiaire informatique : SOLUTIONS30</h4>
            <p>
                05/2026<br>
                Analyse de PC, blanchiment de machines,<br>
                monitoring écran, traitement de tickets.
            </p>

        <?php } ?>

        <h4>Aide à domicile : MADAME JOCELYNE BONHOMME</h4>
        <p>
            10/2025<br>
            Assistance quotidienne (soins, ménage, accompagnement).
        </p>

        <h4>Employé polyvalent : MADAME JOCELYNE BONHOMME</h4>
        <p>
            04/2025<br>
            Entretien extérieur, bricolage, rampe handicap.
        </p>

        <h4>Bénévolat : Charly Animation Loisirs</h4>
        <p>
            07/2024<br>
            Service client, accueil, encaissement, organisation.
        </p>

        <!-- bouton affichage -->
        <?php if ($type != "Informatique") { ?>
            <button onclick="document.getElementById('plus').style.display='block'">
                Voir plus d'expériences
            </button>
        <?php } ?>

    </section>

    <!-- =========================
         EXPERIENCES CACHEES
    ========================= -->

    <section class="card" id="plus" style="display: <?php echo ($type == "Informatique") ? "block" : "none"; ?>;">

        <h2>Expériences passées</h2>

        <h4>Communauté de communes</h4>
        <p>
            07/2025 - 70h<br>
            Installation équipements, gestion administrative.
        </p>

        <h4>Ouvrier agricole</h4>
        <p>
            06/2025 - 3 jours<br>
            Travaux de palissage.
        </p>

        <h4>Stage ENEDIS</h4>
        <p>
            11/2021 - 1 semaine<br>
            Observation terrain et gestion travaux.
        </p>

    </section>

    <!-- =========================
         FORMATION
    ========================= -->

    <section class="card">

        <h2>Formation</h2>

        <h4>BTS SIO SISR</h4>
        <p>
            Lycée Charles de Foucauld<br>
            En cours - spécialité réseaux et systèmes
        </p>

        <h4>Baccalauréat</h4>
        <p>
            Spécialité Mathématiques / SI<br>
            2025
        </p>

        <h4>Brevet</h4>
        <p>
            Mention Bien - 2022
        </p>

    </section>

    <!-- =========================
         COMPETENCES
    ========================= -->

    <section class="card">

        <h2>Compétences</h2>

        <h4>Expérience</h4>
        <p>
            - Travail en équipe<br>
            - Organisation<br>
            - Relation client<br>
            - Bricolage / terrain
        </p>

        <h4>Formation</h4>
        <p>
            - HTML / Python<br>
            - Réseaux informatiques
        </p>

        <h4>Projets</h4>
        <p>
            - Assemblage PC<br>
            - Diagnostic matériel
        </p>

    </section>

</main>

<!-- FOOTER -->
<footer>
    <section>
        <ul>
            <li><a href="contact.html" class="btn-pied_page">Contact</a></li>
            <li><a href="mentions-legales.html" class="btn-pied_page">Mentions légales</a></li>
            <li><a href="a-propos.html" class="btn-pied_page">À propos</a></li>
        </ul>
    </section>

    <p>&copy; 2025 Portfolio_Benjamin. Tous droits réservés.</p>
</footer>

<script>
    function togglePlus(){
        let el = document.getElementById("plus");
        el.style.display = (el.style.display === "block") ? "none" : "block";
    }
</script>

</body>
</html>