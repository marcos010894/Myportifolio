import {MyHeader} from '../components/header'
import {Front} from '../components/FrontCover'
import { Services } from '../components/services'

export function InitialPage(){
    return(
    <div>
        <MyHeader />
        <Front/>
        <Services/>
    </div>
    )
}