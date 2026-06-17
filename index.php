<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Benjamin</title>
    <link rel="stylesheet" href="Portfolio_neutre.css">



</head>

<body>

<nav>
    <div class="nav-center">
        <h2>QUANTIN Benjamin</h2>
    </div>
</nav>
<br/>
<br/>
<br/>


<header>




    <h1> <b>Accueil</b> </h1>

    <p></p>
    <p></p>

</header>



<div class="breadcrumb">
    <span class="sep">></span>
    <span class="current">Accueil</span>
</div>

<br/>
<br/>
<h3> Présentation </h3>
<br/>
<section id="presentation">
    <img src="photo-profil_1.jpg" alt="Photo de profil">

    <div class="texte">
        <h2>Bienvenue sur mon Portfolio !</h2>
        <p>Je suis Benjamin Quantin, étudiant passionné par l’informatique, l'administration réseau et les nouvelles technologies.
            <br/>Sur ce site, tu découvriras mes projets, mon parcours et mes compétences.
            <br/>
        </p>
    </div>
</section>

<br/>
<br/>
<br/>

<?php

$typePortfolio = "";

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['type_portfolio'])) {
    $typePortfolio = htmlspecialchars($_GET['type_portfolio']);
}

?>

<br/>
<br/>

<section id="questionnaire">
    <h3>Quel type de portfolio souhaitez-vous observer ?</h3>

    <form method="GET" action="" class="form-portfolio">

        <label class="card-option">
            <input type="radio" name="type_portfolio" value="Informatique" required>
            <span>💻 Informatique</span>
        </label>

        <label class="card-option">
            <input type="radio" name="type_portfolio" value="Commercial">
            <span>💼 Commercial</span>
        </label>

        <label class="card-option">
            <input type="radio" name="type_portfolio" value="Social">
            <span>🤝 Social</span>
        </label>

        <label class="card-option">
            <input type="radio" name="type_portfolio" value="Général">
            <span>🌐 Général</span>
        </label>

        <label class="card-option">
            <input type="radio" name="type_portfolio" value="Autre">
            <span>✨ Autre</span>
        </label>

        <button type="submit">Valider</button>
    </form>

    <?php if (!empty($typePortfolio)) : ?>
        <br/>
        <div class="resultat">
            <strong>Vous avez choisi :</strong> <?php echo $typePortfolio; ?>
        </div>
    <?php endif; ?>
</section>

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

<script src="script.js"></script>
<script src="java.js"></script>
<script src="script_1.js"></script>

</body>
</html>