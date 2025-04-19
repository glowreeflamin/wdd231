function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}


const abujaActivityData = [
  {
    name: "Hike to the Top of Zuma Rock",
    address: "Zuma Rock, Madalla, Niger State, near Abuja",
    description:
      "Zuma Rock is a prominent monolith located just outside Abuja. While climbing to the top is not permitted due to its steep and smooth surface, visitors can explore the base, take photographs, and learn about its historical significance.",
    cost: "Free (Guided tours may have fees)",
    image_url: "zuma-rock.webp",
  },
  {
    name: "Explore Jabi Lake & Jabi Boat Club",
    address: "Jabi Boat Club, 26 Alex Ekwueme Way, Jabi, Abuja",
    description:
      "Jabi Boat Club offers water activities such as boat rides, jet skiing, and kayaking. The club also features a restaurant and hosts weekly events like karaoke and salsa nights.",
    cost: "Pontoon Boat: ₦40k for 15 minutes, ₦60k for 30 minutes",
    image_url: "Jabi-Boat-Club.webp"
  },
  {
    name: "Visit Millennium Park",
    address: "Millennium Park, Maitama, Abuja",
    description:
      "As Abuja’s largest public park, Millennium Park offers expansive green spaces, well-maintained gardens, and scenic walkways, making it ideal for picnics, leisurely walks, and photography.",
    cost: "Free",
    image_url: "millennium-park-abuja.webp"
  },
  {
    name: "Go Shopping at Jabi Lake Mall",
    address: "Jabi Lake Mall, Bala Sokoto Way, Jabi, Abuja",
    description:
      "Jabi Lake Mall is a premier shopping destination featuring a variety of retail stores, eateries, and entertainment options, including a cinema.",
    cost: "Free entry (cost depends on purchases)",
    image_url: "Jabi-Lake-Mall.webp"
  },
  {
    name: "Explore Usman Dam",
    address: "Usman Dam, Bwari, Abuja",
    description:
      "Usman Dam is a serene spot ideal for picnics, bird watching, and enjoying nature. It serves as a significant water source for Abuja and offers picturesque views.",
    cost: "Free",
    image_url: "usman-dam-abuja.webp",
  },
  {
    name: "Visit the National Children’s Park and Zoo",
    address: "Off Aso Drive, Asokoro District, Abuja",
    description:
      "This park and zoo feature a variety of animals, including lions, monkeys, and crocodiles. It's an educational and entertaining destination for families and animal enthusiasts.",
    cost: "Entry fees apply (varies)",
    image_url: "maxresdefault.webp"
  },
  {
    name: "Experience Nigerian Art at Thought Pyramid Art Centre",
    address: "18 Libreville Crescent, Wuse 2, Abuja",
    description:
      "Thought Pyramid Art Centre showcases contemporary Nigerian and African art, hosting exhibitions and workshops that promote cultural appreciation and creativity.",
    cost: "Free (Special exhibitions may have entry fees)",
    image_url: "thought-pyramid-art-centre.webp"
  },
  {
    name: "Tour the National Mosque",
    address: "Independence Avenue, Central Business District, Abuja",
    description:
      "The National Mosque is an architectural masterpiece open to visitors of all faiths outside of prayer times. Guided tours provide insights into its design and significance.",
    cost: "Free (Donations welcomed)",
    image_url: "national-mosque-abuja.webp",
  },
  {
    name: "Tour the National Christian Centre",
    address: "Herbert Macaulay Way, Central Business District, Abuja",
    description:
      "Also known as the National Ecumenical Centre, this church is notable for its striking modern architecture and serves as a center for Christian worship and events.",
    cost: "Free",
    image_url:
      "national-christian-center.webp",
  },
];

export { fisherYatesShuffle, abujaActivityData };
