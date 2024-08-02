document.addEventListener('DOMContentLoaded', function() {
    const constructorLogos = {
        'Mercedes': 'https://seeklogo.com/images/M/mercedes-amg-f1-logo-1ED622D95E-seeklogo.com.png',
        'Red Bull': 'https://fr.f1authentics.com/cdn/shop/collections/b68b3bb3d7906da6f05fb028db1eeafa.jpg?v=1682677409&width=2048',
        'Ferrari': 'https://assets.turbologo.com/blog/en/2019/10/19084952/ferrari-logo-illustration-958x575.jpg',
        'McLaren': 'https://logowik.com/content/uploads/images/mclaren-formula-1-team8249.logowik.com.webp',
        'Alpine': 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine',
        'AlphaTauri': 'https://www.formula1.com/fom-website/2023/AlphaTauri/RB.jpg',
        'Aston Martin': 'https://e0.365dm.com/21/01/2048x1152/skysports-aston-martin-f1-2021_5226838.jpg?20210104102348',
        'Williams': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO95Sr8AqWi_XnZjz5r85Ni-zn7d6plV3iw&s',
        'Alfa Romeo': 'https://fanabox.com/cdn/shop/collections/alfa_20romeo_20racing_20f1_20team_20merchandise_20canada_20usa_20store_20.jpg?v=1637772076',
        'Haas': 'https://cdn.mos.cms.futurecdn.net/uuQxV8xeSFh3PpnuzAyKKV.png',
        'Sauber': 'https://pbs.twimg.com/media/GCv0tKKWQAASb_e.png',
        'Toro Rosso': 'https://i.pinimg.com/originals/71/77/94/717794aee5d7f3ee68992b703f92413b.jpg'
    };
    

    const circuitImages = {
        'Circuit de Spa-Francorchamps': 'https://www.spa-francorchamps.be/assets/9421a327-18b7-4a81-abbb-407b8ec246e0/bg-circuit.png',
        'Albert Park Circuit': 'https://www.austadiums.com/news/images/albert-park-GF.jpg',
        'Bahrain International Circuit': 'https://www.datapath.co.uk/wp-content/uploads/Bahrain-F1-circuit.jpg',
        'Jeddah Street Circuit': 'https://www.racefans.net/wp-content/uploads/2021/12/racefansdotnet-21-12-03-19-09-36-37.jpg',
        'Melbourne Grand Prix Circuit': 'https://www.austadiums.com/news/images/albert-park-GF.jpg',
        'Shanghai International Circuit': 'https://i0.wp.com/thejudge13.com/wp-content/uploads/2023/04/shanghai-international-circuit.jpeg?fit=1024%2C573&ssl=1',
        'Circuit Park Zandvoort': 'https://d3u3wx15oqvhcs.cloudfront.net/Dummy/_1260x1149_crop_center-center_75_none/onthecircuit-hero.jpeg?v=1686237820',
        'Circuit of the Americas': 'https://circuitoftheamericas.com/wp-content/uploads/USGP_141102_Seymour_1607-800x533.jpg',
        'Scandinavian Raceway': 'https://prod.r3eassets.com/assets/content/track/scandinavian-raceway-5300-image-big.jpg',
        'Baku City Circuit': 'https://www.thecheckeredflag.co.uk/wp-content/uploads/2022/02/bakusunday7-186834-copy.jpg',
        'Brands Hatch': 'https://static.standard.co.uk/2021/07/31/22/32dce8ba8dcf2ea5164f967b84f5bc84Y29udGVudHNlYXJjaGFwaSwxNjI3ODUzNjMy-2.13229381.jpg?width=1200&auto=webp&quality=75',
        'Circuit Bremgarten': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cnam3clsr1uwmocsK9H8m7Iaz6f7zarfLQ&s',
        'Buddh International Circuit': 'https://th-i.thgim.com/public/sport/3dipli/article67299374.ece/alternates/FREE_1200/Unveiling%20the%20newly%20homologated%20look%20at%20BIC.jpg',
        'Circuit de Barcelona-Catalunya': 'https://www.blackbookmotorsport.com/wp-content/uploads/2023/11/Sustainable-Circuits-Index-Envision-Consulting-Circuit-de-Barcelona-Catalunya-Mugello-Circuit-Paul-Ricard-2022-New-2.jpg',
        'Charade Circuit': 'https://www.nomad-pilotage.com/wp-content/uploads/2019/07/photo-charade.jpg',
        'Fair Park': 'https://www.statsf1.com/photos/circuits/dallas.jpg',
        'Detroit Street Circuit': 'https://cdn-4.motorsport.com/images/amp/254g5Jk0/s6/debris-fences-for-detroit-rend.jpg',
        'Dijon-Prenois': 'https://media.sport-decouverte.com/images/circuitcard/t450x230/17/0/circuit-de-dijon-prenoisjpg.jpg?v=df714',
        'Donington Park': 'https://msvstatic.blob.core.windows.net/high-res/4e5adfc7-1c44-45ad-ae6b-505bb877a84f.jpg',
        'Rouen-Les-Essarts': 'https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1607452758670-1IL3X1EB9Q9JIKEB6S08/art-PE-Rouen+2.jpg',
        'Autódromo do Estoril': 'https://www.razaoautomovel.com/wp-content/uploads/2013/11/circuito-estoril-925x498.jpg.webp',
        'Fuji Speedway': 'https://s3.amazonaws.com/speedhunters-wp-production/wp-content/uploads/2012/05/01053016/FSW_birdeye1.jpg',
        'Autódromo Juan y Oscar Gálvez': 'https://i.redd.it/32x5zsr11jv61.png',
        'Prince George Circuit': 'https://www.overtake.gg/attachments/bgr00-2-jpg.676412/',
        'Hockenheimring': 'https://www.hockenheimring.de/wp-content/uploads/2022/10/Luftbild-Maer-2020-2-1920x810.jpg',
        'Hungaroring': 'https://driver61.com/wp-content/uploads/2019/08/Hungaroring-Circuit-Guide.jpg',
        'Autodromo Enzo e Dino Ferrari': 'https://static.bolognawelcome.com/immagini/68/69/7d/6a/20220518143654_landscape_16_9_mobile.jpg',
        'Indianapolis Motor Speedway': 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_640,q_65,w_960/v1/clients/indy/Indy_Sports_Indianapolis_Motor_Speedway_39677b18-a53b-47b9-8146-d3ed7de03dbf.jpg',
        'Autódromo José Carlos Pace': 'https://sidepodcast.com/static/image/encyclopedia/f1-circuit/autodromo-jose-carlos-pace.jpg',
        'Istanbul Park': 'https://corp.formula1.com/wp-content/uploads/2021/09/SD_2020_Turkey_Helicopter_100-scaled-1.jpeg'
        // Add other circuits and their images here
    };
    
    

    const fetchDriverImage = async (driverName) => {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(driverName)}&prop=pageimages&format=json&pithumbsize=100&origin=*`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const pages = data.query.pages;
            const page = Object.values(pages)[0];
            return page.thumbnail ? page.thumbnail.source : 'https://via.placeholder.com/50';
        } catch (error) {
            console.error('Error fetching driver image:', error);
            return 'https://via.placeholder.com/50';
        }
    };

    const loadResults = async () => {
        try {
            const response = await fetch('https://ergast.com/api/f1/current/last/results.json');
            const data = await response.json();
            const results = data.MRData.RaceTable.Races[0].Results;
            const resultsList = document.getElementById('results');
            resultsList.innerHTML = '';

            for (const result of results) {
                const driverName = `${result.Driver.givenName} ${result.Driver.familyName}`;
                const driverImage = await fetchDriverImage(driverName);

                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';

                const driverInfo = document.createElement('div');
                driverInfo.className = 'driver-info';

                const driverImageElement = document.createElement('img');
                driverImageElement.src = driverImage;
                driverImageElement.alt = driverName;

                const driverText = document.createElement('span');
                driverText.textContent = `${driverName} - Position: ${result.position}`;

                driverInfo.appendChild(driverImageElement);
                driverInfo.appendChild(driverText);
                listItem.appendChild(driverInfo);

                resultsList.appendChild(listItem);
            }
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    const loadUpcomingRaces = async () => {
        try {
            const response = await fetch('https://ergast.com/api/f1/current/next.json');
            const data = await response.json();
            const races = data.MRData.RaceTable.Races;
            const upcomingList = document.getElementById('upcoming');
            upcomingList.innerHTML = '';

            races.forEach(race => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = `${race.raceName} - ${race.date}`;
                upcomingList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching upcoming races:', error);
        }
    };

    const loadTopConstructors = async () => {
        try {
            const response = await fetch('https://ergast.com/api/f1/current/constructorStandings.json');
            const data = await response.json();
            const constructors = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
            const topConstructors = constructors.slice(0, 4);
            const container = document.getElementById('top-constructors');
            container.innerHTML = '';

            topConstructors.forEach(constructor => {
                const card = document.createElement('div');
                card.className = 'card';

                const cardBg = document.createElement('div');
                cardBg.className = 'card-bg';
                const logoUrl = constructorLogos[constructor.Constructor.name] || 'https://via.placeholder.com/240x150';
                cardBg.style.backgroundImage = `url(${logoUrl})`;
                card.appendChild(cardBg);

                const cardInfo = document.createElement('div');
                cardInfo.className = 'card-info';

                const cardTitle = document.createElement('h2');
                cardTitle.textContent = constructor.Constructor.name;
                cardInfo.appendChild(cardTitle);

                const cardPoints = document.createElement('p');
                cardPoints.textContent = `Points: ${constructor.points}`;
                cardInfo.appendChild(cardPoints);

                card.appendChild(cardInfo);
                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching top constructors:', error);
        }
    };

    const loadCircuitInfo = async () => {
        try {
            const response = await fetch('https://ergast.com/api/f1/current/last.json');
            const data = await response.json();
            const lastRace = data.MRData.RaceTable.Races[0];
            const nextRaceResponse = await fetch('https://ergast.com/api/f1/current/next.json');
            const nextRaceData = await nextRaceResponse.json();
            const nextRace = nextRaceData.MRData.RaceTable.Races[0];

            // Last Circuit
            const lastCircuitImage = document.getElementById('last-circuit-image');
            const lastCircuitName = document.getElementById('last-circuit-name');
            lastCircuitImage.src = circuitImages[lastRace.Circuit.circuitName] || 'https://via.placeholder.com/100';
            lastCircuitName.textContent = lastRace.Circuit.circuitName;

            // Next Race Circuit
            const nextRaceCircuitImage = document.getElementById('next-race-circuit-image');
            const nextRaceCircuitName = document.getElementById('next-race-circuit-name');
            nextRaceCircuitImage.src = circuitImages[nextRace.Circuit.circuitName] || 'https://via.placeholder.com/100'; 
            nextRaceCircuitName.textContent = nextRace.Circuit.circuitName;
        } catch (error) {
            console.error('Error fetching circuit information:', error);
        }
    };
    
    const loadRaceInfo = async () => {
        try {
            // Fetch last race data
            const responseLast = await fetch('https://ergast.com/api/f1/current/last.json');
            const dataLast = await responseLast.json();
            const lastRace = dataLast.MRData.RaceTable.Races[0];
            const lastCircuit = lastRace.Circuit.circuitName;
            
            // Fetch next race data
            const responseNext = await fetch('https://ergast.com/api/f1/current/next.json');
            const dataNext = await responseNext.json();
            const nextRace = dataNext.MRData.RaceTable.Races[0];
            const nextCircuit = nextRace.Circuit.circuitName;
    
            // Set images and names
            const lastCircuitImage = circuitImages[lastCircuit] || 'https://via.placeholder.com/150?text=Image+not+available';
            const nextCircuitImage = circuitImages[nextCircuit] || 'https://via.placeholder.com/150?text=Image+not+available';
    
            document.getElementById('last-circuit-image').src = lastCircuitImage;
            document.getElementById('last-circuit-name').textContent = lastCircuit;
    
            document.getElementById('next-race-circuit-image').src = nextCircuitImage;
            document.getElementById('next-race-circuit-name').textContent = nextCircuit;
        } catch (error) {
            console.error('Error fetching race information:', error);
        }
    };

    const loadStandings = async () => {
        try {
            const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
            const data = await response.json();
            const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            const standingsList = document.getElementById('standings');
            standingsList.innerHTML = '';
    
            for (const standing of standings) {
                const driverName = `${standing.Driver.givenName} ${standing.Driver.familyName}`;
                const driverImage = await fetchDriverImage(driverName);
    
                const listItem = document.createElement('div');
                listItem.className = 'standing-item';
    
                const driverImageElement = document.createElement('img');
                driverImageElement.src = driverImage;
                driverImageElement.alt = driverName;
    
                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'details';
    
                const driverNameElement = document.createElement('h3');
                driverNameElement.textContent = driverName;
    
                const pointsElement = document.createElement('p');
                pointsElement.textContent = `Points: ${standing.points}`;
    
                detailsDiv.appendChild(driverNameElement);
                detailsDiv.appendChild(pointsElement);
                listItem.appendChild(driverImageElement);
                listItem.appendChild(detailsDiv);
    
                standingsList.appendChild(listItem);
            }
        } catch (error) {
            console.error('Error fetching standings:', error);
        }
    };
    
    
    loadStandings();
    loadRaceInfo();
    loadResults();
    loadUpcomingRaces();
    loadTopConstructors();
    loadCircuitInfo();
    window.onload = loadRaceInfo;
});
