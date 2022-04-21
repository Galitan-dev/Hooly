# Base de Données

## Table: Foodtrucks

- Nom: Foodtrucks
- Commentaire: Permet de stocker les profils des foodtrucks

### Clé Principale

- Colonne: id

### Colonnes

| Nom      | Description               | Type               | Nullable | Commentaire |
| -------- | ------------------------- | ------------------ | -------- | ----------- |
| id       | Id du Foodtruck           | int auto_increment | false    |             |
| name     | Nom Foodtruck             | varchar(50)        | false    |             |
| password | Mot de Passe du Foodtruck | varchar(50)        | false    |             |

## Table: Spaces

- Nom: Spaces
- Commentaire: Permet de stocker les différents emplacements

### Clé Principale

- Colonne: id

### Colonnes

| Nom  | Description         | Type               | Nullable | Commentaire                              |
| ---- | ------------------- | ------------------ | -------- | ---------------------------------------- |
| id   | Id de l'emplacement | int auto_increment | false    |                                          |
| days | Jours d'ouverture   | int                | true     | Au format binaire: 1 = ouvert, 0x1111011 |

## Table: Bookings

- Nom: Bookings
- Commentaire: Permet de stocker les réservations des emplacements

### Clé Principale

- Colonne: ID

### Colonnes

| Nom         | Description          | Type               | Nullable | Commentaire |
| ----------- | -------------------- | ------------------ | -------- | ----------- |
| id          | Id de la réservation | int auto_increment | false    |             |
| spaceId     | Id de l'emplacement  | int                | false    |             |
| foodtruckId | ID du foodtruck      | int                | false    |             |
| date        | ID du foodtruck      | date               | false    |             |