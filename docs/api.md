# API

## Foodtrucks

### Créer un foodtruck

```ruby
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

```ruby
  GET /foodtrucks/me
```

*Nécessite d'être connecté*

### Se connecter à un foodtruck

```ruby
  POST /auth/login
```

#### Corps

| Champ        | Type      | Description                           |
| ------------ | --------- | ------------------------------------- |
| `name`       | `string`  | Le nom du foodtruck                   |
| `password`   | `string`  | Le mot de pase à utiliser             |
| `rememberMe` | `boolean` | Si le navigateur doit rester connecté |

### Se déconnecter du foodtruck

```ruby
  GET /auth/logout
```

*Nécessite d'être connecté*

## Spaces

### Lister les emplacements

<<<<<<< HEAD
```http
  GET /spaces/
=======
```ruby
  GET /bookings
>>>>>>> eb04675e24ab6b184187383eac88c82473101931
```

### Afficher un  emplacement

<<<<<<< HEAD
```http
  GET /spaces/:id
=======
```ruby
  GET /bookings/:id
>>>>>>> eb04675e24ab6b184187383eac88c82473101931
```

## Bookings

### Créer une réservation

```ruby
  POST /bookings/create
```

#### Corps

| Champ     | Type                                                 | Description                      |
| --------- | ---------------------------------------------------- | -------------------------------- |
| `spaceId` | `number`                                             | L'id de l'emplacement à réserver |
| `date`    | `date` sous le format `yyyy-MM-dd`, ex: `2022-04-28` | La journée à réserver            |

*Nécessite d'être connecté*

### Lister ses réservation

```ruby
  GET /bookings/
````

*Nécessite d'être connecté*

### Afficher une réservation

```ruby
  GET /bookings/:id
```

### Lister les réservation d'une journée

```ruby
  GET /bookings/
```

#### Paramètres (Search Query)

| Champ   | Type                                                 | Description       |
| ------- | ---------------------------------------------------- | ----------------- |
| `ofDay` | `date` sous le format `yyyy-MM-dd`, ex: `2022-04-28` | La journée ciblée |

### Lister les réservation d'une semaine


```ruby
  GET /bookings/
```

#### Paramètres (Search Query)

| Champ    | Type                                                 | Description                          |
| -------- | ---------------------------------------------------- | ------------------------------------ |
| `ofWeek` | `date` sous le format `yyyy-MM-dd`, ex: `2022-04-28` | Le premier jour de la semaine ciblée |

### Annuler une réservation

```ruby
  GET /bookings/remove/:id
``` 

*Nécessite d'être connecté*
