import Axiosinstance from "../settings/axiosSettings"
import * as URL from '../settings/axiosUrls';

export const getBenefitCruds = async (benefitId) =>{
    return Axiosinstance.get(URL.BENEFIT,{
        params: benefitId || null
    })
}