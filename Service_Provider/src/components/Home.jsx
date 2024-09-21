import React from "react"
import { useState } from "react"
import "./Home.css"

function Home() {

    const [addipvisible, setipvisibility] = useState(false);

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

        // new_service.innerHTML = `
        // <p>Name: ${name.value}</p>
        // <p>Desc: ${desc.value}</p>
        // <p>Price: ${price.value}/-</p>
        // `

        row_ele.appendChild(new_service);



        setipvisibility(false);

    }

    return (
        <>

            <div class="home">
                <button class="add btn" onClick={Add_btn}>Add Services</button>
                <button class="delete btn">Delete Services</button>
                <button class="update btn">Update Services</button>
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

                <div className="row">
                </div>
            </div>

        </>
    );
}

export default Home;