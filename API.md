# Wysa Onboarding Flow

## I. API Design

### 1. Entering Nickname

**API End point :**

`POST /api/user/nickname`

**Request body :**

```
{
  "nickname": "string",
}
```

**Response :**

```
{
  "success": true,
  "message": "Nickname saved successfully."
}


200 OK : If the nickname is saved successfully.
400 Bad Request : If the request body is missing or invalid.
500 Internal Server Error : If there is a server error while saving the nickname.
```

### 2. Selecting Goals

**API End point :**

`POST /api/user/goals`

**Request body :**

```
{
  "goals": ["goal1", "goal2", "goal3"]
}
```

**Response :**

```
{
  "success": true,
  "message": "Goals saved successfully."
}


200 OK : If the goals are saved successfully.
400 Bad Request : If the request body is missing or invalid.
500 Internal Server Error : If there is a server error while saving the goals.
```

### 3. Selecting the duration for which user has been facing the problem

**API End point :**

`POST /api/user/problem-duration`

**Request body :**

```
{
  "problemDuration": "string"
}
```

**Response :**

```
{
  "success": true,
  "message": "Problem duration saved successfully."
}


200 OK : If the problem duration is saved successfully.
400 Bad Request : If the request body is missing or invalid.
500 Internal Server Error : If there is a server error while saving the problem duration.
```

### 4. Time at which user sleeps, Time at which user wakes up, and Total hours of sleep

**API End point :**

`POST /api/user/sleep-pattern`

**Request body :**

```
{
  "sleepPattern": {
    "sleepTime": "hh:mm",
    "wakeUpTime": "hh:mm",
    "totalSleepHours": "integer"
  }
}
```

**Response :**

```
{
  "success": true,
  "message": "Sleep pattern saved successfully."
}


200 OK : If the sleep pattern is saved successfully.
400 Bad Request : If the request body is missing or invalid.
500 Internal Server Error : If there is a server error while saving the sleep pattern.
```

## Database Schema

We can use a NoSQL database like MongoDB to store the user data. The schema for the user collection can be as follows:

```
{
  "_id": ObjectId,
  "nickname": String,
  "goals": [String],
  "problemDuration": String,
  "sleepPattern": {
    "sleepTime": String,
    "wakeUpTime": String,
    "totalSleepHours": Number
  }
}
```

- Each user will have a unique `_id` generated by MongoDB.
- The `nickname` field will store the user's nickname and the `goals` will be an array of strings containing the user's selected goals.
- The `problemDuration` will store the user's selected duration for which they have been facing the problem, and `sleepPattern` will be an embedded document containing the user's selected sleep pattern details.