import { getBenefitCruds } from "../benefit_cruds/benefit_cruds";

export const getBeneficeService = async (benefitId) =>{
    return getBenefitCruds(benefitId);
}