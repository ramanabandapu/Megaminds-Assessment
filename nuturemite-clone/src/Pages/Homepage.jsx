import React from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import {
  faBuildingLock,
  faCircleQuestion,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "../Components/Slider";

const Homepage = ({products}) => {
  return (
    <div className="home-container">
      <div className="static-div">
        <div>
          <FontAwesomeIcon
            icon={faTruck}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>FREE SHIPPING</h5>
          <p>Free shipping on all orders over ₹2000</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>MONEY BACK GUARENTEE</h5>
          <p>100% money back guarentee</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleQuestion}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>ONLINE SUPPORT 24/7</h5>
          <p>Whatsapp 8919993233 for online support</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBuildingLock}
            color="rgb(93,182,115)"
            fontSize="30px"
          />
          <h5>SECURE PAYMENT</h5>
          <p>100% secure payments in our portal</p>
        </div>
        <div></div>
      </div>

      <div className="static-2-div">
        <h1>Popular Departments</h1>
        <p>Products From These Categories Often Buy</p>
        <br />
        <h1>Most Popular</h1>
        <p>All our new arrivals in a exclusive brand selection</p>
      </div>

      <div className="sort-container">
       
        <div className="sort-div">
          <h3>SORT BY</h3>

          <CheckboxGroup colorScheme="blue" defaultValue={["View all"]}>
            <Stack
              spacing={[3]}
              color={"rgb(0,136,204)"}
              direction={["column"]}
            >
              <Checkbox value="View all">View all</Checkbox>
              <Checkbox value="Antioxidants">Antioxidants</Checkbox>
              <Checkbox value="Ayurvedic">Ayurvedic</Checkbox>
              <Checkbox value="Digital Health">Digital Health</Checkbox>
              <Checkbox value="General Health">General Health</Checkbox>
              <Checkbox value="Herbal, Speciality Supplements">
                Herbal, Speciality Supplements
              </Checkbox>
              <Checkbox value="Immune Health">Immune Health</Checkbox>
              <Checkbox value="Men Health">Men Health</Checkbox>
              <Checkbox value="Organics">Organics</Checkbox>
              <Checkbox value="Personal Care">Personal Care</Checkbox>
              <Checkbox value="Sexual Health">Sexual Health</Checkbox>
              <Checkbox value="Vitamins and Minerals">
                Vitamins and Minerals
              </Checkbox>
              <Checkbox value="Women Health">Women Health</Checkbox>
            </Stack>
          </CheckboxGroup>
        </div>
        <Slider />
      </div>
      
      <div className="static-3-div">
        <h1>This Week's Specials</h1>
        <p>All our new arrivals in a exclusive brand selection</p>
       
      </div>

<Slider/>


    </div>
  );
};

export default Homepage;
