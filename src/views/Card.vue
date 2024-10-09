<template>
  <h2>Cards</h2>
  <div class="card-responsive">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <GunCard v-for="gun in guns" :key="gun.id" :id="gun.id" @detailsModalHandling="detailsModalHandler">
        <template v-slot:image>
          <img :src="gun.image" :alt="gun.name" class="card-image" />
        </template>
        <template v-slot:name>
          <h5>{{ gun.name }}</h5>
        </template>
      </GunCard>
    </div>

    <GunModal :name="selectedGun.name">
      <div class="modal-content">
        <img v-if="selectedGun.image" :src="selectedGun.image" :alt="selectedGun.name"
          class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 modal-image" />
        <div v-html="descFormat" class="modal-description"></div>
      </div>
    </GunModal>
  </div>
</template>

<script>
import GunCard from "../components/GunCard.vue";
import GunModal from "../components/GunModal.vue";
class Gun {
  constructor(data) {
    Object.assign(this, data);
  }
}
export default {
  components: {
    GunCard,
    GunModal,
  },
  data() {
    return {
      selectedGun: new Gun({}),
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
          description: [
            "The AK-47, officially known as the Avtomat Kalashnikova, is a gas-operated assault rifle that became one of the most widely used firearms in the world.",
            "Its design emphasizes simplicity and reliability, making it effective in harsh conditions. The AK-47 is renowned for its durability and ability to function under adverse circumstances.",
          ],
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
          description: [
            "The M16 is a lightweight, air-cooled, gas-operated rifle known for its accuracy and effectiveness in combat.",
            "It features a modular design, allowing for various attachments and configurations. The M16 has served as the standard infantry rifle for the U.S. military and has undergone numerous improvements since its introduction.",
          ],
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
          description: [
            "The Glock 17 is a semi-automatic pistol designed for reliability and ease of use. It features a polymer frame, making it lightweight and durable.",
            "With a high magazine capacity and a reputation for accuracy, the Glock 17 has become a favorite among law enforcement and military personnel worldwide.",
          ],
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
          description: [
            "The MP5 is a compact submachine gun widely recognized for its accuracy and controllability in close-quarters combat.",
            "Its roller-delayed blowback system allows for a smooth shooting experience, making it a popular choice among special forces and law enforcement units.",
          ],
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
          description: [
            "The M1911 is a single-action, semi-automatic pistol renowned for its stopping power and accuracy.",
            "Developed by John Browning, it has served as the standard-issue sidearm for the U.S. military for much of the 20th century and remains popular among enthusiasts and professionals today.",
          ],
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
          description: [
            "The FAMAS is a bullpup assault rifle known for its distinctive design and versatility.",
            "It features a high rate of fire and is capable of semi-automatic and fully automatic modes, making it effective in various combat scenarios.",
          ],
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
          description: [
            "The Tavor TAR-21 is a modern bullpup assault rifle that combines compactness with accuracy.",
            "Designed for urban warfare, it offers a unique layout that allows for quick handling and maneuverability while maintaining a full-length barrel.",
          ],
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
          description: [
            "The Desert Eagle is a large, gas-operated semi-automatic pistol known for its high caliber and distinctive appearance.",
            "Often seen in films, it is favored for its power and accuracy, though its weight and size make it less practical for everyday carry.",
          ],
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
          description: [
            "The SCAR-L (Special Operations Forces Combat Assault Rifle) is designed for special operations forces and is known for its modularity and adaptability.",
            "It features a lightweight construction, making it suitable for various combat environments and conditions.",
          ],
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
          description: [
            "The Remington 700 is a highly accurate bolt-action rifle often used by military snipers and sport shooters.",
            "Renowned for its reliability and customizable options, it has become a favorite among enthusiasts and professionals alike.",
          ],
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
          description: [
            "The P90 is a compact personal defense weapon that features a unique bullpup design and high-capacity magazine.",
            "It is designed for close-quarters combat, providing effective firepower with minimal recoil.",
          ],
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
          description: [
            "The L96A1 is a bolt-action sniper rifle known for its accuracy and long-range capabilities.",
            "Used by military and law enforcement snipers, it is designed for precision shooting in various environments.",
          ],
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
          description: [
            "The M249 SAW (Squad Automatic Weapon) is a light machine gun designed for sustained fire in support of infantry units.",
            "Its belt-fed system allows for continuous operation, making it a vital asset on the battlefield.",
          ],
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
          description: [
            "The M4 Carbine is a shorter, lightweight variant of the M16 rifle, designed for versatility and maneuverability.",
            "It is widely used by the U.S. military and features a modular design, allowing for various accessories and attachments.",
          ],
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
          description: [
            "The Steyr AUG is a bullpup assault rifle recognized for its innovative design and integrated optical sight.",
            "Its compact form factor and versatility make it effective for various combat situations.",
          ],
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
          description: [
            "The SIG P226 is a full-size, semi-automatic pistol known for its reliability and accuracy.",
            "It is widely used by military and law enforcement agencies around the world, praised for its ergonomic design and performance.",
          ],
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
          description: [
            "The CZ-75 is a semi-automatic pistol with a reputation for its high capacity and accuracy.",
            "Its all-steel construction provides durability, and it has been widely adopted by various military and law enforcement agencies.",
          ],
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
          description: [
            "The Ruger Mini-14 is a lightweight, gas-operated semi-automatic rifle designed for versatility.",
            "It is popular for both sport shooting and hunting, featuring a traditional rifle design that appeals to enthusiasts.",
          ],
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
          description: [
            "The Browning Hi-Power is a classic semi-automatic pistol known for its high magazine capacity and reliability.",
            "Designed by John Browning, it has been used by military forces around the world for decades.",
          ],
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
          description: [
            "The Mossberg 500 is a pump-action shotgun known for its versatility and reliability.",
            "It can be configured for various roles, including hunting, home defense, and law enforcement, making it a popular choice among shotgun enthusiasts.",
          ],
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
          description: [
            "The FN FAL is a battle rifle known for its robustness and effectiveness in combat.",
            "Adopted by many military forces worldwide, it offers semi-automatic and full-automatic firing modes, making it versatile for various battlefield scenarios.",
          ],
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
          description: [
            "The Beretta 92 is a semi-automatic pistol favored for its accuracy and reliability.",
            "It features an open-slide design that enhances feeding reliability and is used by military and police forces globally.",
          ],
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
          description: [
            "The Tikka T3 is a bolt-action rifle celebrated for its accuracy and smooth operation.",
            "It is designed for both sport shooting and hunting, with a wide range of calibers and configurations available.",
          ],
        },
      ],
    };
  },
  methods: {
    detailsModalHandler(id) {
      const foundGun = this.guns.find((g) => g.id === id.id);
      if (foundGun) {
        this.selectedGun = new Gun(foundGun);
      } else {
        this.selectedGun = new Gun({});
      }
    },
  },
  computed: {
    descFormat() {
      return this.selectedGun.description && this.selectedGun.description.length
        ? this.selectedGun.description.map((d) => `<p>${d}</p>`).join("")
        : `<p>No description available</p>`;
    },
  },
};
</script>