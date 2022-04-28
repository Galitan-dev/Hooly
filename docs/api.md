# API

## Foodtrucks

### Créer un foodtruck

```http
  POST /foodtrucks/create
```

#### Corps

| Champ             | Type      | Description                           |
| ----------------- | --------- | ------------------------------------- |
| `name`            | `string`  | Le nom du foodtruck                   |
| `password`        | `string`  | Le mot de pase à utiliser             |
| `confirmPassword` | `string`  | Doit être identique au `password`     |
| `rememberMe`      | `boolean` | Si le navigateur doit rester connecté |

### Afficher le foodtruck connecté

```http
  GET /foodtrucks/me
```

*Nécessite d'être connecté*

### Se connecter à un foodtruck

```http
  POST /auth/login
```

#### Corps

| Champ        | Type      | Description                           |
| ------------ | --------- | ------------------------------------- |
| `name`       | `string`  | Le nom du foodtruck                   |
| `password`   | `string`  | Le mot de pase à utiliser             |
| `rememberMe` | `boolean` | Si le navigateur doit rester connecté |

### Se déconnecter du foodtruck

```http
  GET /auth/logout
```

*Nécessite d'être connecté*

## Spaces

### Lister les emplacements

```http
  GET /bookings
```

### Afficher une réservation

```http
  GET /bookings/:id
```

## Bookings

### Créer une réservation

```http
  POST /bookings/create
```

#### Corps

| Champ     | Type                                                 | Description                      |
| --------- | ---------------------------------------------------- | -------------------------------- |
| `spaceId` | `number`                                             | L'id de l'emplacement à réserver |
| `date`    | `date` sous le format `yyyy-MM-dd`, ex: `2022-04-28` | La journée à réserver            |

*Nécessite d'être connecté*

### Lister ses réservation

```http
  GET /bookings
```

*Nécessite d'être connecté*

### Afficher une réservation

```http
  GET /bookings/:id
```

### Lister les réservation d'une journée

```http
  GET /bookings
```

#### Paramètres (Search Query)

| Champ   | Type                                                 | Description       |
| ------- | ---------------------------------------------------- | ----------------- |
| `ofDay` | `date` sous le format `yyyy-MM-dd`, ex: `2022-04-28` | La journée ciblée |

### Lister les réservation d'une semaine

```http
  GET /bookings
```

#### Paramètres (Search Query)

| Champ    | Type                                                 | Description                          |
| -------- | ---------------------------------------------------- | ------------------------------------ |
| `ofWeek` | `date` sous le format `yyyy-MM-dd`, ex: `2022-04-28` | Le premier jour de la semaine ciblée |

### Annuler une réservation

```http
  GET /bookings/remove/:id
``` 

*Nécessite d'être connecté*
