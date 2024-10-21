# Mi a feladat?
Kreálni egy weboldalt, amin egy adatszerkezetből táblázatot és kártyákat csinálunk. A weboldal célja, hogy bemutassa a fegyverek adatait interaktív és vizuális formában.

## Általános leírás
Ez a projekt egy webalkalmazás, amely lehetővé teszi a felhasználók számára, hogy különböző fegyverek adatait böngésszék, keresgéljenek és szűrjenek. A felhasználók egyszerűen át tudnak váltani a táblázatos és kártyás megjelenítés között, így kényelmesen tudják átnézni az információkat.

## Milyen technológiát használunk
- **Backend**: Node.js és Express.js a szerveroldali logikához.
- **Frontend**: Vue.js a felhasználói felület dinamikus kezeléséhez.
- **Dizájn**: CSS és Bootstrap az esztétikus megjelenés érdekében.
# Menüpontok, funkciók
Mi van az egyes menüpontok alatt és mit lehet csinálni általánosan

## Home
A kezdőoldal, amely áttekintést ad a weboldal funkcióiról és navigációs lehetőségeiről.

## Táblázat
Itt található a fegyverek részletes listája táblázatos formában. A táblázat lehetővé teszi a felhasználók számára, hogy rendezzenek és szűrjenek az adatok között.

## Kártyák
Ez a szekció a fegyverek vizuális bemutatását szolgálja kártyák formájában. Minden kártya részletes információkat tartalmaz az adott fegyverről.

## Keresés
A keresési funkció lehetővé teszi a felhasználók számára, hogy a fegyverek közül keressenek név, típus vagy egyéb attribútumok alapján.

## Szűrés
A felhasználók szűrhetik a táblázatban megjelenő fegyvereket különböző kategóriák szerint, mint például típus vagy származási hely.

# Adatforrás
A táblázat funkcióját a következőképpen írhatjuk le:
- **Oszlopok**: A táblázat oszlopai tartalmazzák a fegyverek nevét, típusát, származási helyét, tervezőjét, gyártási évét, lőszertípusát, csősebességét és leírását.
- **Fizikai elhelyezkedés**: Az adatokat JSON formátumban tároljuk a projekt forrásfájljai között.
- **Technológia**: A frontenden Vue.js-t használunk az adatok megjelenítéséhez, míg a backend MongoDB-t használ az adatok tárolásához és lekérdezéséhez.

```
<!-- Egy kódrészlet a tábláról: -->
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
    //...
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
A táblázat lehetővé teszi a felhasználók számára, hogy könnyen áttekintsék a fegyverek adatait, és egyszerűen rendezzék és szűrjék azokat.

### Mely fájlok, komponensek
A táblázat funkcióját a `Table.vue` valósítja meg, amely a `GunInfo.vue` komponenssel dolgozik az adatok megjelenítése érdekében.

### Szerkezet
A táblázat felépítése tartalmazza az oszlopokat, amelyek a fegyverek különböző jellemzőit mutatják.

### Vizualizálás módja, dizájn
A táblázat stílusát a `my.css` fájlban határozzuk meg, ahol a felhasználói élményt javító CSS stílusokat alkalmazunk.

### Sorbarakás
A táblázat oszlopainak kattintható fejlécei lehetővé teszik a felhasználók számára, hogy a kívánt szempontok szerint sorba rendezzék az adatokat.

### Egyéb funkciók
A táblázatban lehetőség van keresésre és szűrésre is, amelyek segítik az adatok gyors megtalálását.

## Kártyák
A kártyák a fegyverek vizuális reprezentációját nyújtják, lehetővé téve a felhasználók számára, hogy részletes információkat kapjanak a kiválasztott fegyverekről.

## Keresés
A keresés funkció lehetővé teszi, hogy a felhasználók könnyen megtalálják a kívánt fegyvereket a név, típus vagy más jellemzők alapján.

### A keresés mechanizmusa
A keresés a Vue.js keretrendszer segítségével valósul meg, amely reagál a felhasználói inputokra és dinamikusan frissíti a megjelenített adatokat.

## Szűrés
A szűrés lehetővé teszi a felhasználók számára, hogy meghatározott kategóriák szerint csökkentsék a megjelenített fegyverek számát, ezáltal könnyebben megtalálják az érdeklődésüknek megfelelő példányokat.
