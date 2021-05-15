import express from "express";
import {
  getBenefitList,
  addBenefit,
  updateBenefit,
  deleteBenefit,
} from "../controllers/benefit_controller";
import { IResponse } from "../interfaces/benefit";
const benefitRoutes = express.Router();

/**
 * @api {get} /benefit Request a list of all benefits
 * @apiName GetBenefitList
 * @apiGroup Benefits
 *
 *
 * @apiSuccess {boolean} success Response operation.
 * @apiSuccess {array} data  Array of benefits.
 */

/**
 * @api {post} /benefit Create a new benefit
 * @apiName AddBenefit
 * @apiGroup Benefits
 *
 * @apiParam {String} name Benefit name.
 * @apiParam {String} code Benefit code.
 * @apiParam {Number} limit Benefit limit of use.
 * @apiParam {String} description Benefit description.
 * @apiParam {Number} discountAmount Benefit discount amount.
 *
 * @apiSuccess {boolean} success Response operation.
 * @apiSuccess {array} data New Benefit data.
 */

/**
 * @api {put} /benefit Edit a benefit
 * @apiName EditBenefit
 * @apiGroup Benefits
 *
 * @apiParam {String} id Benefit id.
 * @apiParam {String} name Benefit name.
 * @apiParam {String} code Benefit code.
 * @apiParam {Number} limit Benefit limit of use.
 * @apiParam {String} description Benefit description.
 * @apiParam {Number} discountAmount Benefit discount amount.
 *
 * @apiSuccess {boolean} success Response operation.
 * @apiSuccess {array} data Updated Benefit data.
 */

/**
 * @api {delete} /benefit Delete a benefit by id
 * @apiName DeleteBenefit
 * @apiGroup Benefits
 *
 * @apiParam {String} id Benefit id
 * @apiSuccess {boolean} success Response operation.
 * @apiSuccess {array} data  Deleted benefit data.
 */

benefitRoutes
  .route("/")
  .get(async (req, res) => {
    try {
      const benefitList = await getBenefitList();
      res.status(200).json({ success: true, data: benefitList });
    } catch (error) {
      res.status(404).json({ success: false, data: error });
    }
  })
  .post(async (req, res) => {
    if (req.body) {
      try {
        await addBenefit(req.body).then((result: IResponse) => {
          res.status(200).json(result);
        });
      } catch (error) {
        res.status(200).json({ success: false, error: error });
      }
    } else {
      res
        .status(404)
        .json({ success: false, error: "No se recibió un formulario" });
    }
  })

  .put(async (req, res) => {
    if (req.body) {
      try {
        await updateBenefit(req.body).then((result: IResponse) => {
          res.status(200).json(result);
        });
      } catch (error) {
        res.status(200).json({ success: false, error: error });
      }
    } else {
      res
        .status(404)
        .json({ success: false, error: "No se recibió un formulario" });
    }
  })
  .delete(async (req, res) => {
    if (req.body) {
      try {
        await deleteBenefit(req.body).then((result: IResponse) => {
          res.status(200).json(result);
        });
      } catch (error) {
        res.status(200).json({ success: false, error: error });
      }
    } else {
      res
        .status(404)
        .json({ success: false, error: "No se recibió un formulario" });
    }
  });

export default benefitRoutes;
