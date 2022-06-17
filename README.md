# Install

```sh
pnpm install
```

# Structure

```sh
├── libs
└── workspaces
    ├── backend
    └── frontend
```

- workspaces
  - backend: contains all main servers
  - frontend: contains all main apps

# Useful commands

- remove all folders includes nested folders inside monorepo

```sh
pnpm -r exec -- rm -rf <folder name>
```
