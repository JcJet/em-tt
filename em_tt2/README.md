## Решение
```
  async solveProblems(): Promise<number> {
    const updateResult = await this.usersRepository.update(
        {
          problems: true
        },
        { problems: false },
      );
    return updateResult.affected;
  }
```

## Установка

```bash
npm i
```
Необходимо задать параметры подключения к БД и порт сервера в файле:
```
.dev.env
```
Затем, запустить процесс заполнения бд:
```
npm run mig-run
npm run seed
```
Запуск сервера:
```
npm run start:dev
```
Эндпоинт задания:
```
GET localhost:3000/user/solveProblems/
```
