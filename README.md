# Mi a feladat?

## Általános leírás

## Milyen technológiát használunk
- **Backend**: Node.js és Express.js a szerveroldali logikához.
- **Frontend**: Vue.js a felhasználói felület dinamikus kezeléséhez.
- **Dizájn**: CSS és Bootstrap az esztétikus megjelenés érdekében.
# Menüpontok, funkciók

## Home

## Táblázat

## Kártyák

## Keresés

# Adatforrás
A táblázat funkcióját a következőképpen írhatjuk le:
- **Oszlopok**: A táblázat oszlopai tartalmazzák a fegyverek nevét, típusát, származási helyét, tervezőjét, gyártási évét, lőszertípusát, csősebességét és leírását.
- **Fizikai elhelyezkedés**: Az adatokat JSON formátumban tároljuk a projekt forrásfájljai között.
- **Technológia**: A frontenden Vue.js-t használunk az adatok megjelenítéséhez, míg a backend MongoDB-t használ az adatok tárolásához és lekérdezéséhez.
Egy kódrészlet a tábláról:
```js
guns: [
        {
          id: 1,
          image: "AK47.png",
          name: "AK-47",
          type: "Assault rifle",
          placeOfOrigin: "Soviet Union",
          designer: "Mikhail Kalashnikov",
          designed: "1947",
          cartridge: "7.62x39mm",
          muzzleVelocity: "715 m/s",
          description: [
            "The AK-47, officially known as the Avtomat Kalashnikova, is a gas-operated assault rifle that became one of the most widely used firearms in the world. Its design is based on simplicity, reliability, and ease of production, which contributed to its mass adoption by various military forces.",
            "Renowned for its durability, the AK-47 can function effectively in harsh conditions, including extreme temperatures and dirt. Its 7.62x39mm cartridge offers a good balance between recoil and stopping power, making it a favored choice in many conflicts around the globe.",
          ],
        },
        {...}
    ...
]        
```

# A program részletezése
## Könyvtár és állomány szerkezet, modulok
A projekt mappaszerkezete a következőképpen alakul:
- **views/**: A Vue.js nézetek tárolására.
  - `Home.vue`: A kezdőoldal.
  - `Table.vue`: A táblázatos megjelenítés.
  - `Card.vue`: A kártyás megjelenítés.
- **components/**: Újrafelhasználható komponensek.
  - `GunCard.vue`: Egy kártya megjelenítése.
  - `GunModal.vue`: A részletes információk megjelenítése modális ablakban.
- **App.vue**: A fő alkalmazás fájl, amely a navigációt és a keresést kezeli.
- **assets/**: Statikus fájlok, például képek.
- **my.css**: A stíluslap a vizuális megjelenéshez.

## Home megvalósítása
A `Home.vue` fájl tartalmazza a kezdőoldal tartalmát, beleértve a főcímet és a navigációs menüt.

## Táblázat megvalósítása
### Miért kell a táblázat

### Mely fájlok, komponensek

### Szerkezet

### Vizualizálás módja, dizájn

### Sorbarakás

### Egyéb funkciók

## Kártyák

## Keresés

### A keresés mechanizmusa
