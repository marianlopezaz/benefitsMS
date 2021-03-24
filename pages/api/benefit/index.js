import dbConnect from "../../../utils/middleware/mongodb";
import Benefit from "../../../utils/models/benefit_model";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
        try {
            const benefits = await Benefit.find({});
            res.status(200).json({success: true, data: benefits})

        } catch (error) {
            res.status(400).json({success: false, error: error})
        }
      break;

    default:
      break;
  }
};
