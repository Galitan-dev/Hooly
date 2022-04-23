# API

## Foodtrucks

### Créer un foodtruck

```http
  POST /foodtrucks/create
```

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
