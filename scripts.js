const PARTS ={powertrain:{tree:{name:"Powertrain",type:"oem",flag:"🏭",desc:"Complete ICE powertrain assembly.\n~1,800 unique part numbers.\nAssembled at OEM plant.",children:[{name:"Engine Assembly",type:"assembly",flag:"🔧",desc:"Internal combustion engine. ~600 unique parts.",children:[{name:"Engine Block",type:"component",flag:"🔷",desc:"Aluminum alloy casting. Houses cylinders,coolant passages,oil galleries.",children:[{name:"Mexican Al Die-Casting Co.",type:"tier1",country:"MX",flag:"🇲🇽",risk:"low",desc:"World's largest independent aluminum engine block caster. Supplies major European and American OEMs."},{name:"Swiss Precision Casting Co.",type:"tier1",country:"CH",flag:"🇨🇭",risk:"low",desc:"Iron and aluminum castings for European OEMs."},{name:"Primary Aluminum",type:"tier2",flag:"🪙",risk:"medium",desc:"Al alloy ingots (A380,319). ~8kg per block.",children:[{name:"Canadian Rolled Aluminum Co.",type:"raw",country:"CA",flag:"🇨🇦",risk:"low",desc:"Rolled aluminum specialist supplying automotive foundries."},{name:"Norwegian Primary Aluminum Co.",type:"raw",country:"NO",flag:"🇳🇴",risk:"low",desc:"Primary aluminum smelting using hydroelectric power."},{name:"Guinean Bauxite Mining",type:"raw",country:"GN",flag:"🇬🇳",risk:"medium",desc:"Guinea supplies 24% of global bauxite. Political instability risk."}]},{name:"Chinese Metallurgical Silicon",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"China produces ~65% of metallurgical silicon used in Al-Si alloys for engine castings."}]},{name:"Pistons",type:"component",flag:"🔩",desc:"Forged aluminum pistons + 3 rings each. ~0.4kg per piston.",children:[{name:"German Piston Manufacturer",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"World's #1 piston maker. Supplies BMW,Mercedes,VW,GM,Ford. Operates in 30+ countries."},{name:"American Piston & Rings Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Pistons and piston rings. Major US and European OEM supplier."},{name:"German Piston & Bearing Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Kolbenschmidt brand. Pistons and plain bearings for high-volume engines."}]},{name:"Crankshaft",type:"component",flag:"⚙️",desc:"Forged alloy steel (4340/4140). Converts piston force to rotation.",children:[{name:"Indian Crankshaft Forging Co.",type:"tier1",country:"IN",flag:"🇮🇳",risk:"low",desc:"World's 2nd-largest forging company. Crankshafts for BMW,Ford,Daimler,VW."},{name:"German Steel Forging Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Precision forged crankshafts and connecting rods."},{name:"Alloy Steel Billets",type:"tier2",flag:"🔩",risk:"low",desc:"SAE 4140/4340 chrome-moly steel. Forged then precision ground.",children:[{name:"South Korean Steel Mill",type:"raw",country:"KR",flag:"🇰🇷",risk:"low",desc:"World-class flat steel and specialty steel producer."},{name:"Japanese Steel Mill",type:"raw",country:"JP",flag:"🇯🇵",risk:"low",desc:"Japan's largest steelmaker. High-grade crankshaft steel."},{name:"Chinese Molybdenum Producer",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"China produces 45% of global molybdenum. Key alloying element for crankshaft steel."}]}]},{name:"Fuel Injection",type:"component",flag:"💉",desc:"GDI system:up to 350 bar pressure. Injectors,HPFP,common rail.",children:[{name:"German Fuel Injection Leader",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"~55% global diesel injection market. Invented commercial common rail. Massive vertical integration."},{name:"Japanese Auto Components Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Pioneered common rail diesel (1995). Primary supplier for Toyota and Honda."},{name:"German Automotive Electronics Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"GDI and PCM systems for VW Group,GM,Ford."},{name:"Automotive MCUs",type:"tier2",flag:"💾",risk:"high",desc:"Microcontrollers for injector timing and pressure control.",children:[{name:"German Automotive MCU Co.",type:"raw",country:"DE",flag:"🇩🇪",risk:"medium",desc:"World's #1 automotive MCU maker. AURIX TriCore architecture for safety-critical systems."},{name:"Dutch Chip Manufacturer",type:"raw",country:"NL",flag:"🇳🇱",risk:"medium",desc:"S32 series automotive processors. Major in vehicle networking ICs."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME RISK:Manufactures ~35% of all automotive MCUs. 2021 chip shortage shut down OEM lines globally."}]}]},{name:"Turbocharger",type:"component",flag:"🌀",desc:"Twin-scroll / VTG. Turbine in Inconel nickel superalloy. Up to 300,000 RPM.",children:[{name:"Swiss Turbocharger Co.",type:"tier1",country:"CH",flag:"🇨🇭",risk:"low",desc:"~35% global turbo market share. Supplies Ford EcoBoost,GM,BMW,VW."},{name:"American Turbo Systems Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"~25% global share. VTG and twin-scroll turbos. Porsche,BMW,VW."},{name:"Japanese Turbocharger Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"~15% global share. Primary supplier to Toyota,Honda,Subaru."},{name:"Nickel Superalloys",type:"tier2",flag:"🪩",risk:"medium",desc:"Inconel 713/738 for turbine wheels. Investment cast to near-net shape.",children:[{name:"American Superalloy Caster",type:"raw",country:"US",flag:"🇺🇸",risk:"low",desc:"Precision investment castings for Inconel turbine wheels."},{name:"Indonesian Nickel Mining",type:"raw",country:"ID",flag:"🇮🇩",risk:"medium",desc:"Indonesia produces 50% of global nickel. Critical for superalloy turbine blades."}]}]},{name:"Catalytic Converter",type:"component",flag:"♻️",desc:"Three-Way Catalyst (TWC). Platinum,palladium,rhodium on cordierite substrate.",children:[{name:"American Exhaust Systems Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Complete exhaust and aftertreatment systems. Dominant in North American market."},{name:"French Exhaust Systems Co.",type:"tier1",country:"FR",flag:"🇫🇷",risk:"low",desc:"#1 global exhaust supplier. SCR,DPF,complete exhaust lines."},{name:"British Catalyst Materials Co.",type:"tier1",country:"GB",flag:"🇬🇧",risk:"low",desc:"PGM catalyst washcoat technology. Supplies all major exhaust system integrators."},{name:"PGM Metals",type:"tier2",flag:"💎",risk:"high",desc:"Platinum Group Metals. Most geographically concentrated commodity in all of automotive.",children:[{name:"South African Platinum Miner",type:"raw",country:"ZA",flag:"🇿🇦",risk:"high",desc:"VERY HIGH:South Africa produces 75% of global platinum. Load-shedding & strike exposure."},{name:"Russian Palladium Producer",type:"raw",country:"RU",flag:"🇷🇺",risk:"high",desc:"HIGH:Russia provides 40% of global palladium. Under ongoing sanctions pressure."},{name:"South African Rhodium Source",type:"raw",country:"ZA",flag:"🇿🇦",risk:"high",desc:"EXTREME:80% from South Africa. Only 30 tonnes mined globally per year. Spiked to $29,000/oz in 2021."}]},{name:"Ceramic Substrate",type:"tier2",flag:"🔲",risk:"low",desc:"Cordierite honeycomb. 400–900 cells/in².",children:[{name:"Japanese Ceramic Substrate Co.",type:"raw",country:"JP",flag:"🇯🇵",risk:"low",desc:"Dominant global supplier of automotive catalyst substrates and DPF filters."},{name:"American Ceramic Substrate Co.",type:"raw",country:"US",flag:"🇺🇸",risk:"low",desc:"DPF and GPF substrates for emissions aftertreatment."}]}]},{name:"Engine ECU",type:"component",flag:"🧠",desc:"Engine control unit. 150–200 pin connector. AUTOSAR software stack.",children:[{name:"German ECU Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"~30% ECU market. In-house AUTOSAR software stack. Dominant in European OEMs."},{name:"German Powertrain Electronics Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"SIM/EMS series ECMs. Strong in VW Group,GM."},{name:"Japanese ECU Manufacturer",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Toyota and Honda primary ECU supplier."},{name:"SoC / MCU Chips",type:"tier2",flag:"💾",risk:"high",desc:"Automotive-grade chips on 28nm–7nm process nodes.",children:[{name:"Japanese Automotive SoC Co.",type:"raw",country:"JP",flag:"🇯🇵",risk:"medium",desc:"Japan's largest automotive MCU supplier. RH850 and R-Car SoC families."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:Manufactures chips for German,Dutch,and Japanese MCU companies. Arizona fab opened 2024 but limited capacity."}]}]},{name:"Cooling System",type:"component",flag:"🌡️",desc:"Radiator,water pump,thermostat,fans,hoses. Maintains 85–105°C operating temp.",children:[{name:"French Thermal Systems Co.",type:"tier1",country:"FR",flag:"🇫🇷",risk:"low",desc:"Top-3 global cooling supplier. Thermal systems,radiators,fans."},{name:"German Cooling Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Radiators,charge air coolers,water pumps,thermostats."},{name:"American Belts & Hoses Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Coolant hoses,serpentine belts,tensioner pulleys."}]}]},{name:"Transmission",type:"assembly",flag:"⚙️",desc:"8–10 speed automatic or dual-clutch. ~400 unique parts.",children:[{name:"Auto Transmission (AT)",type:"component",flag:"🔄",desc:"Planetary gear sets,torque converter,wet clutch packs,valve body.",children:[{name:"German Transmission Leader",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"World's largest AT maker. 8HP/9HP series. Supplies BMW,Rolls Royce,Bentley,Stellantis,Ford."},{name:"Japanese Transmission Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Largest AT by volume globally. Toyota group. Supplies VW,GM,Volvo."},{name:"Japanese CVT Specialist",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"CVT dominant. Nissan/Renault-controlled. Supplies Mitsubishi,Subaru,GM."}]},{name:"Clutch / Dual-Mass Flywheel",type:"component",flag:"🪩",desc:"Diaphragm spring clutch + DMF for NVH isolation.",children:[{name:"German Clutch & DMF Leader",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"World leader. Pioneered dual-mass flywheel. Supplies BMW,VW,Mercedes,GM,Ford."},{name:"French Clutch Systems Co.",type:"tier1",country:"FR",flag:"🇫🇷",risk:"low",desc:"Clutch kits,DMF,hydraulic systems. Plants in Spain,South Korea,Italy."},{name:"German Clutch Subsidiary",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Clutch systems and DMF. Subsidiary of major transmission group."},{name:"Friction Material",type:"tier2",flag:"🪨",risk:"low",desc:"Organic and ceramic friction pads for clutch packs.",children:[{name:"Japanese Ceramic Friction Co.",type:"raw",country:"JP",flag:"🇯🇵",risk:"low",desc:"Ceramic and NAO friction formulations. OEM and aftermarket."},{name:"Japanese Multi-Brand Friction Co.",type:"raw",country:"JP",flag:"🇯🇵",risk:"low",desc:"Transmission friction material. Multiple global OEM brands."}]}]},{name:"Precision Bearings",type:"component",flag:"⭕",desc:"Tapered roller,needle,ball bearings throughout transmission.",children:[{name:"Swedish Bearing Manufacturer",type:"tier1",country:"SE",flag:"🇸🇪",risk:"low",desc:"World's largest bearing maker. Full OEM coverage across all driveline applications."},{name:"German Precision Bearing Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"FAG and INA brands. Hub bearing units for all major OEMs."},{name:"Japanese Bearing Manufacturer",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Hub units for Japanese and European OEMs."},{name:"American Tapered Bearing Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Tapered roller bearing specialist. Ford,GM,commercial vehicles."}]}]},{name:"Driveline",type:"assembly",flag:"🔗",desc:"CV joints,driveshafts,differential,transfer case,wheel hubs.",children:[{name:"CV Joints & Driveshafts",type:"component",flag:"↔️",desc:"Constant-velocity joints (Rzeppa/tripod). Transmit torque at variable angles.",children:[{name:"British CV Joint Leader",type:"tier1",country:"GB",flag:"🇬🇧",risk:"low",desc:"World's largest CV joint maker. ~35% global share. Supplies nearly all OEMs. Plants in 20+ countries."},{name:"American Driveshaft Specialist",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Driveshafts,U-joints,CV joints. Heavy-duty and light vehicle axle systems."},{name:"Japanese CV Joint Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"CV joints. Major in Asia-Pacific and joint venture in Europe."},{name:"CV Boot Rubber",type:"tier2",flag:"🫧",risk:"medium",desc:"Thermoplastic or EPDM rubber boots. Retain grease in joint.",children:[{name:"Thai Natural Rubber Growers",type:"raw",country:"TH",flag:"🇹🇭",risk:"medium",desc:"Thailand produces 37% of world's natural rubber. Climate and leaf blight exposure."}]}]},{name:"Differential",type:"component",flag:"🔀",desc:"Hypoid ring-and-pinion gear set. Allows wheel speed differential in corners.",children:[{name:"American Axle Manufacturer",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Dominant in North American full-size trucks. GM,Ram,Ford axle assemblies."},{name:"American Axle Assembly Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Complete axle assemblies for light and commercial vehicles globally."},{name:"American Differential Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Limited-slip differentials,electronic lockers,locking differential brands."}]},{name:"Transfer Case (4WD/AWD)",type:"component",flag:"🔀",desc:"Torque distribution between front and rear axles. Chain or planetary drive.",children:[{name:"American AWD Systems Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Dominant AWD coupling supplier. Supplies Ford,GM,BMW,Jeep."},{name:"Canadian Powertrain Co.",type:"tier1",country:"CA",flag:"🇨🇦",risk:"low",desc:"AWD systems for Jeep and other OEMs."}]},{name:"Wheel Hub Units",type:"component",flag:"🔵",desc:"Gen 3 sealed hub bearing. Integrated ABS reluctor ring and speed sensor.",children:[{name:"Swedish Hub Bearing Co.",type:"tier1",country:"SE",flag:"🇸🇪",risk:"low",desc:"World's largest bearing maker. Hub assemblies for all major OEMs."},{name:"Japanese Hub Bearing Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Hub units for Japanese and European OEMs."}]}]},{name:"Electrical & Sensors",type:"assembly",flag:"⚡",desc:"Starting,charging,ignition,sensing. Electronics throughout the engine.",children:[{name:"Starter & Alternator",type:"component",flag:"🔋",desc:"Permanent-magnet starter motor. Wound-rotor alternator with rectifier.",children:[{name:"Japanese Starter & Alternator Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"World leader in OEM starters. Reduction-gear type optimized for stop-start."},{name:"French Starter-Alternator Co.",type:"tier1",country:"FR",flag:"🇫🇷",risk:"low",desc:"Integrated starter-alternator with mild hybrid capability."},{name:"German Starter Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Stop-start optimized starters and alternators."},{name:"Copper Windings",type:"tier2",flag:"🟠",risk:"medium",desc:"Stator and rotor windings. High-purity copper wire.",children:[{name:"Chilean Copper Producer",type:"raw",country:"CL",flag:"🇨🇱",risk:"medium",desc:"Chile produces 27% of global copper. World's largest copper producer."},{name:"American Copper Miner",type:"raw",country:"US",flag:"🇺🇸",risk:"low",desc:"US copper producer. Grasberg mine in Indonesia."}]}]},{name:"Spark Plugs",type:"component",flag:"⚡",desc:"Iridium-tipped for 100,000+ km life.",children:[{name:"Japanese Spark Plug Leader",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"World's #1 spark plug maker. ~40% global share. Iridium and platinum tips."},{name:"Japanese Spark Plug Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"World's #2. Twin-tip iridium design."},{name:"PGM Electrodes",type:"tier2",flag:"💎",risk:"high",desc:"Iridium and platinum electrode tips. Extremely scarce metals.",children:[{name:"South African Iridium Source",type:"raw",country:"ZA",flag:"🇿🇦",risk:"high",desc:"VERY HIGH:85% of global iridium from South Africa. Byproduct of platinum mining. Tiny annual supply."},{name:"South African PGM Source",type:"raw",country:"ZA",flag:"🇿🇦",risk:"high",desc:"Anglo Platinum,Impala,Sibanye-Stillwater. Dominant global PGM mining cluster."}]}]},{name:"Sensors & Actuators",type:"component",flag:"📡",desc:"O₂,MAF,MAP,knock,CPS,TPS. 20–30 sensors per engine.",children:[{name:"German Engine Sensor Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Lambda sensors,MAF,knock sensors. Dominant in wide-band O₂ sensors."},{name:"German MEMS Sensor Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"MAP,temperature,pressure sensors using MEMS technology."},{name:"Japanese Sensor Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"O₂ sensors,airflow meters. Primary supplier for Toyota."},{name:"Rare Earth Oxides",type:"tier2",flag:"🔴",risk:"high",desc:"Cerium,lanthanum in sensor ceramics and catalyst washcoats.",children:[{name:"Chinese Rare Earth Producer",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"EXTREME:China controls ~60% of REE mining and ~90% of processing. Export licensing controls imposed April 2025,shipments fell 74% YoY."}]}]},{name:"Exhaust Aftertreatment",type:"component",flag:"🌫️",desc:"DPF (diesel),SCR/AdBlue,EGR valve. Emissions compliance systems.",children:[{name:"German Exhaust & Heater Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Exhaust systems,diesel heaters,electric heating catalysts. Premium OEM focus."},{name:"American Clean Air Systems Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"DPF,SCR,GPF systems. Complete aftertreatment lines."},{name:"Urea / AdBlue",type:"tier2",flag:"💧",risk:"medium",desc:"32.5% urea solution for SCR NOx reduction.",children:[{name:"Norwegian Urea Producer",type:"raw",country:"NO",flag:"🇳🇴",risk:"medium",desc:"World's largest urea producer. AdBlue/DEF supply for diesel aftertreatment."}]}]}]}]}},brakes:{tree:{name:"Brake System",type:"oem",flag:"🛑",desc:"Complete vehicle brake system.\n~250 unique part numbers.\nSafety-critical:zero-defect requirement.",children:[{name:"Disc Brakes",type:"assembly",flag:"⭕",desc:"Hydraulic caliper and rotor. Converts kinetic energy to heat.",children:[{name:"Brake Calipers",type:"component",flag:"🔧",desc:"Sliding or fixed calipers. Aluminum housing with steel pistons.",children:[{name:"Italian Premium Brake Co.",type:"tier1",country:"IT",flag:"🇮🇹",risk:"low",desc:"World's #1 premium brake maker. Supplies Ferrari,Porsche,BMW M,McLaren."},{name:"German-American Brake Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"High-volume caliper supplier for European and US OEMs."},{name:"Japanese Brake Manufacturer",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Toyota,Honda,Subaru primary caliper supplier."}]},{name:"Brake Rotors",type:"component",flag:"🔵",desc:"Gray cast iron (GCI) or carbon-ceramic (CCM) for performance.",children:[{name:"Italian Brake Rotor Co.",type:"tier1",country:"IT",flag:"🇮🇹",risk:"low",desc:"Drilled,slotted,and carbon-ceramic composite rotors."},{name:"German Rotor Manufacturer",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"OEM replacement and new-vehicle brake rotors."},{name:"Chinese Iron Casting Source",type:"raw",country:"CN",flag:"🇨🇳",risk:"medium",desc:"China dominates global iron casting capacity. Scrap + pig iron blend."}]},{name:"Brake Pads",type:"component",flag:"🟫",desc:"Friction material bonded to steel backing plate. NAO,semi-metallic,or ceramic.",children:[{name:"Japanese Brake Pad Specialist",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Ultra-low dust ceramic pads. OEM and aftermarket."},{name:"Japanese Friction Pad Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Multi-brand friction pads. Major European and Japanese OEM supplier."},{name:"Chilean Copper Fiber Source",type:"raw",country:"CL",flag:"🇨🇱",risk:"medium",desc:"Friction material copper reinforcement. Phase-out underway due to water pollution concerns."}]}]},{name:"Hydraulic System",type:"assembly",flag:"💧",desc:"Master cylinder,ABS modulator,brake lines,wheel cylinders.",children:[{name:"ABS / ESC Module",type:"component",flag:"🖥️",desc:"Anti-lock braking + Electronic Stability Control. 10–12ms response time.",children:[{name:"German ABS/ESC Systems Leader",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Invented ABS in 1978. ~65% global ABS/ESC market share."},{name:"German Integrated Brake Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Integrated electro-hydraulic brake system."},{name:"Safety MCUs",type:"tier2",flag:"💾",risk:"high",desc:"ASIL-D rated safety microcontrollers for brake systems.",children:[{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:ASIL-D brake MCUs manufactured in Taiwan. Single point of failure for global supply."}]}]},{name:"Brake Lines & Hoses",type:"component",flag:"〰️",desc:"Steel hard lines and PTFE-lined rubber hoses. Rated to 200+ bar.",children:[{name:"German Fluid System Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Fluid handling and connecting technology for brakes and fuel systems."},{name:"German Brake Line Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Brake and fuel line fittings and connectors."}]}]},{name:"Parking Brake",type:"assembly",flag:"🅿️",desc:"Electronic parking brake (EPB) or mechanical drum brake.",children:[{name:"German EPB Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Integrated caliper-EPB actuator. Replaces handbrake lever."},{name:"German EPB Module Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"EPB module with hold function and hillstart assist."}]}]}},battery:{tree:{name:"EV Battery Pack",type:"oem",flag:"⚡",desc:"High-voltage lithium-ion battery pack.\n~400 unique structural parts + cells.\nMost supply-chain-constrained component in electrification.",children:[{name:"Cell Chemistry",type:"assembly",flag:"🔋",desc:"Lithium-ion cells. NMC,LFP,or NCA chemistry. 4V nominal.",children:[{name:"NMC Cathode",type:"component",flag:"🔴",desc:"Nickel Manganese Cobalt oxide. High energy density. Used in most passenger EVs.",children:[{name:"Chinese Battery Cell Leader",type:"tier1",country:"CN",flag:"🇨🇳",risk:"medium",desc:"World's #1 EV battery maker. ~37% global share. Supplies Tesla,BMW,VW,Stellantis."},{name:"South Korean Battery Co.",type:"tier1",country:"KR",flag:"🇰🇷",risk:"low",desc:"Cylindrical and pouch cells. Giga Ohio joint venture for GM Ultium."},{name:"South Korean Battery Manufacturer",type:"tier1",country:"KR",flag:"🇰🇷",risk:"low",desc:"BMW,Rivian,Stellantis supplier. Prismatic and cylindrical formats."},{name:"Congolese Cobalt Mining",type:"raw",country:"CD",flag:"🇨🇩",risk:"high",desc:"EXTREME:DRC produces 70% of global cobalt. Child labor and artisanal mining risks."},{name:"Indonesian Battery-Grade Nickel",type:"raw",country:"ID",flag:"🇮🇩",risk:"medium",desc:"Indonesia 50% of nickel. HPAL processing required for battery-grade purity."},{name:"South American Lithium Brine",type:"raw",country:"CL",flag:"🇨🇱",risk:"medium",desc:"Lithium Triangle:Chile,Argentina,Bolivia hold 60% of reserves. Brine evaporation extraction."}]},{name:"LFP Cathode",type:"component",flag:"🟢",desc:"Lithium Iron Phosphate. Lower density but safer,longer cycle life.",children:[{name:"Chinese LFP Blade Battery Co.",type:"tier1",country:"CN",flag:"🇨🇳",risk:"medium",desc:"Blade Battery technology. High energy density LFP pack design."},{name:"Chinese LFP Cell Leader",type:"tier1",country:"CN",flag:"🇨🇳",risk:"medium",desc:"Cell-to-pack LFP. Expanding in US market via licensed plants."},{name:"Chinese Iron Phosphate Producer",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"China controls ~80% of LFP cathode material production capacity."}]},{name:"Graphite Anode",type:"component",flag:"⚫",desc:"Natural or synthetic graphite. 98% purity required. ~1kg per kWh.",children:[{name:"Chinese Graphite Anode Co.",type:"tier1",country:"CN",flag:"🇨🇳",risk:"high",desc:"World's #1 graphite anode maker. China-based. Supplies global battery manufacturers."},{name:"Chinese Graphite Mining",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"EXTREME:China produces 65% of natural graphite and 90%+ of processed anode material. Export controls tightened 2023."}]}]},{name:"Pack Structure",type:"assembly",flag:"📦",desc:"Structural housing,thermal management,BMS,HV connections.",children:[{name:"Battery Management System",type:"component",flag:"🧠",desc:"Cell monitoring,balancing,SOC estimation,safety cutoffs. ASIL-D rated.",children:[{name:"American BMS IC Manufacturer",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"BMS ICs. Cell voltage monitoring with precision analog front-ends."},{name:"American Battery Management IC Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"BQ-series battery management ICs. Texas-based analog semiconductor leader."},{name:"Taiwanese/Korean Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:BMS silicon manufactured in Taiwan and South Korea."}]},{name:"Thermal Management",type:"component",flag:"🌡️",desc:"Liquid cooling plates,TIM,chiller,heat pump. Keeps cells at 20–35°C.",children:[{name:"South Korean Thermal Systems Co.",type:"tier1",country:"KR",flag:"🇰🇷",risk:"low",desc:"Thermal energy management. Heat pump systems for EVs."},{name:"German Battery Thermal Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Battery cooling plates,chillers,thermal interface materials."}]},{name:"Pack Housing & Structural",type:"component",flag:"🏗️",desc:"Extruded aluminum frame. Underbody structural integration. Crash-safe.",children:[{name:"Canadian Aluminum Sheet Co.",type:"tier1",country:"CA",flag:"🇨🇦",risk:"low",desc:"Rolled aluminum for battery enclosures and structural lids."},{name:"French Aluminum Extrusion Co.",type:"tier1",country:"FR",flag:"🇫🇷",risk:"low",desc:"Aluminum extrusions for battery module and pack structures."}]}]},{name:"High-Voltage System",type:"assembly",flag:"🔌",desc:"Inverter,OBC,DC-DC converter,HV wiring,connectors.",children:[{name:"Power Inverter",type:"component",flag:"⚡",desc:"DC→AC conversion. 400V or 800V. SiC or IGBT power modules.",children:[{name:"American Electric Drive Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Electric drive systems including integrated inverters for EVs."},{name:"German Power Electronics Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Power electronics,inverters,EMCs for OEMs."},{name:"Chinese SiC Crystal Source",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"HIGH:China dominates SiC crystal supply. US and EU fabs expanding but constrained."}]},{name:"HV Wiring & Connectors",type:"component",flag:"🔌",desc:"Orange-sheathed HV cable. 400–800V rated. Orange color mandatory per FMVSS.",children:[{name:"Irish HV Wiring Systems Co.",type:"tier1",country:"IE",flag:"🇮🇪",risk:"low",desc:"HV wiring harnesses and connectors. Major EV supplier globally."},{name:"Swiss HV Connector Co.",type:"tier1",country:"CH",flag:"🇨🇭",risk:"low",desc:"HV connectors,busbars,terminals for EV drivetrains."},{name:"Chilean Copper Wire Source",type:"raw",country:"CL",flag:"🇨🇱",risk:"medium",desc:"EVs use 3–4× more copper than ICE vehicles. ~80kg per EV."}]}]}]}},chassis:{tree:{name:"Chassis System",type:"oem",flag:"🚗",desc:"Complete vehicle chassis.\n~400 unique part numbers.\nStructural foundation of the vehicle.",children:[{name:"Frame & Body Structure",type:"assembly",flag:"🔷",desc:"High-strength steel stamped structure. B-pillars,floor pan,front rails. Crash safety critical.",children:[{name:"Body Stampings",type:"component",flag:"🔨",desc:"Ultra-high-strength steel (UHSS) structural stampings. Hot-formed for maximum stiffness.",children:[{name:"German Body Stamping Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Body-in-white stamping specialist for European OEMs."},{name:"South Korean UHSS Producer",type:"raw",country:"KR",flag:"🇰🇷",risk:"medium",desc:"Advanced high-strength steel. Korea produces ~5% of global steel. High dependence on Australian iron ore."}]},{name:"Aluminum Subframes",type:"component",flag:"🪙",desc:"Front and rear subframes. High-pressure die-cast aluminum for weight reduction.",children:[{name:"German Aluminum Casting Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Structural aluminum castings for chassis and suspension subframes."},{name:"Norwegian Primary Aluminum Co.",type:"raw",country:"NO",flag:"🇳🇴",risk:"low",desc:"Primary aluminum smelted using hydroelectric power."}]}]},{name:"Suspension System",type:"assembly",flag:"🌀",desc:"Front and rear suspension. Controls ride quality,handling and wheel alignment.",children:[{name:"Struts & Dampers",type:"component",flag:"📏",desc:"MacPherson struts front. Multi-link rear. CDC adaptive damping option.",children:[{name:"German Suspension Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Adaptive dampers,air suspension and CDC systems for premium OEMs."},{name:"Japanese Shock Absorber Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Mass-market strut and shock absorber manufacturing."}]},{name:"Control Arms & Bushings",type:"component",flag:"🔗",desc:"Upper and lower control arms. Rubber-to-metal bonded bushings.",children:[{name:"American Chassis Parts Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Control arms,steering knuckles and chassis links for North American OEMs."},{name:"Malaysian Rubber Compounder",type:"raw",country:"MY",flag:"🇲🇾",risk:"medium",desc:"Natural rubber for suspension bushings. Malaysia produces 17% of global natural rubber."}]}]},{name:"Steering System",type:"assembly",flag:"🎯",desc:"Electric power steering. Column,rack,torque sensor,ECU.",children:[{name:"Electric Power Steering",type:"component",flag:"🔩",desc:"Column or rack-mounted EPS motor. Steer-by-wire on newest platforms.",children:[{name:"German Steering Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Global leader in EPS and steer-by-wire technology."},{name:"Japanese EPS Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Electric power steering units for Asian OEM platforms."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:EPS control MCUs are ASIL-D safety-critical silicon manufactured in Taiwan."}]}]},{name:"Brake System",type:"assembly",flag:"🛑",desc:"Disc brakes,ABS,ESC. Zero-defect safety-critical system.",children:[{name:"Brake Calipers & Rotors",type:"component",flag:"⭕",desc:"Floating and fixed calipers. Gray cast iron or carbon-ceramic rotors.",children:[{name:"Italian Premium Brake Co.",type:"tier1",country:"IT",flag:"🇮🇹",risk:"low",desc:"World's #1 premium brake system supplier. Supplies Ferrari,Porsche,McLaren."},{name:"Chinese Iron Casting Source",type:"raw",country:"CN",flag:"🇨🇳",risk:"medium",desc:"China dominates global iron casting capacity for brake rotors."}]},{name:"ABS / ESC Module",type:"component",flag:"🖥️",desc:"Anti-lock braking and electronic stability control. 10ms response time.",children:[{name:"German ABS Systems Leader",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"~65% global ABS/ESC market share. Invented ABS in 1978."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:ASIL-D brake MCUs manufactured in Taiwan. Single point of failure."}]}]}]}},electronics:{tree:{name:"Automotive Electronics",type:"oem",flag:"💻",desc:"Complete vehicle electronics suite.\n~600 electronic components.\nFastest-growing cost centre in modern vehicles.",children:[{name:"ADAS & Sensing",type:"assembly",flag:"👁️",desc:"Advanced Driver Assistance Systems. Camera,RADAR,LiDAR fusion.",children:[{name:"Camera Modules",type:"component",flag:"📷",desc:"Forward,surround-view and interior cameras. 8MP+ for L2+ autonomy.",children:[{name:"Japanese Automotive Camera Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Dominant supplier of CMOS automotive camera modules globally."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:Automotive-grade CMOS image sensors manufactured in Taiwan."}]},{name:"RADAR Units",type:"component",flag:"📡",desc:"77GHz short and long-range RADAR. Adaptive cruise,blind-spot detection.",children:[{name:"German RADAR Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Pioneer in automotive 77GHz RADAR. Long-range platform for L2+ functions."},{name:"German Automotive Sensor Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Short and medium-range RADAR for parking and cross-traffic detection."}]},{name:"LiDAR Module",type:"component",flag:"🔭",desc:"Solid-state LiDAR for L3+ autonomy. 200m detection range.",children:[{name:"American LiDAR Pioneer",type:"tier1",country:"US",flag:"🇺🇸",risk:"medium",desc:"First automotive-grade solid-state LiDAR in series production."},{name:"Chinese Rare Earth Producer",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"HIGH:LiDAR optical elements use rare earth glass compounds. China controls 85%+ of REE optics supply."}]}]},{name:"Infotainment & Display",type:"assembly",flag:"🖥️",desc:"Central HMI display,head unit SoC,audio,HUD.",children:[{name:"Central Display",type:"component",flag:"📱",desc:"10–16\" IPS or OLED touchscreen. Center stack or portrait layout.",children:[{name:"South Korean Display Panel Co.",type:"tier1",country:"KR",flag:"🇰🇷",risk:"low",desc:"OLED and IPS automotive display panels. LG Display / Samsung SDI."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:Automotive touch controller and display driver ICs from Taiwan."}]},{name:"Head Unit ECU",type:"component",flag:"🧠",desc:"Infotainment SoC running Android Automotive. 12+ core processor.",children:[{name:"German Tier-1 Electronics Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Integrated infotainment domain controller for global OEM platforms."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:Infotainment SoCs fabbed in Taiwan. Lead time 26+ weeks."}]}]},{name:"Body Control & Safety",type:"assembly",flag:"🛡️",desc:"BCM,airbag ECU,occupant detection,keyless access.",children:[{name:"Body Control Module",type:"component",flag:"🔌",desc:"Controls lighting,locks,wipers,windows,mirrors. 50+ I/O channels.",children:[{name:"American Auto Electronics Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Body control,gateway and zone ECU modules for North American OEMs."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"BCM microcontrollers and system-basis chips from Taiwan foundries."}]},{name:"Airbag Control Unit",type:"component",flag:"🪂",desc:"Crash sensor fusion. Sub-4ms deployment decision. ASIL-D safety.",children:[{name:"German Safety Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Airbag ECU and occupant sensing for European OEM platforms."},{name:"Japanese Inflator Chemical Co.",type:"tier2",country:"JP",flag:"🇯🇵",risk:"medium",desc:"Sodium azide propellant for airbag inflators. Strict hazmat logistics."}]}]},{name:"Powertrain Electronics",type:"assembly",flag:"⚡",desc:"Engine ECU,transmission control,OBD gateway.",children:[{name:"Engine Control Unit",type:"component",flag:"⚙️",desc:"Fuel injection,ignition,VVT,EU7 emissions control.",children:[{name:"German Engine ECU Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Engine management systems engineered for EU7 compliance."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:Powertrain ECU silicon manufactured in Taiwan. No short-term substitute."}]}]}]}},seating:{tree:{name:"Seating System",type:"oem",flag:"💺",desc:"Complete front and rear seating.\n~350 unique part numbers.\nMajor interior quality and comfort driver.",children:[{name:"Seat Structure",type:"assembly",flag:"🔷",desc:"Steel seat frame,recliner,height adjuster,slide rail.",children:[{name:"Seat Frame & Recliner",type:"component",flag:"🔩",desc:"High-strength steel frame. 60° recliner adjustment range.",children:[{name:"German Seat Frame Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Structural seat frames and safety-critical recliner assemblies."},{name:"Chinese Seat Frame Stamping Co.",type:"tier1",country:"CN",flag:"🇨🇳",risk:"medium",desc:"High-volume seat frame stamping and welding. Large European OEM share."},{name:"Ukrainian Wire Form Components",type:"raw",country:"UA",flag:"🇺🇦",risk:"high",desc:"HIGH:Ukraine is a major steel wire rod supplier. Ongoing conflict has disrupted European supply chains significantly."}]},{name:"Adjustment Mechanism",type:"component",flag:"↕️",desc:"8-way power adjustment. Memory positions. Child-safety rear locks.",children:[{name:"Japanese Seat Mechanism Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Precision seat adjustment mechanisms. Primary supplier to Toyota and Honda."}]}]},{name:"Cushioning & Comfort",type:"assembly",flag:"☁️",desc:"PU foam,spring mat,heating,ventilation elements.",children:[{name:"Polyurethane Foam",type:"component",flag:"🟡",desc:"Multi-density zoned seat cushion and backrest foam.",children:[{name:"German Foam Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Automotive PU foam systems. Cold-cure moulded seat pads."},{name:"Saudi Arabian MDI Chemical",type:"raw",country:"SA",flag:"🇸🇦",risk:"medium",desc:"Methylene diphenyl diisocyanate (MDI) from Saudi petrochemical plants. Key PU precursor."}]},{name:"Seat Heating & Ventilation",type:"component",flag:"🌡️",desc:"Carbon fibre heating elements. Radial fan ventilation.",children:[{name:"German Seat Climate Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Integrated seat heating,ventilation and massage systems."},{name:"Chinese Seat Heater Film Co.",type:"tier2",country:"CN",flag:"🇨🇳",risk:"medium",desc:"Carbon fibre heating film for automotive seat heater elements."}]}]},{name:"Upholstery & Trim",type:"assembly",flag:"🪡",desc:"Cover material,headrest,armrest,side bolsters.",children:[{name:"Leather & Fabric Trim",type:"component",flag:"🐄",desc:"Full grain leather,semi-aniline or technical fabric options.",children:[{name:"South African Leather Tannery",type:"tier1",country:"ZA",flag:"🇿🇦",risk:"low",desc:"Automotive-grade leather. Chrome-free tanning for EU compliance."},{name:"Indian Textile Component Co.",type:"tier1",country:"IN",flag:"🇮🇳",risk:"low",desc:"Technical textiles and woven seat cover sets."},{name:"Brazilian Cattle Hide Source",type:"raw",country:"BR",flag:"🇧🇷",risk:"low",desc:"Brazil is the world's largest cattle hide exporter. Key leather feedstock."}]}]},{name:"Integrated Safety",type:"assembly",flag:"🦺",desc:"Integrated seatbelt,side airbag,occupant classification.",children:[{name:"Seatbelt Pretensioner",type:"component",flag:"🔒",desc:"Pyrotechnic and electric pre-tensioners with load limiters.",children:[{name:"Swedish Safety Systems Co.",type:"tier1",country:"SE",flag:"🇸🇪",risk:"low",desc:"Autoliv. World's largest seatbelt and airbag manufacturer."},{name:"Japanese Propellant Chemical Co.",type:"tier2",country:"JP",flag:"🇯🇵",risk:"medium",desc:"Pyrotechnic propellant for seatbelt pretensioners. Controlled export item."}]}]}]}},glass_trim:{tree:{name:"Glass & Trim System",type:"oem",flag:"🪟",desc:"Glazing,body trim and sealing.\n~220 unique part numbers.\nAesthetics,NVH and weather protection.",children:[{name:"Glazing System",type:"assembly",flag:"🔲",desc:"Laminated windshield,tempered side glass,heated rear screen.",children:[{name:"Windshield",type:"component",flag:"🛡️",desc:"Acoustic laminated glass. HUD zone. Embedded antenna option.",children:[{name:"French Automotive Glass Co.",type:"tier1",country:"FR",flag:"🇫🇷",risk:"low",desc:"Saint-Gobain Sekurit. Laminated and tempered automotive glass."},{name:"Japanese Safety Glass Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"AGC Inc. World's largest flat glass manufacturer."},{name:"Chinese Rare Earth Producer",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"HIGH:Cerium oxide polishing compound for optical-quality glass. China controls ~85% of cerium production."}]},{name:"Side & Rear Glass",type:"component",flag:"🔶",desc:"Tempered door glass. Privacy glass rear. Heated elements.",children:[{name:"German Glass Manufacturer",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Tempered and functional automotive glass for European OEMs."},{name:"Belgian Float Glass Producer",type:"tier2",country:"BE",flag:"🇧🇪",risk:"low",desc:"Guardian Industries. Float glass feedstock for tempering lines."}]}]},{name:"Exterior Trim",type:"assembly",flag:"✨",desc:"Body cladding,grille,bumper fascia,chrome mouldings.",children:[{name:"Bumper & Grille Assembly",type:"component",flag:"🚘",desc:"TPO bumper fascia. Active grille shutters. Front-end module.",children:[{name:"American Injection Moulding Co.",type:"tier1",country:"US",flag:"🇺🇸",risk:"low",desc:"Bumper systems,grilles and under-hood injection moulding for US OEMs."},{name:"Saudi Arabian Polypropylene Source",type:"raw",country:"SA",flag:"🇸🇦",risk:"medium",desc:"SABIC. Polypropylene and TPO resin used in bumper fascia moulding."}]},{name:"Chrome & Bright Trim",type:"component",flag:"💎",desc:"Window surrounds,door handles,logo badges.",children:[{name:"German Electroplating Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Decorative chrome plating on plastic trim. REACH-compliant Cr(VI)-free process."},{name:"South African Chrome Mine",type:"raw",country:"ZA",flag:"🇿🇦",risk:"medium",desc:"South Africa produces 44% of global chromite ore. Essential for electroplating."}]}]},{name:"Sealing & Adhesives",type:"assembly",flag:"🔐",desc:"Windshield bonding,weatherseals,acoustic damping.",children:[{name:"Glass Adhesive System",type:"component",flag:"💧",desc:"Single-component PU adhesive. 60-minute drive-away time.",children:[{name:"German Chemical Adhesive Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Henkel Teroson. Direct glazing adhesive systems."},{name:"Belgian Urethane Resin Producer",type:"raw",country:"BE",flag:"🇧🇪",risk:"low",desc:"Solvay. MDI and polyol systems for structural adhesives."}]},{name:"Weatherseals & Gaskets",type:"component",flag:"🔵",desc:"EPDM door seals,glass run channels,body sealing.",children:[{name:"German Rubber Seals Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Freudenberg Sealing Technologies. EPDM and TPE weatherseals."},{name:"Malaysian Natural Rubber Source",type:"raw",country:"MY",flag:"🇲🇾",risk:"medium",desc:"Malaysia produces 17% of global natural rubber. Key for EPDM compounds."}]}]}]}},thermal:{tree:{name:"Thermal & HVAC System",type:"oem",flag:"❄️",desc:"Climate control and thermal management.\n~180 unique part numbers.\nCritical for EV range and occupant comfort.",children:[{name:"Refrigerant Circuit",type:"assembly",flag:"❄️",desc:"AC compressor,condenser,evaporator,expansion valve,refrigerant.",children:[{name:"AC Compressor",type:"component",flag:"🔄",desc:"Electric scroll compressor for EVs. Variable-displacement belt-driven for ICE.",children:[{name:"Japanese HVAC Compressor Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Denso. World's #1 automotive AC compressor manufacturer."},{name:"German Compressor Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Mahle Behr. Electric AC compressor for EV/hybrid platforms."},{name:"Chinese HFO Refrigerant Source",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"HIGH:R1234yf and R134a production concentrated in China and the US. Export controls risk."}]},{name:"Condenser & Evaporator",type:"component",flag:"🌡️",desc:"Aluminum microchannel heat exchangers.",children:[{name:"Japanese Thermal Products Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Denso TEN. Condensers,evaporators and heater cores."},{name:"Korean Heat Exchanger Co.",type:"tier1",country:"KR",flag:"🇰🇷",risk:"low",desc:"Hanon Systems. Thermal management for EV and ICE platforms."}]}]},{name:"Cabin Air System",type:"assembly",flag:"💨",desc:"HVAC blower,ducts,cabin air filter,climate control ECU.",children:[{name:"HVAC Module & Blower",type:"component",flag:"🌀",desc:"Centrifugal blower. Dual-zone temperature control. PM2.5 filtration.",children:[{name:"German Climate Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Valeo Climate. Full HVAC module from intake to demist nozzle."},{name:"Chinese Blower Motor Co.",type:"tier1",country:"CN",flag:"🇨🇳",risk:"medium",desc:"High-volume BLDC blower motors for automotive HVAC systems."}]},{name:"Climate Control ECU",type:"component",flag:"🖥️",desc:"Automatic temperature control. Air quality sensing. HMI panel.",children:[{name:"Japanese Climate ECU Co.",type:"tier1",country:"JP",flag:"🇯🇵",risk:"low",desc:"Automotive HVAC controllers and HMI display panels."},{name:"Taiwanese Chip Foundry",type:"raw",country:"TW",flag:"🇹🇼",risk:"high",desc:"EXTREME:Climate control microcontrollers manufactured in Taiwan."}]}]},{name:"EV Thermal Management",type:"assembly",flag:"⚡",desc:"Battery chiller,heat pump,coolant distribution network.",children:[{name:"Battery Chiller & Heat Pump",type:"component",flag:"🔋",desc:"Dedicated battery chiller loop. Reversible heat pump for cabin and battery.",children:[{name:"South Korean Thermal Systems Co.",type:"tier1",country:"KR",flag:"🇰🇷",risk:"low",desc:"Hanon Systems. Battery thermal modules and heat pump assemblies."},{name:"German Heat Pump Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Mahle. EV-specific heat pump assemblies for cabin and battery heating."},{name:"Chinese Rare Earth Producer",type:"raw",country:"CN",flag:"🇨🇳",risk:"high",desc:"EXTREME:Neodymium magnets in EV heat pump compressor motors. China controls ~90% of NdFeB production."}]},{name:"Coolant Distribution",type:"component",flag:"💧",desc:"Electric water pumps,thermal valves,manifolds,reservoir.",children:[{name:"German Fluid Systems Co.",type:"tier1",country:"DE",flag:"🇩🇪",risk:"low",desc:"Thermal management fluid systems,EWP and solenoid control valves."},{name:"Chilean Copper Producer",type:"raw",country:"CL",flag:"🇨🇱",risk:"medium",desc:"Copper tubing for coolant circuits. Chile is world's largest copper producer."}]}]}]}}};
// ── Disruption Scenarios ──────────────────────────────────────────────────────
const DISRUPTIONS = {
  energy: {
    label: "Energy Shock", icon: "⚡", tag: "Fuel costs +50%", color: "#ff7733",
    title: "⚡ Global Energy Price Surge",
    desc: "Global fuel and electricity costs rise 50% due to geopolitical conflict and supply constraints. Energy-intensive manufacturing — aluminum smelting, foundry casting, steel forging — faces immediate margin compression. Foundries begin rationing production capacity.",
    impact: "Est. $800–1,200 added cost per vehicle. Aluminum-intensive OEMs hit hardest. Foundry lead times extend 3–6 months.",
    direct: ["Mexican Al Die-Casting Co.", "Swiss Precision Casting Co.", "Primary Aluminum", "Norwegian Primary Aluminum Co.", "Canadian Rolled Aluminum Co.", "Guinean Bauxite Mining", "Alloy Steel Billets", "South Korean Steel Mill", "Japanese Steel Mill", "Chinese Iron Casting Source", "Belgian Float Glass Producer"],
    cascade: ["Engine Block", "Pistons", "Crankshaft", "German Piston & Bearing Co.", "Indian Crankshaft Forging Co.", "German Steel Forging Co.", "German Piston Manufacturer", "American Piston & Rings Co.", "Engine Assembly", "Pack Housing & Structural", "French Aluminum Extrusion Co.", "Canadian Aluminum Sheet Co.", "German Seat Frame Co.", "Chinese Seat Frame Stamping Co.", "German Foam Systems Co.", "French Automotive Glass Co.", "German Glass Manufacturer", "Japanese Safety Glass Co."]
  },
  taiwan: {
    label: "Taiwan Crisis", icon: "🇹🇼", tag: "Chip supply blocked", color: "#ff2255",
    title: "🇹🇼 Taiwan Semiconductor Disruption",
    desc: "A geopolitical crisis blocks semiconductor exports from Taiwan. The dominant chip foundry there manufactures ~35% of all automotive MCUs. OEM assembly lines begin shutting down within 4–6 weeks as ECU and sensor inventories deplete. No short-term substitution is possible.",
    impact: "Global automotive output drops 30–40% within 8 weeks. Over $210B in annual industry revenue at risk.",
    direct: ["Taiwanese Chip Foundry", "Taiwanese/Korean Chip Foundry"],
    cascade: ["Automotive MCUs", "SoC / MCU Chips", "Safety MCUs", "German Automotive MCU Co.", "Dutch Chip Manufacturer", "Japanese Automotive SoC Co.", "Fuel Injection", "Engine ECU", "German ECU Systems Co.", "German Powertrain Electronics Co.", "Japanese ECU Manufacturer", "ABS / ESC Module", "Battery Management System", "German Fuel Injection Leader", "Japanese Auto Components Co.", "German Automotive Electronics Co.", "American BMS IC Manufacturer", "American Battery Management IC Co."]
  },
  pgm: {
    label: "PGM Strike", icon: "🇿🇦", tag: "Mining halted", color: "#ffaa00",
    title: "🇿🇦 South African PGM Mining Strike",
    desc: "A nationwide mining strike halts platinum group metal production in South Africa, source of 75% of global platinum and 80% of rhodium. Catalytic converter manufacturers have 6–8 weeks of PGM stock. Rhodium price spikes above $25,000/oz. No viable short-term alternative source exists.",
    impact: "All gasoline vehicles require PGMs for emissions compliance. Assembly lines halt within 8 weeks.",
    direct: ["South African Platinum Miner", "South African Rhodium Source", "South African Iridium Source", "South African PGM Source", "PGM Metals", "PGM Electrodes"],
    cascade: ["Russian Palladium Producer", "Catalytic Converter", "British Catalyst Materials Co.", "French Exhaust Systems Co.", "American Exhaust Systems Co.", "Spark Plugs", "Japanese Spark Plug Leader", "Japanese Spark Plug Co.", "Exhaust Aftertreatment", "American Clean Air Systems Co."]
  },
  china_ree: {
    label: "China REE Ban", icon: "🇨🇳", tag: "Rare earth export cut", color: "#dd2222",
    title: "🇨🇳 China Rare Earth Export Controls",
    desc: "China imposes strict export licensing on rare earth minerals and processed materials. This mirrors the April 2025 controls already enacted. China controls ~60% of REE mining and ~90% of global processing. Sensor ceramics, catalyst washcoats, EV motor magnets, and graphite anodes are all affected simultaneously.",
    impact: "ALREADY OCCURRING: Rare earth magnet shipments fell 74% YoY after April 2025 controls. Production impact compounding monthly.",
    direct: ["Chinese Rare Earth Producer", "Rare Earth Oxides", "Chinese Metallurgical Silicon", "Chinese Iron Phosphate Producer", "Chinese Graphite Mining", "Chinese SiC Crystal Source"],
    cascade: ["Sensors & Actuators", "German Engine Sensor Co.", "German MEMS Sensor Co.", "Japanese Sensor Co.", "Chinese Graphite Anode Co.", "LFP Cathode", "Graphite Anode", "Chinese Battery Cell Leader", "Chinese LFP Blade Battery Co.", "Chinese LFP Cell Leader"]
  },
  russia: {
    label: "Russia Palladium", icon: "🇷🇺", tag: "Export cutoff", color: "#9933ff",
    title: "🇷🇺 Russia Palladium Export Cutoff",
    desc: "Escalating sanctions sever Russian palladium exports. Russia provides ~40% of global palladium used in gasoline catalytic converters. Platinum-for-palladium substitution is technically possible but requires 18–24 months of emissions re-qualification.",
    impact: "Gasoline TWC manufacturers face 6–12 month supply gap. Palladium spot price expected to spike above $4,000/oz.",
    direct: ["Russian Palladium Producer"],
    cascade: ["PGM Metals", "British Catalyst Materials Co.", "French Exhaust Systems Co.", "American Exhaust Systems Co.", "Catalytic Converter", "American Clean Air Systems Co.", "German Exhaust & Heater Co."]
  },
  logistics: {
    label: "Shipping Crisis", icon: "🚢", tag: "Red Sea blocked", color: "#0193ce",
    title: "🚢 Global Shipping Disruption",
    desc: "Red Sea shipping lanes blocked by conflict, combined with severe port congestion. Semiconductor and finished component shipments from East Asia face 6–10 week delays. Just-in-time manufacturing cannot absorb delays beyond 2–3 weeks without line stoppages.",
    impact: "OEM inventory buffers depleted in 2–3 weeks. Expedited air freight adds $150–400 per vehicle.",
    direct: ["Taiwanese Chip Foundry", "Taiwanese/Korean Chip Foundry", "Chinese Battery Cell Leader", "South Korean Battery Co.", "South Korean Battery Manufacturer", "Chinese Graphite Anode Co.", "Chinese Seat Heater Film Co."],
    cascade: ["Fuel Injection", "Engine ECU", "German Fuel Injection Leader", "Japanese Auto Components Co.", "Japanese Starter & Alternator Co.", "Japanese Spark Plug Leader", "Japanese Transmission Co.", "Japanese CVT Specialist", "British CV Joint Leader", "Japanese CV Joint Co.", "Japanese ECU Manufacturer", "Japanese Sensor Co.", "Japanese Spark Plug Co.", "Chinese Seat Frame Stamping Co.", "Japanese Seat Mechanism Co.", "Japanese Safety Glass Co."]
  }
};

let activeDisruption = null;

function applyDisruption(key) {
  const sc = DISRUPTIONS[key];
  const directSet  = new Set(sc.direct);
  const cascadeSet = new Set(sc.cascade);
  const totalNodes = d3.selectAll(".node").size();
  const affected   = sc.direct.length + sc.cascade.length;

  d3.selectAll(".node")
    .transition().duration(480)
    .style("opacity", d => (directSet.has(d.data.name) || cascadeSet.has(d.data.name)) ? 1 : 0.1);

  d3.selectAll(".node circle")
    .transition().duration(480)
    .attr("fill", d => {
      if (directSet.has(d.data.name))  return sc.color;
      if (cascadeSet.has(d.data.name)) return d3.interpolateRgb(sc.color, "#1a2a3a")(0.58);
      return getNodeFill(d);
    })
    .attr("stroke", d => {
      if (directSet.has(d.data.name))  return sc.color;
      if (cascadeSet.has(d.data.name)) return d3.interpolateRgb(sc.color, "#334455")(0.35);
      return typeColors[d.data.type] || "#fff";
    })
    .attr("stroke-width", d => directSet.has(d.data.name) ? 2.5 : 1.5)
    .attr("filter", d => {
      if (directSet.has(d.data.name))  return "url(#glow-strong)";
      if (cascadeSet.has(d.data.name)) return "url(#glow)";
      return null;
    });

  d3.selectAll(".link")
    .transition().duration(480)
    .style("opacity", l => {
      const s = l.source.data.name, t = l.target.data.name;
      return (directSet.has(s)||directSet.has(t)||cascadeSet.has(s)||cascadeSet.has(t)) ? 0.9 : 0.03;
    })
    .attr("stroke", l => {
      const t = l.target.data.name;
      if (directSet.has(t))  return sc.color;
      if (cascadeSet.has(t)) return d3.interpolateRgb(sc.color, "#334")(0.5);
      return "rgba(1,147,206,0.14)";
    })
    .attr("stroke-width", l => directSet.has(l.target.data.name) ? 2 : cascadeSet.has(l.target.data.name) ? 1.5 : 1.2);

  document.getElementById("dis-info-title").textContent = sc.title;
  document.getElementById("dis-info-title").style.color  = sc.color;
  document.getElementById("dis-info-desc").textContent   = sc.desc;
  const imp = document.getElementById("dis-info-impact");
  imp.textContent        = "⚠  " + sc.impact;
  imp.style.borderColor  = sc.color;
  imp.style.background   = sc.color + "18";
  imp.style.color        = sc.color;
  const dv = document.getElementById("di-direct");
  dv.textContent = sc.direct.length; dv.style.color = sc.color;
  const cv = document.getElementById("di-cascade");
  cv.textContent = sc.cascade.length; cv.style.color = d3.interpolateRgb(sc.color, "#aabbcc")(0.45);
  const pv = document.getElementById("di-pct");
  pv.textContent = Math.round(Math.min(affected / Math.max(totalNodes, 1), 1) * 100) + "%";
  pv.style.color = "#ffcc44";
  document.getElementById("dis-info").classList.add("show");
  // Reset CADDi panel
  const scBtn = document.getElementById("sc-caddi-btn");
  scBtn.disabled = false;
  scBtn.innerHTML = '<span class="caddi-logo">⬡</span> Use CADDi to Resolve';
  document.getElementById("sc-caddi-log").innerHTML = "";
}

function clearDisruption() {
  activeDisruption = null;
  document.querySelectorAll(".dis-card").forEach(c => { c.classList.remove("active"); c.style.borderColor = ""; c.style.boxShadow = ""; });
  document.getElementById("dis-info").classList.remove("show");
  d3.selectAll(".node").transition().duration(480).style("opacity", 1);
  d3.selectAll(".node circle").transition().duration(480)
    .attr("fill",         d => getNodeFill(d))
    .attr("stroke",       d => typeColors[d.data.type] || "#fff")
    .attr("stroke-width", 1.5)
    .attr("filter",       d => d.data.type === "oem" ? "url(#glow-strong)" : d.data.risk === "high" ? "url(#glow)" : null);
  d3.selectAll(".link").transition().duration(480)
    .style("opacity", 1).attr("stroke", "rgba(1,147,206,0.22)").attr("stroke-width", 1.2);
}

// ── Disruption relevance filter ───────────────────────────────────────────────
function getPartNodeNames(partKey) {
  const names = new Set();
  function traverse(node) {
    names.add(node.name);
    if (node.children) node.children.forEach(traverse);
  }
  const data = PARTS[partKey];
  if (data) traverse(data.tree);
  return names;
}

function filterDisruptionBar(partKey) {
  const nodeNames = getPartNodeNames(partKey);
  document.querySelectorAll("#disruption-bar .dis-card").forEach(card => {
    const key = card.dataset.dis;
    const dis = DISRUPTIONS[key];
    if (!dis) return;
    const relevant = [...dis.direct, ...dis.cascade].some(n => nodeNames.has(n));
    card.style.display = relevant ? "" : "none";
  });
}

// ── D3 Radial Tree ────────────────────────────────────────────────────────────

const typeColors = {
  oem:       "#0193ce",
  assembly:  "#4fa1d4",
  component: "#30c3ff",
  tier1:     "#52d3d8",
  tier2:     "#8ec5e0",
  raw:       "#a0b8d0"
};
const typeLabels = {
  oem: "OEM Assembly", assembly: "Sub-Assembly", component: "Component",
  tier1: "Tier 1 Supplier", tier2: "Tier 2 Input", raw: "Raw Material / Geographic Source"
};
const riskColors = { high: "#ff3333", medium: "#ff9900", low: "#22cc77" };
const nodeR      = { oem: 22, assembly: 13, component: 9, tier1: 6, tier2: 5, raw: 5 };

const svg   = d3.select("#chart");
const width = window.innerWidth;
const height= window.innerHeight;
svg.attr("viewBox", [-width/2, -height/2, width, height]);

const g = svg.append("g");
svg.call(d3.zoom().scaleExtent([0.15, 4]).on("zoom", e => g.attr("transform", e.transform)));

const defs = svg.append("defs");
const glow = defs.append("filter").attr("id","glow")
  .attr("x","-80%").attr("y","-80%").attr("width","360%").attr("height","360%");
glow.append("feGaussianBlur").attr("stdDeviation","4").attr("result","blur");
const m1 = glow.append("feMerge"); m1.append("feMergeNode").attr("in","blur"); m1.append("feMergeNode").attr("in","SourceGraphic");
const glowS = defs.append("filter").attr("id","glow-strong")
  .attr("x","-80%").attr("y","-80%").attr("width","360%").attr("height","360%");
glowS.append("feGaussianBlur").attr("stdDeviation","8").attr("result","blur");
const m2 = glowS.append("feMerge"); m2.append("feMergeNode").attr("in","blur"); m2.append("feMergeNode").attr("in","SourceGraphic");

let riskMode = false, animTimer = null, currentPart = "powertrain", firstTreeBuild = true, firstAsmVisit = true;

const tip = document.getElementById("tip");
function showTip(d, event) {
  const n = d.data;
  document.getElementById("tip-name").textContent = (n.flag ? n.flag + " " : "") + n.name;
  document.getElementById("tip-type").textContent = typeLabels[n.type] || n.type;
  let body = n.desc || "";
  if (n.country) body = (body ? body + "\n" : "") + "Country: " + n.country;
  document.getElementById("tip-body").innerHTML = body.replace(/\n/g,"<br>");
  if (n.risk) {
    const rEl = document.createElement("div");
    rEl.className = "tip-risk " + n.risk;
    rEl.textContent = n.risk.toUpperCase() + " GEOGRAPHIC RISK";
    document.getElementById("tip-body").appendChild(rEl);
  }
  tip.classList.add("show"); moveTip(event);
}
function moveTip(event) {
  const mx = event.clientX, my = event.clientY, tw = 250, th = 160;
  tip.style.left = (mx + 16 + tw > width  ? mx - tw - 16 : mx + 16) + "px";
  tip.style.top  = (my + 16 + th > height ? my - th - 8  : my + 8 ) + "px";
}
function hideTip() { tip.classList.remove("show"); }

const statsTargets = { nodes: 0, suppliers: 0, countries: 0, risk: 0 };
function animateStats(target, id, duration) {
  const el = document.getElementById("sv-" + id);
  if (!el) return;
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = Math.round(target * t);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function getNodeFill(d) {
  if (riskMode && d.data.risk) return riskColors[d.data.risk];
  return d.data.type === "oem"       ? "#002a5c" :
         d.data.type === "assembly"  ? "#003f72" :
         d.data.type === "component" ? "#0055a5" :
         d.data.type === "tier1"     ? "#0193ce" :
         d.data.type === "tier2"     ? "#2a7fb0" : "#1a5c80";
}

// ── Neighbor label reveal + spread ───────────────────────────────────────────
function showNeighborLabels(hoveredD) {
  const neighbors = new Set([hoveredD]);
  if (hoveredD.parent) {
    neighbors.add(hoveredD.parent);
    (hoveredD.parent.children || []).forEach(c => neighbors.add(c));
  }
  (hoveredD.children || []).forEach(c => neighbors.add(c));

  const shownEls = [];
  d3.selectAll(".node:not(.oem) text").each(function(nd) {
    if (neighbors.has(nd)) {
      d3.select(this)
        .style("opacity", nd === hoveredD ? 1 : 0.6)
        .style("fill",    nd === hoveredD ? "#002a5c" : "#3a5a7a");
      shownEls.push(this);
    } else {
      d3.select(this).style("opacity", 0).attr("transform", null);
    }
  });

  requestAnimationFrame(() => spreadLabels(shownEls));
}

function hideNeighborLabels() {
  d3.selectAll(".node:not(.oem) text")
    .style("opacity", 0)
    .attr("transform", null);
}

function spreadLabels(els) {
  if (els.length < 2) return;
  const k   = d3.zoomTransform(svg.node()).k;
  const gap = 4; // px between labels in screen space

  const items = els.map(el => ({
    el,
    rect: el.getBoundingClientRect(),
    dy: 0
  })).filter(item => item.rect.width > 0);

  items.sort((a, b) => (a.rect.y + a.rect.height / 2) - (b.rect.y + b.rect.height / 2));

  // Single downward sweep — push each label past the one above it
  for (let i = 1; i < items.length; i++) {
    const prev = items[i - 1];
    const curr = items[i];
    const prevBottom = prev.rect.y + prev.rect.height + prev.dy + gap;
    const currTop    = curr.rect.y + curr.dy;
    if (currTop < prevBottom) curr.dy += prevBottom - currTop;
  }

  items.forEach(({ el, dy }) => {
    if (Math.abs(dy) > 0.5) {
      d3.select(el).transition().duration(160).attr("transform", `translate(0,${dy / k})`);
    }
  });
}

function buildTree(partKey) {
  currentPart = partKey;

  // If the current disruption has no nodes in this part's tree, clear it silently
  if (activeDisruption) {
    const _dis = DISRUPTIONS[activeDisruption];
    const _nn  = getPartNodeNames(partKey);
    if (!_dis || ![..._dis.direct, ..._dis.cascade].some(n => _nn.has(n))) {
      activeDisruption = null;
      document.getElementById("dis-info").classList.remove("show");
      document.querySelectorAll("#disruption-bar .dis-card").forEach(c => {
        c.classList.remove("active"); c.style.borderColor = ""; c.style.boxShadow = "";
      });
    }
  }

  filterDisruptionBar(partKey);
  g.selectAll("*").remove();
  if (animTimer) { clearTimeout(animTimer); animTimer = null; }

  const data = PARTS[partKey];
  const maxR = Math.min(width, height) * 0.42;
  const root = d3.hierarchy(data.tree);
  const maxDepth = d3.max(root.descendants(), d => d.depth) || 1;
  const radii = Array.from({length: maxDepth + 1}, (_, i) => (i / maxDepth) * maxR);
  radii[0] = 0;

  d3.tree().size([2 * Math.PI, maxR])
    .separation((a, b) => (a.parent === b.parent ? 1 : 2.5) / a.depth)(root);
  root.each(d => { d.y = radii[d.depth] || d.y; });

  const linkGen   = d3.linkRadial().angle(d => d.x).radius(d => d.y);
  const linkGroup = g.append("g").attr("class","links");
  const nodeGroup = g.append("g").attr("class","nodes");
  const allNodes  = root.descendants();
  const allLinks  = root.links();

  statsTargets.nodes = 0; statsTargets.suppliers = 0; statsTargets.risk = 0;
  const cset = new Set();
  allNodes.forEach(d => {
    statsTargets.nodes++;
    if (d.data.type === "tier1" || d.data.type === "tier2") statsTargets.suppliers++;
    if (d.data.risk === "high") statsTargets.risk++;
    if (d.data.country) cset.add(d.data.country);
  });
  statsTargets.countries = cset.size;

  linkGroup.selectAll("path").data(allLinks).join("path")
    .attr("class","link").attr("d", linkGen).style("opacity", 0);

  const nodes = nodeGroup.selectAll("g").data(allNodes).join("g")
    .attr("class", d => "node " + d.data.type)
    .attr("transform", d => { const [x,y] = radialXY(d.x,d.y); return `translate(${x},${y})`; })
    .style("opacity", 0)
    .on("mouseenter", function(event, d) { showTip(d, event); showNeighborLabels(d); })
    .on("mousemove",  function(event)    { moveTip(event); })
    .on("mouseleave", function()         { hideTip(); hideNeighborLabels(); });

  nodes.append("circle")
    .attr("r",         d => nodeR[d.data.type] || 5)
    .attr("fill",      d => getNodeFill(d))
    .attr("stroke",    d => typeColors[d.data.type] || "#fff")
    .attr("stroke-width", 1.5)
    .attr("filter",    d => d.data.type === "oem" ? "url(#glow-strong)" : d.data.risk === "high" ? "url(#glow)" : null);

  nodes.append("text")
    .attr("dy", "0.35em")
    .attr("x", d => {
      if (d.data.type === "oem") return 0;
      return (Math.cos(d.x - Math.PI/2) >= 0 ? 1 : -1) * (nodeR[d.data.type] + 5);
    })
    .attr("y", d => d.data.type === "oem" ? nodeR[d.data.type] + 16 : 0)
    .attr("text-anchor", d => {
      if (d.data.type === "oem") return "middle";
      return Math.cos(d.x - Math.PI/2) >= 0 ? "start" : "end";
    })
    .text(d => {
      const flag = d.data.flag ? d.data.flag + " " : "";
      const max  = d.data.type === "oem" ? 20 : d.data.type === "assembly" ? 18 : d.data.type === "component" ? 17 : 15;
      const nm   = d.data.name.length > max ? d.data.name.slice(0, max - 1) + "…" : d.data.name;
      return flag + nm;
    });

  const byDepth = d3.group(allNodes, d => d.depth);
  const maxD    = d3.max([...byDepth.keys()]);
  let accDelay  = 400;

  for (let depth = 0; depth <= maxD; depth++) {
    const dn = byDepth.get(depth) || [];
    const dl = allLinks.filter(l => l.target.depth === depth);
    const delay = accDelay;
    accDelay += 350 + depth * 40;

    (function(dn2, dl2, del, d) {
      animTimer = setTimeout(() => {
        dl2.forEach(link => {
          linkGroup.selectAll("path").filter(l => l === link).transition().duration(400).style("opacity", 1);
        });
        dn2.forEach((node, i) => {
          nodeGroup.selectAll("g").filter(nd => nd === node).transition().delay(i * 40).duration(400).style("opacity", 1);
        });
        const pct = (d + 1) / (maxD + 1);
        ["nodes","suppliers","countries","risk"].forEach(k => {
          const el = document.getElementById("sv-"+k);
          if (el) el.textContent = Math.round(statsTargets[k] * (d === maxD ? 1 : pct));
        });
        if (d === maxD) {
          ["nodes","suppliers","countries","risk"].forEach(k => animateStats(statsTargets[k], k, 600));
          if (activeDisruption) setTimeout(() => applyDisruption(activeDisruption), 200);
          if (firstTreeBuild) { firstTreeBuild = false; setTimeout(startTutorial, 900); }
        }
      }, del);
    })(dn, dl, delay, depth);
  }
}

function radialXY(angle, radius) {
  return [radius * Math.cos(angle - Math.PI/2), radius * Math.sin(angle - Math.PI/2)];
}

// ── Buttons ───────────────────────────────────────────────────────────────────
document.querySelectorAll(".part-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".part-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentPart = btn.dataset.part;
    if (document.body.classList.contains("asm")) {
      // Update header to reflect the newly selected part
      const ip = INTRO_PARTS.find(p => p.key === currentPart);
      if (ip) document.getElementById("page-title").textContent = ip.name + " Assembly";
      clearAssemblyDisruption();
      initAsmDisruptionBar();
      buildAssembly();
    } else {
      buildTree(currentPart);
    }
  });
});
document.getElementById("btn-replay").addEventListener("click", () => buildTree(currentPart));
document.getElementById("btn-risk").addEventListener("click", function() {
  riskMode = !riskMode;
  this.classList.toggle("active", riskMode);
  d3.selectAll(".node circle").transition().duration(600)
    .attr("fill",   d => getNodeFill(d))
    .attr("filter", d => {
      if (riskMode && d.data.risk === "high")  return "url(#glow-strong)";
      if (!riskMode && d.data.type === "oem")  return "url(#glow-strong)";
      if (!riskMode && d.data.risk === "high") return "url(#glow)";
      return null;
    });
});

document.querySelectorAll(".dis-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.dis;
    const sc  = DISRUPTIONS[key];
    if (activeDisruption === key) {
      clearDisruption();
    } else {
      activeDisruption = key;
      document.querySelectorAll(".dis-card").forEach(c => { c.classList.remove("active"); c.style.borderColor = ""; c.style.boxShadow = ""; });
      card.classList.add("active");
      card.style.borderColor = sc.color;
      card.style.boxShadow   = `0 0 22px ${sc.color}55, 0 4px 16px rgba(0,0,0,0.5)`;
      applyDisruption(key);
      // Tutorial: when user picks their first crisis, advance to step 3
      if (tutorialStep === TUT.WATCH_CRISIS) {
        setTimeout(() => {
          document.getElementById("dis-info").scrollTop = document.getElementById("dis-info").scrollHeight;
          setTimeout(() => showTutStep(TUT.CADDI), 150);
        }, 700);
      }
    }
  });
});
document.getElementById("dis-close").addEventListener("click", clearDisruption);

window.addEventListener("resize", () => {
  const w = window.innerWidth, h = window.innerHeight;
  svg.attr("viewBox", [-w/2, -h/2, w, h]);
});

// ── Intro page ────────────────────────────────────────────────────────────────
const INTRO_PARTS = [
  {
    key: "powertrain",
    icon: "⚙️",
    name: "Powertrain",
    desc: "Engine, transmission & drivetrain. The most supply-chain-intensive component in any vehicle.",
    badges: [{ label: "High Risk", cls: "high" }, { label: "42 Nodes", cls: "medium" }]
  },
  {
    key: "chassis",
    icon: "🚗",
    name: "Chassis",
    desc: "Frame, suspension & braking system. Structural steel and rare-earth alloys sourced globally.",
    badges: [{ label: "Medium Risk", cls: "medium" }, { label: "26 Nodes", cls: "low" }]
  },
  {
    key: "electronics",
    icon: "💻",
    name: "Automotive Electronics",
    desc: "ECU, ADAS sensors & wiring harness. Heavy dependence on Taiwanese chip fabrication.",
    badges: [{ label: "High Risk", cls: "high" }, { label: "28 Nodes", cls: "medium" }]
  },
  {
    key: "seating",
    icon: "💺",
    name: "Seating",
    desc: "Seat frames, foam, fabric & adjustment motors. Global textile and steel supply chains.",
    badges: [{ label: "Medium Risk", cls: "medium" }, { label: "24 Nodes", cls: "low" }]
  },
  {
    key: "glass_trim",
    icon: "🪟",
    name: "Glass & Trim",
    desc: "Windscreen, side glass, interior trim & seals. Rare-earth mineral processing exposure.",
    badges: [{ label: "Medium Risk", cls: "medium" }, { label: "22 Nodes", cls: "low" }]
  },
  {
    key: "thermal",
    icon: "❄️",
    name: "Thermal & HVAC",
    desc: "Radiator, HVAC compressor & heat exchangers. Aluminium and refrigerant supply constraints.",
    badges: [{ label: "Low Risk", cls: "low" }, { label: "22 Nodes", cls: "low" }]
  }
];

(function initIntro() {
  const grid = document.getElementById("intro-parts");
  grid.innerHTML = INTRO_PARTS.map(p => `
    <div class="ipc" data-part="${p.key}">
      <div class="ipc-icon">${p.icon}</div>
      <div class="ipc-name">${p.name}</div>
      <div class="ipc-desc">${p.desc}</div>
      <div class="ipc-badges">
        ${p.badges.map(b => `<span class="ipc-badge ${b.cls}">${b.label}</span>`).join("")}
      </div>
    </div>`).join("");

  grid.querySelectorAll(".ipc").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.part;

      // Sync active state on the persistent part-selector buttons
      document.querySelectorAll(".part-btn").forEach(btn =>
        btn.classList.toggle("active", btn.dataset.part === key));

      // Trigger exit animation on intro overlay
      const view = document.getElementById("intro-view");
      view.classList.add("exiting");

      // Start building the tree while the fade is in progress
      setTimeout(() => buildTree(key), 260);

      // Fully remove the overlay from layout after transition completes
      setTimeout(() => { view.style.display = "none"; }, 650);
    });
  });
})();

// ── Assembly Data (all 6 parts) ───────────────────────────────────────────────
const ASSEMBLY_DATA ={powertrain:{throughput:312,defect:28,stages:[{id:"receiving",num:"01",name:"Inbound\nReceiving",color:"#1a5c80",stations:[{id:"castings_recv",label:"Castings & Forgings",icon:"📦",oee:94,desc:"Inbound quality gate for engine blocks,cranks and cylinder heads. Dimensional CMM check on first-off parts."},{id:"elec_recv",label:"Electronics Intake",icon:"📡",oee:91,desc:"ECU,sensor,and wiring harness receiving. FIFO sequencing to kitting area."},{id:"consumables",label:"Fasteners & Seals",icon:"🔩",oee:98,desc:"Bulk fastener,gasket,and fluid consumable replenishment to lineside supermarkets."}]},{id:"machining",num:"02",name:"CNC\nMachining",color:"#003f72",stations:[{id:"cnc_block",label:"Block Boring Cell",icon:"⚙️",oee:82,desc:"Precision bore,hone,and deck engine blocks to ±2μm. Automated gauging after each operation."},{id:"cnc_crank",label:"Crank Grinding",icon:"🔄",oee:88,desc:"Journal grinding and microfinish of crankshafts. Roundness ≤0.5μm."},{id:"cnc_head",label:"Head Machining",icon:"🔧",oee:85,desc:"Valve seat cutting,port matching,and cam bore line machining."},{id:"cnc_case",label:"Trans. Case Milling",icon:"📐",oee:79,desc:"Transmission housing bore and face milling. Leak-test after machining."}]},{id:"eng_assy",num:"03",name:"Engine\nSub-Assembly",color:"#0055a5",stations:[{id:"short_block",label:"Short Block Build",icon:"🏗️",oee:90,desc:"Crank,con-rods and pistons assembled into block. All fasteners torqued to yield."},{id:"head_inst",label:"Head Installation",icon:"🔩",oee:87,desc:"Head gasket and torque-to-yield fastening. Deck flatness and bolt stretch verified."},{id:"timing",label:"Timing Chain",icon:"⛓️",oee:86,desc:"Timing chain,tensioner and guides installed and timed to degree."},{id:"oil_sys",label:"Oil System",icon:"🛢️",oee:92,desc:"Oil pump,filter,cooler and sump installed. System primed and leak-checked."}]},{id:"trans_assy",num:"04",name:"Transmission\nSub-Assembly",color:"#0193ce",stations:[{id:"gear_stack",label:"Gear Stack",icon:"⚙️",oee:88,desc:"Layshaft and mainshaft gear assembly with bearing preload set to spec."},{id:"clutch_pack",label:"Clutch Pack",icon:"🔘",oee:84,desc:"Multi-plate clutch stack. Steel and friction plate alternation verified by vision."},{id:"valve_body",label:"Valve Body",icon:"🎛️",oee:91,desc:"Hydraulic valve body assembly and functional pressure test."},{id:"torque_conv",label:"Torque Converter",icon:"🌀",oee:89,desc:"Lock-up clutch and impeller dynamically balanced to <0.5 g·cm."}]},{id:"electrical",num:"05",name:"Electrical\nIntegration",color:"#2a7fb0",stations:[{id:"ecu_install",label:"ECU Installation",icon:"🖥️",oee:95,desc:"ECU mounting,connector seating,and firmware boot-flash with traceability scan."},{id:"harness",label:"Wiring Harness",icon:"🔌",oee:93,desc:"Main harness routing,strain-relief clips,and connector torque verified."},{id:"sensors",label:"Sensor Calibration",icon:"📡",oee:88,desc:"O₂,MAP,MAF,and crank sensors fitted and EOL-calibrated."},{id:"actuators",label:"Actuator Fit",icon:"🎯",oee:90,desc:"Throttle body,VCT solenoids and injectors installed and leak-tested."}]},{id:"marriage",num:"06",name:"Powertrain\nMarriage",color:"#1a5c80",stations:[{id:"mating",label:"Engine–Trans Mating",icon:"💍",oee:93,desc:"Bellhousing torque,flywheel alignment and driveshaft fit. Angle-torque trace archived."},{id:"fluid_fill",label:"Fluid Fill Station",icon:"💧",oee:97,desc:"Engine oil,coolant and transmission fluid filled,de-aerated and level-checked."},{id:"torq_check",label:"Final Torque Audit",icon:"🔑",oee:95,desc:"Robot torque audit of all safety-critical fasteners. 100% traceability to vehicle VIN."}]},{id:"test_qc",num:"07",name:"Test &\nQuality",color:"#003f72",stations:[{id:"cold_test",label:"Cold Test Cell",icon:"❄️",oee:88,desc:"Motor-driven cold test at rated speed. Leak,NVH and friction checks without combustion."},{id:"hot_test",label:"Hot Run Test",icon:"🔥",oee:85,desc:"Fired hot run at three load points. Emissions,power and fuel consumption verified."},{id:"vision_chk",label:"Vision Inspection",icon:"👁️",oee:94,desc:"AI vision system checks 400+ assembly quality points. Zero escape tolerance."},{id:"audit",label:"Audit & Despatch",icon:"✅",oee:99,desc:"Final sign-off,serial number plate,cosmetic wrap and despatch sequencing."}]}],disruptions:{robot:{label:"Robot Failure",icon:"🤖",tag:"CNC cell down",color:"#e53e00",title:"🤖 CNC Robot Cell Failure",desc:"Primary CNC boring robot suffers servo motor failure mid-shift. Throughput at the block boring cell drops to zero. The spare servo unit has a 5-week lead time; manual boring cannot substitute at scale.",impact:"Est. 220 engines/day lost. Manual rework capacity:8%. Repair window:3–5 days.",unitsLost:660,direct:["cnc_block","cnc_crank"],cascade:["short_block","head_inst","timing","oil_sys","mating","cold_test","hot_test","audit"]},labour:{label:"Labour Walkout",icon:"🧑‍🏭",tag:"Strike action",color:"#cc7700",title:"🧑‍🏭 Labour Dispute — Partial Walkout",desc:"Union action results in 42% of final assembly and marriage station workforce walking out. Remaining skeleton crew cannot hold takt time. Management has engaged mediators; talks ongoing.",impact:"Throughput drops to 35% of target. Backlog grows at 18 units/hr. Anticipated 6–12 day disruption.",unitsLost:2200,direct:["mating","fluid_fill","torq_check"],cascade:["cold_test","hot_test","vision_chk","audit"]},faulty:{label:"Faulty Batch",icon:"⚠️",tag:"Component defect",color:"#cc2200",title:"⚠️ Faulty Piston Batch — Production Hold",desc:"In-line vision detects dimensional non-conformance on 1,400 pistons from an inbound batch. Short block build halted pending supplier re-PPAP. Rework team deployed but limited to 40 units per shift.",impact:"200 engines in rework queue. Short block halted 48h. Full supplier audit:7–10 days.",unitsLost:420,direct:["castings_recv","short_block"],cascade:["head_inst","timing","oil_sys","mating","cold_test","hot_test"]},sole_source:{label:"Supplier Exit",icon:"🏭",tag:"Sole-source risk",color:"#7700cc",title:"🏭 Sole-Source Casting Supplier — Exit Notice",desc:"Primary casting supplier (100% of engine block blanks) issues a 90-day exit notice following financial difficulties. No qualified backup exists. Qualifying an alternative under IATF 16949 normally takes 4–6 weeks.",impact:"Block casting supply cliff in 90 days. Full line stop risk. Emergency qualification required across 2,400 part numbers.",unitsLost:3400,direct:["castings_recv","short_block"],cascade:["head_inst","timing","oil_sys","mating","cold_test","hot_test","audit"]},inbound:{label:"Inbound Delay",icon:"🚚",tag:"Logistics disruption",color:"#0055cc",title:"🚚 ECU & Sensor Parts Shortage",desc:"Tier-1 electronics supplier logistics failure delays ECU and sensor deliveries by 5 days. Electrical integration buffer stock depleted within 8 hours. Line must sequence around affected vehicles.",impact:"Electrical integration at 0% for 8h,then partial recovery. 180 units left incomplete.",unitsLost:180,direct:["elec_recv","ecu_install"],cascade:["harness","sensors","actuators","mating","cold_test","audit"]},quality:{label:"Quality Hold",icon:"🛑",tag:"Line stop",color:"#cc0033",title:"🛑 Quality Hold — Torque Converter Recall",desc:"Three field returns with identical torque converter lock-up failures trigger a full line stop and containment of all affected sub-assemblies. Engineering calls a root cause analysis. PPAP re-submission required.",impact:"Full line stop 4–6h. 85 units in containment. PPAP re-submission is a 3-week process.",unitsLost:85,direct:["torque_conv","clutch_pack"],cascade:["gear_stack","valve_body","mating","fluid_fill","cold_test","hot_test","audit"]}}},chassis:{throughput:186,defect:31,stages:[{id:"steel_intake",num:"01",name:"Steel\nIntake",color:"#1a5c80",stations:[{id:"coil_recv",label:"Coil Stock Intake",icon:"🧲",oee:96,desc:"High-strength steel coil and tube stock received,weighed and certified. CMM sample for tensile spec."},{id:"blank_cut",label:"Blanking & Shear",icon:"✂️",oee:92,desc:"Sheet metal blanks sheared and stacked to kanban demand. Edge quality check before press feed."},{id:"tube_prep",label:"Tube & Section Prep",icon:"📐",oee:94,desc:"Structural tube cut to length,deburred and end-formed for subframe joints."}]},{id:"stamping",num:"02",name:"Stamping\n& Forming",color:"#003f72",stations:[{id:"rail_press",label:"Side Rail Press",icon:"🔨",oee:84,desc:"1,600-tonne transfer press forms longitudinal side rails. Draw depth and spring-back corrected by die compensation."},{id:"floor_press",label:"Floor Pan Stamp",icon:"📦",oee:81,desc:"Floor pan stamped in three progressive dies. Drain holes punched in same tool."},{id:"roof_cross",label:"Roof Crossmember",icon:"🏗️",oee:87,desc:"Roof bow and A/B/C-pillar reinforcements formed and pierced."},{id:"bracket_form",label:"Bracket Forming",icon:"🔧",oee:89,desc:"Suspension towers,engine mounts,and firewall brackets roll-formed and coined."}]},{id:"welding",num:"03",name:"Frame\nWelding",color:"#0055a5",stations:[{id:"rail_weld",label:"Main Rail MIG Weld",icon:"⚡",oee:86,desc:"Robot MIG welding of longitudinal rails to front and rear crossmembers. 100% weld bead vision."},{id:"subframe_weld",label:"Subframe Assembly",icon:"🔩",oee:83,desc:"Front and rear subframes tack-welded in fixture then robotic MIG completed. Weld pull test 1-in-50."},{id:"floor_join",label:"Floor Pan Join",icon:"🏭",oee:85,desc:"Floor pan laser-welded to rocker sills and tunnel. Seam sealer applied robotically."}]},{id:"suspension",num:"04",name:"Suspension\nAssembly",color:"#0193ce",stations:[{id:"strut_front",label:"Front Strut Build",icon:"🛻",oee:91,desc:"MacPherson strut assembled:spring,damper,top mount. Pre-load set on press and height checked."},{id:"axle_rear",label:"Rear Axle Assembly",icon:"⚙️",oee:88,desc:"Twist-beam or multi-link rear axle assembled. Wheel bearing pre-load verified."},{id:"steering_kn",label:"Steering Knuckle",icon:"🎡",oee:92,desc:"Knuckle,hub and wheel bearing assembled. Geometry set to ±0.1° camber."},{id:"arb_links",label:"ARB & Links",icon:"🔗",oee:94,desc:"Anti-roll bar bushes pressed,drop-links torqued. End-play check confirmed."}]},{id:"braking",num:"05",name:"Brake\nSystem",color:"#2a7fb0",stations:[{id:"caliper_assy",label:"Caliper Assembly",icon:"🛑",oee:90,desc:"Front and rear caliper pistons,seals and bleed nipples assembled. Pressure cycle tested."},{id:"disc_fit",label:"Disc & Hub Fit",icon:"⭕",oee:93,desc:"Brake disc mounted to hub. Run-out measured ≤0.05mm. Pad clearance verified."},{id:"master_cyl",label:"Master Cylinder",icon:"🔑",oee:91,desc:"Tandem master cylinder and brake servo assembled. Vacuum check and pedal ratio confirmed."},{id:"abs_module",label:"ABS Modulator",icon:"🖥️",oee:89,desc:"ABS/ESC hydraulic modulator mounted and brake circuit filled. Bleed cycle automated."}]},{id:"surface",num:"06",name:"Surface\nTreatment",color:"#1a5c80",stations:[{id:"phosphate",label:"Phosphate Bath",icon:"🧪",oee:97,desc:"Zinc-phosphate pretreatment provides corrosion primer key. Bath chemistry auto-dosed."},{id:"ecoat",label:"Cathodic E-Coat",icon:"⚡",oee:93,desc:"Electrodeposition primer at 180–200V. Film build 18–22μm. Oven cure at 180°C."},{id:"sealer",label:"Underbody Sealer",icon:"🛡️",oee:96,desc:"Seam sealer and underbody stone-chip coat applied robotically. 30-year corrosion target."}]},{id:"chassis_qc",num:"07",name:"Geometry\n& QC",color:"#003f72",stations:[{id:"cmm_check",label:"CMM Dimensional",icon:"📏",oee:97,desc:"Coordinate measuring machine checks 420 key datums on every 10th chassis. Auto-SPC triggers alerts."},{id:"weld_audit",label:"Weld Pull Test",icon:"💪",oee:95,desc:"Destructive weld pull testing on 1-in-25 sampled joints. Min. 3.8kN pull force required."},{id:"final_audit",label:"Audit & Despatch",icon:"✅",oee:99,desc:"Final geometry audit,corrosion tape test,VIN plate and despatch sequence confirmed."}]}],disruptions:{press_fault:{label:"Press Failure",icon:"🔨",tag:"Hydraulic fault",color:"#e53e00",title:"🔨 Stamping Press Hydraulic Failure",desc:"The 1,600-tonne transfer press suffers a hydraulic seal failure mid-run,forcing an emergency stop. Side rail production halts immediately. Hydraulic specialist on-call has a 12-hour response window.",impact:"Side rail supply zero for 12–20h. Frame welding buffer depleted in 6h. 55 chassis lost per day.",unitsLost:110,direct:["rail_press","floor_press"],cascade:["rail_weld","subframe_weld","floor_join","strut_front","axle_rear","final_audit"]},weld_defect:{label:"Weld Hold",icon:"⚠️",tag:"Weld non-conformance",color:"#cc2200",title:"⚠️ Weld Quality Non-Conformance — Line Stop",desc:"Automated weld bead vision detects under-fill and porosity on rear subframe joints across a 4-hour production window. Engineering containment called — all affected chassis quarantined for destructive testing.",impact:"40 chassis in quarantine. Subframe welding halted 24h. Weld re-qualification:3 days.",unitsLost:40,direct:["subframe_weld","rail_weld"],cascade:["strut_front","axle_rear","arb_links","cmm_check","final_audit"]},steel_shortage:{label:"Steel Delay",icon:"🚢",tag:"Coil supply disruption",color:"#0055cc",title:"🚢 High-Strength Steel Coil Delivery Delay",desc:"Shipping disruption delays three coil shipments from the Ruhr Valley mill. Safety stock covers 1.5 days at current rate. Spot-buying from secondary supplier incurs 18% cost premium.",impact:"Blanking halted after 36h. Full line stop risk day 2. Secondary source takes 4 days to qualify.",unitsLost:280,direct:["coil_recv","blank_cut"],cascade:["rail_press","floor_press","rail_weld","floor_join","subframe_weld"]},ecoat_fault:{label:"E-Coat Fault",icon:"🧪",tag:"Bath contamination",color:"#7700cc",title:"🧪 Cathodic E-Coat Bath Contamination",desc:"Chemical analysis reveals silicone contamination in the e-coat bath,causing adhesion failure under crosshatch test. Bath must be drained,cleaned and re-charged — a 36-hour process minimum.",impact:"Surface treatment offline 36–48h. 90 chassis in hold pending adhesion re-test.",unitsLost:90,direct:["ecoat","phosphate"],cascade:["sealer","cmm_check","final_audit"]},subframe_recall:{label:"Subframe Hold",icon:"🛑",tag:"Cracking risk",color:"#cc0033",title:"🛑 Subframe Weld Cracking — Safety Stop",desc:"Vehicle dynamics team identifies fatigue cracking at a critical subframe weld joint on two development mules. Full production stop and root cause analysis triggered. Weld procedure re-qualification required.",impact:"Full line stop 6–10h. 35 chassis in containment. Weld procedure re-PPAP:2–3 weeks.",unitsLost:35,direct:["subframe_weld"],cascade:["strut_front","axle_rear","steering_kn","arb_links","cmm_check","weld_audit","final_audit"]},labour_shortage:{label:"Labour Shortage",icon:"🧑‍🏭",tag:"Workforce gap",color:"#cc7700",title:"🧑‍🏭 Skilled Welder Shortage — Reduced Throughput",desc:"Seasonal turnover and a competing plant opening nearby have left 28% of welding stations unstaffed. Agency workers lack the certified welding qualifications for structural joints.",impact:"Welding throughput at 68%. 50 chassis/day shortfall. Recruitment lead time:6–8 weeks.",unitsLost:350,direct:["rail_weld","subframe_weld","floor_join"],cascade:["strut_front","axle_rear","cmm_check","final_audit"]}}},electronics:{throughput:480,defect:12,stages:[{id:"comp_intake",num:"01",name:"Component\nIntake",color:"#1a5c80",stations:[{id:"smd_verify",label:"SMD Reel Verify",icon:"🔍",oee:97,desc:"Incoming SMD component reels scanned against BOM. Date code,moisture level and ESD packaging verified."},{id:"ic_tray",label:"IC Tray Sorting",icon:"🧩",oee:94,desc:"Integrated circuit trays sorted by part number. FIFO lanes assigned to line-side stores."},{id:"conn_kit",label:"Connector Kitting",icon:"🔌",oee:96,desc:"Wire harness connectors,terminals and seals kitted to vehicle build sequence."},{id:"bare_board",label:"Bare Board AOI",icon:"🖨️",oee:98,desc:"Automated optical inspection of bare PCBs for delamination,micro-cracks and dimensional conformance."}]},{id:"pcb_assy",num:"02",name:"PCB\nAssembly",color:"#003f72",stations:[{id:"smt_place",label:"SMT Pick & Place",icon:"🤖",oee:88,desc:"High-speed pick-and-place machines place 18,000 components/hr. First-pass yield target 99.8%."},{id:"reflow",label:"Reflow Oven",icon:"🔥",oee:84,desc:"6-zone reflow oven with nitrogen atmosphere. Peak temperature profiled per IPC-A-610 Class 3."},{id:"wave_solder",label:"Wave Solder",icon:"🌊",oee:82,desc:"Through-hole components soldered in lead-free wave at 260°C. Solder dross managed hourly."},{id:"pcb_aoi",label:"AOI Inspection",icon:"👁️",oee:92,desc:"Post-reflow AOI checks solder joint quality,component presence and orientation. Defects auto-flagged."}]},{id:"sensor_int",num:"03",name:"Sensor\nIntegration",color:"#0055a5",stations:[{id:"camera_fit",label:"Camera Module",icon:"📷",oee:90,desc:"Forward and surround-view cameras assembled,focused and MTF-tested. IP69K seal verified."},{id:"radar_align",label:"Radar Alignment",icon:"📡",oee:86,desc:"77GHz corner and front radar modules aligned to ±0.1° boresight in anechoic calibration fixture."},{id:"lidar_test",label:"LiDAR Calibration",icon:"🌐",oee:83,desc:"LiDAR point cloud calibrated against 3D reference target. Angular accuracy ≤0.05° confirmed."},{id:"imu_cal",label:"IMU Calibration",icon:"🧭",oee:91,desc:"Inertial measurement unit six-axis calibration on rate table. Bias and scale-factor offset stored."}]},{id:"ecu_prog",num:"04",name:"ECU\nProgramming",color:"#0193ce",stations:[{id:"fw_flash",label:"Firmware Flash",icon:"💾",oee:95,desc:"ECU firmware and bootloader flashed via JTAG/UDS. Version hash verified and archived to MES."},{id:"eol_config",label:"EOL Configuration",icon:"⚙️",oee:93,desc:"End-of-line vehicle-specific parameters written:VIN,market variant,feature flags,calibration constants."},{id:"crypto_key",label:"Crypto Provisioning",icon:"🔐",oee:97,desc:"HSM-backed cryptographic keys provisioned to secure boot partition. Certificate chain verified."},{id:"boot_verify",label:"Boot Verification",icon:"✔️",oee:99,desc:"Full boot cycle executed. CRC check,DTC clear and communication stack health confirmed."}]},{id:"harness_bld",num:"05",name:"Harness\nBuild",color:"#2a7fb0",stations:[{id:"wire_cut",label:"Wire Cut & Strip",icon:"⚡",oee:93,desc:"CNC wire cutting to ±0.5mm length tolerance. Insulation strip validated by laser gauge."},{id:"crimp_seal",label:"Crimp & Seal",icon:"🔩",oee:88,desc:"Crimping validated by pull-force test (each cavity). Environmental seals fitted and checked by vision."},{id:"bundle_route",label:"Bundle Routing",icon:"🔌",oee:91,desc:"Wire bundles routed,twisted and clipped on formboard fixture. Diameter and bend radius verified."},{id:"continuity",label:"Continuity Test",icon:"📊",oee:96,desc:"Full electrical circuit continuity test. Insulation resistance >100MΩ. Short and open circuit detection."}]},{id:"final_test",num:"06",name:"Functional\nTest",color:"#1a5c80",stations:[{id:"func_bench",label:"Test Bench",icon:"🖥️",oee:89,desc:"Full functional test on vehicle-representative harness bench. All diagnostic messages exercised."},{id:"emc_screen",label:"EMC Pre-Screen",icon:"📻",oee:85,desc:"Radiated emissions pre-compliance screen. Antenna coupling and shield integrity confirmed."},{id:"burn_in",label:"Burn-In Chamber",icon:"🌡️",oee:92,desc:"8-hour thermal burn-in at 85°C with power cycling. Infant mortality failures screened out."},{id:"despatch_scan",label:"Despatch Scan",icon:"✅",oee:99,desc:"Traceability 2D scan linked to vehicle VIN. Pack,label and despatch confirmed."}]}],disruptions:{chip_short:{label:"Chip Shortage",icon:"🇹🇼",tag:"Fab allocation cut",color:"#e53e00",title:"🇹🇼 Semiconductor Allocation Cut — Production Hold",desc:"Taiwan fab allocation for the primary MCU reduced by 38% following capacity rebalancing. Safety stock depleted within 4 days. Spot market price is 4× contract rate. Secondary qualification takes 8 weeks.",impact:"PCB assembly at 62% capacity. 190 units/day shortfall. Full recovery estimated 6–8 weeks.",unitsLost:950,direct:["smd_verify","smt_place"],cascade:["reflow","pcb_aoi","fw_flash","eol_config","func_bench","despatch_scan"]},reflow_fault:{label:"Reflow Fault",icon:"🔥",tag:"Temperature runaway",color:"#cc2200",title:"🔥 Reflow Oven Temperature Runaway",desc:"A faulty thermocouple allows zone 5 to exceed programmed peak by 34°C,overheating 480 PCBs. IPC-A-610 Class 3 voids and lifted pads confirmed by X-ray. Oven taken offline for recalibration.",impact:"480 PCBs scrapped. Oven offline 8–14h. Yield loss 18% for remainder of shift.",unitsLost:480,direct:["reflow","wave_solder"],cascade:["pcb_aoi","fw_flash","eol_config","func_bench","burn_in"]},firmware_hold:{label:"Firmware Defect",icon:"💾",tag:"Software quality hold",color:"#7700cc",title:"💾 Critical Firmware Defect — Production Hold",desc:"Regression testing reveals a memory corruption defect in the new ECU firmware build under specific CAN bus loading conditions. All units flashed in the past 3 days held for rework.",impact:"560 units recalled for rework. Programming halted 36h. Rework rate:90 units/shift.",unitsLost:560,direct:["fw_flash","boot_verify"],cascade:["eol_config","crypto_key","func_bench","emc_screen","despatch_scan"]},esd_event:{label:"ESD Event",icon:"⚡",tag:"Component damage",color:"#cc7700",title:"⚡ ESD Event — Latent Defect Screening",desc:"An ioniser fault in the SMT area creates an uncontrolled ESD event exposing components to >2kV HBM discharge. Latent defects are not detectable by standard AOI — elevated burn-in failure rate triggered investigation.",impact:"Burn-in failure rate 8× baseline. 220 boards in enhanced screening. ESD area shut 6h.",unitsLost:220,direct:["smt_place","burn_in"],cascade:["reflow","pcb_aoi","func_bench","emc_screen","despatch_scan"]},cal_drift:{label:"Cal. Drift",icon:"📡",tag:"Sensor alignment fail",color:"#0055cc",title:"📡 Sensor Calibration System Drift",desc:"The radar boresight calibration fixture thermal expansion shifts reference targets by 0.3°,causing systematic mis-calibration across 6 hours of production. Field correlation test detects the issue via OTA data.",impact:"310 units requiring re-calibration. Fixture recertification:12h. Rework:3 days at reduced rate.",unitsLost:310,direct:["radar_align","lidar_test"],cascade:["imu_cal","camera_fit","func_bench","emc_screen","despatch_scan"]},harness_crimp:{label:"Crimp Hold",icon:"🛑",tag:"Crimp non-conformance",color:"#cc0033",title:"🛑 Harness Crimp Quality Hold",desc:"Pull-force testing reveals systematic under-crimp across terminal family A12 connectors following tooling wear. All harnesses built in the past 5 days quarantined. Crimp press recalibrated and tooling replaced.",impact:"680 harnesses in quarantine. Rework rate 45 units/shift. Tooling lead time:8 days.",unitsLost:680,direct:["crimp_seal","wire_cut"],cascade:["bundle_route","continuity","func_bench","despatch_scan"]}}},seating:{throughput:245,defect:35,stages:[{id:"frame_fab",num:"01",name:"Frame\nFabrication",color:"#1a5c80",stations:[{id:"tube_bend",label:"Tube Cut & Bend",icon:"🔧",oee:93,desc:"Seat frame tubes cut to length and CNC-bent to ±0.5° angular tolerance. Bend radius verified."},{id:"frame_weld",label:"Frame TIG Weld",icon:"⚡",oee:86,desc:"Seat frame TIG welded in fixture jig. All welds to ISO 5817 Class B. Penetration checked by X-ray sample."},{id:"bracket_spot",label:"Bracket Spot Weld",icon:"🔘",oee:88,desc:"Mounting brackets,recliner pivots and headrest tubes spot-welded. Nugget diameter verified."},{id:"powder_coat",label:"Powder Coat",icon:"🎨",oee:95,desc:"Seat frame powder-coated in black textured finish. Film thickness 80–120μm. Cross-hatch adhesion check."}]},{id:"mechanism",num:"02",name:"Seat\nMechanism",color:"#003f72",stations:[{id:"track_slide",label:"Track Slide Assy",icon:"↔️",oee:91,desc:"Fore-aft track slide assembled with ball bearings and end stops. Slide force 15–35N at 20°C."},{id:"recliner",label:"Recliner Mechanism",icon:"🔄",oee:87,desc:"Continuous or disc recliner assembled,torque-tested and angle-locked. Fatigue life:25,000 cycles."},{id:"height_adj",label:"Height Adjuster",icon:"⬆️",oee:89,desc:"Sector-gear height adjuster assembled. Effort at handle:25–50N. Locking ratchet verified."},{id:"latch_lock",label:"Fore-Aft Lock",icon:"🔒",oee:93,desc:"Fore-aft lock mechanism assembled and lever pull tested. Anti-rattle spring pre-loaded."}]},{id:"foam_cushion",num:"03",name:"Foam &\nCushion",color:"#0055a5",stations:[{id:"foam_pour",label:"Foam Pour Mould",icon:"🧪",oee:88,desc:"Cold-cure polyurethane foam poured into heated aluminium mould at 55°C. Density 55 kg/m³ ±3%."},{id:"foam_trim",label:"Foam Trim & Profile",icon:"✂️",oee:85,desc:"Cured foam trimmed by CNC waterjet to contour profile. Surface open-cell slice for breathability."},{id:"cushion_bond",label:"Cushion Pad Bond",icon:"🏗️",oee:91,desc:"Cushion and backrest foam bonded to frame with heat-reactive adhesive. Peel force >80N confirmed."}]},{id:"trim_fabric",num:"04",name:"Trim &\nFabric",color:"#0193ce",stations:[{id:"fabric_cut",label:"Fabric Cut & Sew",icon:"🪡",oee:82,desc:"Fabric and leather panels CNC-cut from hides/rolls. Sewn panels joined in automated sewing cell."},{id:"airbag_slv",label:"Airbag Sleeve Fit",icon:"💨",oee:90,desc:"Side-impact airbag deployment sleeve sewn into seat side bolster. Stitch type and tear seam verified."},{id:"leather_wrap",label:"Leather Wrap",icon:"🪑",oee:83,desc:"Leather cover hand-stretched onto foam cushion. Tension equalized,wrinkle-free finish required."},{id:"pattern_match",label:"Pattern Match QC",icon:"👁️",oee:91,desc:"Vision system checks pattern alignment across seat back-cushion joint. Mis-match tolerance ≤2mm."}]},{id:"elec_fit",num:"05",name:"Electrical\nFit",color:"#2a7fb0",stations:[{id:"heat_elem",label:"Heating Element",icon:"🌡️",oee:92,desc:"Carbon-fibre heating element bonded to seat foam. Resistance and cold-test continuity verified."},{id:"lumbar_motor",label:"Lumbar Motor",icon:"🔌",oee:88,desc:"Air-bladder or motor-driven lumbar support fitted. Range of movement and effort tested."},{id:"seat_motor",label:"Position Motors",icon:"⚙️",oee:90,desc:"Fore-aft and recline servo motors fitted and calibrated to full stroke. Current draw confirmed."},{id:"harness_route",label:"Harness Routing",icon:"🧵",oee:94,desc:"Seat harness routed through frame channels,strain-relieved at pivot points. Pinch-point inspection."}]},{id:"seat_qc",num:"06",name:"Trim &\nQC",color:"#1a5c80",stations:[{id:"cover_install",label:"Cover Install",icon:"🪑",oee:87,desc:"Full cover assembly married to frame. Clip retention force >25N per clip. Trim gap ≤1.5mm."},{id:"weight_sensor",label:"Occupant Sensor",icon:"⚖️",oee:94,desc:"Occupant classification sensor fitted and calibrated. Airbag threshold weight verified on test mass."},{id:"sit_check",label:"Final Sit Check",icon:"✅",oee:97,desc:"Operator sit-to-check:mechanism function,trim tension,squeak & rattle NVH sweep,and cosmetic sign-off."}]}],disruptions:{frame_weld:{label:"Frame Weld Hold",icon:"⚡",tag:"Weld cracking",color:"#cc2200",title:"⚡ Seat Frame Weld Cracking — Quality Hold",desc:"Destructive peel testing reveals under-penetration in the recliner pivot TIG welds from a 6-hour window. Crack propagation under cyclic load confirmed by fatigue test coupon. All affected frames quarantined.",impact:"140 seat frames in hold. TIG welding cell shut 8h. Re-qualification:2 days.",unitsLost:140,direct:["frame_weld","bracket_spot"],cascade:["recliner","height_adj","latch_lock","cover_install","sit_check"]},foam_defect:{label:"Foam Defect",icon:"🧪",tag:"Density non-conformance",color:"#e53e00",title:"🧪 Foam Batch Density Non-Conformance",desc:"Incoming foam pour batch tests at 48 kg/m³ — below the 52 kg/m³ minimum spec. Sag factor and fatigue resistance both out of tolerance. Batch rejected; supplier mould temperature records show a process drift.",impact:"Foam pour halted 24h. 95 sets in quarantine. Supplier re-certification:4 days.",unitsLost:95,direct:["foam_pour","foam_trim"],cascade:["cushion_bond","leather_wrap","cover_install","sit_check"]},fabric_delay:{label:"Fabric Delay",icon:"🚢",tag:"Leather supply shortage",color:"#0055cc",title:"🚢 Leather & Fabric Supply Disruption",desc:"Tannery fire at the primary leather supplier in Portugal disrupts hide supply for premium grades. Only standard-grade fabric available. Customers with leather specification seats placed on sequence hold.",impact:"Leather variant throughput zero for 5 days. 225 premium-spec seats delayed.",unitsLost:225,direct:["fabric_cut","leather_wrap"],cascade:["pattern_match","cover_install","sit_check"]},airbag_hold:{label:"Airbag Hold",icon:"💨",tag:"Safety-critical stop",color:"#cc0033",title:"💨 Airbag Sleeve Quality Hold — Line Stop",desc:"Stitch-count verification detects a sewing machine needle skip producing tears below the minimum deployment force spec. Safety-critical stop applied. All seats from the 4-hour window quarantined pending tear test.",impact:"Full line stop 3h. 60 seats in containment. Sewing cell re-qualify:1 day.",unitsLost:60,direct:["airbag_slv","fabric_cut"],cascade:["leather_wrap","pattern_match","cover_install","sit_check"]},motor_cal:{label:"Motor Cal Fail",icon:"⚙️",tag:"Actuator calibration",color:"#7700cc",title:"⚙️ Seat Position Motor Calibration Failure",desc:"Software update to the seat ECU introduces a position-sensor offset error. Motors calibrate to incorrect hard-stop positions,causing over-travel and stall on 30% of units. Firmware rolled back; affected units require rework.",impact:"180 units requiring motor rework. Firmware validation hold:12h.",unitsLost:180,direct:["seat_motor","lumbar_motor"],cascade:["harness_route","weight_sensor","sit_check"]},sewing_down:{label:"Sewing Downtime",icon:"🪡",tag:"Machine breakdown",color:"#cc7700",title:"🪡 CNC Sewing Cell Breakdown",desc:"Main servo motor failure on the automated sewing cell leaves only manual sewing capacity. Manual throughput is 35% of CNC rate and cannot maintain panel consistency tolerances for premium trim variants.",impact:"Trim throughput drops to 35%. 120-unit backlog per day. Motor lead time:4 days.",unitsLost:480,direct:["fabric_cut","pattern_match"],cascade:["leather_wrap","airbag_slv","cover_install","sit_check"]}}},glass_trim:{throughput:380,defect:42,stages:[{id:"glass_prep",num:"01",name:"Glass\nPreparation",color:"#1a5c80",stations:[{id:"float_cut",label:"Float Glass Cut",icon:"💎",oee:94,desc:"Float glass blanks cut from 3.2mm or 4.8mm ribbon stock. CNC waterjet cutting to ±0.3mm."},{id:"edge_grind",label:"Edge Grinding",icon:"⚙️",oee:89,desc:"All edges ground to smooth arrised finish. Ground-face chamfer 0.5mm ±0.1mm verified by gauge."},{id:"drill_notch",label:"Drill & Notch",icon:"🔩",oee:91,desc:"Mounting holes drilled and corner notches cut for mirror mounts and clip attachment."},{id:"profile_chk",label:"Profile Check",icon:"📐",oee:96,desc:"Template and vision check of glass contour. Bow and warp ≤1mm across longest diagonal."}]},{id:"tempering",num:"02",name:"Heat\nTempering",color:"#003f72",stations:[{id:"furnace_load",label:"Furnace Loading",icon:"🌡️",oee:95,desc:"Glass loaded on ceramic rollers for roller-hearth furnace. Spacing maintained to prevent contact marking."},{id:"heat_temper",label:"Tempering Oven",icon:"🔥",oee:86,desc:"Glass heated to 620°C then rapidly quenched with controlled air jets. Surface stress >90MPa."},{id:"flatness_chk",label:"Flatness Verify",icon:"📏",oee:93,desc:"Automated laser flatness scan post-quench. Bow limit 1.5mm/m. Failed parts directed to cull."},{id:"break_test",label:"Fragmentation Test",icon:"💥",oee:97,desc:"1-in-200 sample break test:fragment count >40 per 50×50mm square confirms temper quality."}]},{id:"encapsulation",num:"03",name:"Rubber\nEncapsulation",color:"#0055a5",stations:[{id:"primer_coat",label:"Glass Primer",icon:"🎨",oee:96,desc:"Adhesion primer applied to glass perimeter by CNC robot. Activation window:5–60 min at 23°C."},{id:"rubber_mould",label:"Rubber Moulding",icon:"🟫",oee:84,desc:"Thermoplastic rubber/PVC profile injection-moulded directly onto glass edge in compression tool."},{id:"encap_cure",label:"Encap Cure Check",icon:"🔬",oee:92,desc:"Peel adhesion and cross-section checks on 1-in-50. Min. 4N/mm peel force on rubber-to-glass joint."}]},{id:"feature_fit",num:"04",name:"Feature\nIntegration",color:"#0193ce",stations:[{id:"antenna_bond",label:"Antenna Wire Bond",icon:"📡",oee:91,desc:"AM/FM and DAB antenna wires silver-paste bonded and cured. Signal attenuation <0.5dB verified."},{id:"demist_elem",label:"Demist Element",icon:"🌡️",oee:88,desc:"Rear screen demist grid applied by screen-printing or film laminate. Resistance 2.5–3.5Ω end-to-end."},{id:"sensor_mount",label:"Rain/Light Sensor",icon:"🌧️",oee:87,desc:"Rain and ambient light sensor bonded to inner face with optically-clear adhesive. Alignment ±0.5mm."},{id:"cam_bracket",label:"Camera Bracket",icon:"📷",oee:93,desc:"Front camera and ADAS bracket bonded to windscreen with structural adhesive. Bond area strength verified."}]},{id:"trim_fab",num:"05",name:"Trim\nFabrication",color:"#2a7fb0",stations:[{id:"inj_mould",label:"Injection Moulding",icon:"🏭",oee:83,desc:"PP/ABS interior trim panels injection-moulded. Sink,weld-line and warpage within class A surface spec."},{id:"flocking",label:"Flocking & Finish",icon:"🖌️",oee:88,desc:"A-pillar and mirror cover panels flock-coated for soft-touch finish. Adhesion test >2N/cm."},{id:"chrome_coat",label:"Chrome-Look Coat",icon:"✨",oee:85,desc:"PVD chrome-effect coating applied to exterior trim. Salt-spray 240h without delamination."},{id:"clip_fit",label:"Assembly Clip Fit",icon:"🔗",oee:94,desc:"Push-fit clips pressed into trim panel in correct orientation. Retention force >40N confirmed."}]},{id:"glass_qc",num:"06",name:"Vision\n& Dispatch",color:"#1a5c80",stations:[{id:"opt_distort",label:"Optical Distortion",icon:"🔎",oee:90,desc:"Moiré fringe projection measures optical distortion across full glass area. Power ≤0.06 dioptre."},{id:"cosm_scan",label:"Cosmetic Vision",icon:"👁️",oee:92,desc:"AI vision system under collimated light scans for bubbles,inclusions,chips and seal defects."},{id:"prot_film",label:"Protective Film",icon:"🛡️",oee:97,desc:"Protective polyethylene film applied to both faces. Edge coverage ≥5mm inboard of encapsulation."},{id:"palletise",label:"Palletise & Ship",icon:"✅",oee:99,desc:"Glass loaded to dedicated A-frame pallets with foam separation. Bar code scan and packing list confirmed."}]}],disruptions:{furnace_spike:{label:"Furnace Spike",icon:"🔥",tag:"Temperature runaway",color:"#e53e00",title:"🔥 Tempering Furnace Temperature Runaway",desc:"A thermocouple failure allows the tempering furnace to overshoot by 22°C for 3 hours. Excessive heat causes nickel-sulphide inclusions to precipitate,making spontaneous breakage likely. All glass from the window quarantined.",impact:"320 panes quarantined. Furnace offline for recalibration 10h. Scrap cost est. £48k.",unitsLost:320,direct:["heat_temper","furnace_load"],cascade:["flatness_chk","break_test","encap_cure","opt_distort","palletise"]},encap_delam:{label:"Encap Failure",icon:"🟫",tag:"Delamination hold",color:"#cc2200",title:"🟫 Rubber Encapsulation Delamination Hold",desc:"Field returns show rubber profile peeling from glass at the lower A-pillar seal under combined UV and thermal cycling. Root cause traced to primer application temperature exceedance. Full containment of 2 weeks of production.",impact:"860 windscreens in field containment. Re-prime and mould:5 days. PPAP re-submission:3 weeks.",unitsLost:860,direct:["rubber_mould","primer_coat"],cascade:["encap_cure","antenna_bond","opt_distort","cosm_scan","palletise"]},adhesive_short:{label:"Adhesive Delay",icon:"🚢",tag:"PU supply disruption",color:"#0055cc",title:"🚢 Polyurethane Adhesive Supply Disruption",desc:"Single-source PU adhesive supplier declares force majeure following a plant fire in Belgium. Buffer stock covers 2 days. Alternative adhesive requires 5-week qualification process per OEM adhesive standard.",impact:"Windscreen bonding halted day 2. 190 units/day impact. Qualification:5 weeks minimum.",unitsLost:380,direct:["sensor_mount","cam_bracket"],cascade:["antenna_bond","demist_elem","opt_distort","cosm_scan","palletise"]},distortion_rej:{label:"Distortion Hold",icon:"🔎",tag:"Optical quality spike",color:"#7700cc",title:"🔎 Optical Distortion Reject Rate Spike",desc:"Post-tempering roller marking causes systematic optical distortion in the upper half of 22% of windscreens. The distortion exceeds ECE R43 limits. Roller maintenance called — furnace reconfiguration required.",impact:"22% reject rate — 84 panes/day scrap. Furnace roller replacement:16h downtime.",unitsLost:168,direct:["opt_distort","flatness_chk"],cascade:["cosm_scan","heat_temper","furnace_load","palletise"]},sensor_align:{label:"Sensor Misalign",icon:"🌧️",tag:"ADAS alignment fail",color:"#cc0033",title:"🌧️ Rain/Light Sensor Alignment Failure",desc:"Vehicle OTA diagnostics surface systematic ADAS calibration errors traced to rain sensor bond misalignment. Angular error 1.2° exceeds the 0.5° tolerance. Bonding jig thermal drift confirmed.",impact:"415 windscreens requiring re-bond. Sensor removal and rebond:8 min each. Jig recal:4h.",unitsLost:415,direct:["sensor_mount","cam_bracket"],cascade:["opt_distort","cosm_scan","palletise"]},mould_damage:{label:"Mould Damage",icon:"🏭",tag:"Tool failure",color:"#cc7700",title:"🏭 Injection Mould Tool Damage",desc:"A steel insert fractures in the A-pillar trim injection mould,contaminating 60 parts with metal flash and rendering the tool irreparable. Replacement tool is on 6-week delivery from the toolmaker.",impact:"A-pillar trim production halted 6 weeks. Expediting secondary tool at 3× normal cost.",unitsLost:1200,direct:["inj_mould","flocking"],cascade:["chrome_coat","clip_fit","cosm_scan","palletise"]}}},thermal:{throughput:195,defect:22,stages:[{id:"tube_fin",num:"01",name:"Tube &\nFin Prep",color:"#1a5c80",stations:[{id:"fin_corrugate",label:"Fin Corrugating",icon:"〰️",oee:91,desc:"Aluminium strip corrugated to louvred fin geometry on progressive roll-form mill. Fin pitch 1.2mm ±0.05mm."},{id:"tube_cut",label:"Tube Cut & Flare",icon:"✂️",oee:94,desc:"Aluminium flat tube cut to length and end-flared for header plate insertion. Burr-free cut confirmed."},{id:"header_stamp",label:"Header Plate Stamp",icon:"🔧",oee:87,desc:"Aluminium header plates stamped with tube slots and manifold features. Slot tolerance ±0.1mm."},{id:"preclean",label:"Pre-Braze Clean",icon:"🧪",oee:96,desc:"Degreasing and alkaline clean to remove rolling lubricants prior to brazing. Contact angle <10° verified."}]},{id:"brazing",num:"02",name:"Core\nBrazing",color:"#003f72",stations:[{id:"flux_coat",label:"Flux Coat",icon:"🖌️",oee:92,desc:"NOCOLOK flux applied by spray to all braze joint surfaces. Coverage density 3–6 g/m²."},{id:"cab_furnace",label:"CAB Brazing Furnace",icon:"🔥",oee:83,desc:"Controlled-atmosphere brazing at 600°C in nitrogen atmosphere <10ppm O₂. All joints flow-filled."},{id:"n2_purge",label:"Nitrogen Purge",icon:"💨",oee:95,desc:"Post-braze nitrogen purge cools core to below 200°C before atmosphere break. Oxidation prevented."},{id:"post_clean",label:"Post-Braze Rinse",icon:"💧",oee:94,desc:"Residual flux rinsed in deionised water. Conductivity <50 μS/cm confirmed. Oven dry at 80°C."}]},{id:"compressor",num:"03",name:"Compressor\nPreparation",color:"#0055a5",stations:[{id:"shaft_seal",label:"Shaft Seal Fit",icon:"⭕",oee:89,desc:"PTFE lip seal and O-ring fitted to compressor shaft. Seal run-in test at 1,500 rpm,30 min."},{id:"bearing_load",label:"Bearing Pre-Load",icon:"⚙️",oee:86,desc:"Front and rear bearings pressed and pre-loaded to 80–120N. Running torque 0.3–0.8 Nm confirmed."},{id:"valve_plate",label:"Valve Plate Assy",icon:"🎛️",oee:88,desc:"Reed valve plates and retainers assembled to cylinder head. Valve seating force 12–18N."},{id:"oil_charge",label:"Oil Charge",icon:"🛢️",oee:97,desc:"PAG or POE oil charged to ±2cc. Compressor dry-run test at 1,000 rpm checks no metal debris in oil."}]},{id:"ref_circuit",num:"04",name:"Refrigerant\nCircuit",color:"#0193ce",stations:[{id:"evap_fit",label:"Evaporator Fit",icon:"❄️",oee:90,desc:"Evaporator core inserted into HVAC housing. Face seal and drain pan connection pressure-tested."},{id:"cond_inst",label:"Condenser Install",icon:"♨️",oee:88,desc:"Condenser mounted to front structure. Inlet and outlet block fittings torqued. Vibration isolators fitted."},{id:"exp_valve",label:"Expansion Valve",icon:"🔑",oee:91,desc:"TXV or block valve fitted with O-ring seals. Superheat setting verified at 5°C by refrigerant flow test."},{id:"pressure_test",label:"Pressure Test",icon:"🔬",oee:95,desc:"System pressurised to 28 bar with dry nitrogen for 10 min. Zero pressure drop confirms seal integrity."}]},{id:"controls",num:"05",name:"Control\nIntegration",color:"#2a7fb0",stations:[{id:"blower_fit",label:"Blower Motor Fit",icon:"🌬️",oee:92,desc:"Centrifugal blower motor fitted to housing. Vibration <1.5mm/s at 3,000 rpm. Airflow 350–420 m³/h."},{id:"ctrl_flash",label:"HVAC ECU Flash",icon:"💾",oee:94,desc:"HVAC ECU firmware and vehicle-variant config flashed. CAN communication and DTC health confirmed."},{id:"temp_cal",label:"Temp Sensor Cal",icon:"🌡️",oee:89,desc:"Cabin and evaporator temperature sensors calibrated against reference at 0°C and 40°C. Offset ≤0.5°C."},{id:"act_fit",label:"Actuator Fit",icon:"🎯",oee:91,desc:"Blend,fresh-air and recirculation door actuators fitted and auto-calibrated. End-stop torques confirmed."}]},{id:"leak_test",num:"06",name:"Leak &\nPerformance",color:"#1a5c80",stations:[{id:"he_leak",label:"Helium Leak Test",icon:"🔍",oee:91,desc:"Refrigerant circuit charged with helium-nitrogen mix. Mass spectrometer detects leaks >2×10⁻⁶ mbar·l/s."},{id:"thermal_bench",label:"Thermal Bench Test",icon:"🌡️",oee:87,desc:"Climate chamber test:-20°C pull-down time ≤8 min; 40°C ambient blower performance to spec."},{id:"airflow_bal",label:"Airflow Balance",icon:"🌬️",oee:93,desc:"All vent registers flow-balanced to within ±5% of target airflow at max blower speed."},{id:"final_sign",label:"Final Audit",icon:"✅",oee:99,desc:"Serial number,test data archive,cosmetic inspection and vehicle-VIN link confirmed."}]}],disruptions:{brazing_fault:{label:"Brazing Fault",icon:"🔥",tag:"Atmosphere failure",color:"#e53e00",title:"🔥 CAB Furnace Atmosphere Failure",desc:"Nitrogen generator fault allows oxygen level in the brazing furnace to rise above 50ppm,causing black oxide formation on braze joints. All joints from the 4-hour exposure window show poor bonding. Batch scrapped.",impact:"280 cores scrapped. Furnace atmosphere recertify:8h. Nitrogen generator repair:24h.",unitsLost:280,direct:["cab_furnace","flux_coat"],cascade:["n2_purge","post_clean","pressure_test","he_leak","final_sign"]},ref_leak:{label:"Refrigerant Leak",icon:"❄️",tag:"Circuit leak hold",color:"#cc2200",title:"❄️ Refrigerant Circuit Leak — Production Hold",desc:"Helium leak test detects a systematic leak at the condenser block fitting O-ring seating — traced to a batch of undersized O-rings from a Tier-2 supplier. All units in the 3-day build window held for re-seal.",impact:"165 units in hold. O-ring replacement:45 min each. Supplier PPAP re-qualification:8 days.",unitsLost:165,direct:["cond_inst","exp_valve"],cascade:["pressure_test","he_leak","thermal_bench","final_sign"]},compressor_defect:{label:"Compressor Defect",icon:"⚙️",tag:"Bearing batch fault",color:"#cc7700",title:"⚙️ Compressor Bearing Batch Defect",desc:"Elevated noise in oil-debris check reveals metallic particles from a batch of 320 compressors. Bearing inner race micro-fracture identified. Full batch quarantined; field risk assessment underway for already-shipped units.",impact:"320 compressors in quarantine. 12 field units at recall risk. Bearing re-source:3 weeks.",unitsLost:320,direct:["bearing_load","shaft_seal"],cascade:["valve_plate","oil_charge","exp_valve","pressure_test","he_leak","final_sign"]},aluminium_short:{label:"Aluminium Delay",icon:"🚢",tag:"Coil supply disruption",color:"#0055cc",title:"🚢 Aluminium Coil Supply Disruption",desc:"EU aluminium smelter curtailment following energy cost spikes reduces coil availability by 35%. JIT inventory covers 3 days. Secondary-source aluminium requires alloy re-qualification against thermal cycle fatigue standard.",impact:"Fin and tube production halted day 3. 60 units/day shortfall. Re-qualification:2 weeks.",unitsLost:420,direct:["fin_corrugate","tube_cut"],cascade:["header_stamp","flux_coat","cab_furnace","pressure_test","he_leak"]},regulation_hold:{label:"Regulation Hold",icon:"📋",tag:"Refrigerant compliance",color:"#7700cc",title:"📋 Refrigerant Regulation Compliance Hold",desc:"New EU F-gas regulation takes effect,prohibiting the current refrigerant variant above a revised GWP threshold. Regulatory hold applied pending type approval for approved replacement. Retrofit kits not yet available.",impact:"Full production hold until type approval. Estimated 4–6 weeks. 780 units affected.",unitsLost:780,direct:["exp_valve","evap_fit"],cascade:["cond_inst","pressure_test","he_leak","thermal_bench","final_sign"]},blower_cal:{label:"Blower Cal Drift",icon:"🌬️",tag:"Airflow calibration drift",color:"#cc0033",title:"🌬️ Blower Motor Calibration Drift",desc:"Airflow balance fixture reveals a systematic 12% under-delivery on max blower speed traced to a batch of blower motors with narrower tolerance fan impellers. Units fail interior comfort specification at high demand.",impact:"230 units requiring blower motor replacement. Motor re-order:6 days. Rework rate:28/shift.",unitsLost:230,direct:["blower_fit","airflow_bal"],cascade:["ctrl_flash","temp_cal","thermal_bench","final_sign"]}}}};
// ── Assembly Rendering ────────────────────────────────────────────────────────
const asvg = d3.select("#asm-chart");
let activeAsmDisruption = null;

function buildAssembly() {
  const data   = ASSEMBLY_DATA[currentPart] || ASSEMBLY_DATA.powertrain;
  const stages = data.stages;
  const W = window.innerWidth;
  const H = window.innerHeight - 44;
  asvg.attr("viewBox", [0, 0, W, H]).selectAll("*").remove();

  const padL = 24, padR = 24, padT = 155, padB = 130;
  const stageW  = (W - padL - padR) / stages.length;
  const maxSt   = d3.max(stages, s => s.stations.length);
  const stGap   = Math.min(88, (H - padT - padB) / maxSt);
  const stR     = Math.min(20, stGap * 0.36);
  const spineY  = padT - 30;

  // Position geometry
  stages.forEach((stage, si) => {
    stage.cx = padL + stageW * si + stageW / 2;
    stage.stations.forEach((st, pi) => { st.x = stage.cx; st.y = padT + stGap * pi + stGap / 2; });
  });

  // Build station id → {st, stage} map
  const stMap = {};
  stages.forEach(s => s.stations.forEach(st => { stMap[st.id] = { st, stage: s }; }));

  const root = asvg.append("g");

  // Spine (production flow lane)
  root.append("line")
    .attr("x1", padL + 10).attr("y1", spineY)
    .attr("x2", W - padR - 10).attr("y2", spineY)
    .attr("stroke", "rgba(1,147,206,0.15)").attr("stroke-width", 14)
    .attr("stroke-linecap", "round");

  // Stage arrows along spine
  stages.forEach((stage, si) => {
    if (si < stages.length - 1) {
      const nx = stages[si + 1].cx;
      const ax = (stage.cx + nx) / 2;
      root.append("polygon")
        .attr("points", `${ax - 5},${spineY - 5} ${ax - 5},${spineY + 5} ${ax + 6},${spineY}`)
        .attr("fill", "rgba(1,147,206,0.3)");
    }
    // Drop line from spine to station cluster
    const topY = stage.stations[0].y - stR - 2;
    root.append("line")
      .attr("x1", stage.cx).attr("y1", spineY + 7)
      .attr("x2", stage.cx).attr("y2", topY)
      .attr("stroke", "rgba(1,147,206,0.12)").attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "3,3");
    // Vertical connector joining station dots
    if (stage.stations.length > 1) {
      const botY = stage.stations[stage.stations.length - 1].y + stR + 2;
      root.append("line")
        .attr("x1", stage.cx).attr("y1", topY)
        .attr("x2", stage.cx).attr("y2", botY)
        .attr("stroke", "rgba(1,147,206,0.1)").attr("stroke-width", 1.5);
    }
  });

  // Stage headers
  stages.forEach(stage => {
    const hg = root.append("g");
    hg.append("text")
      .attr("x", stage.cx).attr("y", spineY - 42)
      .attr("text-anchor", "middle").attr("font-size", "10px")
      .attr("letter-spacing", "2").attr("fill", "#8aa0b5")
      .attr("font-family", "'Segoe UI',system-ui,sans-serif")
      .text(stage.num);
    stage.name.split("\n").forEach((ln, li) => {
      hg.append("text")
        .attr("x", stage.cx).attr("y", spineY - 26 + li * 15)
        .attr("text-anchor", "middle").attr("font-size", "12px").attr("font-weight", "600")
        .attr("fill", "#002a5c").attr("font-family", "'Segoe UI',system-ui,sans-serif")
        .text(ln);
    });
  });

  // Defs: shadow filter + arrowhead
  const defs = asvg.append("defs");
  const sh = defs.append("filter").attr("id","asm-shadow")
    .attr("x","-60%").attr("y","-60%").attr("width","220%").attr("height","220%");
  sh.append("feDropShadow")
    .attr("dx","0").attr("dy","2").attr("stdDeviation","5")
    .attr("flood-color","rgba(0,42,92,0.18)");

  // Station nodes
  stages.forEach((stage, si) => {
    stage.stations.forEach((st, pi) => {
      const sg = root.append("g")
        .attr("class", `asm-station station-${st.id}`)
        .attr("transform", `translate(${st.x},${st.y})`)
        .attr("cursor", "pointer")
        .datum({ st, stage })
        .style("opacity", 0);

      sg.append("circle")
        .attr("class", "asm-circle")
        .attr("r", stR)
        .attr("fill", stage.color)
        .attr("stroke", "rgba(255,255,255,0.35)")
        .attr("stroke-width", 2)
        .attr("filter", "url(#asm-shadow)");

      // OEE arc ring
      const arcR = stR + 7, arcW = 3.5;
      sg.append("path")
        .attr("d", d3.arc()({ innerRadius: arcR - arcW, outerRadius: arcR, startAngle: -Math.PI/2, endAngle: 3*Math.PI/2 }))
        .attr("fill", "rgba(0,0,0,0.07)");
      sg.append("path")
        .attr("class", "oee-arc")
        .attr("d", d3.arc()({ innerRadius: arcR - arcW, outerRadius: arcR, startAngle: -Math.PI/2, endAngle: -Math.PI/2 + (st.oee/100)*2*Math.PI }))
        .attr("fill", st.oee >= 90 ? "#00a060" : st.oee >= 80 ? "#dd8800" : "#cc2200");

      sg.append("text")
        .attr("text-anchor","middle").attr("dy","0.38em")
        .attr("font-size", Math.max(11, stR * 0.72) + "px")
        .attr("pointer-events","none").text(st.icon);

      sg.append("text")
        .attr("y", stR + 14).attr("text-anchor","middle")
        .attr("font-size","11px").attr("fill","#3a5a7a")
        .attr("font-family","'Segoe UI',system-ui,sans-serif")
        .attr("pointer-events","none").text(st.label);

      sg.append("text")
        .attr("y", stR + 26).attr("text-anchor","middle")
        .attr("font-size","10px").attr("fill","#8aa0b5")
        .attr("font-family","'Segoe UI',system-ui,sans-serif")
        .attr("pointer-events","none").text(st.oee + "% OEE");

      sg.on("mouseenter", function(event) {
          document.getElementById("tip-name").textContent = st.icon + "  " + st.label;
          document.getElementById("tip-type").textContent = stage.name.replace("\n"," · ");
          document.getElementById("tip-body").innerHTML = st.desc;
          tip.classList.add("show"); moveTip(event);
        })
        .on("mousemove", moveTip)
        .on("mouseleave", hideTip);

      sg.transition().delay(si * 100 + pi * 45).duration(380).style("opacity", 1);
    });
  });

  // Stats
  const totalSt = stages.reduce((n, s) => n + s.stations.length, 0);
  const avgOEE  = Math.round(stages.flatMap(s => s.stations).reduce((a, st) => a + st.oee, 0) / totalSt);
  const delay   = stages.length * 100 + 300;
  setTimeout(() => {
    animateStatVal("asv-throughput", data.throughput, 900, "");
    animateStatVal("asv-oee",        avgOEE, 900, "%");
    animateStatVal("asv-stations",   totalSt, 700, "");
    animateStatVal("asv-defect",     data.defect, 900, "");
  }, delay);
}

function animateStatVal(id, target, dur, suffix) {
  const el = document.getElementById(id); if (!el) return;
  const t0 = performance.now();
  (function step(now) {
    const p = Math.min(1, (now - t0) / dur);
    el.textContent = Math.round(target * p) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

function applyAssemblyDisruption(key) {
  const sc = ASSEMBLY_DATA[currentPart].disruptions[key];
  const dirSet = new Set(sc.direct), casSet = new Set(sc.cascade);

  d3.selectAll(".asm-station").transition().duration(420)
    .style("opacity", d => (dirSet.has(d.st.id) || casSet.has(d.st.id)) ? 1 : 0.12);

  d3.selectAll(".asm-circle").transition().duration(420)
    .attr("fill", d => {
      if (dirSet.has(d.st.id))  return sc.color;
      if (casSet.has(d.st.id))  return d3.interpolateRgb(sc.color, d.stage.color)(0.52);
      return d.stage.color;
    });

  document.getElementById("asm-dis-title").textContent  = sc.title;
  document.getElementById("asm-dis-title").style.color   = sc.color;
  document.getElementById("asm-dis-desc").textContent    = sc.desc;
  const imp = document.getElementById("asm-dis-impact");
  imp.textContent = "⚠  " + sc.impact;
  imp.style.borderColor = sc.color;
  imp.style.background  = sc.color + "15";
  imp.style.color = "";
  document.getElementById("adi-direct").textContent  = sc.direct.length;
  document.getElementById("adi-direct").style.color  = sc.color;
  document.getElementById("adi-cascade").textContent = sc.cascade.length;
  document.getElementById("adi-cascade").style.color = "#888";
  document.getElementById("adi-loss").textContent    = sc.unitsLost;
  document.getElementById("adi-loss").style.color    = "#cc2200";
  document.getElementById("asm-dis-info").classList.add("show");
  // Reset CADDi panel
  const asmBtn = document.getElementById("asm-caddi-btn");
  asmBtn.disabled = false;
  asmBtn.innerHTML = '<span class="caddi-logo">⬡</span> Use CADDi to Resolve';
  document.getElementById("asm-caddi-log").innerHTML = "";
}

function clearAssemblyDisruption() {
  activeAsmDisruption = null;
  document.querySelectorAll("#asm-disruption-bar .dis-card").forEach(c => {
    c.classList.remove("active"); c.style.borderColor = ""; c.style.boxShadow = "";
  });
  document.getElementById("asm-dis-info").classList.remove("show");
  d3.selectAll(".asm-station").transition().duration(420).style("opacity", 1);
  d3.selectAll(".asm-circle").transition().duration(420).attr("fill", d => d.stage.color);
}

function initAsmDisruptionBar() {
  const bar = document.getElementById("asm-disruption-bar");
  bar.innerHTML = Object.entries(ASSEMBLY_DATA[currentPart].disruptions).map(([key, sc]) => `
    <div class="dis-card" data-adis="${key}">
      <div class="dis-icon">${sc.icon}</div>
      <div class="dis-name">${sc.label}</div>
      <div class="dis-tag">${sc.tag}</div>
    </div>`).join("");
  bar.querySelectorAll(".dis-card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.adis, sc = ASSEMBLY_DATA[currentPart].disruptions[key];
      if (activeAsmDisruption === key) {
        clearAssemblyDisruption();
      } else {
        activeAsmDisruption = key;
        bar.querySelectorAll(".dis-card").forEach(c => { c.classList.remove("active"); c.style.borderColor = ""; c.style.boxShadow = ""; });
        card.classList.add("active");
        card.style.borderColor = sc.color;
        card.style.boxShadow   = `0 0 20px ${sc.color}44, 0 4px 14px rgba(0,0,0,0.1)`;
        applyAssemblyDisruption(key);
        // Tutorial: when user picks their first assembly crisis, advance to step 3
        if (tutorialStep === TUT.ASM_WATCH_CRISIS) {
          setTimeout(() => {
            document.getElementById("asm-dis-info").scrollTop = document.getElementById("asm-dis-info").scrollHeight;
            setTimeout(() => showTutStep(TUT.ASM_CADDI), 150);
          }, 700);
        }
      }
    });
  });
}
document.getElementById("asm-dis-close").addEventListener("click", clearAssemblyDisruption);

// ── Phase switching ───────────────────────────────────────────────────────────
function switchPhase(phase) {
  document.body.classList.toggle("asm", phase === "assembly");
  document.querySelectorAll(".phase-tab").forEach(t =>
    t.classList.toggle("active", t.dataset.phase === phase));
  if (phase === "assembly") {
    const ip = INTRO_PARTS.find(p => p.key === currentPart);
    document.getElementById("page-title").textContent    = (ip ? ip.name : "Component") + " Assembly";
    document.getElementById("page-subtitle").textContent = "Simulating production flow and operational disruptions";
    initAsmDisruptionBar();
    buildAssembly();
    setTimeout(startAsmTutorial, 1100);
  } else {
    document.getElementById("page-title").textContent    = "Supply Chain Fragility Simulator";
    document.getElementById("page-subtitle").textContent = "Mapping the hidden complexity behind every component";
  }
}
document.querySelectorAll(".phase-tab:not(.disabled)").forEach(tab =>
  tab.addEventListener("click", () => switchPhase(tab.dataset.phase)));

// ── CADDi Resolution Engine ───────────────────────────────────────────────────
const CADDI_STEPS = {
  // ── Supply Chain ─────────────────────────────────────────────────────────────
  energy: [
    { icon: "🔍", text: "Analyzing energy exposure across 340 manufacturing nodes — intensive processes flagged" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 7 low-energy-cost foundries in Norway, Canada & Mexico qualified" },
    { icon: "⚙️", text: "New Production Process Implemented: energy-optimized routing cuts cast aluminium exposure by 38%" },
    { icon: "✅", text: "Supply chain rebalanced — cost impact reduced from +50% to +9% per unit" }
  ],
  taiwan: [
    { icon: "📄", text: "CADDi Drawer: 23 Taiwan-sourced chip specs indexed and cross-referenced against global equivalents" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 11 equivalent-spec fabs in Korea, Japan & EU identified and contacted" },
    { icon: "🔧", text: "Parts Redesigned: 9 chips substituted with footprint-compatible alternatives — no board layout changes" },
    { icon: "✅", text: "Chip supply secured — 18-week pipeline established across 3 qualified non-Taiwan sources" }
  ],
  pgm: [
    { icon: "📄", text: "CADDi Drawer: PGM usage mapped across 140 part numbers — catalyst loading data indexed" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: recycled PGM processors in Belgium, Japan & Canada located" },
    { icon: "🔧", text: "Parts Redesigned: catalyst geometry optimized by AI — PGM loading reduced 22% at equivalent output" },
    { icon: "✅", text: "Supply continuity secured — PGM exposure reduced 34%, 12-week forward buffer established" }
  ],
  china_ree: [
    { icon: "🔍", text: "Rare earth dependency mapped across motor, sensor and battery assemblies via CADDi drawing analysis" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 5 Australian and Canadian REE processors with qualifying inventory" },
    { icon: "🔧", text: "Parts Redesigned: magnet geometry revised — REE content reduced 28% at equivalent performance spec" },
    { icon: "✅", text: "Dual-source strategy live — REE supply risk reduced 61%, 6-month forward cover secured" }
  ],
  russia: [
    { icon: "📄", text: "CADDi Drawer: palladium usage indexed — 34 catalyst and contact components identified" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: South African and secondary-market palladium sources qualified" },
    { icon: "🔧", text: "Parts Redesigned: platinum–palladium blend substitution reduces Russian-source dependency 40%" },
    { icon: "✅", text: "Catalyst supply secured — 4-month fixed-price forward cover purchased, re-qualification accelerated" }
  ],
  logistics: [
    { icon: "🔍", text: "CADDi cross-references 127 at-risk part numbers against supplier inventory and transit data" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 9 near-shore European & North American equivalents sourced" },
    { icon: "⚙️", text: "New Production Route Implemented: air-freight bridge activated for critical semiconductors and sensors" },
    { icon: "✅", text: "Supply continuity restored — regional diversification reduces Red Sea exposure by 74%" }
  ],

  // ── Assembly: Powertrain ──────────────────────────────────────────────────────
  robot: [
    { icon: "🔍", text: "Affected block variants identified — 3 CNC specs mapped to 47 qualified suppliers in CADDi network" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 8 contract machinists with compatible capacity available locally" },
    { icon: "⚙️", text: "New Production Process Implemented: external machining route live, first parts received in 4h" },
    { icon: "✅", text: "Block supply bridge at 85% capacity — in-house robot repair completed on schedule" }
  ],
  labour: [
    { icon: "🔍", text: "Assembly processes decomposed in CADDi — 12 tasks identified as eligible for contractor coverage" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: specialist assembly contractors engaged via CADDi supplier network" },
    { icon: "🧑‍🏭", text: "Workers Reskilled: 38 operators cross-trained on flexible task assignments within 24h" },
    { icon: "✅", text: "Production stabilized at 72% — flexible workforce model adopted as ongoing contingency" }
  ],
  faulty: [
    { icon: "📄", text: "CADDi Drawer: piston dimensional spec analyzed — non-conformance root cause identified in 2h" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 6 IATF-certified piston forgers with conforming stock available" },
    { icon: "🔧", text: "Parts Redesigned: tolerance stack-up revised to reduce sensitivity to supplier process variation" },
    { icon: "✅", text: "Dual-source supply live — rework queue cleared, PPAP re-submission accelerated to 3 days" }
  ],
  sole_source: [
    { icon: "📄", text: "CADDi Drawer: 2,400 casting drawings digitized and indexed — AI vectorization complete in 4h" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 11 IATF-certified foundries with matching block geometry capability" },
    { icon: "📋", text: "RFQs dispatched to 6 shortlisted suppliers — first qualified quotes received within 6h" },
    { icon: "✅", text: "Dual-source strategy established — supplier qualification compressed from 4 weeks to 9 days" }
  ],
  inbound: [
    { icon: "🔍", text: "ECU and sensor BOM analyzed — alternative-spec components identified in CADDi parts database" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 5 European electronics distributors with in-spec stock on hand" },
    { icon: "⚙️", text: "New Production Route Implemented: air freight bridge for critical ECUs, line restarted in 18h" },
    { icon: "✅", text: "Line fully restocked within 48h — buffer policy updated to 10-day minimum on long-lead electronics" }
  ],
  quality: [
    { icon: "📄", text: "CADDi Drawer: torque converter drawing pulled — lock-up profile spec variance identified" },
    { icon: "🔧", text: "Parts Redesigned: lock-up clutch geometry revised — root cause corrected with no tooling change" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 3 qualified torque converter assemblers available for dual-source" },
    { icon: "✅", text: "PPAP accepted — containment cleared, field fix kit dispatched for 3 affected vehicles" }
  ],

  // ── Assembly: Chassis ─────────────────────────────────────────────────────────
  press_fault: [
    { icon: "📄", text: "Side rail tooling specs pulled from CADDi Drawer — press-load profile cross-referenced" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 4 contract stampers with compatible progressive tooling available" },
    { icon: "⚙️", text: "New Production Route Implemented: rail stamping outsourced to secondary press within 8h" },
    { icon: "✅", text: "Rail supply restored at 90% — in-house press hydraulic repair completed on 12h schedule" }
  ],
  weld_defect: [
    { icon: "🔍", text: "Weld parameter history correlated in CADDi — deviation window isolated to 4h production run" },
    { icon: "🔧", text: "Parts Redesigned: joint geometry revised to reduce sensitivity to wire-feed rate variation" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: certified weld-rework contractor engaged for quarantine batch" },
    { icon: "✅", text: "40 chassis cleared in 36h — revised procedure re-qualified and locked into CADDi spec library" }
  ],
  steel_shortage: [
    { icon: "📄", text: "Steel spec cross-referenced in CADDi Drawer — 12 globally equivalent AHSS grades identified" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: Swedish and South Korean coil stock at conforming spec available" },
    { icon: "🔧", text: "Parts Redesigned: wall thickness optimized for available grade — 7% weight saving realized" },
    { icon: "✅", text: "Coil supply secured — blanking restarted within 36h on qualified alternative-grade material" }
  ],
  ecoat_fault: [
    { icon: "🔍", text: "E-coat process parameters analyzed in CADDi — contamination source isolated to rinse tank B" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 2 contract coating facilities with cathodic e-coat capacity" },
    { icon: "⚙️", text: "New Production Process Implemented: 90-chassis batch outsourced during 36h bath recharge" },
    { icon: "✅", text: "Surface treatment restored — all quarantine chassis cleared and e-coat bath recertified" }
  ],
  subframe_recall: [
    { icon: "📄", text: "CADDi Drawer: fatigue simulation run on weld drawing — stress riser at joint geometry confirmed" },
    { icon: "🔧", text: "Parts Redesigned: weld profile and bead placement updated to eliminate stress concentration point" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: qualified rework contractor engaged for field containment batch" },
    { icon: "✅", text: "Revised weld procedure validated — 35 chassis cleared, new design PPAP approved in 5 days" }
  ],
  labour_shortage: [
    { icon: "🔍", text: "Welding process decomposed in CADDi — 8 joints identified as candidates for cobot automation" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 3 contract weld shops engaged for structural joint overflow" },
    { icon: "🧑‍🏭", text: "Workers Reskilled: 14 operators upskilled on automated cobot welding cell within 3 days" },
    { icon: "✅", text: "Welding throughput restored to 91% — hybrid cobot + contractor model adopted long-term" }
  ],

  // ── Assembly: Electronics ─────────────────────────────────────────────────────
  chip_short: [
    { icon: "📄", text: "CADDi Drawer: MCU BOM digitized — 23 Taiwan-sourced chips indexed with full cross-reference data" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 11 equivalent-geometry chips from Korea, Japan and EU fabs" },
    { icon: "🔧", text: "Parts Redesigned: 9 MCUs substituted with pin-compatible alternatives — zero board layout changes" },
    { icon: "✅", text: "Chip supply at 94% capacity — 3-supplier diversification mandated in CADDi procurement policy" }
  ],
  reflow_fault: [
    { icon: "🔍", text: "Thermal profile data pulled from CADDi — zone 5 deviation mapped precisely to 3h production window" },
    { icon: "🔧", text: "Parts Redesigned: solder paste spec updated to widen thermal process window by 12°C" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: contract PCB assembler engaged for rework of 480 boards" },
    { icon: "✅", text: "Oven recalibrated and restarted — revised thermal profile validated and locked in CADDi" }
  ],
  firmware_hold: [
    { icon: "🔍", text: "CADDi traceability data identifies all 560 affected units by VIN and firmware flash timestamp" },
    { icon: "🔧", text: "Parts Redesigned: firmware defect isolated — memory-safe patch developed and regression-tested in 18h" },
    { icon: "⚙️", text: "New Production Process Implemented: OTA reflash deployed to field units simultaneously" },
    { icon: "✅", text: "All 560 units reflashed — zero field escapes confirmed via connected-vehicle telemetry data" }
  ],
  esd_event: [
    { icon: "🔍", text: "Affected production window isolated using CADDi traceability — 220 boards flagged precisely" },
    { icon: "⚙️", text: "New Production Process Implemented: enhanced 100% burn-in protocol activated for flagged batch" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: replacement component stock secured from 3 EU distributors" },
    { icon: "✅", text: "220 boards screened — 18 latent defects caught, ESD controls upgraded and zone recertified" }
  ],
  cal_drift: [
    { icon: "📄", text: "CADDi Drawer: calibration fixture drawing analyzed — thermal expansion identified as root cause" },
    { icon: "🔧", text: "Parts Redesigned: fixture updated with Invar reference targets — thermal drift reduced to <0.02mm" },
    { icon: "🧑‍🏭", text: "Workers Reskilled: calibration operators retrained on new fixture procedure and drift monitoring SOP" },
    { icon: "✅", text: "310 units re-calibrated — systematic error eliminated, fixture certified ±0.02° over 40°C range" }
  ],
  harness_crimp: [
    { icon: "📄", text: "CADDi Drawer: A12 crimp tooling spec analyzed — worn cam follower deviation mapped to 5-day window" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 2 qualified harness assemblers engaged for rework batch" },
    { icon: "🔧", text: "Parts Redesigned: crimp height tightened, 100% pull-force test mandated for A12 terminal family" },
    { icon: "✅", text: "680 harnesses reworked in 4 days — revised crimp standard added to CADDi controlled spec library" }
  ],

  // ── Assembly: Seating ─────────────────────────────────────────────────────────
  frame_weld: [
    { icon: "🔍", text: "Weld parameter history pulled from CADDi — under-penetration root cause isolated to 6h window" },
    { icon: "🔧", text: "Parts Redesigned: joint bevel geometry updated — penetration improved with no heat input increase" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: certified rework contractor clears 140 quarantine frames in 48h" },
    { icon: "✅", text: "Revised weld procedure validated — all frames certified, TIG parameters locked in CADDi" }
  ],
  foam_defect: [
    { icon: "📄", text: "CADDi Drawer: foam density spec analyzed — mould temperature drift identified as root cause" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 3 qualified PU foam suppliers with in-spec stock available" },
    { icon: "🔧", text: "Parts Redesigned: density tolerance tightened, supplier process control requirement updated in spec" },
    { icon: "✅", text: "Alternative foam active in 24h — 95 quarantine sets re-tested and cleared for production" }
  ],
  fabric_delay: [
    { icon: "📄", text: "CADDi Drawer: leather hide spec digitized — equivalent-grade alternatives cross-referenced globally" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: Argentine and Turkish tanneries with matching grade in stock" },
    { icon: "🔧", text: "Parts Redesigned: seat variant matrix rationalized — 2 bespoke grades consolidated to 1 standard spec" },
    { icon: "✅", text: "Leather supply restored within 72h — dual-source policy adopted for all premium hide grades" }
  ],
  airbag_hold: [
    { icon: "📄", text: "CADDi Drawer: airbag sleeve stitch spec analyzed — needle skip traced to worn cam follower" },
    { icon: "⚙️", text: "New Production Process Implemented: 100% stitch-count vision check added to sewing line" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: qualified airbag sleeve assembler provides bridge supply" },
    { icon: "✅", text: "60 seats cleared after re-test — sewing cell re-qualified, updated spec locked in CADDi" }
  ],
  motor_cal: [
    { icon: "🔍", text: "CADDi traceability identifies all 180 affected units by firmware version and exact build date" },
    { icon: "🔧", text: "Parts Redesigned: position-sensor offset corrected in firmware — calibration limits tightened" },
    { icon: "🧑‍🏭", text: "Workers Reskilled: 24 operators retrained on updated motor calibration validation procedure" },
    { icon: "✅", text: "180 units reworked in 36h — patch validated and locked into production flashing sequence" }
  ],
  sewing_down: [
    { icon: "🔍", text: "Sewing process mapped in CADDi — 6 panel types identified as viable for contractor sewing" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 2 specialist trim sewing contractors with immediate capacity" },
    { icon: "⚙️", text: "New Production Process Implemented: contractor bridge combined with remaining manual capacity" },
    { icon: "✅", text: "Trim throughput at 88% — servo motor expedited, in-house line restored in 4 days" }
  ],

  // ── Assembly: Glass & Trim ────────────────────────────────────────────────────
  furnace_spike: [
    { icon: "🔍", text: "CADDi batch records isolate 320 panes to exact 3h furnace temperature exceedance window" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 2 approved glass processors with tempering capacity available" },
    { icon: "⚙️", text: "New Production Process Implemented: furnace recalibrated with redundant backup thermocouple" },
    { icon: "✅", text: "320 quarantine panes replaced within 48h — furnace certified, batch records archived in CADDi" }
  ],
  encap_delam: [
    { icon: "📄", text: "CADDi Drawer: primer application spec analyzed — temperature exceedance window precisely identified" },
    { icon: "🔧", text: "Parts Redesigned: primer spec updated with tighter temperature window and cure-time validation gate" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: qualified encapsulation moulder provides field repair kits" },
    { icon: "✅", text: "860 windscreens re-primed and re-moulded in 4 days — PPAP accepted, spec locked in CADDi" }
  ],
  adhesive_short: [
    { icon: "📄", text: "CADDi Drawer: PU adhesive spec analyzed — 3 chemically equivalent alternatives identified" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: German and Swedish adhesive manufacturers qualified in 48h" },
    { icon: "🔧", text: "Parts Redesigned: adhesive bead geometry optimized for new formulation's bond-strength profile" },
    { icon: "✅", text: "Line restarted on alternative adhesive — 5-week qualification compressed to 8 days via CADDi data" }
  ],
  distortion_rej: [
    { icon: "🔍", text: "Optical distortion data correlated with furnace roller position in CADDi — marking pattern confirmed" },
    { icon: "⚙️", text: "New Production Process Implemented: ceramic roller replacement completed in 14h planned shutdown" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: spot-buy from qualified glass processor covers 48h gap" },
    { icon: "✅", text: "Reject rate back to 0.4% baseline — roller schedule added to CADDi predictive maintenance plan" }
  ],
  sensor_align: [
    { icon: "📄", text: "CADDi Drawer: bonding jig drawing analyzed — thermal expansion root cause confirmed" },
    { icon: "🔧", text: "Parts Redesigned: jig rebuilt in Invar tooling steel — drift reduced to <0.02mm over 40°C range" },
    { icon: "🧑‍🏭", text: "Workers Reskilled: ADAS bond operators trained on new jig procedure and OTA validation check" },
    { icon: "✅", text: "415 windscreens re-bonded in 3 days — revised jig certified and drawing updated in CADDi Drawer" }
  ],
  mould_damage: [
    { icon: "📄", text: "CADDi Drawer: A-pillar mould drawing digitized and geometry package prepared for urgent retool" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 3 toolmakers with steel-insert capability located and briefed" },
    { icon: "🔧", text: "Parts Redesigned: insert geometry optimized for higher-grade tool steel — lead time reduced 60%" },
    { icon: "✅", text: "Replacement tool in 2.5 weeks vs. 6-week estimate — CADDi drawing package cut qualification time" }
  ],

  // ── Assembly: Thermal & HVAC ──────────────────────────────────────────────────
  brazing_fault: [
    { icon: "🔍", text: "Atmosphere log data analyzed in CADDi — O₂ spike window isolated to exact 4h production run" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 2 CAB brazing contractors with nitrogen-atmosphere capacity" },
    { icon: "⚙️", text: "New Production Process Implemented: N₂ generator backed up with bulk liquid nitrogen supply" },
    { icon: "✅", text: "280 scrapped cores replaced via contractor brazing — furnace recertified within 24h" }
  ],
  ref_leak: [
    { icon: "📄", text: "CADDi Drawer: O-ring spec analyzed — undersized batch traced to Tier-2 tolerance slip" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 3 IATF-certified O-ring manufacturers with conforming stock" },
    { icon: "🔧", text: "Parts Redesigned: O-ring groove geometry revised for tighter manufacturing tolerance window" },
    { icon: "✅", text: "165 units re-sealed in 48h — revised O-ring spec locked in CADDi and dual-sourced" }
  ],
  compressor_defect: [
    { icon: "📄", text: "CADDi Drawer: bearing spec cross-referenced — 4 equivalent grades with matching load rating found" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: Japanese and German bearing manufacturers with immediate stock" },
    { icon: "🔧", text: "Parts Redesigned: bearing inner race upgraded to higher fatigue class — no compressor housing change" },
    { icon: "✅", text: "320 compressors rebuilt in 3 weeks — upgraded bearing spec adopted as standard in CADDi" }
  ],
  aluminium_short: [
    { icon: "📄", text: "CADDi Drawer: aluminium alloy spec analyzed — 5 equivalent EN-grade alloys identified globally" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: Norwegian and Bahraini smelters with conforming 3003/3005 stock" },
    { icon: "🔧", text: "Parts Redesigned: fin and tube wall thickness optimized for available alloy — performance maintained" },
    { icon: "✅", text: "Aluminium supply secured in 36h — alloy re-qualification compressed from 2 weeks to 4 days" }
  ],
  regulation_hold: [
    { icon: "📄", text: "CADDi Drawer: refrigerant circuit drawings analyzed — R-744 conversion scope mapped across 47 components" },
    { icon: "🔧", text: "Parts Redesigned: expansion valve and evaporator geometry updated for R-744 pressure envelope" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 6 suppliers already qualified on R-744 components, available now" },
    { icon: "✅", text: "Type approval accelerated to 3 weeks — CADDi drawing package submitted to regulator same day" }
  ],
  blower_cal: [
    { icon: "📄", text: "CADDi Drawer: impeller geometry cross-referenced — OD tolerance deviation isolated to batch 07C" },
    { icon: "🌍", text: "Alternative Suppliers Discovered: 2 blower motor manufacturers with conforming impeller stock" },
    { icon: "🔧", text: "Parts Redesigned: impeller dimensional spec tightened — Cpk target raised from 1.33 to 1.67" },
    { icon: "✅", text: "230 motors replaced in 6 days — revised spec locked in CADDi and adopted across all HVAC platforms" }
  ]
};

// ── CADDi sequence runner (Supply Chain) ─────────────────────────────────────
function runCaddiSC(key) {
  const dis   = DISRUPTIONS[key];
  const steps = CADDI_STEPS[key];
  if (!dis || !steps) return;

  const btn = document.getElementById("sc-caddi-btn");
  const log = document.getElementById("sc-caddi-log");
  btn.disabled = true;
  btn.innerHTML = '<span class="caddi-logo">⬡</span> CADDi Working…';
  log.innerHTML = "";

  const direct  = new Set(dis.direct  || []);
  const cascade = new Set(dis.cascade || []);
  const cascadeArr = Array.from(cascade);

  const STEP_MS = 2400;

  steps.forEach((step, i) => {
    setTimeout(() => {
      // Append status item
      const el = document.createElement("div");
      el.className = "caddi-step";
      el.innerHTML = `<span class="caddi-step-icon">${step.icon}</span><span class="caddi-step-text">${step.text}</span>`;
      log.appendChild(el);
      log.scrollTop = log.scrollHeight;

      // Progressively restore cascade nodes
      const frac = (i + 1) / steps.length;
      const restoreCount = Math.round(cascadeArr.length * frac);
      const restoreSet   = new Set(cascadeArr.slice(cascadeArr.length - restoreCount));

      d3.selectAll(".node")
        .filter(d => restoreSet.has(d.data.name))
        .transition().duration(700)
        .style("opacity", 1);
      d3.selectAll(".node circle")
        .filter(d => restoreSet.has(d.data.name))
        .transition().duration(500)
        .attr("fill", "#00c870").attr("stroke", "#00c870").attr("filter", null)
        .transition().delay(600).duration(700)
        .attr("fill", d => getNodeFill(d))
        .attr("stroke", d => typeColors[d.data.type] || "#1a5c80")
        .attr("stroke-width", 1.5);
      d3.selectAll(".link")
        .filter(l => restoreSet.has(l.source.data.name) || restoreSet.has(l.target.data.name))
        .transition().duration(700)
        .style("opacity", 1).attr("stroke", "rgba(1,147,206,0.22)").attr("stroke-width", 1.2);
    }, i * STEP_MS);
  });

  // Final resolution
  setTimeout(() => {
    // Flash direct nodes green then back to normal
    d3.selectAll(".node").transition().duration(600).style("opacity", 1);
    d3.selectAll(".node circle")
      .transition().duration(600)
      .attr("fill", d => direct.has(d.data.name) ? "#00c870" : getNodeFill(d))
      .attr("stroke", d => direct.has(d.data.name) ? "#00c870" : typeColors[d.data.type])
      .attr("filter", null)
      .transition().delay(800).duration(800)
      .attr("fill",   d => getNodeFill(d))
      .attr("stroke", d => typeColors[d.data.type] || "#1a5c80")
      .attr("stroke-width", 1.5)
      .attr("filter", d => d.data.type === "oem" ? "url(#glow-strong)" : d.data.risk === "high" ? "url(#glow)" : null);
    d3.selectAll(".link").transition().duration(600)
      .style("opacity", 1).attr("stroke", "rgba(1,147,206,0.22)").attr("stroke-width", 1.2);

    // Resolved badge
    const badge = document.createElement("div");
    badge.className = "caddi-resolved";
    badge.innerHTML = "✓ &nbsp;Disruption Resolved by CADDi";
    log.appendChild(badge);

    // Green-tint the disruption card
    document.querySelectorAll(".dis-card").forEach(c => {
      if (c.dataset.dis === key) {
        c.style.borderColor = "#00a060";
        c.style.boxShadow   = "0 0 16px rgba(0,160,80,0.25), 0 4px 14px rgba(0,42,92,0.08)";
      }
    });

    btn.innerHTML = '<span class="caddi-logo">✓</span> Resolved';

    // Tutorial: after resolution, surface the demo button then show step 4
    if (tutorialStep === TUT.WATCH_CADDI) {
      setTimeout(() => {
        document.getElementById("demo-cta").classList.add("show");
        setTimeout(() => showTutStep(TUT.DEMO), 700);
      }, 600);
    }
  }, steps.length * STEP_MS);
}

// ── CADDi sequence runner (Assembly) ─────────────────────────────────────────
function runCaddiAsm(key) {
  const dis   = (ASSEMBLY_DATA[currentPart] || ASSEMBLY_DATA.powertrain).disruptions[key];
  const steps = CADDI_STEPS[key];
  if (!dis || !steps) return;

  const btn = document.getElementById("asm-caddi-btn");
  const log = document.getElementById("asm-caddi-log");
  btn.disabled = true;
  btn.innerHTML = '<span class="caddi-logo">⬡</span> CADDi Working…';
  log.innerHTML = "";

  const directSet  = new Set(dis.direct  || []);
  const cascadeArr = dis.cascade || [];
  const allAffected = new Set([...directSet, ...cascadeArr]);
  const STEP_MS    = 2400;

  // Immediately restore any stations that aren't part of this disruption
  d3.selectAll(".asm-station")
    .filter(d => !allAffected.has(d.st.id))
    .transition("caddi-opacity").duration(500)
    .style("opacity", 1);

  steps.forEach((step, i) => {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "caddi-step";
      el.innerHTML = `<span class="caddi-step-icon">${step.icon}</span><span class="caddi-step-text">${step.text}</span>`;
      log.appendChild(el);
      log.scrollTop = log.scrollHeight;

      // Restore cascade stations progressively (from downstream end)
      const frac = (i + 1) / steps.length;
      const restoreCount = Math.round(cascadeArr.length * frac);
      const restoreSet   = new Set(cascadeArr.slice(cascadeArr.length - restoreCount));

      d3.selectAll(".asm-station")
        .filter(d => restoreSet.has(d.st.id))
        .transition("caddi-opacity").duration(600)
        .style("opacity", 1);
      d3.selectAll(".asm-station")
        .filter(d => restoreSet.has(d.st.id))
        .select(".asm-circle")
        .transition("caddi-green").duration(500)
        .attr("fill", "#00c870")
        .transition("caddi-color").delay(700).duration(700)
        .attr("fill", d => d.stage.color);
    }, i * STEP_MS);
  });

  // Final: flash direct stations green → restore to stage color
  // Uses named transitions ("caddi-green", "caddi-color") that are distinct from
  // any broad restore — no unnamed transition ever touches these elements again.
  setTimeout(() => {
    // Restore opacity for all stations (cascade were already restored; direct now too)
    d3.selectAll(".asm-station")
      .transition("caddi-opacity").duration(600)
      .style("opacity", 1);

    // Green flash on direct stations only, chained to color restore
    d3.selectAll(".asm-station")
      .filter(d => directSet.has(d.st.id))
      .select(".asm-circle")
      .transition("caddi-green").duration(600)
      .attr("fill", "#00c870")
      .transition("caddi-color").delay(900).duration(800)
      .attr("fill", d => d.stage.color);

    // Badge + card + button appear after the green flash completes (600 + 900 + small buffer)
    setTimeout(() => {
      const badge = document.createElement("div");
      badge.className = "caddi-resolved";
      badge.innerHTML = "✓ &nbsp;Disruption Resolved by CADDi";
      log.appendChild(badge);
      log.scrollTop = log.scrollHeight;

      // Green-tint the disruption card
      document.querySelectorAll("#asm-disruption-bar .dis-card").forEach(c => {
        if (c.dataset.adis === key) {
          c.style.borderColor = "#00a060";
          c.style.boxShadow   = "0 0 16px rgba(0,160,80,0.25), 0 4px 14px rgba(0,42,92,0.08)";
        }
      });

      btn.innerHTML = '<span class="caddi-logo">✓</span> Resolved';

      // Tutorial: after assembly CADDi resolution, surface demo button then show final step
      if (1===1) {//(tutorialStep === TUT.ASM_WATCH_CADDI) {
        setTimeout(() => {
          document.getElementById("demo-cta").classList.add("show");
          setTimeout(() => showTutStep(TUT.ASM_DEMO), 700);
          var cb2 = document.getElementById('demo-btn');
  		  var mb2 = document.getElementById('calc-demo-mirror');
  		  cb2.addEventListener('click', function (e) {
   			e.preventDefault();
    		mb2.click();
  		  });
        }, 600);
      }
    }, 1650); // 600ms green flash + 900ms delay + 150ms buffer
  }, steps.length * STEP_MS);
}

// ── Tutorial system ───────────────────────────────────────────────────────────
const TUT = {
  OFF:0,
  CHAIN:1, CRISIS:2, WATCH_CRISIS:3, CADDI:4, WATCH_CADDI:5, DEMO:6, SC_DONE:7,
  ASM_LINE:8, ASM_CRISIS:9, ASM_WATCH_CRISIS:10, ASM_CADDI:11, ASM_WATCH_CADDI:12, ASM_DEMO:13,
  DONE:99
};
let tutorialStep = TUT.OFF;

const TUT_DEFS = {
  [1 /*CHAIN*/]: {
    dot:0, title:"Your Supply Chain Map",
    body:"This is a live representation of the supply chain for the selected part — the key components that go into it and their typical origin points around the world.",
    next:"Got it →", arrow:null, spotSel:null, pos:"center"
  },
  [2 /*CRISIS*/]: {
    dot:1, title:"Simulate a Crisis",
    body:"Let's see what happens when something goes wrong. Pick one of the disruption scenarios below to simulate its ripple effect across the supply chain.",
    next:"Got it — I'll pick one", arrow:"arr-down", spotSel:"#disruption-bar", pos:"above"
  },
  [4 /*CADDI*/]: {
    dot:2, title:"Resolve with CADDi",
    body:"CADDi's Supply Chain Intelligence can help you recover fast — drawing digitization, alternative supplier discovery, and parts redesign on demand. Click the button below to see it work.",
    next:"Got it →", arrow:"arr-right", spotSel:"#dis-info .caddi-section", pos:"left"
  },
  [6 /*DEMO*/]: {
    dot:3, title:"See CADDi in Action",
    body:"Book a personalized demo to see CADDi in your own workflow — or explore how CADDi helps reduce assembly costs on the line.",
    next:"Got it", arrow:"arr-up", spotSel:"#demo-cta", pos:"above-demo"
  },

  // ── Assembly tour ──────────────────────────────────────────────────────────
  [8 /*ASM_LINE*/]: {
    dot:0, title:"Your Assembly Line",
    body:"This shows the live production flow for this part — each station, its OEE score, and how disruptions cascade through the line in real time.",
    next:"Got it →", arrow:null, spotSel:null, pos:"center"
  },
  [9 /*ASM_CRISIS*/]: {
    dot:1, title:"Simulate a Disruption",
    body:"Pick a disruption below to see how a real production problem ripples through the line — hitting throughput, OEE, and total units shipped.",
    next:"Got it — I'll pick one", arrow:"arr-down", spotSel:"#asm-disruption-bar", pos:"above"
  },
  [11 /*ASM_CADDI*/]: {
    dot:2, title:"Resolve with CADDi",
    body:"CADDi's manufacturing intelligence gets your line back up fast — drawing analysis, process redesign, and qualified alternative suppliers sourced on demand.",
    next:"Got it →", arrow:"arr-right", spotSel:"#asm-dis-info .caddi-section", pos:"left"
  },
  [13 /*ASM_DEMO*/]: {
    dot:3, title:"See CADDi in Action",
    body:"Book a personalized demo to see how CADDi can cut costs and de-risk production across your own assembly operations.",
    next:"Got it", arrow:"arr-up", spotSel:"#demo-cta", pos:"above-demo"
  }
};

function startTutorial() {
  // Only run if there are relevant disruption cards visible
  const visible = [...document.querySelectorAll("#disruption-bar .dis-card")].filter(c => c.style.display !== "none").length;
  if (visible === 0) return;
  showTutStep(TUT.CHAIN);
}

function startAsmTutorial() {
  if (!firstAsmVisit) return;
  firstAsmVisit = false;
  // Don't fire if user explicitly skipped all tutorials
  if (tutorialStep === TUT.DONE) return;
  // Don't interrupt an in-progress SC tutorial
  if (tutorialStep >= TUT.CHAIN && tutorialStep <= TUT.WATCH_CADDI) return;
  showTutStep(TUT.ASM_LINE);
}

function showTutStep(step) {
  tutorialStep = step;
  const def = TUT_DEFS[step];
  if (!def) return;

  document.getElementById("tut-title").textContent = def.title;
  document.getElementById("tut-body").textContent  = def.body;
  document.getElementById("tut-next").textContent  = def.next;
  document.querySelectorAll(".tut-dot").forEach((d, i) => d.classList.toggle("active", i === def.dot));

  const card = document.getElementById("tut-card");
  card.className = def.arrow || "";

  // Position spotlight
  const sp  = document.getElementById("tut-spotlight");
  const vw  = window.innerWidth, vh = window.innerHeight, pad = 14;

  if (!def.spotSel) {
    // Full-viewport soft window (step 1 — the tree)
    const m = 72;
    Object.assign(sp.style, { left:`${m}px`, top:`${m+56}px`, width:`${vw-m*2}px`, height:`${vh-m*2-56-112}px`, borderRadius:"16px" });
    card.style.left = (vw/2 - 150) + "px";
    card.style.top  = (vh/2 - 105) + "px";

  } else if (def.pos === "above") {
    const el = document.querySelector(def.spotSel);
    if (el) {
      const r = el.getBoundingClientRect();
      Object.assign(sp.style, { left:`${r.left-pad}px`, top:`${r.top-pad}px`, width:`${r.width+pad*2}px`, height:`${r.height+pad*2}px`, borderRadius:"12px" });
      const cl = Math.max(8, Math.min(r.left + r.width/2 - 150, vw - 308));
      card.style.left = cl + "px";
      card.style.top  = Math.max(8, r.top - 195 - pad) + "px";
    }

  } else if (def.pos === "left") {
    const el = document.querySelector(def.spotSel);
    if (el) {
      const r = el.getBoundingClientRect();
      Object.assign(sp.style, { left:`${r.left-pad}px`, top:`${r.top-pad}px`, width:`${r.width+pad*2}px`, height:`${r.height+pad*2}px`, borderRadius:"12px" });
      card.style.left = Math.max(8, r.left - 324) + "px";
      card.style.top  = Math.max(8, r.top + r.height/2 - 95) + "px";
    }

  } else if (def.pos === "above-demo") {
    const el = document.querySelector(def.spotSel);
    if (el) {
      const r = el.getBoundingClientRect();
      Object.assign(sp.style, { left:`${r.left-pad}px`, top:`${r.top-pad}px`, width:`${r.width+pad*2}px`, height:`${r.height+pad*2}px`, borderRadius:"30px" });
      const cl = Math.max(8, Math.min(r.left + r.width/2 - 150, vw - 308));
      card.style.left = cl + "px";
      card.style.top  = Math.max(8, r.top - 215 - pad) + "px";
    }
    // Pulse the Assembly tab as a secondary cue — only on the SC tour's final step
    if (step === TUT.DEMO) {
      document.querySelector(".phase-tab[data-phase='assembly']")?.classList.add("tut-ring");
      var cb3 = document.getElementById('demo-btn');
  	  var mb3 = document.getElementById('calc-demo-mirror');
  	  cb3.addEventListener('click', function (e) {
   		e.preventDefault();
    	mb3.click();
  	  });
    }
  }

  // Show overlay and re-trigger pop animation
  document.getElementById("tut-overlay").classList.add("active");
  card.style.animation = "none";
  card.offsetHeight; // force reflow
  card.style.animation = "";
}

function hideTutOverlay() {
  document.getElementById("tut-overlay").classList.remove("active");
  document.querySelector(".phase-tab[data-phase='assembly']")?.classList.remove("tut-ring");
}

document.getElementById("tut-next").addEventListener("click", () => {
  // ── Supply Chain tour ──────────────────────────────────────────────────────
  if (tutorialStep === TUT.CHAIN) {
    showTutStep(TUT.CRISIS);
  } else if (tutorialStep === TUT.CRISIS) {
    tutorialStep = TUT.WATCH_CRISIS;
    hideTutOverlay();
  } else if (tutorialStep === TUT.CADDI) {
    tutorialStep = TUT.WATCH_CADDI;
    hideTutOverlay();
  } else if (tutorialStep === TUT.DEMO) {
    tutorialStep = TUT.SC_DONE;   // SC tour done; assembly tour will fire on first Tab 2 visit
    hideTutOverlay();
  // ── Assembly tour ──────────────────────────────────────────────────────────
  } else if (tutorialStep === TUT.ASM_LINE) {
    showTutStep(TUT.ASM_CRISIS);
  } else if (tutorialStep === TUT.ASM_CRISIS) {
    tutorialStep = TUT.ASM_WATCH_CRISIS;
    hideTutOverlay();
  } else if (tutorialStep === TUT.ASM_CADDI) {
    tutorialStep = TUT.ASM_WATCH_CADDI;
    hideTutOverlay();
  } else if (tutorialStep === TUT.ASM_DEMO) {
    tutorialStep = TUT.DONE;
    hideTutOverlay();
  }
});

document.getElementById("tut-skip").addEventListener("click", () => {
  tutorialStep = TUT.DONE;
  hideTutOverlay();
});

// ── Wire up CADDi buttons ─────────────────────────────────────────────────────
document.getElementById("sc-caddi-btn").addEventListener("click", () => {
  if (activeDisruption) runCaddiSC(activeDisruption);
});
document.getElementById("asm-caddi-btn").addEventListener("click", () => {
  if (activeAsmDisruption) runCaddiAsm(activeAsmDisruption);
});
// ── Cost Calculator ────────────────────────────────────────────────────────────

const CALC_SIZES = [
  { key:"tier3",  name:"Tier-3 Supplier",  sub:"< $100M revenue" },
  { key:"tier2",  name:"Tier-2 Supplier",  sub:"$100M – $500M" },
  { key:"tier1",  name:"Tier-1 Supplier",  sub:"$500M – $5B" },
  { key:"oem",    name:"OEM",              sub:"$5B – $50B" },
  { key:"global", name:"Global OEM",       sub:"$50B+" }
];

// Base disruption cost ($M) for a Tier-1 supplier
const COST_BASE = {
  energy:24, taiwan:65, pgm:32, china_ree:42, russia:28, logistics:19,
  robot:6,        labour:5,          faulty:11,         sole_source:22,    inbound:8,         quality:14,
  press_fault:4,  weld_defect:7,     steel_shortage:10, ecoat_fault:3,     subframe_recall:16, labour_shortage:5,
  chip_short:14,  reflow_fault:6,    firmware_hold:10,  esd_event:4,       cal_drift:3,        harness_crimp:5,
  frame_weld:3,   foam_defect:2,     fabric_delay:4,    airbag_hold:8,     motor_cal:2,        sewing_down:2,
  furnace_spike:5,encap_delam:8,     adhesive_short:6,  distortion_rej:3,  sensor_align:7,     mould_damage:4,
  brazing_fault:3,ref_leak:2,        compressor_defect:6,aluminium_short:7,regulation_hold:11, blower_cal:2
};

// Company size multipliers relative to Tier-1 base
const COST_MULT = { tier3:0.06, tier2:0.22, tier1:1.0, oem:4.8, global:16 };

// Cost split across 4 categories: [production%, sourcing%, quality%, penalties%]
const COST_SPLIT = {
  energy:[55,15,20,10],    taiwan:[60,25,10,5],    pgm:[45,30,15,10],
  china_ree:[50,30,12,8],  russia:[40,35,15,10],   logistics:[45,35,12,8],
  robot:[65,20,10,5],      labour:[70,10,15,5],    faulty:[40,15,35,10],
  sole_source:[55,30,10,5],inbound:[60,25,10,5],   quality:[30,10,45,15],
  press_fault:[65,20,10,5],weld_defect:[35,15,40,10],steel_shortage:[50,30,12,8],
  ecoat_fault:[55,15,25,5],subframe_recall:[25,15,40,20],labour_shortage:[70,10,15,5],
  chip_short:[55,30,10,5], reflow_fault:[45,15,35,5],firmware_hold:[30,10,45,15],
  esd_event:[50,15,30,5],  cal_drift:[40,10,45,5], harness_crimp:[35,15,40,10],
  frame_weld:[40,10,40,10],foam_defect:[50,20,25,5],fabric_delay:[55,30,10,5],
  airbag_hold:[30,10,45,15],motor_cal:[40,10,45,5],sewing_down:[65,15,15,5],
  furnace_spike:[55,20,20,5],encap_delam:[40,15,35,10],adhesive_short:[50,30,15,5],
  distortion_rej:[55,10,30,5],sensor_align:[45,10,35,10],mould_damage:[50,25,20,5],
  brazing_fault:[50,20,25,5],ref_leak:[40,20,30,10],compressor_defect:[50,20,25,5],
  aluminium_short:[50,30,15,5],regulation_hold:[35,20,25,20],blower_cal:[55,15,25,5]
};

// % of cost impact CADDi can typically recover
const CADDI_PCT = {
  energy:55,   taiwan:78,   pgm:58,    china_ree:62, russia:56,   logistics:65,
  robot:72,    labour:60,   faulty:68, sole_source:82,inbound:70,  quality:71,
  press_fault:69,weld_defect:65,steel_shortage:74,ecoat_fault:63,subframe_recall:67,labour_shortage:58,
  chip_short:76,reflow_fault:64,firmware_hold:70,esd_event:62,cal_drift:66,harness_crimp:65,
  frame_weld:64,foam_defect:71,fabric_delay:72,airbag_hold:65,motor_cal:66,sewing_down:61,
  furnace_spike:67,encap_delam:70,adhesive_short:73,distortion_rej:64,sensor_align:69,mould_damage:75,
  brazing_fault:66,ref_leak:68,compressor_defect:67,aluminium_short:72,regulation_hold:60,blower_cal:64
};

let calcState = { part: null, size: null, tab: null, dis: null };

function fmtM(v) {
  if (v >= 1000) return `$${(v / 1000).toFixed(1)}B`;
  if (v >= 1)    return `$${Math.round(v)}M`;
  return `$${Math.round(v * 1000)}K`;
}

function calcCost(disKey, sizeKey) {
  const mid = (COST_BASE[disKey] || 10) * (COST_MULT[sizeKey] || 1);
  return { low: mid * 0.72, high: mid * 1.38 };
}

function showCalcStep(from, to) {
  document.querySelectorAll(".calc-step").forEach(s => {
    s.classList.remove("active");
    if (s.id === `calc-s${from}`) s.style.display = "none";
  });
  const next = document.getElementById(`calc-s${to}`);
  if (next) { next.style.display = ""; requestAnimationFrame(() => next.classList.add("active")); }
  // Update progress dots
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById(`cprog-${i}`);
    if (!dot) continue;
    dot.classList.remove("active", "done");
    if (i < to)      { dot.classList.add("done"); dot.textContent = "✓"; }
    else if (i === to){ dot.classList.add("active"); dot.textContent = i; }
    else              { dot.textContent = i; }
  }
}

function initCalc() {
  // Populate part cards
  document.getElementById("calc-parts").innerHTML = INTRO_PARTS.map(p => `
    <div class="calc-part" data-part="${p.key}">
      <div class="calc-part-icon">${p.icon}</div>
      <div class="calc-part-name">${p.name}</div>
    </div>`).join("");
  document.querySelectorAll(".calc-part").forEach(c =>
    c.addEventListener("click", () => {
      document.querySelectorAll(".calc-part").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
      calcState.part = c.dataset.part;
      document.getElementById("calc-next-1").disabled = !(calcState.part && calcState.size);
    }));

  // Populate size buttons
  document.getElementById("calc-sizes").innerHTML = CALC_SIZES.map(s => `
    <div class="calc-size" data-size="${s.key}">
      <div class="calc-size-name">${s.name}</div>
      <div class="calc-size-sub">${s.sub}</div>
    </div>`).join("");
  document.querySelectorAll(".calc-size").forEach(c =>
    c.addEventListener("click", () => {
      document.querySelectorAll(".calc-size").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
      calcState.size = c.dataset.size;
      document.getElementById("calc-next-1").disabled = !(calcState.part && calcState.size);
    }));

  // Step 1 continue
  document.getElementById("calc-next-1").addEventListener("click", () => {
    if (!calcState.part || !calcState.size) return;
    buildCalcS2(); showCalcStep(1, 2);
  });

  // Back buttons
  document.getElementById("calc-back-2").addEventListener("click", () => showCalcStep(2, 1));
  document.getElementById("calc-back-3").addEventListener("click", () => showCalcStep(3, 2));
  document.getElementById("calc-back-4").addEventListener("click", () => { buildCalcS3(); showCalcStep(4, 3); });
}

function buildCalcS2() {
  document.getElementById("calc-tabs").innerHTML = `
    <div class="calc-tab-card" data-tab="sc">
      <div class="calc-tab-icon">🌐</div>
      <div class="calc-tab-name">Supply Chain</div>
      <div class="calc-tab-desc">Geopolitical shocks, sole-source failures, logistics disruptions, and raw material shortages that threaten inbound supply.</div>
      <div class="calc-tab-cta">Assess supplier risk →</div>
    </div>
    <div class="calc-tab-card" data-tab="assembly">
      <div class="calc-tab-icon">🏭</div>
      <div class="calc-tab-name">Assembly Line</div>
      <div class="calc-tab-desc">Production stoppages, quality holds, machine failures, and workforce disruptions that hit output and OEE directly.</div>
      <div class="calc-tab-cta">Assess production risk →</div>
    </div>`;
  document.querySelectorAll(".calc-tab-card").forEach(c =>
    c.addEventListener("click", () => {
      calcState.tab = c.dataset.tab;
      buildCalcS3(); showCalcStep(2, 3);
    }));
}

function buildCalcS3() {
  const part    = INTRO_PARTS.find(p => p.key === calcState.part);
  const sizeLbl = CALC_SIZES.find(s => s.key === calcState.size)?.name || "";
  const tabLbl  = calcState.tab === "sc" ? "Supply Chain" : "Assembly Line";
  document.getElementById("calc-crumb3").textContent = `${part?.name || ""} · ${sizeLbl} · ${tabLbl}`;

  const entries = calcState.tab === "sc"
    ? (() => {
        const nodeNames = getPartNodeNames(calcState.part);
        return Object.entries(DISRUPTIONS).filter(([, d]) =>
          [...d.direct, ...d.cascade].some(n => nodeNames.has(n)));
      })()
    : Object.entries((ASSEMBLY_DATA[calcState.part] || ASSEMBLY_DATA.powertrain).disruptions);

  document.getElementById("calc-disruptors").innerHTML = entries.map(([key, d]) => `
    <div class="calc-dis-card" data-dis="${key}">
      <div class="calc-dis-icon">${d.icon}</div>
      <div class="calc-dis-label">${d.label}</div>
      <div class="calc-dis-tag">${d.tag}</div>
    </div>`).join("");


  
  document.querySelectorAll(".calc-dis-card").forEach(c =>
    c.addEventListener("click", () => {
      calcState.dis = c.dataset.dis;
      buildCalcS4(); showCalcStep(3, 4);
      var ctaButton = document.getElementById('calc-demo-cta');
  	  var mirrorButton = document.getElementById('calc-demo-mirror');
  	  ctaButton.addEventListener('click', function (e) {
    	e.preventDefault();
    	mirrorButton.click();
  	  });
    }));
}

function buildCalcS4() {
  const { low, high } = calcCost(calcState.dis, calcState.size);
  const split   = COST_SPLIT[calcState.dis] || [50, 20, 20, 10];
  const recov   = CADDI_PCT[calcState.dis] || 65;
  const part    = INTRO_PARTS.find(p => p.key === calcState.part);
  const size    = CALC_SIZES.find(s => s.key === calcState.size);
  const disObj  = calcState.tab === "sc"
    ? DISRUPTIONS[calcState.dis]
    : (ASSEMBLY_DATA[calcState.part] || ASSEMBLY_DATA.powertrain).disruptions[calcState.dis];
  const disLabel = disObj?.label || calcState.dis;

  const labels   = ["Lost production revenue", "Emergency sourcing costs", "Quality & rework", "Customer penalty risk"];
  const maxPct   = Math.max(...split);

  const rows = split.map((pct, i) => `
    <div class="calc-bd-row">
      <div class="calc-bd-label">${labels[i]}</div>
      <div class="calc-bd-track"><div class="calc-bd-bar" style="width:${Math.round(pct/maxPct*100)}%"></div></div>
      <div class="calc-bd-val">${fmtM(low * pct/100)} – ${fmtM(high * pct/100)}</div>
    </div>`).join("");

  document.getElementById("calc-result-inner").innerHTML = `
    <div class="calc-result-range">${fmtM(low)} – ${fmtM(high)}</div>
    <div class="calc-result-ctx">${part?.name} · ${size?.name} · ${disLabel}</div>
    <div class="calc-breakdown">
      <div class="calc-bd-title">Cost breakdown</div>
      ${rows}
    </div>
    <div class="calc-caddi-note">
      🛡️ <strong>CADDi can typically recover ${recov}% of this impact</strong> — through rapid supplier
      qualification, drawing digitization, and alternative parts sourcing activated within hours.
    </div>
    <div class="calc-actions">
      <button class="calc-primary" id="calc-see-why">See the full analysis →</button>
      <button class="calc-secondary" id="calc-demo-cta">Book a demo</button>
    </div>`;

  document.getElementById("calc-see-why").addEventListener("click", launchFromCalc);
  //document.getElementById("calc-demo-cta").addEventListener("click", launchFromCalc);
}

function launchFromCalc() {
  // Animate out the calculator
  const ov = document.getElementById("calc-overlay");
  ov.classList.add("exiting");
  setTimeout(() => ov.classList.add("gone"), 480);

  // Suppress tutorials — user has already oriented themselves
  tutorialStep  = TUT.DONE;
  firstTreeBuild = false;
  firstAsmVisit  = false;

  // Sync the part selector
  currentPart = calcState.part;
  document.querySelectorAll(".part-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.part === calcState.part));

  // Dismiss the intro view
  const intro = document.getElementById("intro-view");
  if (intro) { intro.classList.add("exiting"); setTimeout(() => { intro.style.display = "none"; }, 500); }

  if (calcState.tab === "sc") {
    // Tree auto-applies activeDisruption after build
    activeDisruption = calcState.dis;
    buildTree(calcState.part);
    // Highlight the matching disruption card in the bar
    setTimeout(() => {
      document.querySelectorAll("#disruption-bar .dis-card").forEach(c => {
        c.classList.toggle("active", c.dataset.dis === calcState.dis);
        if (c.dataset.dis === calcState.dis) {
          const sc = DISRUPTIONS[calcState.dis];
          c.style.borderColor = sc.color;
          c.style.boxShadow   = `0 0 22px ${sc.color}55, 0 4px 16px rgba(0,0,0,0.5)`;
          c.style.transform   = "translateY(-4px)";
        }
      });
    }, 1800);
  } else {
    // Switch to Assembly tab, then apply disruption once built
    setTimeout(() => {
      switchPhase("assembly");
      setTimeout(() => {
        activeAsmDisruption = calcState.dis;
        applyAssemblyDisruption(calcState.dis);
        document.querySelectorAll("#asm-disruption-bar .dis-card").forEach(c => {
          const key = c.dataset.adis;
          c.classList.toggle("active", key === calcState.dis);
          if (key === calcState.dis) {
            const sc = (ASSEMBLY_DATA[calcState.part] || ASSEMBLY_DATA.powertrain).disruptions[key];
            if (sc) {
              c.style.borderColor = sc.color;
              c.style.boxShadow   = `0 0 20px ${sc.color}44, 0 4px 14px rgba(0,0,0,0.1)`;
            }
          }
        });
      }, 900);
    }, 200);
  }
}

// Kick off the calculator on page load
initCalc();