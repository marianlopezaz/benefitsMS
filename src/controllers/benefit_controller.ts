import { IBenefit, IResponse } from "../interfaces/benefit";
import { sendToQueueController } from "../messages_queue/send";
import Benefit from "../models/benefit_model";


const prepareBenefitToSend = (benefit: any, orderId: string) => {
  let benefitObj = {
    status: benefit.status,
    discountAmount: benefit.discountAmount,
    remainingTime: benefit.remainingTime,
    limit: benefit.limit,
    code: benefit.code,
    orderId: orderId,
  };
  return benefitObj;
};
interface IData {
  discountCode: string;
  orderId: string;
}

 export const getBenefitList = async () => {
  try {
    const benefits = await Benefit.find({});
    return benefits;
  } catch (error) {
    return error;
  }
};


export const getBenefitByCode = async (data: IData) => {
  const discountCode = data.discountCode;
  const orderId = data.orderId;
  try {
    const benefit = await Benefit.findOne({ code: discountCode });
    const benefitObj = prepareBenefitToSend(benefit, orderId);
    sendToQueueController(benefitObj);
  } catch (error) {
    return error;
  }
};

export const addBenefit = async (data: IBenefit) => {
  let benefitData = {
    name: data.name,
    description: data.description,
    status: data.status,
    discountAmount: data.discountAmount,
    remainingTime: data.remainingTime,
    limit: data.limit,
    code: data.code,
    cart_id: data.cart_id,
  };
  const newBenefit = new Benefit(benefitData);
  let res: IResponse = { success: false, data: {} };
  if (newBenefit) {
    const benefit = await newBenefit.save();
    res.success = true;
    res.data = benefit;
  } else {
    res.success = false;
    res.data = { error: "No se creó el beneficio" };
  }
  return res;
};

export const updateBenefit = async (data: IBenefit) => {
  let benefitData = {
    id: data.id,
    name: data.name,
    description: data.description,
    status: data.status,
    discountAmount: data.discountAmount,
    remainingTime: data.remainingTime,
    limit: data.limit,
    code: data.code,
    cart_id: data.cart_id,
  };
  const updatedBenefit = await Benefit.findByIdAndUpdate(
    benefitData.id,
    benefitData,
    { new: true }
  );
  let res: IResponse = { success: false, data: {} };
  if (updatedBenefit) {
    res.success = true;
    res.data = updatedBenefit;
  } else {
    res.success = false;
    res.data = { error: "No se actualizó el beneficio" };
  }
  return res;
};

export const deleteBenefit = async (data: IBenefit) => {
  const deletedBenefit = await Benefit.findByIdAndRemove(data.id);
  let res: IResponse = { success: false, data: {} };
  if (deletedBenefit) {
    res.success = true;
    res.data = deletedBenefit;
  } else {
    res.success = false;
    res.data = { error: "No se borró el beneficio" };
  }
  return res;
};
