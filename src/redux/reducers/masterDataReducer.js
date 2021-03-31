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
      image: 'https://i.ytimg.com/vi/tLOEqTLEdrY/maxresdefault.jpg',
    },
    {
      id: 'co2',
      name: 'Ponneri',
      dt: 'Thiruvallur',
      image: 'https://i.ibb.co/MnWK2Tv/ponneri.jpg',
    },
    {
      id: 'co3',
      name: 'Tiruttani',
      dt: 'Thiruvallur',
      image:
        'https://i.pinimg.com/originals/16/49/b8/1649b854c257f9e4d0d61a62067ce0ef.jpg',
    },
    {
      id: 'co4',
      name: 'Thiruvallur',
      dt: 'Thiruvallur',
      image:
        'https://img.maalaimalar.com/Articles/2020/Jun/202006011256391249_Tamil_News_Coronavirus-36-positive-today-in-Thiruvallur_SECVPF.gif',
    },
    {
      id: 'co5',
      name: 'Poonamallee',
      dt: 'Thiruvallur',
      image: 'https://www.livechennai.com/images/poonamallee.jpg',
    },
    {
      id: 'co6',
      name: 'Avadi',
      dt: 'Thiruvallur',
      image: 'https://i.ytimg.com/vi/l3vPsavRAIM/maxresdefault.jpg',
    },
    {
      id: 'co7',
      name: 'Maduravoyal',
      dt: 'Thiruvallur',
      image:
        'https://i.pinimg.com/originals/9b/b1/d4/9bb1d435fbbf831431b61c33d1bcdbeb.jpg',
    },
    {
      id: 'co8',
      name: 'Ambattur',
      dt: 'Thiruvallur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/India_Land_Tech_Park%2CAmbattur.JPG/220px-India_Land_Tech_Park%2CAmbattur.JPG',
    },
    {
      id: 'co9',
      name: 'Madhavaram',
      dt: 'Thiruvallur',
      image:
        'https://static.toiimg.com/thumb/msid-64312708,width-1200,height-900,resizemode-4/.jpg',
    },
    {
      id: 'co10',
      name: 'Thiruvottiyur',
      dt: 'Thiruvallur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Thyagaraswamy1.jpg/250px-Thyagaraswamy1.jpg',
    },
    {
      id: 'co11',
      name: 'Dr. Radhakrishnan Nagar',
      dt: 'Chennai',
      image:
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/3/20/w600X390/WILL_AMMA_CONNECTION.jpg',
    },
    {
      id: 'co12',
      name: 'Perambur',
      dt: 'Chennai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c0/Perambur_Railway_Station.jpg',
    },
    {
      id: 'co13',
      name: 'Kolathur',
      dt: 'Chennai',
      image: 'https://i.ytimg.com/vi/zhK7PURbfeo/maxresdefault.jpg',
    },
    {
      id: 'co14',
      name: 'Villivakkam',
      dt: 'Chennai',
      image:
        'https://timesofindia.indiatimes.com/thumb/msid-72101780,imgsize-202707,width-400,resizemode-4/72101780.jpg',
    },
    {
      id: 'co15',
      name: 'Thiru. Vi. Ka. Nagar',
      dt: 'Chennai',
      image:
        'https://images.citizenmatters.in/wp-content/uploads/sites/3/2019/04/29132744/Thiru-Vi-Ka-Park-now.png',
    },
    {
      id: 'co16',
      name: 'Egmore',
      dt: 'Chennai',
      image:
        'https://www.railwayrecruitment.co.in/wp-content/uploads/2016/02/chennai-300x194.jpg',
    },
    {
      id: 'co17',
      name: 'Royapuram',
      dt: 'Chennai',
      image:
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2012/8/25/10/w600X300/Royapuram_EPS.jpg',
    },
    {
      id: 'co18',
      name: 'Harbour',
      dt: 'Chennai',
      image:
        'https://www.thehindu.com/news/cities/chennai/pd259n/article31040663.ece/ALTERNATES/LANDSCAPE_1200/11MARTH--PORT',
    },
    {
      id: 'co19',
      name: 'Chepauk-Thiruvallikeni',
      dt: 'Chennai',
      image:
        'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/09/956291-chepauk-stadium.jpg',
    },
    {
      id: 'co20',
      name: 'Thousand Lights',
      dt: 'Chennai',
      image:
        'https://www.holidify.com/images/cmsuploads/compressed/Thousand-Lights-Mosque-1_20180510130631.jpg',
    },
    {
      id: 'co21',
      name: 'Anna Nagar',
      dt: 'Chennai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Annanagar_Tower.jpg',
    },
    {
      id: 'co22',
      name: 'Virugambakkam',
      dt: 'Chennai',
      image:
        'https://cdn-0.enacademic.com/pictures/enwiki/66/Balalok_school.jpg',
    },
    {
      id: 'co23',
      name: 'Saidapet',
      dt: 'Chennai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Saidapet.jpg/200px-Saidapet.jpg',
    },
    {
      id: 'co24',
      name: 'T. Nagar',
      dt: 'Chennai',
      image:
        'https://qph.fs.quoracdn.net/main-qimg-f38cc9c974bc44a502bdad213c0739b6.webp',
    },
    {
      id: 'co25',
      name: 'Mylapore',
      dt: 'Chennai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Kapaleeswarar1.jpg/220px-Kapaleeswarar1.jpg',
    },
    {
      id: 'co26',
      name: 'Velachery',
      dt: 'Chennai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f8/Velachery_Railway_station_June_2010.jpg',
    },
    {
      id: 'co27',
      name: 'Sholinganallur',
      dt: 'Chengalpattu',
      image:
        'https://it.tn.gov.in/sites/default/files/inline-images/chennai_front.jpg',
    },
    {
      id: 'co28',
      name: 'Alandur',
      dt: 'Kanchipuram',
      image:
        'https://themetrorailguy.com/wp-content/uploads/2015/07/ChennaiMetroTrial.jpg',
    },
    {
      id: 'co29',
      name: 'Sriperumbudur',
      dt: 'Kanchipuram',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/HyundaiChennai.JPG/240px-HyundaiChennai.JPG',
    },
    {
      id: 'co30',
      name: 'Pallavaram',
      dt: 'Chengalpattu',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pallavaram_chennai.jpg',
    },
    {
      id: 'co31',
      name: 'Tambaram',
      dt: 'Chengalpattu',
      image:
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/4/30/w900X450/CASES.jpg',
    },
    {
      id: 'co32',
      name: 'Chengalpattu',
      dt: 'Chengalpattu',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/Chengalpat_lake.jpg',
    },
    {
      id: 'co33',
      name: 'Thiruporur',
      dt: 'Chengalpattu',
      image:
        'https://1.bp.blogspot.com/-E3IwsMAQ9m0/WFIv4x9Hp7I/AAAAAAAAt60/zw7AyuyephMt_8UP7vXH3oDN_1AyAmWjwCEw/s1600/DSCN9244.JPG',
    },
    {
      id: 'co34',
      name: 'Cheyyur',
      dt: 'Chengalpattu',
      image:
        'https://3.bp.blogspot.com/-D77qGNzBcDc/V-VADRl8vPI/AAAAAAAAsdA/4UGp8XXHx3YXqew5nGAoGVrTAtlIrZsHwCLcB/s1600/4563368828_afa86fec15_b.jpg',
    },
    {
      id: 'co35',
      name: 'Maduranthakam',
      dt: 'Chengalpattu',
      image:
        'https://img.dtnext.in/Articles/2020/Nov/202011281942197975_Chengalpettus-Maduranthakam-lake-reaches-its-full-capacity_SECVPF.gif',
    },
    {
      id: 'co36',
      name: 'Uthiramerur',
      dt: 'Kanchipuram',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/90/Uthiramerur_temple.jpg',
    },
    {
      id: 'co37',
      name: 'Kancheepuram',
      dt: 'Kanchipuram',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/96/Kailasanathar_temple_Kanchipuram_%2816%29.jpg',
    },
    {
      id: 'co38',
      name: 'Arakkonam',
      dt: 'Ranipet',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/76/IAF_Tu-142_and_Il-38.jpg',
    },
    {
      id: 'co39',
      name: 'Sholingur',
      dt: 'Ranipet',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/31/Sholingar_%2815%29.JPG',
    },
    {
      id: 'co40',
      name: 'Katpadi',
      dt: 'Vellore',
      image:
        'http://st.indiarailinfo.com/kjfdsuiemjvcya23/0/9/8/0/4332980/0/20190602124133471599.jpg',
    },
    {
      id: 'co41',
      name: 'Ranipet',
      dt: 'Ranipet',
      image: 'https://ranipet.in/images/1.jpg',
    },
    {
      id: 'co42',
      name: 'Arcot',
      dt: 'Ranipet',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/52/Delhi_gate_-_river_side_view.jpg',
    },
    {
      id: 'co43',
      name: 'Vellore',
      dt: 'Vellore',
      image:
        'https://www.tourmyindia.com/states/tamilnadu/images/vellore-fort.jpg',
    },
    {
      id: 'co44',
      name: 'Anaikattu',
      dt: 'Vellore',
      image:
        'https://img.dtnext.in/Articles/2018/Jun/201806300418587319_Dam-at-Anaikattu-four-new-check-dams-planned_SECVPF.gif',
    },
    {
      id: 'co45',
      name: 'K. V. Kuppam',
      dt: 'Vellore',
      image:
        'https://www.researchgate.net/profile/Grace-Rebekah/publication/43341405/figure/fig1/AS:661962904055808@1534835663602/Map-of-KV-Kuppam-block-showing-the-study-areas-highlighted-by-horizontal-and-oblique.png',
    },
    {
      id: 'co46',
      name: 'Gudiyattam',
      dt: 'Vellore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d6/Erukampattu_sri_ranganathar_temple.png',
    },
    {
      id: 'co47',
      name: 'Vaniyambadi',
      dt: 'Tirupattur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Palar_VNB.jpg',
    },
    {
      id: 'co48',
      name: 'Ambur',
      dt: 'Tirupattur',
      image:
        'http://gastroutes.com/wp-content/uploads/2019/04/ambur-biryani.png',
    },
    {
      id: 'co49',
      name: 'Jolarpet',
      dt: 'Tirupattur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Road_to_Yelagiri.jpg',
    },
    {
      id: 'co50',
      name: 'Tirupattur',
      dt: 'Tirupattur',
      image: 'https://i.ytimg.com/vi/1N-MGrMzJIg/maxresdefault.jpg',
    },
    {
      id: 'co51',
      name: 'Uthangarai',
      dt: 'Krishnagiri',
      image: 'http://photos.wikimapia.org/p/00/04/14/24/84_big.jpg',
    },
    {
      id: 'co52',
      name: 'Bargur',
      dt: 'Krishnagiri',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baragur_02.JPG/220px-Baragur_02.JPG',
    },
    {
      id: 'co53',
      name: 'Krishnagiri',
      dt: 'Krishnagiri',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/50/Krishnagiri_temple.jpg',
    },
    {
      id: 'co54',
      name: 'Veppanahalli',
      dt: 'Krishnagiri',
      image:
        'https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-32hujuu6d5q51kggbspp2r6au5-20160228050606.Medi.jpeg',
    },
    {
      id: 'co55',
      name: 'Hosur',
      dt: 'Krishnagiri',
      image:
        'https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/file732rzsm2ak6hbid89w5-1842276375-1545358076.jpg',
    },
    {
      id: 'co56',
      name: 'Thalli',
      dt: 'Krishnagiri',
      image:
        'https://www.nativeplanet.com/photos/325x244x100/2018/11/photo-91-172955-1.jpg',
    },
    {
      id: 'co57',
      name: 'Palacode',
      dt: 'Dharmapuri',
      image: 'http://photos.wikimapia.org/p/00/04/74/64/69_big.jpg',
    },
    {
      id: 'co58',
      name: 'Pennagaram',
      dt: 'Dharmapuri',
      image:
        'https://lh3.googleusercontent.com/proxy/6BXXISn-hnPj_xfvDvQYPgARU9gG2Z2f5gaZZjaWNgjvonMZ-4drfUKM-wpqV7rgZmM792hvHoy22zjOyv-dXOC3L87lZTWY1vcz-mG-y98vh2JwJlHGl4A',
    },
    {
      id: 'co59',
      name: 'Dharmapuri',
      dt: 'Dharmapuri',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/Hogenakkal_Tamil_Nadu.JPG',
    },
    {
      id: 'co60',
      name: 'Pappireddippatti',
      dt: 'Dharmapuri',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Murugan_Hill_Temple%2C_Pappireddipatti%2C_Tamilnadu.jpg',
    },
    {
      id: 'co61',
      name: 'Harur',
      dt: 'Dharmapuri',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/View_of_Theerthamalai_from_Harur.jpg/286px-View_of_Theerthamalai_from_Harur.jpg',
    },
    {
      id: 'co62',
      name: 'Chengam',
      dt: 'Tiruvannamalai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Chengam_Sri_Venukopala_Parthasarathy_Perumal_Temple.jpg/220px-Chengam_Sri_Venukopala_Parthasarathy_Perumal_Temple.jpg',
    },
    {
      id: 'co63',
      name: 'Tiruvannamalai',
      dt: 'Tiruvannamalai',
      image:
        'https://cdn.s3waas.gov.in/s318997733ec258a9fcaf239cc55d53363/uploads/bfi_thumb/2018062826-olw7nonh46081a57xl149c2rchmo1vm25at0yoi7ii.jpg',
    },
    {
      id: 'co64',
      name: 'Kilpennathur',
      dt: 'Tiruvannamalai',
      image: 'http://photos.wikimapia.org/p/00/06/39/07/06_big.jpg',
    },
    {
      id: 'co65',
      name: 'Kalasapakkam',
      dt: 'Tiruvannamalai',
      image:
        'https://files.prokerala.com/pincode/imgs/pincode/kalasapakkam.png',
    },
    {
      id: 'co66',
      name: 'Polur',
      dt: 'Tiruvannamalai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Plour_Main_Road_Overview.jpg/220px-Plour_Main_Road_Overview.jpg',
    },
    {
      id: 'co67',
      name: 'Arani',
      dt: 'Tiruvannamalai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/%E0%AE%86%E0%AE%B0%E0%AE%A3%E0%AE%BF_%E0%AE%AA%E0%AF%8A%E0%AE%B1%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AF%82%E0%AE%B0%E0%AE%BF_%E0%AE%A8%E0%AF%81%E0%AE%B4%E0%AF%88%E0%AE%B5%E0%AF%81_%E0%AE%B5%E0%AE%BE%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D.jpg/220px-%E0%AE%86%E0%AE%B0%E0%AE%A3%E0%AE%BF_%E0%AE%AA%E0%AF%8A%E0%AE%B1%E0%AE%BF%E0%AE%AF%E0%AE%BF%E0%AE%AF%E0%AE%B2%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AF%82%E0%AE%B0%E0%AE%BF_%E0%AE%A8%E0%AF%81%E0%AE%B4%E0%AF%88%E0%AE%B5%E0%AF%81_%E0%AE%B5%E0%AE%BE%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D.jpg',
    },
    {
      id: 'co68',
      name: 'Cheyyar',
      dt: 'Tiruvannamalai',
      image: 'http://photos.wikimapia.org/p/00/03/41/09/54_full.jpg',
    },
    {
      id: 'co69',
      name: 'Vandavasi',
      dt: 'Tiruvannamalai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Fort_-_Vandavasi.jpg/220px-Fort_-_Vandavasi.jpg',
    },
    {
      id: 'co70',
      name: 'Gingee',
      dt: 'Villupuram',
      image:
        'https://www.trawell.in/admin/images/upload/54801297Gingee_Fort_Main.jpg',
    },
    {
      id: 'co71',
      name: 'Mailam',
      dt: 'Villupuram',
      image:
        'https://tntemplesproject.files.wordpress.com/2021/02/2018-09-29-1-gv15-1-1-subrahmanyar-mailam-viluppuram-11.jpg',
    },
    {
      id: 'co72',
      name: 'Tindivanam',
      dt: 'Villupuram',
      image:
        'https://st2.indiarailinfo.com/kjfdsuiemjvcya3/0/1/5/1/4561151/0/img202002091614167211996.jpg',
    },
    {
      id: 'co73',
      name: 'Vanur',
      dt: 'Villupuram',
      image:
        'https://content.jdmagicbox.com/comp/villupuram/52/9999pmulchnstd2603652/catalogue/dr-pauls-engineering-college-vanur-villupuram-colleges-7h27rao.jpg',
    },
    {
      id: 'co74',
      name: 'Villupuram',
      dt: 'Villupuram',
      image:
        'https://districts.ecourts.gov.in/sites/default/files/u188/Front%20view.JPG',
    },
    {
      id: 'co75',
      name: 'Vikravandi',
      dt: 'Villupuram',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/GMR-Vikravandi-Toll-Plaza.JPG/250px-GMR-Vikravandi-Toll-Plaza.JPG',
    },
    {
      id: 'co76',
      name: 'Tirukkoyilur',
      dt: 'Kallakurichi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Thirukovilur_temple_view.jpg',
    },
    {
      id: 'co77',
      name: 'Ulundurpettai',
      dt: 'Kallakurichi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/fb/Ulundurpet_Railway_Station.jpg',
    },
    {
      id: 'co78',
      name: 'Rishivandiyam',
      dt: 'Kallakurichi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/30/Lake_in_Rishivandiyam.JPG',
    },
    {
      id: 'co79',
      name: 'Sankarapuram',
      dt: 'Kallakurichi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Welcome_to_sankarapuram.jpg/220px-Welcome_to_sankarapuram.jpg',
    },
    {
      id: 'co80',
      name: 'Kallakurichi',
      dt: 'Kallakurichi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Four_roads_meet.jpg',
    },
    {
      id: 'co81',
      name: 'Gangavalli',
      dt: 'Salem',
      image:
        'http://1.bp.blogspot.com/_7PI9ivqIsFw/Sz7fvzL1pAI/AAAAAAAAAFk/MqkZ8qmsICc/s400/dhbus10110401.jpg',
    },
    {
      id: 'co82',
      name: 'Attur',
      dt: 'Salem',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/%22A_long_Shot_of_Fort_of_Attur%22.jpg',
    },
    {
      id: 'co83',
      name: 'Yercaud',
      dt: 'Salem',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/0e/Yercaud_lake.jpg',
    },
    {
      id: 'co84',
      name: 'Omalur',
      dt: 'Salem',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/60/MVR-Omalur-Toll-Plaza.JPG',
    },
    {
      id: 'co85',
      name: 'Mettur',
      dt: 'Salem',
      image:
        'https://3.bp.blogspot.com/-3A6RmG1fvY0/V1HQiDoDnYI/AAAAAAAAjEc/BUDVcPNdQ2w3Yl1nWYBhZ19QdqmlHTf7QCLcB/s640/31THDAM_1194341f.jpg',
    },
    {
      id: 'co86',
      name: 'Edapadi',
      dt: 'Salem',
      image:
        'https://3.bp.blogspot.com/-OPxE1GGtBWU/Vz9Tlljg1aI/AAAAAAAAhmg/tscvCtvlN1oKrJd2_yEdCpuPc3KKMXJWgCLcB/s1600/800px-Ferry_service%2540_Poolampatti.jpg',
    },
    {
      id: 'co87',
      name: 'Sankari',
      dt: 'Salem',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sankagiri_Hill_Fort_wall.jpg/220px-Sankagiri_Hill_Fort_wall.jpg',
    },
    {
      id: 'co88',
      name: 'Salem (West)',
      dt: 'Salem',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Salem_NH47_trumpet_exchange.jpg/300px-Salem_NH47_trumpet_exchange.jpg',
    },
    {
      id: 'co89',
      name: 'Salem (North)',
      dt: 'Salem',
      image:
        'http://travel.priyankawriting.com/wp-content/uploads/2017/10/IMG_20171007_145320397_HDR-01.jpeg',
    },
    {
      id: 'co90',
      name: 'Salem (South)',
      dt: 'Salem',
      image:
        'http://www.socialvillage.in/attachments/resources/42179-1-Salem-Tamilnadu-Everything-you-want-know-about-History-Weather-to.jpg',
    },
    {
      id: 'co91',
      name: 'Veerapandi',
      dt: 'Salem',
      image:
        'https://www.vidyavision.com/CollegeUploads/Photos/2016-21-12-10-56-05_salemkongu3.jpg',
    },
    {
      id: 'co92',
      name: 'Rasipuram',
      dt: 'Namakkal',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/KolliHills_Valley.JPG/230px-KolliHills_Valley.JPG',
    },
    {
      id: 'co93',
      name: 'Senthamangalam',
      dt: 'Namakkal',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/Nainamalai.JPG',
    },
    {
      id: 'co94',
      name: 'Namakkal',
      dt: 'Namakkal',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/Namakkal_Bus_Stand.jpg',
    },
    {
      id: 'co95',
      name: 'Paramathi Velur',
      dt: 'Namakkal',
      image:
        'https://xcdn.public.app/public/images/v1/variants/jpg/m/2020/07_jul/12_sun/img_1594566151806_726.jpg',
    },
    {
      id: 'co96',
      name: 'Tiruchengodu',
      dt: 'Namakkal',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Thiruchencode_temple.JPG/486px-Thiruchencode_temple.JPG',
    },
    {
      id: 'co97',
      name: 'Kumarapalayam',
      dt: 'Namakkal',
      image: 'https://live.staticflickr.com/5698/24057840555_778e05031b_b.jpg',
    },
    {
      id: 'co98',
      name: 'Erode (East)',
      dt: 'Erode',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cauvery_at_Erode.JPG/1200px-Cauvery_at_Erode.JPG',
    },
    {
      id: 'co99',
      name: 'Erode (West)',
      dt: 'Erode',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/59/Erode_brough_road.JPG',
    },
    {
      id: 'co100',
      name: 'Modakkurichi',
      dt: 'Erode',
      image:
        'https://www.indiastatpublications.com/images/assembly_factbook/Tamil-Nadu/Erode/Modakkurichi-Assembly-Factbook.jpg',
    },
    {
      id: 'co101',
      name: 'Dharapuram',
      dt: 'Tiruppur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Amaravathi_statue%2C_Dharapuram.jpg/1200px-Amaravathi_statue%2C_Dharapuram.jpg',
    },
    {
      id: 'co102',
      name: 'Kangayam',
      dt: 'Tiruppur',
      image:
        'https://cdn.s3waas.gov.in/s3d1f255a373a3cef72e03aa9d980c7eca/uploads/2018/06/2018060151.jpg',
    },
    {
      id: 'co103',
      name: 'Perundurai',
      dt: 'Erode',
      image:
        'https://mbbscouncil.com/wp-content/uploads/2019/12/IRT-Govt-Medical-College-Perundurai-Entrance.jpg',
    },
    {
      id: 'co104',
      name: 'Bhavani',
      dt: 'Erode',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bhavani-Kaveri-Sangamam.JPG/1200px-Bhavani-Kaveri-Sangamam.JPG',
    },
    {
      id: 'co105',
      name: 'Anthiyur',
      dt: 'Erode',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GURUNATHA_SWAMY_TEMPLE_FESTIVAL.jpg/250px-GURUNATHA_SWAMY_TEMPLE_FESTIVAL.jpg',
    },
    {
      id: 'co106',
      name: 'Gobichettipalayam',
      dt: 'Erode',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Western_Ghats_Gobi.jpg/200px-Western_Ghats_Gobi.jpg',
    },
    {
      id: 'co107',
      name: 'Bhavanisagar',
      dt: 'Erode',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/BhavaniSagarDam.JPG',
    },
    {
      id: 'co108',
      name: 'Udhagamandalam',
      dt: 'Nilgiris',
      image: 'https://www.ooty.ind.in/main_image/udhagamandalam-photo.jpg',
    },
    {
      id: 'co109',
      name: 'Coonoor',
      dt: 'Nilgiris',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/A_Foggy_And_Cloudy_Day_In_Coonoor.jpg',
    },
    {
      id: 'co110',
      name: 'Gudalur',
      dt: 'Nilgiris',
      image:
        'https://www.tnurbantree.tn.gov.in/gudalur-tiruppur/wp-content/uploads/sites/149/2019/10/Gudalur-Pin-View.jpg',
    },
    {
      id: 'co111',
      name: 'Mettupalayam',
      dt: 'Coimbatore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niltrain.JPG/250px-Niltrain.JPG',
    },
    {
      id: 'co112',
      name: 'Avanashi',
      dt: 'Tiruppur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/09/Avinashi_Temple.jpg',
    },
    {
      id: 'co113',
      name: 'Tiruppur North',
      dt: 'Tiruppur',
      image:
        'https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Tiruppur.jpg?itok=V3zugrKk',
    },
    {
      id: 'co114',
      name: 'Tiruppur South',
      dt: 'Tiruppur',
      image:
        'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2019/03/15/file70vp4j2bt9um9bcm6g3-1552636201.jpg?itok=sKDnhmnk',
    },
    {
      id: 'co115',
      name: 'Palladam',
      dt: 'Tiruppur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Avinashi-Tirupur-Palladam-SH.JPG',
    },
    {
      id: 'co116',
      name: 'Sulur',
      dt: 'Coimbatore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/An32roh.JPG/300px-An32roh.JPG',
    },
    {
      id: 'co117',
      name: 'Kavundampalayam',
      dt: 'Coimbatore',
      image:
        'https://content3.jdmagicbox.com/comp/coimbatore/a1/0422px422.x422.110826233658.j2a1/catalogue/municipal-office-kavundam-palayam-coimbatore-municipal-corporation-25rpwd-250.jpg',
    },
    {
      id: 'co118',
      name: 'Coimbatore North',
      dt: 'Coimbatore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Coimbatore_junction.jpg/1200px-Coimbatore_junction.jpg',
    },
    {
      id: 'co119',
      name: 'Thondamuthur',
      dt: 'Coimbatore',
      image:
        'https://content.jdmagicbox.com/comp/coimbatore/j4/0422px422.x422.110701145827.a5j4/catalogue/kovai-kalaimagal-college-of-arts-and-science-thondamuthur-coimbatore-colleges-2lm1vsd.jpg?clr=',
    },
    {
      id: 'co120',
      name: 'Coimbatore South',
      dt: 'Coimbatore',
      image:
        'https://img.etimg.com/thumb/width-640,height-480,imgsize-88936,resizemode-1,msid-53577873/small-biz/startups/startups-are-heading-to-coimbatore-away-from-the-hustle-of-chennai-and-bengaluru/tn1.jpg',
    },
    {
      id: 'co121',
      name: 'Singanallur',
      dt: 'Coimbatore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/80/Singanallur_bus.jpg',
    },
    {
      id: 'co122',
      name: 'Kinathukadavu',
      dt: 'Coimbatore',
      image:
        'https://www.milliongods.com/wp-content/uploads/2015/07/Murugan-Kinathukadavu.jpg',
    },
    {
      id: 'co123',
      name: 'Pollachi',
      dt: 'Coimbatore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/aa/Azhiyar_Dam.jpg',
    },
    {
      id: 'co124',
      name: 'Valparai',
      dt: 'Coimbatore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Valparai_GhatRoad.JPG/220px-Valparai_GhatRoad.JPG',
    },
    {
      id: 'co125',
      name: 'Udumalaipettai',
      dt: 'Tiruppur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/75/Thirumoorthi_reservoir_01.jpg',
    },
    {
      id: 'co126',
      name: 'Madathukulam',
      dt: 'Tiruppur',
      image:
        'https://st2.indiarailinfo.com/kjfdsuiemjvcya1/0/2/4/7/2221247/0/dsc00351466060.jpg',
    },
    {
      id: 'co127',
      name: 'Palani',
      dt: 'Dindigul',
      image:
        'https://cdn.s3waas.gov.in/s3f74909ace68e51891440e4da0b65a70c/uploads/bfi_thumb/2018060590-olwe8deg1c0higccue66m3w8ad0za48ucslkbzkeq2.jpg',
    },
    {
      id: 'co128',
      name: 'Oddanchatram',
      dt: 'Dindigul',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Oddanchatram.jpg/220px-Oddanchatram.jpg',
    },
    {
      id: 'co129',
      name: 'Athoor',
      dt: 'Dindigul',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/05/50/c3/14/athoor-dam.jpg',
    },
    {
      id: 'co130',
      name: 'Nilakottai',
      dt: 'Dindigul',
      image:
        'https://4.bp.blogspot.com/-1QdtKWDAQxQ/VuL9UGeCi6I/AAAAAAAAc8I/HaPQF11GsfAllV-uYzbA6jK7pvUUCMNag/s1600/12301483_138904939808748_8792884466444985360_n.jpg',
    },
    {
      id: 'co131',
      name: 'Natham',
      dt: 'Dindigul',
      image:
        'https://4.bp.blogspot.com/-r95ElsN_5Fg/Vuk94ChVCsI/AAAAAAAAdTQ/dJ0pcL31k-4IFmbqJ2OqaSoD0pGInUKug/s1600/72585529.jpg',
    },
    {
      id: 'co132',
      name: 'Dindigul',
      dt: 'Dindigul',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Dindigul_Fort.jpg/238px-Dindigul_Fort.jpg',
    },
    {
      id: 'co133',
      name: 'Vedasandur',
      dt: 'Dindigul',
      image: 'https://i.ytimg.com/vi/3VOqpKucoW4/maxresdefault.jpg',
    },
    {
      id: 'co134',
      name: 'Aravakurichi',
      dt: 'Karur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Aravakurichi_-_Jumma_Masjid_%28Big_Mosque%29_.jpg/500px-Aravakurichi_-_Jumma_Masjid_%28Big_Mosque%29_.jpg',
    },
    {
      id: 'co135',
      name: 'Karur',
      dt: 'Karur',
      image:
        'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-o6peov88vmchmno1a3nh8f0693-20161204064455.Medi.jpeg',
    },
    {
      id: 'co136',
      name: 'Krishnarayapuram',
      dt: 'Karur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thirukanmaliswarar_krishnarayapuram_%281%29.JPG/220px-Thirukanmaliswarar_krishnarayapuram_%281%29.JPG',
    },
    {
      id: 'co137',
      name: 'Kulithalai',
      dt: 'Karur',
      image:
        'https://tntemplesproject.files.wordpress.com/2021/02/2018-12-22-8-gv16-2-2-kadamba-vaneswarar-kulithalai-karur-2.jpg',
    },
    {
      id: 'co138',
      name: 'Manapaarai',
      dt: 'Tiruchirappalli',
      image:
        'https://thinpandangal.com/wp-content/uploads/2020/01/Manapaarai-Murukku-1-1.jpg',
    },
    {
      id: 'co139',
      name: 'Srirangam',
      dt: 'Tiruchirappalli',
      image:
        'https://www.thehindu.com/news/cities/Tiruchirapalli/r7i4b5/article32610603.ece/ALTERNATES/LANDSCAPE_1200/15SEPTTH--SRIRANGAM',
    },
    {
      id: 'co140',
      name: 'Tiruchirappalli (West)',
      dt: 'Tiruchirappalli',
      image:
        'https://www.tripsavvy.com/thmb/9EsrCLDukuRs4p9JOm1ZKs_eaxY=/2124x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-181080335-5c59138446e0fb000152fba8.jpg',
    },
    {
      id: 'co141',
      name: 'Tiruchirappalli (East)',
      dt: 'Tiruchirappalli',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8b/Trichyairportfront.jpg',
    },
    {
      id: 'co142',
      name: 'Thiruverumbur',
      dt: 'Tiruchirappalli',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtA_cnHJpX4-BDn1XXMlYOIdkMOjGyo9zcBw&usqp=CAU',
    },
    {
      id: 'co143',
      name: 'Lalgudi',
      dt: 'Tiruchirappalli',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/eb/Lalgudi_Railway_Station.jpg',
    },
    {
      id: 'co144',
      name: 'Manachanallur',
      dt: 'Tiruchirappalli',
      image:
        'https://2.bp.blogspot.com/-52xHVsyK8TU/WpQ0s675maI/AAAAAAABCzw/yAKZM7Of0uMbuHbHrkSyDQWPGVOZnPGQwCEwYBhgL/s1600/Manachanallur_Bhoominathar%2B%25285%2529.JPG',
    },
    {
      id: 'co145',
      name: 'Musiri',
      dt: 'Tiruchirappalli',
      image:
        'https://image.nakkheeran.in/cdn/farfuture/5qxks6RN8AAw47bCXc6U-7q9-6Lh-1c-vWErG32Qj8g/1601172628/sites/default/files/inline-images/musiri%20%281%29.jpg',
    },
    {
      id: 'co146',
      name: 'Thuraiyur',
      dt: 'Tiruchirappalli',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Perumal_Malai_Temple.jpg',
    },
    {
      id: 'co147',
      name: 'Perambalur',
      dt: 'Perambalur',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/0e/e5/30/57/mosque-like-structure.jpg',
    },
    {
      id: 'co148',
      name: 'Kunnam',
      dt: 'Perambalur',
      image:
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/10/23/w900X450/Dinosaur_eggs.jpg',
    },
    {
      id: 'co149',
      name: 'Ariyalur',
      dt: 'Ariyalur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/8c/Ariyalur_Railway_Station.jpg',
    },
    {
      id: 'co150',
      name: 'Jayankondam',
      dt: 'Ariyalur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/48/GangaiKonda_Cholapuram%28Front_View%29.JPG',
    },
    {
      id: 'co151',
      name: 'Tittakudi',
      dt: 'Cuddalore',
      image:
        'http://www.findmytemple.com/images/Article_Images/T128_vaitheeshvaran_temple3.png',
    },
    {
      id: 'co152',
      name: 'Vriddhachalam',
      dt: 'Cuddalore',
      image:
        'https://content3.jdmagicbox.com/comp/vriddhachalam/t3/9999p4143.4143.181113144902.c2t3/catalogue/sri-virudhagireeswarar-temple-vriddhachalam-mtc0weamg3.jpg',
    },
    {
      id: 'co153',
      name: 'Neyveli',
      dt: 'Cuddalore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neyveli_4.jpg/220px-Neyveli_4.jpg',
    },
    {
      id: 'co154',
      name: 'Panruti',
      dt: 'Cuddalore',
      image: 'http://photos.wikimapia.org/p/00/04/61/02/89_full.jpg',
    },
    {
      id: 'co155',
      name: 'Cuddalore',
      dt: 'Cuddalore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Catamaran_boat%2Ccuddalore.tamilnadu_-_panoramio.jpg/250px-Catamaran_boat%2Ccuddalore.tamilnadu_-_panoramio.jpg',
    },
    {
      id: 'co156',
      name: 'Kurinjipadi',
      dt: 'Cuddalore',
      image:
        'https://st.indiarailinfo.com/kjfdsuiemjvcya24/0/0/3/8/4559038/0/201907271565718.jpg',
    },
    {
      id: 'co157',
      name: 'Bhuvanagiri',
      dt: 'Cuddalore',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3d/A_view_of_Bhongir_Fort%2C_AP_W_IMG_3108.jpg',
    },
    {
      id: 'co158',
      name: 'Chidambaram',
      dt: 'Cuddalore',
      image:
        'https://images.sadhguru.org/sites/default/files/media_files/chidambaram-temple.jpg',
    },
    {
      id: 'co159',
      name: 'Kattumannarkoil',
      dt: 'Cuddalore',
      image:
        'https://lh3.googleusercontent.com/proxy/TZwfR9yJ7nmUEI8kfSt_0hdNhmBAmPc7nMAhgNS4erHQO0jGNjUmHMkH122S-O0HF4JGdHRut5iI_29ce578mVUIRba4hQgopkdBX3sj7vqZIq6VYvI7hs_AdbORFW-j92KrBFE',
    },
    {
      id: 'co160',
      name: 'Sirkazhi',
      dt: 'Mayiladuthurai',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-6SqdOn17zSd8lBW9TfAVFHL-FOXEGM4lw&usqp=CAU',
    },
    {
      id: 'co161',
      name: 'Mayiladuthurai',
      dt: 'Mayiladuthurai',
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/56/Kaveri_Bridge_Mayiladuthurai.jpg',
    },
    {
      id: 'co162',
      name: 'Poompuhar',
      dt: 'Mayiladuthurai',
      image:
        'https://www.nativeplanet.com/img/2018/11/poompuhar-view-from-the-lighthouse-1542282512.jpg',
    },
    {
      id: 'co163',
      name: 'Nagapattinam',
      dt: 'Nagapattinam',
      image:
        'https://www.weekendthrill.com/wp-content/uploads/2016/07/Nagapattinam-compressed.jpg',
    },
    {
      id: 'co164',
      name: 'Kilvelur',
      dt: 'Nagapattinam',
      image:
        'https://allthecities.com/image_c/320x175/000/906/081/original/original.',
    },
    {
      id: 'co165',
      name: 'Vedaranyam',
      dt: 'Nagapattinam',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Vedaranyam_stubi.jpg',
    },
    {
      id: 'co166',
      name: 'Thiruthuraipoondi',
      dt: 'Tiruvarur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Thiruthuraipoondi_temple.jpg/200px-Thiruthuraipoondi_temple.jpg',
    },
    {
      id: 'co167',
      name: 'Mannargudi',
      dt: 'Tiruvarur',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/f3/28/1a/haridranadhi.jpg',
    },
    {
      id: 'co168',
      name: 'Thiruvarur',
      dt: 'Tiruvarur',
      image:
        'https://1.bp.blogspot.com/-y0m2r6ZMoXA/V4MEIlUSgYI/AAAAAAAALHw/bRykTxxno7MjK_wREZyAjWMFHwO7tfveQCLcB/s1600/foot_slide.jpg',
    },
    {
      id: 'co169',
      name: 'Nannilam',
      dt: 'Tiruvarur',
      image:
        'https://st.indiarailinfo.com/kjfdsuiemjvcya22/0/7/3/3/1986733/0/dsc04453copy2296790.jpg',
    },
    {
      id: 'co170',
      name: 'Thiruvidaimarudur',
      dt: 'Thanjavur',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/06/21/54/54/thiruvidaimarudur-mahalinga.jpg',
    },
    {
      id: 'co171',
      name: 'Kumbakonam',
      dt: 'Thanjavur',
      image:
        'https://amritavision.com/wp-content/uploads/2019/05/thanjavur-kumbakonam.jpg',
    },
    {
      id: 'co172',
      name: 'Papanasam',
      dt: 'Thanjavur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9c/Palaivananathar_tower1.JPG',
    },
    {
      id: 'co173',
      name: 'Thiruvaiyaru',
      dt: 'Thanjavur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Kaviri_at_Thiruvaiyaru.jpg',
    },
    {
      id: 'co174',
      name: 'Thanjavur',
      dt: 'Thanjavur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Brihadisvara_Temple%2C_Thanjavur%2C_Tamil_Nadu%2C_India.jpg/220px-Brihadisvara_Temple%2C_Thanjavur%2C_Tamil_Nadu%2C_India.jpg',
    },
    {
      id: 'co175',
      name: 'Orathanadu',
      dt: 'Thanjavur',
      image:
        'https://lh3.googleusercontent.com/proxy/SMGMDwAYv6WCF0zpiwXtgQYKOAbVYjCMqLmnwxCR4glMO42J1_BLGfUMXI0LeJ-nDAInfWnneWjJhMdqUOnAzPv0ZwkQ97gKF2CO',
    },
    {
      id: 'co176',
      name: 'Pattukkottai',
      dt: 'Thanjavur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/90/Manora_renamed.jpg',
    },
    {
      id: 'co177',
      name: 'Peravurani',
      dt: 'Thanjavur',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Rice_paddy_fields.jpg/220px-Rice_paddy_fields.jpg',
    },
    {
      id: 'co178',
      name: 'Gandharvakottai',
      dt: 'Pudukottai',
      image: 'https://live.staticflickr.com/4415/36577225101_a1d0d299f4_b.jpg',
    },
    {
      id: 'co179',
      name: 'Viralimalai',
      dt: 'Pudukottai',
      image:
        'https://cdn.s3waas.gov.in/s342e7aaa88b48137a16a1acd04ed91125/uploads/bfi_thumb/2018061882-e1554203567615-olwarn7f5r9qx7im5z9d92zakpskw032vg72t6i2dm.jpg',
    },
    {
      id: 'co180',
      name: 'Pudukkottai',
      dt: 'Pudukottai',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ce/18/65/photo7jpg.jpg?w=1000&h=600&s=1',
    },
    {
      id: 'co181',
      name: 'Thirumayam',
      dt: 'Pudukottai',
      image:
        'https://thenomadicguy.files.wordpress.com/2015/07/thirumayam-fort-pudukkottai-tamil-nadu.jpg',
    },
    {
      id: 'co182',
      name: 'Alangudi',
      dt: 'Pudukottai',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/1a/89/d9/4c/img-20200108-114233-largejpg.jpg',
    },
    {
      id: 'co183',
      name: 'Aranthangi',
      dt: 'Pudukottai',
      image: 'https://live.staticflickr.com/3769/32994201366_ebe8c2005d_b.jpg',
    },
    {
      id: 'co184',
      name: 'Karaikudi',
      dt: 'Sivaganga',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chettinad_palace_in_Karaikudi.jpg/200px-Chettinad_palace_in_Karaikudi.jpg',
    },
    {
      id: 'co185',
      name: 'Tiruppattur',
      dt: 'Sivaganga',
      image:
        'https://content3.jdmagicbox.com/comp/sivaganga/q8/9999p4575.4575.140630103631.q7q8/catalogue/plaza-school-tiruppattur-sivaganga-schools-5vzap735bh.jpg',
    },
    {
      id: 'co186',
      name: 'Sivaganga',
      dt: 'Sivaganga',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/8/84/Sivaganga_arch.JPG',
    },
    {
      id: 'co187',
      name: 'Manamadurai',
      dt: 'Sivaganga',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Manamadurai-new.JPG/320px-Manamadurai-new.JPG',
    },
    {
      id: 'co188',
      name: 'Melur',
      dt: 'Madurai',
      image:
        'https://www.thehindu.com/news/cities/Madurai/n2kmwm/article30391580.ece/ALTERNATES/LANDSCAPE_1200/MA25-MELURBUSSTAND',
    },
    {
      id: 'co189',
      name: 'Madurai East',
      dt: 'Madurai',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=500&h=300&s=1',
    },
    {
      id: 'co190',
      name: 'Sholavandan',
      dt: 'Madurai',
      image: 'https://live.staticflickr.com/65535/49258838748_164cb73b3c_b.jpg',
    },
    {
      id: 'co191',
      name: 'Madurai North',
      dt: 'Madurai',
      image:
        'https://static.india.com/wp-content/uploads/2020/05/cycling-415x246.jpg',
    },
    {
      id: 'co192',
      name: 'Madurai South',
      dt: 'Madurai',
      image:
        'https://images.financialexpress.com/2020/10/madurai-india-jasmine-city.jpg',
    },
    {
      id: 'co193',
      name: 'Madurai Central',
      dt: 'Madurai',
      image:
        'https://lp-cms-production.imgix.net/2020-09/shutterstock_1384885595MADURAI%2C%20INDIA%2018%20FEBRUARY%202017%20%20%20Indian%20Vendor%20selling%20various%20goods%20at%20street%20market%20near%20Meenakshi%20Temple%2C%20Madurai%2C%20Tamil%20Nadu%2C%20India..jpg?format=auto',
    },
    {
      id: 'co194',
      name: 'Madurai West',
      dt: 'Madurai',
      image:
        'https://www.nativeplanet.com/img/2014/07/18-1405687493-1-madurai.jpg',
    },
    {
      id: 'co195',
      name: 'Thiruparankundram',
      dt: 'Madurai',
      image:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/91/62.jpg',
    },
    {
      id: 'co196',
      name: 'Tirumangalam',
      dt: 'Madurai',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/7f/Tirumangalam-Usilai_Road.jpg',
    },
    {
      id: 'co197',
      name: 'Usilampatti',
      dt: 'Madurai',
      image:
        'https://content3.jdmagicbox.com/comp/madurai/g2/0452px452.x452.181128073405.i2g2/catalogue/usilampatty-bus-stand-usilampatti-madurai-s627z1eq7o.jpg?clr=333333',
    },
    {
      id: 'co198',
      name: 'Andipatti',
      dt: 'Theni',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Andipatti_Rly._Stn..JPG/1200px-Andipatti_Rly._Stn..JPG',
    },
    {
      id: 'co199',
      name: 'Periyakulam',
      dt: 'Theni',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Varaga_Nathi.jpg/220px-Varaga_Nathi.jpg',
    },
    {
      id: 'co200',
      name: 'Bodinayakanur',
      dt: 'Theni',
      image: 'https://www.thespicery.com/media/wysiwyg/File_001.jpeg',
    },
    {
      id: 'co201',
      name: 'Cumbum',
      dt: 'Theni',
      image:
        'https://1.bp.blogspot.com/--u6G39-eVrM/VguaBUMTmJI/AAAAAAAAKE0/pD7nCAsaXdE/s1600/72249768.jpg',
    },
    {
      id: 'co202',
      name: 'Rajapalayam',
      dt: 'Virudhunagar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/02._Bheem_the_male_rajapalayam.jpg/220px-02._Bheem_the_male_rajapalayam.jpg',
    },
    {
      id: 'co203',
      name: 'Srivilliputhur',
      dt: 'Virudhunagar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Andal_Temple.jpg',
    },
    {
      id: 'co204',
      name: 'Sattur',
      dt: 'Virudhunagar',
      image:
        'https://2.bp.blogspot.com/-W099CRDBO0A/WGz4t-W5ndI/AAAAAAAAwMc/eK4zS3OHvQYQyQSqZxuw3qpgnQL4NcohgCLcB/s640/T_500_1182.jpg',
    },
    {
      id: 'co205',
      name: 'Sivakasi',
      dt: 'Virudhunagar',
      image:
        'https://qph.fs.quoracdn.net/main-qimg-050d907e0926216dbb45a7e2f1a1cd57',
    },
    {
      id: 'co206',
      name: 'Virudhunagar',
      dt: 'Virudhunagar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/96/1009944_790468310992612_3392565474620580691_n_2015_snap.jpg',
    },
    {
      id: 'co207',
      name: 'Aruppukkottai',
      dt: 'Virudhunagar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Aruppukottai_municipality_office.jpg/331px-Aruppukottai_municipality_office.jpg',
    },
    {
      id: 'co208',
      name: 'Tiruchuli',
      dt: 'Virudhunagar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tiruchuli_Thirumeni_nathar_temple.jpg/220px-Tiruchuli_Thirumeni_nathar_temple.jpg',
    },
    {
      id: 'co209',
      name: 'Paramakudi',
      dt: 'Ramanathapuram',
      image:
        'https://content3.jdmagicbox.com/comp/paramakudi/l7/9999p4564.4564.171230221149.b5l7/catalogue/ponnaiah-mess-paramakudi-restaurants-ls2q7.jpg',
    },
    {
      id: 'co210',
      name: 'Tiruvadanai',
      dt: 'Ramanathapuram',
      image: 'https://i.ytimg.com/vi/c6QmNsUVW9I/maxresdefault.jpg',
    },
    {
      id: 'co211',
      name: 'Ramanathapuram',
      dt: 'Ramanathapuram',
      image:
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/4/14/w900X450/New_rail_bridgew.jpg',
    },
    {
      id: 'co212',
      name: 'Mudhukulathur',
      dt: 'Ramanathapuram',
      image:
        'https://xcdn.public.app/public/images/v1/variants/jpg/m/2020/07_jul/16_thu/img_1594901405421_337.jpg',
    },
    {
      id: 'co213',
      name: 'Vilathikulam',
      dt: 'Thoothukudi',
      image:
        'https://image.nakkheeran.in/cdn/farfuture/rie-aSkLSp7Mzhg60JIvm34xVB6R_7QCDwmO8RhrEbc/1603285734/sites/default/files/2020-10-21/zsfsfsfsfs.jpg',
    },
    {
      id: 'co214',
      name: 'Thoothukudi',
      dt: 'Thoothukudi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/71/Tuticorin_Thermal_Power_Station_at_Night_1_crop.jpg',
    },
    {
      id: 'co215',
      name: 'Tiruchendur',
      dt: 'Thoothukudi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/5e/Thiruchendur_Temple_Rajagopuram.JPG',
    },
    {
      id: 'co216',
      name: 'Srivaikuntam',
      dt: 'Thoothukudi',
      image:
        'https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/SRIVAIKUNTAM%20DAM.jpg',
    },
    {
      id: 'co217',
      name: 'Ottapidaram',
      dt: 'Thoothukudi',
      image: 'https://i.ytimg.com/vi/AXG9KJonpXg/hqdefault.jpg',
    },
    {
      id: 'co218',
      name: 'Kovilpatti',
      dt: 'Thoothukudi',
      image:
        'https://timesofindia.indiatimes.com/thumb/msid-75472391,imgsize-163307,width-400,resizemode-4/75472391.jpg',
    },
    {
      id: 'co219',
      name: 'Sankarankovil',
      dt: 'Tenkasi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Skoil1.jpg/220px-Skoil1.jpg',
    },
    {
      id: 'co220',
      name: 'Vasudevanallur',
      dt: 'Tenkasi',
      image: 'https://i.ytimg.com/vi/S3Hr9vTm2Hk/maxresdefault.jpg',
    },
    {
      id: 'co221',
      name: 'Kadayanallur',
      dt: 'Tenkasi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Cloudy_Mountain_near_Kadayanallur.jpg/200px-Cloudy_Mountain_near_Kadayanallur.jpg',
    },
    {
      id: 'co222',
      name: 'Tenkasi',
      dt: 'Tenkasi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Courtallam_falls.jpg/1200px-Courtallam_falls.jpg',
    },
    {
      id: 'co223',
      name: 'Alangulam',
      dt: 'Tenkasi',
      image:
        'https://1.bp.blogspot.com/-rIBxsCHjLws/WLKzixj1StI/AAAAAAAA0Po/sE2obbjGL0EkbMTG6uNdBhP4dlwWhF1dwCLcB/s1600/728774446.jpg',
    },
    {
      id: 'co224',
      name: 'Tirunelveli',
      dt: 'Tirunelveli',
      image:
        'https://www.halwaplaza.com/63-large_default/tirunelveli-halwa-online.jpg',
    },
    {
      id: 'co225',
      name: 'Ambasamudram',
      dt: 'Tirunelveli',
      image:
        'https://www.nativeplanet.com/img/2018/12/manimuthar-dam-1545303039.jpg',
    },
    {
      id: 'co226',
      name: 'Palayamkottai',
      dt: 'Tirunelveli',
      image:
        'https://4.bp.blogspot.com/-9iCwjM1HId0/WM0WeWUWJqI/AAAAAAAA04s/-YJhK7LRDqw9pKXsbZ_PrF8y6RxgXFWUgCEw/s1600/20563489571_7e45cf7052_b.jpg',
    },
    {
      id: 'co227',
      name: 'Nanguneri',
      dt: 'Tirunelveli',
      image:
        'https://img.dtnext.in/Articles/2019/Oct/201910140244441603_Special-Economic-Zone-to-be-a-major-poll-issue-in-Nanguneri_SECVPF.gif',
    },
    {
      id: 'co228',
      name: 'Radhapuram',
      dt: 'Tirunelveli',
      image:
        'https://3.bp.blogspot.com/-fip_UXF_jJM/VvYUHuA4hxI/AAAAAAAACUg/0O2-IAkTi6IZl-2NBM-h-1CXqVTNndNSA/s1600/RADHAPURAM%2BBUS%2BSTAND.jpg',
    },
    {
      id: 'co229',
      name: 'Kanniyakumari',
      dt: 'Kanniyakumari',
      image:
        'https://img.dtnext.in/Articles/2020/Sep/202009050249272052_Kanniyakumari-LS-seat-vacancy-notified_SECVPF.gif',
    },
    {
      id: 'co230',
      name: 'Nagercoil',
      dt: 'Kanniyakumari',
      image:
        'https://www.sweetkadai.com/164-thickbox_default/nagercoil-nendaram-chips.jpg',
    },
    {
      id: 'co231',
      name: 'Colachel',
      dt: 'Kanniyakumari',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Colachel_harbour.jpg',
    },
    {
      id: 'co232',
      name: 'Padmanabhapuram',
      dt: 'Kanniyakumari',
      image:
        'http://www.emperortraveline.com/wp-content/uploads/2018/11/Padmanabapuram-Palace.png',
    },
    {
      id: 'co233',
      name: 'Vilavancode',
      dt: 'Kanniyakumari',
      image:
        'https://www.indianetzone.com/photos_gallery/90/Vilavancode_Struggle_History_of_Kanyakumari_District_1.jpg',
    },
    {
      id: 'co234',
      name: 'Killiyoor',
      dt: 'Kanniyakumari',
      image:
        'https://tamil.oneindia.com/img/2016/05/05-1462447993-killiyoor-constituency-600.jpg',
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
