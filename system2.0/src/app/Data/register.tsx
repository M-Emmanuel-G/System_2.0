export interface DvrsProps{
    id: string
    client :string
    model :string
    cams_installed :string 
    user :string 
    password :string 
    ip :string 
    cloud :string 
    service_port :string 
    http_port :string 
    ddns :string 
    hd :string 
    recording_days :string
    nickClient: string
}

export const codRegData = [
    {
        cod:"001",
        name:"Márcio"
    }
]

export const DVRs = [
    {
        id:"sjc92-cne2icm2-ndjs-2-2m2",
        client:"Posto V&G 02",
        model:"MHDX 3008 c",
        user:"admin",
        password:"ctts0745",
        cams_installed:"9",
        ip:"192.168.35.54",
        service_port:"37777",
        http_port:"80",
        recording_days:"16 dias",
        hd:"2TB",
        cloud:"XO6M1700094H4",
        ddns:"nao se aplica",
        nickClient:"Posto V&G",
    },
    {
        id:"DJHBEHWIUH89WEKDNSADAS2-2m2",
        client:"Posto V&G 01",
        model:"MHDX 3116",
        user:"admin",
        password:"ctts0745",
        cams_installed:"16",
        ip:"192.168.35.41",
        service_port:"37777",
        http_port:"80",
        recording_days:"12 dias",
        hd:"2TB",
        cloud:"EKHH4601977CO",
        ddns:"nao se aplica",
        nickClient:"Posto V&G",
    },
    {
        id:"c0n8nf30n2d---KDNSADAS2-2m2",
        client:"Posto Ipiranga Pista",
        model:"MHDX 3108",
        user:"admin",
        password:"ctts0745",
        cams_installed:"7",
        ip:"192.168.0.131",
        service_port:"37777",
        http_port:"8087",
        recording_days:"19 dias",
        hd:"2TB",
        cloud:"WJCH07004667P",
        ddns:"nao se aplica",
        nickClient:"Posto Ipiranga",
    },
    {
        id:".sjc92-cne2SALKDNSADAS2-2m2",
        client:"Posto Ipiranga Adm",
        model:"MHDX 1016",
        user:"admin",
        password:"ctts",
        cams_installed:"4",
        ip:"192.168.0.10",
        service_port:"37774",
        http_port:"8084",
        recording_days:"46 dias",
        hd:"2TB",
        cloud:"KS7FF08074327P",
        ddns:"nao se aplica",
        nickClient:"Posto Ipiranga",
    },
    {
        id:".sjc92-cne2SA-22SDKPK20K2",
        client:"Posto Total 01",
        model:"MHDX 1008",
        user:"admin",
        password:"ctts",
        cams_installed:"8",
        ip:"192.168.2.43",
        service_port:"37774",
        http_port:"8082",
        recording_days:"8 dias",
        hd:"1TB",
        cloud:"J2AF2900034HR",
        ddns:"nao se aplica",
        nickClient:"Posto Total",
    },
    {
        id:".sjc92-cne2SAJBSNNAON2-2m2",
        client:"Posto Total 02",
        model:"HDCVI 1016 2gen",
        user:"admin",
        password:"ctts",
        cams_installed:"9",
        ip:"192.168.2.53",
        service_port:"37777",
        http_port:"8083",
        recording_days:"21 dias",
        hd:"2TB",
        cloud:"ORYE3802325MO",
        ddns:"nao se aplica",
        nickClient:"Posto Total",
    },
]