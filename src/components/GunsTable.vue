<template>
    <div>
        <h2>Guns Table</h2>
        <table>
            <thead class="table-header">
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Place of Origin</th>
                    <th>Designer</th>
                    <th>Designed</th>
                    <th>Cartridge</th>
                    <th>Muzzle Velocity</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr v-for="gun in guns" :key="gun.id">
                    <td>{{ gun.id }}</td>
                    <td><img class="table-image" :src="gun.image" alt="gun"
                        @click="onClickGunInfoModal()"    
                    >
                    </td>
                    <td>{{ gun.name }}</td>
                    <td>{{ gun.type }}</td>
                    <td>{{ gun.placeOfOrigin }}</td>
                    <td>{{ gun.designer }}</td>
                    <td>{{ gun.designed }}</td>
                    <td>{{ gun.cartridge }}</td>
                    <td>{{ gun.muzzleVelocity }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            guns: [
                {
                    id: 1,
                    image: "AK47.png",
                    name: "AK-47",
                    type: "Assault rifle",
                    placeOfOrigin: "Soviet Union",
                    designer: "Mikhail Kalashnikov",
                    designed: 1947,
                    cartridge: "7.62x39mm",
                    muzzleVelocity: "715 m/s",
                },
                {
                    id: 2,
                    image: "M16.png",
                    name: "M16",
                    type: "Assault rifle",
                    placeOfOrigin: "United States",
                    designer: "Eugene Stoner",
                    designed: 1956,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "960 m/s",
                },
                {
                    id: 3,
                    image: "Glock17.png",
                    name: "Glock 17",
                    type: "Pistol",
                    placeOfOrigin: "Austria",
                    designer: "Gastonia Glock",
                    designed: 1982,
                    cartridge: "9x19mm",
                    muzzleVelocity: "360 m/s",
                },
                {
                    id: 4,
                    image: "MP5.png",
                    name: "MP5",
                    type: "Submachine gun",
                    placeOfOrigin: "Germany",
                    designer: "Heckler & Koch",
                    designed: 1966,
                    cartridge: "9x19mm",
                    muzzleVelocity: "400 m/s",
                },
                {
                    id: 5,
                    image: "M1911.png",
                    name: "M1911",
                    type: "Pistol",
                    placeOfOrigin: "United States",
                    designer: "John Browning",
                    designed: 1911,
                    cartridge: ".45 ACP",
                    muzzleVelocity: "250 m/s",
                },
                {
                    id: 6,
                    image: "FAMAS.png",
                    name: "FAMAS",
                    type: "Assault rifle",
                    placeOfOrigin: "France",
                    designer: "Denis Hecker",
                    designed: 1978,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "920 m/s",
                },
                {
                    id: 7,
                    image: "TavorTAR21.png",
                    name: "Tavor TAR-21",
                    type: "Bullpup assault rifle",
                    placeOfOrigin: "Israel",
                    designer: "Israel Military Industries",
                    designed: 2001,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "910 m/s",
                },
                {
                    id: 8,
                    image: "DesertEagle.png",
                    name: "Desert Eagle",
                    type: "Pistol",
                    placeOfOrigin: "Israel/USA",
                    designer: "Magnum Research",
                    designed: 1982,
                    cartridge: ".44 Magnum",
                    muzzleVelocity: "440 m/s",
                },
                {
                    id: 9,
                    image: "SCARL.png",
                    name: "SCAR-L",
                    type: "Assault rifle",
                    placeOfOrigin: "Belgium/USA",
                    designer: "FN Herstal",
                    designed: 2004,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "710 m/s",
                },
                {
                    id: 10,
                    image: "Remington700.png",
                    name: "Remington 700",
                    type: "Bolt-action rifle",
                    placeOfOrigin: "United States",
                    designer: "Mike Walker",
                    designed: 1962,
                    cartridge: ".308 Winchester",
                    muzzleVelocity: "830 m/s",
                },
                {
                    id: 11,
                    image: "P90.png",
                    name: "P90",
                    type: "Personal defense weapon",
                    placeOfOrigin: "Belgium",
                    designer: "FN Herstal",
                    designed: 1990,
                    cartridge: "5.7x28mm",
                    muzzleVelocity: "715 m/s",
                },
                {
                    id: 12,
                    image: "L96A1.png",
                    name: "L96A1",
                    type: "Bolt-action sniper rifle",
                    placeOfOrigin: "United Kingdom",
                    designer: "Accuracy International",
                    designed: 1982,
                    cartridge: ".338 Lapua Magnum",
                    muzzleVelocity: "900 m/s",
                },
                {
                    id: 13,
                    image: "M249SAW.png",
                    name: "M249 SAW",
                    type: "Light machine gun",
                    placeOfOrigin: "Belgium",
                    designer: "FN Herstal",
                    designed: 1984,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "915 m/s",
                },
                {
                    id: 14,
                    image: "M4Carbine.png",
                    name: "M4 Carbine",
                    type: "Carbine",
                    placeOfOrigin: "United States",
                    designer: "Eugene Stoner",
                    designed: 1994,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "910 m/s",
                },
                {
                    id: 15,
                    image: "SteyrAUG.png",
                    name: "Steyr AUG",
                    type: "Bullpup assault rifle",
                    placeOfOrigin: "Austria",
                    designer: "Steyr Mannlicher",
                    designed: 1977,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "900 m/s",
                },
                {
                    id: 16,
                    image: "SIGP226.png",
                    name: "SIG P226",
                    type: "Pistol",
                    placeOfOrigin: "Switzerland",
                    designer: "SIG Sauer",
                    designed: 1984,
                    cartridge: "9x19mm",
                    muzzleVelocity: "350 m/s",
                },
                {
                    id: 17,
                    image: "CZ75.png",
                    name: "CZ-75",
                    type: "Pistol",
                    placeOfOrigin: "Czech Republic",
                    designer: "Josef and František Koucký",
                    designed: 1975,
                    cartridge: "9x19mm",
                    muzzleVelocity: "350 m/s",
                },
                {
                    id: 18,
                    image: "RugerMini14.png",
                    name: "Ruger Mini-14",
                    type: "Rifle",
                    placeOfOrigin: "United States",
                    designer: "William Ruger",
                    designed: 1974,
                    cartridge: "5.56x45mm NATO",
                    muzzleVelocity: "975 m/s",
                },
                {
                    id: 19,
                    image: "BrowningHiPower.png",
                    name: "Browning Hi-Power",
                    type: "Pistol",
                    placeOfOrigin: "Belgium",
                    designer: "John Browning",
                    designed: 1935,
                    cartridge: "9x19mm",
                    muzzleVelocity: "360 m/s",
                },
                {
                    id: 20,
                    image: "Mossberg500.png",
                    name: "Mossberg 500",
                    type: "Shotgun",
                    placeOfOrigin: "United States",
                    designer: "Mossberg & Sons",
                    designed: 1960,
                    cartridge: "12 gauge",
                    muzzleVelocity: "400 m/s",
                },
                {
                    id: 21,
                    image: "FNFAL.png",
                    name: "FN FAL",
                    type: "Battle rifle",
                    placeOfOrigin: "Belgium",
                    designer: "Dieudonné Saive",
                    designed: 1953,
                    cartridge: "7.62x51mm NATO",
                    muzzleVelocity: "840 m/s",
                },
                {
                    id: 22,
                    image: "Beretta92.png",
                    name: "Beretta 92",
                    type: "Pistol",
                    placeOfOrigin: "Italy",
                    designer: "Beretta",
                    designed: 1975,
                    cartridge: "9x19mm",
                    muzzleVelocity: "400 m/s",
                },
                {
                    id: 23,
                    image: "TikkaT3.png",
                    name: "Tikka T3",
                    type: "Bolt-action rifle",
                    placeOfOrigin: "Finland",
                    designer: "Tikka",
                    designed: 2003,
                    cartridge: ".308 Winchester",
                    muzzleVelocity: "830 m/s",
                },
            ]
        };
    },
};
</script>

<style></style>