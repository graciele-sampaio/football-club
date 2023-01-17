const allMatches = [
  {
    "id": 1,
    "homeTeamGoals": 1,
    "homeTeam": 16,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamGoals": 1,
    "homeTeam": 9,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Internacional"
    },
    "teamAway": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeamGoals": 3,
    "homeTeam": 4,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Corinthians"
    },
    "teamAway": {
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeamGoals": 0,
    "homeTeam": 3,
    "awayTeam": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "teamName": "Botafogo"
    },
    "teamAway": {
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeamGoals": 1,
    "homeTeam": 7,
    "awayTeam": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Flamengo"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
  {
    "id": 6,
    "homeTeamGoals": 1,
    "homeTeam": 5,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 7,
    "homeTeamGoals": 2,
    "homeTeam": 12,
    "awayTeam": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 8,
    "homeTeamGoals": 0,
    "homeTeam": 15,
    "awayTeam": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São José-SP"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 9,
    "homeTeamGoals": 0,
    "homeTeam": 1,
    "awayTeam": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 10,
    "homeTeamGoals": 0,
    "homeTeam": 2,
    "awayTeam": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Bahia"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
]

const inProgress = [
  {
    "id": 41,
    "homeTeamGoals": 2,
    "homeTeam": 16,
    "awayTeam": 9,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "São Paulo"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
  {
    "id": 42,
    "homeTeamGoals": 1,
    "homeTeam": 6,
    "awayTeam": 1,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Ferroviária"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 43,
    "homeTeamGoals": 0,
    "homeTeam": 11,
    "awayTeam": 10,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "teamName": "Napoli-SC"
    },
    "teamAway": {
      "teamName": "Minas Brasília"
    }
  },
]

const insertMatch = {
  "homeTeam": 16, 
  "awayTeam": 8, 
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}


const insertedMatch =   {
  dataValues: {
    "id": 49,
    "homeTeamGoals": 1,
    "homeTeam": 13,
    "awayTeam": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
  }
}

  const matchesWithEqualsIds = {
    "homeTeam": 120,
    "awayTeam": 120,
    "awayTeamGoals": 1,
    "homeTeamGoals": 1,
  }

  const matchesWithIdsInonexistent = {
    "homeTeam": 130,
    "awayTeam": 120,
    "awayTeamGoals": 1,
    "homeTeamGoals": 1,
  }


export default { allMatches, inProgress, insertMatch, insertedMatch, matchesWithEqualsIds, matchesWithIdsInonexistent };