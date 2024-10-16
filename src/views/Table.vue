<template>
  <h2>Guns Table</h2>
  <div class="table-responsive">
    <table>
      <thead class="table-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Place of Origin</th>
          <th>Designer</th>
          <th>Designed</th>
          <th>Cartridge</th>
          <th>Muzzle Velocity</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="gun in filteredGuns" :key="gun.id">
          <td>{{ gun.id }}</td>
          <td v-html="searchIndicator(gun.name)"></td>
          <td>
            <img class="table-image" :src="gun.image" :alt="gun.name" data-bs-toggle="modal" data-bs-target="#gunModal"
              @click="onClickDetails(gun)" />
          </td>
          <td v-html="searchIndicator(gun.type)"></td>
          <td v-html="searchIndicator(gun.placeOfOrigin)"></td>
          <td v-html="searchIndicator(gun.designer)"></td>
          <td v-html="searchIndicator(gun.designed)"></td>
          <td v-html="searchIndicator(gun.cartridge)"></td>
          <td>{{ gun.muzzleVelocity }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <GunModal v-if="selectedGun" :name="searchIndicator(selectedGun.name)" @close="selectedGun = null">
    <img :src="selectedGun.image" :alt="selectedGun.name"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 modal-image" />
    <div v-html="searchIndicator(descFormat)"></div>
  </GunModal>

</template>

<script>
import GunModal from "../components/GunModal.vue";
export default {
  props: {
    searchedWord: {
      type: String,
      default: null
    }
  },
  components: {
    GunModal,
  },
  data() {
    return {
      selectedGun: null,
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
        {
          id: 2,
          image: "M16.png",
          name: "M16",
          type: "Assault rifle",
          placeOfOrigin: "United States",
          designer: "Eugene Stoner",
          designed: "1956",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "960 m/s",
          description: [
            "The M16 is a lightweight, air-cooled, gas-operated rifle that has been a staple of the U.S. military since the Vietnam War. Its design emphasizes modularity and accuracy, with various configurations and attachments available for specialized missions.",
            "Firing the 5.56x45mm NATO cartridge, the M16 boasts a high muzzle velocity, making it effective for engagements at a distance. Its lightweight design enhances maneuverability, especially in urban environments.",
          ],
        },
        {
          id: 3,
          image: "Glock17.png",
          name: "Glock 17",
          type: "Pistol",
          placeOfOrigin: "Austria",
          designer: "Gastonia Glock",
          designed: "1982",
          cartridge: "9x19mm",
          muzzleVelocity: "360 m/s",
          description: [
            "The Glock 17 is a semi-automatic pistol designed for reliability, ease of use, and high magazine capacity, often carrying 17 rounds in a single magazine. Its polymer frame makes it lightweight and resistant to corrosion.",
            "Widely adopted by law enforcement and military units worldwide, the Glock 17 is known for its accuracy and low recoil, making it suitable for both novice and experienced shooters.",
          ],
        },
        {
          id: 4,
          image: "MP5.png",
          name: "MP5",
          type: "Submachine gun",
          placeOfOrigin: "Germany",
          designer: "Heckler & Koch",
          designed: "1966",
          cartridge: "9x19mm",
          muzzleVelocity: "400 m/s",
          description: [
            "The MP5 is a compact submachine gun recognized for its accuracy, reliability, and controllability in close-quarters combat. It utilizes a roller-delayed blowback operation, which enhances its smooth shooting experience.",
            "With a high rate of fire and compatibility with various accessories, the MP5 has been adopted by numerous military and police units around the world, making it one of the most iconic firearms of its class.",
          ],
        },
        {
          id: 5,
          image: "M1911.png",
          name: "M1911",
          type: "Pistol",
          placeOfOrigin: "United States",
          designer: "John Browning",
          designed: "1911",
          cartridge: ".45 ACP",
          muzzleVelocity: "250 m/s",
          description: [
            "The M1911 is a single-action, semi-automatic pistol that has become a legendary sidearm known for its stopping power and accuracy. Designed by John Browning, it features a steel frame and is known for its ergonomic grip.",
            "Having served as the standard-issue sidearm for the U.S. military for much of the 20th century, the M1911 remains popular among civilians for self-defense and competitive shooting due to its reliable performance.",
          ],
        },
        {
          id: 6,
          image: "FAMAS.png",
          name: "FAMAS",
          type: "Assault rifle",
          placeOfOrigin: "France",
          designer: "Denis Hecker",
          designed: "1978",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "920 m/s",
          description: [
            "The FAMAS is a bullpup assault rifle characterized by its compact design and versatility, allowing for effective use in various combat scenarios. Its distinctive layout positions the action behind the trigger, resulting in a shorter overall length.",
            "With a high rate of fire and the ability to switch between semi-automatic and fully automatic modes, the FAMAS is particularly effective in urban warfare, making it a preferred choice for French armed forces.",
          ],
        },
        {
          id: 7,
          image: "TavorTAR21.png",
          name: "Tavor TAR-21",
          type: "Bullpup assault rifle",
          placeOfOrigin: "Israel",
          designer: "Israel Military Industries",
          designed: "2001",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "910 m/s",
          description: [
            "The Tavor TAR-21 is a modern bullpup assault rifle that combines compactness with precision, designed for rapid combat situations. Its unique layout allows for quick handling, making it highly maneuverable in confined spaces.",
            "With an emphasis on reliability and ease of maintenance, the Tavor features an integrated optical sight and can be easily modified with various attachments, proving its effectiveness in both military and law enforcement roles.",
          ],
        },
        {
          id: 8,
          image: "DesertEagle.png",
          name: "Desert Eagle",
          type: "Pistol",
          placeOfOrigin: "Israel/USA",
          designer: "Magnum Research",
          designed: "1982",
          cartridge: ".44 Magnum",
          muzzleVelocity: "440 m/s",
          description: [
            "The Desert Eagle is a large, gas-operated semi-automatic pistol known for its high caliber and distinctive appearance, often recognized from films and pop culture. It is chambered in powerful calibers such as .44 Magnum and .50 AE.",
            "While its weight and size can make it less practical for everyday carry, the Desert Eagle's stopping power and accuracy at range have made it a popular choice for sport shooting and as a collector's item.",
          ],
        },
        {
          id: 9,
          image: "SCARL.png",
          name: "SCAR-L",
          type: "Assault rifle",
          placeOfOrigin: "Belgium/USA",
          designer: "FN Herstal",
          designed: "2004",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "710 m/s",
          description: [
            "The SCAR-L (Special Operations Forces Combat Assault Rifle) is designed specifically for special operations forces, featuring a modular system that allows for easy customization and adaptability to different combat situations.",
            "Known for its lightweight construction and exceptional accuracy, the SCAR-L is effective in a variety of environments, making it a preferred choice among elite military units worldwide.",
          ],
        },
        {
          id: 10,
          image: "Remington700.png",
          name: "Remington 700",
          type: "Bolt-action rifle",
          placeOfOrigin: "United States",
          designer: "Mike Walker",
          designed: "1962",
          cartridge: ".308 Winchester",
          muzzleVelocity: "830 m/s",
          description: [
            "The Remington 700 is a highly accurate bolt-action rifle favored by military snipers and sport shooters alike. Known for its solid construction and smooth action, it is designed for precision shooting.",
            "Available in various configurations and calibers, the Remington 700 is customizable with numerous aftermarket parts, allowing shooters to tailor the rifle to their specific needs and preferences.",
          ],
        },
        {
          id: 11,
          image: "P90.png",
          name: "P90",
          type: "Personal defense weapon",
          placeOfOrigin: "Belgium",
          designer: "FN Herstal",
          designed: "1990",
          cartridge: "5.7x28mm",
          muzzleVelocity: "715 m/s",
          description: [
            "The P90 is a compact personal defense weapon characterized by its unique bullpup design and high-capacity magazine. Designed for close-quarters combat, it combines a lightweight profile with effective firepower, making it ideal for military and law enforcement applications.",
            "Its 5.7x28mm cartridge is engineered for low recoil and high velocity, enabling shooters to maintain accuracy during rapid fire. The P90’s innovative design features an integrated reflex sight and ambidextrous controls, enhancing usability in various tactical situations. Its distinctive appearance and effectiveness have made it a popular choice among special operations forces worldwide.",
          ],
        },
        {
          id: 12,
          image: "L96A1.png",
          name: "L96A1",
          type: "Bolt-action sniper rifle",
          placeOfOrigin: "United Kingdom",
          designer: "Accuracy International",
          designed: "1982",
          cartridge: ".338 Lapua Magnum",
          muzzleVelocity: "900 m/s",
          description: [
            "The L96A1 is a highly regarded bolt-action sniper rifle known for its precision and long-range capabilities. Adopted by the British Armed Forces, it is designed for use in various environments, providing snipers with the reliability and accuracy needed for effective target engagement.",
            "Utilizing the powerful .338 Lapua Magnum cartridge, the L96A1 delivers exceptional ballistic performance, allowing for accurate shots at extended distances. Its ergonomic design and adjustable features enhance shooter comfort and control. The L96A1’s reputation for effectiveness in military operations has established it as a benchmark in sniper rifle design.",
          ],
        },
        {
          id: 13,
          image: "M249SAW.png",
          name: "M249 SAW",
          type: "Light machine gun",
          placeOfOrigin: "Belgium",
          designer: "FN Herstal",
          designed: "1984",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "915 m/s",
          description: [
            "The M249 SAW (Squad Automatic Weapon) is a light machine gun designed for sustained fire in support of infantry units. Its belt-fed system allows for continuous operation, making it a vital asset on the battlefield for providing suppressive fire.",
            "Chambered in the 5.56x45mm NATO cartridge, the M249 balances firepower and recoil management, allowing for effective use by soldiers in various combat scenarios. Its versatility is enhanced by the ability to switch between firing from a bipod or from the shoulder. The M249 has proven itself in numerous conflicts, earning a reputation for reliability and effectiveness in diverse environments.",
          ],
        },
        {
          id: 14,
          image: "M4Carbine.png",
          name: "M4 Carbine",
          type: "Carbine",
          placeOfOrigin: "United States",
          designer: "Eugene Stoner",
          designed: "1994",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "910 m/s",
          description: [
            "The M4 Carbine is a shorter, lightweight variant of the M16 rifle, designed for versatility and maneuverability in various combat situations. It has become the standard issue for U.S. military forces, favored for its adaptability and performance in urban and close-quarters engagements.",
            "The M4 features a modular design that allows soldiers to customize their rifles with a range of accessories, including optics, foregrips, and suppressors. Its 5.56x45mm NATO cartridge provides manageable recoil, enabling rapid follow-up shots. The M4's reliability and effectiveness in dynamic environments have solidified its place as a primary combat weapon for modern forces.",
          ],
        },
        {
          id: 15,
          image: "SteyrAUG.png",
          name: "Steyr AUG",
          type: "Bullpup assault rifle",
          placeOfOrigin: "Austria",
          designer: "Steyr Mannlicher",
          designed: "1977",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "900 m/s",
          description: [
            "The Steyr AUG is a bullpup assault rifle recognized for its innovative design and integrated optical sight. Its compact form factor enhances maneuverability in close combat situations while retaining a full-length barrel for increased accuracy.",
            "Chambered in 5.56x45mm NATO, the AUG features a modular design that allows for easy adaptation to various roles, including standard infantry, designated marksman, and even sharpshooter configurations. The Steyr AUG's reputation for reliability, combined with its unique aesthetics, makes it a distinctive choice among modern firearms.",
          ],
        },
        {
          id: 16,
          image: "SIGP226.png",
          name: "SIG P226",
          type: "Pistol",
          placeOfOrigin: "Switzerland",
          designer: "SIG Sauer",
          designed: "1984",
          cartridge: "9x19mm",
          muzzleVelocity: "350 m/s",
          description: [
            "The SIG P226 is a full-size, semi-automatic pistol known for its exceptional reliability and accuracy. Widely used by military and law enforcement agencies around the world, it is praised for its ergonomic design and performance under stress.",
            "Chambered in 9x19mm, the P226 offers a double/single action mechanism, providing versatility in operation. Its robust construction and precision engineering contribute to its reputation as a dependable sidearm. The SIG P226 has seen extensive use in various conflicts, becoming a trusted choice for professionals in demanding situations.",
          ],
        },
        {
          id: 17,
          image: "CZ75.png",
          name: "CZ-75",
          type: "Pistol",
          placeOfOrigin: "Czech Republic",
          designer: "Josef and František Koucký",
          designed: "1975",
          cartridge: "9x19mm",
          muzzleVelocity: "350 m/s",
          description: [
            "The CZ-75 is a semi-automatic pistol that has gained a reputation for its high capacity and accuracy. Its all-steel construction provides durability and stability during operation, making it a favorite among both civilian and law enforcement users.",
            "Chambered in 9x19mm, the CZ-75 features an ergonomic design that promotes comfortable handling and control. Its double/single action capability allows for flexibility in firing, and its reliability in various conditions has made it a popular choice across the globe. The CZ-75's classic design and performance continue to influence modern pistol development.",
          ],
        },
        {
          id: 18,
          image: "RugerMini14.png",
          name: "Ruger Mini-14",
          type: "Rifle",
          placeOfOrigin: "United States",
          designer: "William Ruger",
          designed: "1974",
          cartridge: "5.56x45mm NATO",
          muzzleVelocity: "975 m/s",
          description: [
            "The Ruger Mini-14 is a lightweight, gas-operated semi-automatic rifle designed for versatility in various applications, from sport shooting to hunting. It features a traditional rifle design that appeals to both enthusiasts and casual shooters.",
            "Chambered in 5.56x45mm NATO, the Mini-14 offers a reliable performance with manageable recoil, making it suitable for shooters of all skill levels. Its rugged construction and reputation for dependability have earned it a loyal following among firearm enthusiasts. The Mini-14's classic appearance and performance in the field make it a noteworthy choice for those seeking a versatile rifle.",
          ],
        },
        {
          id: 19,
          image: "BrowningHiPower.png",
          name: "Browning Hi-Power",
          type: "Pistol",
          placeOfOrigin: "Belgium",
          designer: "John Browning",
          designed: "1935",
          cartridge: "9x19mm",
          muzzleVelocity: "360 m/s",
          description: [
            "The Browning Hi-Power is a classic semi-automatic pistol known for its high magazine capacity and reliability. Designed by John Browning, it has been used by military forces around the world for decades and remains popular among enthusiasts.",
            "Chambered in 9x19mm, the Hi-Power features a double-action mechanism that offers a smooth shooting experience. Its ergonomic grip and solid construction contribute to its accuracy and control. The Browning Hi-Power's historical significance and enduring design have made it a staple in the world of firearms.",
          ],
        },
        {
          id: 20,
          image: "Mossberg500.png",
          name: "Mossberg 500",
          type: "Shotgun",
          placeOfOrigin: "United States",
          designer: "Mossberg & Sons",
          designed: "1960",
          cartridge: "12 gauge",
          muzzleVelocity: "400 m/s",
          description: [
            "The Mossberg 500 is a pump-action shotgun known for its versatility and reliability. It can be configured for various roles, including hunting, home defense, and law enforcement, making it a popular choice among shotgun enthusiasts.",
            "Its 12-gauge chambering provides ample firepower, and the shotgun's modularity allows for different barrel lengths and stock options. The Mossberg 500's robust construction and smooth operation have earned it a reputation as a dependable firearm in both civilian and military applications.",
          ],
        },
        {
          id: 21,
          image: "FNFAL.png",
          name: "FN FAL",
          type: "Battle rifle",
          placeOfOrigin: "Belgium",
          designer: "Dieudonné Saive",
          designed: "1953",
          cartridge: "7.62x51mm NATO",
          muzzleVelocity: "840 m/s",
          description: [
            "The FN FAL is a battle rifle known for its robustness and effectiveness in combat. Adopted by numerous military forces worldwide, it offers both semi-automatic and full-automatic firing modes, making it versatile for various battlefield scenarios.",
            "Chambered in 7.62x51mm NATO, the FN FAL delivers significant stopping power and range, allowing soldiers to engage targets effectively at long distances. Its reliable operation in diverse conditions and compatibility with various accessories have solidified its reputation as a classic military firearm, making it a preferred choice in conflicts across the globe.",
          ],
        },
        {
          id: 22,
          image: "Beretta92.png",
          name: "Beretta 92",
          type: "Pistol",
          placeOfOrigin: "Italy",
          designer: "Beretta",
          designed: "1975",
          cartridge: "9x19mm",
          muzzleVelocity: "400 m/s",
          description: [
            "The Beretta 92 is a semi-automatic pistol favored for its accuracy and reliability. It features an open-slide design that enhances feeding reliability and is used by military and police forces globally.",
            "Chambered in 9x19mm, the Beretta 92 operates with a double/single action system, allowing for smooth shooting and quick follow-up shots. Its durable construction and ergonomic grip provide comfort during extended use. The Beretta 92 has a long-standing reputation in both civilian and military circles, and its iconic design continues to influence modern handgun development.",
          ],
        },
        {
          id: 23,
          image: "TikkaT3.png",
          name: "Tikka T3",
          type: "Bolt-action rifle",
          placeOfOrigin: "Finland",
          designer: "Tikka",
          designed: "2003",
          cartridge: ".308 Winchester",
          muzzleVelocity: "830 m/s",
          description: [
            "The Tikka T3 is a bolt-action rifle celebrated for its accuracy and smooth operation. It is designed for both sport shooting and hunting, featuring a sleek design that appeals to a wide range of shooters.",
            "Chambered in .308 Winchester, the Tikka T3 delivers exceptional performance and precision at long ranges. Its modular design allows for customization with various stocks, barrels, and optics to suit individual preferences. The Tikka T3's reputation for quality craftsmanship and reliable performance has made it a favorite among shooting enthusiasts and hunters alike.",
          ],
        },
      ],
    };
  },
  computed: {
    descFormat() {
      return this.selectedGun.description && this.selectedGun.description.length
        ? this.selectedGun.description.map((d) => `<p>${d}</p>`).join("")
        : `<p>No description available</p>`;
    },
    filteredGuns() {
      const lowerCaseSearch = this.searchedWord?.toLowerCase() || "";
      return this.guns.filter((g) => {
        return (
          g.name.toLowerCase().includes(lowerCaseSearch) ||
          g.description.some((d) => d.toLowerCase().includes(lowerCaseSearch)) ||
          g.type.toLowerCase().includes(lowerCaseSearch) ||
          g.placeOfOrigin.toLowerCase().includes(lowerCaseSearch) ||
          g.designer.toLowerCase().includes(lowerCaseSearch) ||
          g.cartridge.toLowerCase().includes(lowerCaseSearch) ||
          g.muzzleVelocity.toLowerCase().includes(lowerCaseSearch)
        );
      });
    },
  },
  methods: {
    searchIndicator(text) {
      if (this.searchedWord) {
        let what = new RegExp(this.searchedWord, "gi");
        if (text) {
          text = text.replace(what, (match) => {
            return `<span class="mark p-0">${match}</span>`;
          });
        }
        return text;
      } else {
        return text;
      }
    },
    onClickDetails(gun) {
      this.selectedGun = gun;
    },
  },
};
</script>