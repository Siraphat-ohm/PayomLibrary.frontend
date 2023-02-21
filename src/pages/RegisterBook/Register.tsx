import { Button, FileInput, Group, Input, MultiSelect, NumberInput, Select, Stack, Textarea } from "@mantine/core"
import { useState } from "react"

export const Register = () => {
    const [selVal, setVal] = useState();
    const [authors, setAuthors] = useState([
        { value: "", label: ""} 
    ])

    const opt  = [
    {
        "value": "A",
        "label": "A: General Works"
    },
    {
        "value": "B",
        "label": "B: Philosophy, Psychology, Religion"
    },
    {
        "value": "C",
        "label": "C: Auxiliary Sciences of History"
    },
    {
        "value": "D",
        "label": "D: History (General) and History of Europe"
    },
    {
        "value": "E",
        "label": "E: History: America"
    },
    {
        "value": "F",
        "label": "F: History: America"
    },
    {
        "value": "G",
        "label": "G: Geography, Anthropology, Recreation"
    },
    {
        "value": "H",
        "label": "H: Social Sciences"
    },
    {
        "value": "J",
        "label": "J: Political Science"
    },
    {
        "value": "K",
        "label": "K: Law"
    },
    {
        "value": "L",
        "label": "L: Education"
    },
    {
        "value": "M",
        "label": "M: Music"
    },
    {
        "value": "N",
        "label": "N: Fine Arts"
    },
    {
        "value": "P",
        "label": "P: Language and Literature"
    },
    {
        "value": "Q",
        "label": "Q: Science"
    },
    {
        "value": "R",
        "label": "R: Medicine"
    },
    {
        "value": "S",
        "label": "S: Agriculture"
    },
    {
        "value": "T",
        "label": "T: Technology"
    },
    {
        "value": "U",
        "label": "U: Military Science"
    },
    {
        "value": "V",
        "label": "V: Naval Science"
    },
    {
        "value": "Z",
        "label": "Z: Bibliography, Library Science, Information Resources (General)"
    }
]
    const subType = {
    "": [],
    "A": [
        {"value": "A0", "label": "A0: General Works, Collections"},
        {"value": "A1", "label": "A1: Periodicals, Serials"},
        {"value": "A3", "label": "A3: Encyclopedias, Dictionaries, Directories"},
        {"value": "A5", "label": "A5: Yearbooks, Almanacs, Annuals, Biennials"},
        {"value": "A7", "label": "A7: Gazetteers, Atlases, Maps"},
        {"value": "A8", "label": "A8: Bibliographies, Catalogs"},
        {"value": "A9", "label": "A9: Indexes"}
    ],
    "B": [
        {"value": "B0", "label": "B0: General Works, Collections"},
        {"value": "B1", "label": "B1: Philosophy"},
        {"value": "B2", "label": "B2: Logic"},
        {"value": "B3", "label": "B3: Religion, Theology"},
        {"value": "B4", "label": "B4: Hinduism, Buddhism, Jainism, Sikhism"},
        {"value": "B5", "label": "B5: Islam"},
        {"value": "B6", "label": "B6: Judaism"},
        {"value": "B7", "label": "B7: Christianity"},
        {"value": "B8", "label": "B8: Other Religions"},
        {"value": "B9", "label": "B9: Occult Sciences"}
    ],
    "C": [
        {"value": "C0", "label": "C0: General Works, Collections"},
        {"value": "C1", "label": "C1: Archaeology"},
        {"value": "C2", "label": "C2: Chronology, Calendar"},
        {"value": "C3", "label": "C3: Genealogy"},
        {"value": "C4", "label": "C4: Heraldry"},
        {"value": "C5", "label": "C5: Numismatics"},
        {"value": "C6", "label": "C6: Paleography"},
        {"value": "C7", "label": "C7: Diplomatics, Archives"},
        {"value": "C8", "label": "C8: Seals"},
        {"value": "C9", "label": "C9: Biography, Genealogy, Insignia"}
    ],
    "D": [
        {"value": "D0", "label": "D0: General Works, Collections"},
        {"value": "D1", "label": "D1: Ancient History"},
        {"value": "D2", "label": "D2: Medieval History"},
        {"value": "D3", "label": "D3: Modern History"},
        {"value": "D4", "label": "D4: Contemporary History"},
        {"value": "D5", "label": "D5: History of Europe"},
        {"value": "D6", "label": "D6: History of Asia, Africa, Oceania"},
        {"value": "D7", "label": "D7: History of North America"},
        {"value": "D8", "label": "D"}
    ],
    "E": [
        {"value": "E0", "label": "E0: General Works, Collections"},
        {"value": "E1", "label": "E1: American Literature"},
        {"value": "E2", "label": "E2: English Literature"},
        {"value": "E3", "label": "E3: German Literature"},
        {"value": "E4", "label": "E4: French Literature"},
        {"value": "E5", "label": "E5: Italian Literature"},
        {"value": "E6", "label": "E6: Spanish, Portuguese Literature"},
        {"value": "E7", "label": "E7: Slavic Literatures"},
        {"value": "E8", "label": "E8: Scandinavian Literatures"},
        {"value": "E9", "label": "E9: Other Literatures"}
    ],
    "F": [
        {"value": "F1", "label": "F1: General"},
        {"value": "F2", "label": "F2: Colonial, Revolutionary Period"},
        {"value": "F3", "label": "F3: 1783-1861"},
        {"value": "F4", "label": "F4: 1861-1878"},
        {"value": "F5", "label": "F5: 1878-1898"},
        {"value": "F6", "label": "F6: 1898-1913"},
        {"value": "F7", "label": "F7: 1913-1933"},
        {"value": "F8", "label": "F8: 1933-1945"},
        {"value": "F9", "label": "F9: 1945-"}
    ],
    "G": [
        {"value": "G1", "label": "G1: Geography (General)"},
        {"value": "G70", "label": "G70: Methods and Techniques of Geography"},
        {"value": "GA1", "label": "GA1: Mathematical Geography"},
        {"value": "GB3", "label": "GB3: Physical Geography"},
        {"value": "GB400", "label": "GB400: Geomorphology"},
        {"value": "GC1", "label": "GC1: Oceanography"},
        {"value": "GE1", "label": "GE1: Environmental Sciences"}
    ],
    "H": [
        {"value": "HA1", "label": "HA1: Statistics (General)"},
        {"value": "HB1", "label": "HB1: Economic Theory (General)"},
        {"value": "HB615", "label": "HB615: Entrepreneurship"},
        {"value": "HD28", "label": "HD28: Management. Industrial Management"},
        {"value": "HE1", "label": "HE1: Transportation and Communications"},
        {"value": "HF1", "label": "HF1: Commerce (General)"}
    ],
    "J": [
        {"value": "J1", "label": "J1: Political Science (General)"},
        {"value": "JA1", "label": "JA1: Political Science (General)"},
        {"value": "JC1", "label": "JC1: Political Theory"},
        {"value": "JF20", "label": "JF20: Policy Sciences"},
        {"value": "JK1", "label": "JK1: Political Institutions and Public Administration (General)"},
        {"value": "JN1", "label": "JN1: Political Institutions and Public Administration (Europe)"},
        {"value": "JS1", "label": "JS1: Local Government. Municipal Government"}
    ],
    "K": [
        {"value": "K1", "label": "K1: Law (General)"},
        {"value": "KZ2", "label": "KZ2: Law of Nations"}
    ],
    "L": [
        {"value": "L1", "label": "L1: Education (General)"},
        {"value": "LA1", "label": "LA1: History of Education"},
        {"value": "LB1", "label": "LB1: Theory and Practice of Education"},
        {"value": "LC1", "label": "LC1: Special Aspects of Education"}
    ],
    "M": [
    {"value": "M1", "label": "M1: Music (General)"},
    {"value": "ML1", "label": "ML1: Literature on Music"}
    ],
    "N": [
        {"value": "N1", "label": "N1: Visual Arts (General)"},
        {"value": "NA1", "label": "NA1: Architecture (General)"},
        {"value": "NB1", "label": "NB1: Sculpture"},
        {"value": "NC1", "label": "NC1: Drawing. Design. Illustration"},
        {"value": "ND1", "label": "ND1: Painting"},
        {"value": "NE1", "label": "NE1: Print Media"},
        {"value": "NK1", "label": "NK1: Decorative Arts"}
    ],
    "P": [
        {"value": "P1", "label": "P1: Philology. Linguistics (General)"},
        {"value": "PA1", "label": "PA1: Classical Languages and Literature"},
        {"value": "PB1", "label": "PB1: Modern Languages and Literature"},
        {"value": "PC1", "label": "PC1: Romance Languages"},
        {"value": "PE1", "label": "PE1: English Language"},
        {"value": "PG1", "label": "PG1: Slavic Languages and Literatures"},
        {"value": "PJ1", "label": "PJ1: Oriental Languages and Literatures"},
        {"value": "PL1", "label": "PL1: Languages and Literatures of Eastern Asia, Africa, Oceania"},
        {"value": "PN1", "label": "PN1: Literature (General)"},
        {"value": "PQ1", "label": "PQ1: French Literature"},
        {"value": "PR1", "label": "PR1: English Literature"},
        {"value": "PS1", "label": "PS1: American Literature"},
        {"value": "PT1", "label": "PT1: German Literature"}
    ],
    "Q": [
        {"value": "Q1", "label": "Q1: Science (General)"},
        {"value": "QA1", "label": "QA1: Mathematics"},
        {"value": "QB1", "label": "QB1: Astronomy"},
        {"value": "QC1", "label": "QC1: Physics"},
        {"value": "QD1", "label": "QD1: Chemistry"},
        {"value": "QE1", "label": "QE1: Geology"},
        {"value": "QH1", "label": "QH1: Natural History - Biology"},
        {"value": "QL1", "label": "QL1: Zoology"},
        {"value": "QP1", "label": "QP1: Physiology"},
        {"value": "QR1", "label": "QR1: Microbiology"}
    ],
    "R": [
        {"value": "R1", "label": "R1: Medicine (General)"},
        {"value": "RA1", "label": "RA1: Public Aspects of Medicine"},
        {"value": "RB1", "label": "RB1: Pathology"},
        {"value": "RC1", "label": "RC1: Internal Medicine"},
        {"value": "RD1", "label": "RD1: Surgery"},
        {"value": "RE1", "label": "RE1: Ophthalmology"},
        {"value": "RF1", "label": "RF1: Otorhinolaryngology"},
        {"value": "RG1", "label": "RG1: Gynecology and Obstetrics"},
        {"value": "RJ1", "label": "RJ1: Pediatrics"},
        {"value": "RK1", "label": "RK1: Dentistry"},
        {"value": "RL1", "label": "RL1: Dermatology"},
        {"value": "RM1", "label": "RM1: Therapeutics. Pharmacology"},
        {"value": "RS1", "label": "RS1: Pharmacy and materia medica"},
        {"value": "RT1", "label": "RT1: Nursing"},
        {"value": "RV1", "label": "RV1: Botanic, Thomsonian, and eclectic medicine"}
    ],
    "S": [
        {"value": "S1", "label": "S1: Agriculture (General)"},
        {"value": "SB1", "label": "SB1: Plant Culture"},
        {"value": "SD1", "label": "SD1: Forestry"},
        {"value": "SF1", "label": "SF1: Animal Culture"},
        {"value": "SH1", "label": "SH1: Aquaculture. Fisheries. Angling"},
        {"value": "SK1", "label": "SK1: Hunting sports"},
        {"value": "SL1", "label": "SL1: Sanitary and municipal engineering"},
        {"value": "SN1", "label": "SN1: Light and illumination. Photography"},
    ],
    "T": [
        {"value": "T1", "label": "T1: Technology (General)"},
        {"value": "TA1", "label": "TA1: Engineering (General). Civil engineering"},
        {"value": "TC1", "label": "TC1: Hydraulic engineering. Ocean engineering"},
        {"value": "TD1", "label": "TD1: Environmental technology. Sanitary engineering"},
        {"value": "TE1", "label": "TE1: Highway engineering. Roads and pavements"},
        {"value": "TF1", "label": "TF1: Railroad engineering and operation"},
        {"value": "TG1", "label": "TG1: Bridge engineering"},
        {"value": "TH1", "label": "TH1: Building construction"},
        {"value": "TJ1", "label": "TJ1: Mechanical engineering and machinery"},
        {"value": "TK1", "label": "TK1: Electrical engineering. Electronics. Nuclear engineering"},
        {"value": "TL1", "label": "TL1: Motor vehicles. Aeronautics. Astronautics"},
        {"value": "TN1", "label": "TN1: Mining engineering. Metallurgy"},
        {"value": "TP1", "label": "TP1: Chemical technology"},
        {"value": "TR1", "label": "TR1: Photography"},
        {"value": "TS1", "label": "TS1: Manufactures"}
    ],
    "U": [
        {"value": "U1", "label": "U1: Military Science (General)"},
        {"value": "UA1", "label": "UA1: Armies: Organization, distribution, military situation"},
        {"value": "UB1", "label": "UB1: Military administration"},
        {"value": "UC1", "label": "UC1: Maintenance and transportation"},
        {"value": "UD1", "label": "UD1: Infantry"},
        {"value": "UE1", "label": "UE1: Cavalry. Armor"},
        {"value": "UF1", "label": "UF1: Artillery"},
        {"value": "UG1", "label": "UG1: Military engineering. Air forces"},
        {"value": "UH1", "label": "UH1: Other military services"}
    ],
    "V": [
        {"value": "V1", "label": "V1: Naval Science (General)"},
        {"value": "VA1", "label": "VA1: Navies: Organization, distribution, naval situation"},
        {"value": "VB1", "label": "VB1: Naval administration"},
        {"value": "VC1", "label": "VC1: Naval maintenance"},
        {"value": "VD1", "label": "VD1: Naval seamen"},
        {"value": "VE1", "label": "VE1: Marines"},
        {"value": "VG1", "label": "VG1: Minor services of navies"},
        {"value": "VK1", "label": "VK1: Navigation. Merchant marine"},
        {"value": "VM1", "label": "VM1: Naval architecture. Shipbuilding. Marine engineering"},
        {"value": "VM250", "label": "VM250: Submarines"},
        {"value": "VM275", "label": "VM275: Warships"},
        {"value": "VM300", "label": "VM300: Yachts. Yachting"},
    ],
    "Z": [
        {"value": "Z1", "label": "Z1: Bibliography. Library science. Information resources (General)"},
        {"value": "ZA1", "label": "ZA1: Information resources (General)"},
        {"value": "ZB1", "label": "ZB1: Books (General). Writing. Paleography. Book industries and trade. Libraries. Bibliography"},
        {"value": "ZC1", "label": "ZC1: Catalogs"},
        {"value": "ZD1", "label": "ZD1: Bookbinding and repair"},
        {"value": "ZE1", "label": "ZE1: Librarianship. Libraries. Information science"},
        {"value": "ZF1", "label": "ZF1: Copyright. Plagiarism"},
        {"value": "ZG1", "label": "ZG1: Booksellers and bookselling"},
        {"value": "ZH1", "label": "ZH1: Book industries and trade"},
        {"value": "ZK1", "label": "ZK1: Manuscripts (General). Paleography. Diplomatics. Facsimiles. Reproductions"},
        {"value": "ZL1", "label": "ZL1: Printed books. Printers and printing"},
        {"value": "ZM1", "label": "ZM1: Libraries"},
        {"value": "ZN1", "label": "ZN1: Numismatics"},
        {"value": "ZP1", "label": "ZP1: Philately"},
        {"value": "ZQ1", "label": "ZQ1: Book rarities"}
    ]
}

    return (
        <Group
            position="center"
        >
            <Stack>
                <h1>Register Book</h1>
                <Group>
                    <Input.Wrapper
                        id="wrap-title"
                        withAsterisk
                        label="title"
                        size="md"
                    >
                        <Input 
                            id="title" 
                            placeholder="book title" 
                            style={{ width:"400px"}} 
                            variant="filled"
                        />
                    </Input.Wrapper>
                    <Input.Wrapper
                        id="wrap-ISBN"
                        withAsterisk
                        label="ISBN"
                        size="md"
                    >
                        <Input 
                            id="ISBN" 
                            placeholder="book ISBN" 
                            style={{ width:"160px"}} 
                            variant="filled"
                        />
                    </Input.Wrapper>
                </Group>
                <Group>
                    <Select
                        label="category"
                        withAsterisk
                        placeholder="select category"
                        data={opt}
                        variant="filled"
                        value={selVal}
                        onChange={(setVal as any)}
                        clearable
                        searchable
                    />
                    <Select
                        label="sub-category"
                        placeholder="select sub-category"
                        withAsterisk
                        data={subType[selVal ? selVal : ""]}
                        variant="filled"
                        clearable
                        disabled={selVal ? false : true}
                        searchable
                    />
                    <Select
                        label="language"
                        withAsterisk
                        placeholder="select language"
                        data={[
                            { value: "th", label:"thai"},
                            { value: "eng", label:"english"}
                        ]}
                        variant="filled"
                        style={{"width": "100px"}}
                        clearable
                        searchable
                    />
                </Group>
                <Group>
                    <MultiSelect
                        label="authors"
                        data={authors}
                        placeholder="create author"
                        searchable
                        withAsterisk
                        creatable
                        variant="filled"
                        getCreateLabel={(query) => `+ Create ${query}`}
                        onCreate={(query) => {
                            const item = { value: query, label: query };
                            setAuthors((current) => [...current, item]);
                            return item;
                        }}
                        style={{maxWidth:"300px"}}
                    />
                </Group>
                <Group>
                    <NumberInput
                        label="publication year"
                        withAsterisk
                        style={{maxWidth:"140px"}}
                        variant="filled"
                    />
                    <NumberInput
                        label= "page"
                        withAsterisk
                        style={{maxWidth:"60px"}}
                        variant="filled"
                    />
                    <NumberInput
                        label= "copies"
                        withAsterisk
                        style={{maxWidth:"60px"}}
                        variant="filled"
                    />
                </Group>
                <Group>
                <Textarea
                    placeholder="description of book"
                    label="description"
                    variant="filled"
                    withAsterisk
                    style={{width:"550px"}}
                />
                </Group>
                <Group>
                    <FileInput 
                        label="Upload Cover" 
                        placeholder="Upload files" 
                        accept="image/png,image/jpeg"
                        withAsterisk
                        style={{width:"300px"}}
                        clearable
                    />
                    <Button
                        style={{"marginTop": "24px"}}
                    >
                        RegisterBook
                    </Button>
                </Group>
            </Stack>
        </Group>
    )
}