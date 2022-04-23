# Base de Données

## Table: Foodtrucks

- Nom: Foodtrucks
- Commentaire: Permet de stocker les profils des foodtrucks

### Clé Principale

- Colonne: id

### Colonnes

| Nom               | Description               | Type         | Nullable | Commentaire |
| ----------------- | ------------------------- | ------------ | -------- | ----------- |
| id                | Id du Foodtruck           | int(4)       | false    |             |
| name              | Nom Foodtruck             | varchar(50)  | false    |             |
| password          | Mot de Passe du Foodtruck | varchar(180) | false    |             |
| remember_me_token | Jeton de mémoire          | varchar      | false    |             |

## Table: Spaces

- Nom: Spaces
- Commentaire: Permet de stocker les différents emplacements

### Clé Principale

- Colonne: id

### Colonnes

| Nom  | Description         | Type   | Nullable | Commentaire                              |
| ---- | ------------------- | ------ | -------- | ---------------------------------------- |
| id   | Id de l'emplacement | int(4) | false    |                                          |
| days | Jours d'ouverture   | int(8) | true     | Au format binaire: 1 = ouvert, 0x1111011 |

## Table: Bookings

- Nom: Bookings
- Commentaire: Permet de stocker les réservations des emplacements

### Clé Principale

- Colonne: ID

### Colonnes

| Nom         | Description          | Type   | Nullable | Commentaire |
| ----------- | -------------------- | ------ | -------- | ----------- |
| id          | Id de la réservation | int(4) | false    |             |
| spaceId     | Id de l'emplacement  | int(4) | false    |             |
| foodtruckId | ID du foodtruck      | int(4) | false    |             |
| date        | ID du foodtruck      | date   | false    |             |