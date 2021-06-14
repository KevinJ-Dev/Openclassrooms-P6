# KevinJourdain_6_04052021
Bonjour 😀


    Présentation entreprise So Pekocko

Vous êtes développeur backend freelance et vous travaillez depuis quelques années sur des projets web pour des startups ou des grandes entreprises.

La semaine dernière, vous avez reçu un mail vous proposant un nouveau projet.

La marque So Pekocko, qui crée des sauces piquantes, connaît un franc succès, en partie grâce à sa chaîne de vidéos YouTube “La piquante”.

L’entreprise souhaite désormais développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”.

Même si l’application deviendra peut-être un magasin en ligne dans un futur proche, Sophie, la product owner de So Pekocko, a décidé que le MVP du projet sera une application web permettant aux utilisateurs d’ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par les autres utilisateurs.

Lors de votre premier jour, vous discutez avec elle sur la messagerie instantanée interne de l’entreprise.


    Contexte du projet

So Pekocko est une entreprise familiale de 10 salariés. Son activité principale est la création
de sauces piquantes dont la composition est tenue secrète. Forte de son succès, l’entreprise
souhaite se développer et créer une application web, dans laquelle les utilisateurs pourront
ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres.

    Réalisation de l’API

Points de vigilance
L’entreprise ayant subi quelques attaques sur son site web ces dernières semaines, le
fondateur souhaite que les données des utilisateurs soient parfaitement protégées.
Pour cela, l’API utilisée devra impérativement respecter des pratiques de code sécurisé.

    Points de vigilance
L’entreprise ayant subi quelques attaques sur son site web ces dernières semaines, le
fondateur souhaite que les données des utilisateurs soient parfaitement protégées.
Pour cela, l’API utilisée devra impérativement respecter des pratiques de code sécurisé.

    Exigences concernant la sécurité 

l’API doit respecter le RGPD et les standards OWASP ;

le mot de passe des utilisateurs doit être chiffré ;

2 types de droits administrateur à la base de données doivent être définis : un accès
pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base
de données ;

la sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB
Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis
sa machine ;

l’authentification est renforcée sur les routes requises ;

les mots de passe sont stockés de manière sécurisée ;

les adresses mails de la base de données sont uniques et un plugin Mongoose
approprié est utilisé pour s’assurer de leur caractère unique et rapporter des erreurs.

