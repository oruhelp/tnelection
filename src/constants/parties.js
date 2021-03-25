const parties = [
    {
        id: 'p1',
        name: 'Dravida Munnetra Kazhagam',
        leader: 'ca1',
        alliance: 'dmk',
        seats: '173',
        comments: 10,
        profile: [
          {header: 'Founded', value: '10 Jan 2020'},
          {header: 'Website', value: 'https://www.dmk.com'},
        ],
        symbol: 'https://i.ibb.co/6g2Z5q3/1.jpg',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p2',
        name: 'Indian National Congress',
        leader: 'ca2',
        alliance: 'dmk',
        seats: '25',
        symbol: 'https://i.ibb.co/kqfxDZH/2.jpg',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Indian_National_Congress_symbol.svg/38px-Indian_National_Congress_symbol.svg.png',
      },
      {
        id: 'p3',
        name: 'Communist Party of India',
        leader: 'ca3',
        seats: '6',
        alliance: 'dmk',
        symbol: 'https://i.ibb.co/HXcv3Hx/3.jpg',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Indian_Election_Symbol_Ears_of_Corn_and_Sickle.png/75px-Indian_Election_Symbol_Ears_of_Corn_and_Sickle.png'
      },
      {
        id: 'p4',
        name: 'Communist Party of India (Marxist)',
        leader: 'ca4',
        alliance: 'dmk',
        seats: '6',
        symbol: 'https://i.ibb.co/zhSGQWS/4.png',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Indian_Election_Symbol_Hammer_Sickle_and_Star.png/75px-Indian_Election_Symbol_Hammer_Sickle_and_Star.png'
      },
      {
        id: 'p5',
        name: 'Viduthalai Chiruthaigal Katchi',
        leader: 'ca5',
        alliance: 'dmk',
        seats: '6',
        symbol: 'https://i.ibb.co/YfFVDWz/5.png',
      },
      {
        id: 'p6',
        name: 'Indian Union Muslim League',
        leader: 'ca6',
        alliance: 'dmk',
        seats: '3',
        symbol: 'https://i.ibb.co/Wxbgbv6/6.png',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Indian_Election_Symbol_Lader.svg/75px-Indian_Election_Symbol_Lader.svg.png'
      },
      {
        id: 'p7',
        name: 'Kongunadu Makkal Desia Katchi',
        leader: 'ca7',
        alliance: 'dmk',
        seats: '3',
        symbol: 'https://i.ibb.co/CVXJGG9/7.jpg',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p8',
        name: 'Marumalarchi Dravida Munnetra Kazhagam',
        leader: 'ca8',
        alliance: 'dmk',
        seats: '6',
        symbol: 'https://i.ibb.co/1zqW5fV/8.jpg',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p9',
        name: 'Tamizhaga Vazhvurimai Katchi',
        leader: 'ca9',
        alliance: 'dmk',
        seats: '1',
        symbol: 'https://i.ibb.co/QK4v21w/9.jpg',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p10',
        name: 'Manithaneya Makkal Katchi',
        leader: 'ca10',
        alliance: 'dmk',
        seats: '2',
        symbol: 'https://i.ibb.co/FVMKtW8/10.jpg',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/IMG-20190704-WA0003.jpg/75px-IMG-20190704-WA0003.jpg'
      },
      {
        id: 'p25',
        name: 'All India Forward Bloc',
        alliance: 'dmk',
        seats: '1',
        symbol:'https://i.ibb.co/wYYvXzr/25.jpg',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p26',
        name: 'Makkal Viduthalai Katchi',
        alliance: 'dmk',
        seats: '1',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p27',
        name: 'Adhi Tamizhar Peravai',
        alliance: 'dmk',
        seats: '1',
        symbol: 'https://i.ibb.co/hML7Q34/27.png',
        voteImg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
      },
      {
        id: 'p11',
        name: 'All India Anna Dravida Munnetra Kazhagam',
        leader: 'ca11',
        alliance: 'admk',
        symbol: 'https://i.ibb.co/qM0Gp5W/11.png',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/90px-AIADMK_Two_Leaves.png'
      },
      {
        id: 'p12',
        name: 'Bharatiya Janata Party',
        leader: 'ca12',
        alliance: 'admk',
        symbol: 'https://i.ibb.co/B4F4nkC/12.png',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BJP_election_symbol.png/75px-BJP_election_symbol.png',
        seats: '20',
      },
      {
        id: 'p13',
        name: 'Pattali Makkal Katchi',
        leader: 'ca13',
        alliance: 'admk',
        seats: '23',
        symbol: 'https://i.ibb.co/r2Gwh8p/13.jpg',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Indian_Election_Symbol_Mango.png/75px-Indian_Election_Symbol_Mango.png'
      },
      {
        id: 'p14',
        name: 'Desiya Murpokku Dravida Kazhagam',
        leader: 'ca14',
        symbol: 'https://i.ibb.co/26qJhBR/14.png',
      },
      {
        id: 'p15',
        name: 'Tamil Maanila Congress',
        leader: 'ca15',
        alliance: 'admk',
        symbol: 'https://i.ibb.co/gm4Q21J/15.jpg',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Indian_Election_Symbol_Cycle.png/75px-Indian_Election_Symbol_Cycle.png'
      },
      {
        id: 'p16',
        name: 'Tamil Nadu Kongu Ilaingar Peravai',
        leader: 'ca16',
        symbol: 'https://i.ibb.co/xKkw0g5/16.jpg',
      },
      {
        id: 'p17',
        name: 'Mukkulathor Pulipadai',
        leader: 'ca17',
        symbol: 'https://i.ibb.co/V9yDWR5/17.jpg',
      },
      {
        id: 'p18',
        name: 'Puthiya Tamilagam',
        leader: 'ca18',
        alliance: 'admk',
        symbol: 'https://i.ibb.co/FhZbf0z/18.jpg',
      },
      {
        id: 'p19',
        name: 'Puthiya Needhi Katchi',
        leader: 'ca19',
        alliance: 'admk',
        symbol: 'https://i.ibb.co/0Y1nsTj/19.jpg',
      },
      {
        id: 'p20',
        name: 'Naam Tamilar Katchi',
        leader: 'ca20',
        seats: '234',
        symbol: 'https://i.ibb.co/tCyr1RK/20.jpg',
      },
      {
        id: 'p21',
        name: 'Amma Makkal Munnettra Kazagam',
        leader: 'ca21',
        alliance: 'ammk',
        symbol: 'https://i.ibb.co/mFQpftF/21.jpg',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pressure_Cooker_symbol.png/75px-Pressure_Cooker_symbol.png'
      },
      {
        id: 'p28',
        name: 'All India Majlis-e-Ittehadul Muslimeen',
        alliance: 'ammk',
        seats: '3',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Indian_Election_Symbol_Kite.svg/75px-Indian_Election_Symbol_Kite.svg.png'
      },
      {
        id: 'p29',
        name: 'Gokula Makkal Katchi',
        alliance: 'ammk',
        seats: '1',
      },
      {
        id: 'p30',
        name: 'Marudhu Senai Sangam',
        alliance: 'ammk',
        seats: '1',
      },
      {
        id: 'p22',
        name: 'Makkal Needhi Maiam',
        leader: 'ca22',
        alliance: 'mnm',
        seats: '154',
        symbol: 'https://i.ibb.co/GpKxbrY/22.png',
        voteImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Indian_Election_Symbol_Battery-Torch.png/90px-Indian_Election_Symbol_Battery-Torch.png'
      },
      {
        id: 'p23',
        name: 'All India Samathuva Makkal Katchi',
        leader: 'ca23',
        alliance: 'mnm',
        seats: '40',
        symbol: 'https://i.ibb.co/dBd52hs/23.png',
      },
      {
        id: 'p24',
        name: 'Indhiya Jananayaga Katchi',
        leader: 'ca24',
        alliance: 'mnm',
        seats: '40',
        symbol: 'https://i.ibb.co/h2QktMy/24.jpg',
      },
      {
        id: 'p31',
        name: 'Social Democratic Party of India',
      },
      {
        id: 'p32',
        name: 'Anaithu Makkal Munnetra Kazhagam',
      },
      {
        id: 'p33',
        name: 'Manithaneya Jananayaga Katchi',
      },
      {
        id: 'p34',
        name: 'Republican Party of India',
      },
      {
        id: 'p35',
        name: 'Tamil Maanila Muslim League',
      },
      {
        id: 'p36',
        name: 'Perunthalaivar Makkal Katchi',
      },
      {
        id: 'p37',
        name: 'Tamil Nadu Peasants and Workers Party',
      },
      {
        id: 'p38',
        name: 'Samuga Samathuva Padai',
      },
      {
        id: 'p39',
        name: 'Bahujan Samaj Party',
      },
      {
        id: 'p40',
        name: 'Welfare Party of India',
      },
      {
        id: 'p41',
        name: 'Tamizhaga Makkal Munnetra Kazhagam',
      },
      {
        id: 'p42',
        name: 'Puratchi Bharatham',
      },
      {
        id: 'p43',
        name: 'Moovendar Munnetra Kazhagam',
      },
      {
        id: 'p44',
        name: 'All India Moovendar Munnani Kazhagam',
      },
      {
        id: 'p45',
        name: 'Pasumpon Desiya Kazhagam',
      },
      {
        id: 'p46',
        name: 'Viduthalai Tamil Puligal Katchi',
      },
      {
        id: 'p47',
        name: 'Makkal Arasu Katchi',
      },
];

export default parties;