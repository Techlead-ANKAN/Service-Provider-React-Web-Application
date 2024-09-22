import React from "react"
import { useState } from "react"
import "./Home.css"

function Home() {

    const [addipvisible, setipvisibility] = useState(false);

    const [del_statement, setdelstatement] = useState(false);

    const [update_visible, setupdatevisible] = useState(false);

    const [newService, setNewService] = useState({ name: "", desc: "", price: "" })

    function Add_btn() {
        setipvisibility(true);
    }

    function Add_Service() {
        let name = document.getElementsByClassName("name")[0];
        let desc = document.getElementsByClassName("desc")[0];
        let price = document.getElementsByClassName("price")[0];

        setNewService({
            name: name.value,
            desc: desc.value,
            price: price.value
        })


        let row_ele = document.getElementsByClassName("row")[0];

        let new_service = document.createElement("div");
        new_service.setAttribute("class", "service");

        let name_price = document.createElement("div");
        name_price.setAttribute("class", "name_price");
        let p1 = document.createElement("p");
        p1.textContent = name.value;
        name_price.appendChild(p1);
        let p2 = document.createElement("p");
        p2.textContent = price.value + "/-";
        name_price.appendChild(p2);


        let description = document.createElement("div");
        description.setAttribute("class", "description");
        let text_ele = document.createElement("textarea");
        text_ele.value = desc.value;
        description.appendChild(text_ele);


        new_service.appendChild(name_price);
        new_service.appendChild(description);

        row_ele.appendChild(new_service);



        setipvisibility(false);

    }

    function Del_btn(){
        setdelstatement(true);
      
        const rowContainer = document.querySelector(".row"); // Select the parent container
      
        rowContainer.addEventListener('click', event => {
          if (event.target.classList.contains("service")) {
            event.target.remove(); // Remove the .service container
          }
        });
    }

    function Update_btn() {
        setupdatevisible(true);
    }


    return (
        <>

            <div class="home">
                <button class="add btn" onClick={Add_btn}>Add Services</button>
                <button class="delete btn" onClick={Del_btn}>Delete Services</button>
                <button class="update btn" onClick={Update_btn}>Update Services</button>
            </div>


            <div class="services">

                {addipvisible ? (
                    <div class="add_ip" >
                        <label>Name: </label>
                        <input class="name" type="text" placeholder="Enter Service name here" />
                        <label>Desc: </label>
                        <input class="desc" type="text" placeholder="Enter Service description here" />
                        <label>Price: </label>
                        <input class="price" type="text" placeholder="Enter Service price here" />
                        <button class="add_btn" onClick={Add_Service}>Add</button>
                    </div>
                ) : null}

                {del_statement ? (
                    <div class="del_line" >
                        Select Services to delete
                    </div>
                ) : null}


                {update_visible ? (
                    <div class="update_ip" >
                        <label>New Name: </label>
                        <input class="name" type="text" placeholder="Enter Service name here" />
                        <label>New Desc: </label>
                        <input class="desc" type="text" placeholder="Enter Service description here" />
                        <label>New Price: </label>
                        <input class="price" type="text" placeholder="Enter Service price here" />
                        <button class="update_btn" onClick={Add_Service}>Update</button>
                    </div>
                ) : null}   

                <div className="row">
                    {/* <div className="service">
                        <div className="name_price">
                            <p>MRI SCAN</p>
                            <p>10000/-</p>
                        </div>
                        <div className="description">
                            <textarea name="" id="" readOnly></textarea>
                        </div>
                    </div> */}
                </div>


            </div>

        </>
    );
}

export default Home;

