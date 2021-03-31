import candidates from '../../constants/candidates';
const initialState = {
  dashboard: {
    affidavit: {
      applied: '7255',
      accepted: '4617',
      rejected: '2430',
      withdrawn: '2',
      contesting: '0',
    },
  },
  constituencies: [
    {
      id: 'co1',
      name: 'Gummidipoondi',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/nLkb7x7/co1.jpg',
    },
    {
      id: 'co2',
      name: 'Ponneri',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/S5vP1sK/co2.jpg',
    },
    {
      id: 'co3',
      name: 'Tiruttani',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/M7Y5ysH/co3.jpg',
    },
    {
      id: 'co4',
      name: 'Thiruvallur',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/YNkvD3k/co4.jpg',
    },
    {
      id: 'co5',
      name: 'Poonamallee',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/fdp4L3r/co5.jpg',
    },
    {
      id: 'co6',
      name: 'Avadi',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/yg2xXdJ/co6.jpg',
    },
    {
      id: 'co7',
      name: 'Maduravoyal',
      dt: 'Thiruvallur',
      image:
        'https://i.ibb.co/5YWTpJ0/co7.jpg',
    },
    {
      id: 'co8',
      name: 'Ambattur',
      dt: 'Thiruvallur',
      image:
        'https://i.ibb.co/C5x56Bm/co8.jpg',
    },
    {
      id: 'co9',
      name: 'Madhavaram',
      dt: 'Thiruvallur',
      image:
        'https://i.ibb.co/mXxT8ZL/co9.jpg',
    },
    {
      id: 'co10',
      name: 'Thiruvottiyur',
      dt: 'Thiruvallur',
      image:
        'https://i.ibb.co/KyWC6R6/co10.jpg',
    },
    {
      id: 'co11',
      name: 'Dr. Radhakrishnan Nagar',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/BwyG3Vr/co11.jpg',
    },
    {
      id: 'co12',
      name: 'Perambur',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/SPCjFC0/co12.jpg',
    },
    {
      id: 'co13',
      name: 'Kolathur',
      dt: 'Chennai',
      image: 'https://i.ibb.co/2dhBdw4/co13.jpg',
    },
    {
      id: 'co14',
      name: 'Villivakkam',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/Ln5gdVM/co14.jpg',
    },
    {
      id: 'co15',
      name: 'Thiru. Vi. Ka. Nagar',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/XShXnvx/co15.png',
    },
    {
      id: 'co16',
      name: 'Egmore',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/16LVyNG/co16.jpg',
    },
    {
      id: 'co17',
      name: 'Royapuram',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/0j41G3q/co17.jpg',
    },
    {
      id: 'co18',
      name: 'Harbour',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/fMXfV23/co18.jpg',
    },
    {
      id: 'co19',
      name: 'Chepauk-Thiruvallikeni',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/Qm6GhMs/co19.jpg',
    },
    {
      id: 'co20',
      name: 'Thousand Lights',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/N6SNwfV/co20.jpg',
    },
    {
      id: 'co21',
      name: 'Anna Nagar',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/RQgJMWR/co21.jpg',
    },
    {
      id: 'co22',
      name: 'Virugambakkam',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/BPP65Dt/co22.jpg',
    },
    {
      id: 'co23',
      name: 'Saidapet',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/0r07qL9/co23.jpg',
    },
    {
      id: 'co24',
      name: 'T. Nagar',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/GT8Lctj/co24.webp',
    },
    {
      id: 'co25',
      name: 'Mylapore',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/17R2FWw/co25.jpg',
    },
    {
      id: 'co26',
      name: 'Velachery',
      dt: 'Chennai',
      image:
        'https://i.ibb.co/NsMdF1c/co26.jpg',
    },
    {
      id: 'co27',
      name: 'Sholinganallur',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/g9YGHJW/co27.jpg',
    },
    {
      id: 'co28',
      name: 'Alandur',
      dt: 'Kanchipuram',
      image:
        'https://i.ibb.co/L8kd8V9/co28.jpg',
    },
    {
      id: 'co29',
      name: 'Sriperumbudur',
      dt: 'Kanchipuram',
      image:
        'https://i.ibb.co/B4598NB/co29.jpg',
    },
    {
      id: 'co30',
      name: 'Pallavaram',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/zGB4K8G/co30.jpg',
    },
    {
      id: 'co31',
      name: 'Tambaram',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/7Vbzrdx/co31.jpg',
    },
    {
      id: 'co32',
      name: 'Chengalpattu',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/4JjmWqz/co32.jpg',
    },
    {
      id: 'co33',
      name: 'Thiruporur',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/F5p4Pf1/co33.jpg',
    },
    {
      id: 'co34',
      name: 'Cheyyur',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/vwwGfB3/co34.jpg',
    },
    {
      id: 'co35',
      name: 'Maduranthakam',
      dt: 'Chengalpattu',
      image:
        'https://i.ibb.co/WD72fGm/co35.jpg',
    },
    {
      id: 'co36',
      name: 'Uthiramerur',
      dt: 'Kanchipuram',
      image:
        'https://i.ibb.co/2g7WLKC/co36.jpg',
    },
    {
      id: 'co37',
      name: 'Kancheepuram',
      dt: 'Kanchipuram',
      image:
        'https://i.ibb.co/LPR78V8/co37.jpg',
    },
    {
      id: 'co38',
      name: 'Arakkonam',
      dt: 'Ranipet',
      image:
        'https://i.ibb.co/tDL11df/co38.jpg',
    },
    {
      id: 'co39',
      name: 'Sholingur',
      dt: 'Ranipet',
      image:
        'https://i.ibb.co/PZbYKTJ/co39.jpg',
    },
    {
      id: 'co40',
      name: 'Katpadi',
      dt: 'Vellore',
      image:
        'https://i.ibb.co/GMY45xw/co40.jpg',
    },
    {
      id: 'co41',
      name: 'Ranipet',
      dt: 'Ranipet',
      image: 'https://i.ibb.co/X531myk/co41.jpg',
    },
    {
      id: 'co42',
      name: 'Arcot',
      dt: 'Ranipet',
      image:
        'https://i.ibb.co/PDvskhP/co42.jpg',
    },
    {
      id: 'co43',
      name: 'Vellore',
      dt: 'Vellore',
      image:
        'https://i.ibb.co/Nj7jhfh/co43.jpg',
    },
    {
      id: 'co44',
      name: 'Anaikattu',
      dt: 'Vellore',
      image:
        'https://i.ibb.co/nPyvGL0/co44.jpg',
    },
    {
      id: 'co45',
      name: 'K. V. Kuppam',
      dt: 'Vellore',
      image:
        'https://i.ibb.co/CvGQsGR/co45.png',
    },
    {
      id: 'co46',
      name: 'Gudiyattam',
      dt: 'Vellore',
      image:
        'https://i.ibb.co/SQfHJVj/co46.png',
    },
    {
      id: 'co47',
      name: 'Vaniyambadi',
      dt: 'Tirupattur',
      image:
        'https://i.ibb.co/jgLKQK9/co47.jpg',
    },
    {
      id: 'co48',
      name: 'Ambur',
      dt: 'Tirupattur',
      image:
        'https://i.ibb.co/grXJPqd/co48.jpg',
    },
    {
      id: 'co49',
      name: 'Jolarpet',
      dt: 'Tirupattur',
      image:
        'https://i.ibb.co/cYX1JCy/co49.jpg',
    },
    {
      id: 'co50',
      name: 'Tirupattur',
      dt: 'Tirupattur',
      image: 'https://i.ibb.co/4fRzzzn/co50.jpg',
    },
    {
      id: 'co51',
      name: 'Uthangarai',
      dt: 'Krishnagiri',
      image: 'https://i.ibb.co/GkvZdwj/co51.jpg',
    },
    {
      id: 'co52',
      name: 'Bargur',
      dt: 'Krishnagiri',
      image:
        'https://i.ibb.co/fGCRppq/co52.jpg',
    },
    {
      id: 'co53',
      name: 'Krishnagiri',
      dt: 'Krishnagiri',
      image:
        'https://i.ibb.co/179zVyP/co53.jpg',
    },
    {
      id: 'co54',
      name: 'Veppanahalli',
      dt: 'Krishnagiri',
      image:
        'https://i.ibb.co/WVnC5vb/co54.jpg',
    },
    {
      id: 'co55',
      name: 'Hosur',
      dt: 'Krishnagiri',
      image:
        'https://i.ibb.co/Dp1ZKjF/co55.jpg',
    },
    {
      id: 'co56',
      name: 'Thalli',
      dt: 'Krishnagiri',
      image:
        'https://i.ibb.co/py95zzf/co56.jpg',
    },
    {
      id: 'co57',
      name: 'Palacode',
      dt: 'Dharmapuri',
      image: 'https://i.ibb.co/NWQfyMD/co57.jpg',
    },
    {
      id: 'co58',
      name: 'Pennagaram',
      dt: 'Dharmapuri',
      image:
        'https://i.ibb.co/1K8YpS9/co58.jpg',
    },
    {
      id: 'co59',
      name: 'Dharmapuri',
      dt: 'Dharmapuri',
      image:
        'https://i.ibb.co/GktzCkX/co59.jpg',
    },
    {
      id: 'co60',
      name: 'Pappireddippatti',
      dt: 'Dharmapuri',
      image:
        'https://i.ibb.co/8XVX86p/co60.jpg',
    },
    {
      id: 'co61',
      name: 'Harur',
      dt: 'Dharmapuri',
      image:
        'https://i.ibb.co/8M6Mh5n/co61.jpg',
    },
    {
      id: 'co62',
      name: 'Chengam',
      dt: 'Tiruvannamalai',
      image:
        'https://i.ibb.co/RQ4dn89/co62.jpg',
    },
    {
      id: 'co63',
      name: 'Tiruvannamalai',
      dt: 'Tiruvannamalai',
      image:
        'https://i.ibb.co/wMxZrMb/co63.jpg',
    },
    {
      id: 'co64',
      name: 'Kilpennathur',
      dt: 'Tiruvannamalai',
      image: 'https://i.ibb.co/BgGb1PD/co64.jpg',
    },
    {
      id: 'co65',
      name: 'Kalasapakkam',
      dt: 'Tiruvannamalai',
      image:
        'https://i.ibb.co/nbh6zQ0/co65.png',
    },
    {
      id: 'co66',
      name: 'Polur',
      dt: 'Tiruvannamalai',
      image:
        'https://i.ibb.co/gv2GJkw/co66.jpg',
    },
    {
      id: 'co67',
      name: 'Arani',
      dt: 'Tiruvannamalai',
      image:
        'https://i.ibb.co/3v1FnYj/co67.jpg',
    },
    {
      id: 'co68',
      name: 'Cheyyar',
      dt: 'Tiruvannamalai',
      image: 'https://i.ibb.co/6gSyFLt/co68.jpg',
    },
    {
      id: 'co69',
      name: 'Vandavasi',
      dt: 'Tiruvannamalai',
      image:
        'https://i.ibb.co/Gds5s4r/co69.jpg',
    },
    {
      id: 'co70',
      name: 'Gingee',
      dt: 'Villupuram',
      image:
        'https://i.ibb.co/tBSkHmC/co70.jpg',
    },
    {
      id: 'co71',
      name: 'Mailam',
      dt: 'Villupuram',
      image:
        'https://i.ibb.co/yVHbvhV/co71.jpg',
    },
    {
      id: 'co72',
      name: 'Tindivanam',
      dt: 'Villupuram',
      image:
        'https://i.ibb.co/bmfjZny/co72.jpg',
    },
    {
      id: 'co73',
      name: 'Vanur',
      dt: 'Villupuram',
      image:
        'https://i.ibb.co/G7h7GDm/co73.jpg',
    },
    {
      id: 'co74',
      name: 'Villupuram',
      dt: 'Villupuram',
      image:
        'https://i.ibb.co/hc21ZYX/co74.jpg',
    },
    {
      id: 'co75',
      name: 'Vikravandi',
      dt: 'Villupuram',
      image:
        'https://i.ibb.co/G3vTPtQ/co75.jpg',
    },
    {
      id: 'co76',
      name: 'Tirukkoyilur',
      dt: 'Kallakurichi',
      image:
        'https://i.ibb.co/LhKr81C/co76.jpg',
    },
    {
      id: 'co77',
      name: 'Ulundurpettai',
      dt: 'Kallakurichi',
      image:
        'https://i.ibb.co/Hhk0tPG/co77.jpg',
    },
    {
      id: 'co78',
      name: 'Rishivandiyam',
      dt: 'Kallakurichi',
      image:
        'https://i.ibb.co/26CNYgH/co78.jpg',
    },
    {
      id: 'co79',
      name: 'Sankarapuram',
      dt: 'Kallakurichi',
      image:
        'https://i.ibb.co/Y3gDnDT/co79.jpg',
    },
    {
      id: 'co80',
      name: 'Kallakurichi',
      dt: 'Kallakurichi',
      image:
        'https://i.ibb.co/w4XfZv1/co80.jpg',
    },
    {
      id: 'co81',
      name: 'Gangavalli',
      dt: 'Salem',
      image:
        'https://i.ibb.co/2KgTyXT/co81.jpg',
    },
    {
      id: 'co82',
      name: 'Attur',
      dt: 'Salem',
      image:
        'https://i.ibb.co/6PX7Sj8/co82.jpg',
    },
    {
      id: 'co83',
      name: 'Yercaud',
      dt: 'Salem',
      image:
        'https://i.ibb.co/JnsGnQS/co83.jpg',
    },
    {
      id: 'co84',
      name: 'Omalur',
      dt: 'Salem',
      image:
        'https://i.ibb.co/7b3Cn5m/co84.jpg',
    },
    {
      id: 'co85',
      name: 'Mettur',
      dt: 'Salem',
      image:
        'https://i.ibb.co/tC9HfgQ/co85.jpg',
    },
    {
      id: 'co86',
      name: 'Edapadi',
      dt: 'Salem',
      image:
        'https://i.ibb.co/Nn1N2n4/co86.jpg',
    },
    {
      id: 'co87',
      name: 'Sankari',
      dt: 'Salem',
      image:
        'https://i.ibb.co/kXg8HTz/co87.jpg',
    },
    {
      id: 'co88',
      name: 'Salem (West)',
      dt: 'Salem',
      image:
        'https://i.ibb.co/CM2Tzxr/co88.jpg',
    },
    {
      id: 'co89',
      name: 'Salem (North)',
      dt: 'Salem',
      image:
        'https://i.ibb.co/pJ0146y/co89.jpg',
    },
    {
      id: 'co90',
      name: 'Salem (South)',
      dt: 'Salem',
      image:
        'https://i.ibb.co/LRhLvXh/co90.jpg',
    },
    {
      id: 'co91',
      name: 'Veerapandi',
      dt: 'Salem',
      image:
        'https://i.ibb.co/bRkBHQZ/co91.jpg',
    },
    {
      id: 'co92',
      name: 'Rasipuram',
      dt: 'Namakkal',
      image:
        'https://i.ibb.co/YR00gg4/co92.jpg',
    },
    {
      id: 'co93',
      name: 'Senthamangalam',
      dt: 'Namakkal',
      image:
        'https://i.ibb.co/0yyG07K/co93.jpg',
    },
    {
      id: 'co94',
      name: 'Namakkal',
      dt: 'Namakkal',
      image:
        'https://i.ibb.co/gdMww41/co94.jpg',
    },
    {
      id: 'co95',
      name: 'Paramathi Velur',
      dt: 'Namakkal',
      image:
        'https://i.ibb.co/2kK9XvB/co95.jpg',
    },
    {
      id: 'co96',
      name: 'Tiruchengodu',
      dt: 'Namakkal',
      image:
        'https://i.ibb.co/PT6ndxg/co96.jpg',
    },
    {
      id: 'co97',
      name: 'Kumarapalayam',
      dt: 'Namakkal',
      image: 'https://i.ibb.co/PGpwyBV/co97.jpg',
    },
    {
      id: 'co98',
      name: 'Erode (East)',
      dt: 'Erode',
      image:
        'https://i.ibb.co/KNssmJY/co98.jpg',
    },
    {
      id: 'co99',
      name: 'Erode (West)',
      dt: 'Erode',
      image:
        'https://i.ibb.co/6mfYXxF/co99.jpg',
    },
    {
      id: 'co100',
      name: 'Modakkurichi',
      dt: 'Erode',
      image:
        'https://i.ibb.co/tspz6Wh/co100.jpg',
    },
    {
      id: 'co101',
      name: 'Dharapuram',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/S6VsGsz/co101.jpg',
    },
    {
      id: 'co102',
      name: 'Kangayam',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/vZddm3T/OLYMPUS-DIGITAL-CAMERA.jpg',
    },
    {
      id: 'co103',
      name: 'Perundurai',
      dt: 'Erode',
      image:
        'https://i.ibb.co/RCDR2jr/co103.jpg',
    },
    {
      id: 'co104',
      name: 'Bhavani',
      dt: 'Erode',
      image:
        'https://i.ibb.co/KhhL7VF/co104.jpg',
    },
    {
      id: 'co105',
      name: 'Anthiyur',
      dt: 'Erode',
      image:
        'https://i.ibb.co/9VL0Qqn/co105.jpg',
    },
    {
      id: 'co106',
      name: 'Gobichettipalayam',
      dt: 'Erode',
      image:
        'https://i.ibb.co/kmf44Tm/co106.jpg',
    },
    {
      id: 'co107',
      name: 'Bhavanisagar',
      dt: 'Erode',
      image:
        'https://i.ibb.co/g7sVkv2/co107.jpg',
    },
    {
      id: 'co108',
      name: 'Udhagamandalam',
      dt: 'Nilgiris',
      image: 'https://i.ibb.co/2vw08GH/co108.jpg',
    },
    {
      id: 'co109',
      name: 'Coonoor',
      dt: 'Nilgiris',
      image:
        'https://i.ibb.co/KwKNjkk/co109.jpg',
    },
    {
      id: 'co110',
      name: 'Gudalur',
      dt: 'Nilgiris',
      image:
        'https://i.ibb.co/KXnW28t/co110.jpg',
    },
    {
      id: 'co111',
      name: 'Mettupalayam',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/D7bN2kk/co111.jpg',
    },
    {
      id: 'co112',
      name: 'Avanashi',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/sgCYGRh/co112.jpg',
    },
    {
      id: 'co113',
      name: 'Tiruppur North',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/mz8kKCn/co113.jpg',
    },
    {
      id: 'co114',
      name: 'Tiruppur South',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/2KDyBGS/co114.jpg',
    },
    {
      id: 'co115',
      name: 'Palladam',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/59zzNPs/co115.jpg',
    },
    {
      id: 'co116',
      name: 'Sulur',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/WzVDmZf/co116.jpg',
    },
    {
      id: 'co117',
      name: 'Kavundampalayam',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/Fg9kQck/co117.jpg',
    },
    {
      id: 'co118',
      name: 'Coimbatore North',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/LC5LbyJ/co118.jpg',
    },
    {
      id: 'co119',
      name: 'Thondamuthur',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/zxMH3M8/co119.jpg',
    },
    {
      id: 'co120',
      name: 'Coimbatore South',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/kHhBhs7/co120.jpg',
    },
    {
      id: 'co121',
      name: 'Singanallur',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/1sMgP3R/co121.jpg',
    },
    {
      id: 'co122',
      name: 'Kinathukadavu',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/HVhyhTW/co122.jpg',
    },
    {
      id: 'co123',
      name: 'Pollachi',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/RyVmQDK/co123.jpg',
    },
    {
      id: 'co124',
      name: 'Valparai',
      dt: 'Coimbatore',
      image:
        'https://i.ibb.co/zQ660fk/co124.jpg',
    },
    {
      id: 'co125',
      name: 'Udumalaipettai',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/XzF4tbF/co125.jpg',
    },
    {
      id: 'co126',
      name: 'Madathukulam',
      dt: 'Tiruppur',
      image:
        'https://i.ibb.co/642NXnk/co126.jpg',
    },
    {
      id: 'co127',
      name: 'Palani',
      dt: 'Dindigul',
      image:
        'https://i.ibb.co/mX8K4Db/co127.jpg',
    },
    {
      id: 'co128',
      name: 'Oddanchatram',
      dt: 'Dindigul',
      image:
        'https://i.ibb.co/xFJf0nK/co128.jpg',
    },
    {
      id: 'co129',
      name: 'Athoor',
      dt: 'Dindigul',
      image:
        'https://i.ibb.co/3z89wrh/co129.jpg',
    },
    {
      id: 'co130',
      name: 'Nilakottai',
      dt: 'Dindigul',
      image:
        'https://i.ibb.co/7CcYdgB/co130.jpg',
    },
    {
      id: 'co131',
      name: 'Natham',
      dt: 'Dindigul',
      image:
        'https://i.ibb.co/12KkDy0/co131.jpg',
    },
    {
      id: 'co132',
      name: 'Dindigul',
      dt: 'Dindigul',
      image:
        'https://i.ibb.co/59F3mt4/co132.jpg',
    },
    {
      id: 'co133',
      name: 'Vedasandur',
      dt: 'Dindigul',
      image: 'https://i.ibb.co/T4Dv9Sb/co133.jpg',
    },
    {
      id: 'co134',
      name: 'Aravakurichi',
      dt: 'Karur',
      image:
        'https://i.ibb.co/58J4cLK/co134.jpg',
    },
    {
      id: 'co135',
      name: 'Karur',
      dt: 'Karur',
      image:
        'https://i.ibb.co/zXdb8PX/co135.jpg',
    },
    {
      id: 'co136',
      name: 'Krishnarayapuram',
      dt: 'Karur',
      image:
        'https://i.ibb.co/0qf4bsK/co136.jpg',
    },
    {
      id: 'co137',
      name: 'Kulithalai',
      dt: 'Karur',
      image:
        'https://i.ibb.co/svM1x1Q/co137.jpg',
    },
    {
      id: 'co138',
      name: 'Manapaarai',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/ssr6VWF/co138.jpg',
    },
    {
      id: 'co139',
      name: 'Srirangam',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/sHHtF5T/co139.jpg',
    },
    {
      id: 'co140',
      name: 'Tiruchirappalli (West)',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/99mc4Y4/co140.jpg',
    },
    {
      id: 'co141',
      name: 'Tiruchirappalli (East)',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/WtcRmw3/co141.jpg',
    },
    {
      id: 'co142',
      name: 'Thiruverumbur',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/2WdBbGf/co142.jpg',
    },
    {
      id: 'co143',
      name: 'Lalgudi',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/VQqysBD/co143.jpg',
    },
    {
      id: 'co144',
      name: 'Manachanallur',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/RN9wJNT/co144.jpg',
    },
    {
      id: 'co145',
      name: 'Musiri',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/z5LzTpH/co145.jpg',
    },
    {
      id: 'co146',
      name: 'Thuraiyur',
      dt: 'Tiruchirappalli',
      image:
        'https://i.ibb.co/27qxhPm/co146.jpg',
    },
    {
      id: 'co147',
      name: 'Perambalur',
      dt: 'Perambalur',
      image:
        'https://i.ibb.co/WkSRRQ6/co147.jpg',
    },
    {
      id: 'co148',
      name: 'Kunnam',
      dt: 'Perambalur',
      image:
        'https://i.ibb.co/HGMf25K/co148.jpg',
    },
    {
      id: 'co149',
      name: 'Ariyalur',
      dt: 'Ariyalur',
      image:
        'https://i.ibb.co/52hs6Sn/co149.jpg',
    },
    {
      id: 'co150',
      name: 'Jayankondam',
      dt: 'Ariyalur',
      image:
        'https://i.ibb.co/fFSHCrC/co150.jpg',
    },
    {
      id: 'co151',
      name: 'Tittakudi',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/nw1KhGk/co151.png',
    },
    {
      id: 'co152',
      name: 'Vriddhachalam',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/42L63Jk/co152.jpg',
    },
    {
      id: 'co153',
      name: 'Neyveli',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/nCJpRDd/co153.jpg',
    },
    {
      id: 'co154',
      name: 'Panruti',
      dt: 'Cuddalore',
      image: 'https://i.ibb.co/vJSS1Px/co154.jpg',
    },
    {
      id: 'co155',
      name: 'Cuddalore',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/68RxZf4/co155.jpg',
    },
    {
      id: 'co156',
      name: 'Kurinjipadi',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/1GCVXKB/co156.jpg',
    },
    {
      id: 'co157',
      name: 'Bhuvanagiri',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/WyfJkNb/co157.jpg',
    },
    {
      id: 'co158',
      name: 'Chidambaram',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/gVQzZMj/co158.jpg',
    },
    {
      id: 'co159',
      name: 'Kattumannarkoil',
      dt: 'Cuddalore',
      image:
        'https://i.ibb.co/cNtqS5p/co159.jpg',
    },
    {
      id: 'co160',
      name: 'Sirkazhi',
      dt: 'Mayiladuthurai',
      image:
        'https://i.ibb.co/3mBLWGL/co160.jpg',
    },
    {
      id: 'co161',
      name: 'Mayiladuthurai',
      dt: 'Mayiladuthurai',
      image:
        'https://i.ibb.co/yqhDV8t/image.jpg',
    },
    {
      id: 'co162',
      name: 'Poompuhar',
      dt: 'Mayiladuthurai',
      image:
        'https://i.ibb.co/nrF84Mh/co162.jpg',
    },
    {
      id: 'co163',
      name: 'Nagapattinam',
      dt: 'Nagapattinam',
      image:
        'https://i.ibb.co/rmh8FqM/co163.jpg',
    },
    {
      id: 'co164',
      name: 'Kilvelur',
      dt: 'Nagapattinam',
      image:
        'https://i.ibb.co/PtBZZv1/co164.jpg',
    },
    {
      id: 'co165',
      name: 'Vedaranyam',
      dt: 'Nagapattinam',
      image:
        'https://i.ibb.co/bbDnbdv/co165.jpg',
    },
    {
      id: 'co166',
      name: 'Thiruthuraipoondi',
      dt: 'Tiruvarur',
      image:
        'https://i.ibb.co/bPv84pv/co166.jpg',
    },
    {
      id: 'co167',
      name: 'Mannargudi',
      dt: 'Tiruvarur',
      image:
        'https://i.ibb.co/yF3bShP/co167.jpg',
    },
    {
      id: 'co168',
      name: 'Thiruvarur',
      dt: 'Tiruvarur',
      image:
        'https://i.ibb.co/LvHfHT2/co168.jpg',
    },
    {
      id: 'co169',
      name: 'Nannilam',
      dt: 'Tiruvarur',
      image:
        'https://i.ibb.co/w0nn5m9/co169.jpg',
    },
    {
      id: 'co170',
      name: 'Thiruvidaimarudur',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/H7HrVBc/co170.jpg',
    },
    {
      id: 'co171',
      name: 'Kumbakonam',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/Jq2LYR9/co171.jpg',
    },
    {
      id: 'co172',
      name: 'Papanasam',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/VSDgGd8/co172.jpg',
    },
    {
      id: 'co173',
      name: 'Thiruvaiyaru',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/xffdDt9/co173.jpg',
    },
    {
      id: 'co174',
      name: 'Thanjavur',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/px4wxZj/co174.jpg',
    },
    {
      id: 'co175',
      name: 'Orathanadu',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/64N8qsL/co175.jpg',
    },
    {
      id: 'co176',
      name: 'Pattukkottai',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/1ZG3CXT/co176.jpg',
    },
    {
      id: 'co177',
      name: 'Peravurani',
      dt: 'Thanjavur',
      image:
        'https://i.ibb.co/grZfgHM/co177.jpg',
    },
    {
      id: 'co178',
      name: 'Gandharvakottai',
      dt: 'Pudukottai',
      image: 'https://i.ibb.co/2MX5Vsg/co178.jpg',
    },
    {
      id: 'co179',
      name: 'Viralimalai',
      dt: 'Pudukottai',
      image:
        'https://i.ibb.co/YLR2gYL/co179.jpg',
    },
    {
      id: 'co180',
      name: 'Pudukkottai',
      dt: 'Pudukottai',
      image:
        'https://i.ibb.co/9bpRvLX/co180.jpg',
    },
    {
      id: 'co181',
      name: 'Thirumayam',
      dt: 'Pudukottai',
      image:
        'https://i.ibb.co/JFXYXYJ/co181.jpg',
    },
    {
      id: 'co182',
      name: 'Alangudi',
      dt: 'Pudukottai',
      image:
        'https://i.ibb.co/xjr4cYT/co182.jpg',
    },
    {
      id: 'co183',
      name: 'Aranthangi',
      dt: 'Pudukottai',
      image: 'https://i.ibb.co/Krf5v0k/co183.jpg',
    },
    {
      id: 'co184',
      name: 'Karaikudi',
      dt: 'Sivaganga',
      image:
        'https://i.ibb.co/s2zJWpK/co184.jpg',
    },
    {
      id: 'co185',
      name: 'Tiruppattur',
      dt: 'Sivaganga',
      image:
        'https://i.ibb.co/tH3Xjn2/co185.jpg',
    },
    {
      id: 'co186',
      name: 'Sivaganga',
      dt: 'Sivaganga',
      image:
        'https://i.ibb.co/ZcnLFh5/co186.jpg',
    },
    {
      id: 'co187',
      name: 'Manamadurai',
      dt: 'Sivaganga',
      image:
        'https://i.ibb.co/rHbh8jM/co187.jpg',
    },
    {
      id: 'co188',
      name: 'Melur',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/1vjWXjc/co188.jpg',
    },
    {
      id: 'co189',
      name: 'Madurai East',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/0YxBkwv/co189.jpg',
    },
    {
      id: 'co190',
      name: 'Sholavandan',
      dt: 'Madurai',
      image: 'https://i.ibb.co/VB6sgYc/co190.jpg',
    },
    {
      id: 'co191',
      name: 'Madurai North',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/MGHqQd4/co191.jpg',
    },
    {
      id: 'co192',
      name: 'Madurai South',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/xG0cmBj/co192.jpg',
    },
    {
      id: 'co193',
      name: 'Madurai Central',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/VMDCnQV/co193.jpg',
    },
    {
      id: 'co194',
      name: 'Madurai West',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/wL2hr2f/co194.jpg',
    },
    {
      id: 'co195',
      name: 'Thiruparankundram',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/CVYm9Dc/co195.jpg',
    },
    {
      id: 'co196',
      name: 'Tirumangalam',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/qnHpgM1/co196.jpg',
    },
    {
      id: 'co197',
      name: 'Usilampatti',
      dt: 'Madurai',
      image:
        'https://i.ibb.co/GdDLKWN/co197.jpg',
    },
    {
      id: 'co198',
      name: 'Andipatti',
      dt: 'Theni',
      image:
        'https://i.ibb.co/YtbyD1y/co198.jpg',
    },
    {
      id: 'co199',
      name: 'Periyakulam',
      dt: 'Theni',
      image:
        'https://i.ibb.co/0q5mjyq/co199.jpg',
    },
    {
      id: 'co200',
      name: 'Bodinayakanur',
      dt: 'Theni',
      image: 'https://i.ibb.co/N2v4g4v/co200.jpg',
    },
    {
      id: 'co201',
      name: 'Cumbum',
      dt: 'Theni',
      image:
        'https://i.ibb.co/Vpg5G5j/co201.jpg',
    },
    {
      id: 'co202',
      name: 'Rajapalayam',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/bzZRMCP/co202.jpg',
    },
    {
      id: 'co203',
      name: 'Srivilliputhur',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/qj5PDzc/co203.jpg',
    },
    {
      id: 'co204',
      name: 'Sattur',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/QdbkHR6/co204.jpg',
    },
    {
      id: 'co205',
      name: 'Sivakasi',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/3RhpTBr/co205.jpg',
    },
    {
      id: 'co206',
      name: 'Virudhunagar',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/kXpFR72/co206.jpg',
    },
    {
      id: 'co207',
      name: 'Aruppukkottai',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/vHnM8NG/co207.jpg',
    },
    {
      id: 'co208',
      name: 'Tiruchuli',
      dt: 'Virudhunagar',
      image:
        'https://i.ibb.co/jvXmC4L/co208.jpg',
    },
    {
      id: 'co209',
      name: 'Paramakudi',
      dt: 'Ramanathapuram',
      image:
        'https://i.ibb.co/Y0vfj89/co209.webp',
    },
    {
      id: 'co210',
      name: 'Tiruvadanai',
      dt: 'Ramanathapuram',
      image: 'https://i.ibb.co/nz8FTQj/co210.jpg',
    },
    {
      id: 'co211',
      name: 'Ramanathapuram',
      dt: 'Ramanathapuram',
      image:
        'https://i.ibb.co/nfYkGg1/co211.jpg',
    },
    {
      id: 'co212',
      name: 'Mudhukulathur',
      dt: 'Ramanathapuram',
      image:
        'https://i.ibb.co/xD92S1V/co212.jpg',
    },
    {
      id: 'co213',
      name: 'Vilathikulam',
      dt: 'Thoothukudi',
      image:
        'https://i.ibb.co/r6nsX5W/co213.jpg',
    },
    {
      id: 'co214',
      name: 'Thoothukudi',
      dt: 'Thoothukudi',
      image:
        'https://i.ibb.co/QkK9KWz/co214.jpg',
    },
    {
      id: 'co215',
      name: 'Tiruchendur',
      dt: 'Thoothukudi',
      image:
        'https://i.ibb.co/hBz30Vd/co215.jpg',
    },
    {
      id: 'co216',
      name: 'Srivaikuntam',
      dt: 'Thoothukudi',
      image:
        'https://i.ibb.co/3Chc6Fs/co216.jpg',
    },
    {
      id: 'co217',
      name: 'Ottapidaram',
      dt: 'Thoothukudi',
      image: 'https://i.ibb.co/5GqzRKj/co217.jpg',
    },
    {
      id: 'co218',
      name: 'Kovilpatti',
      dt: 'Thoothukudi',
      image:
        'https://i.ibb.co/jgxv2Wf/co218.jpg',
    },
    {
      id: 'co219',
      name: 'Sankarankovil',
      dt: 'Tenkasi',
      image:
        'https://i.ibb.co/cCwkVFf/co219.jpg',
    },
    {
      id: 'co220',
      name: 'Vasudevanallur',
      dt: 'Tenkasi',
      image: 'https://i.ibb.co/Km2zn3S/co220.jpg',
    },
    {
      id: 'co221',
      name: 'Kadayanallur',
      dt: 'Tenkasi',
      image:
        'https://i.ibb.co/b6P1fjp/co221.jpg',
    },
    {
      id: 'co222',
      name: 'Tenkasi',
      dt: 'Tenkasi',
      image:
        'https://i.ibb.co/rwBK2Wc/co222.jpg',
    },
    {
      id: 'co223',
      name: 'Alangulam',
      dt: 'Tenkasi',
      image:
        'https://i.ibb.co/wspQT1v/co223.jpg',
    },
    {
      id: 'co224',
      name: 'Tirunelveli',
      dt: 'Tirunelveli',
      image:
        'https://i.ibb.co/yqpNqfV/co224.jpg',
    },
    {
      id: 'co225',
      name: 'Ambasamudram',
      dt: 'Tirunelveli',
      image:
        'https://i.ibb.co/17nc8q9/co225.jpg',
    },
    {
      id: 'co226',
      name: 'Palayamkottai',
      dt: 'Tirunelveli',
      image:
        'https://i.ibb.co/9gCh2d9/co226.jpg',
    },
    {
      id: 'co227',
      name: 'Nanguneri',
      dt: 'Tirunelveli',
      image:
        'https://i.ibb.co/Df3s9zK/co227.jpg',
    },
    {
      id: 'co228',
      name: 'Radhapuram',
      dt: 'Tirunelveli',
      image:
        'https://i.ibb.co/YQ1nv2Z/co228.jpg',
    },
    {
      id: 'co229',
      name: 'Kanniyakumari',
      dt: 'Kanniyakumari',
      image:
        'https://i.ibb.co/dLJY1wK/co229.jpg',
    },
    {
      id: 'co230',
      name: 'Nagercoil',
      dt: 'Kanniyakumari',
      image:
        'https://i.ibb.co/5BdQYsx/co230.jpg',
    },
    {
      id: 'co231',
      name: 'Colachel',
      dt: 'Kanniyakumari',
      image:
        'https://i.ibb.co/7YwP2D5/co231.jpg',
    },
    {
      id: 'co232',
      name: 'Padmanabhapuram',
      dt: 'Kanniyakumari',
      image:
        'https://i.ibb.co/M9rVDNL/co232.png',
    },
    {
      id: 'co233',
      name: 'Vilavancode',
      dt: 'Kanniyakumari',
      image:
        'https://i.ibb.co/8935stH/co233.jpg',
    },
    {
      id: 'co234',
      name: 'Killiyoor',
      dt: 'Kanniyakumari',
      image:
        'https://i.ibb.co/3rwcmyB/co234.jpg',
    },
  ],
  parties: [
    // dmk
    {
      id: 'p1',
      name: 'Dravida Munnetra Kazhagam',
      leader: 'cadmk13',
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
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Indian_Election_Symbol_Ears_of_Corn_and_Sickle.png/75px-Indian_Election_Symbol_Ears_of_Corn_and_Sickle.png',
    },
    {
      id: 'p4',
      name: 'Communist Party of India (Marxist)',
      leader: 'ca4',
      alliance: 'dmk',
      seats: '6',
      symbol: 'https://i.ibb.co/zhSGQWS/4.png',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Indian_Election_Symbol_Hammer_Sickle_and_Star.png/75px-Indian_Election_Symbol_Hammer_Sickle_and_Star.png',
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
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Indian_Election_Symbol_Lader.svg/75px-Indian_Election_Symbol_Lader.svg.png',
    },
    {
      id: 'p25',
      name: 'All India Forward Bloc',
      alliance: 'dmk',
      seats: '1',
      symbol: 'https://i.ibb.co/wYYvXzr/25.jpg',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
    },

    // admk
    {
      id: 'p11',
      name: 'All India Anna Dravida Munnetra Kazhagam',
      leader: 'ca11',
      alliance: 'admk',
      seats: '179',
      symbol: 'https://i.ibb.co/qM0Gp5W/11.png',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/90px-AIADMK_Two_Leaves.png',
    },
    {
      id: 'p13',
      name: 'Pattali Makkal Katchi',
      leader: 'ca13',
      alliance: 'admk',
      seats: '23',
      symbol: 'https://i.ibb.co/r2Gwh8p/13.jpg',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Indian_Election_Symbol_Mango.png/75px-Indian_Election_Symbol_Mango.png',
    },
    {
      id: 'p12',
      name: 'Bharatiya Janata Party',
      leader: 'ca12',
      alliance: 'admk',
      symbol: 'https://i.ibb.co/B4F4nkC/12.png',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BJP_election_symbol.png/75px-BJP_election_symbol.png',
      seats: '20',
    },

    // ammk
    {
      id: 'p21',
      name: 'Amma Makkal Munnettra Kazagam',
      leader: 'ca21',
      alliance: 'ammk',
      seats: '161',
      symbol: 'https://i.ibb.co/mFQpftF/21.jpg',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pressure_Cooker_symbol.png/75px-Pressure_Cooker_symbol.png',
    },
    {
      id: 'p14',
      name: 'Desiya Murpokku Dravida Kazhagam',
      leader: 'ca14',
      alliance: 'ammk',
      seats: '60',
      symbol: 'https://i.ibb.co/26qJhBR/14.png',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Indian_Election_Symbol_Nagara.svg/50px-Indian_Election_Symbol_Nagara.svg.png',
    },
    {
      id: 'p31',
      seats: '6',
      alliance: 'ammk',
      name: 'Social Democratic Party of India',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pressure_Cooker_symbol.png/75px-Pressure_Cooker_symbol.png',
    },
    {
      id: 'p28',
      name: 'All India Majlis-e-Ittehadul Muslimeen',
      alliance: 'ammk',
      seats: '3',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Indian_Election_Symbol_Kite.svg/75px-Indian_Election_Symbol_Kite.svg.png',
    },

    // mnm
    {
      id: 'p22',
      name: 'Makkal Needhi Maiam',
      leader: 'ca22',
      alliance: 'mnm',
      seats: '143',
      symbol: 'https://i.ibb.co/GpKxbrY/22.png',
      voteImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Indian_Election_Symbol_Battery-Torch.png/90px-Indian_Election_Symbol_Battery-Torch.png',
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
      id: 'p23',
      name: 'All India Samathuva Makkal Katchi',
      leader: 'ca23',
      alliance: 'mnm',
      seats: '40',
      symbol: 'https://i.ibb.co/dBd52hs/23.png',
    },

    // independent
    {
      id: 'p20',
      name: 'Naam Tamilar Katchi',
      leader: 'cantk10',
      seats: '234',
      symbol: 'https://i.ibb.co/tCyr1RK/20.jpg',
    },
    {
      id: 'p39',
      name: 'Bahujan Samaj Party',
      seats: '40',
      symbol: 'https://i.ibb.co/0MHZVVt/39.png',
    },
    {
      id: 'p18',
      name: 'Puthiya Tamilagam',
      seats: '60',
      leader: 'ca18',
      symbol: 'https://i.ibb.co/FhZbf0z/18.jpg',
    },
    {
      id: 'p34',
      name: 'Republican Party of India',
      seats: '1',
      symbol: 'https://i.ibb.co/h2kmvmk/34.png',
    },
    {
      id: 'p32',
      name: 'Anaithu Makkal Munnetra Kazhagam',
      seats: 'TBA',
    },
    {
      id: 'p38',
      name: 'Samuga Samathuva Padai',
      seats: 'TBA',
    },
    {
      id: 'p101',
      name: "ALL PENSIONER'S PARTY",
      seats: 1,
    },
    {
      id: 'p102',
      name: 'Aanaithinthiya Jananayaka Pathukappu Kazhagam',
      seats: 4,
    },
    {
      id: 'p103',
      name: 'Ahila India Dhayaga Makkal Munnetra Katchi',
      seats: 1,
    },
    {
      id: 'p104',
      name: 'Ahimsa Socialist Party',
      seats: 3,
    },
    {
      id: 'p105',
      name: 'Akhil Bharat Hindu Mahasabha',
      seats: 46,
    },
    {
      id: 'p106',
      name: 'Akhila India Jananayaka Makkal Katchi (Dr. Isaac)',
      seats: 4,
    },
    {
      id: 'p107',
      name: 'Akila India Vallalar Peravai',
      seats: 1,
    },
    {
      id: 'p108',
      name: 'All  India  Pattali  Munnetra Katchi',
      seats: 1,
    },
    {
      id: 'p109',
      name: 'All India Ambedkar Makkal Munnetra Kazhagam',
      seats: 1,
    },
    {
      id: 'p110',
      name: 'All India Jananayaka Makkal Kazhagam',
      seats: 11,
    },
    {
      id: 'p111',
      name: 'All India MGR Makkal Munnetra Kazhagam',
      seats: 4,
    },
    {
      id: 'p112',
      name: 'All India Pattali Munnetra Katchi',
      seats: 2,
    },
    {
      id: 'p113',
      name: 'All India People Development Party',
      seats: 4,
    },
    {
      id: 'p114',
      name: 'All India Trinamool Congress',
      seats: 2,
    },
    {
      id: 'p115',
      name: 'All India Uzhavargal Uzhaippalargal Katchi',
      seats: 2,
    },
    {
      id: 'p116',
      name: 'All India Youth Development Party',
      seats: 3,
    },
    {
      id: 'p117',
      name: 'All Indian Republican Party',
      seats: 1,
    },
    {
      id: 'p118',
      name: 'All Pensioner’s Party',
      seats: 1,
    },
    {
      id: 'p119',
      name: 'Ambedkar Political Party',
      seats: 3,
    },
    {
      id: 'p120',
      name: 'Ambedkarite Party of India',
      seats: 8,
    },
    {
      id: 'p121',
      name: 'Anaithindiya Samuthaya Makkal Katchi',
      seats: 1,
    },
    {
      id: 'p122',
      name: 'Anaithu Makkal Arasiyal Katchi',
      seats: 25,
    },
    {
      id: 'p123',
      name: 'Anaithu Makkal Katchi',
      seats: 1,
    },
    {
      id: 'p124',
      name: 'Anaithu Makkal Puratchi Katchi',
      seats: 36,
    },
    {
      id: 'p125',
      name: 'Anaithu Ulaga Tamilargal Munnetra Kalagam',
      seats: 3,
    },
    {
      id: 'p126',
      name: 'Anna Dravidar Kazhagam',
      seats: 22,
    },
    {
      id: 'p127',
      name: 'Anna M.G.R. Jayalalitha Dravida Munnetra Kazhagam',
      seats: 1,
    },
    {
      id: 'p128',
      name: 'Anna MGR Dravida Makkal Kalgam',
      seats: 21,
    },
    {
      id: 'p129',
      name: 'Anna MGR Dravida Munnetra Kazhagam',
      seats: 1,
    },
    {
      id: 'p130',
      name: 'Anna Puratchi Thalaivar Amma Dravida Munnetra Kazhagam',
      seats: 30,
    },
    {
      id: 'p131',
      name: 'Annan Tamilaga Rising kazhagam',
      seats: 1,
    },
    {
      id: 'p132',
      name: 'Bahujan Dravida Party',
      seats: 19,
    },
    {
      id: 'p133',
      name: 'Bahujan Maha Party',
      seats: 1,
    },
    {
      id: 'p134',
      name: 'Bahujan Samaj Party  (Ambedkar)',
      seats: 1,
    },
    {
      id: 'p135',
      name: 'Bahujan Samaj Party(Ambedkar-Phule)',
      seats: 1,
    },
    {
      id: 'p136',
      name: 'Bharatiya Dr. B.R.Ambedkar Janta Party',
      seats: 1,
    },
    {
      id: 'p137',
      name: 'Bhartiya Manavadhikaar Federal Party',
      seats: 1,
    },
    {
      id: 'p138',
      name: 'Communist Party of India  (Marxist-Leninist)  (Liberation)',
      seats: 12,
    },
    {
      id: 'p139',
      name: 'Communist Party of India (Marxist-Leninist) Red Star',
      seats: 2,
    },
    {
      id: 'p140',
      name: 'Desa Makkal Munnetrak Kazhgam',
      seats: 1,
    },
    {
      id: 'p141',
      name: 'Desiya Makkal Sakthi Katchi',
      seats: 23,
    },
    {
      id: 'p142',
      name: 'Desiya Sirupanmayinar Makkal Iyakkam',
      seats: 11,
    },
    {
      id: 'p143',
      name: 'Dhesiya Makkal Kazhagam',
      seats: 10,
    },
    {
      id: 'p144',
      name: 'Dravida Murpokku Makkal Katchi',
      seats: 2,
    },
    {
      id: 'p145',
      name: 'Ezhuchi Tamilargal Munnetra Kazhagam',
      seats: 3,
    },
    {
      id: 'p146',
      name: 'Ganasangam Party of India',
      seats: 15,
    },
    {
      id: 'p147',
      name: 'Hindustan Janta Party',
      seats: 1,
    },
    {
      id: 'p148',
      name: 'Ilantamilar Munnani Kazhagam',
      seats: 1,
    },
    {
      id: 'p150',
      name: 'Independent Indian Congress',
      seats: 3,
    },
    {
      id: 'p151',
      name: 'Indhia Kudiarasu Katchi',
      seats: 1,
    },
    {
      id: 'p152',
      name: 'India Dravida Makkal Munnetra Katchi',
      seats: 10,
    },
    {
      id: 'p153',
      name: 'Indian National Secular Democratic Party (of India)',
      seats: 1,
    },
    {
      id: 'p154',
      name: 'Janata Dal  (Secular)',
      seats: 2,
    },
    {
      id: 'p155',
      name: 'Kamarajar Deseeya Congress',
      seats: 1,
    },
    {
      id: 'p156',
      name: 'Kongu  Desa  Marumalarchi  Makkal  Katchi',
      seats: 1,
    },
    {
      id: 'p157',
      name: 'Lok Jan Shakti Party',
      seats: 8,
    },
    {
      id: 'p158',
      name: 'Loktantrik Janshakti Party',
      seats: 1,
    },
    {
      id: 'p159',
      name: 'MAKKAL SAKTHI KATCHI',
      seats: 1,
    },
    {
      id: 'p160',
      name: 'MGR Makkal Katchi',
      seats: 5,
    },
    {
      id: 'p161',
      name: 'Mahathma Makkal Munnetra Kazhakam',
      seats: 1,
    },
    {
      id: 'p162',
      name: 'Makkal Desiya Katchi',
      seats: 2,
    },
    {
      id: 'p163',
      name: 'Makkal Masotha Katchi',
      seats: 1,
    },
    {
      id: 'p164',
      name: 'Makkal Munnetra Peravai',
      seats: 12,
    },
    {
      id: 'p165',
      name: 'Makkal Nala Kazhagam',
      seats: 2,
    },
    {
      id: 'p166',
      name: 'Makkal Nalvaazhvuk Katchi',
      seats: 2,
    },
    {
      id: 'p167',
      name: 'Makkal Sananayaga Kudiyarasu Katchi',
      seats: 2,
    },
    {
      id: 'p168',
      name: 'Makkal Thilagam Munnetra Kazhagam',
      seats: 1,
    },
    {
      id: 'p169',
      name: 'Makkalatchi Katchi',
      seats: 4,
    },
    {
      id: 'p170',
      name: 'Manitha Urimaigal Kalaagam',
      seats: 4,
    },
    {
      id: 'p171',
      name: 'My India Party',
      seats: 73,
    },
    {
      id: 'p172',
      name: 'Naadaalum Makkal Katchi',
      seats: 11,
    },
    {
      id: 'p173',
      name: 'Naam Indiar Party',
      seats: 13,
    },
    {
      id: 'p174',
      name: 'Nam India Naam Indiyar Katchi',
      seats: 6,
    },
    {
      id: 'p175',
      name: 'Namadhu Makkal Katchi',
      seats: 4,
    },
    {
      id: 'p176',
      name: 'Namathu Kongu Munnetra Kalagam',
      seats: 3,
    },
    {
      id: 'p177',
      name: 'National Democratic Party (Indian)',
      seats: 2,
    },
    {
      id: 'p178',
      name: 'National Democratic Party of South India',
      seats: 9,
    },
    {
      id: 'p179',
      name: 'National Organisation Congress',
      seats: 1,
    },
    {
      id: 'p180',
      name: "National People's Party",
      seats: 7,
    },
    {
      id: 'p181',
      name: 'Nationalist Congress Party',
      seats: 9,
    },
    {
      id: 'p182',
      name: 'New Generation People’s Party',
      seats: 22,
    },
    {
      id: 'p183',
      name: "People's Party of India(secular)",
      seats: 3,
    },
    {
      id: 'p184',
      name: 'Rashtriya Janata Dal',
      seats: 7,
    },
    {
      id: 'p185',
      name: 'Rashtriya Samaj Paksha',
      seats: 2,
    },
    {
      id: 'p186',
      name: 'Rashtriya Ulama Council',
      seats: 1,
    },
    {
      id: 'p187',
      name: 'Republican Party of India  (Sivaraj)',
      seats: 1,
    },
    {
      id: 'p188',
      name: 'Republican Party of India (A)',
      seats: 1,
    },
    {
      id: 'p189',
      name: 'Republican Party of India (Athawale)',
      seats: 26,
    },
    {
      id: 'p190',
      name: 'Republican Sena',
      seats: 1,
    },
    {
      id: 'p191',
      name: 'Revolutionary Socialist Party',
      seats: 2,
    },
    {
      id: 'p192',
      name: 'SOCIALIST UNITY CENTRE OF INDIA (COMMUNIST)',
      seats: 5,
    },
    {
      id: 'p193',
      name: 'Samajwadi Party',
      seats: 1,
    },
    {
      id: 'p194',
      name: 'Samaniya Makkal Nala Katchi',
      seats: 11,
    },
    {
      id: 'p195',
      name: 'Samata Party',
      seats: 1,
    },
    {
      id: 'p196',
      name: 'Shiv Sena',
      seats: 24,
    },
    {
      id: 'p197',
      name: 'Sirupaanmai Makkal Nala  Katchi',
      seats: 2,
    },
    {
      id: 'p198',
      name: 'South India Forward Bloc',
      seats: 1,
    },
    {
      id: 'p199',
      name: 'Tamil Maanila Katchi',
      seats: 1,
    },
    {
      id: 'p200',
      name: 'Tamil Nadu Ilangyar Katchi',
      seats: 36,
    },
    {
      id: 'p201',
      name: 'Tamil Telugu National Party',
      seats: 2,
    },
    {
      id: 'p202',
      name: 'Tamilaga Makkal Thannurimai Katchi',
      seats: 10,
    },
    {
      id: 'p203',
      name: 'Tamilar Makkal Katchi',
      seats: 2,
    },
    {
      id: 'p204',
      name: 'Tamilnadu Mahatma Gandhi Makkal Katchi',
      seats: 1,
    },
    {
      id: 'p205',
      name: 'Tamilnadu Makkal Nalvazhvu Periyakkam',
      seats: 1,
    },
    {
      id: 'p206',
      name: 'Tamizhaga Murpokku Makkal Katchi',
      seats: 5,
    },
    {
      id: 'p207',
      name: 'Thamizhaga Munnetra Congress',
      seats: 1,
    },
    {
      id: 'p208',
      name: 'Tipu Sultan Party',
      seats: 8,
    },
    {
      id: 'p209',
      name: 'Ulaga Makkal Katchi',
      seats: 1,
    },
    {
      id: 'p210',
      name: 'United States of India Party',
      seats: 9,
    },
    {
      id: 'p211',
      name: 'Universal Brotherhood Movement',
      seats: 1,
    },
    {
      id: 'p212',
      name: 'Valamaana  Tamizhagam   Katchi',
      seats: 1,
    },
    {
      id: 'p213',
      name: 'Veerath Thiyagi Viswanathadoss Thozhilalarkal Katchi',
      seats: 42,
    },
    {
      id: 'p214',
      name: 'Vidial Valarchi Perani',
      seats: 1,
    },
    {
      id: 'p215',
      name: 'Anaithindia Samudaya Munnetra Kazhagam',
      seats: 1,
    },
    {
      id: 'p216',
      name: 'Jebamani Janata',
      seats: 1,
    },
    {
      id: 'p217',
      name: 'Puratchi Bharatham',
      seats: 1,
    },
    // {
    //   id: 'p8',
    //   name: 'Marumalarchi Dravida Munnetra Kazhagam',
    //   leader: 'ca8',
    //   alliance: 'dmk',
    //   seats: '6',
    //   symbol: 'https://i.ibb.co/1zqW5fV/8.jpg',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
    // },
    // {
    //   id: 'p7',
    //   name: 'Kongunadu Makkal Desia Katchi',
    //   leader: 'ca7',
    //   alliance: 'dmk',
    //   seats: '3',
    //   symbol: 'https://i.ibb.co/CVXJGG9/7.jpg',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
    // },
    // {
    //   id: 'p10',
    //   name: 'Manithaneya Makkal Katchi',
    //   leader: 'ca10',
    //   alliance: 'dmk',
    //   seats: '2',
    //   symbol: 'https://i.ibb.co/FVMKtW8/10.jpg',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/IMG-20190704-WA0003.jpg/75px-IMG-20190704-WA0003.jpg',
    // },
    // {
    //   id: 'p9',
    //   name: 'Tamizhaga Vazhvurimai Katchi',
    //   leader: 'ca9',
    //   alliance: 'dmk',
    //   seats: '1',
    //   symbol: 'https://i.ibb.co/QK4v21w/9.jpg',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
    // },
    // {
    //   id: 'p26',
    //   name: 'Makkal Viduthalai Katchi',
    //   alliance: 'dmk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
    // },
    // {
    //   id: 'p27',
    //   name: 'Adhi Tamizhar Peravai',
    //   alliance: 'dmk',
    //   seats: '1',
    //   symbol: 'https://i.ibb.co/hML7Q34/27.png',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Indian_Election_Symbol_Rising_Sun.png/75px-Indian_Election_Symbol_Rising_Sun.png',
    // },
    // {
    //   id: 'p15',
    //   name: 'Tamil Maanila Congress',
    //   leader: 'ca15',
    //   alliance: 'admk',
    //   seats: '6',
    //   symbol: 'https://i.ibb.co/gm4Q21J/15.jpg',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },
    // {
    //   id: 'p36',
    //   name: 'Perunthalaivar Makkal Katchi',
    //   alliance: 'admk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },

    // {
    //   id: 'p41',
    //   name: 'Tamizhaga Makkal Munnetra Kazhagam',
    //   alliance: 'admk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },
    // {
    //   id: 'p42',
    //   name: 'Puratchi Bharatham',
    //   alliance: 'admk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },
    // {
    //   id: 'p43',
    //   name: 'Moovendar Munnetra Kazhagam',
    //   alliance: 'admk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },
    // {
    //   id: 'p44',
    //   name: 'All India Moovendar Munnani Kazhagam',
    //   alliance: 'admk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },
    // {
    //   id: 'p45',
    //   name: 'Pasumpon Desiya Kazhagam',
    //   alliance: 'admk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/AIADMK_Two_Leaves.png/60px-AIADMK_Two_Leaves.png',
    // },
    // {
    //   id: 'p29',
    //   name: 'Gokula Makkal Katchi',
    //   alliance: 'ammk',
    //   seats: '1',
    //   voteImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Indian_Election_Symbol_Flute.jpg/50px-Indian_Election_Symbol_Flute.jpg'
    // },
    // {
    //   id: 'p30',
    //   name: 'Marudhu Senai Sangam',
    //   alliance: 'ammk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pressure_Cooker_symbol.png/75px-Pressure_Cooker_symbol.png',
    // },
    // {
    //   id: 'p46',
    //   name: 'Viduthalai Tamil Puligal Katchi',
    //   alliance: 'ammk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pressure_Cooker_symbol.png/75px-Pressure_Cooker_symbol.png',
    // },
    // {
    //   id: 'p47',
    //   name: 'Makkal Arasu Katchi',
    //   alliance: 'ammk',
    //   seats: '1',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pressure_Cooker_symbol.png/75px-Pressure_Cooker_symbol.png',
    // },
    // {
    //   id: 'p48',
    //   name: 'Tamilaga Makkal Jananayaka Katchi',
    //   alliance: 'mnm',
    //   seats: '11',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Indian_Election_Symbol_Battery-Torch.png/90px-Indian_Election_Symbol_Battery-Torch.png',
    // },
    // {
    //   id: 'p49',
    //   name: 'Sagayam Arasiyal Peravai',
    //   alliance: 'sagayam',
    //   seats: '20',
    //   symbol: 'https://i.ibb.co/5BT6n7F/49.jpg',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ring_TNYP.jpg/59px-Ring_TNYP.jpg',
    // },
    // {
    //   id: 'p50',
    //   name: 'Tamil Nadu Youth Party',
    //   alliance: 'sagayam',
    //   seats: '15',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ring_TNYP.jpg/59px-Ring_TNYP.jpg',
    // },
    // {
    //   id: 'p51',
    //   name: 'Valamana Tamizhaga Katchi',
    //   alliance: 'sagayam',
    //   seats: '01',
    //   voteImg:
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Ring_TNYP.jpg/59px-Ring_TNYP.jpg',
    // },
    // {
    //   id: 'p52',
    //   name: 'Panangattu Padai Katchi',
    //   seats: '44',
    //   symbol: 'https://i.ibb.co/31GCc0h/52.jpg'
    // },
    // {
    //   id: 'p40',
    //   name: 'Welfare Party of India',
    //   seats: 'TBA',
    //   symbol:'https://i.ibb.co/Y7Gn8Gq/40.jpg'
    // },
    // {
    //   id: 'p35',
    //   name: 'Tamil Maanila Muslim League',
    //   seats: 'TBA',
    //   symbol:'https://i.ibb.co/nwm5PfB/35.jpg'
    // },
    // {
    //   id: 'p37',
    //   name: 'Tamil Nadu Peasants and Workers Party',
    //   seats: 'TBA',
    // },
    // {
    //   id: 'p19',
    //   name: 'Puthiya Needhi Katchi',
    //   leader: 'ca19',
    //   seats: 'TBA',
    //   symbol: 'https://i.ibb.co/0Y1nsTj/19.jpg',
    // },
    // {
    //   id: 'p16',
    //   name: 'Tamil Nadu Kongu Ilaingar Peravai',
    //   leader: 'ca16',
    //   seats: 'TBA',
    //   symbol: 'https://i.ibb.co/xKkw0g5/16.jpg',
    // },
  ],
  candidates: [...candidates],
  alliance: {
    dmk: {
      name: 'DMK+',
      color: '#F8C5C5',
      image: 'https://i.ibb.co/6g2Z5q3/1.jpg',
      seats: '234',
    },
    admk: {
      name: 'ADMK+',
      color: '#C9C9A4',
      image: 'https://i.ibb.co/qM0Gp5W/11.png',
      seats: '234',
    },
    ammk: {
      name: 'AMMK+',
      color: '#FFB872',
      image: 'https://i.ibb.co/mFQpftF/21.jpg',
      seats: '234',
    },
    mnm: {
      name: 'MNM+',
      color: '#FFB872',
      image: 'https://i.ibb.co/GpKxbrY/22.png',
      seats: '234',
    },
    // sagayam: {
    //   name: 'Sagayam+',
    //   color: '#FFB872',
    //   image: 'https://i.ibb.co/5BT6n7F/49.jpg',
    //   seats:'36'
    // },
  },
};

const masterDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OVERIDE': {
      const merge = require('deepmerge');
      return merge(initialState, action.payload, options);
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
};

const mergeArrays = (array1, array2) =>
  Object.values(
    []
      .concat(array1, array2)
      .reduce((r, c) => ((r[c.id] = Object.assign(r[c.id] || {}, c)), r), {}),
  ).sort(function (a, b) {
    return a.name - b.name;
  });

const options = {
  customMerge: (key) => {
    if (key === 'constituencies' || key === 'parties' || key === 'candidates') {
      return mergeArrays;
    }
  },
};

export default masterDataReducer;
