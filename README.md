# Description
Demo project for issue https://github.com/TriPSs/nestjs-query/issues/255

# How to reproduce?
1. `docker-compose build`
2. `docke-compose up -d`
3. Open http://127.0.0.1:3000/graphql
4. Execute query:
```
query Nodes {
  users {
    nodes {
      name
      address {
        zip
        stateId
      }
      id
    }
  }
}
```

# Expected result

1. It is expected that it will be possible to get stateId
2. It is expected that in user.address will be an expandable `state` field:  
```
query Nodes {
  users {
    nodes {
      name
      address {
        zip
        stateId
        state {
          id
          name
        }
      }
      id
    }
  }
}
```