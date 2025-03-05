const grievances = [
  {
    id: 1,
    status: "registered",
    title: "Pothole on Main Street",
    description:
      "There is a large pothole on Main Street near the intersection with Oak Avenue. It poses a safety hazard for vehicles and pedestrians.",
    location: "Main Street, Oak Avenue Intersection",
    submissionDate: "2023-10-15",
    images: [
      "https://via.placeholder.com/600x400.png?text=Pothole+Image+1",
      "https://via.placeholder.com/600x400.png?text=Pothole+Image+2",
    ],
    comments: [
      {
        id: 1,
        user: "John Doe",
        text: "This pothole has been here for weeks! Please fix it soon.",
        timestamp: "2023-10-15 14:30",
      },
      {
        id: 2,
        user: "Jane Smith",
        text: "I almost tripped over it yesterday. It’s dangerous!",
        timestamp: "2023-10-16 09:15",
      },
    ],
  },
  {
    id: 2,
    status: "in-progress",
    title: "Streetlight Not Working",
    description:
      "The streetlight at the corner of Elm Street and 5th Avenue has been out for over a month, making the area unsafe at night.",
    location: "Elm Street & 5th Avenue",
    submissionDate: "2023-10-20",
    images: [
      "https://via.placeholder.com/600x400.png?text=Streetlight+Issue",
    ],
    comments: [
      {
        id: 1,
        user: "Alice Green",
        text: "It’s really dark here at night. Urgent fix needed!",
        timestamp: "2023-10-21 18:45",
      },
    ],
  },
  {
    id: 3,
    status: "resolved",
    title: "Overflowing Garbage Bins",
    description:
      "Garbage bins near the community park are overflowing, leading to bad smells and attracting stray animals.",
    location: "Community Park, Birchwood Lane",
    submissionDate: "2023-10-22",
    images: [
      "https://via.placeholder.com/600x400.png?text=Garbage+Issue",
    ],
    comments: [
      {
        id: 1,
        user: "Mark Wilson",
        text: "The garbage collectors haven’t come in days!",
        timestamp: "2023-10-23 10:15",
      },
    ],
  },
  {
    id: 4,
    status: "registered",
    title: "Water Leakage in Public Pipeline",
    description:
      "There is a continuous water leakage from the public water supply pipeline near Green Valley Apartments.",
    location: "Green Valley Apartments, Block C",
    submissionDate: "2023-10-25",
    images: [
      "https://via.placeholder.com/600x400.png?text=Water+Leakage",
    ],
    comments: [
      {
        id: 1,
        user: "Robert Clark",
        text: "So much water is being wasted. Needs urgent repair!",
        timestamp: "2023-10-26 08:20",
      },
    ],
  },
  {
    id: 5,
    status: "in-progress",
    title: "Illegal Parking Issue",
    description:
      "Cars are being illegally parked in front of the residential gate, blocking access for residents.",
    location: "Sunset Boulevard, Sector 10",
    submissionDate: "2023-10-28",
    images: [
      "https://via.placeholder.com/600x400.png?text=Illegal+Parking",
    ],
    comments: [
      {
        id: 1,
        user: "Emily Johnson",
        text: "This has become a daily problem. Authorities need to take action!",
        timestamp: "2023-10-28 12:30",
      },
    ],
  },
  {
    id: 6,
    status: "resolved",
    title: "Broken Pedestrian Walkway",
    description:
      "The pedestrian walkway near the city library has multiple cracks, making it unsafe for people walking, especially elderly citizens.",
    location: "City Library, Downtown",
    submissionDate: "2023-11-02",
    images: [
      "https://via.placeholder.com/600x400.png?text=Broken+Walkway",
    ],
    comments: [
      {
        id: 1,
        user: "David Brown",
        text: "I saw someone trip here last week. Needs urgent fixing.",
        timestamp: "2023-11-03 14:10",
      },
    ],
  },
  {
    id: 7,
    status: "registered",
    title: "Noisy Construction at Night",
    description:
      "Construction work near the residential area is going on past midnight, causing disturbance to residents.",
    location: "Maple Residency, Block D",
    submissionDate: "2023-11-05",
    images: [
      "https://via.placeholder.com/600x400.png?text=Construction+Noise",
    ],
    comments: [
      {
        id: 1,
        user: "Sophia Martinez",
        text: "We can’t sleep because of the noise. Please stop night work!",
        timestamp: "2023-11-05 23:45",
      },
    ],
  },
  {
    id: 8,
    status: "in-progress",
    title: "Public Restroom Maintenance Issue",
    description:
      "The public restroom near the central bus stand is in poor condition, with broken taps and no water supply.",
    location: "Central Bus Stand",
    submissionDate: "2023-11-08",
    images: [
      "https://via.placeholder.com/600x400.png?text=Restroom+Issue",
    ],
    comments: [
      {
        id: 1,
        user: "Michael White",
        text: "The condition is terrible. Needs immediate attention!",
        timestamp: "2023-11-08 15:20",
      },
    ],
  },
  {
    id: 9,
    status: "resolved",
    title: "Traffic Signal Malfunction",
    description:
      "The traffic light at Park Avenue remains stuck on red, causing confusion and long traffic jams.",
    location: "Park Avenue, 3rd Crossroad",
    submissionDate: "2023-11-10",
    images: [
      "https://via.placeholder.com/600x400.png?text=Traffic+Signal+Issue",
    ],
    comments: [
      {
        id: 1,
        user: "Olivia Harris",
        text: "Traffic police need to address this ASAP.",
        timestamp: "2023-11-10 09:30",
      },
    ],
  },
  {
    id: 10,
    status: "registered",
    title: "Stray Dog Problem",
    description:
      "A pack of stray dogs has been roaming around the neighborhood, making it unsafe for pedestrians, especially kids.",
    location: "Rosewood Apartments, Sector 15",
    submissionDate: "2023-11-12",
    images: [
      "https://via.placeholder.com/600x400.png?text=Stray+Dogs",
    ],
    comments: [
      {
        id: 1,
        user: "William Scott",
        text: "Some dogs are aggressive. Authorities need to take action soon!",
        timestamp: "2023-11-12 18:50",
      },
    ],
  },
];

export default grievances;
