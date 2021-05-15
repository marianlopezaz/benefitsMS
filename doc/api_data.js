define({ "api": [
  {
    "type": "post",
    "url": "/benefit",
    "title": "Create a new benefit",
    "name": "AddBenefit",
    "group": "Benefits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Benefit name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Benefit code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Benefit limit of use.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Benefit description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discountAmount",
            "description": "<p>Benefit discount amount.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>New Benefit data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/benefitRoutes.ts",
    "groupTitle": "Benefits"
  },
  {
    "type": "delete",
    "url": "/benefit",
    "title": "Delete a benefit by id",
    "name": "DeleteBenefit",
    "group": "Benefits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Benefit id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Deleted benefit data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/benefitRoutes.ts",
    "groupTitle": "Benefits"
  },
  {
    "type": "put",
    "url": "/benefit",
    "title": "Edit a benefit",
    "name": "EditBenefit",
    "group": "Benefits",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Benefit id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Benefit name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Benefit code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Benefit limit of use.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Benefit description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discountAmount",
            "description": "<p>Benefit discount amount.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Updated Benefit data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/benefitRoutes.ts",
    "groupTitle": "Benefits"
  },
  {
    "type": "get",
    "url": "/benefit",
    "title": "Request a list of all benefits",
    "name": "GetBenefitList",
    "group": "Benefits",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>Array of benefits.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/benefitRoutes.ts",
    "groupTitle": "Benefits"
  }
] });
