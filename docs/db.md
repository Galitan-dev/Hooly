# Base de Données

## Table: Foodtrucks

- Nom: Foodtrucks
- Commentaire: Permet de stocker les reservations des foodtrucks

### Clé Principale

- Colonne: ID

### Colonnes

| Nom     | Description                 | Type               | Nullable | Commentaire |
| ------- | --------------------------- | ------------------ | -------- | ----------- |
| ID      | Id du Foodtruck             | int auto_increment | false    |             |
| Name    | Nom Foodtruck               | varchar(50)        | false    |             |
| SpaceID | Id de l'emplacement réservé | int                | true     |             |

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