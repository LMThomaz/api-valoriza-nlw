# Dicas para desenvolvimento

- Para inicializar o typescript no projeto

  ```bash
    yarn tsc --init
  ```

---

## Migrations

- Criar a migration

  ```bash
    yarn typeorm migration:create -n <name_migration>
  ```

- Executar as migrations

  ```bash
    yarn typeorm migration:run
  ```

- Reverter as migrations

  ```bash
    yarn typeorm migration:revert
  ```
