import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilterButtons = (props) => {
  let subcat_filterbtn = props.subcat_filterbtn;
  let Params = props.Params;
  return (
    <>
      {subcat_filterbtn &&
        subcat_filterbtn.length &&
        subcat_filterbtn.map((value, index) => {
          return (
            <Link
              to={
                "/" +
                Params.shop_name +
                "/" +
                Params.shop_id +
                "/" +
                value.procat_id +
                "/" +
                value.procat_name_en +
                "/" +
                value.procat_id
              }
              style={{ textDecoration: "none" }}
            >
              <Button
                aria-pressed="true"
                className="filter_btn mb-4"
                key={index}
                // onClick={() => subCategoryItems(value.procat_id)}
              >
                {value.procat_name_en}
              </Button>
            </Link>
          );
        })}
    </>
  );
};

export default FilterButtons;
