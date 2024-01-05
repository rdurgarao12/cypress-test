import "./styles.css";
import React, { useState } from "react";
import AccordianData from "./data.json";
import DraftBill from "./draft_bill.json";
import validCoupons from "./valid_coupons.json";

export default function BillDetail() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const [totalPay, setTotalPay] = useState(DraftBill.total_bill);
  const [couponValue, setCouponValue] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const removeCoupon = () => {
    setTotalPay(DraftBill.total_bill);
    setAppliedCoupon(false);
    setCouponValue("");
  };

  const applyCoupon = () => {
    const matchedCoupons = validCoupons.filter((e) => e.name == couponValue);

    if (matchedCoupons.length > 0) {
      let coupon = matchedCoupons[0];
      setTotalPay(DraftBill.total_bill - coupon.value);
      setAppliedCoupon(true);
    } else {
      alert("Invalid coupon");
    }
  };

  console.log(AccordianData);
  return (
    <div className="App">
      {/* {AccordianData.map((e, i) => (
        <div>
          <span onClick={(e) => setActiveIndex(i)}>
            {activeIndex == i ? "-" : "+"}
          </span>
          <br />
          {activeIndex == i && <span key={i}>{e.text}</span>}
          <hr />
        </div>
      ))} */}

      <h3>{DraftBill.is_draft ? "Draft" : ""} Bill Summary</h3>
      <hr />
      <div className={"display-box"}>Customer Id: {DraftBill.customer_id}</div>
      <div className={"display-box"}>Name: {DraftBill.name}</div>
      <div className={"display-box"}>Bill Number: {DraftBill.bill_id}</div>
      <div className={"display-box"}>
        Units Consumed: {DraftBill.units_consumed}
      </div>
      <div className={"display-box"}>Total Bill: ${DraftBill.total_bill}</div>
      <div className={"display-box"}>Due Date: {DraftBill.due_date}</div>

      <table>
        <thead>
          <tr>
            <td>Property ID</td>
            <td>Units Consumed</td>
          </tr>
        </thead>
        <tbody>
          {DraftBill.items.map((it) => {
            return (
              <tr>
                <td>{it.propertyId}</td>
                <td>{it.consumed_units}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <span className="display-box">
          Enter Coupon{" "}
          <input
            disabled={appliedCoupon}
            type="text"
            value={couponValue}
            onChange={(e) => setCouponValue(e.target.value)}
          />
          {appliedCoupon && (
            <button onClick={removeCoupon}>Remove Coupon</button>
          )}
          <button onClick={applyCoupon}>
            {appliedCoupon ? "Coupon Applied" : "Apply Coupon"}
          </button>
        </span>
        <button>Pay {totalPay}</button>
      </div>
    </div>
  );
}
