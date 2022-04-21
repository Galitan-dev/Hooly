# Base de Données

## Table: Foodtrucks

- Nom: Foodtrucks
- Commentaire: Permet de stocker les profils des foodtrucks

### Clé Principale

- Colonne: ID

### Colonnes

| Nom  | Description     | Type               | Nullable | Commentaire |
| ---- | --------------- | ------------------ | -------- | ----------- |
| ID   | Id du Foodtruck | int auto_increment | false    |             |
| Name | Nom Foodtruck   | varchar(50)        | false    |             |

## Table: Spaces

- Nom: Spaces
- Commentaire: Permet de stocker les différents emplacements

### Clé Principale

- Colonne: ID

### Colonnes

| Nom  | Description         | Type               | Nullable | Commentaire                              |
| ---- | ------------------- | ------------------ | -------- | ---------------------------------------- |
| ID   | Id de l'emplacement | int auto_increment | false    |                                          |
| Days | Jours d'ouverture   | int                | true     | Au format binaire: 1 = ouvert, 0x1111011 |

## Table: Bookings

- Nom: Bookings
- Commentaire: Permet de stocker les réservations des emplacements

### Clé Principale

- Colonne: ID

### Colonnes

| Nom         | Description          | Type               | Nullable | Commentaire |
| ----------- | -------------------- | ------------------ | -------- | ----------- |
| ID          | Id de la réservation | int auto_increment | false    |             |
| SpaceID     | Id de l'emplacement  | int                | false    |             |
| FoodtruckID | ID du foodtruck      | int                | false    |             |
| Date        | ID du foodtruck      | date               | false    |             |