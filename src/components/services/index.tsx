import { 
    ContainerServices,
    Items,
    InfosService,
    Buttoninfos
} from "./styled";



export function Services(){
    const services = [
        {
            projeto: "Radio Agioa FM",
            lingagens: "PHP, js, HTML5, bootstrap, css3",
            img: "/images/radiocapa.png",
            site: "www.radioaguiafm.com.br" ,
            infos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
            textButton: "Veja o video."

        },
        {
            projeto: "Radio Agioa FM",
            lingagens: "PHP, js, HTML5, bootstrap, css3",
            img: "/images/radiocapa.png",
            site: "www.radioaguiafm.com.br" ,
            infos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
            textButton: "Veja o video."

        },
        {
            projeto: "Radio Agioa FM",
            lingagens: "PHP, js, HTML5, bootstrap, css3",
            img: "/images/radiocapa.png",
            site: "www.radioaguiafm.com.br" ,
            infos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
            textButton: "Veja o video."

        },
        {
            projeto: "Radio Agioa FM",
            lingagens: "PHP, js, HTML5, bootstrap, css3",
            img: "/images/radiocapa.png",
            site: "www.radioaguiafm.com.br" ,
            infos: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
            textButton: "Veja o video."

        }
    ]
    
    
    return(
        <div style={{textAlign:'center'}}>
        <h1>Pricipais Serviços</h1>
        <ContainerServices>
            {
                services.map((doc, index) => (
                    <Items style={{
                        background:`linear-gradient(#9191914c,rgba(0,0,0,.3)), url(${doc.img}) no-repeat`,
                        backgroundSize: 'Cover'
                         }}>
                       <h1> {`${doc.projeto}`} </h1>
                       <h2 >{`${doc.site} `}</h2>

                       <InfosService>
                            {`${doc.infos}`} 
                       </InfosService>
                       <div className="divButtontext">
                            <Buttoninfos >
                                {`${doc.textButton}`} 
                            </Buttoninfos>
                        </div>
                    </Items>
                ))
            }
        </ContainerServices>
        </div>
    )
}