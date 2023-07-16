1. Добавил `config` файлы для commitlint и добавил workflows для github [commitlint.yml](https://github.com/AparinAA/unit-demo-cra/blob/dev1/.github/workflows/commitlint.yml) . Делать коммит для проверки с именем `'refactor: commitText'` , либо в любов виде: соглашаения о коммитах.
2. Добавил [testpr.yml](https://github.com/AparinAA/unit-demo-cra/blob/dev1/.github/workflows/testpr.yml) для запуска тестирования и проверки линтером кода при pull requests. В котором есть jobs - `lint`, `unit-tests`, `e2e-tests`, где вызывают виртуалку-убунту и запускаются команды для установки зависимостей, установка `plyawright` и запуск тестов и литера. (пул реквест делать в свою репу 'main')

В этом репозитории находится пример приложения с тестами:

-   [e2e тесты](e2e/example.spec.ts)
-   [unit тесты](src/example.test.tsx)

Для запуска примеров необходимо установить [NodeJS](https://nodejs.org/en/download/) 16 или выше.

Как запустить:

```sh
# установить зависимости
npm ci

# запустить приложение
npm start
```

Как запустить e2e тесты:

```sh
# скачать браузеры
npx playwright install

# запустить тесты
npm run e2e
```

Как запустить модульные тесты:

```sh
npm test
```
