export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  supports: string[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "film-solaire-batiment",
    name: "Film solaire pour bâtiment",
    shortName: "Film solaire bâtiment",
    title: "Film solaire pour bâtiment | APEX LINER",
    description: "Pose de film solaire pour bâtiment à Bussigny et dans le canton de Vaud : confort thermique, réduction de l’éblouissement et protection des vitrages.",
    intro: "Le film solaire pour bâtiment améliore le confort des pièces exposées au soleil sans remplacer les vitrages existants. APEX LINER étudie l’exposition, le type de vitrage et le rendu attendu avant de recommander une solution de pose.",
    image: "/images/projects-web/IMG_0344.jpg",
    imageAlt: "Vitrages de bâtiment équipés d’un film solaire",
    benefits: ["Réduire la chaleur solaire ressentie", "Limiter l’éblouissement sur les postes de travail", "Filtrer une partie des UV selon la référence choisie", "Conserver les vitrages en place"],
    supports: ["Fenêtres de bureaux", "Façades vitrées", "Vitrages de locaux professionnels", "Baies vitrées de bâtiments"],
    process: [
      { title: "Analyse des vitrages", text: "Nous regardons l’orientation, les dimensions, l’usage des pièces et les contraintes du vitrage existant." },
      { title: "Choix de la référence", text: "Le film est choisi selon le niveau de contrôle solaire, la lumière souhaitée et l’aspect final recherché." },
      { title: "Préparation et pose", text: "Les surfaces sont préparées avec soin, puis le film est posé et contrôlé pour obtenir une finition régulière." },
    ],
    faq: [
      { question: "Le film solaire remplace-t-il un vitrage?", answer: "Non. Il se pose sur le vitrage existant et permet d’améliorer son comportement face au soleil, sans travaux de remplacement." },
      { question: "Peut-on garder une bonne luminosité?", answer: "Oui, le choix de la référence permet d’arbitrer entre contrôle solaire, transparence et rendu visuel." },
      { question: "La pose convient-elle à tous les vitrages?", answer: "Le vitrage doit être vérifié avant la pose, car la compatibilité dépend notamment de sa composition et de son exposition." },
    ],
    relatedSlugs: ["film-anti-chaleur-vitrages", "film-solaire-vitrines", "protection-solaire-bureaux"],
  },
  {
    slug: "film-anti-chaleur-vitrages",
    name: "Film anti-chaleur pour vitrages",
    shortName: "Film anti-chaleur vitrages",
    title: "Film anti-chaleur pour vitrages | APEX LINER",
    description: "Film anti-chaleur pour vitrages à Bussigny et dans le canton de Vaud. Une solution discrète pour améliorer le confort des pièces exposées au soleil.",
    intro: "Quand une pièce chauffe fortement derrière ses fenêtres, un film anti-chaleur peut limiter l’énergie solaire entrant par le vitrage. La solution s’adresse aux logements, commerces et espaces professionnels qui souhaitent agir sur le confort sans engager de chantier lourd.",
    image: "/images/projects-web/IMG_0410.jpg",
    imageAlt: "Film adhésif posé sur des vitrages intérieurs",
    benefits: ["Améliorer le confort près des fenêtres", "Réduire l’éblouissement à certaines heures", "Agir sans déposer les vitrages", "Choisir un rendu clair, teinté ou réfléchissant selon le projet"],
    supports: ["Fenêtres exposées sud ou ouest", "Baies vitrées", "Vitrages de bureaux", "Vitrines soumises au soleil"],
    process: [
      { title: "Constat sur place", text: "L’exposition, la surface vitrée et la gêne ressentie sont relevées pour cadrer le besoin." },
      { title: "Recommandation", text: "Nous présentons une référence cohérente avec le vitrage et le niveau de lumière attendu." },
      { title: "Pose propre", text: "La pose se fait sur support préparé, avec une attention portée aux bords, aux raccords et à la finition." },
    ],
    faq: [
      { question: "Le film anti-chaleur assombrit-il forcément la pièce?", answer: "Pas forcément. Certaines références sont conçues pour contrôler le solaire tout en conservant une transmission lumineuse élevée." },
      { question: "Peut-il être posé dans un bureau occupé?", answer: "Oui, l’intervention peut être organisée par zones afin de limiter la gêne pour les occupants." },
      { question: "Comment savoir quel film choisir?", answer: "La référence dépend du vitrage, de l’exposition, de la surface et du résultat recherché. Une étude du support est nécessaire." },
    ],
    relatedSlugs: ["film-solaire-batiment", "protection-solaire-bureaux", "film-solaire-vitrines"],
  },
  {
    slug: "film-solaire-vitrines",
    name: "Film solaire pour vitrines de commerces",
    shortName: "Film solaire vitrines",
    title: "Film solaire pour vitrines de commerces | APEX LINER",
    description: "Pose de film solaire pour vitrines de commerces à Bussigny et dans le canton de Vaud, avec attention portée au confort, à la visibilité et à l’image du point de vente.",
    intro: "Une vitrine très exposée peut créer de la chaleur, de l’éblouissement et une usure prématurée de certains éléments présentés. APEX LINER propose des films adaptés aux vitrines commerciales, en tenant compte de la visibilité depuis l’extérieur et de l’identité du commerce.",
    image: "/images/projects-web/IMG_0344.jpg",
    imageAlt: "Vitrine commerciale équipée d’un film solaire",
    benefits: ["Améliorer le confort à l’intérieur du commerce", "Limiter les reflets gênants sur la vitrine", "Préserver la lisibilité de l’espace de vente", "Donner un aspect discret ou plus réfléchissant"],
    supports: ["Vitrines de magasins", "Entrées vitrées", "Baies de restaurants et salons", "Vitrages de locaux commerciaux"],
    process: [
      { title: "Comprendre le commerce", text: "Les horaires d’ensoleillement, les zones de passage et la visibilité souhaitée sont pris en compte." },
      { title: "Définir le rendu", text: "Nous comparons les options de teinte, de réflexion et de transparence avec l’usage de la vitrine." },
      { title: "Intervenir avec soin", text: "La pose est planifiée pour préserver l’activité et obtenir des lignes propres sur les grandes surfaces." },
    ],
    faq: [
      { question: "Le film empêche-t-il de voir les produits?", answer: "Le niveau de transparence se choisit selon la priorité du commerce : visibilité, réduction de la chaleur ou intimité." },
      { question: "Peut-on poser le film sur une vitrine existante?", answer: "Oui, après vérification de l’état et de la compatibilité du vitrage." },
      { question: "La pose peut-elle se faire hors des heures d’ouverture?", answer: "L’organisation de l’intervention peut être discutée lors de la demande de devis." },
    ],
    relatedSlugs: ["film-anti-chaleur-vitrages", "lettrage-marquage-vitrines", "protection-solaire-bureaux"],
  },
  {
    slug: "covering-automobile",
    name: "Covering automobile",
    shortName: "Covering automobile",
    title: "Covering automobile | APEX LINER",
    description: "Covering automobile avec films professionnels à Bussigny et dans le canton de Vaud : changement d’apparence, finitions soignées et pose sur mesure.",
    intro: "Le covering automobile transforme l’apparence d’un véhicule grâce à un film adhésif posé sur sa carrosserie. Le projet se définit autour de la teinte, de la finition, des éléments à couvrir et de l’état du support.",
    image: "/images/projects-web/IMG_0801.jpg",
    imageAlt: "Détail d’un covering automobile violet brillant",
    benefits: ["Modifier l’apparence sans repeindre la carrosserie", "Choisir une finition mate, brillante ou particulière", "Personnaliser certaines zones du véhicule", "Prévoir un projet esthétique cohérent"],
    supports: ["Voitures particulières", "Motos et deux-roues", "Éléments de carrosserie", "Véhicules de représentation"],
    process: [
      { title: "Définir le projet", text: "La teinte, la finition, les panneaux concernés et le niveau de démontage nécessaire sont cadrés." },
      { title: "Contrôler le support", text: "La carrosserie doit être propre, saine et compatible avec une pose de film adhésif." },
      { title: "Poser et finir", text: "La pose est réalisée panneau par panneau, avec soin sur les arêtes, les jonctions et les éléments démontés." },
    ],
    faq: [
      { question: "Le covering protège-t-il totalement la peinture?", answer: "Non. Il peut offrir une protection de surface limitée, mais ne remplace pas un film de protection dédié ni une réparation de carrosserie." },
      { question: "Peut-on couvrir seulement certaines parties?", answer: "Oui, un projet partiel peut concerner le toit, les rétroviseurs, les éléments décoratifs ou d’autres panneaux." },
      { question: "La carrosserie doit-elle être en parfait état?", answer: "Plus le support est régulier et sain, plus la finition sera propre. Les défauts existants doivent être évalués avant la pose." },
    ],
    relatedSlugs: ["covering-utilitaire", "marquage-publicitaire-vehicules", "lettrage-marquage-vitrines"],
  },
  {
    slug: "covering-utilitaire",
    name: "Covering utilitaire",
    shortName: "Covering utilitaire",
    title: "Covering utilitaire | APEX LINER",
    description: "Covering d’utilitaire à Bussigny et dans le canton de Vaud pour changer l’apparence, harmoniser une flotte ou préparer un véhicule professionnel.",
    intro: "Le covering utilitaire permet de travailler l’apparence d’un véhicule professionnel sans immobilisation liée à une peinture complète. Il peut être total ou partiel et se combine avec un marquage lorsque le véhicule doit aussi communiquer pour l’entreprise.",
    image: "/images/projects-web/marquage-publicitaire-van.jpg",
    imageAlt: "Véhicule utilitaire avec film adhésif et marquage",
    benefits: ["Adapter l’apparence à l’identité de l’entreprise", "Traiter un utilitaire complet ou certaines zones", "Préparer une base visuelle avant un marquage", "Conserver une finition homogène sur les panneaux"],
    supports: ["Fourgons", "Véhicules de service", "Flottes professionnelles", "Cabines, portes et panneaux latéraux"],
    process: [
      { title: "Relever le véhicule", text: "Le modèle, les panneaux, les poignées, les ouvrants et les contraintes d’usage sont identifiés." },
      { title: "Valider les surfaces", text: "La teinte et la finition sont choisies en fonction du support et de l’objectif du véhicule." },
      { title: "Organiser l’immobilisation", text: "La pose est planifiée autour de l’activité de l’entreprise et contrôlée avant restitution." },
    ],
    faq: [
      { question: "Covering et marquage sont-ils la même prestation?", answer: "Non. Le covering habille une surface avec une teinte ou une finition, tandis que le marquage ajoute une identité visuelle, un texte ou un visuel." },
      { question: "Peut-on traiter plusieurs utilitaires?", answer: "Oui, le projet peut être étudié pour plusieurs véhicules afin de conserver une apparence cohérente." },
      { question: "Le véhicule reste-t-il utilisable pendant la pose?", answer: "Le véhicule est immobilisé le temps nécessaire à la préparation et à la pose. La durée dépend du projet et du nombre de panneaux." },
    ],
    relatedSlugs: ["covering-automobile", "marquage-publicitaire-vehicules", "lettrage-marquage-vitrines"],
  },
  {
    slug: "marquage-publicitaire-vehicules",
    name: "Marquage publicitaire de véhicules",
    shortName: "Marquage publicitaire véhicules",
    title: "Marquage publicitaire de véhicules | APEX LINER",
    description: "Marquage publicitaire de véhicules à Bussigny et dans le canton de Vaud : logo, coordonnées et messages lisibles sur voiture, utilitaire ou flotte.",
    intro: "Un véhicule professionnel est un support de communication mobile. APEX LINER pose des marquages pensés pour rester lisibles en circulation et à l’arrêt, en respectant les lignes du véhicule et les éléments qui doivent rester accessibles.",
    image: "/images/projects-web/marquage-publicitaire-van.jpg",
    imageAlt: "Marquage publicitaire sur un véhicule utilitaire",
    benefits: ["Rendre l’entreprise identifiable sur le terrain", "Afficher logo, activité et coordonnées", "Adapter le marquage à un véhicule ou une flotte", "Privilégier une lecture rapide et une finition nette"],
    supports: ["Voitures de société", "Utilitaires", "Véhicules de chantier ou de service", "Flottes professionnelles"],
    process: [
      { title: "Rassembler les éléments", text: "Logo, couleurs, coordonnées, activité et contraintes de visibilité servent de base au projet." },
      { title: "Composer le marquage", text: "La composition est adaptée aux panneaux disponibles, aux ouvrants et aux proportions du véhicule." },
      { title: "Poser et contrôler", text: "La pose est vérifiée sur chaque côté afin de contrôler la lisibilité, les alignements et les finitions." },
    ],
    faq: [
      { question: "Quels éléments peut-on afficher?", answer: "Un marquage peut intégrer un logo, une activité, un site, une adresse email ou d’autres informations validées pour le support." },
      { question: "Le marquage peut-il être retiré?", answer: "Le retrait dépend du film, de la durée de pose, de la peinture et de l’état du support. Il doit être évalué au cas par cas." },
      { question: "Pouvez-vous marquer une flotte?", answer: "Oui, une série de véhicules peut être étudiée pour obtenir des positions et des finitions cohérentes." },
    ],
    relatedSlugs: ["covering-utilitaire", "covering-automobile", "lettrage-marquage-vitrines"],
  },
  {
    slug: "lettrage-marquage-vitrines",
    name: "Lettrage et marquage de vitrines",
    shortName: "Lettrage vitrines",
    title: "Lettrage et marquage de vitrines | APEX LINER",
    description: "Lettrage et marquage de vitrines à Bussigny et dans le canton de Vaud pour signaler une activité, une offre ou l’identité d’un commerce.",
    intro: "Le lettrage de vitrine transforme une surface vitrée en support d’information visible depuis la rue. Le contenu, la taille, le contraste et le positionnement sont définis selon la façade et la distance de lecture.",
    image: "/images/projects-web/IMG_0344.jpg",
    imageAlt: "Surface vitrée préparée pour un marquage de commerce",
    benefits: ["Identifier clairement un commerce ou un bureau", "Communiquer une activité ou une offre", "Utiliser une vitrine sans travaux de façade", "Choisir une pose discrète ou plus visible"],
    supports: ["Vitrines de commerces", "Portes vitrées", "Façades de bureaux", "Cloisons vitrées intérieures"],
    process: [
      { title: "Cadrer le message", text: "Le texte, le logo, les horaires éventuels et le niveau de visibilité recherché sont réunis." },
      { title: "Adapter la composition", text: "La typographie, l’échelle et le placement sont adaptés à la vitre et à la distance de lecture." },
      { title: "Préparer et poser", text: "La surface est nettoyée puis le marquage est posé avec un contrôle des alignements et des bords." },
    ],
    faq: [
      { question: "Le lettrage est-il adapté aux vitrines de magasins?", answer: "Oui. Il peut servir à présenter le nom, l’activité, les coordonnées ou une information temporaire selon le projet." },
      { question: "Peut-on marquer une porte vitrée?", answer: "Oui, en tenant compte des poignées, des mouvements de porte et de la zone de passage." },
      { question: "Le marquage peut-il être partiel?", answer: "Oui, une seule zone de la vitrine ou quelques lettres peuvent suffire pour obtenir le niveau de visibilité recherché." },
    ],
    relatedSlugs: ["film-solaire-vitrines", "marquage-publicitaire-vehicules", "film-anti-chaleur-vitrages"],
  },
  {
    slug: "protection-solaire-bureaux",
    name: "Protection solaire pour bureaux",
    shortName: "Protection solaire bureaux",
    title: "Protection solaire pour bureaux | APEX LINER",
    description: "Protection solaire des bureaux par film pour vitrages à Bussigny et dans le canton de Vaud : confort des équipes, éblouissement et vitrages existants.",
    intro: "Dans un bureau, l’ensoleillement peut gêner les écrans, créer des écarts de température et rendre certains postes inconfortables. La pose d’un film solaire permet d’agir directement sur les vitrages concernés, avec une intervention adaptée à l’organisation des locaux.",
    image: "/images/projects-web/IMG_0410.jpg",
    imageAlt: "Film adhésif sur les vitrages d’un espace intérieur",
    benefits: ["Réduire les reflets sur les écrans", "Améliorer le confort des postes proches des fenêtres", "Traiter uniquement les façades concernées", "Limiter les travaux dans des bureaux en activité"],
    supports: ["Bureaux individuels", "Open spaces", "Salles de réunion vitrées", "Façades de bâtiments tertiaires"],
    process: [
      { title: "Identifier les gênes", text: "Les postes concernés, les horaires d’ensoleillement et les vitrages exposés sont examinés." },
      { title: "Proposer une réponse", text: "La solution tient compte du confort, de la lumière naturelle, de l’aspect extérieur et du vitrage." },
      { title: "Planifier la pose", text: "L’intervention peut être organisée par zone afin de limiter l’impact sur l’activité des équipes." },
    ],
    faq: [
      { question: "Le film solaire convient-il aux open spaces?", answer: "Oui, lorsque les vitrages et les zones à traiter sont correctement identifiés. La solution peut être limitée aux façades les plus exposées." },
      { question: "Le film règle-t-il tous les problèmes de température?", answer: "Il agit sur les apports solaires au niveau des vitrages, mais ne remplace pas une étude complète du bâtiment ou du système de ventilation." },
      { question: "Peut-on intervenir dans des bureaux occupés?", answer: "Oui, la planification peut prévoir une intervention par secteurs pour réduire la gêne." },
    ],
    relatedSlugs: ["film-solaire-batiment", "film-anti-chaleur-vitrages", "film-solaire-vitrines"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
